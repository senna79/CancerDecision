/**
 * Breast Cancer AI Entry Portfolio — P0 acquisition layer.
 * See docs/Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md
 */

import {
  BREAST_CARE_TEAM_SLUG,
  BREAST_GENETICS_SLUG,
  BREAST_METASTATIC_SLUG,
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_CLINICAL_TRIAL_SLUG,
  BREAST_FOLLOW_UP_SLUG,
  BREAST_GLOBAL_CARE_SLUG,
  BREAST_PRACTICAL_FIT_SLUG,
  BREAST_QOL_SLUG,
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
  | "breast-recurrence"
  | "breast-quality-of-life"
  | "breast-practical-fit"
  | "breast-clinical-trial"
  | "breast-follow-up"
  | "breast-global-care";

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
      "why do I need more scans after breast cancer diagnosis",
      "how long from breast cancer diagnosis to surgery",
      "what should I expect at first oncology appointment breast cancer",
      "what should I ask after breast cancer diagnosis",
      "questions to ask oncologist after breast cancer diagnosis",
      "how soon do I need treatment after breast cancer diagnosis",
      "should I start treatment right away after breast cancer diagnosis",
      "breast cancer stage treatment timeline",
      "does stage decide breast cancer treatment timeline",
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
      "do I need ER PR HER2 results before choosing treatment",
      "ER PR HER2 testing before breast cancer treatment",
      "biomarker testing breast cancer before choosing treatment",
      "what does PR-positive mean breast cancer",
      "what does progesterone receptor positive mean",
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
      "is BRCA the only gene that matters breast cancer",
      "can you get breast cancer without the BRCA gene",
      "if my parent had breast cancer what does that mean for me",
      "does a positive genetic result change breast cancer surgery",
      "genetic testing change lumpectomy vs mastectomy",
      "should I wait for genetic results before surgery",
      "should I wait for genetic results before mastectomy",
      "how long do genetic results take breast cancer",
      "do I need genetic testing for triple-negative breast cancer",
      "what does the BRCA test show",
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
      "why do chemo before surgery breast cancer",
      "is chemo before surgery normal",
      "what is neoadjuvant chemotherapy breast cancer",
      "do I need chemo if lymph nodes are clear breast cancer",
      "how soon after surgery does chemo start",
      "time gap between surgery and chemotherapy breast cancer",
      "chemo or radiation first breast cancer",
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
      "pros and cons of lumpectomy vs mastectomy",
      "is lumpectomy as safe as mastectomy",
      "lumpectomy vs mastectomy recovery time",
      "double mastectomy recovery",
      "lymphedema after breast cancer surgery",
      "should I remove the other breast breast cancer",
      "do I need radiation after lumpectomy",
      "does subtype change lumpectomy vs mastectomy",
      "lumpectomy vs mastectomy for HER2 or triple negative",
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
      "how should I choose immediate vs delayed reconstruction",
      "does radiation change breast reconstruction",
      "does radiation affect breast reconstruction",
      "how long after radiation can I have breast reconstruction",
      "do I have to reconstruct after mastectomy",
      "what are tissue expanders in breast reconstruction",
      "what are the stages of breast reconstruction",
      "does radiation damage breast implants",
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
      "do I need radiation after lumpectomy",
      "what if I skip radiation after lumpectomy",
      "can I say no to radiation breast cancer",
      "radiation after lumpectomy breast cancer",
      "do I need radiation after mastectomy",
      "how long is breast cancer radiation",
      "5 day radiation treatment for breast cancer",
      "is shorter radiation an option breast cancer",
      "when does radiation start after breast cancer surgery",
      "side effects of radiation after lumpectomy",
      "breast cancer radiation schedule side effects",
      "does radiation change reconstruction",
      "does radiation affect breast reconstruction timing",
      "how long can I wait for radiation after surgery",
      "daily life during breast cancer radiation",
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
      "how to get a second opinion for breast cancer",
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
      "how should I choose a breast cancer hospital",
      "best breast cancer hospitals",
      "how do I pick a breast cancer surgeon",
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
      "ER positive PR positive HER2 negative breast cancer treatment",
      "what does ER PR HER2 negative mean for treatment",
      "is estrogen receptor positive good or bad",
      "HER2 positive breast cancer treatment protocol",
      "when do you need chemo for breast cancer",
      "does stage 1 breast cancer need chemo",
      "Oncotype DX do I need chemo",
      "ovarian suppression breast cancer",
      "how many rounds of chemo is normal for breast cancer",
      "CDK4/6 inhibitors breast cancer when used",
      "immunotherapy for triple negative breast cancer",
      "can I skip hormone therapy after lumpectomy",
      "how long is endocrine therapy for breast cancer",
      "stage 1 triple negative breast cancer treatment options",
      "fertility preservation before breast cancer treatment",
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
      "metastatic breast cancer treatment options",
      "stage 4 breast cancer treatment options",
      "stage 4 breast cancer what to ask doctor",
      "metastatic breast cancer to bone treatment",
      "metastatic breast cancer next steps",
      "does stage IV breast cancer mean nothing can be done",
      "living with metastatic breast cancer day to day",
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
      "local recurrence vs metastatic breast cancer",
      "should subtype be retested after breast cancer recurrence",
      "breast cancer recurrence after mastectomy",
    ],
    relatedEntryIds: [
      "breast-metastatic",
      "breast-treatment-comparison",
      "breast-second-opinion",
      "breast-care-team",
      "breast-quality-of-life",
    ],
  },
  {
    id: "breast-quality-of-life",
    label: "Quality of life",
    decisionLabel: "How quality of life factors into the plan",
    slug: BREAST_QOL_SLUG,
    momentId: "quality-of-life",
    searchIntents: [
      "how should quality of life factor into breast cancer decisions",
      "breast cancer treatment side effects daily life",
      "supportive care during breast cancer treatment",
      "can I work while getting chemotherapy for breast cancer",
      "average time off work with breast cancer",
      "balancing breast cancer treatment and work",
      "returning to work after breast cancer treatment",
    ],
    relatedEntryIds: [
      "breast-treatment-comparison",
      "breast-reconstruction",
      "breast-radiation",
      "breast-second-opinion",
      "breast-practical-fit",
    ],
  },
  {
    id: "breast-practical-fit",
    label: "Practical fit",
    decisionLabel: "Whether the plan can work with real life",
    slug: BREAST_PRACTICAL_FIT_SLUG,
    momentId: "cost-logistics",
    searchIntents: [
      "can my breast cancer treatment plan work with my real life",
      "how much does breast cancer treatment cost",
      "breast cancer treatment cost travel time",
      "breast cancer radiation schedule work",
      "how breast cancer treatment costs accumulate",
      "is breast cancer treatment covered by insurance",
    ],
    relatedEntryIds: [
      "breast-care-team",
      "breast-treatment-comparison",
      "breast-quality-of-life",
      "breast-radiation",
    ],
  },
  {
    id: "breast-clinical-trial",
    label: "Clinical trial",
    decisionLabel: "Whether a clinical trial belongs in the discussion",
    slug: BREAST_CLINICAL_TRIAL_SLUG,
    momentId: "clinical-trial",
    searchIntents: [
      "should I consider a clinical trial for breast cancer",
      "should I join a breast cancer clinical trial",
      "breast cancer clinical trial options",
      "are clinical trials only last resort breast cancer",
      "clinical trial vs standard treatment breast cancer",
    ],
    relatedEntryIds: [
      "breast-treatment-comparison",
      "breast-metastatic",
      "breast-recurrence",
      "breast-second-opinion",
    ],
  },
  {
    id: "breast-follow-up",
    label: "Follow-up",
    decisionLabel: "How to monitor health after treatment",
    slug: BREAST_FOLLOW_UP_SLUG,
    momentId: "follow-up-monitoring",
    searchIntents: [
      "how do I monitor my health after breast cancer treatment",
      "what does follow-up look like after breast cancer treatment ends",
      "how often do you see oncologist after breast cancer",
      "when are you considered cancer free after breast cancer",
      "breast cancer follow-up schedule",
      "screening vs diagnostic mammogram after breast cancer",
      "what symptoms to report after breast cancer treatment",
      "fear of recurrence after breast cancer",
      "what helps with fear of recurrence after breast cancer",
      "what shapes breast cancer follow-up schedule",
    ],
    relatedEntryIds: [
      "breast-recurrence",
      "breast-quality-of-life",
      "breast-second-opinion",
      "breast-treatment-comparison",
    ],
  },
  {
    id: "breast-global-care",
    label: "Care abroad",
    decisionLabel: "When to consider care in another city or country",
    slug: BREAST_GLOBAL_CARE_SLUG,
    momentId: "global-care",
    searchIntents: [
      "when to consider breast cancer care abroad",
      "breast cancer treatment in another country",
      "should I travel for breast cancer treatment",
      "remote second opinion before traveling for breast cancer",
    ],
    relatedEntryIds: [
      "breast-care-team",
      "breast-second-opinion",
      "breast-clinical-trial",
      "breast-practical-fit",
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
