/** Hang-card bodies for Treatment Change / Progression Decision Path */

export const TREATMENT_PROGRESSION_ENTRY_CARDS = {
  notWorseOnly: {
    lead: "Not necessarily. A treatment may change because:",
    reasons: [
      "Cancer is growing",
      "Side effects are difficult",
      "Another option may provide more benefit",
      "New information changes the plan",
    ],
    close:
      "A treatment change means your team is reassessing — not that all options are gone.",
  },
  howKnow: {
    lead: "Doctors may look at:",
    factors: [
      "Imaging results",
      "Symptoms",
      "Physical condition",
      "Laboratory results",
      "Overall treatment response",
    ],
    close: "One result alone does not always tell the full story.",
  },
  canChange: {
    lead: "Cancer behavior can change over time. If this happens, doctors may review:",
    review: [
      "What treatment was previously used",
      "What has changed",
      "Whether new information is needed",
    ],
    close: "The next decision depends on the current situation.",
  },
  biopsy: {
    lead: "Sometimes doctors may recommend additional testing — for example, to learn how the cancer has changed or to check for information that may affect options.",
    ask: "Would additional testing change what options we consider?",
  },
  biomarkersAgain: {
    lead: "Some cancer characteristics may change as cancer evolves or after treatment.",
    close:
      "Your doctor may consider whether previous biomarker information is still enough to guide decisions.",
  },
  priorTreatment: {
    lead: "Previous treatments provide important information. Doctors consider:",
    factors: [
      "What treatments you received",
      "How well they worked",
      "How long they helped",
      "Side effects you experienced",
    ],
    close: "Past treatment helps guide future choices.",
  },
  nextOptions: {
    lead: "Options depend on your situation. They may include:",
    options: [
      "Another approved treatment",
      "Different treatment combinations",
      "Clinical trials",
      "Supportive care options",
    ],
    close: "Your care team can explain which options are realistic for you.",
  },
  newestNotBest: {
    lead: "Not always. A newer treatment may not be the best fit.",
    consider: ["Evidence", "Expected benefit", "Risks", "Your goals"],
    ask: "Why does this option fit my situation now?",
  },
  lessAggressive: {
    lead: "Treatment decisions should consider your goals. Some patients prioritize:",
    priorities: [
      "Controlling cancer",
      "Maintaining daily activities",
      "Reducing symptoms",
      "Minimizing treatment burden",
    ],
    close: "Your preferences are an important part of the decision.",
  },
  trials: {
    lead: "Clinical trials may become relevant when:",
    when: [
      "Standard options are changing",
      "New approaches are being studied",
      "Your cancer has specific characteristics",
    ],
    ask: "Are there trials that fit my situation?",
  },
  mistakes: {
    lead: "Common challenges include:",
    items: [
      {
        mistake:
          "Assuming one treatment failure means all options are gone",
        why: "Cancer treatment often involves multiple steps.",
      },
      {
        mistake: "Choosing only based on the newest option",
        why: "Fit matters more than novelty.",
      },
      {
        mistake: "Not discussing personal goals",
        why: "Your priorities matter in the next decision.",
      },
    ],
  },
  secondOpinion: {
    lead: "A second opinion may be useful when several options exist, the decision feels complex, or you want more confidence.",
    close: "Treatment changes are another important decision point.",
  },
  isHelping: {
    lead: "Ask your team:",
    ask: [
      "What signs show the treatment is working?",
      "How often will progress be checked?",
      "What changes should I report?",
    ],
    close: "Understanding the plan can reduce uncertainty.",
  },
  targetedStops: {
    lead: "When targeted therapy stops working, the next step is usually a reassessment — not an assumption that nothing remains.",
    items: [
      "Where the cancer is progressing",
      "Whether new testing (tissue or blood) could change options",
      "Other approved treatments, combinations, local therapy, or trials",
      "What matters most to you now — control, symptoms, or daily life",
    ],
    ask: "What has changed, what options do I have now, and do we need new biomarker information?",
  },
  noMoreChemo: {
    lead: "“No more chemotherapy” can mean different things. Clarify before you assume all options are closed.",
    ask: [
      "Does that mean chemotherapy is no longer helpful — or that another approach fits better?",
      "Are targeted therapy, immunotherapy, trials, or local treatments still on the table?",
      "Should we discuss supportive care goals alongside cancer-directed options?",
    ],
    close:
      "Ask what is still being considered — and what the next useful decision is.",
  },
} as const;
