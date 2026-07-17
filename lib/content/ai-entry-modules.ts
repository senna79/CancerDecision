/**
 * Flagship AI Entry page modules — decision navigation, not articles.
 * Entry #1 sets the reusable template for future Tier-1 entries.
 */

export type AiEntryDecisionCard = {
  title: string;
  focus: string;
  clarifyIntro?: string;
  clarify: string[];
  examplesIntro?: string;
  examples?: string[];
  askIntro?: string;
  ask?: string[];
  why: string;
};

export type AiEntryMistake = {
  mistake: string;
  why: string;
};

export type AiEntryQuestionGroup = {
  heading: string;
  questions: string[];
};

export type AiEntryRelatedPath = {
  title: string;
  question: string;
  cta: string;
  href: string;
};

export type AiEntryFlagshipModules = {
  /** Decision Context strip */
  cancerLabel: string;
  decisionMoment: string;
  exploring: string;
  relatedDecisions: { label: string; href: string }[];
  /** Why this decision matters */
  whyTitle: string;
  whyLead: string;
  whyQuestions: string[];
  whyClose: string[];
  /** Your first 3 decisions */
  firstDecisionsTitle: string;
  firstDecisions: AiEntryDecisionCard[];
  /** Timeline */
  timelineTitle: string;
  timelineSteps: string[];
  timelineNote: string;
  /** Prep checklist */
  prepTitle: string;
  prepItems: string[];
  /** Common mistakes */
  mistakesTitle: string;
  mistakes: AiEntryMistake[];
  /** Second opinion bridge */
  secondOpinionTitle: string;
  secondOpinionLead: string;
  secondOpinionWhen: string[];
  secondOpinionClose: string;
  secondOpinionCtaLabel: string;
  secondOpinionHref: string;
  /** Doctor questions */
  doctorTitle: string;
  doctorGroups: AiEntryQuestionGroup[];
  /** Illustrative scenario */
  scenarioTitle: string;
  scenarioTag: string;
  scenarioDisclaimer: string;
  scenarioBody: string[];
  scenarioFocus: string[];
  scenarioClose: string;
  /** Your next step (north star) */
  nextStepTitle: string;
  nextStepLead: string;
  nextStepActions: string[];
  nextStepCtaLabel: string;
  nextStepHref: string;
  nextStepCtaMeta: string;
  /** Related decision paths */
  relatedPathsTitle: string;
  relatedPaths: AiEntryRelatedPath[];
};

const TREATMENT_COMPARE =
  "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer";
const BIOMARKER =
  "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment";
const SECOND_OPINION =
  "/questions/should-i-get-second-opinion-after-lung-cancer-diagnosis";

