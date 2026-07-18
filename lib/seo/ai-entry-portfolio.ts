/**
 * Lung Cancer AI Entry Portfolio v1 — acquisition layer for AEO.
 * See docs/Lung_Cancer_AI_Entry_Spec_v1.0.md
 */

export type AiEntryId =
  | "newly-diagnosed"
  | "second-opinion"
  | "biomarker"
  | "treatment-comparison"
  | "care-center"
  | "stage-iv"
  | "clinical-trial"
  | "recurrence"
  | "treatment-progression"
  | "surgery"
  | "quality-of-life"
  | "follow-up"
  | "treatment-feasibility";

export type AiEntry = {
  id: AiEntryId;
  label: string;
  /** Short decision name for relationship strip / schema mentions */
  decisionLabel: string;
  slug: string;
  momentId: string;
  searchIntents: string[];
  /** Other portfolio entries to surface as related */
  relatedEntryIds: AiEntryId[];
};

export const LUNG_AI_ENTRY_PORTFOLIO: AiEntry[] = [
  {
    id: "newly-diagnosed",
    label: "Newly diagnosed",
    decisionLabel: "What happens next after a new diagnosis",
    slug: "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
    momentId: "diagnosis",
    searchIntents: [
      "just diagnosed with lung cancer what happens next",
      "newly diagnosed lung cancer next steps",
      "what to do after a lung cancer diagnosis",
      "lung cancer first steps after diagnosis",
    ],
    relatedEntryIds: [
      "biomarker",
      "second-opinion",
      "treatment-comparison",
      "stage-iv",
    ],
  },
  {
    id: "second-opinion",
    label: "Second opinion",
    decisionLabel: "Whether a second opinion may help",
    slug: "should-i-get-second-opinion-after-lung-cancer-diagnosis",
    momentId: "second-opinion",
    searchIntents: [
      "should I get a second opinion lung cancer",
      "second opinion after lung cancer diagnosis",
      "should I get a second opinion after lung cancer diagnosis",
    ],
    relatedEntryIds: [
      "newly-diagnosed",
      "treatment-comparison",
      "biomarker",
      "care-center",
      "stage-iv",
      "clinical-trial",
      "recurrence",
      "treatment-progression",
    ],
  },
  {
    id: "biomarker",
    label: "Biomarker decision",
    decisionLabel: "Whether additional information may change treatment choices",
    slug: "do-i-need-biomarker-testing-before-lung-cancer-treatment",
    momentId: "biomarkers",
    searchIntents: [
      "biomarker testing before lung cancer treatment",
      "do I need biomarker testing before lung cancer treatment",
      "molecular testing before lung cancer therapy",
    ],
    relatedEntryIds: [
      "newly-diagnosed",
      "treatment-comparison",
      "second-opinion",
      "stage-iv",
      "clinical-trial",
      "treatment-progression",
    ],
  },
  {
    id: "treatment-comparison",
    label: "Treatment comparison",
    decisionLabel: "How to compare treatment choices",
    slug: "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
    momentId: "treatments",
    searchIntents: [
      "how should I compare lung cancer treatment options",
      "lung cancer treatment options comparison",
      "lung cancer treatment benefits and trade-offs",
    ],
    relatedEntryIds: [
      "biomarker",
      "surgery",
      "second-opinion",
      "care-center",
      "stage-iv",
      "clinical-trial",
      "recurrence",
      "treatment-progression",
    ],
  },
  {
    id: "care-center",
    label: "Care center & expertise",
    decisionLabel: "Whether additional expertise may improve your care decision",
    slug: "do-i-need-different-lung-cancer-center-or-specialized-expertise",
    momentId: "care-center",
    searchIntents: [
      "do I need a different lung cancer center",
      "lung cancer specialist second center",
      "specialized lung cancer expertise",
    ],
    relatedEntryIds: [
      "second-opinion",
      "treatment-comparison",
      "biomarker",
      "clinical-trial",
      "treatment-progression",
      "treatment-feasibility",
    ],
  },
  {
    id: "stage-iv",
    label: "Stage IV / advanced",
    decisionLabel: "What to know after a Stage IV diagnosis",
    slug: "how-to-choose-treatment-options-for-stage-iv-lung-cancer",
    momentId: "stage-iv",
    searchIntents: [
      "what should I know after stage IV lung cancer diagnosis",
      "stage 4 lung cancer what next",
      "stage IV lung cancer treatment decisions",
      "advanced lung cancer next steps",
      "how to choose treatment options for stage IV lung cancer",
    ],
    relatedEntryIds: [
      "biomarker",
      "treatment-comparison",
      "second-opinion",
      "quality-of-life",
      "clinical-trial",
      "newly-diagnosed",
    ],
  },
  {
    id: "clinical-trial",
    label: "Clinical trial",
    decisionLabel:
      "Whether a clinical trial should be part of your treatment discussion",
    slug: "should-i-consider-a-clinical-trial-for-lung-cancer",
    momentId: "clinical-trial",
    searchIntents: [
      "should I consider a clinical trial for lung cancer",
      "lung cancer clinical trial decision",
      "clinical trial vs standard treatment lung cancer",
    ],
    relatedEntryIds: [
      "stage-iv",
      "treatment-comparison",
      "biomarker",
      "second-opinion",
      "care-center",
      "recurrence",
      "treatment-progression",
    ],
  },
  {
    id: "recurrence",
    label: "Recurrence",
    decisionLabel: "How to make decisions after recurrence",
    slug: "what-are-my-options-if-lung-cancer-comes-back",
    momentId: "recurrence",
    searchIntents: [
      "what are my options if lung cancer comes back",
      "lung cancer recurrence treatment decisions",
      "lung cancer returned what next",
      "options after lung cancer recurrence",
    ],
    relatedEntryIds: [
      "treatment-comparison",
      "biomarker",
      "second-opinion",
      "clinical-trial",
      "care-center",
      "stage-iv",
      "treatment-progression",
    ],
  },
  {
    id: "treatment-progression",
    label: "Treatment progression",
    decisionLabel:
      "What to do when the current treatment is no longer achieving its goal",
    slug: "what-are-my-options-if-lung-cancer-treatment-no-longer-working",
    momentId: "treatment-progression",
    searchIntents: [
      "what are my options if lung cancer treatment stops working",
      "lung cancer treatment no longer working",
      "lung cancer treatment progression decisions",
      "what to do when lung cancer treatment fails",
    ],
    relatedEntryIds: [
      "recurrence",
      "treatment-comparison",
      "biomarker",
      "clinical-trial",
      "second-opinion",
      "care-center",
      "stage-iv",
      "quality-of-life",
    ],
  },
  {
    id: "surgery",
    label: "Surgery decision",
    decisionLabel: "Whether surgery should be part of your treatment plan",
    slug: "should-surgery-be-part-of-my-lung-cancer-treatment-plan",
    momentId: "surgery-decision",
    searchIntents: [
      "should surgery be part of lung cancer treatment",
      "lung cancer surgery decision",
      "lung cancer surgery vs other treatments",
      "is surgery right for my lung cancer",
    ],
    relatedEntryIds: [
      "newly-diagnosed",
      "treatment-comparison",
      "biomarker",
      "second-opinion",
      "care-center",
    ],
  },
  {
    id: "quality-of-life",
    label: "Quality of life & supportive care",
    decisionLabel:
      "How to balance treatment goals with the life you want to protect",
    slug: "how-should-quality-of-life-factor-into-lung-cancer-decisions",
    momentId: "quality-of-life",
    searchIntents: [
      "balance lung cancer treatment and quality of life",
      "supportive care lung cancer decisions",
      "treatment burden and daily life lung cancer",
      "how should quality of life factor into lung cancer decisions",
    ],
    relatedEntryIds: [
      "follow-up",
      "recurrence",
      "treatment-progression",
      "second-opinion",
      "treatment-feasibility",
    ],
  },
  {
    id: "follow-up",
    label: "Long-term monitoring & follow-up",
    decisionLabel:
      "How to monitor health and rebuild confidence after treatment",
    slug: "how-do-i-monitor-my-health-after-lung-cancer-treatment",
    momentId: "follow-up-monitoring",
    searchIntents: [
      "monitor health after lung cancer treatment",
      "lung cancer follow-up care plan",
      "symptoms to report after lung cancer treatment",
      "fear of recurrence after lung cancer",
    ],
    relatedEntryIds: [
      "recurrence",
      "treatment-progression",
      "quality-of-life",
      "second-opinion",
    ],
  },
  {
    id: "treatment-feasibility",
    label: "Treatment feasibility / cost & logistics",
    decisionLabel:
      "Whether a treatment plan is realistic and sustainable in daily life",
    slug: "can-my-lung-cancer-treatment-plan-work-with-my-real-life",
    momentId: "cost-logistics",
    searchIntents: [
      "can my lung cancer treatment plan work with my real life",
      "lung cancer treatment cost and logistics",
      "lung cancer treatment travel and time",
      "realistic lung cancer treatment plan",
    ],
    relatedEntryIds: [
      "care-center",
      "second-opinion",
      "treatment-comparison",
      "clinical-trial",
      "quality-of-life",
      "stage-iv",
    ],
  },
];

const slugSet = new Set(LUNG_AI_ENTRY_PORTFOLIO.map((e) => e.slug));
const byId = Object.fromEntries(
  LUNG_AI_ENTRY_PORTFOLIO.map((e) => [e.id, e])
) as Record<AiEntryId, AiEntry>;

export function isAiEntrySlug(slug: string): boolean {
  return slugSet.has(slug);
}

export function getAiEntryBySlug(slug: string): AiEntry | null {
  return LUNG_AI_ENTRY_PORTFOLIO.find((e) => e.slug === slug) ?? null;
}

export function getRelatedAiEntries(entry: AiEntry): AiEntry[] {
  return entry.relatedEntryIds.map((id) => byId[id]).filter(Boolean);
}
