/** Hang-card bodies for Metastatic / Stage IV Breast Cancer Decision Path (Entry Template v2) */

export const BREAST_METASTATIC_ENTRY_CARDS = {
  whatIs: {
    lead: "Metastatic (Stage IV) breast cancer means cancer has been found beyond the breast and nearby lymph nodes — for example in bone, lung, liver, or brain. It is a different decision frame from early-stage cure-focused planning.",
    close:
      "Stage IV is serious — and it is not the same as “nothing can be done.” Many people receive active treatment aimed at control, symptoms, and quality of life.",
  },
  activeCare: {
    lead: "Many people with metastatic breast cancer receive active treatment. Depending on the situation, care may focus on:",
    items: [
      "Slowing or shrinking cancer where possible",
      "Reducing symptoms so daily life is more manageable",
      "Keeping future options open when response or new information arrives",
      "Supporting quality of life alongside cancer treatment",
    ],
    close:
      "Ask what goals are realistic for your situation — in plain language.",
  },
  notGivingUp: {
    lead: "Different goals do not mean doctors are giving up. They mean the plan is designed around control, symptoms, and living with cancer — not only around a single curative path.",
    close:
      "Your team is still making active decisions with you, including which treatments may help and what trade-offs matter.",
  },
  subtypeStillMatters: {
    lead: "Subtype still shapes the conversation in metastatic disease — HR+, HER2+, and triple-negative paths often open different medicine families.",
    items: [
      "HR+ plans often center on endocrine approaches (sometimes with targeted partners)",
      "HER2+ plans usually include HER2-directed therapy",
      "TNBC plans may include chemotherapy and, in selected situations, immunotherapy or other options",
    ],
    close:
      "Ask: “For my subtype, which option families belong in the discussion first?”",
  },
  differentPlans: {
    lead: "People with the same Stage IV label often hear different plans because doctors also consider:",
    items: [
      "Subtype and other cancer biology",
      "Where cancer has spread and how it is affecting you",
      "Previous treatments and how cancer responded",
      "Overall health and personal goals",
    ],
    close: "The Stage label alone does not pick a drug list.",
  },
  strongest: {
    lead: "Not always. A good choice balances possible benefit, side effects, your goals, and daily life — not only intensity.",
    close:
      "More aggressive is not automatically a better fit for metastatic decision-making.",
  },
  localTherapy: {
    lead: "Surgery or radiation may still be discussed for specific problems — for example painful bone sites or limited metastases — even when the overall plan is systemic.",
    ask: [
      "Would local treatment help a specific symptom or site?",
      "Is local therapy meant for control, comfort, or both?",
      "How would local treatment fit with systemic therapy timing?",
    ],
    close:
      "Local therapy in metastatic disease is usually situational — not the same as early-stage curative surgery.",
  },
  infoNeeded: {
    lead: "Before locking a first metastatic plan, confirm whether key information is available:",
    items: [
      "Current subtype / receptor and HER2 status (and whether re-testing is needed)",
      "Extent of disease on imaging",
      "Prior treatments and responses",
      "Symptoms that need prompt control",
    ],
    close:
      "Ask what can wait for more information — and what should start now for comfort or safety.",
  },
  secondOpinion: {
    lead: "A second opinion may help when options feel complex, recommendations conflict, or you want more confidence before locking a first metastatic plan.",
    close:
      "It is about confidence, not distrust — especially when goals and trade-offs are high-stakes.",
  },
  clinicalTrial: {
    lead: "A clinical trial may be another option depending on subtype, prior treatment, and eligibility. Trials are not only “last resort.”",
    close:
      "Ask whether any trials fit your situation — and how they compare with standard options.",
  },
  thisWeek: {
    lead: "If metastatic decisions are in front of you, focus on:",
    steps: [
      "Confirm what doctors know so far — subtype, extent, and symptoms",
      "Ask what the goal of the next treatment is in plain language",
      "Write down priorities (control, side effects, time at home, upcoming life events)",
    ],
    close:
      "A clear goal statement beats researching every metastatic drug name alone.",
  },
  mistakes: {
    lead: "Common metastatic-decision mistakes include:",
    items: [
      {
        mistake: "Assuming Stage IV means no active options",
        why: "Many people receive active treatment aimed at control and quality of life.",
      },
      {
        mistake: "Ignoring subtype in metastatic planning",
        why: "HR+, HER2+, and TNBC still fork medicine families.",
      },
      {
        mistake: "Choosing the “strongest” plan without goals",
        why: "Benefit, side effects, and daily life still decide fit.",
      },
      {
        mistake: "Waiting for a perfect plan while symptoms go unmanaged",
        why: "Symptom control can proceed while options are compared.",
      },
    ],
  },
} as const;

export const BREAST_METASTATIC_GLOSS =
  "Metastatic (Stage IV) breast cancer decisions focus on control, symptoms, and quality of life — shaped by subtype, prior treatment, and personal goals. It is not the same as “nothing can be done.”";

export const BREAST_METASTATIC_DIRECT_ANSWER = `Metastatic breast cancer means disease has spread beyond the breast and regional nodes. Decisions usually focus on controlling cancer, easing symptoms, and protecting quality of life — not on a single curative package like many early-stage plans.

Ask: “What is the goal of the next treatment for my subtype — and what trade-offs matter most for my life right now?”

You do not need every answer today. Start with what is known, what is pending, and which decision is time-sensitive.`;
