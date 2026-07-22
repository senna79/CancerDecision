/**
 * Breast Cancer AI Entry Portfolio — P0 acquisition layer.
 * See docs/Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md
 */

import {
  BREAST_CARE_TEAM_SLUG,
  BREAST_GENETICS_SLUG,
  BREAST_METASTATIC_SLUG,
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_RECURRENCE_SLUG,
  BREAST_RADIATION_SLUG,
  BREAST_RECONSTRUCTION_SLUG,
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
  | "breast-treatment-comparison"
  | "breast-genetics"
  | "breast-reconstruction"
  | "breast-radiation"
  | "breast-care-team"
  | "breast-metastatic"
  | "breast-recurrence";

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
    ],
    relatedEntryIds: [
      "breast-subtype-testing",
      "breast-genetics",
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
      "breast-genetics",
      "breast-treatment-sequencing",
      "breast-treatment-comparison",
    ],
  },
  {
    id: "breast-genetics",
    label: "Genetic counseling",
    decisionLabel: "Genetic counseling / BRCA before surgery",
    slug: BREAST_GENETICS_SLUG,
    momentId: "genetics",
    searchIntents: [
      "do I need genetic counseling before breast cancer surgery",
      "BRCA testing before breast cancer surgery",
      "genetic testing change lumpectomy vs mastectomy",
      "should I wait for genetic results before mastectomy",
    ],
    relatedEntryIds: [
      "breast-surgery-decision",
      "breast-subtype-testing",
      "breast-newly-diagnosed",
      "breast-second-opinion",
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
      "breast-radiation",
      "breast-reconstruction",
      "breast-genetics",
      "breast-treatment-sequencing",
      "breast-second-opinion",
      "breast-newly-diagnosed",
    ],
  },
  {
    id: "breast-reconstruction",
    label: "Reconstruction timing",
    decisionLabel: "Reconstruction timing and choices",
    slug: BREAST_RECONSTRUCTION_SLUG,
    momentId: "reconstruction",
    searchIntents: [
      "breast reconstruction timing after mastectomy",
      "immediate vs delayed breast reconstruction",
      "does radiation affect breast reconstruction",
      "do I have to reconstruct after mastectomy",
    ],
    relatedEntryIds: [
      "breast-surgery-decision",
      "breast-radiation",
      "breast-genetics",
      "breast-treatment-sequencing",
      "breast-second-opinion",
    ],
  },
  {
    id: "breast-radiation",
    label: "Radiation decisions",
    decisionLabel: "How radiation fits the local plan",
    slug: BREAST_RADIATION_SLUG,
    momentId: "radiation-decision",
    searchIntents: [
      "radiation after lumpectomy breast cancer",
      "do I need radiation after mastectomy",
      "breast cancer radiation schedule side effects",
      "does radiation affect breast reconstruction timing",
    ],
    relatedEntryIds: [
      "breast-surgery-decision",
      "breast-reconstruction",
      "breast-treatment-sequencing",
      "breast-second-opinion",
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
      "breast-care-team",
      "breast-newly-diagnosed",
      "breast-surgery-decision",
      "breast-treatment-sequencing",
    ],
  },
  {
    id: "breast-care-team",
    label: "Care team / center",
    decisionLabel: "Choosing a breast cancer care team",
    slug: BREAST_CARE_TEAM_SLUG,
    momentId: "care-center-expertise",
    searchIntents: [
      "how do I choose a breast cancer care team or center",
      "do I need a major breast cancer center",
      "breast cancer multidisciplinary team",
      "specialist vs local breast cancer treatment",
    ],
    relatedEntryIds: [
      "breast-second-opinion",
      "breast-surgery-decision",
      "breast-treatment-sequencing",
      "breast-genetics",
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
      "breast-metastatic",
    ],
  },
  {
    id: "breast-metastatic",
    label: "Metastatic / Stage IV",
    decisionLabel: "Options for metastatic breast cancer",
    slug: BREAST_METASTATIC_SLUG,
    momentId: "stage-iv-options",
    searchIntents: [
      "what are my options for metastatic stage IV breast cancer",
      "stage 4 breast cancer treatment options",
      "metastatic breast cancer next steps",
      "does stage IV breast cancer mean nothing can be done",
    ],
    relatedEntryIds: [
      "breast-treatment-comparison",
      "breast-second-opinion",
      "breast-care-team",
      "breast-subtype-testing",
      "breast-recurrence",
    ],
  },
  {
    id: "breast-recurrence",
    label: "Recurrence",
    decisionLabel: "What to sort out if breast cancer comes back",
    slug: BREAST_RECURRENCE_SLUG,
    momentId: "recurrence",
    searchIntents: [
      "what should I sort out if breast cancer comes back",
      "breast cancer recurrence treatment options",
      "does breast cancer recurrence mean treatment failed",
      "local vs distant breast cancer recurrence",
    ],
    relatedEntryIds: [
      "breast-metastatic",
      "breast-treatment-comparison",
      "breast-second-opinion",
      "breast-care-team",
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
