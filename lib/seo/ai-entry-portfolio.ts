/**
 * Lung Cancer AI Entry Portfolio v1 — acquisition layer for AEO.
 * See docs/Lung_Cancer_AI_Entry_Spec_v1.0.md
 *
 * searchIntents = patient/caregiver long-tail phrasings that should resolve
 * to this Entry (not a keyword farm).
 *
 * Decision-intent standard (keep):
 * - should / need / options / worth / before treatment / what next
 * - phrasing a patient would use before a care-team conversation
 *
 * Reject or demote:
 * - encyclopedia (“what is”, symptoms, survival tables)
 * - hospital rankings (“best hospital/center”)
 * - gene/symptom farms; pure how-to directories; psych-only anxiety queries
 *
 * These are evidence-backed candidates from public patient/org sources
 * (LUNGevity, ALA, MSK, forums) — not Keyword Planner volume/competition.
 */

import {
  getBreastAiEntryBySlug,
  getRelatedBreastAiEntries,
  isBreastAiEntrySlug,
  type BreastAiEntry,
} from "@/lib/seo/breast-ai-entry-portfolio";

export type AiEntryId =
  | "newly-diagnosed"
  | "second-opinion"
  | "biomarker"
  | "treatment-comparison"
  | "care-center"
  | "global-care"
  | "stage-iv"
  | "clinical-trial"
  | "recurrence"
  | "treatment-progression"
  | "surgery"
  | "quality-of-life"
  | "follow-up"
  | "treatment-feasibility"
  | "brain-mets";

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
    momentId: "newly-diagnosed",
    searchIntents: [
      "just diagnosed with lung cancer what happens next",
      "I was diagnosed with lung cancer what next",
      "newly diagnosed lung cancer next steps",
      "what to do after a lung cancer diagnosis",
      "lung cancer diagnosis what next",
      "lung cancer first steps after diagnosis",
      "what tests are needed after lung cancer diagnosis",
      "lung cancer diagnosis what tests are needed",
      "what should I ask my oncologist after lung cancer diagnosis",
      "questions to ask after lung cancer diagnosis",
      "questions to ask oncologist about lung cancer",
      "questions to ask thoracic surgeon about lung cancer",
      "how soon do I need treatment after lung cancer diagnosis",
      "should I start treatment right away after lung cancer diagnosis",
      "65 year old diagnosed with lung cancer what next",
      "elderly lung cancer diagnosis next steps",
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
      "do I need a second opinion for lung cancer",
      "should I get a second opinion after lung cancer diagnosis",
      "second opinion before lung cancer treatment",
      "second opinion before lung cancer surgery",
      "is a second opinion worth it for lung cancer",
      "is it rude to get a second opinion for lung cancer",
      "why is it important to get a second opinion lung cancer",
      "what records do I need for a lung cancer second opinion",
      "second opinion if biomarker testing was not done lung cancer",
    ],
    relatedEntryIds: [
      "newly-diagnosed",
      "treatment-comparison",
      "biomarker",
      "care-center",
      "global-care",
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
    momentId: "biomarker-testing",
    searchIntents: [
      "do I need biomarker testing before lung cancer treatment",
      "do I need biomarker testing for lung cancer",
      "does every lung cancer patient need biomarker testing",
      "has my tumor been tested for all recommended biomarkers",
      "NGS testing lung cancer do I need it",
      "comprehensive biomarker testing lung cancer do I need it",
      "should I wait for biomarker results before starting treatment",
      "should I wait for NGS before starting lung cancer treatment",
      "can biomarker testing delay lung cancer treatment",
      "what if lung cancer has no targetable mutation",
      "what tests are needed before lung cancer treatment",
      "stage 4 lung cancer biomarker testing",
      "non small cell lung cancer genetic testing",
      "elderly lung cancer biomarker testing",
      "should older adults get biomarker testing for lung cancer",
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
    momentId: "treatment-comparison",
    searchIntents: [
      "how should I compare lung cancer treatment options",
      "lung cancer treatment options comparison",
      "lung cancer treatment benefits and trade-offs",
      "compare lung cancer treatments",
      "what treatment do you recommend and why lung cancer",
      "chemotherapy vs immunotherapy lung cancer",
      "targeted therapy vs immunotherapy lung cancer",
      "treatment options for elderly lung cancer patients",
      "can I take time to decide on lung cancer treatment",
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
    decisionLabel: "How to choose the right lung cancer care team",
    slug: "do-i-need-different-lung-cancer-center-or-specialized-expertise",
    momentId: "care-center-expertise",
    searchIntents: [
      "how to choose lung cancer care team",
      "lung cancer care team",
      "who treats lung cancer",
      "how to choose an oncologist for lung cancer",
      "how do I choose a hospital for complex lung cancer care",
      "how to choose hospital for lung cancer",
      "do I need a different lung cancer center",
      "should I go to a cancer center for lung cancer",
      "does my care team specialize in lung cancer",
      "local oncologist vs cancer center",
      "academic vs community cancer center lung cancer",
      "NCI designated cancer center lung cancer",
      "can I get lung cancer treatment locally after seeing a specialist",
    ],
    relatedEntryIds: [
      "second-opinion",
      "global-care",
      "biomarker",
      "treatment-comparison",
      "clinical-trial",
      "treatment-feasibility",
    ],
  },
  {
    id: "global-care",
    label: "Care abroad / another city",
    decisionLabel: "When to consider lung cancer care abroad",
    slug: "when-to-consider-lung-cancer-care-abroad",
    momentId: "global-care",
    searchIntents: [
      "when to consider lung cancer care abroad",
      "lung cancer treatment abroad",
      "is lung cancer care abroad worth it",
      "should I travel for lung cancer treatment",
      "lung cancer medical tourism",
      "international lung cancer second opinion",
      "go abroad for lung cancer treatment",
      "cross border lung cancer care",
    ],
    relatedEntryIds: [
      "care-center",
      "second-opinion",
      "clinical-trial",
      "treatment-feasibility",
      "treatment-comparison",
    ],
  },
  {
    id: "stage-iv",
    label: "Stage IV / advanced",
    decisionLabel: "What to know after a Stage IV diagnosis",
    slug: "how-to-choose-treatment-options-for-stage-iv-lung-cancer",
    momentId: "stage-iv-options",
    searchIntents: [
      "what should I know after stage IV lung cancer diagnosis",
      "stage 4 lung cancer what next",
      "stage IV lung cancer treatment decisions",
      "stage 4 lung cancer treatment options",
      "advanced lung cancer next steps",
      "metastatic lung cancer what happens next",
      "how to choose treatment options for stage IV lung cancer",
      "should I wait for biomarkers with stage 4 lung cancer",
      "questions to ask oncologist stage 4 cancer",
    ],
    relatedEntryIds: [
      "biomarker",
      "treatment-comparison",
      "second-opinion",
      "quality-of-life",
      "clinical-trial",
      "newly-diagnosed",
      "brain-mets",
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
      "should I join a lung cancer clinical trial",
      "lung cancer clinical trial decision",
      "clinical trial vs standard treatment lung cancer",
      "are clinical trials only for last resort lung cancer",
      "clinical trial pros and cons lung cancer",
      "experimental treatment lung cancer what to ask",
      "lung cancer clinical trials near me",
      "lung cancer clinical trials stage 4",
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
      "lung cancer came back what next",
      "lung cancer returned what next",
      "recurrent lung cancer treatment decisions",
      "options after lung cancer recurrence",
      "cancer returned after lung surgery what next",
      "should biomarkers be retested if lung cancer returns",
      "do I need a rebiopsy if lung cancer comes back",
      "lung cancer recurrence after lobectomy",
      "lung cancer recurrence after immunotherapy",
    ],
    relatedEntryIds: [
      "treatment-comparison",
      "biomarker",
      "second-opinion",
      "clinical-trial",
      "care-center",
      "stage-iv",
      "treatment-progression",
      "brain-mets",
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
      "lung cancer treatment stopped working what next",
      "lung cancer treatment progression decisions",
      "what to do when lung cancer treatment fails",
      "progression on immunotherapy lung cancer what next",
      "progression on targeted therapy lung cancer",
      "options after targeted therapy stops working lung cancer",
      "scan shows progression but I feel fine lung cancer",
      "should I switch lung cancer treatment",
      "when oncologist says no more chemo lung cancer",
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
      "brain-mets",
    ],
  },
  {
    id: "brain-mets",
    label: "Brain metastases",
    decisionLabel:
      "What to do when lung cancer is found in the brain",
    slug: "what-are-my-options-if-lung-cancer-spreads-to-the-brain",
    momentId: "brain-mets",
    searchIntents: [
      "what are my options if lung cancer spreads to the brain",
      "lung cancer brain metastases what next",
      "lung cancer spread to brain treatment decisions",
      "brain mets from lung cancer what should I ask",
      "should I get radiation for lung cancer brain metastases",
      "lung cancer brain lesions what happens next",
      "options when lung cancer is in the brain",
      "do biomarkers matter with lung cancer brain metastases",
      "second opinion for lung cancer brain metastases",
      "questions to ask oncologist about brain metastases lung cancer",
    ],
    relatedEntryIds: [
      "stage-iv",
      "treatment-progression",
      "recurrence",
      "biomarker",
      "second-opinion",
      "clinical-trial",
      "care-center",
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
      "do I need surgery for lung cancer",
      "can lung cancer be removed by surgery",
      "is surgery right for my lung cancer",
      "lung cancer surgery vs other treatments",
      "am I too old for lung cancer surgery",
      "surgery vs radiation for early lung cancer",
      "SBRT vs surgery for lung cancer",
      "can stage 4 lung cancer have surgery",
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
      "how should quality of life factor into lung cancer decisions",
      "balance lung cancer treatment and quality of life",
      "supportive care lung cancer decisions",
      "treatment burden and daily life lung cancer",
      "can I work during lung cancer treatment",
      "can you work while doing chemo and radiation",
      "working during cancer treatment",
      "how will lung cancer treatment affect daily activities",
      "palliative care vs hospice lung cancer",
      "lung cancer palliative care at home",
      "is stopping lung cancer treatment giving up",
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
      "how do I monitor my health after lung cancer treatment",
      "lung cancer follow-up care plan",
      "scan schedule after lung cancer treatment",
      "symptoms to report after lung cancer treatment",
      "who manages lung cancer follow-up oncology or primary care",
      "what should my follow-up plan include after lung cancer",
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
    label: "Practical fit (pointer)",
    decisionLabel: "Whether a treatment plan can work with real life",
    slug: "can-my-lung-cancer-treatment-plan-work-with-my-real-life",
    momentId: "cost-logistics",
    searchIntents: [
      "can my lung cancer treatment plan work with my real life",
      "lung cancer treatment travel and time",
      "can I travel during lung cancer treatment",
      "lung cancer treatment cost what to ask",
      "what should I know about lung cancer treatment costs",
      "lung cancer treatment costs questions to ask",
      "can I get lung cancer treatment close to home",
    ],
    relatedEntryIds: [
      "care-center",
      "treatment-comparison",
      "quality-of-life",
    ],
  },
];

const slugSet = new Set(LUNG_AI_ENTRY_PORTFOLIO.map((e) => e.slug));
const byId = Object.fromEntries(
  LUNG_AI_ENTRY_PORTFOLIO.map((e) => [e.id, e])
) as Record<AiEntryId, AiEntry>;

export function isAiEntrySlug(slug: string): boolean {
  return slugSet.has(slug) || isBreastAiEntrySlug(slug);
}

export function getAiEntryBySlug(slug: string): AiEntry | BreastAiEntry | null {
  return (
    LUNG_AI_ENTRY_PORTFOLIO.find((e) => e.slug === slug) ??
    getBreastAiEntryBySlug(slug)
  );
}

export function getRelatedAiEntries(
  entry: AiEntry | BreastAiEntry
): Array<AiEntry | BreastAiEntry> {
  if ("id" in entry && String(entry.id).startsWith("breast-")) {
    return getRelatedBreastAiEntries(entry as BreastAiEntry);
  }
  return (entry as AiEntry).relatedEntryIds
    .map((id) => byId[id])
    .filter(Boolean);
}
