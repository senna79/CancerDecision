import type { DecisionMap, DecisionMapNode } from "@/types/database";

export type JourneyStepStatus = "done" | "current" | "upcoming" | "optional";

export type JourneyStep = {
  node: DecisionMapNode;
  status: JourneyStepStatus;
  primaryQuestionSlug: string | null;
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
  optionalBranches: Array<{
    node: DecisionMapNode;
    questionSlug: string | null;
  }>;
};

function primarySlug(node: DecisionMapNode): string | null {
  return node.question_slugs[0] ?? null;
}

function sortedNodes(map: DecisionMap): DecisionMapNode[] {
  return [...map.nodes].sort((a, b) => a.sort_order - b.sort_order);
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

export function buildJourneyContext(
  map: DecisionMap,
  questionSlug: string
): JourneyContext | null {
  const nodes = sortedNodes(map);
  const found = findNodeByQuestionSlug(map, questionSlug);
  if (!found) return null;

  const { node: currentNode, index: currentIndex } = found;
  const required = nodes.filter((n) => !n.optional);

  const steps: JourneyStep[] = nodes.map((node, index) => {
    if (node.optional && index !== currentIndex) {
      return {
        node,
        status: "optional",
        primaryQuestionSlug: primarySlug(node),
      };
    }
    if (index === currentIndex) {
      return {
        node,
        status: "current",
        primaryQuestionSlug: primarySlug(node),
      };
    }
    if (!node.optional && index < currentIndex) {
      return {
        node,
        status: "done",
        primaryQuestionSlug: primarySlug(node),
      };
    }
    // For optional current, mark earlier required as done if before
    if (currentNode.optional) {
      const requiredBefore = required.filter(
        (n) => n.sort_order < currentNode.sort_order
      );
      if (requiredBefore.some((n) => n.id === node.id)) {
        return {
          node,
          status: "done",
          primaryQuestionSlug: primarySlug(node),
        };
      }
    }
    return {
      node,
      status: "upcoming",
      primaryQuestionSlug: primarySlug(node),
    };
  });

  // Previous / next among required path when possible
  const requiredIndex = required.findIndex((n) => n.id === currentNode.id);
  let previous: JourneyContext["previous"] = null;
  let next: JourneyContext["next"] = null;

  if (requiredIndex >= 0) {
    if (requiredIndex > 0) {
      const prevNode = required[requiredIndex - 1];
      previous = { node: prevNode, questionSlug: primarySlug(prevNode) };
    }
    if (requiredIndex < required.length - 1) {
      const nextNode = required[requiredIndex + 1];
      next = { node: nextNode, questionSlug: primarySlug(nextNode) };
    }
  } else if (currentNode.optional) {
    // From optional branch, previous = last required before it; next = next required after it
    const before = [...required]
      .reverse()
      .find((n) => n.sort_order < currentNode.sort_order);
    const after = required.find((n) => n.sort_order > currentNode.sort_order);
    if (before) previous = { node: before, questionSlug: primarySlug(before) };
    if (after) next = { node: after, questionSlug: primarySlug(after) };
    // If no required after, next can be null (journey core complete)
  }

  const optionalBranches = nodes
    .filter((n) => n.optional && n.id !== currentNode.id)
    .map((node) => ({
      node,
      questionSlug: primarySlug(node),
    }));

  return {
    map,
    currentNode,
    currentIndex,
    steps,
    previous,
    next,
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
  mapCancerSlugHint: string;
} | null {
  const found = findNodeByStorySlug(map, storySlug);
  if (!found) return null;
  const nodes = sortedNodes(map);
  const required = nodes.filter((n) => !n.optional);
  const requiredIndex = required.findIndex((n) => n.id === found.node.id);
  let nextNode: DecisionMapNode | null = null;
  if (requiredIndex >= 0 && requiredIndex < required.length - 1) {
    nextNode = required[requiredIndex + 1];
  } else {
    // story may sit on a node; advance to next node in full list
    const next = nodes[found.index + 1] ?? null;
    nextNode = next;
  }
  return {
    currentNode: found.node,
    nextNode,
    nextQuestionSlug: nextNode ? primarySlug(nextNode) : null,
    mapCancerSlugHint: "lung-cancer",
  };
}
