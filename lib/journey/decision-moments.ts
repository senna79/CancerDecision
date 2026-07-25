/**
 * Patient-facing decision-moment router — derived from Decision OS active moments.
 * See docs/Cancer_Decision_OS_Architecture_v1.0.md
 */

import { getActiveMoments } from "@/lib/os/build-decision-map";
import { BREAST_CANCER_DECISION_OS } from "@/lib/os/breast-cancer";
import { LUNG_CANCER_DECISION_OS } from "@/lib/os/lung-cancer";
import { PROSTATE_CANCER_DECISION_OS } from "@/lib/os/prostate-cancer";
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

/** Breast active Moments — hub situation router. */
export const BREAST_DECISION_MOMENTS: DecisionMoment[] = momentsFromOs(
  BREAST_CANCER_DECISION_OS,
  "breast-cancer"
);

/** Prostate Moments — Newly Diagnosed, Active Surveillance, Second Opinion live; more follow. */
export const PROSTATE_DECISION_MOMENTS: DecisionMoment[] = momentsFromOs(
  PROSTATE_CANCER_DECISION_OS,
  "prostate-cancer"
);

const MOMENTS_BY_CANCER: Record<string, DecisionMoment[]> = {
  "lung-cancer": LUNG_DECISION_MOMENTS,
  "breast-cancer": BREAST_DECISION_MOMENTS,
  "prostate-cancer": PROSTATE_DECISION_MOMENTS,
};

export function getDecisionMoment(
  id: string | null | undefined,
  cancerSlug?: string | null
) {
  if (!id) return null;
  if (cancerSlug && MOMENTS_BY_CANCER[cancerSlug]) {
    return MOMENTS_BY_CANCER[cancerSlug].find((m) => m.id === id) ?? null;
  }
  for (const moments of Object.values(MOMENTS_BY_CANCER)) {
    const hit = moments.find((m) => m.id === id);
    if (hit) return hit;
  }
  return null;
}

/** Look up the situation Moment id for an Entry question slug. */
export function momentIdForEntrySlug(slug: string): string | null {
  const href = `/questions/${slug}`;
  for (const moments of Object.values(MOMENTS_BY_CANCER)) {
    const hit = moments.find((m) => m.href === href);
    if (hit) return hit.id;
  }
  return null;
}

/**
 * Canonical return URL for a cancer’s situation → decision path map
 * (homepage / Entry “back to map” / prep sheet).
 */
export function cancerSituationMapHref(
  cancerSlug: string,
  momentId?: string | null
): string {
  const hash = "#decision-moment";
  if (momentId) {
    return `/cancers/${cancerSlug}?moment=${encodeURIComponent(momentId)}${hash}`;
  }
  return `/cancers/${cancerSlug}${hash}`;
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
