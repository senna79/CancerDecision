/**
 * Indexation policy: lung, breast, and prostate journeys are open for crawl.
 * Other “in development” cancers and personal tools stay reachable but noindex.
 */

import { isRetiredBreastQuestionSlug } from "@/lib/content/breast-entry-slugs";
import { isThinProstateQuestionSlug } from "@/lib/content/prostate-entry-slugs";
import { isRetiredLungQuestionSlug } from "@/lib/seo/retired-lung-questions";

/** @deprecated Prefer INDEXABLE_CANCER_SLUGS — kept for older call sites. */
export const INDEXABLE_CANCER_SLUG = "lung-cancer";

export const INDEXABLE_CANCER_SLUGS = [
  "lung-cancer",
  "breast-cancer",
  "prostate-cancer",
] as const;

export type IndexableCancerSlug = (typeof INDEXABLE_CANCER_SLUGS)[number];

export const LUNG_SUPPORTING_GUIDE_PATHS = [
  "/cancers/lung-cancer/understanding-types",
  "/cancers/lung-cancer/understanding-stage",
  "/cancers/lung-cancer/treatment-landscape",
] as const;

export const BREAST_SUPPORTING_GUIDE_PATHS = [
  "/cancers/breast-cancer/understanding-subtype",
  "/cancers/breast-cancer/understanding-stage",
  "/cancers/breast-cancer/treatment-landscape",
] as const;

export const PROSTATE_SUPPORTING_GUIDE_PATHS = [
  "/cancers/prostate-cancer/understanding-risk",
  "/cancers/prostate-cancer/understanding-stage",
  "/cancers/prostate-cancer/treatment-landscape",
] as const;

/** All orientation / supporting guides that should appear in sitemap. */
export const SUPPORTING_GUIDE_PATHS = [
  ...LUNG_SUPPORTING_GUIDE_PATHS,
  ...BREAST_SUPPORTING_GUIDE_PATHS,
  ...PROSTATE_SUPPORTING_GUIDE_PATHS,
] as const;

export function isIndexableCancerSlug(
  slug: string | null | undefined
): slug is IndexableCancerSlug {
  return (
    slug != null &&
    (INDEXABLE_CANCER_SLUGS as readonly string[]).includes(slug)
  );
}

/**
 * Indexable question pages for lung / breast / prostate
 * (minus retired orphans and thin prostate stubs awaiting Template v2).
 */
export function isIndexableQuestionSlug(
  questionSlug: string,
  cancerSlug: string | null | undefined
): boolean {
  if (!isIndexableCancerSlug(cancerSlug)) return false;
  if (isRetiredLungQuestionSlug(questionSlug)) return false;
  if (isRetiredBreastQuestionSlug(questionSlug)) return false;
  if (isThinProstateQuestionSlug(questionSlug)) return false;
  return true;
}

/**
 * A treatment is indexable when linked to at least one indexable cancer
 * via cancer_treatments (shared modalities may still index if used by lung/breast/prostate).
 */
export function isIndexableTreatmentForCancers(
  linkedCancerSlugs: readonly string[]
): boolean {
  return linkedCancerSlugs.some((slug) => isIndexableCancerSlug(slug));
}
