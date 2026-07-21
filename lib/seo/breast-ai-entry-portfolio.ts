/**
 * Breast Cancer AI Entry Portfolio — P0 acquisition layer.
 * See docs/Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md
 */

import {
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/breast-entry-slugs";

export type BreastAiEntryId =
  | "breast-newly-diagnosed"
  | "breast-subtype-testing"
  | "breast-treatment-sequencing"
  | "breast-surgery-decision"
  | "breast-second-opinion"
  | "breast-treatment-comparison";

export type BreastAiEntry = {
  id: BreastAiEntryId;
  label: string;
  decisionLabel: string;
  slug: string;
  momentId: string;
  searchIntents: string[];
  relatedEntryIds: BreastAiEntryId[];
};

export const BREAST_AI_ENTRY_PORTFOLIO: BreastAiEntry[] = [
  {
    id: "breast-newly-diagnosed",
    label: "Newly diagnosed",
    decisionLabel: "What happens next after a new diagnosis",
    slug: BREAST_NEWLY_DIAGNOSED_SLUG,
    momentId: "newly-diagnosed",
    searchIntents: [
      "just diagnosed with breast cancer what happens next",
      "newly diagnosed breast cancer next steps",
      "what to do after a breast cancer diagnosis",
      "breast cancer diagnosis what next",
      "what should I ask after breast cancer diagnosis",
      "questions to ask oncologist after breast cancer diagnosis",
      "how soon do I need treatment after breast cancer diagnosis",
      "should I start treatment right away after breast cancer diagnosis",
      "do I need genetic counseling before breast cancer surgery",
    ],
    relatedEntryIds: [
      "breast-subtype-testing",
      "breast-treatment-sequencing",
      "breast-second-opinion",
      "breast-surgery-decision",
    ],
  },
  {
    id: "breast-subtype-testing",
    label: "Subtype testing",
    decisionLabel: "Whether subtype results are needed before treatment",
    slug: BREAST_SUBTYPE_SLUG,
    momentId: "subtype-testing",
    searchIntents: [
      "do I need breast cancer subtype results before treatment",
      "ER PR HER2 testing before breast cancer treatment",
      "biomarker testing breast cancer before choosing treatment",
    ],
    relatedEntryIds: [
      "breast-newly-diagnosed",
      "breast-treatment-sequencing",
      "breast-treatment-comparison",
    ],
  },
  {
    id: "breast-treatment-sequencing",
    label: "Treatment sequencing",
    decisionLabel: "Treatment before or after surgery",
    slug: BREAST_SEQUENCING_SLUG,
    momentId: "treatment-sequencing",
    searchIntents: [
      "should breast cancer treatment start before or after surgery",
      "neoadjuvant vs adjuvant breast cancer",
      "chemo before surgery breast cancer",
    ],
    relatedEntryIds: [
      "breast-subtype-testing",
      "breast-surgery-decision",
      "breast-treatment-comparison",
    ],
  },
  {
    id: "breast-surgery-decision",
    label: "Surgery choice",
    decisionLabel: "Lumpectomy vs mastectomy",
    slug: BREAST_SURGERY_SLUG,
    momentId: "surgery-decision",
    searchIntents: [
      "how should I choose between lumpectomy and mastectomy",
      "lumpectomy vs mastectomy how to choose",
    ],
    relatedEntryIds: [
      "breast-treatment-sequencing",
      "breast-second-opinion",
      "breast-newly-diagnosed",
    ],
  },
  {
    id: "breast-second-opinion",
    label: "Second opinion",
    decisionLabel: "Whether a second opinion may help",
    slug: BREAST_SECOND_OPINION_SLUG,
    momentId: "second-opinion",
    searchIntents: [
      "should I get a second opinion before breast cancer surgery",
      "breast cancer second opinion before treatment",
    ],
    relatedEntryIds: [
      "breast-newly-diagnosed",
      "breast-surgery-decision",
      "breast-treatment-sequencing",
    ],
  },
  {
    id: "breast-treatment-comparison",
    label: "Systemic therapy options",
    decisionLabel: "Systemic options by subtype",
    slug: BREAST_TREATMENT_COMPARE_SLUG,
    momentId: "treatment-comparison",
    searchIntents: [
      "how do I choose systemic therapy for my breast cancer subtype",
      "breast cancer treatment options by subtype",
    ],
    relatedEntryIds: [
      "breast-subtype-testing",
      "breast-treatment-sequencing",
      "breast-second-opinion",
    ],
  },
];

const breastSlugSet = new Set(BREAST_AI_ENTRY_PORTFOLIO.map((e) => e.slug));
const breastById = Object.fromEntries(
  BREAST_AI_ENTRY_PORTFOLIO.map((e) => [e.id, e])
) as Record<BreastAiEntryId, BreastAiEntry>;

export function isBreastAiEntrySlug(slug: string): boolean {
  return breastSlugSet.has(slug);
}

export function getBreastAiEntryBySlug(slug: string): BreastAiEntry | null {
  return BREAST_AI_ENTRY_PORTFOLIO.find((e) => e.slug === slug) ?? null;
}

export function getRelatedBreastAiEntries(
  entry: BreastAiEntry
): BreastAiEntry[] {
  return entry.relatedEntryIds.map((id) => breastById[id]).filter(Boolean);
}
