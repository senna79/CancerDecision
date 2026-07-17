import type { DecisionMap, DecisionMapNode } from "@/types/database";

export type JourneyStepStatus = "done" | "current" | "upcoming" | "optional";

export type JourneyStep = {
  node: DecisionMapNode;
  status: JourneyStepStatus;
  primaryQuestionSlug: string | null;
  /** Patient-facing status language for the rail */
  stateLabel: string;
};

export type JourneyContext = {
  map: DecisionMap;
  currentNode: DecisionMapNode;
  currentIndex: number;
  steps: JourneyStep[];
  previous: {
    node: DecisionMapNode;
    questionSlug: string | null;
  } | null;
  next: {
    node: DecisionMapNode;
    questionSlug: string | null;
  } | null;
  /** Parallel or optional paths reachable from the current node */
  optionalBranches: Array<{
    node: DecisionMapNode;
    questionSlug: string | null;
    kind: "parallel" | "optional";
  }>;
};

function primarySlug(node: DecisionMapNode): string | null {
  return node.question_slugs[0] ?? null;
}

function stateLabel(node: DecisionMapNode): string {
  return node.state_label?.trim() || node.label.replace(/^\d+\.\s*/, "");
}

export function sortedNodes(map: DecisionMap): DecisionMapNode[] {
  return [...map.nodes].sort((a, b) => a.sort_order - b.sort_order);
}

function nodeById(
  map: DecisionMap,
  nodeId: string
): DecisionMapNode | undefined {
  return map.nodes.find((n) => n.id === nodeId);
}

/** Outgoing edges — explicit next_node_ids, else linear fallback by sort_order. */
export function outgoingNodes(
  map: DecisionMap,
  node: DecisionMapNode
): DecisionMapNode[] {
  if (node.next_node_ids && node.next_node_ids.length > 0) {
    return node.next_node_ids
      .map((id) => nodeById(map, id))
      .filter((n): n is DecisionMapNode => Boolean(n));
  }
  const nodes = sortedNodes(map);
  const index = nodes.findIndex((n) => n.id === node.id);
  if (index < 0 || index >= nodes.length - 1) return [];
  return [nodes[index + 1]];
}

function incomingNodes(
  map: DecisionMap,
  nodeId: string
): DecisionMapNode[] {
  return sortedNodes(map).filter((n) =>
    outgoingNodes(map, n).some((t) => t.id === nodeId)
  );
}

/** Nodes that can reach `nodeId` via reverse edges (decision ancestors). */
function ancestorIds(map: DecisionMap, nodeId: string): Set<string> {
  const seen = new Set<string>();
  const queue = [nodeId];
  while (queue.length > 0) {
    const current = queue.shift()!;
    for (const parent of incomingNodes(map, current)) {
      if (seen.has(parent.id)) continue;
      seen.add(parent.id);
      queue.push(parent.id);
    }
  }
  return seen;
}

export function findNodeByQuestionSlug(
  map: DecisionMap,
  questionSlug: string
): { node: DecisionMapNode; index: number } | null {
  const nodes = sortedNodes(map);
  const index = nodes.findIndex((n) => n.question_slugs.includes(questionSlug));
  if (index < 0) return null;
  return { node: nodes[index], index };
}

export function findNodeByStorySlug(
  map: DecisionMap,
  storySlug: string
): { node: DecisionMapNode; index: number } | null {
  const nodes = sortedNodes(map);
  const index = nodes.findIndex((n) => n.story_slugs.includes(storySlug));
  if (index < 0) return null;
  return { node: nodes[index], index };
}

function pickPreferred(
  candidates: DecisionMapNode[],
  preferRequired: boolean
): DecisionMapNode | null {
  if (candidates.length === 0) return null;
  if (preferRequired) {
    const required = candidates.find((n) => !n.optional);
    if (required) return required;
  }
  return candidates[0];
}

export function buildJourneyContext(
  map: DecisionMap,
  questionSlug: string
): JourneyContext | null {
  const nodes = sortedNodes(map);
  const found = findNodeByQuestionSlug(map, questionSlug);
  if (!found) return null;

  const { node: currentNode, index: currentIndex } = found;
  const doneIds = ancestorIds(map, currentNode.id);
  const outs = outgoingNodes(map, currentNode);
  const nextNode = pickPreferred(outs, true);
  const prevNode = pickPreferred(incomingNodes(map, currentNode.id), true);

  const steps: JourneyStep[] = nodes.map((node) => {
    const slug = primarySlug(node);
    const label = stateLabel(node);
    if (node.id === currentNode.id) {
      return {
        node,
        status: "current",
        primaryQuestionSlug: slug,
        stateLabel: label,
      };
    }
    if (doneIds.has(node.id)) {
      return {
        node,
        status: "done",
        primaryQuestionSlug: slug,
        stateLabel: label,
      };
    }
    if (node.optional) {
      return {
        node,
        status: "optional",
        primaryQuestionSlug: slug,
        stateLabel: label,
      };
    }
    return {
      node,
      status: "upcoming",
      primaryQuestionSlug: slug,
      stateLabel: label,
    };
  });

  const optionalBranches = outs
    .filter((n) => n.id !== nextNode?.id)
    .map((node) => ({
      node,
      questionSlug: primarySlug(node),
      kind: (node.optional ? "optional" : "parallel") as "optional" | "parallel",
    }));

  return {
    map,
    currentNode,
    currentIndex,
    steps,
    previous: prevNode
      ? { node: prevNode, questionSlug: primarySlug(prevNode) }
      : null,
    next: nextNode
      ? { node: nextNode, questionSlug: primarySlug(nextNode) }
      : null,
    optionalBranches,
  };
}

export function buildStoryJourneyLoop(
  map: DecisionMap,
  storySlug: string
): {
  currentNode: DecisionMapNode;
  nextQuestionSlug: string | null;
  nextNode: DecisionMapNode | null;
  connectedQuestionSlugs: string[];
  connectedTreatmentSlugs: string[];
  mapCancerSlugHint: string;
} | null {
  const found = findNodeByStorySlug(map, storySlug);
  if (!found) return null;
  const outs = outgoingNodes(map, found.node);
  const nextNode = pickPreferred(outs, true);
  return {
    currentNode: found.node,
    nextNode,
    nextQuestionSlug: nextNode ? primarySlug(nextNode) : null,
    connectedQuestionSlugs: found.node.question_slugs,
    connectedTreatmentSlugs: found.node.treatment_slugs,
    mapCancerSlugHint: "lung-cancer",
  };
}
