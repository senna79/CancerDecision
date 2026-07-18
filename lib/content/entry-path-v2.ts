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
export const SURGERY_SLUG =
  "should-surgery-be-part-of-my-lung-cancer-treatment-plan";
export const CLINICAL_TRIAL_SLUG =
  "should-i-consider-a-clinical-trial-for-lung-cancer";

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
  pathTitle: "Treatment Options Decision Path",
  pathSubtitle:
    "What the options are → why a plan fits you → how to compare → what to ask.",
  completedLabels: [
    "What treatment options are being discussed",
    "Why one plan may fit your situation",
    "How to compare options before deciding",
    "Questions to ask your doctor",
  ],
  practicalPoints: [
    "Goal — what each option is trying to achieve",
    "Timing — before surgery, after, instead, or combined",
    "Impact — side effects, schedule, and daily life",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "What treatment options are being discussed?",
      lead: "Patient question: what are all these treatments my doctor mentioned?",
      main: "treatment-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people are choosing among treatment options.",
        },
        {
          id: "tx-approaches",
          title: "What are the main treatment approaches for lung cancer?",
          summary: "Surgery, radiation, medicines, and trials — as categories.",
        },
        {
          id: "tx-combined",
          title: "Why are treatments sometimes combined?",
          summary: "Different approaches can serve different roles.",
        },
        {
          id: "tx-newer",
          title: "Are newer treatments always better?",
          summary: "Fit matters more than novelty.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Why did my doctor recommend this treatment?",
      lead: "Patient question: why does this plan fit my situation?",
      main: "treatment-why-fit",
      cards: [
        {
          id: "tx-different",
          title: "Why do two people with similar lung cancer get different treatments?",
          summary: "Stage, biomarkers, health, and priorities all matter.",
        },
        {
          id: "tx-biomarkers",
          title: "How do biomarkers affect treatment choices?",
          summary: "One important piece — not the whole decision.",
        },
        {
          id: "tx-less-aggressive",
          title: "Why might my doctor recommend a less aggressive treatment?",
          summary: "Appropriate treatment is not maximum treatment.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I know which option has the right balance?",
      lead: "Patient question: how should I compare options before deciding?",
      main: "treatment-compare",
      cards: [
        {
          id: "tx-tradeoffs",
          title: "How do I compare treatment benefits and risks?",
          summary: "Benefit, risk, and life impact — side by side.",
        },
        {
          id: "tx-qol",
          title: "Can quality of life affect my treatment decision?",
          summary: "Your priorities belong in the comparison.",
        },
        {
          id: "tx-if-not-working",
          title: "What happens if my first treatment does not work?",
          summary: "Plans can change — the first decision is not the last.",
        },
        {
          id: "tx-take-time",
          title: "Can I take time to decide between treatments?",
          summary: "Ask how urgent the decision is — and what you are waiting for.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before choosing a treatment?",
      lead: "Patient question: how do I prepare for the treatment conversation?",
      main: "checklist",
      cards: [
        {
          id: "tx-mistakes",
          title: "What are common mistakes when choosing treatment?",
          summary: "Pitfalls that skip the whole picture.",
        },
        {
          id: "second-opinion",
          title: "Should I get a second opinion before choosing treatment?",
          summary: "When another view may help before locking a plan.",
        },
        {
          id: "tx-trial",
          title: "Should I consider a clinical trial?",
          summary: "How to ask whether a study fits your situation.",
        },
        {
          id: "scenario",
          title: "An example comparison",
          summary: "How someone might structure the conversation.",
        },
      ],
    },
  ],
};

const SURGERY_PATH: EntryPathV2 = {
  pathTitle: "Surgery Decision Path",
  pathSubtitle:
    "Why surgery is discussed → how it compares → what it means practically → what to ask.",
  completedLabels: [
    "Why surgery is being considered",
    "How surgery compares with other options",
    "What surgery would mean practically",
    "Questions to ask your doctor",
  ],
  practicalPoints: [
    "What type of surgery is planned, and what part of the lung may be removed",
    "Possible risks, complications, and recovery expectations",
    "How surgery may affect breathing, daily life, cost, and support needs",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why is surgery being considered?",
      lead: "Patient question: why are my doctors talking about surgery?",
      main: "surgery-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people start thinking about surgery.",
        },
        {
          id: "surgery-candidate",
          title: "What makes someone a candidate for lung cancer surgery?",
          summary: "Why surgery may enter the discussion.",
        },
        {
          id: "surgery-stage",
          title: "What stage is surgery usually considered for?",
          summary: "Stage matters — but it is not the whole decision.",
        },
        {
          id: "surgery-gone",
          title: "Does surgery mean the cancer is gone?",
          summary: "What surgery aims to achieve — and what it does not guarantee.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Is surgery the best choice for my situation?",
      lead: "Patient question: how should I compare surgery with other options?",
      main: "surgery-compare",
      cards: [
        {
          id: "surgery-before",
          title: "Could I need treatment before surgery?",
          summary: "When medicines or other care come first.",
        },
        {
          id: "surgery-biomarker",
          title: "Could biomarker testing affect my surgery plan?",
          summary: "When results may change the comparison.",
        },
        {
          id: "surgery-when-not",
          title: "When might surgery not be the best option?",
          summary: "Why another path may fit better.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What would surgery actually mean for me?",
      lead: "Patient question: what do I need to understand before deciding?",
      main: "practical-points",
      cards: [
        {
          id: "surgery-types",
          title: "What type of lung surgery might I need?",
          summary: "Lobectomy, segmentectomy, pneumonectomy — in plain language.",
        },
        {
          id: "surgery-risks",
          title: "What are the risks of lung cancer surgery?",
          summary: "Questions that make risks personal, not generic.",
        },
        {
          id: "surgery-recovery",
          title: "How long does recovery usually take?",
          summary: "What to ask about return to activities and home support.",
        },
        {
          id: "surgery-breathing",
          title: "Will surgery affect my breathing or daily life?",
          summary: "Setting realistic expectations for life after surgery.",
        },
        {
          id: "cost",
          title: "What about cost and insurance?",
          summary: "Questions to ask before a major procedure.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "How can I feel confident about this decision?",
      lead: "Patient question: what should I discuss with my doctor?",
      main: "checklist",
      cards: [
        {
          id: "second-opinion",
          title: "Should I get a second opinion before lung surgery?",
          summary: "When another view may help before a major decision.",
        },
        {
          id: "surgery-center",
          title: "How do I choose a lung cancer treatment center?",
          summary: "Experience and team review — not only reputation.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the surgery decision.",
        },
      ],
    },
  ],
};

const CLINICAL_TRIAL_PATH: EntryPathV2 = {
  pathTitle: "Clinical Trial Decision Path",
  pathSubtitle:
    "When trials enter the conversation → whether one fits → how to compare → what to ask.",
  completedLabels: [
    "When clinical trials become part of the conversation",
    "Whether a trial fits your situation",
    "How to compare a trial with standard care",
    "Questions to ask your doctor",
  ],
  practicalPoints: [
    "Goal — treat cancer, delay progression, relieve symptoms, or improve future options",
    "What is known versus still uncertain",
    "Impact — visits, travel, time, and daily life",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why would a clinical trial be mentioned for someone like me?",
      lead: "Patient question: when do trials become part of the conversation?",
      main: "trial-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people start hearing about clinical trials.",
        },
        {
          id: "trial-not-last",
          title: "Are clinical trials only for people who have no other options?",
          summary: "Why “last resort” is a common misunderstanding.",
        },
        {
          id: "trial-ask-early",
          title: "Should I ask about clinical trials before starting treatment?",
          summary: "Why earlier discussion can still help.",
        },
        {
          id: "trial-not-subject",
          title: "Does joining a clinical trial mean I am a test subject?",
          summary: "Research with structure — and your choice to participate.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How do I know if a trial is relevant to me?",
      lead: "Patient question: what makes a trial a fit — or not?",
      main: "trial-fit",
      cards: [
        {
          id: "trial-qualify",
          title: "Why might I not qualify for a clinical trial?",
          summary: "Eligibility protects safety and research accuracy.",
        },
        {
          id: "trial-biomarkers",
          title: "How do biomarkers affect clinical trials?",
          summary: "When cancer features open or close trial doors.",
        },
        {
          id: "trial-replace",
          title: "Can a clinical trial replace my current treatment?",
          summary: "Alternative, combination, or something else — depending on design.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How should I compare a trial with my other options?",
      lead: "Patient question: goal, evidence, and impact — side by side.",
      main: "trial-compare",
      cards: [
        {
          id: "trial-better",
          title: "Are clinical trials better than standard treatment?",
          summary: "Not automatically — fit and uncertainty both matter.",
        },
        {
          id: "trial-risks",
          title: "What risks should I consider before joining?",
          summary: "Unknowns, side effects, and extra appointments.",
        },
        {
          id: "trial-daily-life",
          title: "Will a clinical trial affect my daily life?",
          summary: "Visits, travel, and what a normal week may look like.",
        },
        {
          id: "trial-if-not",
          title: "What happens if the trial does not work?",
          summary: "Options afterward — and whether you can stop.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before deciding?",
      lead: "Patient question: how do I prepare for the trial conversation?",
      main: "checklist",
      cards: [
        {
          id: "trial-mistakes",
          title: "What mistakes do patients often make when considering trials?",
          summary: "Timing, “last resort,” and chasing “new.”",
        },
        {
          id: "trial-family",
          title: "Should my family be involved in this decision?",
          summary: "Travel, support, and uncertainty are shared decisions.",
        },
        {
          id: "second-opinion",
          title: "Should I get a second opinion about a clinical trial?",
          summary: "When another view may help before you decide.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might evaluate a trial option.",
        },
      ],
    },
  ],
};

const PATHS: Record<string, EntryPathV2> = {
  [BIOMARKER_SLUG]: BIOMARKER_PATH,
  [SECOND_OPINION_SLUG]: SECOND_OPINION_PATH,
  [TREATMENT_COMPARE_SLUG]: TREATMENT_COMPARE_PATH,
  [SURGERY_SLUG]: SURGERY_PATH,
  [CLINICAL_TRIAL_SLUG]: CLINICAL_TRIAL_PATH,
};

export function getEntryPathV2(slug: string): EntryPathV2 | null {
  return PATHS[slug] ?? null;
}
