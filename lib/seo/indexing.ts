/**
 * Indexation policy: only the complete lung journey is meant for broad crawl.
 * Thin “in development” cancers and personal tools stay reachable but noindex.
 */

export const INDEXABLE_CANCER_SLUG = "lung-cancer";

export const LUNG_SUPPORTING_GUIDE_PATHS = [
  "/cancers/lung-cancer/understanding-types",
  "/cancers/lung-cancer/understanding-stage",
  "/cancers/lung-cancer/treatment-landscape",
] as const;

export function isIndexableCancerSlug(slug: string | null | undefined): boolean {
  return slug === INDEXABLE_CANCER_SLUG;
}
