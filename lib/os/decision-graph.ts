/**
 * Lung Cancer Decision Graph v1.0
 * Normalized previous / next / related edges from OS + portfolio.
 * See docs/Lung_Cancer_Decision_Graph_v1.0.md
 */

import { LUNG_CANCER_DECISION_OS } from "@/lib/os/lung-cancer";
import type { CancerDecisionOs, DecisionMomentDef } from "@/lib/os/types";
import {
  LUNG_AI_ENTRY_PORTFOLIO,
  type AiEntry,
} from "@/lib/seo/ai-entry-portfolio";

export type DecisionGraphLink = {
  id: string;
  slug: string;
  label: string;
  stateLabel: string;
  href: string | null;
  optional?: boolean;
};

export type DecisionGraphNode = {
  id: string;
  slug: string;
  label: string;
  stateLabel: string;
  summary: string;
  tier: 1 | 2 | 3;
  status: DecisionMomentDef["status"];
  optional?: boolean;
  aiEntrySlug: string | null;
  href: string | null;
  previous: DecisionGraphLink[];
  next: DecisionGraphLink[];
  related: DecisionGraphLink[];
};

export type DecisionGraph = {
  cancerSlug: string;
  title: string;
  intro: string;
  nodes: DecisionGraphNode[];
};

function cleanLabel(label: string): string {
  return label.replace(/^\d+\.\s*/, "");
}

function stateLabel(moment: DecisionMomentDef): string {
  return moment.state_label?.trim() || cleanLabel(moment.label);
}

function hrefFor(moment: DecisionMomentDef): string | null {
  return moment.ai_entry_slug
    ? `/questions/${moment.ai_entry_slug}`
    : null;
}

function toLink(moment: DecisionMomentDef): DecisionGraphLink {
  return {
    id: moment.id,
    slug: moment.slug,
    label: cleanLabel(moment.label),
    stateLabel: stateLabel(moment),
    href: hrefFor(moment),
    optional: moment.optional,
  };
}

function activeMoments(os: CancerDecisionOs): DecisionMomentDef[] {
  return os.moments
    .filter((m) => m.status === "active")
    .sort((a, b) => a.sort_order - b.sort_order);
}

function momentByAiEntrySlug(
  moments: DecisionMomentDef[],
  slug: string
): DecisionMomentDef | undefined {
  return moments.find(
    (m) => m.ai_entry_slug === slug || m.question_slugs.includes(slug)
  );
}

function portfolioBySlug(slug: string): AiEntry | undefined {
  return LUNG_AI_ENTRY_PORTFOLIO.find((e) => e.slug === slug);
}

/**
 * Build the canonical Decision Graph for an OS.
 * - next: from `next_moment_ids` (active only)
 * - previous: reverse of next
 * - related: portfolio relatedEntryIds mapped to moments (excluding previous/next)
 */
export function buildDecisionGraph(
  os: CancerDecisionOs = LUNG_CANCER_DECISION_OS
): DecisionGraph {
  const moments = activeMoments(os);
  const byId = new Map(moments.map((m) => [m.id, m]));

  const previousIds = new Map<string, string[]>();
  for (const moment of moments) {
    for (const nextId of moment.next_moment_ids) {
      if (!byId.has(nextId)) continue;
      const list = previousIds.get(nextId) ?? [];
      list.push(moment.id);
      previousIds.set(nextId, list);
    }
  }

  const nodes: DecisionGraphNode[] = moments.map((moment) => {
    const next = moment.next_moment_ids
      .map((id) => byId.get(id))
      .filter((m): m is DecisionMomentDef => !!m)
      .map(toLink);

    const previous = (previousIds.get(moment.id) ?? [])
      .map((id) => byId.get(id))
      .filter((m): m is DecisionMomentDef => !!m)
      .map(toLink);

    const exclude = new Set([
      moment.id,
      ...previous.map((l) => l.id),
      ...next.map((l) => l.id),
    ]);

    const related: DecisionGraphLink[] = [];
    const entrySlug = moment.ai_entry_slug;
    if (entrySlug) {
      const entry = portfolioBySlug(entrySlug);
      if (entry) {
        for (const relatedId of entry.relatedEntryIds) {
          const relatedEntry = LUNG_AI_ENTRY_PORTFOLIO.find(
            (e) => e.id === relatedId
          );
          if (!relatedEntry) continue;
          const relatedMoment = momentByAiEntrySlug(
            moments,
            relatedEntry.slug
          );
          if (!relatedMoment || exclude.has(relatedMoment.id)) continue;
          related.push(toLink(relatedMoment));
          exclude.add(relatedMoment.id);
        }
      }
    }

    return {
      id: moment.id,
      slug: moment.slug,
      label: cleanLabel(moment.label),
      stateLabel: stateLabel(moment),
      summary: moment.summary,
      tier: moment.tier,
      status: moment.status,
      optional: moment.optional,
      aiEntrySlug: moment.ai_entry_slug,
      href: hrefFor(moment),
      previous,
      next,
      related,
    };
  });

  return {
    cancerSlug: os.cancer_slug,
    title: os.title,
    intro: os.intro,
    nodes,
  };
}

export const LUNG_DECISION_GRAPH = buildDecisionGraph();

export function getDecisionGraphNodeByAiEntrySlug(
  aiEntrySlug: string,
  graph: DecisionGraph = LUNG_DECISION_GRAPH
): DecisionGraphNode | null {
  return (
    graph.nodes.find(
      (n) =>
        n.aiEntrySlug === aiEntrySlug ||
        n.href === `/questions/${aiEntrySlug}`
    ) ?? null
  );
}

export function getDecisionGraphNodeById(
  id: string,
  graph: DecisionGraph = LUNG_DECISION_GRAPH
): DecisionGraphNode | null {
  return graph.nodes.find((n) => n.id === id) ?? null;
}
