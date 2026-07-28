/**
 * Cancer Decision Graph — previous / next / related edges from OS + portfolio.
 * Lung pattern: docs/Lung_Cancer_Decision_Graph_v1.0.md
 * Breast / prostate use the same builder against their OS + AI portfolios.
 */

import { BREAST_CANCER_DECISION_OS } from "@/lib/os/breast-cancer";
import { LUNG_CANCER_DECISION_OS } from "@/lib/os/lung-cancer";
import { PROSTATE_CANCER_DECISION_OS } from "@/lib/os/prostate-cancer";
import type { CancerDecisionOs, DecisionMomentDef } from "@/lib/os/types";
import { LUNG_AI_ENTRY_PORTFOLIO } from "@/lib/seo/ai-entry-portfolio";
import { BREAST_AI_ENTRY_PORTFOLIO } from "@/lib/seo/breast-ai-entry-portfolio";
import { PROSTATE_AI_ENTRY_PORTFOLIO } from "@/lib/seo/prostate-ai-entry-portfolio";

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

/** Minimal portfolio shape used for related edges (lung / breast / prostate). */
export type DecisionGraphPortfolioEntry = {
  id: string;
  slug: string;
  relatedEntryIds: readonly string[];
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

/**
 * Build the canonical Decision Graph for an OS + portfolio.
 * - next: from `next_moment_ids` (active only)
 * - previous: reverse of next
 * - related: portfolio relatedEntryIds mapped to moments (excluding previous/next)
 */
export function buildDecisionGraph(
  os: CancerDecisionOs,
  portfolio: readonly DecisionGraphPortfolioEntry[]
): DecisionGraph {
  const moments = activeMoments(os);
  const byId = new Map(moments.map((m) => [m.id, m]));
  const portfolioById = new Map(portfolio.map((e) => [e.id, e]));
  const portfolioBySlug = new Map(portfolio.map((e) => [e.slug, e]));

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
      const entry = portfolioBySlug.get(entrySlug);
      if (entry) {
        for (const relatedId of entry.relatedEntryIds) {
          const relatedEntry = portfolioById.get(relatedId);
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

export const LUNG_DECISION_GRAPH = buildDecisionGraph(
  LUNG_CANCER_DECISION_OS,
  LUNG_AI_ENTRY_PORTFOLIO
);

export const BREAST_DECISION_GRAPH = buildDecisionGraph(
  BREAST_CANCER_DECISION_OS,
  BREAST_AI_ENTRY_PORTFOLIO
);

export const PROSTATE_DECISION_GRAPH = buildDecisionGraph(
  PROSTATE_CANCER_DECISION_OS,
  PROSTATE_AI_ENTRY_PORTFOLIO
);

export const DECISION_GRAPHS_BY_CANCER: Record<string, DecisionGraph> = {
  "lung-cancer": LUNG_DECISION_GRAPH,
  "breast-cancer": BREAST_DECISION_GRAPH,
  "prostate-cancer": PROSTATE_DECISION_GRAPH,
};

export function getDecisionGraphForCancer(
  cancerSlug: string | null | undefined
): DecisionGraph | null {
  if (!cancerSlug) return null;
  return DECISION_GRAPHS_BY_CANCER[cancerSlug] ?? null;
}

function findNodeByAiEntrySlug(
  graph: DecisionGraph,
  aiEntrySlug: string
): DecisionGraphNode | null {
  return (
    graph.nodes.find(
      (n) =>
        n.aiEntrySlug === aiEntrySlug ||
        n.href === `/questions/${aiEntrySlug}`
    ) ?? null
  );
}

/**
 * Resolve a graph node by Entry slug.
 * Prefer `cancerSlug` when known (moment ids collide across cancers).
 * Falls back to scanning all graphs when cancer is unknown.
 */
export function getDecisionGraphNodeByAiEntrySlug(
  aiEntrySlug: string,
  cancerSlugOrGraph?: string | DecisionGraph | null
): DecisionGraphNode | null {
  if (cancerSlugOrGraph && typeof cancerSlugOrGraph !== "string") {
    return findNodeByAiEntrySlug(cancerSlugOrGraph, aiEntrySlug);
  }

  const scoped = getDecisionGraphForCancer(cancerSlugOrGraph);
  if (scoped) return findNodeByAiEntrySlug(scoped, aiEntrySlug);

  for (const graph of Object.values(DECISION_GRAPHS_BY_CANCER)) {
    const node = findNodeByAiEntrySlug(graph, aiEntrySlug);
    if (node) return node;
  }
  return null;
}

/**
 * Resolve by moment id within a graph.
 * Moment ids are not unique across cancers — always pass a graph when possible.
 */
export function getDecisionGraphNodeById(
  id: string,
  graph: DecisionGraph = LUNG_DECISION_GRAPH
): DecisionGraphNode | null {
  return graph.nodes.find((n) => n.id === id) ?? null;
}
