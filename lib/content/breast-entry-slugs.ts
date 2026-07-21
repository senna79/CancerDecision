/**
 * Breast Cancer P0 Entry slugs — locked for v1 journey.
 * See docs/Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md
 *
 * Build order: newly-diagnosed → subtype → sequencing → surgery → second-opinion → systemic.
 */

export const BREAST_NEWLY_DIAGNOSED_SLUG =
  "what-decisions-matter-most-after-new-breast-cancer-diagnosis";

export const BREAST_SUBTYPE_SLUG =
  "do-i-need-breast-cancer-subtype-results-before-choosing-treatment";

export const BREAST_SEQUENCING_SLUG =
  "should-breast-cancer-treatment-start-before-or-after-surgery";

/** Existing seed slug — rename only when Surgery Entry upgrades to Template v2. */
export const BREAST_SURGERY_SLUG = "how-to-compare-lumpectomy-and-mastectomy";

/** Existing seed slug — rename only when Second Opinion Entry upgrades. */
export const BREAST_SECOND_OPINION_SLUG =
  "when-is-breast-cancer-second-opinion-most-useful";

/** Existing seed slug — rename only when Systemic Entry upgrades. */
export const BREAST_TREATMENT_COMPARE_SLUG =
  "choose-systemic-therapy-options-breast-cancer";

/** Old thin page → upgraded Newly Diagnosed Entry. */
export const BREAST_LEGACY_QUESTION_REDIRECTS: Record<string, string> = {
  "what-to-ask-after-new-breast-cancer-diagnosis": `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`,
};

export function breastLegacyQuestionRedirect(
  slug: string
): string | undefined {
  return BREAST_LEGACY_QUESTION_REDIRECTS[slug];
}
