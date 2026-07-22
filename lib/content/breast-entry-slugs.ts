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

/** Surgery Entry (P0 #4) — Template v2; slug kept for existing links. */
export const BREAST_SURGERY_SLUG = "how-to-compare-lumpectomy-and-mastectomy";

/** Second Opinion Entry (P0 #5) — Template v2; slug kept for existing links. */
export const BREAST_SECOND_OPINION_SLUG =
  "when-is-breast-cancer-second-opinion-most-useful";

/** Systemic Entry (P0 #6) — Template v2; slug kept for existing links. */
export const BREAST_TREATMENT_COMPARE_SLUG =
  "choose-systemic-therapy-options-breast-cancer";

/** Genetics Entry (P1 first / P0.5) — Template v2. */
export const BREAST_GENETICS_SLUG =
  "do-i-need-genetic-counseling-before-breast-cancer-surgery";

/** Reconstruction Entry (P1 #8) — Template v2. */
export const BREAST_RECONSTRUCTION_SLUG =
  "how-do-breast-reconstruction-timing-and-choices-fit";

/** Radiation Entry (P1 #9) — Template v2. */
export const BREAST_RADIATION_SLUG =
  "how-should-radiation-factor-into-breast-cancer-treatment";

/** Care team / center Entry (P1 #10) — Template v2. */
export const BREAST_CARE_TEAM_SLUG =
  "how-do-i-choose-a-breast-cancer-care-team-or-center";

/** Metastatic / Stage IV Entry (P1 #11) — Template v2. */
export const BREAST_METASTATIC_SLUG =
  "what-are-my-options-for-metastatic-stage-iv-breast-cancer";

/** Recurrence Entry (P1 #12) — Template v2. */
export const BREAST_RECURRENCE_SLUG =
  "what-should-i-sort-out-if-breast-cancer-comes-back";

/** Quality of life Entry (P2 #13) — Template v2. */
export const BREAST_QOL_SLUG =
  "how-should-quality-of-life-factor-into-breast-cancer-decisions";

/** Practical fit pointer (P2 #14) — Template v2 stub, like lung. */
export const BREAST_PRACTICAL_FIT_SLUG =
  "can-my-breast-cancer-treatment-plan-work-with-my-real-life";

/** Clinical trial Entry (P2 #15) — Template v2. */
export const BREAST_CLINICAL_TRIAL_SLUG =
  "should-i-consider-a-clinical-trial-for-breast-cancer";

/** Follow-up / monitoring Entry (P2 #16) — Template v2. */
export const BREAST_FOLLOW_UP_SLUG =
  "how-do-i-monitor-my-health-after-breast-cancer-treatment";

/** Global care / abroad Entry (P2 #17, optional) — Template v2. */
export const BREAST_GLOBAL_CARE_SLUG =
  "when-to-consider-breast-cancer-care-abroad";

/** Old thin pages → Decision Entries. */
export const BREAST_LEGACY_QUESTION_REDIRECTS: Record<string, string> = {
  "what-to-ask-after-new-breast-cancer-diagnosis": `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`,
  "how-breast-cancer-treatment-costs-accumulate": `/questions/${BREAST_PRACTICAL_FIT_SLUG}`,
};

export function breastLegacyQuestionRedirect(
  slug: string
): string | undefined {
  return BREAST_LEGACY_QUESTION_REDIRECTS[slug];
}

export function isRetiredBreastQuestionSlug(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(
    BREAST_LEGACY_QUESTION_REDIRECTS,
    slug
  );
}