/** Lung Cancer AI Entry #1 — New Diagnosis */
export const NEWLY_DIAGNOSED_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "New Diagnosis",
  exploring: "What to do first after diagnosis",
  relatedDecisions: [
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Treatment Options", href: TREATMENT_COMPARE },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  whyTitle: "A diagnosis is the beginning of decisions — not the end",
  whyLead: "A lung cancer diagnosis often brings many questions at the same time:",
  whyQuestions: [
    "What type of lung cancer do I have?",
    "How advanced is it?",
    "Do I need more testing?",
    "What treatments are available?",
    "Should I get another medical opinion?",
  ],
  whyClose: [
    "The goal at this stage is not to rush into a decision.",
    "The goal is to make sure the important information is available before comparing treatment choices.",
  ],

  firstDecisionsTitle: "Your first 3 decisions",
  firstDecisions: [
    {
      title: "Decision 1",
      focus: "Do I fully understand my diagnosis?",
      clarifyIntro: "Before discussing treatment options, make sure you understand:",
      clarify: [
        "What type of lung cancer do I have?",
        "Was my diagnosis confirmed through pathology?",
        "Do I know the exact subtype?",
      ],
      why: "Different types of lung cancer can have different treatment approaches.",
    },
    {
      title: "Decision 2",
      focus: "Is there information that could change my treatment options?",
      clarifyIntro: "Ask whether additional testing may be important.",
      clarify: [],
      examplesIntro: "Examples may include:",
      examples: [
        "Biomarker testing",
        "Molecular testing",
        "Additional pathology review",
      ],
      askIntro: "Questions to ask:",
      ask: [
        "Could additional test results change which treatments are considered?",
        "Should these tests be completed before choosing a treatment plan?",
      ],
      why: "For some patients, additional information may open different treatment options.",
    },
    {
      title: "Decision 3",
      focus: "Do I understand my treatment choices?",
      clarifyIntro: "Before deciding, try to understand:",
      clarify: [
        "What options are available?",
        "What is the goal of each option?",
        "What are the possible benefits and trade-offs?",
        "Are there alternatives?",
      ],
      why: "The best choice depends on your cancer details, health situation, and personal goals.",
    },
  ],

  timelineTitle: "A typical decision path after diagnosis",
  timelineSteps: [
    "Diagnosis confirmed",
    "Understand cancer type and stage",
    "Review whether additional testing matters",
    "Discuss treatment options",
    "Make a treatment plan with your care team",
  ],
  timelineNote:
    "Every person's timeline is different. Some decisions may happen quickly, while others require additional information before moving forward. This is not a fixed medical pathway.",

  prepTitle: "Information that can help your next medical discussion",
  prepItems: [
    "Pathology report",
    "Imaging reports and scans",
    "Cancer stage information",
    "Biomarker / molecular testing results",
    "Previous treatment information (if any)",
    "Current medications",
    "Your questions and concerns",
  ],

  mistakesTitle: "Common mistakes after a lung cancer diagnosis",
  mistakes: [
    {
      mistake: "Choosing treatment before understanding your diagnosis",
      why: "Different lung cancer types and stages may lead to different options.",
    },
    {
      mistake:
        "Assuming the first treatment recommendation is the only option",
      why: "Understanding alternatives can help you have a more informed discussion.",
    },
    {
      mistake:
        "Searching for the “best hospital” before understanding what expertise you need",
      why: "The right care team depends on your cancer situation and treatment needs.",
    },
  ],

  secondOpinionTitle: "Should I consider a second opinion?",
  secondOpinionLead: "A second opinion may be especially valuable when:",
  secondOpinionWhen: [
    "Your diagnosis is complex",
    "Major treatment decisions are involved",
    "You received different recommendations",
    "You want to understand alternatives",
  ],
  secondOpinionClose:
    "A second opinion does not mean your current doctor is wrong. It can help confirm information, explore options, and make decisions with greater confidence.",
  secondOpinionCtaLabel:
    "Should I get a second opinion after lung cancer diagnosis?",
  secondOpinionHref: SECOND_OPINION,

  doctorTitle: "Questions you may want to discuss with your care team",
  doctorGroups: [
    {
      heading: "About diagnosis",
      questions: [
        "What type of lung cancer do I have?",
        "How was my diagnosis confirmed?",
        "What information is still uncertain?",
      ],
    },
    {
      heading: "About testing",
      questions: [
        "Do I need biomarker testing?",
        "Could test results change my options?",
        "Should testing happen before treatment?",
      ],
    },
    {
      heading: "About treatment",
      questions: [
        "What treatment options are available?",
        "Why are you recommending this approach?",
        "What alternatives should I understand?",
        "What are the main trade-offs?",
      ],
    },
  ],

  scenarioTitle: "Example: A patient deciding what to do after diagnosis",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person receives a lung cancer diagnosis and feels pressure to choose treatment quickly.",
    "Instead of immediately choosing an option, they focus on understanding:",
  ],
  scenarioFocus: [
    "whether the diagnosis information is complete",
    "whether additional testing could affect choices",
    "what treatment options exist",
    "what questions they should ask their care team",
  ],
  scenarioClose:
    "Different patients may make different decisions depending on their medical situation and personal goals.",

  nextStepTitle: "Your next step",
  nextStepLead: "You do not need to solve every decision today. A useful next step is:",
  nextStepActions: [
    "Confirm your lung cancer type and stage",
    "Ask whether additional testing may affect your options",
    "Prepare questions before your next medical discussion",
  ],
  nextStepCtaLabel: "Compare Lung Cancer Treatment Options",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison Decision Center",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Biomarker Testing",
      question: "Could test results change my treatment options?",
      cta: "Explore Biomarker Decision",
      href: BIOMARKER,
    },
    {
      title: "Treatment Comparison",
      question: "How should I compare lung cancer treatment options?",
      cta: "Explore Treatment Decision",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Second Opinion",
      question: "Should I get another expert opinion?",
      cta: "Explore Second Opinion Decision",
      href: SECOND_OPINION,
    },
  ],
};

const FLAGSHIP_BY_SLUG: Record<string, AiEntryFlagshipModules> = {
  "what-decisions-matter-most-after-new-lung-cancer-diagnosis":
    NEWLY_DIAGNOSED_FLAGSHIP,
};

export function getAiEntryFlagshipModules(
  slug: string
): AiEntryFlagshipModules | null {
  return FLAGSHIP_BY_SLUG[slug] ?? null;
}
