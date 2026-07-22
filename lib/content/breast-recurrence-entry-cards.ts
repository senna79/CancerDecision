/** Hang-card bodies for Breast Cancer Recurrence Decision Path (Entry Template v2) */

export const BREAST_RECURRENCE_ENTRY_CARDS = {
  whatIs: {
    lead: "Recurrence means breast cancer has returned after a period when it was controlled or could not be detected. It is a new decision point — not an automatic replay of the first treatment plan.",
    close:
      "Where it returned, how long after treatment, and what has changed all shape the next conversation.",
  },
  notFailed: {
    lead: "Not necessarily. Prior treatment may have controlled cancer for a period, removed visible disease, or reduced cancer burden.",
    close:
      "Recurrence means the situation needs to be reassessed — not that “everything failed” or that options have ended.",
  },
  localVsDistant: {
    lead: "“Recurrence” is not one situation. Doctors often distinguish:",
    items: [
      "Local — in the breast, chest wall, or nearby surgical area",
      "Regional — in nearby lymph nodes",
      "Distant — in organs farther away (sometimes discussed as metastatic disease)",
    ],
    close:
      "Ask where recurrence was found — the location often changes which option families belong first.",
  },
  vsMetastatic: {
    lead: "Local recurrence usually means cancer has returned in the breast, chest wall, or nearby surgical area. Metastatic (distant) disease means cancer is found farther away — bone, liver, lung, brain, or other sites — and often overlaps with Stage IV planning. Regional return in nearby nodes sits between those frames.",
    close:
      "Ask where it returned. Location usually changes which option families come first — not the word “recurrence” alone.",
  },
  retest: {
    lead: "Cancer biology can change over time. Doctors may consider whether subtype / receptor and HER2 status should be re-checked, especially when it could change medicine options.",
    ask: [
      "Would another biopsy or receptor test change the options we discuss?",
      "Is prior subtype information still enough for the next plan?",
    ],
    close: "Not everyone needs a new biopsy — ask when it would change decisions.",
  },
  priorTreatment: {
    lead: "Your treatment history is part of the new decision. Doctors usually review:",
    items: [
      "What surgery, radiation, and medicines you already received",
      "How long treatment worked",
      "Side effects you experienced",
      "Which option families remain open",
    ],
    close: "History informs the next plan — it does not automatically repeat the last one.",
  },
  afterMastectomy: {
    lead: "If breast cancer returns after mastectomy, the next plan still depends on where it returned — chest wall/local area, regional nodes, or distant sites — plus prior treatments and current subtype. It is not automatically “the same package again,” and it is not automatically Stage IV.",
    ask: [
      "Where has cancer returned — and how does that change options?",
      "Should subtype be retested before locking the next plan?",
      "Would surgery, radiation, systemic therapy, or a trial come first?",
    ],
    close:
      "Ask for location + history + goals. “After mastectomy” alone does not pick the path.",
  },
  stillTreatable: {
    lead: "Yes — many people receive active treatment after recurrence. Goals may include:",
    items: [
      "Controlling or removing disease where possible",
      "Reducing symptoms so daily life is more manageable",
      "Protecting quality of life while keeping future options open",
    ],
    close:
      "Ask what goals are realistic for your situation — in plain language.",
  },
  samePlan: {
    lead: "Usually not. Repeating the exact same package is often not the default after recurrence.",
    close:
      "The useful question is: “Given where cancer returned and what we already used, which options belong in the discussion now?”",
  },
  secondOpinion: {
    lead: "A second opinion may be especially useful after recurrence because decisions can become more complex — location, prior therapy, and re-testing all interact.",
    close:
      "It is about confidence, not distrust. Confirmation of a clear plan can also be valuable.",
  },
  clinicalTrial: {
    lead: "A clinical trial may be worth discussing after recurrence, depending on subtype, prior treatment, and eligibility. Trials are not only “last resort.”",
    close:
      "Ask whether any trials fit — and how they compare with standard options.",
  },
  thisWeek: {
    lead: "If recurrence decisions are in front of you, focus on:",
    steps: [
      "Confirm where cancer returned and what doctors know so far",
      "Ask whether re-testing subtype would change options",
      "Write priorities (control, side effects, time at home, upcoming life events)",
    ],
    close:
      "A clear picture of what changed beats researching every drug name alone.",
  },
  mistakes: {
    lead: "Common recurrence-decision mistakes include:",
    items: [
      {
        mistake: "Assuming there are no options",
        why: "Recurrence does not automatically end treatment choices.",
      },
      {
        mistake: "Assuming the first plan simply repeats",
        why: "Location, prior therapy, and current biology usually reopen the comparison.",
      },
      {
        mistake: "Skipping the “where / what changed” questions",
        why: "Local, regional, and distant recurrence are different decision frames.",
      },
      {
        mistake: "Making decisions only from fear",
        why: "Understanding the situation reduces uncertainty and sharpens the next ask.",
      },
    ],
  },
} as const;

export const BREAST_RECURRENCE_GLOSS =
  "If breast cancer returns after treatment, it is a new decision point — not an automatic replay of the first plan. Location, prior therapy, and whether subtype should be re-checked shape the next options.";

export const BREAST_RECURRENCE_DIRECT_ANSWER = `If breast cancer comes back after treatment, the first job is to understand what changed — where it returned, how long after treatment, and whether subtype or other biology should be re-checked.

Recurrence does not automatically mean previous care failed or that options have ended. Ask: “Given where cancer returned and what we already used, which option families belong in the discussion now?”

You do not need every answer today. Start with what is known, what is pending, and which decision is time-sensitive.`;
