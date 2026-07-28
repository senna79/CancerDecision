/**
 * Decision Path configs for Entry Template v2.
 * OS stages: Understand → Compare → Practical → Conversation
 */

import {
  BREAST_CARE_TEAM_SLUG,
  BREAST_GENETICS_SLUG,
  BREAST_METASTATIC_SLUG,
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_CLINICAL_TRIAL_SLUG,
  BREAST_FOLLOW_UP_SLUG,
  BREAST_GLOBAL_CARE_SLUG,
  BREAST_PRACTICAL_FIT_SLUG,
  BREAST_QOL_SLUG,
  BREAST_RECURRENCE_SLUG,
  BREAST_RADIATION_SLUG,
  BREAST_RECONSTRUCTION_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/breast-entry-slugs";
import {
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

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
export const CARE_CENTER_SLUG =
  "do-i-need-different-lung-cancer-center-or-specialized-expertise";
export const FEASIBILITY_SLUG =
  "can-my-lung-cancer-treatment-plan-work-with-my-real-life";
export const BRAIN_METS_SLUG =
  "what-are-my-options-if-lung-cancer-spreads-to-the-brain";
export const GLOBAL_CARE_SLUG =
  "when-to-consider-lung-cancer-care-abroad";

export {
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
};

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
      title: "Why does lung cancer biomarker testing matter?",
      lead: "Patient question: why is my doctor talking about this test?",
      main: "biomarker-understand",
      cards: [
        {
          id: "what-is",
          title: "What is lung cancer biomarker testing?",
          summary: "A plain-language definition.",
        },
        {
          id: "look-for",
          title: "What does lung cancer biomarker testing look for?",
          summary: "Features of your cancer — not a gene encyclopedia.",
        },
        {
          id: "situation-new-diagnosis",
          title: "I was recently diagnosed with lung cancer — does this apply?",
          summary: "When testing comes up after a new diagnosis.",
        },
        {
          id: "situation-choosing-treatment",
          title: "I’m choosing lung cancer treatment — does this apply?",
          summary: "When results may change options before locking a plan.",
        },
        {
          id: "situation-change-opinion",
          title: "My lung cancer plan changed or I want another opinion",
          summary: "When updated testing may matter again.",
        },
        {
          id: "who-needs",
          title: "Does everyone with lung cancer need the same biomarker tests?",
          summary: "Why testing is not identical for every person.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Could biomarker results change my lung cancer treatment options?",
      lead: "Patient question: what would this result actually be used for?",
      main: "does-not-decide",
      cards: [
        {
          id: "targeted",
          title: "Does a lung cancer biomarker result mean targeted therapy?",
          summary: "What a finding may open — and what it does not decide alone.",
        },
        {
          id: "if-none",
          title: "What if lung cancer has no targetable mutation?",
          summary: "Why “no match” is not the same as “no options.”",
        },
        {
          id: "which-checked",
          title: "Which lung cancer biomarkers are usually checked?",
          summary: "Ask what matters for your decision — not a public gene list.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know before lung cancer biomarker testing?",
      lead: "Patient question: what will I actually go through?",
      main: "practical-points",
      cards: [
        {
          id: "how-done",
          title: "How is lung cancer biomarker testing done?",
          summary: "Tissue already collected, blood tests, or a new sample.",
        },
        {
          id: "biopsy",
          title: "Do I need another biopsy for lung cancer biomarker testing?",
          summary: "When a new sample may be discussed — and when it may not.",
        },
        {
          id: "risks",
          title: "What are the biopsy risks for lung cancer biomarker testing?",
          summary: "Risks usually come from getting tissue, not the lab test itself.",
        },
        {
          id: "turnaround",
          title: "How long does biomarker testing take for lung cancer?",
          summary: "What affects turnaround — without a fixed calendar.",
        },
        {
          id: "bm-comprehensive",
          title: "What does “comprehensive” lung cancer biomarker testing mean?",
          summary: "Broad panels vs limited tests — and what to confirm was checked.",
        },
        {
          id: "bm-ask-tested",
          title: "Has my tumor been tested for the lung cancer biomarkers that matter?",
          summary: "A direct question that belongs in your next visit.",
        },
        {
          id: "delay",
          title: "Should I wait for biomarker results before starting lung cancer treatment?",
          summary: "Waiting is not automatically an unsafe delay.",
        },
        {
          id: "cost",
          title: "Lung cancer care: cost and insurance",
          summary: "Questions to ask before testing is ordered.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for lung cancer?",
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
          title: "Mistake: choosing before checking missing info for lung cancer",
          summary: "Why locking a plan too early can narrow options.",
        },
        {
          id: "mistake-2",
          title: "Mistake: assuming testing always delays care for lung cancer",
          summary: "Why waiting for information is not always unsafe delay.",
        },
        {
          id: "mistake-3",
          title: "Mistake: treating one result as the whole decision for lung cancer",
          summary: "Why results are one factor among several.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "Is this a situation where another opinion could help for lung cancer?",
      lead: "Patient question: when is a second opinion most valuable?",
      main: "second-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people usually consider another opinion.",
        },
        {
          id: "so-everyone",
          title: "Does everyone with lung cancer need a second opinion?",
          summary: "A support tool — not a sign something is wrong.",
        },
        {
          id: "so-after-two-hospitals",
          title:
            "I’ve already had two opinions — when does another review still help?",
          summary: "When a named gap remains — not when you only want agreement.",
        },
        {
          id: "so-disagree-plan",
          title:
            "I disagree with the plan — what should the outside review focus on?",
          summary: "Name the disagreement; ask for a written re-examination.",
        },
        {
          id: "so-delay",
          title: "Will a second opinion delay my lung cancer treatment?",
          summary: "Balance informed decisions with timely care.",
        },
        {
          id: "so-disrespect",
          title: "Is asking for a lung cancer second opinion disrespectful to my doctor?",
          summary: "How to frame confidence — not distrust.",
        },
        {
          id: "so-why-important",
          title: "Why is a second opinion important for lung cancer?",
          summary: "Clarity, confirmation, and options you may not have heard.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What could another doctor tell me that I do not already know for lung cancer?",
      lead: "Patient question: confirm, clarify, expand, or identify gaps?",
      main: "second-compare",
      cards: [
        {
          id: "so-change",
          title: "Can a second opinion change my lung cancer treatment plan?",
          summary: "Sometimes yes — confirmation can also be valuable.",
        },
        {
          id: "so-two-doctors",
          title: "What if two doctors recommend different lung cancer treatments?",
          summary: "Compare reasoning — not who is “right.”",
        },
        {
          id: "so-vs-travel",
          title: "Lung cancer second opinion vs traveling for care — which first?",
          summary: "Review first; travel only if in-person access is required.",
        },
        {
          id: "so-pathology",
          title: "Should my lung cancer diagnosis or biopsy be reviewed again?",
          summary: "When another pathology or imaging review may help.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I make sure the second doctor has the full picture for lung cancer?",
      lead: "Patient question: what records and expertise make the review useful?",
      main: "practical-points",
      cards: [
        {
          id: "so-records",
          title: "What records should I bring for a lung cancer second opinion?",
          summary: "A practical checklist before the appointment.",
        },
        {
          id: "so-records-package",
          title: "What records make a lung cancer second opinion usable?",
          summary: "Full package plus one sentence you want answered.",
        },
        {
          id: "so-specialist",
          title: "Should I seek a lung cancer specialist or cancer center?",
          summary: "Expertise, team review, and trial access.",
        },
        {
          id: "cost",
          title: "How much does a lung cancer second opinion cost?",
          summary: "Coverage and fees — questions instead of guesses.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask so the appointment is useful for lung cancer?",
      lead: "Patient question: how do I prepare for the conversation?",
      main: "checklist",
      cards: [
        {
          id: "so-mistakes",
          title: "What are common mistakes when getting a lung cancer second opinion?",
          summary: "Timing, incomplete records, and seeking only agreement.",
        },
        {
          id: "so-choose",
          title: "How do I choose between two different recommendations for lung cancer?",
          summary: "Tradeoffs, evidence, and your goals.",
        },
        {
          id: "so-again",
          title: "When might I want another opinion again for lung cancer?",
          summary: "Cancer care involves multiple decision points.",
        },
        {
          id: "so-family",
          title: "Should my family join the lung cancer second opinion appointment?",
          summary: "Support that helps you decide comfortably.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "What lung cancer treatment options are being discussed?",
      lead: "Patient question: what are all these treatments my doctor mentioned?",
      main: "treatment-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people are choosing among treatment options.",
        },
        {
          id: "tx-approaches",
          title: "What are the main treatment approaches for lung cancer?",
          summary: "Surgery, radiation, medicines, and trials — as categories.",
        },
        {
          id: "tx-combined",
          title: "Why are treatments sometimes combined for lung cancer?",
          summary: "Different approaches can serve different roles.",
        },
        {
          id: "tx-newer",
          title: "Is the newest lung cancer treatment always best for me?",
          summary: "Fit matters more than novelty.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Why did my doctor recommend this treatment for lung cancer?",
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
          title: "How do lung cancer biomarkers affect treatment choices?",
          summary: "One important piece — not the whole decision.",
        },
        {
          id: "tx-less-aggressive",
          title: "Why might my doctor recommend a less aggressive lung cancer treatment?",
          summary: "Appropriate treatment is not maximum treatment.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I know which option has the right balance for lung cancer?",
      lead: "Patient question: how should I compare options before deciding?",
      main: "treatment-compare",
      cards: [
        {
          id: "tx-tradeoffs",
          title: "How do I compare treatment benefits and risks for lung cancer?",
          summary: "Benefit, risk, and life impact — side by side.",
        },
        {
          id: "tx-practical-fit",
          title: "Besides benefit and side effects, what else should I compare for lung cancer?",
          summary: "Visit load, travel, recovery, and support needs.",
        },
        {
          id: "tx-cant-manage",
          title: "Can my lung cancer treatment plan work with my real life?",
          summary: "Say so early — plans can sometimes be adjusted.",
        },
        {
          id: "tx-qol",
          title: "Can quality of life affect my lung cancer treatment decision?",
          summary: "Your priorities belong in the comparison.",
        },
        {
          id: "tx-if-not-working",
          title: "What happens if my first lung cancer treatment does not work?",
          summary: "Plans can change — the first decision is not the last.",
        },
        {
          id: "tx-take-time",
          title: "Can I take time to decide between lung cancer treatments?",
          summary: "Ask how urgent the decision is — and what you are waiting for.",
        },
        {
          id: "tx-chemo-vs-immuno",
          title: "How do lung cancer chemotherapy and immunotherapy differ?",
          summary: "Different tools — compare purpose, not just “stronger.”",
        },
        {
          id: "tx-targeted-vs-immuno",
          title: "How do targeted therapy and immunotherapy differ for lung cancer?",
          summary: "One uses cancer features; the other engages the immune system.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before choosing a treatment for lung cancer?",
      lead: "Patient question: how do I prepare for the treatment conversation?",
      main: "checklist",
      cards: [
        {
          id: "tx-mistakes",
          title: "What are common mistakes when choosing lung cancer treatment?",
          summary: "Pitfalls that skip the whole picture.",
        },
        {
          id: "second-opinion",
          title: "Should I get a second opinion before choosing lung cancer treatment?",
          summary: "When another view may help before locking a plan.",
        },
        {
          id: "tx-trial",
          title: "Should I consider a lung cancer clinical trial?",
          summary: "How to ask whether a study fits your situation.",
        },
        {
          id: "scenario",
          title: "An example lung cancer treatment comparison",
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
      title: "Why is surgery being considered for lung cancer?",
      lead: "Patient question: why are my doctors talking about surgery?",
      main: "surgery-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people start thinking about surgery.",
        },
        {
          id: "surgery-candidate",
          title: "What makes someone a candidate for lung cancer surgery?",
          summary: "Why surgery may enter the discussion.",
        },
        {
          id: "surgery-stage",
          title: "What stage is surgery usually considered for for lung cancer?",
          summary: "Stage matters — but it is not the whole decision.",
        },
        {
          id: "surgery-gone",
          title: "Does lung cancer surgery mean the cancer is gone?",
          summary: "What surgery aims to achieve — and what it does not guarantee.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Is surgery the best choice for my situation for lung cancer?",
      lead: "Patient question: how should I compare surgery with other options?",
      main: "surgery-compare",
      cards: [
        {
          id: "surgery-before",
          title: "Do I need treatment before lung cancer surgery?",
          summary: "When medicines or other care come first.",
        },
        {
          id: "surgery-biomarker",
          title: "Could lung cancer biomarker testing affect my surgery plan?",
          summary: "When results may change the comparison.",
        },
        {
          id: "surgery-when-not",
          title: "When is surgery not right for my lung cancer?",
          summary: "Why another path may fit better.",
        },
        {
          id: "surgery-sbrt",
          title: "How does SBRT (focused radiation) compare with lung cancer surgery?",
          summary: "Two local treatments — ask which fits your situation.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What would surgery actually mean for me for lung cancer?",
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
          title: "How long does recovery usually take for lung cancer?",
          summary: "What to ask about return to activities and home support.",
        },
        {
          id: "surgery-breathing",
          title: "Will lung cancer surgery affect my breathing or daily life?",
          summary: "Setting realistic expectations for life after surgery.",
        },
        {
          id: "cost",
          title: "What about cost and insurance for lung cancer care?",
          summary: "Questions to ask before a major procedure.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "How can I feel confident about this decision for lung cancer?",
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
          id: "surgery-ask-surgeon",
          title: "What should I ask a thoracic surgeon about lung cancer before deciding?",
          summary: "Goals, alternatives, recovery, and second-opinion timing.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "Why would a lung cancer clinical trial be mentioned for someone like me?",
      lead: "Patient question: when do trials become part of the conversation?",
      main: "trial-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people start hearing about clinical trials.",
        },
        {
          id: "trial-not-last",
          title: "Are clinical trials only a last resort for lung cancer?",
          summary: "Why “last resort” is a common misunderstanding.",
        },
        {
          id: "trial-ask-early",
          title: "Should I ask about clinical trials before starting lung cancer treatment?",
          summary: "Why earlier discussion can still help.",
        },
        {
          id: "trial-not-subject",
          title: "Does joining a lung cancer clinical trial mean I am a test subject?",
          summary: "Research with structure — and your choice to participate.",
        },
        {
          id: "trial-stage4",
          title: "Are clinical trials relevant for Stage IV lung cancer?",
          summary: "Often discussed — fit still depends on your situation.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How do I know if a trial is relevant to me for lung cancer?",
      lead: "Patient question: what makes a trial a fit — or not?",
      main: "trial-fit",
      cards: [
        {
          id: "trial-qualify",
          title: "Why might I not qualify for a lung cancer clinical trial?",
          summary: "Eligibility protects safety and research accuracy.",
        },
        {
          id: "trial-biomarkers",
          title: "How do biomarkers affect lung cancer clinical trials?",
          summary: "When cancer features open or close trial doors.",
        },
        {
          id: "trial-replace",
          title: "Can a clinical trial replace my current lung cancer treatment?",
          summary: "Alternative, combination, or something else — depending on design.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How should I compare a trial with my other options for lung cancer?",
      lead: "Patient question: goal, evidence, and impact — side by side.",
      main: "trial-compare",
      cards: [
        {
          id: "trial-better",
          title: "Clinical trial vs standard lung cancer treatment — how should I compare?",
          summary: "Not automatically — fit and uncertainty both matter.",
        },
        {
          id: "trial-risks",
          title: "What risks should I consider before joining for lung cancer?",
          summary: "Unknowns, side effects, and extra appointments.",
        },
        {
          id: "trial-daily-life",
          title: "How would a lung cancer clinical trial affect daily life?",
          summary: "Visits, travel, and what a normal week may look like.",
        },
        {
          id: "trial-if-not",
          title: "What happens if the trial does not work for lung cancer?",
          summary: "Options afterward — and whether you can stop.",
        },
        {
          id: "trial-near-me",
          title: "How do I find lung cancer clinical trials near me?",
          summary: "Ask your team first — then use trusted trial finders.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before deciding for lung cancer?",
      lead: "Patient question: how do I prepare for the trial conversation?",
      main: "checklist",
      cards: [
        {
          id: "trial-mistakes",
          title: "What mistakes do patients often make when considering trials for lung cancer?",
          summary: "Timing, “last resort,” and chasing “new.”",
        },
        {
          id: "trial-family",
          title: "Should my family be involved in this decision for lung cancer?",
          summary: "Travel, support, and uncertainty are shared decisions.",
        },
        {
          id: "second-opinion",
          title: "Should I get a lung cancer second opinion about a clinical trial?",
          summary: "When another view may help before you decide.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "Does lung cancer treatment change mean my cancer is getting worse?",
      lead: "Patient question: what does a treatment change actually mean?",
      main: "progression-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people face a treatment change decision.",
        },
        {
          id: "prog-not-worse",
          title: "What does it mean if lung cancer treatment stops working?",
          summary: "Reassessing is not the same as having no options.",
        },
        {
          id: "prog-how-know",
          title: "How do doctors know if treatment is working for lung cancer?",
          summary: "Imaging, symptoms, and the whole picture — not one result.",
        },
        {
          id: "prog-can-change",
          title: "Can cancer come back or change after lung cancer treatment?",
          summary: "Why the next decision depends on the current situation.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How will doctors decide what comes next for lung cancer?",
      lead: "Patient question: what information guides the next decision?",
      main: "progression-info",
      cards: [
        {
          id: "prog-biopsy",
          title: "Will I need another biopsy if treatment stops working for lung cancer?",
          summary: "When additional testing may change options.",
        },
        {
          id: "prog-biomarkers",
          title: "Can my lung cancer biomarker information change over time?",
          summary: "Whether prior results still guide the next choice.",
        },
        {
          id: "prog-prior",
          title: "Why does my previous treatment matter for lung cancer?",
          summary: "What worked, how long, and what side effects taught us.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What options do I have now for lung cancer?",
      lead: "Patient question: how do I compare next steps after treatment changes?",
      main: "progression-compare",
      cards: [
        {
          id: "prog-options",
          title: "What are my options if lung cancer treatment stops working?",
          summary: "Approved treatments, combinations, trials, supportive care.",
        },
        {
          id: "prog-newest",
          title: "Is the newest treatment always the best next treatment for lung cancer?",
          summary: "Fit matters more than novelty.",
        },
        {
          id: "prog-goals",
          title: "What if I do not want another aggressive lung cancer treatment?",
          summary: "Your priorities belong in the next decision.",
        },
        {
          id: "prog-trial",
          title: "When should I consider a lung cancer clinical trial?",
          summary: "When standard options are changing or features match.",
        },
        {
          id: "prog-targeted-stops",
          title: "What are my options if targeted therapy stops working for lung cancer?",
          summary: "Reassess — including whether new testing could change choices.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before changing treatment for lung cancer?",
      lead: "Patient question: how do I prepare for the next conversation?",
      main: "checklist",
      cards: [
        {
          id: "prog-mistakes",
          title: "What mistakes do patients make when lung cancer treatment changes?",
          summary: "No options left, chasing “new,” skipping goals.",
        },
        {
          id: "prog-no-more-chemo",
          title: "What if my oncologist says there are no more lung cancer chemotherapy options?",
          summary: "Clarify what “no more” means — and what else may still be discussed.",
        },
        {
          id: "second-opinion",
          title: "Should I get a second opinion when lung cancer treatment changes?",
          summary: "When another view may help at this decision point.",
        },
        {
          id: "prog-helping",
          title: "How do I know if treatment is helping me for lung cancer?",
          summary: "What to watch for and how often progress is checked.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "Does lung cancer recurrence mean my cancer has failed treatment?",
      lead: "Patient question: what does recurrence really mean?",
      main: "recurrence-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people face a recurrence decision.",
        },
        {
          id: "rec-not-failed",
          title: "Lung cancer came back — does that mean treatment failed?",
          summary: "Reassessing is not the same as everything failed.",
        },
        {
          id: "rec-why",
          title: "Why can lung cancer come back after treatment?",
          summary: "Where, when, and how it behaves now matter.",
        },
        {
          id: "rec-harder",
          title: "Is lung cancer recurrence always harder to treat?",
          summary: "Every recurrence is different.",
        },
        {
          id: "rec-after-surgery",
          title: "What if lung cancer comes back after surgery?",
          summary: "Why follow-up matters — and what gets reassessed.",
        },
        {
          id: "rec-after-lobectomy",
          title: "What if lung cancer comes back after lobectomy?",
          summary: "Location and prior treatment shape the next comparison.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How will doctors decide what happens next for lung cancer?",
      lead: "Patient question: what has changed before choosing the next step?",
      main: "recurrence-info",
      cards: [
        {
          id: "rec-biopsy",
          title: "Will I need another biopsy after lung cancer recurrence?",
          summary: "Only when testing could change the options.",
        },
        {
          id: "rec-after-immuno",
          title: "What if lung cancer comes back after immunotherapy?",
          summary: "Prior treatment history is part of the next decision.",
        },
        {
          id: "rec-characteristics",
          title: "Can my cancer characteristics change over time for lung cancer?",
          summary: "Why prior information may need a fresh look.",
        },
        {
          id: "rec-prior",
          title: "How does my previous treatment affect my next options for lung cancer?",
          summary: "What worked, how long, and what remains.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What choices do I have now for lung cancer?",
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
          title: "Should I consider a lung cancer clinical trial after recurrence?",
          summary: "When research options may fit.",
        },
        {
          id: "rec-qol",
          title: "How do I balance treatment and quality of life in lung cancer care?",
          summary: "Your priorities belong in the decision.",
        },
        {
          id: "rec-newest",
          title: "Is the newest treatment always the best choice for lung cancer?",
          summary: "Fit matters more than novelty.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before deciding what comes next for lung cancer?",
      lead: "Patient question: how do I prepare for the conversation?",
      main: "checklist",
      cards: [
        {
          id: "second-opinion",
          title: "Should I get a lung cancer second opinion after recurrence?",
          summary: "When another view may help at a complex moment.",
        },
        {
          id: "rec-mistakes",
          title: "What mistakes do patients often make after lung cancer recurrence?",
          summary: "No options, fear-only choices, skipping goals.",
        },
        {
          id: "rec-family",
          title: "What should my family understand after lung cancer recurrence?",
          summary: "What changed, options, and how they can help.",
        },
        {
          id: "rec-supportive",
          title: "When should supportive care in lung cancer become part of the conversation?",
          summary: "Alongside treatment — not only at the end of options.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "What should my lung cancer treatment plan help me protect?",
      lead: "Patient question: what matters most in my daily life?",
      main: "qol-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When quality of life becomes part of the decision.",
        },
        {
          id: "qol-supportive-worse",
          title: "Does needing supportive care in lung cancer mean my cancer is getting worse?",
          summary: "Supportive care can run alongside treatment at any stage.",
        },
        {
          id: "qol-tell-doctor",
          title: "Should I tell my doctor what matters most to me for lung cancer?",
          summary: "Your priorities are important medical information.",
        },
        {
          id: "qol-affect-choice",
          title: "Can quality of life in lung cancer care affect which treatment I choose?",
          summary: "Benefit, risks, and personal goals all count.",
        },
        {
          id: "qol-work",
          title: "Can I work during lung cancer treatment?",
          summary: "Often possible with planning — ask what a treatment week looks like.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What can I do when treatment affects how I feel for lung cancer?",
      lead: "Patient question: how do I manage symptoms before they take over?",
      main: "qol-symptoms",
      cards: [
        {
          id: "qol-which-symptoms",
          title: "Which symptoms should I tell my doctor about for lung cancer?",
          summary: "Report changes that affect daily activities.",
        },
        {
          id: "qol-wait-appointment",
          title: "Should I wait until my next appointment to mention side effects for lung cancer?",
          summary: "Some symptoms need earlier attention.",
        },
        {
          id: "qol-adjust-treatment",
          title: "Can treatment be adjusted if side effects become difficult for lung cancer?",
          summary: "Tell your team what is happening.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I know if a treatment is still right for me for lung cancer?",
      lead: "Patient question: how do I balance benefit and treatment burden?",
      main: "qol-balance",
      cards: [
        {
          id: "qol-burden-too-much",
          title: "How do I know if lung cancer treatment burden is becoming too much?",
          summary: "Daily life, goals, and ways to reduce burden.",
        },
        {
          id: "qol-plan-hard",
          title: "What if the lung cancer plan is medically right but too hard to live with?",
          summary: "Raise practical limits early — adjustments may be possible.",
        },
        {
          id: "qol-cost",
          title: "Lung cancer treatment cost — what should I ask?",
          summary: "Yes at a high level — affordability and time belong on the table.",
        },
        {
          id: "qol-more-better",
          title: "Is more treatment always better for lung cancer?",
          summary: "More benefit can also mean more burden.",
        },
        {
          id: "qol-goals-change",
          title: "Can my lung cancer treatment goals change over time?",
          summary: "Priorities can be revisited as circumstances change.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What support can help me live better during lung cancer treatment?",
      lead: "Patient question: how do I build a support plan around my care?",
      main: "checklist",
      cards: [
        {
          id: "qol-hospice",
          title: "Palliative care vs hospice for lung cancer — what’s the difference?",
          summary: "They are not the same thing.",
        },
        {
          id: "qol-palliative-home",
          title: "What does palliative care for lung cancer at home involve?",
          summary: "Comfort and support where you live — ask what is available.",
        },
        {
          id: "qol-family",
          title: "How can my family help without taking over decisions for lung cancer?",
          summary: "Support your choices — keep your preferences central.",
        },
        {
          id: "qol-services",
          title: "What support services should I ask about for lung cancer?",
          summary: "Symptoms, nutrition, rehab, emotions, and practical help.",
        },
        {
          id: "qol-who-helps",
          title: "Who helps with difficult lung cancer treatment decisions?",
          summary: "You do not have to decide alone.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "Am I done with cancer care after lung cancer treatment?",
      lead: "Patient question: what happens when active treatment ends?",
      main: "followup-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people move into follow-up care.",
        },
        {
          id: "fu-cancer-gone",
          title: "What happens after lung cancer treatment ends?",
          summary: "A milestone — and a reason follow-up continues.",
        },
        {
          id: "fu-first-visit",
          title: "What should I expect at my first lung cancer follow-up visit?",
          summary: "Symptoms, recovery, results, and next monitoring.",
        },
        {
          id: "fu-who-manages",
          title: "Who manages my care after lung cancer treatment?",
          summary: "Know who to contact for different concerns.",
        },
        {
          id: "fu-plan-include",
          title: "What should my lung cancer follow-up plan include?",
          summary: "Schedule, symptoms to report, and who to call between visits.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What are doctors looking for during lung cancer follow-up?",
      lead: "Patient question: what is my follow-up plan watching for?",
      main: "followup-watching",
      cards: [
        {
          id: "fu-scan-frequency",
          title: "What scan schedule should I expect after lung cancer treatment?",
          summary: "Appropriate monitoring — not simply more testing.",
        },
        {
          id: "fu-normal-scan",
          title: "Does a normal scan mean I never need to worry again for lung cancer?",
          summary: "Encouraging news — and why a plan still matters.",
        },
        {
          id: "fu-more-scans",
          title: "Are more scans always better for lung cancer?",
          summary: "Balance information, stress, cost, and procedures.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I do if something changes for lung cancer?",
      lead: "Patient question: what actions should I take between appointments?",
      main: "followup-between",
      cards: [
        {
          id: "fu-which-symptoms",
          title: "Which symptoms should I report after lung cancer treatment?",
          summary: "Ask which changes matter most for you.",
        },
        {
          id: "fu-between-visits",
          title: "What if I notice something between appointments for lung cancer?",
          summary: "Do not wait automatically — ask what to do.",
        },
        {
          id: "fu-fear",
          title: "How do I handle fear of lung cancer recurrence?",
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
          title: "What long-term effects should I watch for for lung cancer?",
          summary: "Breathing, fatigue, pain, emotions, recovery.",
        },
        {
          id: "fu-activities",
          title: "When can I return to normal activities for lung cancer?",
          summary: "Recovery varies — ask what is safe to restart.",
        },
        {
          id: "fu-lifestyle",
          title: "Should I change my lifestyle after lung cancer treatment?",
          summary: "Realistic changes you can maintain.",
        },
        {
          id: "fu-records",
          title: "Should I keep my cancer records for lung cancer?",
          summary: "Pathology, imaging, treatments, biomarkers, meds.",
        },
        {
          id: "fu-second-opinion",
          title: "When should I seek another opinion during lung cancer follow-up?",
          summary: "When a new decision or more confidence is needed.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "Get clear on your lung cancer diagnosis",
      lead: "Patient question: what exactly do I have?",
      main: "nd-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people are newly diagnosed with lung cancer.",
        },
        {
          id: "nd-more-tests",
          title: "Why do doctors need more tests after lung cancer diagnosis?",
          summary: "A biopsy may confirm cancer — more detail may still matter.",
        },
        {
          id: "nd-not-immediate",
          title: "How soon do I need treatment after lung cancer diagnosis?",
          summary: "The best plan depends on a more complete picture.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Make sure you have the information needed for lung cancer",
      lead: "Patient question: do we know enough to choose a treatment?",
      main: "nd-information",
      cards: [
        {
          id: "nd-biomarker",
          title: "Could biomarker testing change my lung cancer treatment options?",
          summary: "Ask whether results would change what you discuss.",
        },
        {
          id: "nd-waiting",
          title: "Should I start treatment right away — or wait for more information for lung cancer?",
          summary: "Not every wait is the same — ask how urgent it is.",
        },
        {
          id: "nd-start-right-away",
          title: "Should I start treatment right away after lung cancer diagnosis?",
          summary: "Urgency varies — ask what must happen now vs after key results.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "Understand the decisions ahead for lung cancer",
      lead: "Patient question: what decisions will I eventually need to make?",
      main: "nd-ahead",
      cards: [
        {
          id: "nd-focus-first",
          title: "What decision should I focus on first for lung cancer?",
          summary: "Your next decision matters more than every future one.",
        },
        {
          id: "nd-not-expert",
          title: "Do I need to understand every treatment before my first appointment for lung cancer?",
          summary: "No — know what you know, what you don’t, and what to ask.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for your next important conversation for lung cancer",
      lead: "Patient question: how can I make my appointments more useful?",
      main: "checklist",
      cards: [
        {
          id: "nd-this-week",
          title: "I just received a lung cancer diagnosis. What should I do this week?",
          summary: "Three focuses — not the whole journey at once.",
        },
        {
          id: "nd-ask-oncologist",
          title: "What questions should I ask my oncologist after lung cancer diagnosis?",
          summary: "A focused ask list — not fifty questions at once.",
        },
        {
          id: "nd-ask-thoracic",
          title: "What should I ask a thoracic surgeon about lung cancer?",
          summary: "Goals, alternatives, experience, and recovery expectations.",
        },
        {
          id: "nd-second-opinion",
          title: "Should I get a second opinion after a lung cancer diagnosis?",
          summary: "About confidence — not distrust.",
        },
        {
          id: "nd-records",
          title: "What information should I keep from the beginning for lung cancer?",
          summary: "Pathology, imaging, biomarkers, recommendations.",
        },
        {
          id: "nd-overwhelmed",
          title: "I feel overwhelmed. Is that normal for lung cancer?",
          summary: "Yes — a clear next step can reduce feeling lost.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
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
      title: "Understand your situation for lung cancer",
      lead: "Patient question: what does Stage IV mean for me?",
      main: "siv-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people are facing Stage IV or advanced lung cancer.",
        },
        {
          id: "siv-active-treatment",
          title: "What kind of care do people with Stage IV lung cancer often receive?",
          summary: "Many people receive active treatment tailored to their goals.",
        },
        {
          id: "siv-different-plans",
          title: "Why do people with the same Stage receive different plans for lung cancer?",
          summary: "Cancer biology, health, and goals shape the conversation.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Understand your lung cancer treatment goals",
      lead: "Patient question: what are we hoping treatment can do?",
      main: "siv-goals",
      cards: [
        {
          id: "siv-goals-not-giving-up",
          title: "Do different lung cancer treatment goals mean doctors are giving up?",
          summary: "Different goals do not mean less care.",
        },
        {
          id: "siv-strongest",
          title: "Is the strongest treatment always the best treatment for lung cancer?",
          summary: "A good choice balances benefit, risks, goals, and daily life.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "Make sure you have the right information for lung cancer",
      lead: "Patient question: what information affects my choices?",
      main: "siv-information",
      cards: [
        {
          id: "siv-biomarker",
          title: "Should I wait for biomarkers with stage 4 lung cancer?",
          summary: "Some characteristics may change which options are discussed.",
        },
        {
          id: "siv-second-opinion",
          title: "Should I get a lung cancer second opinion?",
          summary: "Helpful when decisions feel complex or confidence is low.",
        },
        {
          id: "siv-clinical-trial",
          title: "Should I consider a clinical trial for stage 4 lung cancer?",
          summary: "One option to discuss — depending on fit and eligibility.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for ongoing decisions for lung cancer",
      lead: "Patient question: what happens after the first treatment decision?",
      main: "checklist",
      cards: [
        {
          id: "siv-first",
          title: "Stage 4 lung cancer — what should I do first?",
          summary: "Three focuses — not the whole journey at once.",
        },
        {
          id: "siv-statistics",
          title: "I already looked up Stage IV lung cancer statistics. What now?",
          summary: "Group numbers are not your personal picture.",
        },
        {
          id: "siv-family",
          title: "How do I talk with my family about Stage IV lung cancer?",
          summary: "Share what you know and what happens next.",
        },
        {
          id: "siv-worth-it",
          title: "How do I know if a treatment is worth it for me for lung cancer?",
          summary: "Benefit, side effects, daily life, and your priorities.",
        },
        {
          id: "siv-have-say",
          title: "Can I still have a say in my lung cancer treatment?",
          summary: "Yes — your preferences belong in the conversation.",
        },
        {
          id: "siv-ask",
          title: "What questions should I ask for Stage IV lung cancer?",
          summary: "Goals, biomarkers, options, and what matters in daily life.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
          summary: "How someone might frame the first conversations.",
        },
      ],
    },
  ],
};

const CARE_CENTER_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Choosing Your Lung Cancer Care Team",
  pathSubtitle:
    "Clarify when another team may help → understand care setups → know what to look for → prepare records and questions.",
  orientationTrail: [
    "When it helps",
    "Care setups",
    "What to look for",
    "Prepare",
  ],
  completedLabels: [
    "When another team may help",
    "How care setups differ",
    "What to look for in a team",
    "Questions and records to prepare",
  ],
  practicalPoints: [
    "What decision or expertise gap you are trying to improve",
    "Whether hybrid care (specialist + local) could fit",
    "How follow-up would be coordinated",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "When should I consider a specialized team for lung cancer?",
      lead: "Patient question: do I need to go to a major cancer center?",
      main: "cc-when",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people wonder about specialized lung cancer expertise.",
        },
        {
          id: "cc-everyone",
          title: "Do I need a major cancer center for lung cancer?",
          summary: "No — the right level of care depends on your situation.",
        },
        {
          id: "cc-who-treats",
          title: "Who treats lung cancer — and which specialist do I need?",
          summary: "Roles differ — ask who leads decisions for your situation.",
        },
        {
          id: "cc-thoracic-onc",
          title: "What is a thoracic oncologist for lung cancer?",
          summary: "A specialist focused on cancers of the chest, including lung cancer.",
        },
        {
          id: "cc-vs-second-opinion",
          title: "How is this different from a lung cancer second opinion?",
          summary: "Second opinion reviews a decision; care team shapes ongoing care.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Understand different care setups for lung cancer",
      lead: "Patient question: what kinds of cancer care centers exist?",
      main: "cc-setups",
      cards: [
        {
          id: "cc-hybrid",
          title: "Can I get lung cancer treatment locally after seeing a specialist?",
          summary: "Many people build a care network — not one location only.",
        },
        {
          id: "cc-tumor-board",
          title: "What is a tumor board for lung cancer?",
          summary: "Specialists reviewing cases together — not just one doctor.",
        },
        {
          id: "cc-multidisciplinary",
          title: "What does multidisciplinary support mean in practice for lung cancer?",
          summary: "Team review, clear lead, and when cases go back to the group.",
        },
        {
          id: "cc-travel",
          title: "Should I travel far for cancer treatment for lung cancer?",
          summary: "Weigh complexity, local expertise, visit frequency, and support.",
        },
        {
          id: "cc-when-abroad-branch",
          title: "When does “another center” become “another country” for lung cancer?",
          summary: "Only when a named gap requires leaving home — not by reputation.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I look for in a lung cancer team?",
      lead: "Patient question: how do I evaluate a care team?",
      main: "cc-look-for",
      cards: [
        {
          id: "cc-nci",
          title: "What does NCI-designated mean for lung cancer?",
          summary: "A U.S. research-and-care signal — one factor, not a ranking.",
        },
        {
          id: "cc-famous",
          title: "Should I choose the most famous lung cancer center?",
          summary: "Not necessarily — fit matters more than reputation alone.",
        },
        {
          id: "cc-capabilities",
          title: "How do I choose a hospital for complex lung cancer care?",
          summary:
            "Match capabilities to your decision — tumor board, biomarkers, coordination.",
        },
        {
          id: "cc-how-compare",
          title: "How should I compare lung cancer care teams or centers?",
          summary: "Same factors for each — not fame or brand rankings.",
        },
        {
          id: "cc-remote-review",
          title: "Can a center review my case before I visit for lung cancer?",
          summary: "Many offer remote review — ask what records they need.",
        },
        {
          id: "cc-afford",
          title: "What if travel is hard or expensive for lung cancer?",
          summary: "Local expertise, remote consults, and coordinated review.",
        },
        {
          id: "cc-insurance",
          title: "Can insurance or network rules affect where I get care for lung cancer?",
          summary: "Name coverage constraints early — you do not need to be an expert.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare before contacting a lung cancer care team",
      lead: "Patient question: what should I bring and ask?",
      main: "checklist",
      cards: [
        {
          id: "cc-records",
          title: "What medical information should I prepare for lung cancer?",
          summary: "Reports, scans, biomarkers — plus your expertise goal.",
        },
        {
          id: "cc-coordination",
          title: "How do I keep care from becoming fragmented for lung cancer?",
          summary: "Ask who coordinates care and how follow-up will work.",
        },
        {
          id: "cc-multisite",
          title: "How do I keep a multi-site plan workable for lung cancer?",
          summary: "Who coordinates visits, records, and changes between sites.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
          summary: "How someone might decide whether another team helps.",
        },
      ],
    },
  ],
};

const FEASIBILITY_PATH: EntryPathV2 = {
  pathEyebrow: "Practical fit",
  pathTitle: "Making Sure Your Plan Can Work With Real Life",
  pathSubtitle:
    "Practical factors belong in the conversation — then go to the decision page that matches your question.",
  orientationTrail: [
    "Why it matters",
    "Where to go",
    "What to ask",
    "Next conversation",
  ],
  completedLabels: [
    "Why practical fit belongs in the decision",
    "Which decision page to open next",
    "What to ask your care team",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "What a normal treatment week may look like",
    "Travel, time, or cost pressures to plan for",
    "What could be adjusted if the plan becomes too hard",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does practical fit matter for lung cancer?",
      lead: "Patient question: can this plan work with my real life?",
      main: "fe-why",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When cost, travel, time, or support may affect the plan.",
        },
        {
          id: "fe-belongs",
          title: "Do practical concerns belong in a medical conversation for lung cancer?",
          summary: "Yes — they do not replace medical advice, but they matter.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Where should I go next for lung cancer?",
      lead: "Patient question: which decision page matches my concern?",
      main: "fe-where",
      cards: [
        {
          id: "fe-not-prices",
          title: "Will this page list prices or insurance rules for lung cancer?",
          summary: "No — those vary. Name constraints with your team instead.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I ask about practical fit for lung cancer?",
      lead: "Patient question: what three questions help most?",
      main: "fe-ask",
      cards: [
        {
          id: "fe-cost-ask",
          title: "What cost and logistics questions should I ask for lung cancer?",
          summary: "Name constraints early — without needing exact prices first.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for the practical-fit conversation for lung cancer",
      lead: "Patient question: how do I bring this up with my care team?",
      main: "checklist",
      cards: [
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
          summary: "How someone might name practical limits early.",
        },
      ],
    },
  ],
};

const BRAIN_METS_PATH: EntryPathV2 = {
  pathTitle: "Brain Metastases Decision Path",
  pathSubtitle:
    "What brain findings mean → what guides the next choice → how to compare approaches → what to ask.",
  completedLabels: [
    "What brain involvement means for the next decision",
    "What information should guide the discussion",
    "How to compare brain-directed and whole-body approaches",
    "Questions for the next conversation",
  ],
  practicalPoints: [
    "Goal for the brain findings and for cancer elsewhere",
    "Expected benefit, risks, and effects on thinking or daily life",
    "Timing — what is urgent versus what can wait for clearer information",
    "Support at home, steroids, travel, and what you want to protect",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Does finding lung cancer in the brain change everything?",
      lead: "Patient question: what do brain metastases mean for my next decision?",
      main: "brain-mets-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary: "When people face a brain metastases decision.",
        },
        {
          id: "bm-what-means",
          title: "What does it mean if lung cancer has spread to the brain?",
          summary: "A new location — not an automatic next plan.",
        },
        {
          id: "bm-still-options",
          title: "Does brain involvement mean there are no options left for lung cancer?",
          summary: "It changes the conversation — it does not erase choice.",
        },
        {
          id: "bm-scan-vs-symptoms",
          title: "Is a scan finding the same as symptoms I can feel for lung cancer?",
          summary: "Symptoms and imaging can create different priorities.",
        },
        {
          id: "bm-urgent",
          title: "When is a brain finding an emergency for lung cancer?",
          summary: "Sudden neurologic changes need urgent care first.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What information should guide the next discussion for lung cancer?",
      lead: "Patient question: what do doctors need to know before comparing options?",
      main: "brain-mets-info",
      cards: [
        {
          id: "bm-what-matters",
          title: "What details matter most before we choose a path for lung cancer?",
          summary: "Imaging, symptoms, body disease, history, and goals.",
        },
        {
          id: "bm-number-location",
          title: "Do the number and location of brain lesions change options for lung cancer?",
          summary: "Why the imaging picture shapes local treatment talks.",
        },
        {
          id: "bm-body-disease",
          title: "Why does cancer outside the brain still matter for lung cancer?",
          summary: "Brain and body plans are often considered together.",
        },
        {
          id: "bm-biomarkers",
          title: "Do lung cancer biomarker results still matter with brain metastases?",
          summary: "Molecular information can still shape systemic choices.",
        },
        {
          id: "bm-who-involved",
          title: "Who should be involved in this decision for lung cancer?",
          summary: "Oncology, radiation, surgery, and symptom support.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title:
        "How do I compare approaches that may involve the brain and the rest of my body?",
      lead: "Patient question: how do I weigh local treatment, systemic therapy, and daily life?",
      main: "brain-mets-compare",
      cards: [
        {
          id: "bm-local-options",
          title: "What local brain treatments might doctors discuss for lung cancer?",
          summary: "Focused radiation, broader radiation, or surgery — when relevant.",
        },
        {
          id: "bm-systemic-options",
          title: "What about systemic treatment if the cancer is also elsewhere for lung cancer?",
          summary: "Whole-body options and how they relate to the brain plan.",
        },
        {
          id: "bm-how-compare",
          title: "How should I compare the options on the table for lung cancer?",
          summary: "Goal, benefit, risk, timing, and fit — same questions each time.",
        },
        {
          id: "bm-daily-life",
          title: "How could treatment affect thinking, steroids, and daily life for lung cancer?",
          summary: "Practical realities that belong in the decision.",
        },
        {
          id: "bm-trial",
          title: "Should I ask about a lung cancer clinical trial?",
          summary: "When research options may fit brain metastases decisions.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before deciding what comes next for lung cancer?",
      lead: "Patient question: how do I prepare for the conversation?",
      main: "checklist",
      cards: [
        {
          id: "second-opinion",
          title: "Would a lung cancer second opinion help with brain metastases?",
          summary: "When another review may add clarity or confidence.",
        },
        {
          id: "bm-mistakes",
          title: "What mistakes are common after hearing about lung cancer brain mets?",
          summary: "Fear-only decisions and missing the whole picture.",
        },
        {
          id: "bm-family",
          title: "How do we talk about this as a family for lung cancer?",
          summary: "Plain language, priorities, and how others can help.",
        },
        {
          id: "bm-records",
          title: "What records should I bring to the appointment for lung cancer?",
          summary: "Imaging, pathology, biomarkers, and your priorities.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
          summary: "How someone might move from shock to a clearer next question.",
        },
      ],
    },
  ],
};

const GLOBAL_CARE_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "When to Consider Care in Another City or Country",
  pathSubtitle:
    "Name the capability gap → compare remote review vs travel → check logistics and cost → prepare questions before booking.",
  orientationTrail: [
    "Capability gap",
    "Remote vs travel",
    "Logistics & cost",
    "Prepare",
  ],
  completedLabels: [
    "Why people explore care across borders",
    "Remote review versus travel",
    "Logistics, cost, and written next steps",
    "Questions to ask before you book",
  ],
  practicalPoints: [
    "Your reason for exploring, in one sentence",
    "Whether remote review can answer the question first",
    "What written next steps the receiving center will provide",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "When should I consider care elsewhere for lung cancer?",
      lead: "Patient question: is lung cancer care abroad worth it?",
      main: "gc-when",
      cards: [
        {
          id: "my-situation",
          title: "Is this my lung cancer situation?",
          summary:
            "When people wonder about care in another city or country.",
        },
        {
          id: "gc-explore-reasons",
          title: "Why do people explore care across borders for lung cancer?",
          summary:
            "Access, lost confidence, reject plan, intl support, cost, missing local path.",
        },
        {
          id: "gc-lost-confidence",
          title:
            "I’ve seen more than one team and still don’t trust the plan",
          summary: "Lost confidence is a valid reason — still name the next question.",
        },
        {
          id: "gc-disagree-plan",
          title: "What if I don’t accept the current lung cancer recommendation?",
          summary: "Focus the outside review — you don’t need permission to explore.",
        },
        {
          id: "gc-last-try-boundary",
          title: "What if this feels like a last try for lung cancer?",
          summary: "Acknowledge the feeling — then require a clear question.",
        },
        {
          id: "gc-default-upgrade",
          title: "Is lung cancer care abroad automatically better?",
          summary:
            "No — fame or country reputation alone is not a reason to travel.",
        },
        {
          id: "gc-capability-gap",
          title: "What is a capability gap for lung cancer?",
          summary: "One common reason: a missing technique, trial, or review.",
        },
        {
          id: "gc-vs-care-team",
          title: "How is this different from choosing a lung cancer care team?",
          summary: "Care team = ongoing network; travel = a named access gap.",
        },
        {
          id: "gc-vs-second-opinion",
          title: "How is this different from a lung cancer second opinion?",
          summary: "Review first; travel only if in-person access is required.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Compare remote review, travel, and staying local for lung cancer",
      lead: "Patient question: do I need to fly, or can records be reviewed first?",
      main: "gc-options",
      cards: [
        {
          id: "gc-remote-first",
          title: "Should I try remote review before travel for lung cancer?",
          summary: "Often yes — clarify the gap before booking flights.",
        },
        {
          id: "gc-remote-vs-travel-compare",
          title: "Remote review vs travel — what am I comparing for lung cancer?",
          summary: "Different questions and burdens — travel is not always stronger.",
        },
        {
          id: "gc-compare-centers",
          title: "How should I compare two lung cancer centers?",
          summary: "Same factors for each — not rankings or country labels.",
        },
        {
          id: "gc-stay-local",
          title: "When is staying local the better choice for lung cancer?",
          summary: "Equivalent care for your gap, or travel would interrupt urgent therapy.",
        },
        {
          id: "gc-hybrid-travel",
          title: "Can I travel for part of care and stay local for the rest for lung cancer?",
          summary: "Many people build a hybrid network across locations.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What must be true before travel makes sense for lung cancer?",
      lead: "Patient question: what logistics and risks should I check?",
      main: "gc-practical",
      cards: [
        {
          id: "gc-fitness-travel",
          title: "Am I well enough to travel for lung cancer?",
          summary: "Travel fitness is a medical question, not only logistics.",
        },
        {
          id: "gc-intl-support",
          title: "What does international-patient support actually include for lung cancer?",
          summary: "Services and written plans — not a promise of better medicine.",
        },
        {
          id: "gc-follow-up-home",
          title: "What aftercare will the receiving center provide for lung cancer?",
          summary:
            "Ask their international desk for a written next-step plan — not your home doctor for permission.",
        },
        {
          id: "gc-compare-total-cost",
          title: "What belongs in a total cost comparison for lung cancer?",
          summary: "Whole episode — not only the first invoice or “cheaper abroad.”",
        },
        {
          id: "gc-cost-blocking",
          title: "What if cost or coverage is blocking care where I am for lung cancer?",
          summary: "A real constraint — not proof that travel is better medicine.",
        },
        {
          id: "gc-family-pressure",
          title: "Family wants me to go abroad — what should we decide first for lung cancer?",
          summary: "Name the reason for exploring before anyone books flights.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare before you book travel for lung cancer",
      lead: "Patient question: what should I ask and bring?",
      main: "checklist",
      cards: [
        {
          id: "gc-records",
          title: "What records should I prepare for lung cancer?",
          summary: "Complete package plus one sentence you want answered.",
        },
        {
          id: "gc-records-abroad",
          title:
            "What records do I need for an international or remote review?",
          summary: "Full package for outside review — ask the desk for their checklist.",
        },
        {
          id: "gc-questions-before-contact",
          title: "What should I ask before I contact a center abroad for lung cancer?",
          summary: "Short checklist before contacting a center or opening the Guide.",
        },
        {
          id: "gc-before-booking",
          title: "What should I confirm before booking flights for lung cancer?",
          summary:
            "Reason, remote support, receiving-center next steps, and urgent-therapy timing.",
        },
        {
          id: "gc-conflict",
          title: "What if recommendations from different centers conflict for lung cancer?",
          summary: "Ask what changes clinically — then decide your next step.",
        },
        {
          id: "scenario",
          title: "An example lung cancer decision scenario",
          summary: "How someone might decide whether travel is warranted.",
        },
      ],
    },
  ],
};

const BREAST_NEWLY_DIAGNOSED_PATH: EntryPathV2 = {
  pathEyebrow: "Orientation path",
  pathTitle: "Your First Steps After a Breast Cancer Diagnosis",
  pathSubtitle:
    "You are not lost — you are at the start. Get clear, check subtype and staging information, see what comes next, then prepare for the conversation.",
  orientationTrail: [
    "Diagnosis",
    "Subtype & info",
    "What comes next",
    "Next conversation",
  ],
  completedLabels: [
    "Clarity on your diagnosis",
    "Whether subtype and staging information is complete",
    "What decisions may come next",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "What you already know about subtype and stage",
    "What information is still pending",
    "Whether treatment may start before or after surgery",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Get clear on your breast cancer diagnosis",
      lead: "Patient question: what exactly do I have?",
      main: "bnd-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When people are newly diagnosed with breast cancer.",
        },
        {
          id: "bnd-more-tests",
          title: "Why do I need more scans after a breast cancer diagnosis?",
          summary: "A biopsy may confirm cancer — subtype and staging may still matter.",
        },
        {
          id: "bnd-not-immediate",
          title: "How soon do I need treatment after breast cancer diagnosis?",
          summary: "The best sequence depends on a more complete picture.",
        },
        {
          id: "bnd-diagnosis-to-surgery",
          title: "How long from breast cancer diagnosis to surgery?",
          summary: "Often weeks, not days — ask what waits for key results.",
        },
        {
          id: "bnd-stage-timeline",
          title: "Does my stage decide my breast cancer treatment timeline?",
          summary: "Stage matters — but subtype and sequencing also set the pace.",
        },
        {
          id: "bnd-overwhelmed",
          title: "Is it normal to feel overwhelmed after breast cancer diagnosis?",
          summary: "Yes — a next-step plan helps more than solving everything today.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Make sure you have the information needed for breast cancer decisions",
      lead: "Patient question: do we know enough to choose a first plan?",
      main: "bnd-information",
      cards: [
        {
          id: "bnd-subtype",
          title: "Could subtype results change my breast cancer treatment options?",
          summary: "Receptor / HER2 status often shapes systemic choices and sequencing.",
        },
        {
          id: "bnd-waiting",
          title: "Can I wait a few weeks after a breast cancer diagnosis?",
          summary: "Waiting for key results ≠ delaying care without a plan.",
        },
        {
          id: "bnd-start-right-away",
          title: "Should I start treatment right away after breast cancer diagnosis?",
          summary: "Urgency varies — ask what must happen now vs after key results.",
        },
        {
          id: "bnd-genetics",
          title: "Do I need genetic counseling before breast cancer surgery?",
          summary: "Germline genetics ≠ tumor subtype — ask if it could change the operation.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "Understand the breast cancer decisions ahead",
      lead: "Patient question: what decisions will I eventually need to make?",
      main: "bnd-ahead",
      cards: [
        {
          id: "bnd-focus-first",
          title: "What decision should I focus on first for breast cancer?",
          summary: "Your next decision matters more than every future one.",
        },
        {
          id: "bnd-not-expert",
          title: "Do I need to understand every treatment before my first appointment for breast cancer?",
          summary: "No — know what you know, what you don’t, and what to ask.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for your next important conversation for breast cancer",
      lead: "Patient question: how can I make my appointments more useful?",
      main: "checklist",
      cards: [
        {
          id: "bnd-this-week",
          title: "I just received a breast cancer diagnosis. What should I do this week?",
          summary: "Three focuses — not the whole journey at once.",
        },
        {
          id: "bnd-ask-oncologist",
          title: "What should I expect at my first oncology appointment for breast cancer?",
          summary: "What happens in the visit — and a focused ask list.",
        },
        {
          id: "bnd-ask-surgeon",
          title: "What should I ask a breast surgeon?",
          summary: "Sequencing, lumpectomy vs mastectomy fit, genetics, reconstruction.",
        },
        {
          id: "bnd-second-opinion",
          title: "Should I get a second opinion after a breast cancer diagnosis?",
          summary: "About confidence — not distrust.",
        },
        {
          id: "bnd-records",
          title: "What information should I keep from the beginning for breast cancer?",
          summary: "Reports and results that travel with you.",
        },
      ],
    },
  ],
};

const PROSTATE_NEWLY_DIAGNOSED_PATH: EntryPathV2 = {
  pathEyebrow: "Orientation path",
  pathTitle: "Your First Steps After a Prostate Cancer Diagnosis",
  pathSubtitle:
    "You are not lost — you are at the start. Get clear on risk group, see whether monitoring or treatment comes first, then prepare for the conversation.",
  orientationTrail: [
    "Diagnosis",
    "Risk & info",
    "What comes next",
    "Next conversation",
  ],
  completedLabels: [
    "Clarity on your diagnosis",
    "Whether risk-group information is complete",
    "What decisions may come next",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "What you already know about risk group and stage",
    "What information is still pending",
    "Whether active surveillance may be on the table",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Get clear on your prostate cancer diagnosis",
      lead: "Patient question: what exactly do I have?",
      main: "pnd-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my prostate cancer situation?",
          summary: "When people are newly diagnosed with prostate cancer.",
        },
        {
          id: "pnd-more-tests",
          title: "Why do I need more scans after a prostate cancer diagnosis?",
          summary:
            "A biopsy may confirm cancer — risk group and staging may still matter.",
        },
        {
          id: "pnd-not-immediate",
          title: "How soon do I need treatment after prostate cancer diagnosis?",
          summary: "The best first path depends on a more complete picture.",
        },
        {
          id: "pnd-diagnosis-to-treatment",
          title: "How long from prostate cancer diagnosis to treatment?",
          summary: "Often weeks, not days — ask what waits for key results.",
        },
        {
          id: "pnd-risk-timeline",
          title: "Does my prostate cancer risk group decide my treatment timeline?",
          summary:
            "Risk matters — but the monitoring-versus-treatment fork also sets the pace.",
        },
        {
          id: "pnd-overwhelmed",
          title: "Is it normal to feel overwhelmed after a prostate cancer diagnosis?",
          summary: "Yes — a next-step plan helps more than solving everything today.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Make sure you have the information needed for prostate cancer decisions",
      lead: "Patient question: do we know enough to choose a first path?",
      main: "pnd-information",
      cards: [
        {
          id: "pnd-risk-group",
          title: "Could clarifying my prostate cancer risk group change my options?",
          summary:
            "PSA, Grade Group / Gleason, and imaging often shape monitoring versus treatment.",
        },
        {
          id: "pnd-waiting",
          title: "Can I wait a few weeks after a prostate cancer diagnosis?",
          summary: "Waiting for key results ≠ delaying care without a plan.",
        },
        {
          id: "pnd-start-right-away",
          title: "Should I start prostate cancer treatment right away after diagnosis?",
          summary: "Urgency varies — ask what must happen now vs after key results.",
        },
        {
          id: "pnd-surveillance",
          title: "Is active surveillance a reasonable option for my prostate cancer?",
          summary:
            "For some risk groups, structured monitoring can be a first path — not “doing nothing.”",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "Understand the prostate cancer decisions ahead",
      lead: "Patient question: what decisions will I eventually need to make?",
      main: "pnd-ahead",
      cards: [
        {
          id: "pnd-focus-first",
          title: "What prostate cancer decision should I focus on first?",
          summary: "Your next decision matters more than every future one.",
        },
        {
          id: "pnd-not-expert",
          title: "Do I need to understand every prostate cancer treatment before my first appointment?",
          summary: "No — know what you know, what you don’t, and what to ask.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for your next important prostate cancer conversation",
      lead: "Patient question: how can I make my appointments more useful?",
      main: "checklist",
      cards: [
        {
          id: "pnd-this-week",
          title: "I just received a prostate cancer diagnosis. What should I do this week?",
          summary: "Three focuses — not the whole journey at once.",
        },
        {
          id: "pnd-ask-urologist",
          title: "What should I expect at my first prostate cancer urology appointment?",
          summary: "What happens in the visit — and a focused ask list.",
        },
        {
          id: "pnd-ask-radiation",
          title: "What should I ask about prostate cancer radiation if it is discussed?",
          summary: "Fit, side-effect tradeoffs, and when to hear both specialties.",
        },
        {
          id: "pnd-second-opinion",
          title: "Should I get a second opinion after a prostate cancer diagnosis?",
          summary: "About confidence — not distrust.",
        },
        {
          id: "pnd-records",
          title: "What prostate cancer information should I keep from the beginning?",
          summary: "Reports and results that travel with you.",
        },
      ],
    },
  ],
};

const PROSTATE_SURVEILLANCE_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Prostate Cancer Active Surveillance Decision Path",
  pathSubtitle:
    "What monitoring means → whether it fits your risk group → follow-up and triggers → what to ask.",
  completedLabels: [
    "What active surveillance means",
    "Whether monitoring may fit your situation",
    "What follow-up and exit triggers look like",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Expected PSA / MRI / biopsy schedule",
    "Whether risk-group or imaging results are still pending",
    "How comfortable you are with monitoring uncertainty",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does the prostate cancer surveillance decision matter?",
      lead: "Patient question: what does “watching it” actually mean?",
      main: "pas-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my prostate cancer situation?",
          summary: "When monitoring versus treatment becomes a live fork.",
        },
        {
          id: "pas-what-is",
          title: "What is active surveillance for prostate cancer?",
          summary: "Structured monitoring — not ignoring the cancer.",
        },
        {
          id: "pas-why-matters",
          title: "Why does this prostate cancer decision matter?",
          summary: "Side-effect timing, follow-up intensity, and next forks.",
        },
        {
          id: "pas-not-nothing",
          title: "Is prostate cancer active surveillance the same as doing nothing?",
          summary: "No — it has a schedule and exit triggers.",
        },
        {
          id: "pas-not-weaker",
          title: "Is prostate cancer treatment automatically the “stronger” choice?",
          summary: "Fit beats online aggressiveness.",
        },
        {
          id: "pas-risk-first",
          title: "Do I need prostate cancer risk-group clarity before deciding?",
          summary: "Risk features often decide whether monitoring is on the table.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare prostate cancer monitoring vs treatment?",
      lead: "Patient question: is surveillance reasonable for someone like me?",
      main: "does-not-decide",
      cards: [
        {
          id: "pas-who-fits",
          title: "When is prostate cancer active surveillance more often discussed?",
          summary: "Lower-risk features, imaging, health, and follow-up access.",
        },
        {
          id: "pas-who-may-not",
          title: "When may prostate cancer treatment now be favored instead?",
          summary: "Higher-risk features, concern on imaging/biopsy, or preference.",
        },
        {
          id: "pas-triggers",
          title: "What would end prostate cancer active surveillance?",
          summary: "PSA, MRI, biopsy, or preference triggers — ask for yours.",
        },
        {
          id: "pas-what-changes",
          title: "What would change the prostate cancer monitoring-versus-treatment recommendation?",
          summary: "The question that clarifies the fork.",
        },
        {
          id: "pas-vs-treatment",
          title: "If we treat prostate cancer instead, what comes next?",
          summary: "Usually surgery vs radiation comparison — not every ranking.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about prostate cancer follow-up and daily life?",
      lead: "Patient question: what will monitoring actually look like?",
      main: "practical-points",
      cards: [
        {
          id: "pas-schedule",
          title: "What does the prostate cancer follow-up schedule look like?",
          summary: "PSA, exams, MRI, and possible repeat biopsy.",
        },
        {
          id: "pas-pending-info",
          title: "What information should be clear before locking this prostate cancer fork?",
          summary: "Risk group, imaging, pathology review, second opinion.",
        },
        {
          id: "pas-anxiety",
          title: "What if living with prostate cancer monitoring feels too hard?",
          summary: "Comfort with uncertainty is part of the decision.",
        },
        {
          id: "pas-life-fit",
          title: "How does prostate cancer surveillance fit travel, work, and appointments?",
          summary: "Practical adherence is part of a real plan.",
        },
        {
          id: "pas-this-week",
          title: "What should I do this week while deciding about prostate cancer?",
          summary: "Three focuses — not every treatment side effect online.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor about prostate cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "pas-mistakes",
          title: "What are common mistakes around prostate cancer active surveillance?",
          summary: "“Doing nothing,” urgency fear, and vague follow-up.",
        },
        {
          id: "pas-second-opinion",
          title: "Should I get a second opinion about prostate cancer surveillance?",
          summary: "About confidence — not distrust.",
        },
        {
          id: "scenario",
          title: "An example prostate cancer decision scenario",
          summary: "How someone might clarify monitor vs treat.",
        },
      ],
    },
  ],
};

const PROSTATE_TREATMENT_COMPARE_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Prostate Cancer Surgery vs Radiation Decision Path",
  pathSubtitle:
    "Why the choice matters → how the paths compare → practical fit → what to ask.",
  completedLabels: [
    "Why surgery vs radiation matters",
    "How the two paths compare",
    "What practical fit and pending info look like",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Whether you are a candidate for both surgery and radiation",
    "Urinary, sexual, and bowel priorities",
    "Whether both specialties have reviewed the case",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does the prostate cancer surgery-versus-radiation decision matter?",
      lead: "Patient question: why am I being offered more than one local treatment?",
      main: "ptc-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my prostate cancer situation?",
          summary: "When definitive therapy is on the table and both paths may be open.",
        },
        {
          id: "ptc-what-is",
          title: "What do surgery and radiation mean for prostate cancer?",
          summary: "Two common local options — different recovery and side-effect patterns.",
        },
        {
          id: "ptc-why-matters",
          title: "Why does this prostate cancer decision matter?",
          summary: "Function, recovery, specialty input, and follow-up.",
        },
        {
          id: "ptc-both-reasonable",
          title: "Can both surgery and radiation be reasonable for prostate cancer?",
          summary: "Often yes — which is why framing can sound conflicting.",
        },
        {
          id: "ptc-not-stronger",
          title: "Is one prostate cancer treatment automatically “stronger”?",
          summary: "Fit beats online aggressiveness.",
        },
        {
          id: "ptc-risk-first",
          title: "Does prostate cancer risk group still matter for this choice?",
          summary: "Risk, life expectancy, and health still shape the comparison.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare prostate cancer surgery and radiation?",
      lead: "Patient question: what should I weigh before choosing?",
      main: "does-not-decide",
      cards: [
        {
          id: "ptc-surgery",
          title: "What does choosing prostate cancer surgery usually involve?",
          summary: "Removal, early recovery, and pathology that can refine risk.",
        },
        {
          id: "ptc-radiation",
          title: "What does choosing prostate cancer radiation usually involve?",
          summary: "A planned course over weeks — prostate stays in place.",
        },
        {
          id: "ptc-side-effects",
          title: "How do urinary, sexual, and bowel tradeoffs compare?",
          summary: "Compare by domain — not a single “worse” label.",
        },
        {
          id: "ptc-recovery",
          title: "How do recovery and calendar differ for prostate cancer?",
          summary: "Front-loaded surgery recovery vs multi-week radiation schedule.",
        },
        {
          id: "ptc-what-changes",
          title: "What would change the prostate cancer recommendation either way?",
          summary: "The question that clarifies the fork.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know before locking prostate cancer surgery or radiation?",
      lead: "Patient question: what still needs to be clear?",
      main: "practical-points",
      cards: [
        {
          id: "ptc-both-specialties",
          title: "Should I hear both urology and radiation oncology?",
          summary: "Often useful when both options are still reasonable.",
        },
        {
          id: "ptc-pending-info",
          title: "What information should be clear before locking this prostate cancer fork?",
          summary: "Risk group, imaging, hormone therapy role, second look.",
        },
        {
          id: "ptc-life-fit",
          title: "How do travel, work, and support fit each prostate cancer path?",
          summary: "Practical fit belongs in the medical conversation.",
        },
        {
          id: "ptc-this-week",
          title: "What should I do this week while deciding about prostate cancer?",
          summary: "Three focuses — not every technique ranking online.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor about prostate cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "ptc-mistakes",
          title: "What are common mistakes around prostate cancer surgery vs radiation?",
          summary: "“Stronger” myths, one specialty only, skipping function priorities.",
        },
        {
          id: "ptc-second-opinion",
          title: "Should I get a second opinion about prostate cancer surgery vs radiation?",
          summary: "About confidence — not distrust.",
        },
        {
          id: "scenario",
          title: "An example prostate cancer decision scenario",
          summary: "How someone might clarify surgery vs radiation.",
        },
      ],
    },
  ],
};

const PROSTATE_SECOND_OPINION_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Prostate Cancer Second Opinion Decision Path",
  pathSubtitle:
    "When it may help → what it can change → how to prepare → what to ask.",
  completedLabels: [
    "When a second opinion may help",
    "What another review can change",
    "How to prepare a useful packet",
    "Questions for the second-opinion visit",
  ],
  practicalPoints: [
    "Pathology, PSA history, MRI/imaging, and the current written plan",
    "One named decision for review (surveillance, surgery vs radiation, or risk clarity)",
    "How urgent the calendar is before locking a path",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Is this a situation where another prostate cancer opinion could help?",
      lead: "Patient question: when is a prostate cancer second opinion most useful?",
      main: "pso-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my prostate cancer situation?",
          summary:
            "Before locking surveillance or treatment, when confidence is low.",
        },
        {
          id: "pso-everyone",
          title: "Does everyone with prostate cancer need a second opinion?",
          summary: "A support tool — not a sign something is wrong.",
        },
        {
          id: "pso-why-prostate",
          title: "Should I get a prostate cancer second opinion before deciding?",
          summary:
            "Useful when recommendations diverge, or before locking a path.",
        },
        {
          id: "pso-delay",
          title: "Can I get a prostate cancer second opinion without delaying care?",
          summary: "Ask urgency, what can continue, and what needs a pause.",
        },
        {
          id: "pso-disrespect",
          title: "Is asking for a prostate cancer second opinion disrespectful?",
          summary: "Frame confidence — not distrust.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What could another doctor tell me about my prostate cancer that I do not already know?",
      lead: "Patient question: confirm, clarify, expand, or identify gaps?",
      main: "second-compare",
      cards: [
        {
          id: "pso-change",
          title: "Can a second opinion change my prostate cancer treatment plan?",
          summary: "Sometimes yes — confirmation can also be valuable.",
        },
        {
          id: "pso-focus",
          title: "What should the prostate cancer second-opinion review focus on?",
          summary:
            "Name one decision — surveillance, surgery vs radiation, or risk clarity.",
        },
        {
          id: "pso-two-doctors",
          title: "What if two doctors recommend different prostate cancer plans?",
          summary: "Compare reasoning — not who is “right.”",
        },
        {
          id: "pso-pathology",
          title: "Should prostate cancer pathology or MRI be reviewed again?",
          summary: "When another specialist review may add confidence.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I prepare so the prostate cancer review is useful?",
      lead: "Patient question: what records and timing make this worth it?",
      main: "practical-points",
      cards: [
        {
          id: "pso-how-to-get",
          title: "How do I get a second opinion for prostate cancer?",
          summary: "Name the decision, gather records, book a focused review.",
        },
        {
          id: "pso-records",
          title: "What records should I bring for a prostate cancer second opinion?",
          summary: "Pathology, PSA, imaging, plan, and one sentence question.",
        },
        {
          id: "pso-cost",
          title: "Cost and insurance for a prostate cancer second opinion",
          summary: "Questions instead of guessing a price.",
        },
        {
          id: "pso-this-week",
          title: "What should I do this week while arranging a prostate cancer review?",
          summary: "Name the decision, gather records, check urgency.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask so the prostate cancer appointment is useful?",
      lead: "Patient question: how do I prepare for the conversation?",
      main: "checklist",
      cards: [
        {
          id: "pso-mistakes",
          title: "What are common mistakes when getting a prostate cancer second opinion?",
          summary: "Timing, incomplete records, and seeking only agreement.",
        },
        {
          id: "scenario",
          title: "An example prostate cancer decision scenario",
          summary: "How someone might review before locking the fork.",
        },
      ],
    },
  ],
};

const BREAST_SUBTYPE_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Subtype Testing Decision Path",
  pathSubtitle:
    "Why subtype matters → whether results could change options → what testing involves → what to ask.",
  completedLabels: [
    "Why subtype testing matters",
    "How results may affect choices",
    "What to know while waiting",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Which receptor / HER2 results are back vs pending",
    "Whether a genomic assay is relevant for your decision",
    "Whether germline genetics is a separate next step before surgery",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does breast cancer subtype testing matter?",
      lead: "Patient question: why is my doctor talking about receptors and HER2?",
      main: "bst-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When subtype results come up after diagnosis or before locking a plan.",
        },
        {
          id: "bst-what-is",
          title: "What is breast cancer subtype testing?",
          summary: "Tumor biology — receptors, HER2, and related features.",
        },
        {
          id: "bst-look-for",
          title: "What does breast cancer subtype testing look for?",
          summary: "ER/PR, HER2, triple-negative, and sometimes genomic assays.",
        },
        {
          id: "bst-pr",
          title: "What does PR-positive mean for breast cancer?",
          summary: "Progesterone receptor status — usually read with ER and HER2.",
        },
        {
          id: "bst-everyone",
          title: "Does everyone need the same breast cancer subtype tests?",
          summary: "Standard biology vs decision-specific extra assays.",
        },
        {
          id: "bst-vs-genetics",
          title: "How is breast cancer subtype different from genetic counseling?",
          summary: "Tumor biology ≠ germline risk — both can matter.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Could subtype results change my breast cancer treatment options?",
      lead: "Patient question: what would these results actually be used for?",
      main: "does-not-decide",
      cards: [
        {
          id: "bst-biopsy-not-enough",
          title: "Why can’t treatment be chosen from the biopsy result alone for breast cancer?",
          summary: "Confirming cancer ≠ locking the full first plan.",
        },
        {
          id: "bst-subtype-means",
          title: "How do ER-positive, HER2-positive, and triple-negative affect decisions for breast cancer?",
          summary: "Different biology — different next conversations, not a drug menu.",
        },
        {
          id: "bst-change-options",
          title: "Can subtype results change my breast cancer treatment plan?",
          summary: "Often yes — options and treatment order, not one automatic drug.",
        },
        {
          id: "bst-genomic",
          title: "What about genomic assays like Oncotype for breast cancer?",
          summary: "When they refine chemo vs endocrine discussions.",
        },
        {
          id: "bst-incomplete",
          title: "What if my breast cancer subtype results are incomplete?",
          summary: "Clarify re-testing and whether major steps should wait.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know while testing is underway for breast cancer?",
      lead: "Patient question: what will I actually go through?",
      main: "practical-points",
      cards: [
        {
          id: "bst-how-done",
          title: "How is breast cancer subtype testing done?",
          summary: "Usually pathology on biopsy or surgical tissue.",
        },
        {
          id: "bst-waiting",
          title: "Do I need ER/PR/HER2 results before choosing breast cancer treatment?",
          summary: "Not every wait is the same — ask how urgent it is.",
        },
        {
          id: "bst-cost",
          title: "Cost and insurance for extra breast cancer assays",
          summary: "Questions instead of guessing a price.",
        },
        {
          id: "bst-this-week",
          title: "I’m waiting on results — what should I do this week for breast cancer?",
          summary: "Confirm orders, timing, and what would change.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bst-mistakes",
          title: "What are common mistakes around breast cancer subtype testing?",
          summary: "Locking too early, confusing genetics, over-reading labels.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might wait for HER2 before locking surgery.",
        },
      ],
    },
  ],
};

const BREAST_SEQUENCING_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Treatment Sequencing Decision Path",
  pathSubtitle:
    "Why timing matters → before vs after surgery → practical timeline → what to ask.",
  completedLabels: [
    "Why sequencing matters",
    "How before vs after surgery compare",
    "What the timeline may involve",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Expected timeline for medicines-first vs surgery-first",
    "Whether subtype, staging, or genetics are still pending",
    "How sequencing may affect work, fertility, and recovery planning",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does treatment sequencing matter for breast cancer?",
      lead: "Patient question: why are doctors talking about before vs after surgery?",
      main: "bseq-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When before-surgery vs after-surgery timing becomes a live fork.",
        },
        {
          id: "bseq-what-is",
          title: "What is neoadjuvant breast cancer chemotherapy?",
          summary: "Medicines before surgery — goals, not jargon.",
        },
        {
          id: "bseq-why-matters",
          title: "Why does the sequence matter for breast cancer?",
          summary: "Response assessment, surgery options, and timeline.",
        },
        {
          id: "bseq-not-stronger",
          title: "Is one sequence “stronger” than the other for breast cancer?",
          summary: "Fit beats online aggressiveness.",
        },
        {
          id: "bseq-subtype-first",
          title: "Do I need breast cancer subtype results before deciding the sequence?",
          summary: "Biology often shapes whether medicines-first is on the table.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare before-surgery vs after-surgery paths for breast cancer?",
      lead: "Patient question: what is each sequence trying to achieve for me?",
      main: "does-not-decide",
      cards: [
        {
          id: "bseq-before",
          title: "Why do chemo before breast cancer surgery?",
          summary: "Shrink, assess response, refine surgery options.",
        },
        {
          id: "bseq-normal-before",
          title: "Is chemo before breast cancer surgery normal?",
          summary: "Common for some subtypes and stages — ask if it fits you.",
        },
        {
          id: "bseq-after",
          title: "Why have surgery first, then breast cancer systemic therapy?",
          summary: "When upfront surgery still leaves medicines afterward.",
        },
        {
          id: "bseq-nodes-clear",
          title: "Do I still need breast cancer chemo if lymph nodes are clear?",
          summary: "Node status matters — it is not the only factor.",
        },
        {
          id: "bseq-gap-after-surgery",
          title: "How soon after breast cancer surgery does chemo start?",
          summary: "Usually after healing — ask for your window.",
        },
        {
          id: "bseq-chemo-or-radiation",
          title: "Should chemo or breast cancer radiation come first?",
          summary: "Usually coordinated after surgery — ask for your sequence.",
        },
        {
          id: "bseq-what-changes",
          title: "What would change the sequencing recommendation for breast cancer?",
          summary: "The question that clarifies the fork.",
        },
        {
          id: "bseq-response",
          title: "If medicines come first, how do we know they are working for breast cancer?",
          summary: "Response assessment during neoadjuvant therapy.",
        },
        {
          id: "bseq-surgery-link",
          title: "How does sequencing relate to breast cancer lumpectomy vs mastectomy?",
          summary: "Connected decisions — not the same decision.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about timeline and logistics for breast cancer?",
      lead: "Patient question: what will the next weeks actually look like?",
      main: "practical-points",
      cards: [
        {
          id: "bseq-timeline",
          title: "What is the expected timeline for each sequence for breast cancer?",
          summary: "Calendar clarity before locking a path.",
        },
        {
          id: "bseq-pending-info",
          title: "What information should be clear before locking sequencing for breast cancer?",
          summary: "Subtype, staging, genetics, second opinion.",
        },
        {
          id: "bseq-life-fit",
          title: "How does sequencing affect work, fertility, and daily life for breast cancer?",
          summary: "Practical fit is part of the timing decision.",
        },
        {
          id: "bseq-this-week",
          title: "What should I do this week while deciding for breast cancer?",
          summary: "Three focuses — not every drug name online.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bseq-mistakes",
          title: "What are common mistakes around sequencing for breast cancer?",
          summary: "Strength contests, locking too early, assuming no systemic therapy.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might clarify medicines-first vs surgery-first.",
        },
      ],
    },
  ],
};

const BREAST_SURGERY_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Lumpectomy vs Mastectomy Decision Path",
  pathSubtitle:
    "Why the choice matters → how the options compare → recovery and radiation → what to ask.",
  completedLabels: [
    "Why surgery choice matters",
    "How lumpectomy and mastectomy compare",
    "What recovery and radiation may involve",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Whether both operations are medically reasonable for you",
    "Radiation expectations after lumpectomy (and after mastectomy if relevant)",
    "Genetics and reconstruction questions that could change planning",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does the breast cancer surgery choice matter?",
      lead: "Patient question: why am I being offered more than one operation?",
      main: "bsur-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When lumpectomy and mastectomy are both on the table.",
        },
        {
          id: "bsur-what-is",
          title: "What is breast cancer lumpectomy vs mastectomy?",
          summary: "Plain-language difference — not a technique encyclopedia.",
        },
        {
          id: "bsur-similar-control",
          title: "Is breast cancer lumpectomy as safe as mastectomy?",
          summary: "For many appropriate candidates — ask for your situation.",
        },
        {
          id: "bsur-not-only-cancer",
          title: "If cancer control is similar, what else matters for breast cancer?",
          summary: "Personal priorities still tip a real decision.",
        },
        {
          id: "bsur-sequencing",
          title: "How does treatment before or after breast cancer surgery affect this?",
          summary: "Sequencing can change timing and sometimes options.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare breast cancer lumpectomy and mastectomy?",
      lead: "Patient question: what should I weigh before choosing?",
      main: "does-not-decide",
      cards: [
        {
          id: "bsur-pros-cons",
          title: "What are the pros and cons of breast cancer lumpectomy vs mastectomy?",
          summary: "Trade-offs side by side — not a winner-takes-all list.",
        },
        {
          id: "bsur-lumpectomy",
          title: "What does choosing breast cancer lumpectomy usually involve?",
          summary: "Conservation plus radiation for most people.",
        },
        {
          id: "bsur-mastectomy",
          title: "What does choosing breast cancer mastectomy usually involve?",
          summary: "More tissue removed — reconstruction may follow.",
        },
        {
          id: "bsur-genetics",
          title: "Could genetic counseling change my breast cancer surgery choice?",
          summary: "Germline risk ≠ tumor subtype — ask early.",
        },
        {
          id: "bsur-subtype",
          title: "Does subtype change the breast cancer surgery choice?",
          summary: "Subtype mainly forks medicines — surgery still needs local fit.",
        },
        {
          id: "bsur-reconstruction",
          title: "How do breast reconstruction timing and choices fit in?",
          summary: "Immediate vs delayed vs none — open the full guide when needed.",
        },
        {
          id: "bsur-recurrence",
          title: "What about local breast cancer recurrence fears?",
          summary: "Ask for numbers and follow-up plans, not fear alone.",
        },
        {
          id: "bsur-bilateral",
          title: "Should I remove the other breast?",
          summary: "A separate decision — not automatic.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about recovery, breast cancer radiation, and timing?",
      lead: "Patient question: what will this mean week to week?",
      main: "practical-points",
      cards: [
        {
          id: "bsur-recovery",
          title: "How does recovery differ for breast cancer lumpectomy vs mastectomy?",
          summary: "First weeks, work, and restrictions.",
        },
        {
          id: "bsur-double-recovery",
          title: "What is recovery like after double breast cancer mastectomy?",
          summary: "Often longer — ask about drains, work, and reconstruction.",
        },
        {
          id: "bsur-lymphedema",
          title: "What should I know about lymphedema after breast surgery?",
          summary: "Risk varies — ask prevention and early signs.",
        },
        {
          id: "bsur-radiation",
          title: "Do I need radiation after breast cancer lumpectomy?",
          summary: "Usually yes with conservation; situational after mastectomy.",
        },
        {
          id: "bsur-pending",
          title: "What information should be clear before locking breast cancer surgery?",
          summary: "Subtype, sequencing, genetics, imaging candidacy.",
        },
        {
          id: "bsur-this-week",
          title: "What should I do this week while deciding for breast cancer?",
          summary: "Candidacy, tipping factors, and priorities.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bsur-mistakes",
          title: "What are common mistakes around breast cancer surgery choice?",
          summary: "Safer-by-default myths, locking too early, skipping reconstruction talk.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might choose when both options are open.",
        },
      ],
    },
  ],
};

const BREAST_SYSTEMIC_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Systemic Therapy Decision Path",
  pathSubtitle:
    "Why subtype forks options → HR+ / HER2+ / TNBC paths → practical fit → what to ask.",
  completedLabels: [
    "Why systemic options fork by subtype",
    "How HR+, HER2+, and TNBC paths differ",
    "What timeline and trade-offs may involve",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Your subtype in plain language (HR+ / HER2+ / TNBC — and combinations)",
    "Goal of systemic therapy and whether it starts before or after surgery",
    "Side effects, duration, fertility, and visit burden for the recommended plan",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why do systemic options depend on breast cancer subtype?",
      lead: "Patient question: why am I not comparing the same drug list as everyone else?",
      main: "bsys-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When systemic medicines enter the breast cancer plan.",
        },
        {
          id: "bsys-what-is",
          title: "What is systemic therapy for breast cancer?",
          summary: "Medicines that travel through the body — by family, not brand list.",
        },
        {
          id: "bsys-subtype-forks",
          title: "How does breast cancer subtype change the options?",
          summary: "HR+, HER2+, and TNBC open different conversations.",
        },
        {
          id: "bsys-not-menu",
          title: "Why isn’t this a menu of the strongest drugs for breast cancer?",
          summary: "Fit and goals beat online aggressiveness.",
        },
        {
          id: "bsys-sequencing",
          title: "How does before-vs-after breast cancer surgery timing fit in?",
          summary: "Sequencing can change what systemic therapy means.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Which systemic path fits my breast cancer subtype?",
      lead: "Patient question: what should I compare inside my subtype fork?",
      main: "does-not-decide",
      cards: [
        {
          id: "bsys-hr",
          title: "What does ER+/PR+/HER2− mean for treatment for breast cancer?",
          summary: "Endocrine-led discussions — chemo is situational.",
        },
        {
          id: "bsys-her2",
          title: "What does HER2-positive treatment usually involve for breast cancer?",
          summary: "HER2-targeted therapy usually belongs in the plan.",
        },
        {
          id: "bsys-tnbc",
          title: "What if my cancer is triple-negative for breast cancer?",
          summary: "Chemo often leads; immunotherapy in selected cases.",
        },
        {
          id: "bsys-when-chemo",
          title: "When do I need chemotherapy for breast cancer?",
          summary: "Depends on subtype, stage, and risk — not one rule.",
        },
        {
          id: "bsys-stage1-chemo",
          title: "Does Stage 1 breast cancer need chemo?",
          summary: "Sometimes — subtype and risk still tip the answer.",
        },
        {
          id: "bsys-cdk46",
          title: "When are CDK4/6 inhibitors used for breast cancer?",
          summary: "Often in HR+ settings — early or metastatic depending on plan.",
        },
        {
          id: "bsys-tnbc-immuno",
          title: "Is immunotherapy used for triple-negative breast cancer?",
          summary: "Selected situations — not automatic for every TNBC.",
        },
        {
          id: "bsys-er-good-or-bad",
          title: "Is estrogen receptor–positive good or bad for breast cancer?",
          summary: "It is a treatment fork — not a simple good/bad label.",
        },
        {
          id: "bsys-ovarian",
          title: "What is ovarian suppression in breast cancer treatment?",
          summary: "For some premenopausal HR+ plans — ask if it applies.",
        },
        {
          id: "bsys-skip-endocrine",
          title: "Can I skip hormone therapy after breast cancer lumpectomy?",
          summary: "For HR+ disease it is often part of the package — ask risk change.",
        },
        {
          id: "bsys-endocrine-duration",
          title: "How long is endocrine therapy for breast cancer?",
          summary: "Often years — ask what duration and why for you.",
        },
        {
          id: "bsys-tnbc-stage1",
          title: "What are treatment options for Stage 1 triple-negative breast cancer?",
          summary: "Still a TNBC fork — chemo often leads; ask about your risk.",
        },
        {
          id: "bsys-goals",
          title: "What goal is breast cancer systemic therapy trying to achieve?",
          summary: "Clarify purpose before comparing regimens.",
        },
        {
          id: "bsys-genomic",
          title: "Could Oncotype or a genomic assay change whether I need breast cancer chemo?",
          summary: "Relevant for some early HR+ / HER2− cancers.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about living with the breast cancer plan?",
      lead: "Patient question: what will this mean week to week?",
      main: "practical-points",
      cards: [
        {
          id: "bsys-side-effects",
          title: "What side effects and monitoring should I expect for breast cancer?",
          summary: "Ask by medicine family — not by fear alone.",
        },
        {
          id: "bsys-chemo-rounds",
          title: "How many rounds of breast cancer chemo is normal?",
          summary: "Regimens vary — ask what yours is trying to achieve.",
        },
        {
          id: "bsys-timeline",
          title: "What is the expected timeline and visit burden for breast cancer?",
          summary: "Duration, weekly rhythm, and life logistics.",
        },
        {
          id: "bsys-fertility",
          title: "Should I consider fertility preservation before breast cancer treatment?",
          summary: "Raise life-stage goals before locking therapy.",
        },
        {
          id: "bsys-this-week",
          title: "What should I do this week while deciding for breast cancer?",
          summary: "Subtype, option families, goals, sequencing.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bsys-mistakes",
          title: "What are common mistakes around breast cancer systemic options?",
          summary: "Drug-name races, max chemo myths, late fertility talk.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might compare options after subtype results.",
        },
      ],
    },
  ],
};

const BREAST_SECOND_OPINION_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Second Opinion Decision Path",
  pathSubtitle:
    "When it may help → what it can change → how to prepare → what to ask.",
  completedLabels: [
    "When a second opinion may help",
    "What another review can change",
    "How to prepare a useful packet",
    "Questions for the second-opinion visit",
  ],
  practicalPoints: [
    "Pathology with receptors / HER2, imaging, and the current written plan",
    "One named decision for review (surgery, sequencing, or systemic therapy)",
    "How urgent the calendar is before the next irreversible step",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Is this a situation where another opinion could help for breast cancer?",
      lead: "Patient question: when is a breast cancer second opinion most useful?",
      main: "bso-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "Before major surgery or systemic therapy, when confidence is low.",
        },
        {
          id: "bso-everyone",
          title: "Does everyone with breast cancer need a second opinion?",
          summary: "A support tool — not a sign something is wrong.",
        },
        {
          id: "bso-why-breast",
          title: "Should I get a second opinion before breast cancer surgery?",
          summary: "Subtype, sequencing, and surgery often intersect.",
        },
        {
          id: "bso-delay",
          title: "Can I get a breast cancer second opinion without delaying treatment?",
          summary: "Ask urgency, what can continue, and what needs a pause.",
        },
        {
          id: "bso-disrespect",
          title: "Is asking for a breast cancer second opinion disrespectful?",
          summary: "Frame confidence — not distrust.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What could another doctor tell me that I do not already know for breast cancer?",
      lead: "Patient question: confirm, clarify, expand, or identify gaps?",
      main: "second-compare",
      cards: [
        {
          id: "bso-change",
          title: "Can a second opinion change my breast cancer treatment plan?",
          summary: "Sometimes yes — confirmation can also be valuable.",
        },
        {
          id: "bso-focus",
          title: "What should the review focus on for breast cancer?",
          summary: "Name one decision — surgery, sequencing, or systemic plan.",
        },
        {
          id: "bso-two-doctors",
          title: "What if two doctors recommend different plans for breast cancer?",
          summary: "Compare reasoning — not who is “right.”",
        },
        {
          id: "bso-pathology",
          title: "Should pathology or imaging be reviewed again for breast cancer?",
          summary: "When another specialist review may add confidence.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How do I prepare so the review is useful for breast cancer?",
      lead: "Patient question: what records and timing make this worth it?",
      main: "practical-points",
      cards: [
        {
          id: "bso-how-to-get",
          title: "How do I get a second opinion for breast cancer?",
          summary: "Name the decision, gather records, book a focused review.",
        },
        {
          id: "bso-records",
          title: "What records should I bring for breast cancer?",
          summary: "Pathology, imaging, plan, and one sentence question.",
        },
        {
          id: "bso-cost",
          title: "Cost and insurance for a breast cancer second opinion",
          summary: "Questions instead of guessing a price.",
        },
        {
          id: "bso-this-week",
          title: "What should I do this week while arranging a review for breast cancer?",
          summary: "Name the decision, gather records, check urgency.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask so the appointment is useful for breast cancer?",
      lead: "Patient question: how do I prepare for the conversation?",
      main: "checklist",
      cards: [
        {
          id: "bso-mistakes",
          title: "What are common mistakes when getting a breast cancer second opinion?",
          summary: "Timing, incomplete records, and seeking only agreement.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might review before locking surgery.",
        },
      ],
    },
  ],
};

const BREAST_GENETICS_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Genetic Counseling Before Surgery Decision Path",
  pathSubtitle:
    "Why genetics before surgery matters → how results change options → timing → what to ask.",
  completedLabels: [
    "Why genetics before surgery matters",
    "How results may change the operation",
    "What timing and waiting involve",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Whether counseling is recommended before you lock surgery",
    "Whether a result would change lumpectomy vs mastectomy (or the other breast)",
    "What is safe to start while counseling or results are pending",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does genetic counseling before breast cancer surgery matter?",
      lead: "Patient question: is this about my cancer type — or inherited risk?",
      main: "bgen-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When inherited-risk counseling may affect surgery timing.",
        },
        {
          id: "bgen-what-is",
          title: "What is genetic counseling in breast cancer?",
          summary: "Germline risk conversation — not tumor subtype.",
        },
        {
          id: "bgen-why-before-surgery",
          title: "Why talk about this before locking breast cancer surgery?",
          summary: "Results can change an irreversible operation.",
        },
        {
          id: "bgen-who-may-need",
          title: "Who is more often referred for counseling for breast cancer?",
          summary: "Risk factors help — your team still decides for you.",
        },
        {
          id: "bgen-tnbc",
          title: "Do I need genetic testing for triple-negative breast cancer?",
          summary: "TNBC often raises counseling — ask if criteria apply to you.",
        },
        {
          id: "bgen-vs-subtype",
          title: "How is this different from breast cancer subtype testing?",
          summary: "Tumor biology ≠ inherited risk.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How could results change my breast cancer surgery options?",
      lead: "Patient question: what would a result actually change?",
      main: "does-not-decide",
      cards: [
        {
          id: "bgen-positive-change",
          title: "Does a positive genetic result change surgery for breast cancer?",
          summary: "Mastectomy and the other breast may enter the talk.",
        },
        {
          id: "bgen-only-brca",
          title: "Is BRCA the only gene that matters for breast cancer?",
          summary: "BRCA is common in conversation — panels often include more.",
        },
        {
          id: "bgen-brca-shows",
          title: "What does the BRCA test show for breast cancer?",
          summary: "Inherited risk — not the same as tumor ER/PR/HER2.",
        },
        {
          id: "bgen-negative-or-vus",
          title: "What about a negative result or a VUS for breast cancer?",
          summary: "Not all results should redesign the operation.",
        },
        {
          id: "bgen-wait-or-not",
          title: "Should I wait for genetic results before breast cancer surgery?",
          summary: "Wait when results would change the operation — ask about safety.",
        },
        {
          id: "bgen-other-breast",
          title: "Does this mean surgery on the other breast?",
          summary: "A separate decision — not automatic.",
        },
        {
          id: "bgen-without-brca",
          title: "Can you get breast cancer without the BRCA gene?",
          summary: "Yes — most diagnoses are not driven by a known BRCA mutation.",
        },
        {
          id: "bgen-family",
          title: "If my parent had breast cancer, what does that mean for me?",
          summary: "Family history can raise questions — it does not decide your risk alone.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about timing and next steps for breast cancer?",
      lead: "Patient question: how long does this take, and what can proceed?",
      main: "practical-points",
      cards: [
        {
          id: "bgen-timeline",
          title: "How long do breast cancer genetic results take?",
          summary: "Days to weeks — ask for a local timeline.",
        },
        {
          id: "bgen-process",
          title: "What does the counseling process look like for breast cancer?",
          summary: "Conversation first, then decide whether to test.",
        },
        {
          id: "bgen-pending",
          title: "What should be clear before locking breast cancer surgery?",
          summary: "Recommendation, impact, safety of waiting, handoff.",
        },
        {
          id: "bgen-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Ask, refer, and clarify wait vs proceed.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bgen-mistakes",
          title: "What are common mistakes around genetics before breast cancer surgery?",
          summary: "Subtype mix-ups, locking too early, over-reading a VUS.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might wait on purpose before locking surgery.",
        },
      ],
    },
  ],
};

const BREAST_METASTATIC_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Metastatic Breast Cancer Decision Path",
  pathSubtitle:
    "What Stage IV means → goals and subtype forks → practical next steps → questions for your team.",
  completedLabels: [
    "What metastatic / Stage IV means",
    "How goals and options differ",
    "What to clarify this week",
    "Questions for your care team",
  ],
  practicalPoints: [
    "What the goal of the next treatment is in plain language",
    "Whether subtype still changes which option families come first",
    "What is known vs still pending before locking a plan",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "What does metastatic breast cancer mean for decisions?",
      lead: "Patient question: does Stage IV mean nothing can be done?",
      main: "bmet-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When people face metastatic or Stage IV breast cancer decisions.",
        },
        {
          id: "bmet-what-is",
          title: "What does metastatic / Stage IV breast cancer mean?",
          summary: "Cancer beyond breast and regional nodes — a different decision frame.",
        },
        {
          id: "bmet-active-care",
          title: "Does Stage IV breast cancer mean nothing can be done?",
          summary: "No — many people receive active care for control and quality of life.",
        },
        {
          id: "bmet-not-giving-up",
          title: "Do different goals mean doctors are giving up for breast cancer?",
          summary: "No — goals design active care around your situation.",
        },
        {
          id: "bmet-subtype",
          title: "Does subtype still matter in metastatic breast cancer?",
          summary: "HR+, HER2+, and TNBC still fork medicine families.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare metastatic options for breast cancer?",
      lead: "Patient question: which plan fits my goals — not only intensity?",
      main: "does-not-decide",
      cards: [
        {
          id: "bmet-different-plans",
          title: "Why do people with Stage IV breast cancer hear different plans?",
          summary: "Subtype, extent, prior treatment, health, and goals differ.",
        },
        {
          id: "bmet-strongest",
          title: "Is the strongest treatment always best for breast cancer?",
          summary: "Not always — benefit, side effects, and daily life decide fit.",
        },
        {
          id: "bmet-local-therapy",
          title: "Do surgery or breast cancer radiation still matter?",
          summary: "Sometimes — for specific sites or symptoms, not as a curative package.",
        },
        {
          id: "bmet-options",
          title: "What are treatment options for metastatic breast cancer?",
          summary: "Option families by subtype and goals — not one fixed list.",
        },
        {
          id: "bmet-bone",
          title: "What if metastatic breast cancer is in the bone?",
          summary: "Systemic therapy still leads — local care may help symptoms.",
        },
        {
          id: "bmet-living",
          title: "What does living with metastatic breast cancer mean day to day?",
          summary: "Ongoing decisions — treatment, symptoms, and life priorities.",
        },
        {
          id: "bmet-info-needed",
          title: "What information should be clear before locking a plan for breast cancer?",
          summary: "Subtype, extent, prior response, and symptoms needing control.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I clarify this week for breast cancer?",
      lead: "Patient question: what belongs in the next conversation?",
      main: "practical-points",
      cards: [
        {
          id: "bmet-what-to-ask",
          title: "What should I ask my doctor about Stage IV breast cancer?",
          summary: "Goals, options, trade-offs, and what starts now.",
        },
        {
          id: "bmet-second-opinion",
          title: "When may a breast cancer second opinion help?",
          summary: "Complex options, conflict, or need for more confidence.",
        },
        {
          id: "bmet-clinical-trial",
          title: "Should I ask about a breast cancer clinical trial?",
          summary: "Trials may fit depending on subtype, prior treatment, and eligibility.",
        },
        {
          id: "bmet-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Confirm what is known, ask the goal, write priorities.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bmet-mistakes",
          title: "What are common metastatic-decision mistakes for breast cancer?",
          summary: "Assuming no options, ignoring subtype, chasing “strongest.”",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might focus the first metastatic conversations.",
        },
      ],
    },
  ],
};

const BREAST_RECURRENCE_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Recurrence Decision Path",
  pathSubtitle:
    "What recurrence means → what has changed → how to compare options → what to ask.",
  completedLabels: [
    "What recurrence really means",
    "How location and prior therapy change options",
    "What to clarify this week",
    "Questions for your care team",
  ],
  practicalPoints: [
    "Where cancer returned — local, regional, or distant",
    "Whether subtype should be re-checked",
    "Which option families remain open after prior therapy",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "What does breast cancer recurrence mean for the next decision?",
      lead: "Patient question: does recurrence mean treatment failed?",
      main: "brr-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When people face a breast cancer recurrence decision.",
        },
        {
          id: "brr-what-is",
          title: "What does breast cancer recurrence mean?",
          summary: "A new decision point — not an automatic replay of the first plan.",
        },
        {
          id: "brr-not-failed",
          title: "Does breast cancer recurrence mean treatment failed?",
          summary: "Not necessarily — it means the situation needs reassessment.",
        },
        {
          id: "brr-local-vs-distant",
          title: "Are all breast cancer recurrences the same?",
          summary: "Local, regional, and distant return are different frames.",
        },
        {
          id: "brr-vs-metastatic",
          title: "What’s the difference between local recurrence and metastatic breast cancer?",
          summary: "Distant recurrence may overlap; local/regional often differs.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare options after breast cancer recurrence?",
      lead: "Patient question: do we repeat the first plan — or reopen the comparison?",
      main: "does-not-decide",
      cards: [
        {
          id: "brr-retest",
          title: "Should subtype be retested after breast cancer recurrence?",
          summary: "Biology can change — ask when a new test would change options.",
        },
        {
          id: "brr-prior-treatment",
          title: "How does prior treatment shape the next plan for breast cancer?",
          summary: "History informs what remains open — it does not auto-repeat.",
        },
        {
          id: "brr-still-treatable",
          title: "Is breast cancer recurrence still treatable?",
          summary: "Many people receive active treatment after cancer returns.",
        },
        {
          id: "brr-after-mastectomy",
          title: "What if breast cancer comes back after mastectomy?",
          summary: "Location still shapes the next plan — not an automatic replay.",
        },
        {
          id: "brr-same-plan",
          title: "Do we simply repeat the first package for breast cancer?",
          summary: "Usually not — location and history reopen the comparison.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I clarify this week for breast cancer?",
      lead: "Patient question: what belongs in the next conversation?",
      main: "practical-points",
      cards: [
        {
          id: "brr-second-opinion",
          title: "When may a breast cancer second opinion help?",
          summary: "Complex options, conflict, or need for more confidence.",
        },
        {
          id: "brr-clinical-trial",
          title: "Should I ask about a breast cancer clinical trial?",
          summary: "Trials may fit depending on subtype, prior therapy, and eligibility.",
        },
        {
          id: "brr-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Confirm location, ask about re-testing, write priorities.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "brr-mistakes",
          title: "What are common mistakes after breast cancer recurrence?",
          summary: "Assuming no options, auto-repeating, skipping location questions.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might focus the first recurrence conversations.",
        },
      ],
    },
  ],
};

const BREAST_QOL_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Quality of Life Decision Path",
  pathSubtitle:
    "What matters most → manage symptoms → balance benefit and burden → questions for your team.",
  completedLabels: [
    "What your plan should help protect",
    "How to manage symptoms during treatment",
    "How to balance benefit and burden",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Priorities you want the plan to protect",
    "Side effects and visit burden you can sustain",
    "What supportive options or adjustments are available now",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "What should my breast cancer treatment plan help me protect?",
      lead: "Patient question: what matters most in my daily life?",
      main: "bqol-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When quality of life becomes part of the breast cancer decision.",
        },
        {
          id: "bqol-what-is",
          title: "What does quality of life in breast cancer care mean here?",
          summary: "Energy, work, family, comfort, body image — not a soft side topic.",
        },
        {
          id: "bqol-not-either-or",
          title: "Is this treatment vs quality of life in breast cancer care?",
          summary: "No — the goal is a plan that supports both.",
        },
        {
          id: "bqol-supportive",
          title: "Does needing supportive care in breast cancer mean giving up?",
          summary: "Supportive care can run alongside treatment at any stage.",
        },
        {
          id: "bqol-tell-doctor",
          title: "Should I tell my doctor what matters most for breast cancer?",
          summary: "Your priorities are important medical information.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should quality of life in breast cancer care change the comparison?",
      lead: "Patient question: can daily life affect which option I choose?",
      main: "does-not-decide",
      cards: [
        {
          id: "bqol-affect-choice",
          title: "Can quality of life in breast cancer care affect which treatment I choose?",
          summary: "Benefit, risks, and personal goals all count.",
        },
        {
          id: "bqol-which-symptoms",
          title: "Which symptoms should I tell my doctor about for breast cancer?",
          summary: "Report changes that affect daily activities.",
        },
        {
          id: "bqol-wait-appointment",
          title: "Should I wait until my next appointment for breast cancer?",
          summary: "Some symptoms need earlier attention.",
        },
        {
          id: "bqol-adjust-treatment",
          title: "Can treatment be adjusted if side effects are hard for breast cancer?",
          summary: "Tell your team what is happening.",
        },
        {
          id: "bqol-more-better",
          title: "Is more treatment always better for breast cancer?",
          summary: "More benefit can also mean more burden.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I clarify about daily life this week for breast cancer?",
      lead: "Patient question: how do work, body image, and burden fit?",
      main: "practical-points",
      cards: [
        {
          id: "bqol-body-image",
          title: "Do body image and breast reconstruction belong in this talk?",
          summary: "Yes — especially around surgery and radiation.",
        },
        {
          id: "bqol-work",
          title: "Can I work while getting breast cancer chemotherapy?",
          summary: "Often possible with planning — ask what a week looks like.",
        },
        {
          id: "bqol-time-off",
          title: "How much time off work is typical with breast cancer?",
          summary: "Varies by surgery, chemo, and radiation — ask for your plan.",
        },
        {
          id: "bqol-return-work",
          title: "What about returning to work after breast cancer treatment?",
          summary: "Plan a phased return — energy and follow-up still matter.",
        },
        {
          id: "bqol-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Write priorities, list burdens, ask about supportive options.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bqol-mistakes",
          title: "What are common quality-of-life mistakes for breast cancer?",
          summary: "Assuming supportive care means giving up; waiting too long.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might balance treatment and daily life.",
        },
      ],
    },
  ],
};

const BREAST_PRACTICAL_FIT_PATH: EntryPathV2 = {
  pathEyebrow: "Practical fit",
  pathTitle: "Making Sure Your Breast Cancer Plan Can Work With Real Life",
  pathSubtitle:
    "Practical factors belong in the conversation — then go to the decision page that matches your question.",
  completedLabels: [
    "Why practical fit belongs in the decision",
    "Which decision page to open next",
    "What to ask your care team",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "What a normal treatment week may look like",
    "Travel, time, or cost pressures to plan for",
    "What could be adjusted if the plan becomes too hard",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does practical fit matter for breast cancer?",
      lead: "Patient question: can this plan work with my real life?",
      main: "bfe-why",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When cost, travel, time, or support may affect the plan.",
        },
        {
          id: "bfe-belongs",
          title: "Do practical concerns belong in a medical conversation for breast cancer?",
          summary: "Yes — they do not replace medical advice, but they matter.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Where should I go next for breast cancer?",
      lead: "Patient question: which decision page matches my concern?",
      main: "bfe-where",
      cards: [
        {
          id: "bfe-not-prices",
          title: "Will this page list prices or insurance rules for breast cancer?",
          summary: "No — those vary. Name constraints with your team instead.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I ask about practical fit for breast cancer?",
      lead: "Patient question: what three questions help most?",
      main: "bfe-ask",
      cards: [
        {
          id: "bfe-cost-ask",
          title: "How much does breast cancer treatment cost?",
          summary: "Costs accumulate across the pathway — ask useful questions, not a quote.",
        },
        {
          id: "bfe-insurance",
          title: "Is breast cancer treatment covered by insurance?",
          summary: "Often partly — ask what is covered vs out of pocket for your plan.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "Prepare for the practical-fit conversation for breast cancer",
      lead: "Patient question: how do I bring this up with my care team?",
      main: "checklist",
      cards: [
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might name practical limits early.",
        },
      ],
    },
  ],
};

const BREAST_CLINICAL_TRIAL_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Clinical Trial Decision Path",
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
      title: "Why would a breast cancer clinical trial be mentioned for someone like me?",
      lead: "Patient question: when do trials become part of the conversation?",
      main: "btrial-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When people start hearing about breast cancer clinical trials.",
        },
        {
          id: "btrial-not-last",
          title: "Are breast cancer clinical trials only a last resort?",
          summary: "Why “last resort” is a common misunderstanding.",
        },
        {
          id: "btrial-ask-early",
          title: "Should I join a breast cancer clinical trial?",
          summary: "Ask early — trials are not only a last resort.",
        },
        {
          id: "btrial-not-immediately",
          title: "Do I need to look for trials immediately after breast cancer diagnosis?",
          summary: "Not always — subtype and standard options often come first.",
        },
        {
          id: "btrial-not-subject",
          title: "Does joining a trial mean I am a test subject for breast cancer?",
          summary: "Research with structure — and your choice to participate.",
        },
        {
          id: "btrial-subtype",
          title: "Does breast cancer subtype affect which trials matter?",
          summary: "HR+, HER2+, and TNBC may open different study doors.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How do I know if a trial is relevant to me for breast cancer?",
      lead: "Patient question: what makes a trial a fit — or not?",
      main: "does-not-decide",
      cards: [
        {
          id: "btrial-qualify",
          title: "Why might I not qualify for a breast cancer clinical trial?",
          summary: "Eligibility protects safety and research accuracy.",
        },
        {
          id: "btrial-replace",
          title: "Can a trial replace my current breast cancer treatment?",
          summary: "Alternative, combination, or something else — depending on design.",
        },
        {
          id: "btrial-better",
          title: "Is a trial automatically better than standard care for breast cancer?",
          summary: "Not automatically — fit and uncertainty both matter.",
        },
        {
          id: "btrial-risks",
          title: "What risks should I consider before joining for breast cancer?",
          summary: "Unknowns, side effects, and extra appointments.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "How should I compare a trial with my other options for breast cancer?",
      lead: "Patient question: goal, evidence, and impact — side by side.",
      main: "practical-points",
      cards: [
        {
          id: "btrial-daily-life",
          title: "How would a trial affect daily life for breast cancer?",
          summary: "Visits, travel, and what a normal week may look like.",
        },
        {
          id: "btrial-if-not",
          title: "What happens if the trial does not work for breast cancer?",
          summary: "Options afterward — and whether you can stop.",
        },
        {
          id: "btrial-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Ask about fit, compare with standard care, clarify logistics.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "btrial-mistakes",
          title: "What are common mistakes around breast cancer clinical trials?",
          summary: "Waiting too long, assuming last-resort only, chasing “new.”",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might evaluate a trial against standard care.",
        },
      ],
    },
  ],
};

const BREAST_FOLLOW_UP_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Cancer Follow-up Decision Path",
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
    "How monitoring and ongoing medicines fit daily life",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Am I done with cancer care after breast cancer treatment?",
      lead: "Patient question: what happens when active treatment ends?",
      main: "bfu-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When people move into breast cancer follow-up care.",
        },
        {
          id: "bfu-what-happens",
          title: "What does follow-up look like after breast cancer treatment ends?",
          summary: "A milestone — and a reason follow-up continues.",
        },
        {
          id: "bfu-not-waiting",
          title: "Is breast cancer follow-up just waiting for bad news?",
          summary: "No — the goal is a clear plan you can act on.",
        },
        {
          id: "bfu-first-visit",
          title: "What should I expect at my first breast cancer follow-up visit?",
          summary: "Symptoms, recovery, results, medicines, and next monitoring.",
        },
        {
          id: "bfu-who-manages",
          title: "Who manages my care after breast cancer treatment?",
          summary: "Know who to contact for different concerns.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "What are doctors looking for during breast cancer follow-up?",
      lead: "Patient question: what is my follow-up plan watching for?",
      main: "does-not-decide",
      cards: [
        {
          id: "bfu-schedule",
          title: "How often do I see my oncologist after breast cancer?",
          summary: "Appropriate monitoring — not simply more testing.",
        },
        {
          id: "bfu-guidelines",
          title: "What shapes my breast cancer follow-up schedule?",
          summary: "Guideline frameworks plus your personal risk and treatments.",
        },
        {
          id: "bfu-cancer-free",
          title: "When are you considered cancer-free after breast cancer?",
          summary: "Labels vary — ask what “NED” or surveillance means for you.",
        },
        {
          id: "bfu-mammo-type",
          title: "Screening vs diagnostic mammogram after breast cancer — which is it?",
          summary: "After cancer, imaging is often diagnostic — ask your plan.",
        },
        {
          id: "bfu-more-scans",
          title: "Are more scans always better for breast cancer?",
          summary: "Balance information, stress, cost, and procedures.",
        },
        {
          id: "bfu-endocrine",
          title: "How does long-term endocrine therapy fit breast cancer follow-up?",
          summary: "Side effects, adherence, and related health monitoring.",
        },
        {
          id: "bfu-long-term",
          title: "What late effects should we watch for breast cancer?",
          summary: "Fatigue, lymphedema, menopausal symptoms, bone health, and more.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I do if something changes for breast cancer?",
      lead: "Patient question: what actions should I take between appointments?",
      main: "practical-points",
      cards: [
        {
          id: "bfu-which-symptoms",
          title: "Which symptoms should I report after breast cancer treatment?",
          summary: "Ask which changes matter most for you.",
        },
        {
          id: "bfu-between-visits",
          title: "What if I notice something between appointments for breast cancer?",
          summary: "Do not wait automatically — ask what to do.",
        },
        {
          id: "bfu-fear",
          title: "What helps with fear of recurrence after breast cancer?",
          summary: "A plan, clear signals, and support — not alone.",
        },
        {
          id: "bfu-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Get the schedule, write call triggers, keep records.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bfu-mistakes",
          title: "What are common breast cancer follow-up mistakes?",
          summary: "Assuming care is over, waiting too long, chasing more scans.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might build a clear follow-up plan.",
        },
      ],
    },
  ],
};

const BREAST_GLOBAL_CARE_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "When to Consider Breast Cancer Care Abroad",
  pathSubtitle:
    "Name the capability gap → compare remote review vs travel → check logistics → prepare questions before booking.",
  completedLabels: [
    "Why people explore care across borders",
    "Remote review versus travel",
    "Records, hybrid care, and written next steps",
    "Questions to ask before you book",
  ],
  practicalPoints: [
    "Your reason for exploring, in one sentence",
    "Whether remote review can answer the question first",
    "What written next steps the receiving center will provide",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "When should I consider care elsewhere for breast cancer?",
      lead: "Patient question: is breast cancer care abroad worth it?",
      main: "bgc-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When people wonder about care in another city or country.",
        },
        {
          id: "bgc-explore-reasons",
          title: "Why do people explore care across borders for breast cancer?",
          summary: "Access, confidence, reject plan, support, cost, missing path.",
        },
        {
          id: "bgc-default-upgrade",
          title: "Is breast cancer care abroad automatically better?",
          summary: "No — fame or country reputation alone is not a reason to travel.",
        },
        {
          id: "bgc-capability-gap",
          title: "What is a capability gap for breast cancer?",
          summary: "A missing technique, trial, genetics/reconstruction path, or review.",
        },
        {
          id: "bgc-vs-care-team",
          title: "How is this different from choosing a breast cancer care team?",
          summary: "Care team = ongoing network; travel = a named access gap.",
        },
        {
          id: "bgc-vs-second-opinion",
          title: "How is this different from a breast cancer second opinion?",
          summary: "Review first; travel only if in-person access is required.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "Compare remote review, travel, and staying local for breast cancer",
      lead: "Patient question: do I need to fly, or can records be reviewed first?",
      main: "does-not-decide",
      cards: [
        {
          id: "bgc-remote-first",
          title: "Should I try remote review before travel for breast cancer?",
          summary: "Often yes — clarify the gap before booking flights.",
        },
        {
          id: "bgc-hybrid",
          title: "Can I travel for one step and continue care locally for breast cancer?",
          summary: "Many people build a hybrid plan — not one location only.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I prepare before exploring for breast cancer?",
      lead: "Patient question: what records and asks matter most?",
      main: "practical-points",
      cards: [
        {
          id: "bgc-records",
          title: "What records should I prepare for breast cancer?",
          summary: "Pathology, imaging, subtype, treatment history, genetics notes.",
        },
        {
          id: "bgc-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Name the reason, ask about remote review, request a written plan.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I ask before booking for breast cancer?",
      lead: "Patient question: how do I prepare the next conversation?",
      main: "checklist",
      cards: [
        {
          id: "bgc-mistakes",
          title: "What are common mistakes around breast cancer care abroad?",
          summary: "Booking before naming the gap; skipping remote review; fame-chasing.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might name the gap before booking flights.",
        },
      ],
    },
  ],
};

const BREAST_CARE_TEAM_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Choosing Your Breast Cancer Care Team",
  pathSubtitle:
    "Why team choice matters → second opinion vs new team → what to look for → what to prepare.",
  completedLabels: [
    "Why care-team choice matters",
    "How setups and options differ",
    "What to look for and how travel fits",
    "Questions and records to prepare",
  ],
  practicalPoints: [
    "What gap you are trying to fix — expertise, coordination, or confidence",
    "Whether a second opinion, new primary team, or hybrid setup fits",
    "How records and ownership would work across sites",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does choosing a breast cancer care team matter?",
      lead: "Patient question: do I need a major cancer center?",
      main: "bcare-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When people wonder about specialized breast cancer expertise.",
        },
        {
          id: "bcare-what-is",
          title: "What does “choosing a breast cancer care team” mean?",
          summary: "Who coordinates the journey — not only a building name.",
        },
        {
          id: "bcare-everyone",
          title: "Do I need a major breast cancer center?",
          summary: "No — the right level depends on your situation.",
        },
        {
          id: "bcare-choose-hospital",
          title: "How should I choose a breast cancer hospital or center?",
          summary: "Match capabilities to your decisions — not ranking lists alone.",
        },
        {
          id: "bcare-vs-second-opinion",
          title: "How is this different from a breast cancer second opinion?",
          summary: "Second opinion reviews a fork; care team owns ongoing care.",
        },
        {
          id: "bcare-who-treats",
          title: "Who treats breast cancer on a typical team?",
          summary: "Surgery, medical oncology, radiation, plastics, genetics, navigators.",
        },
        {
          id: "bcare-pick-surgeon",
          title: "How do I pick a breast cancer surgeon?",
          summary: "Experience with your decision — not only a famous name.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare care setups for breast cancer?",
      lead: "Patient question: stay local, switch teams, or build a hybrid plan?",
      main: "does-not-decide",
      cards: [
        {
          id: "bcare-when-helps",
          title: "When may another team help for breast cancer?",
          summary: "Complexity, conflict, missing expertise, or poor coordination.",
        },
        {
          id: "bcare-hybrid",
          title: "Can I combine specialist planning with local treatment for breast cancer?",
          summary: "Many people build a network — not one location only.",
        },
        {
          id: "bcare-multidisciplinary",
          title: "What does multidisciplinary care mean in practice for breast cancer?",
          summary: "Team review so local and systemic plans do not conflict.",
        },
        {
          id: "bcare-capabilities",
          title: "What capabilities should I match to my decisions for breast cancer?",
          summary: "Tumor board, pathology, surgery/reconstruction, genetics access.",
        },
        {
          id: "bcare-famous",
          title: "Is the most famous center automatically best for breast cancer?",
          summary: "Reputation is not a ranking for your case.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about travel, records, and handoffs for breast cancer?",
      lead: "Patient question: how do I make another team workable?",
      main: "practical-points",
      cards: [
        {
          id: "bcare-travel",
          title: "Should I travel far for breast cancer care?",
          summary: "Weigh complexity, visit frequency, and support.",
        },
        {
          id: "bcare-records",
          title: "What records should I prepare for breast cancer?",
          summary: "Pathology, imaging, genetics notes, current recommendations.",
        },
        {
          id: "bcare-coordination",
          title: "How should multi-site care be coordinated for breast cancer?",
          summary: "Name who owns surgery, medicines, radiation, reconstruction.",
        },
        {
          id: "bcare-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Name the gap, pick a setup, prepare one clear ask.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "bcare-mistakes",
          title: "What are common mistakes around choosing a breast cancer care team?",
          summary: "Fame-chasing, mixing up second opinions, traveling without a plan.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might choose a hybrid network over relocating everything.",
        },
      ],
    },
  ],
};

const BREAST_RADIATION_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Radiation Decision Path",
  pathSubtitle:
    "Why radiation matters → after lumpectomy vs mastectomy → schedule and reconstruction → what to ask.",
  completedLabels: [
    "Why radiation decisions matter",
    "How radiation fits each surgery path",
    "What schedule and reconstruction involve",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Whether radiation is expected after lumpectomy in your case",
    "How likely radiation is after mastectomy",
    "Schedule, side effects, and reconstruction timing impact",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why do breast cancer radiation decisions matter?",
      lead: "Patient question: is radiation just a detail after surgery — or part of choosing surgery?",
      main: "brad-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When radiation may tip surgery, reconstruction, or calendar plans.",
        },
        {
          id: "brad-what-is",
          title: "What is radiation in the breast cancer plan?",
          summary: "Local treatment after surgery — not a drug ranking.",
        },
        {
          id: "brad-why-matters",
          title: "Why are doctors discussing radiation before breast cancer surgery?",
          summary: "It can tip surgery path, reconstruction timing, and schedule.",
        },
        {
          id: "brad-surgery-choice",
          title: "How does radiation tip breast cancer lumpectomy vs mastectomy?",
          summary: "Compare full local packages, not operation names alone.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How does breast cancer radiation fit each path?",
      lead: "Patient question: what should I expect after lumpectomy or mastectomy?",
      main: "does-not-decide",
      cards: [
        {
          id: "brad-after-lumpectomy",
          title: "Do I need radiation after breast cancer lumpectomy?",
          summary: "Often part of the conservation package.",
        },
        {
          id: "brad-skip-after-lumpectomy",
          title: "What if I skip radiation after breast cancer lumpectomy?",
          summary: "Not a routine default — ask what risk changes for you.",
        },
        {
          id: "brad-after-mastectomy",
          title: "Do I need radiation after breast cancer mastectomy?",
          summary: "Situational — not automatically zero.",
        },
        {
          id: "brad-reconstruction",
          title: "Does radiation change breast reconstruction?",
          summary: "Timing and method may shift — ask early.",
        },
        {
          id: "brad-sequencing",
          title: "Where does breast cancer radiation sit in the overall sequence?",
          summary: "Usually after surgery; coordinates with systemic therapy.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about schedule and daily life for breast cancer?",
      lead: "Patient question: what will this mean week to week?",
      main: "practical-points",
      cards: [
        {
          id: "brad-schedule",
          title: "How long is breast cancer radiation?",
          summary: "Weeks, visits, and whether shorter options fit.",
        },
        {
          id: "brad-shorter",
          title: "Is shorter (including 5-day) breast cancer radiation an option?",
          summary: "Sometimes — candidacy depends on your situation.",
        },
        {
          id: "brad-when-starts",
          title: "When does radiation start after breast cancer surgery?",
          summary: "Usually after healing — and coordinated with systemic therapy.",
        },
        {
          id: "brad-wait",
          title: "How long can I wait for radiation after breast cancer surgery?",
          summary: "There is usually a window — ask what is still safe for you.",
        },
        {
          id: "brad-refuse",
          title: "Can I say no to breast cancer radiation?",
          summary: "A real conversation — ask what risk changes for you.",
        },
        {
          id: "brad-side-effects",
          title: "What side effects should I expect from radiation after breast cancer lumpectomy?",
          summary: "Skin, fatigue, and longer-term questions — ask for your plan.",
        },
        {
          id: "brad-during",
          title: "What should I know about daily life during breast cancer radiation?",
          summary: "Skin care, fatigue, and what to ask about activity.",
        },
        {
          id: "brad-practical",
          title: "How do travel, work, and caregiving fit for breast cancer?",
          summary: "Daily commitment and support options.",
        },
        {
          id: "brad-pending",
          title: "What should be clear before locking breast cancer surgery?",
          summary: "Expected / maybe / unlikely — by surgery path.",
        },
        {
          id: "brad-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Path answers, reconstruction impact, calendar sketch.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "brad-mistakes",
          title: "What are common mistakes around breast cancer radiation decisions?",
          summary: "Mastectomy myths, skipping the package, locking too early.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might stop choosing surgery only to avoid radiation.",
        },
      ],
    },
  ],
};

const BREAST_RECONSTRUCTION_PATH: EntryPathV2 = {
  pathEyebrow: "Decision path",
  pathTitle: "Breast Reconstruction Timing Decision Path",
  pathSubtitle:
    "Why timing matters → immediate vs delayed vs none → radiation and recovery → what to ask.",
  completedLabels: [
    "Why reconstruction timing matters",
    "How immediate, delayed, and none compare",
    "What radiation and recovery involve",
    "Questions for your next conversation",
  ],
  practicalPoints: [
    "Whether immediate, delayed, or no reconstruction fits your cancer plan",
    "Whether radiation is likely and how it changes timing",
    "Recovery load and how many operations the sequence may involve",
  ],
  steps: [
    {
      id: "understand",
      stage: STAGES.understand,
      title: "Why does breast reconstruction timing matter?",
      lead: "Patient question: is this a cosmetic choice — or part of the cancer plan?",
      main: "brec-understand",
      cards: [
        {
          id: "my-situation",
          title: "Is this my breast cancer situation?",
          summary: "When reconstruction timing sits inside a mastectomy plan.",
        },
        {
          id: "brec-what-is",
          title: "What is breast reconstruction in this decision?",
          summary: "Rebuilding shape after mastectomy — optional, not required.",
        },
        {
          id: "brec-why-in-plan",
          title: "Why discuss it before locking breast cancer surgery?",
          summary: "Timing can affect recovery, radiation, and operations.",
        },
        {
          id: "brec-who-faces",
          title: "When do these questions usually come up for breast cancer?",
          summary: "Most often with mastectomy — ask what applies to you.",
        },
        {
          id: "brec-not-required",
          title: "Do I have to reconstruct for breast cancer?",
          summary: "No — not reconstructing is a valid path.",
        },
      ],
    },
    {
      id: "compare",
      stage: STAGES.compare,
      title: "How should I compare breast reconstruction paths?",
      lead: "Patient question: immediate, delayed, or none — and which method family?",
      main: "does-not-decide",
      cards: [
        {
          id: "brec-immediate-vs-delayed",
          title: "How should I choose immediate vs delayed breast reconstruction?",
          summary: "Compare timing paths before locking a method.",
        },
        {
          id: "brec-immediate",
          title: "What does immediate breast reconstruction usually involve?",
          summary: "Starts with mastectomy — sometimes as a first stage.",
        },
        {
          id: "brec-delayed",
          title: "What does delayed breast reconstruction usually involve?",
          summary: "Cancer treatment and healing first — reconstruct later.",
        },
        {
          id: "brec-methods",
          title: "What method families are discussed most often for breast cancer?",
          summary: "Implant-based vs autologous (tissue) — high level.",
        },
        {
          id: "brec-expanders",
          title: "What are tissue expanders in breast reconstruction?",
          summary: "A common staged implant pathway — temporary stretch first.",
        },
        {
          id: "brec-stages",
          title: "What are the stages of breast reconstruction?",
          summary: "Often more than one operation — ask for your sequence.",
        },
        {
          id: "brec-radiation",
          title: "Does radiation change breast reconstruction?",
          summary: "Often reshapes timing and durability considerations.",
        },
        {
          id: "brec-implants-radiation",
          title: "Does radiation damage breast implants?",
          summary: "It can affect tissue and implant outcomes — ask early.",
        },
        {
          id: "brec-after-radiation",
          title: "How long after radiation can I have breast reconstruction?",
          summary: "Often delayed until healing — ask for your window.",
        },
        {
          id: "brec-genetics-bilateral",
          title: "How do genetics or bilateral surgery fit in for breast cancer?",
          summary: "Symmetry and staging may change — not automatic.",
        },
      ],
    },
    {
      id: "practical",
      stage: STAGES.practical,
      title: "What should I know about recovery and treatment timing for breast cancer?",
      lead: "Patient question: what will this mean week to week?",
      main: "practical-points",
      cards: [
        {
          id: "brec-recovery",
          title: "What does recovery look like for breast cancer?",
          summary: "First weeks, work, and number of operations.",
        },
        {
          id: "brec-systemic-timing",
          title: "How does breast cancer systemic therapy timing fit?",
          summary: "Reconstruction should not fight needed medicines.",
        },
        {
          id: "brec-pending",
          title: "What should be clear before locking timing for breast cancer?",
          summary: "Mastectomy plan, radiation, genetics, candidacy.",
        },
        {
          id: "brec-this-week",
          title: "What should I do this week for breast cancer?",
          summary: "Timing path, radiation question, plastic surgery consult.",
        },
      ],
    },
    {
      id: "conversation",
      stage: STAGES.conversation,
      title: "What should I discuss with my doctor for breast cancer?",
      lead: "Patient question: what should I ask at the next visit?",
      main: "checklist",
      cards: [
        {
          id: "brec-mistakes",
          title: "What are common mistakes around breast reconstruction timing?",
          summary: "Afterthoughts, ignoring radiation, must-reconstruct myths.",
        },
        {
          id: "scenario",
          title: "An example breast cancer decision scenario",
          summary: "How someone might choose timing inside a cancer plan.",
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
  [CARE_CENTER_SLUG]: CARE_CENTER_PATH,
  [FEASIBILITY_SLUG]: FEASIBILITY_PATH,
  [BRAIN_METS_SLUG]: BRAIN_METS_PATH,
  [GLOBAL_CARE_SLUG]: GLOBAL_CARE_PATH,
  [BREAST_NEWLY_DIAGNOSED_SLUG]: BREAST_NEWLY_DIAGNOSED_PATH,
  [PROSTATE_NEWLY_DIAGNOSED_SLUG]: PROSTATE_NEWLY_DIAGNOSED_PATH,
  [PROSTATE_SURVEILLANCE_SLUG]: PROSTATE_SURVEILLANCE_PATH,
  [PROSTATE_TREATMENT_COMPARE_SLUG]: PROSTATE_TREATMENT_COMPARE_PATH,
  [PROSTATE_SECOND_OPINION_SLUG]: PROSTATE_SECOND_OPINION_PATH,
  [BREAST_SUBTYPE_SLUG]: BREAST_SUBTYPE_PATH,
  [BREAST_SEQUENCING_SLUG]: BREAST_SEQUENCING_PATH,
  [BREAST_SURGERY_SLUG]: BREAST_SURGERY_PATH,
  [BREAST_SECOND_OPINION_SLUG]: BREAST_SECOND_OPINION_PATH,
  [BREAST_TREATMENT_COMPARE_SLUG]: BREAST_SYSTEMIC_PATH,
  [BREAST_GENETICS_SLUG]: BREAST_GENETICS_PATH,
  [BREAST_RECONSTRUCTION_SLUG]: BREAST_RECONSTRUCTION_PATH,
  [BREAST_RADIATION_SLUG]: BREAST_RADIATION_PATH,
  [BREAST_CARE_TEAM_SLUG]: BREAST_CARE_TEAM_PATH,
  [BREAST_METASTATIC_SLUG]: BREAST_METASTATIC_PATH,
  [BREAST_RECURRENCE_SLUG]: BREAST_RECURRENCE_PATH,
  [BREAST_QOL_SLUG]: BREAST_QOL_PATH,
  [BREAST_PRACTICAL_FIT_SLUG]: BREAST_PRACTICAL_FIT_PATH,
  [BREAST_CLINICAL_TRIAL_SLUG]: BREAST_CLINICAL_TRIAL_PATH,
  [BREAST_FOLLOW_UP_SLUG]: BREAST_FOLLOW_UP_PATH,
  [BREAST_GLOBAL_CARE_SLUG]: BREAST_GLOBAL_CARE_PATH,
};

export function getEntryPathV2(slug: string): EntryPathV2 | null {
  return PATHS[slug] ?? null;
}
