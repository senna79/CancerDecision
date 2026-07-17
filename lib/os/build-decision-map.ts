import type { DecisionMap, DecisionMapNode } from "@/types/database";
import type { CancerDecisionOs, DecisionMomentDef } from "@/lib/os/types";

function isMapVisible(moment: DecisionMomentDef): boolean {
  return moment.status === "active";
}

/** Build a runtime DecisionMap from OS moment config (active nodes only). */
export function buildDecisionMapFromOs(
  os: CancerDecisionOs,
  cancerId: string,
  mapId: string
): DecisionMap {
  const visible = os.moments
    .filter(isMapVisible)
    .sort((a, b) => a.sort_order - b.sort_order);

  const visibleIds = new Set(visible.map((m) => m.id));

  const nodes: DecisionMapNode[] = visible.map((moment) => ({
    id: moment.id,
    label: moment.label,
    summary: moment.summary,
    sort_order: moment.sort_order,
    question_slugs: moment.question_slugs,
    treatment_slugs: moment.treatment_slugs,
    story_slugs: moment.story_slugs,
    state_label: moment.state_label,
    next_node_ids: moment.next_moment_ids.filter((id) => visibleIds.has(id)),
    optional: moment.optional,
    moment_id: moment.id,
    moment_slug: moment.slug,
    moment_tier: moment.tier,
    why_this_matters: moment.why_this_matters,
    facets: moment.facets,
  }));

  return {
    id: mapId,
    cancer_id: cancerId,
    title: os.title,
    intro: os.intro,
    nodes,
  };
}

export function getActiveMoments(os: CancerDecisionOs): DecisionMomentDef[] {
  return os.moments
    .filter((m) => m.status === "active")
    .sort((a, b) => a.sort_order - b.sort_order);
}

export function getMomentsByTier(
  os: CancerDecisionOs,
  tier: 1 | 2 | 3
): DecisionMomentDef[] {
  return os.moments
    .filter((m) => m.tier === tier)
    .sort((a, b) => a.sort_order - b.sort_order);
}
