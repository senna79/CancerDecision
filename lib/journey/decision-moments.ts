/**
 * Patient-facing decision-moment router — derived from Decision OS active moments.
 * See docs/Cancer_Decision_OS_Architecture_v1.0.md
 */

import { getActiveMoments } from "@/lib/os/build-decision-map";
import { BREAST_CANCER_DECISION_OS } from "@/lib/os/breast-cancer";
import { LUNG_CANCER_DECISION_OS } from "@/lib/os/lung-cancer";
import type { CancerDecisionOs } from "@/lib/os/types";

export type DecisionMoment = {
  id: string;
  label: string;
  hint: string;
  nextStep: string;
  href: string;
  nodeId?: string;
  mapHref?: string;
};

function momentsFromOs(
  os: CancerDecisionOs,
  cancerSlug: string
): DecisionMoment[] {
  return getActiveMoments(os)
    .filter((m) => m.patient_router && m.ai_entry_slug)
    .map((m) => ({
      id: m.slug,
      label: m.patient_router!.label,
      hint: m.patient_router!.hint,
      nextStep: m.patient_router!.nextStep,
      href: `/questions/${m.ai_entry_slug}`,
      nodeId: m.id,
      mapHref: `/cancers/${cancerSlug}#${m.id}`,
    }));
}

/**
 * Tier-1 + supporting active Moments for homepage / lung center.
 */
export const LUNG_DECISION_MOMENTS: DecisionMoment[] = momentsFromOs(
  LUNG_CANCER_DECISION_OS,
  "lung-cancer"
);

/** Breast P0 active Moments — hub situation router when breast journey is marked complete. */
export const BREAST_DECISION_MOMENTS: DecisionMoment[] = momentsFromOs(
  BREAST_CANCER_DECISION_OS,
  "breast-cancer"
);

export function getDecisionMoment(id: string | null | undefined) {
  if (!id) return null;
  return (
    LUNG_DECISION_MOMENTS.find((m) => m.id === id) ??
    BREAST_DECISION_MOMENTS.find((m) => m.id === id) ??
    null
  );
}

export function filterMomentsByIds(
  moments: DecisionMoment[],
  ids: string[]
): DecisionMoment[] {
  const order = new Map(ids.map((id, index) => [id, index]));
  return moments
    .filter((m) => order.has(m.id))
    .sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0));
}
