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
  /** Eyebrow above path title — defaults to “Decision Path” */
  pathEyebrow?: string;
  /** Optional simple trail under the path title (Orientation entries) */
  orientationTrail?: string[];
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
export const TREATMENT_PROGRESSION_SLUG =
  "what-are-my-options-if-lung-cancer-treatment-no-longer-working";
export const RECURRENCE_SLUG =
  "what-are-my-options-if-lung-cancer-comes-back";
export const QUALITY_OF_LIFE_SLUG =
  "how-should-quality-of-life-factor-into-lung-cancer-decisions";
export const FOLLOW_UP_SLUG =
  "how-do-i-monitor-my-health-after-lung-cancer-treatment";
export const NEWLY_DIAGNOSED_SLUG =
  "what-decisions-matter-most-after-new-lung-cancer-diagnosis";
export const STAGE_IV_SLUG =
  "how-to-choose-treatment-options-for-stage-iv-lung-cancer";

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
    "When it may help → what it can change → how to prepare → what to ask.",
  completedLabels: [
    "When a second opinion may be valuable",
    "What another opinion can change",
    "How to prepare a useful review",
    "Questions for the second-opinion visit",
  ],
  practicalPoints: [
    "Pathology, imaging, biomarker results, and treatment history for review",
    "Whether biopsy slides or scans should be re-reviewed",
    "Whether a lung cancer specialist or center fits your access and needs",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Is this a situation where another opinion could help?",
      lead: "Patient question: when is a second opinion most valuable?",
      main: "second-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people usually consider another opinion.",
        },
        {
          id: "so-everyone",
          title: "Does everyone with lung cancer need a second opinion?",
          summary: "A support tool — not a sign something is wrong.",
        },
        {
          id: "so-delay",
          title: "Will a second opinion delay my treatment?",
          summary: "Balance informed decisions with timely care.",
        },
        {
          id: "so-disrespect",
          title: "Is asking for a second opinion disrespectful to my doctor?",
          summary: "How to frame confidence — not distrust.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What could another doctor tell me that I do not already know?",
      lead: "Patient question: confirm, clarify, expand, or identify gaps?",
      main: "second-compare",
      cards: [
        {
          id: "so-change",
          title: "Can a second opinion change my treatment plan?",
          summary: "Sometimes yes — confirmation can also be valuable.",
        },
        {
          id: "so-two-doctors",
          title: "What if two doctors recommend different treatments?",
          summary: "Compare reasoning — not who is “right.”",
        },
        {
          id: "so-pathology",
          title: "Should my diagnosis or biopsy be reviewed again?",
          summary: "When another pathology or imaging review may help.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I make sure the second doctor has the full picture?",
      lead: "Patient question: what records and expertise make the review useful?",
      main: "practical-points",
      cards: [
        {
          id: "so-records",
          title: "What records should I bring for a second opinion?",
          summary: "A practical checklist before the appointment.",
        },
        {
          id: "so-specialist",
          title: "Should I seek a lung cancer specialist or cancer center?",
          summary: "Expertise, team review, and trial access.",
        },
        {
          id: "cost",
          title: "How much does a second opinion cost?",
          summary: "Coverage and fees — questions instead of guesses.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask so the appointment is useful?",
      lead: "Patient question: how do I prepare for the conversation?",
      main: "checklist",
      cards: [
        {
          id: "so-mistakes",
          title: "What are common mistakes when getting a second opinion?",
          summary: "Timing, incomplete records, and seeking only agreement.",
        },
        {
          id: "so-choose",
          title: "How do I choose between two different recommendations?",
          summary: "Tradeoffs, evidence, and your goals.",
        },
        {
          id: "so-again",
          title: "When might I want another opinion again?",
          summary: "Cancer care involves multiple decision points.",
        },
        {
          id: "so-family",
          title: "Should my family join the second opinion appointment?",
          summary: "Support that helps you decide comfortably.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the decision.",
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

const TREATMENT_PROGRESSION_PATH: EntryPathV2 = {
  pathTitle: "Treatment Change Decision Path",
  pathSubtitle:
    "What change means → what information guides next → how to compare → what to ask.",
  completedLabels: [
    "What a treatment change means",
    "What information guides the next decision",
    "How to compare options after change",
    "Questions before changing treatment",
  ],
  practicalPoints: [
    "Expected benefit of each next option",
    "Possible risks and daily-life impact",
    "Whether goals favor more treatment, symptom focus, or a trial",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Does treatment change mean my cancer is getting worse?",
      lead: "Patient question: what does a treatment change actually mean?",
      main: "progression-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people face a treatment change decision.",
        },
        {
          id: "prog-not-worse",
          title: "Does treatment stopping mean my cancer is getting worse?",
          summary: "Reassessing is not the same as having no options.",
        },
        {
          id: "prog-how-know",
          title: "How do doctors know if treatment is working?",
          summary: "Imaging, symptoms, and the whole picture — not one result.",
        },
        {
          id: "prog-can-change",
          title: "Can cancer come back or change after treatment?",
          summary: "Why the next decision depends on the current situation.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How will doctors decide what comes next?",
      lead: "Patient question: what information guides the next decision?",
      main: "progression-info",
      cards: [
        {
          id: "prog-biopsy",
          title: "Will I need another biopsy if treatment stops working?",
          summary: "When additional testing may change options.",
        },
        {
          id: "prog-biomarkers",
          title: "Can my biomarker information change over time?",
          summary: "Whether prior results still guide the next choice.",
        },
        {
          id: "prog-prior",
          title: "Why does my previous treatment matter?",
          summary: "What worked, how long, and what side effects taught us.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What options do I have now?",
      lead: "Patient question: how do I compare next steps after treatment changes?",
      main: "progression-compare",
      cards: [
        {
          id: "prog-options",
          title: "What treatment options exist after the first treatment?",
          summary: "Approved treatments, combinations, trials, supportive care.",
        },
        {
          id: "prog-newest",
          title: "Is the newest treatment always the best next treatment?",
          summary: "Fit matters more than novelty.",
        },
        {
          id: "prog-goals",
          title: "What if I do not want another aggressive treatment?",
          summary: "Your priorities belong in the next decision.",
        },
        {
          id: "prog-trial",
          title: "When should I consider a clinical trial?",
          summary: "When standard options are changing or features match.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before changing treatment?",
      lead: "Patient question: how do I prepare for the next conversation?",
      main: "checklist",
      cards: [
        {
          id: "prog-mistakes",
          title: "What mistakes do patients make when treatment changes?",
          summary: "No options left, chasing “new,” skipping goals.",
        },
        {
          id: "second-opinion",
          title: "Should I get a second opinion when treatment changes?",
          summary: "When another view may help at this decision point.",
        },
        {
          id: "prog-helping",
          title: "How do I know if treatment is helping me?",
          summary: "What to watch for and how often progress is checked.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the next decision.",
        },
      ],
    },
  ],
};

const RECURRENCE_PATH: EntryPathV2 = {
  pathTitle: "Recurrence Decision Path",
  pathSubtitle:
    "What recurrence means → what has changed → how to compare options → what to ask.",
  completedLabels: [
    "What recurrence really means",
    "What has changed before the next step",
    "How to compare options after recurrence",
    "Questions for the next conversation",
  ],
  practicalPoints: [
    "Expected benefit of each realistic next approach",
    "Possible risks and treatment burden",
    "How the choice fits personal priorities and daily life",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Does recurrence mean my cancer has failed treatment?",
      lead: "Patient question: what does recurrence really mean?",
      main: "recurrence-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people face a recurrence decision.",
        },
        {
          id: "rec-not-failed",
          title: "Does recurrence mean my treatment failed?",
          summary: "Reassessing is not the same as everything failed.",
        },
        {
          id: "rec-why",
          title: "Why can lung cancer come back after treatment?",
          summary: "Where, when, and how it behaves now matter.",
        },
        {
          id: "rec-harder",
          title: "Is recurrence always harder to treat?",
          summary: "Every recurrence is different.",
        },
        {
          id: "rec-after-surgery",
          title: "Can lung cancer come back after surgery?",
          summary: "Why follow-up matters — and what gets reassessed.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How will doctors decide what happens next?",
      lead: "Patient question: what has changed before choosing the next step?",
      main: "recurrence-info",
      cards: [
        {
          id: "rec-biopsy",
          title: "Will I need another biopsy after recurrence?",
          summary: "Only when testing could change the options.",
        },
        {
          id: "rec-characteristics",
          title: "Can my cancer characteristics change over time?",
          summary: "Why prior information may need a fresh look.",
        },
        {
          id: "rec-prior",
          title: "How does my previous treatment affect my next options?",
          summary: "What worked, how long, and what remains.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What choices do I have now?",
      lead: "Patient question: how do I compare options after recurrence?",
      main: "recurrence-compare",
      cards: [
        {
          id: "rec-treatable",
          title: "Can recurrent lung cancer still be treated?",
          summary: "Goals may include control, symptoms, and daily life.",
        },
        {
          id: "rec-trial",
          title: "Should I consider a clinical trial after recurrence?",
          summary: "When research options may fit.",
        },
        {
          id: "rec-qol",
          title: "How do I balance treatment and quality of life?",
          summary: "Your priorities belong in the decision.",
        },
        {
          id: "rec-newest",
          title: "Is the newest treatment always the best choice?",
          summary: "Fit matters more than novelty.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before deciding what comes next?",
      lead: "Patient question: how do I prepare for the conversation?",
      main: "checklist",
      cards: [
        {
          id: "second-opinion",
          title: "Should I get a second opinion after recurrence?",
          summary: "When another view may help at a complex moment.",
        },
        {
          id: "rec-mistakes",
          title: "What mistakes do patients often make after recurrence?",
          summary: "No options, fear-only choices, skipping goals.",
        },
        {
          id: "rec-family",
          title: "What should my family understand after recurrence?",
          summary: "What changed, options, and how they can help.",
        },
        {
          id: "rec-supportive",
          title: "When should supportive care become part of the conversation?",
          summary: "Alongside treatment — not only at the end of options.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the next decision.",
        },
      ],
    },
  ],
};

const QUALITY_OF_LIFE_PATH: EntryPathV2 = {
  pathTitle: "Quality of Life Decision Path",
  pathSubtitle:
    "What matters most → manage symptoms → balance benefit and burden → build support.",
  completedLabels: [
    "What your plan should help protect",
    "How to manage symptoms during treatment",
    "How to balance benefit and burden",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Possible benefit of continuing or adjusting treatment",
    "Side effects, appointments, and daily-life impact",
    "What matters most to you right now",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "What should my treatment plan help me protect?",
      lead: "Patient question: what matters most in my daily life?",
      main: "qol-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When quality of life becomes part of the decision.",
        },
        {
          id: "qol-supportive-worse",
          title: "Does needing supportive care mean my cancer is getting worse?",
          summary: "Supportive care can run alongside treatment at any stage.",
        },
        {
          id: "qol-tell-doctor",
          title: "Should I tell my doctor what matters most to me?",
          summary: "Your priorities are important medical information.",
        },
        {
          id: "qol-affect-choice",
          title: "Can quality of life affect which treatment I choose?",
          summary: "Benefit, risks, and personal goals all count.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What can I do when treatment affects how I feel?",
      lead: "Patient question: how do I manage symptoms before they take over?",
      main: "qol-symptoms",
      cards: [
        {
          id: "qol-which-symptoms",
          title: "Which symptoms should I tell my doctor about?",
          summary: "Report changes that affect daily activities.",
        },
        {
          id: "qol-wait-appointment",
          title: "Should I wait until my next appointment to mention side effects?",
          summary: "Some symptoms need earlier attention.",
        },
        {
          id: "qol-adjust-treatment",
          title: "Can treatment be adjusted if side effects become difficult?",
          summary: "Tell your team what is happening.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I know if a treatment is still right for me?",
      lead: "Patient question: how do I balance benefit and treatment burden?",
      main: "qol-balance",
      cards: [
        {
          id: "qol-burden-too-much",
          title: "How do I know if treatment burden is becoming too much?",
          summary: "Daily life, goals, and ways to reduce burden.",
        },
        {
          id: "qol-more-better",
          title: "Is more treatment always better?",
          summary: "More benefit can also mean more burden.",
        },
        {
          id: "qol-goals-change",
          title: "Can my treatment goals change over time?",
          summary: "Priorities can be revisited as circumstances change.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What support can help me live better during treatment?",
      lead: "Patient question: how do I build a support plan around my care?",
      main: "checklist",
      cards: [
        {
          id: "qol-hospice",
          title: "What is the difference between supportive care and hospice care?",
          summary: "They are not the same thing.",
        },
        {
          id: "qol-family",
          title: "How can my family help without taking over decisions?",
          summary: "Support your choices — keep your preferences central.",
        },
        {
          id: "qol-services",
          title: "What support services should I ask about?",
          summary: "Symptoms, nutrition, rehab, emotions, and practical help.",
        },
        {
          id: "qol-who-helps",
          title: "Who helps with difficult treatment decisions?",
          summary: "You do not have to decide alone.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the next decision.",
        },
      ],
    },
  ],
};

const FOLLOW_UP_PATH: EntryPathV2 = {
  pathTitle: "Long-Term Monitoring Decision Path",
  pathSubtitle:
    "What happens after treatment → what follow-up watches for → when to act → how to move forward.",
  completedLabels: [
    "What happens after treatment ends",
    "What follow-up is watching for",
    "What to do between appointments",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Which symptoms deserve a call between visits",
    "Who to contact first when something changes",
    "How monitoring fits recovery and daily life",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Am I done with cancer care after treatment?",
      lead: "Patient question: what happens when active treatment ends?",
      main: "followup-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people move into follow-up care.",
        },
        {
          id: "fu-cancer-gone",
          title: "Does finishing treatment mean the cancer is gone forever?",
          summary: "A milestone — and a reason follow-up continues.",
        },
        {
          id: "fu-first-visit",
          title: "What should I expect at my first follow-up visit?",
          summary: "Symptoms, recovery, results, and next monitoring.",
        },
        {
          id: "fu-who-manages",
          title: "Who manages my care after treatment?",
          summary: "Know who to contact for different concerns.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What are doctors looking for during follow-up?",
      lead: "Patient question: what is my follow-up plan watching for?",
      main: "followup-watching",
      cards: [
        {
          id: "fu-scan-frequency",
          title: "How often should I get scans after treatment?",
          summary: "Appropriate monitoring — not simply more testing.",
        },
        {
          id: "fu-normal-scan",
          title: "Does a normal scan mean I never need to worry again?",
          summary: "Encouraging news — and why a plan still matters.",
        },
        {
          id: "fu-more-scans",
          title: "Are more scans always better?",
          summary: "Balance information, stress, cost, and procedures.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I do if something changes?",
      lead: "Patient question: what actions should I take between appointments?",
      main: "followup-between",
      cards: [
        {
          id: "fu-which-symptoms",
          title: "Which symptoms should I report after treatment?",
          summary: "Ask which changes matter most for you.",
        },
        {
          id: "fu-between-visits",
          title: "What if I notice something between appointments?",
          summary: "Do not wait automatically — ask what to do.",
        },
        {
          id: "fu-fear",
          title: "How do I handle fear of recurrence?",
          summary: "A plan, clear signals, and support — not alone.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "How do I move forward after lung cancer treatment?",
      lead: "Patient question: how do I build a long-term health plan?",
      main: "checklist",
      cards: [
        {
          id: "fu-long-term",
          title: "What long-term effects should I watch for?",
          summary: "Breathing, fatigue, pain, emotions, recovery.",
        },
        {
          id: "fu-activities",
          title: "When can I return to normal activities?",
          summary: "Recovery varies — ask what is safe to restart.",
        },
        {
          id: "fu-lifestyle",
          title: "Should I change my lifestyle after lung cancer treatment?",
          summary: "Realistic changes you can maintain.",
        },
        {
          id: "fu-records",
          title: "Should I keep my cancer records?",
          summary: "Pathology, imaging, treatments, biomarkers, meds.",
        },
        {
          id: "fu-second-opinion",
          title: "When should I seek another opinion during follow-up?",
          summary: "When a new decision or more confidence is needed.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the next decision.",
        },
      ],
    },
  ],
};

const NEWLY_DIAGNOSED_PATH: EntryPathV2 = {
  pathEyebrow: "Orientation path",
  pathTitle: "Your First Steps After Diagnosis",
  pathSubtitle:
    "You are not lost — you are at the start. Get clear, check information, see what comes next, then prepare for the conversation.",
  orientationTrail: [
    "Diagnosis",
    "Understand",
    "Information",
    "Next conversation",
  ],
  completedLabels: [
    "Clarity on your diagnosis",
    "Whether key information is complete",
    "What decisions may come next",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "What you already know about type and stage",
    "What information is still pending",
    "How urgent the next decision is",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Get clear on your diagnosis",
      lead: "Patient question: what exactly do I have?",
      main: "nd-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people are newly diagnosed with lung cancer.",
        },
        {
          id: "nd-more-tests",
          title: "Why do doctors need more tests after diagnosis?",
          summary: "A biopsy may confirm cancer — more detail may still matter.",
        },
        {
          id: "nd-not-immediate",
          title: "Why can’t my doctor tell me the treatment immediately?",
          summary: "The best plan depends on a more complete picture.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Make sure you have the information needed",
      lead: "Patient question: do we know enough to choose a treatment?",
      main: "nd-information",
      cards: [
        {
          id: "nd-biomarker",
          title: "Could biomarker testing change my treatment options?",
          summary: "Ask whether results would change what you discuss.",
        },
        {
          id: "nd-waiting",
          title: "Does waiting for more information mean treatment is delayed?",
          summary: "Not every wait is the same — ask how urgent it is.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "Understand the decisions ahead",
      lead: "Patient question: what decisions will I eventually need to make?",
      main: "nd-ahead",
      cards: [
        {
          id: "nd-focus-first",
          title: "What decision should I focus on first?",
          summary: "Your next decision matters more than every future one.",
        },
        {
          id: "nd-not-expert",
          title: "Do I need to understand every treatment before my first appointment?",
          summary: "No — know what you know, what you don’t, and what to ask.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for your next important conversation",
      lead: "Patient question: how can I make my appointments more useful?",
      main: "checklist",
      cards: [
        {
          id: "nd-this-week",
          title: "I just received a diagnosis. What should I do this week?",
          summary: "Three focuses — not the whole journey at once.",
        },
        {
          id: "nd-second-opinion",
          title: "Should I get a second opinion right away?",
          summary: "About confidence — not distrust.",
        },
        {
          id: "nd-records",
          title: "What information should I keep from the beginning?",
          summary: "Pathology, imaging, biomarkers, recommendations.",
        },
        {
          id: "nd-overwhelmed",
          title: "I feel overwhelmed. Is that normal?",
          summary: "Yes — a clear next step can reduce feeling lost.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the first week.",
        },
      ],
    },
  ],
};

const STAGE_IV_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Finding Your Next Step After Stage IV",
  pathSubtitle:
    "You do not need to solve every question today. Understand your situation, clarify what treatment may aim for, check key information, then prepare for the next conversation.",
  orientationTrail: [
    "Stabilize",
    "Situation",
    "Goals",
    "Next conversation",
  ],
  completedLabels: [
    "What Stage IV means in your situation",
    "How treatment goals are discussed",
    "Whether key information is available",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "What doctors have confirmed so far",
    "What information is still pending",
    "How urgent the next decision is",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Understand your situation",
      lead: "Patient question: what does Stage IV mean for me?",
      main: "siv-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my situation?",
          summary: "When people are facing Stage IV or advanced lung cancer.",
        },
        {
          id: "siv-active-treatment",
          title: "What kind of care do people with Stage IV often receive?",
          summary: "Many people receive active treatment tailored to their goals.",
        },
        {
          id: "siv-different-plans",
          title: "Why do people with the same Stage receive different plans?",
          summary: "Cancer biology, health, and goals shape the conversation.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Understand your treatment goals",
      lead: "Patient question: what are we hoping treatment can do?",
      main: "siv-goals",
      cards: [
        {
          id: "siv-goals-not-giving-up",
          title: "Do different treatment goals mean doctors are giving up?",
          summary: "Different goals do not mean less care.",
        },
        {
          id: "siv-strongest",
          title: "Is the strongest treatment always the best treatment?",
          summary: "A good choice balances benefit, risks, goals, and daily life.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "Make sure you have the right information",
      lead: "Patient question: what information affects my choices?",
      main: "siv-information",
      cards: [
        {
          id: "siv-biomarker",
          title: "Why does biomarker testing matter in Stage IV?",
          summary: "Some characteristics may change which options are discussed.",
        },
        {
          id: "siv-second-opinion",
          title: "Should I get a second opinion?",
          summary: "Helpful when decisions feel complex or confidence is low.",
        },
        {
          id: "siv-clinical-trial",
          title: "Are clinical trials worth considering?",
          summary: "One option to discuss — depending on fit and eligibility.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for ongoing decisions",
      lead: "Patient question: what happens after the first treatment decision?",
      main: "checklist",
      cards: [
        {
          id: "siv-first",
          title: "I just heard “Stage IV.” What should I do first?",
          summary: "Three focuses — not the whole journey at once.",
        },
        {
          id: "siv-statistics",
          title: "I already looked up Stage IV statistics. What now?",
          summary: "Group numbers are not your personal picture.",
        },
        {
          id: "siv-family",
          title: "How do I talk with my family about Stage IV?",
          summary: "Share what you know and what happens next.",
        },
        {
          id: "siv-worth-it",
          title: "How do I know if a treatment is worth it for me?",
          summary: "Benefit, side effects, daily life, and your priorities.",
        },
        {
          id: "siv-have-say",
          title: "Can I still have a say in my treatment?",
          summary: "Yes — your preferences belong in the conversation.",
        },
        {
          id: "scenario",
          title: "An example scenario",
          summary: "How someone might frame the first conversations.",
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
  [TREATMENT_PROGRESSION_SLUG]: TREATMENT_PROGRESSION_PATH,
  [RECURRENCE_SLUG]: RECURRENCE_PATH,
  [QUALITY_OF_LIFE_SLUG]: QUALITY_OF_LIFE_PATH,
  [FOLLOW_UP_SLUG]: FOLLOW_UP_PATH,
  [NEWLY_DIAGNOSED_SLUG]: NEWLY_DIAGNOSED_PATH,
  [STAGE_IV_SLUG]: STAGE_IV_PATH,
};

export function getEntryPathV2(slug: string): EntryPathV2 | null {
  return PATHS[slug] ?? null;
}
