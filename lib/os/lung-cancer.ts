import type { CancerDecisionOs } from "@/lib/os/types";

/**
 * Lung Cancer Decision OS v1 — Moment skeleton (Tier-1 + supporting).
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
        "node-surgery",
        "node-second-opinion",
      ],
      patient_router: {
        label: "I was just diagnosed — I don’t know what comes first",
        hint: "What to sort out first after a new diagnosis.",
        nextStep: "See what to do next",
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
        label: "Should I get biomarker testing before choosing treatment?",
        hint: "Whether genetic or molecular testing should happen before locking a plan.",
        nextStep: "See what to do next",
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
      next_moment_ids: [
        "node-surgery",
        "node-second-opinion",
        "node-qol",
        "node-follow-up",
        "node-global",
      ],
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
        hint: "How to compare choices without picking a single “best” treatment.",
        nextStep: "See what to do next",
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
        hint: "When another review may help — and when waiting is fine.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-cancer-center",
      slug: "care-center-expertise",
      label: "5. Care center & expertise",
      state_label: "Care center & expertise",
      summary:
        "Decide whether another center, specialist team, or additional expertise may improve your decision — without ranking hospitals.",
      why_this_matters:
        "The goal is the right expertise for your decision, not simply a more famous center.",
      tier: 1,
      status: "active",
      stage: "practical",
      sort_order: 5,
      ai_entry_slug:
        "do-i-need-different-lung-cancer-center-or-specialized-expertise",
      question_slugs: [
        "do-i-need-different-lung-cancer-center-or-specialized-expertise",
      ],
      treatment_slugs: [],
      story_slugs: ["comparing-local-and-international-lung-cancer-options"],
      next_moment_ids: [
        "node-second-opinion",
        "node-compare",
        "node-costs",
        "node-global",
      ],
      patient_router: {
        label: "I’m wondering if I need another center or specialist",
        hint: "When you may need different expertise — not a more famous hospital.",
        nextStep: "See what to do next",
      },
    },

    {
      id: "node-global",
      slug: "global-care",
      label: "Local vs international branch",
      state_label: "International option",
      summary:
        "Only explore cross-border care when a specific capability, trial, or specialty review is missing locally.",
      why_this_matters:
        "This matters only when a specific capability is missing locally — not as a default upgrade.",
      tier: 2,
      status: "active",
      stage: "global",
      sort_order: 10,
      optional: true,
      ai_entry_slug: "when-to-consider-lung-cancer-care-abroad",
      question_slugs: ["when-to-consider-lung-cancer-care-abroad"],
      treatment_slugs: ["immunotherapy", "targeted-therapy"],
      story_slugs: ["comparing-local-and-international-lung-cancer-options"],
      next_moment_ids: [],
      patient_router: {
        label: "I’m wondering about care in another city or country",
        hint: "Explore only when a capability gap is real.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-surgery",
      slug: "surgery-decision",
      label: "10. Surgery decision",
      state_label: "Surgery decision",
      summary:
        "Decide whether surgery should be part of your treatment plan — compared with alternatives, not as an automatic best choice.",
      why_this_matters:
        "Surgery is a treatment option, not the decision itself — patients need a comparison frame before a major procedure.",
      tier: 2,
      status: "active",
      stage: "treatment",
      sort_order: 10,
      optional: true,
      ai_entry_slug:
        "should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      question_slugs: [
        "should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      ],
      treatment_slugs: ["surgery"],
      story_slugs: ["choosing-second-opinion-before-lung-surgery"],
      next_moment_ids: [
        "node-compare",
        "node-biomarkers",
        "node-second-opinion",
        "node-cancer-center",
        "node-follow-up",
      ],
      patient_router: {
        label: "I’m wondering whether surgery should be part of my plan",
        hint: "Whether surgery belongs in your plan among other options.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-clinical-trial",
      slug: "clinical-trial",
      label: "7. Clinical trial decision",
      state_label: "Clinical trial decision",
      summary:
        "Decide whether a clinical trial should be part of your discussion — compared with other options, not as a last resort.",
      why_this_matters:
        "Trials are a decision option at multiple points in the journey — evaluate purpose, evidence, risks, and fit.",
      tier: 1,
      status: "active",
      stage: "treatment",
      sort_order: 7,
      ai_entry_slug:
        "should-i-consider-a-clinical-trial-for-lung-cancer",
      question_slugs: [
        "should-i-consider-a-clinical-trial-for-lung-cancer",
      ],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-compare",
        "node-biomarkers",
        "node-second-opinion",
        "node-cancer-center",
      ],
      patient_router: {
        label: "I’m wondering whether a clinical trial is relevant",
        hint: "Whether a research treatment is worth discussing now.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-recurrence",
      slug: "recurrence",
      label: "8. Recurrence decision",
      state_label: "Recurrence decision",
      summary:
        "Reassess what changed, update information, and compare next options — recurrence is a new decision point, not a return to the old plan.",
      why_this_matters:
        "Recurrence decisions carry high pressure; patients need a re-entry path into comparison, information, and second opinion.",
      tier: 1,
      status: "active",
      stage: "recurrence",
      sort_order: 8,
      ai_entry_slug: "what-are-my-options-if-lung-cancer-comes-back",
      question_slugs: ["what-are-my-options-if-lung-cancer-comes-back"],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-compare",
        "node-biomarkers",
        "node-second-opinion",
        "node-clinical-trial",
        "node-treatment-progression",
        "node-brain-mets",
      ],
      patient_router: {
        label: "My lung cancer has come back — what now?",
        hint: "What to reassess when cancer returns, then compare next options.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-treatment-progression",
      slug: "treatment-progression",
      label: "9. Treatment progression decision",
      state_label: "Treatment progression",
      summary:
        "When current treatment is no longer achieving its goal — reassess what changed, update information, and compare the next options.",
      why_this_matters:
        "Treatment change is a new decision point, not the end of the journey — patients need a clear re-entry into comparison and information.",
      tier: 1,
      status: "active",
      stage: "treatment",
      sort_order: 9,
      ai_entry_slug:
        "what-are-my-options-if-lung-cancer-treatment-no-longer-working",
      question_slugs: [
        "what-are-my-options-if-lung-cancer-treatment-no-longer-working",
      ],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-compare",
        "node-biomarkers",
        "node-second-opinion",
        "node-clinical-trial",
        "node-recurrence",
        "node-brain-mets",
        "node-cancer-center",
        "node-qol",
      ],
      patient_router: {
        label: "My treatment is no longer working — what now?",
        hint: "What to do when the current plan is no longer working.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-stage-iv",
      slug: "stage-iv-options",
      label: "6. Stage IV / advanced options",
      state_label: "Stage IV decision",
      summary:
        "Facing choices in advanced disease — clarify goals, compare options, and decide what information or expertise would help next.",
      why_this_matters:
        "Advanced disease decisions are about goals and trade-offs, not encyclopedia lists of every drug.",
      tier: 1,
      status: "active",
      stage: "treatment",
      sort_order: 6,
      ai_entry_slug:
        "how-to-choose-treatment-options-for-stage-iv-lung-cancer",
      question_slugs: [
        "how-to-choose-treatment-options-for-stage-iv-lung-cancer",
      ],
      treatment_slugs: [
        "chemotherapy",
        "immunotherapy",
        "targeted-therapy",
      ],
      story_slugs: [],
      next_moment_ids: [
        "node-compare",
        "node-biomarkers",
        "node-clinical-trial",
        "node-second-opinion",
        "node-treatment-progression",
        "node-brain-mets",
        "node-qol",
      ],
      patient_router: {
        label: "I was diagnosed with Stage IV / advanced lung cancer",
        hint: "How to choose a path with goals, trade-offs, and priorities.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-brain-mets",
      slug: "brain-mets",
      label: "6b. Brain metastases decision",
      state_label: "Brain metastases",
      summary:
        "When lung cancer is found in the brain — clarify the findings, compare local and systemic options with disease elsewhere, and prepare the next conversation.",
      why_this_matters:
        "Brain metastases create high fear and fragmented specialty advice; patients need a decision path that holds brain findings and whole-body options together.",
      tier: 1,
      status: "active",
      stage: "treatment",
      sort_order: 6.5,
      ai_entry_slug:
        "what-are-my-options-if-lung-cancer-spreads-to-the-brain",
      question_slugs: [
        "what-are-my-options-if-lung-cancer-spreads-to-the-brain",
      ],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-stage-iv",
        "node-biomarkers",
        "node-second-opinion",
        "node-clinical-trial",
        "node-treatment-progression",
        "node-cancer-center",
        "node-qol",
      ],
      patient_router: {
        label: "Lung cancer was found in my brain — what now?",
        hint: "What brain findings mean, then how to compare realistic next options.",
        nextStep: "See what to do next",
      },
    },
    {
      id: "node-qol",
      slug: "quality-of-life",
      label: "11. Quality of life / personal goals",
      state_label: "Personal goals",
      summary:
        "Bring personal goals, daily life, and priorities into treatment conversations — quality of life guides decisions, it does not automatically mean less treatment.",
      why_this_matters:
        "Cancer decisions are about your life, not only your cancer — priorities make trade-offs clearer.",
      tier: 2,
      status: "active",
      stage: "supportive",
      sort_order: 11,
      optional: true,
      ai_entry_slug:
        "how-should-quality-of-life-factor-into-lung-cancer-decisions",
      question_slugs: [
        "how-should-quality-of-life-factor-into-lung-cancer-decisions",
      ],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-follow-up",
        "node-compare",
        "node-stage-iv",
        "node-treatment-progression",
        "node-second-opinion",
        "node-costs",
      ],
      patient_router: {
        label: "How do I include my daily life in this decision?",
        hint: "How to bring daily life and personal priorities into the discussion.",
        nextStep: "See what to do next",
      },
    },

    {
      id: "node-follow-up",
      slug: "follow-up-monitoring",
      label: "13. Long-term monitoring & follow-up",
      state_label: "Follow-up monitoring",
      summary:
        "After active treatment, clarify what to monitor, when to contact the team, and how to rebuild confidence in daily life.",
      why_this_matters:
        "The end of treatment is not the end of care — patients need a clear plan for scans, symptoms, and life after cancer.",
      tier: 2,
      status: "active",
      stage: "supportive",
      sort_order: 13,
      optional: true,
      ai_entry_slug:
        "how-do-i-monitor-my-health-after-lung-cancer-treatment",
      question_slugs: [
        "how-do-i-monitor-my-health-after-lung-cancer-treatment",
      ],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-recurrence",
        "node-treatment-progression",
        "node-qol",
        "node-second-opinion",
      ],
      patient_router: {
        label: "I’ve finished treatment — what should I watch for?",
        hint: "Follow-up plans, symptoms to report, and life after treatment.",
        nextStep: "See what to do next",
      },
    },

    {
      id: "node-costs",
      slug: "cost-logistics",
      label: "12. Practical fit (cost & logistics pointer)",
      state_label: "Practical fit",
      summary:
        "Pointer into Care Team, Treatment Options, and Quality of Life — whether a plan can work with cost, travel, time, and support.",
      why_this_matters:
        "Practical factors belong in the conversation. Open the matching decision page rather than treating logistics as a separate encyclopedia.",
      tier: 2,
      status: "active",
      stage: "practical",
      sort_order: 12,
      optional: true,
      ai_entry_slug:
        "can-my-lung-cancer-treatment-plan-work-with-my-real-life",
      question_slugs: [
        "can-my-lung-cancer-treatment-plan-work-with-my-real-life",
        "lung-cancer-treatment-costs-what-to-ask",
      ],
      treatment_slugs: [],
      story_slugs: ["comparing-local-and-international-lung-cancer-options"],
      next_moment_ids: [
        "node-cancer-center",
        "node-second-opinion",
        "node-compare",
        "node-qol",
        "node-clinical-trial",
      ],
      patient_router: {
        label: "I’m wondering if this plan can work with my real life",
        hint: "Practical fit — then Care Team, Treatment Options, or Quality of Life.",
        nextStep: "See where to go next",
      },
    },
  ],
};
