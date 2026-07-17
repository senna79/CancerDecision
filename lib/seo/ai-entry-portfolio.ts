/**
 * Lung Cancer AI Entry Portfolio v1 — acquisition layer for AEO.
 * See docs/Lung_Cancer_AI_Entry_Spec_v1.0.md
 */

export type AiEntryId =
  | "newly-diagnosed"
  | "second-opinion"
  | "biomarker"
  | "treatment-comparison"
  | "global-option";

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
    relatedEntryIds: ["biomarker", "treatment-comparison", "second-opinion"],
  },
  {
    id: "second-opinion",
    label: "Second opinion",
    decisionLabel: "Second opinion",
    slug: "should-i-get-second-opinion-after-lung-cancer-diagnosis",
    momentId: "second-opinion",
    searchIntents: [
      "should I get a second opinion lung cancer",
      "second opinion after lung cancer diagnosis",
    ],
    relatedEntryIds: [
      "newly-diagnosed",
      "treatment-comparison",
      "biomarker",
      "global-option",
    ],
  },
  {
    id: "biomarker",
    label: "Biomarker decision",
    decisionLabel: "Biomarker testing before treatment",
    slug: "do-i-need-biomarker-testing-before-lung-cancer-treatment",
    momentId: "biomarkers",
    searchIntents: [
      "biomarker testing before lung cancer treatment",
      "molecular testing before lung cancer therapy",
    ],
    relatedEntryIds: ["newly-diagnosed", "treatment-comparison", "second-opinion"],
  },
  {
    id: "treatment-comparison",
    label: "Treatment comparison",
    decisionLabel: "Treatment options comparison",
    slug: "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
    momentId: "treatments",
    searchIntents: [
      "lung cancer treatment options comparison",
      "surgery vs systemic therapy lung cancer",
    ],
    relatedEntryIds: ["biomarker", "second-opinion", "global-option"],
  },
  {
    id: "global-option",
    label: "Global option",
    decisionLabel: "Care abroad / other center",
    slug: "when-to-consider-lung-cancer-care-abroad",
    momentId: "abroad",
    searchIntents: [
      "when is lung cancer treatment abroad worth it",
      "seek lung cancer care in another country",
    ],
    relatedEntryIds: ["second-opinion", "treatment-comparison"],
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
