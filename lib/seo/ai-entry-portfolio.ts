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
  | "treatment-progression";

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
    decisionLabel: "New Diagnosis",
    slug: "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
    momentId: "diagnosis",
    searchIntents: [
      "what should I do first after lung cancer diagnosis",
      "newly diagnosed lung cancer next steps",
      "what to do after a lung cancer diagnosis",
    ],
    relatedEntryIds: [
      "biomarker",
      "treatment-comparison",
      "second-opinion",
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
    ],
  },
  {
    id: "stage-iv",
    label: "Stage IV / advanced",
    decisionLabel: "How to make treatment decisions in advanced lung cancer",
    slug: "how-to-choose-treatment-options-for-stage-iv-lung-cancer",
    momentId: "stage-iv",
    searchIntents: [
      "how to choose treatment options for stage IV lung cancer",
      "stage IV lung cancer treatment decisions",
      "stage 4 lung cancer what next",
      "advanced lung cancer treatment options",
    ],
    relatedEntryIds: [
      "biomarker",
      "treatment-comparison",
      "second-opinion",
      "clinical-trial",
      "newly-diagnosed",
      "recurrence",
      "treatment-progression",
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
