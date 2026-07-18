/**
 * Decision Path configs for Entry Template v2.
 * OS stages: Understand → Compare → Practical → Conversation
 */

export type EntryPathCard = {
  id: string;
  title: string;
  summary: string;
};

export type EntryPathStep = {
  id: string;
  stage: string;
  title: string;
  lead?: string;
  /** Main-axis renderer key */
  main: string;
  cards: EntryPathCard[];
};

export type EntryPathV2 = {
  pathTitle: string;
  pathSubtitle: string;
  completedLabels: [string, string, string, string];
  practicalPoints?: string[];
  steps: EntryPathStep[];
};

const STAGES = {
  understand: "Understand the decision",
  compare: "Compare what matters",
  practical: "Consider practical realities",
  conversation: "Prepare for next conversation",
} as const;

export const BIOMARKER_SLUG =
  "do-i-need-biomarker-testing-before-lung-cancer-treatment";
export const SECOND_OPINION_SLUG =
  "should-i-get-second-opinion-after-lung-cancer-diagnosis";
export const TREATMENT_COMPARE_SLUG =
  "how-to-compare-surgery-and-systemic-therapy-lung-cancer";

const BIOMARKER_PATH: EntryPathV2 = {
  pathTitle: "Biomarker Testing Decision Path",
  pathSubtitle:
    "Why it matters → whether options could change → what you may go through → what to ask your doctor.",
  completedLabels: [
    "Why biomarker testing matters",
    "How results may affect choices",
    "What to consider before testing",
    "Questions to ask your doctor",
  ],
  practicalPoints: [
    "How a sample would be obtained — existing tissue, sometimes blood, sometimes a new biopsy discussion",
    "Rough timing — when results are expected, and whether treatment decisions will wait",
    "Cost and insurance questions to ask before anything is ordered",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does biomarker testing matter?",
      lead: "Patient question: why is my doctor talking about this test?",
      main: "biomarker-understand",
      cards: [
        {
          id: "what-is",
          title: "What is biomarker testing?",
          summary: "A plain-language definition.",
        },
        {
          id: "look-for",
          title: "What does the test look for?",
          summary: "Features of your cancer — not a gene encyclopedia.",
        },
        {
          id: "situation-new-diagnosis",
          title: "I was recently diagnosed — does this apply?",
          summary: "When testing comes up after a new diagnosis.",
        },
        {
          id: "situation-choosing-treatment",
          title: "I’m choosing treatment — does this apply?",
          summary: "When results may change options before locking a plan.",
        },
        {
          id: "situation-change-opinion",
          title: "My plan changed or I want another opinion",
          summary: "When updated testing may matter again.",
        },
        {
          id: "who-needs",
          title: "Does everyone need the same tests?",
          summary: "Why testing is not identical for every person.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Could biomarker results change my treatment options?",
      lead: "Patient question: what would this result actually be used for?",
      main: "does-not-decide",
      cards: [
        {
          id: "targeted",
          title: "Does a biomarker result mean targeted therapy?",
          summary: "What a finding may open — and what it does not decide alone.",
        },
        {
          id: "if-none",
          title: "What if no actionable biomarker is found?",
          summary: "Why “no match” is not the same as “no options.”",
        },
        {
          id: "which-checked",
          title: "Which biomarkers are usually checked?",
          summary: "Ask what matters for your decision — not a public gene list.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know before testing?",
      lead: "Patient question: what will I actually go through?",
      main: "practical-points",
      cards: [
        {
          id: "how-done",
          title: "How is biomarker testing done?",
          summary: "Tissue already collected, blood tests, or a new sample.",
        },
        {
          id: "biopsy",
          title: "Will I need another biopsy?",
          summary: "When a new sample may be discussed — and when it may not.",
        },
        {
          id: "risks",
          title: "What are the biopsy risks?",
          summary: "Risks usually come from getting tissue, not the lab test itself.",
        },
        {
          id: "turnaround",
          title: "How long does testing take?",
          summary: "What affects turnaround — without a fixed calendar.",
        },
        {
          id: "delay",
          title: "What if treatment feels urgent?",
          summary: "Waiting is not automatically an unsafe delay.",
        },
        {
          id: "cost",
          title: "Cost and insurance",
          summary: "Questions to ask before testing is ordered.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "mistake-0",
          title: "Mistake: treating all lung cancers the same",
          summary: "Why one-size-fits-all thinking can mislead.",
        },
        {
          id: "mistake-1",
          title: "Mistake: choosing before checking missing info",
          summary: "Why locking a plan too early can narrow options.",
        },
        {
          id: "mistake-2",
          title: "Mistake: assuming testing always delays care",
          summary: "Why waiting for information is not always unsafe delay.",
        },
        {
          id: "mistake-3",
          title: "Mistake: treating one result as the whole decision",
          summary: "Why results are one factor among several.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame this decision.",
        },
      ],
    },
  ],
};

const SECOND_OPINION_PATH: EntryPathV2 = {
  pathTitle: "Second Opinion Decision Path",
  pathSubtitle:
    "Why consider another view → what it may change → what to prepare → what to ask.",
  completedLabels: [
    "Why a second opinion may help",
    "What it can clarify",
    "What to prepare and when",
    "Questions to ask specialists",
  ],
  practicalPoints: [
    "What records to gather before another review",
    "How urgent treatment timing is in your situation",
    "What you most want the second opinion to clarify",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why consider a second opinion?",
      lead: "Patient question: is seeking another view the same as disagreeing?",
      main: "why",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people usually consider another opinion.",
        },
        {
          id: "confidence",
          title: "Is this about confidence or disagreement?",
          summary: "What a second opinion is — and is not.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What could another opinion change?",
      lead: "Patient question: will this actually help my decision?",
      main: "second-compare",
      cards: [
        {
          id: "clarify",
          title: "What questions can it answer?",
          summary: "Diagnosis, treatment choices, and care planning.",
        },
        {
          id: "may-not",
          title: "What if both opinions agree?",
          summary: "Confirmation can still be valuable.",
        },
        {
          id: "evaluate",
          title: "How do I compare different opinions?",
          summary: "Focus on reasoning, not who is “right.”",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know before seeking one?",
      lead: "Patient question: what do I need to do — and will it delay care?",
      main: "practical-points",
      cards: [
        {
          id: "timing",
          title: "Will this delay treatment?",
          summary: "Timing depends on your situation — ask directly.",
        },
        {
          id: "prep",
          title: "What records should I prepare?",
          summary: "A practical list before another review.",
        },
        {
          id: "bridge",
          title: "What about specialized centers elsewhere?",
          summary: "When additional expertise may be worth exploring.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with specialists?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the decision.",
        },
        {
          id: "value",
          title: "When a second opinion may help most",
          summary: "Situations where another review is often useful.",
        },
      ],
    },
  ],
};

const TREATMENT_COMPARE_PATH: EntryPathV2 = {
  pathTitle: "Treatment Comparison Decision Path",
  pathSubtitle:
    "Why choices matter → how to compare → what must be clear first → what to ask.",
  completedLabels: [
    "Why treatment is a choice",
    "How to compare options",
    "What information must be complete",
    "Questions to ask your doctor",
  ],
  practicalPoints: [
    "Whether diagnosis, stage, and biomarker information are complete enough",
    "What each option requires in time, visits, and recovery burden",
    "Whether another opinion would help before locking a plan",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why is treatment a decision — not just a recommendation?",
      lead: "Patient question: why isn’t there one obvious “best” treatment?",
      main: "why",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people are comparing treatment options.",
        },
        {
          id: "goals",
          title: "What is each option trying to achieve?",
          summary: "Remove, control, or support quality of life.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare my options?",
      lead: "Patient question: what framework can I actually use?",
      main: "treatment-compare",
      cards: [
        {
          id: "five-questions",
          title: "The five comparison questions",
          summary: "Goal, benefit, trade-offs, requirements, priorities.",
        },
        {
          id: "differ",
          title: "Why might doctors recommend differently?",
          summary: "Different reasoning is not always a conflict of facts.",
        },
        {
          id: "categories",
          title: "What do treatment categories mean?",
          summary: "Tools, not automatic answers.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should be clear before I decide?",
      lead: "Patient question: what must be true before I lock a plan?",
      main: "practical-points",
      cards: [
        {
          id: "info-gap",
          title: "Is my information complete?",
          summary: "Type, stage, biomarkers, goals, alternatives.",
        },
        {
          id: "second-opinion",
          title: "When might another opinion help?",
          summary: "Complex choices and confidence — not disagreement only.",
        },
        {
          id: "mistakes",
          title: "Common comparison mistakes",
          summary: "Pitfalls when weighing options.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor?",
      lead: "Patient question: what should I ask before choosing?",
      main: "checklist",
      cards: [
        {
          id: "scenario",
          title: "An example comparison",
          summary: "How someone might structure the conversation.",
        },
      ],
    },
  ],
};

const PATHS: Record<string, EntryPathV2> = {
  [BIOMARKER_SLUG]: BIOMARKER_PATH,
  [SECOND_OPINION_SLUG]: SECOND_OPINION_PATH,
  [TREATMENT_COMPARE_SLUG]: TREATMENT_COMPARE_PATH,
};

export function getEntryPathV2(slug: string): EntryPathV2 | null {
  return PATHS[slug] ?? null;
}
