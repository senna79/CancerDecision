/**
 * Patient-facing decision-moment router — derived from Decision OS active moments.
 * See docs/Cancer_Decision_OS_Architecture_v1.0.md
 */

import { getActiveMoments } from "@/lib/os/build-decision-map";
import { LUNG_CANCER_DECISION_OS } from "@/lib/os/lung-cancer";

export type DecisionMoment = {
  id: string;
  label: string;
  hint: string;
  nextStep: string;
  href: string;
  nodeId?: string;
  mapHref?: string;
};

function activeRouterMoments(): DecisionMoment[] {
  return getActiveMoments(LUNG_CANCER_DECISION_OS)
    .filter((m) => m.patient_router && m.ai_entry_slug)
    .map((m) => ({
      id: m.slug,
      label: m.patient_router!.label,
      hint: m.patient_router!.hint,
      nextStep: m.patient_router!.nextStep,
      href: `/questions/${m.ai_entry_slug}`,
      nodeId: m.id,
      mapHref: `/cancers/lung-cancer#${m.id}`,
    }));
}

/**
 * Tier-1 active Moments for homepage / lung center.
 * Plus one intentional alias: recurrence re-enters Treatment Comparison
 * (Moment still planned in the OS skeleton — not a sixth map node).
 */
export const LUNG_DECISION_MOMENTS: DecisionMoment[] = [
  ...activeRouterMoments(),
  {
    id: "recurrence",
    label: "My cancer came back, or the plan suddenly changed",
    hint: "Re-enter treatment comparison — recurrence Moment is planned in the OS skeleton.",
    nextStep: "Next: Direct answer + What to do next on treatment comparison.",
    href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
    nodeId: "node-compare",
    mapHref: "/cancers/lung-cancer#node-compare",
  },
];

export function getDecisionMoment(id: string | null | undefined) {
  if (!id) return null;
  return LUNG_DECISION_MOMENTS.find((m) => m.id === id) ?? null;
}
