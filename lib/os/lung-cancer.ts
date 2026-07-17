import type { CancerDecisionOs } from "@/lib/os/types";

/**
 * Lung Cancer Decision OS v1 — 12 Moment skeleton.
 * Only status=active moments are patient-visible on the Decision Map.
 */
export const LUNG_CANCER_DECISION_OS: CancerDecisionOs = {
  cancer_slug: "lung-cancer",
  title: "Lung Cancer Decision Map",
  intro:
    "A branching journey from newly diagnosed to the next decision. Paths can fork — biomarkers, treatment comparison, and second opinion often run in parallel. Each active node links to decision questions, treatment comparisons, and illustrative scenarios — not a personal care plan.",
  moments: [
    // ——— Tier 1 · active ———
    {
      id: "node-diagnosis",
      slug: "newly-diagnosed",
      label: "1. Newly diagnosed",
      state_label: "Diagnosis confirmed",
      summary:
        "Confirm what is known, which tests are outstanding, and which decisions are time-sensitive. From here the path forks.",
      why_this_matters:
        "This matters because early sequencing mistakes are hard to undo — you need to know which tests change the first plan.",
      tier: 1,
      status: "active",
      stage: "diagnosis",
      sort_order: 1,
      ai_entry_slug:
        "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
      question_slugs: [
        "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
      ],
      treatment_slugs: [],
      story_slugs: ["choosing-second-opinion-before-lung-surgery"],
      next_moment_ids: [
        "node-biomarkers",
        "node-compare",
        "node-second-opinion",
      ],
      patient_router: {
        label: "I was just diagnosed — I don’t know what comes first",
        hint: "AI Entry: first decisions after a new diagnosis.",
        nextStep: "Next: Direct answer → first 3 decisions → your next step.",
      },
    },
    {
      id: "node-biomarkers",
      slug: "biomarker-testing",
      label: "2. Confirm subtype & biomarkers",
      state_label: "Biomarker testing",
      summary:
        "Make sure pathology and molecular testing are complete enough to shape first-line choices — or decide when waiting is not safe.",
      why_this_matters:
        "This matters because some results may change which treatments are considered first.",
      tier: 1,
      status: "active",
      stage: "testing",
      sort_order: 2,
      ai_entry_slug:
        "do-i-need-biomarker-testing-before-lung-cancer-treatment",
      question_slugs: [
        "do-i-need-biomarker-testing-before-lung-cancer-treatment",
      ],
      treatment_slugs: ["targeted-therapy", "immunotherapy"],
      story_slugs: ["biomarker-result-changed-lung-cancer-treatment-plan"],
      next_moment_ids: ["node-compare", "node-second-opinion"],
      patient_router: {
        label: "I’m deciding about biomarker / molecular testing",
        hint: "AI Entry: wait for markers vs start now.",
        nextStep: "Next: Direct answer + timing if you wait.",
      },
    },
    {
      id: "node-compare",
      slug: "treatment-comparison",
      label: "3. Compare treatment paths",
      state_label: "Treatment comparison",
      summary:
        "Weigh surgery-led versus systemic-led sequencing using stage, markers, and priorities. This is a super-node — major modalities sit under this decision center.",
      why_this_matters:
        "This matters because surgery-led and systemic paths can both be reasonable — the trade-offs are personal and clinical.",
      tier: 1,
      status: "active",
      stage: "treatment",
      sort_order: 3,
      ai_entry_slug:
        "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      question_slugs: [
        "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      ],
      treatment_slugs: [
        "surgery",
        "chemotherapy",
        "immunotherapy",
        "targeted-therapy",
      ],
      story_slugs: [
        "choosing-second-opinion-before-lung-surgery",
        "biomarker-result-changed-lung-cancer-treatment-plan",
      ],
      next_moment_ids: ["node-second-opinion", "node-global"],
      facets: [
        "Surgery",
        "Radiation",
        "Immunotherapy",
        "Targeted therapy",
        "Chemotherapy",
        "Combination approaches",
      ],
      patient_router: {
        label: "I need to compare treatment options",
        hint: "AI Entry: compare paths without picking a winner for you.",
        nextStep: "Next: Direct answer + trade-offs + What to do next.",
      },
    },
    {
      id: "node-second-opinion",
      slug: "second-opinion",
      label: "4. Second opinion checkpoint",
      state_label: "Second opinion",
      summary:
        "Decide whether a pathology, staging, or sequencing review would reduce uncertainty before irreversible steps.",
      why_this_matters:
        "This matters before irreversible steps — another review can confirm pathology, staging, or sequencing.",
      tier: 1,
      status: "active",
      stage: "second_opinion",
      sort_order: 4,
      ai_entry_slug:
        "should-i-get-second-opinion-after-lung-cancer-diagnosis",
      question_slugs: [
        "should-i-get-second-opinion-after-lung-cancer-diagnosis",
      ],
      treatment_slugs: ["surgery"],
      story_slugs: ["choosing-second-opinion-before-lung-surgery"],
      next_moment_ids: ["node-compare", "node-global"],
      patient_router: {
        label: "I’m considering a second opinion",
        hint: "AI Entry: when review helps — and when waiting is unsafe.",
        nextStep: "Next: Direct answer + timing considerations.",
      },
    },
    {
      id: "node-global",
      slug: "global-care",
      label: "5. Local vs international branch",
      state_label: "International option",
      summary:
        "Only explore cross-border care when a specific capability, trial, or review is missing locally.",
      why_this_matters:
        "This matters only when a specific capability is missing locally — not as a default upgrade.",
      tier: 1,
      status: "active",
      stage: "global",
      sort_order: 5,
      optional: true,
      ai_entry_slug: "when-to-consider-lung-cancer-care-abroad",
      question_slugs: ["when-to-consider-lung-cancer-care-abroad"],
      treatment_slugs: ["immunotherapy", "targeted-therapy"],
      story_slugs: ["comparing-local-and-international-lung-cancer-options"],
      next_moment_ids: [],
      patient_router: {
        label: "I’m wondering about care in another city or country",
        hint: "AI Entry: abroad only when a capability gap is real.",
        nextStep: "Next: Direct answer + what to do before travel.",
      },
    },

    // ——— Tier 2 · planned (skeleton only) ———
    {
      id: "node-surgery",
      slug: "surgery-decision",
      label: "Surgery decision",
      state_label: "Surgery decision",
      summary:
        "Whether resection is appropriate, and how it sequences with systemic therapy.",
      why_this_matters:
        "Surgery is often irreversible — patients need a clear comparison frame, not a yes/no slogan.",
      tier: 2,
      status: "planned",
      stage: "treatment",
      sort_order: 6,
      ai_entry_slug: null,
      question_slugs: [],
      treatment_slugs: ["surgery"],
      story_slugs: [],
      next_moment_ids: ["node-compare", "node-second-opinion"],
    },
    {
      id: "node-clinical-trial",
      slug: "clinical-trial",
      label: "Clinical trial decision",
      state_label: "Clinical trials",
      summary:
        "When a trial is a real option versus standard care — and what trade-offs to ask about.",
      why_this_matters:
        "Trials can change access to new therapies, but also change logistics, uncertainty, and follow-up.",
      tier: 2,
      status: "planned",
      stage: "treatment",
      sort_order: 7,
      ai_entry_slug: null,
      question_slugs: [],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: ["node-compare", "node-global"],
    },
    {
      id: "node-cancer-center",
      slug: "choosing-cancer-center",
      label: "Choosing a cancer center",
      state_label: "Cancer center choice",
      summary:
        "How to evaluate experience, multidisciplinary fit, and continuity — without fake rankings.",
      why_this_matters:
        "Center choice shapes second opinions, trials, and who manages complications.",
      tier: 2,
      status: "planned",
      stage: "practical",
      sort_order: 8,
      ai_entry_slug: null,
      question_slugs: [],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: ["node-second-opinion", "node-global"],
    },
    {
      id: "node-recurrence",
      slug: "recurrence",
      label: "Recurrence decision",
      state_label: "Recurrence / plan change",
      summary:
        "Re-orient when cancer returns or the plan suddenly changes — compare again, not from zero.",
      why_this_matters:
        "Recurrence decisions carry high pressure; patients need a re-entry path into comparison and second opinion.",
      tier: 2,
      status: "planned",
      stage: "recurrence",
      sort_order: 9,
      ai_entry_slug: null,
      question_slugs: [],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: ["node-compare", "node-second-opinion"],
    },
    {
      id: "node-stage-iv",
      slug: "stage-iv-options",
      label: "Stage IV / advanced options",
      state_label: "Advanced disease options",
      summary:
        "Facing choices in advanced disease — goals of care, systemic options, and when to seek another review.",
      why_this_matters:
        "Advanced disease decisions are about goals and trade-offs, not encyclopedia lists of every drug.",
      tier: 2,
      status: "planned",
      stage: "treatment",
      sort_order: 10,
      ai_entry_slug: null,
      question_slugs: [],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: ["node-compare", "node-clinical-trial", "node-second-opinion"],
    },

    // ——— Tier 3 · planned ———
    {
      id: "node-costs",
      slug: "cost-logistics",
      label: "Cost & logistics",
      state_label: "Costs & logistics",
      summary:
        "Estimate the full episode — tests, drugs, travel, time away — before locking a pathway.",
      why_this_matters:
        "This matters because the full episode cost often differs from the headline procedure or drug fee.",
      tier: 3,
      status: "planned",
      stage: "practical",
      sort_order: 11,
      optional: true,
      ai_entry_slug: "lung-cancer-treatment-costs-what-to-ask",
      question_slugs: ["lung-cancer-treatment-costs-what-to-ask"],
      treatment_slugs: [],
      story_slugs: ["comparing-local-and-international-lung-cancer-options"],
      next_moment_ids: [],
    },
    {
      id: "node-qol",
      slug: "quality-of-life",
      label: "Quality of life / palliative decisions",
      state_label: "Quality of life",
      summary:
        "When comfort, function, and goals of care should reshape the treatment conversation.",
      why_this_matters:
        "Supportive decisions are part of navigation — not an afterthought when choices get hard.",
      tier: 3,
      status: "planned",
      stage: "supportive",
      sort_order: 12,
      ai_entry_slug: null,
      question_slugs: [],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: ["node-stage-iv", "node-second-opinion"],
    },
  ],
};
