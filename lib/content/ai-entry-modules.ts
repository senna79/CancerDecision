/**
 * Flagship AI Entry page modules — decision navigation, not articles.
 * Template v1: #1–#9 Tier-1 AI Entries + #10–#12 supporting modules.
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

export type AiEntryJourneyNode = {
  label: string;
  href?: string;
  current?: boolean;
};

export type AiEntryTriggerGroup = {
  heading: string;
  lead?: string;
  items: string[];
};

export type AiEntryClarifyGroup = {
  heading: string;
  mayHelpIntro: string;
  mayHelp: string[];
  questionsIntro: string;
  questions: string[];
};

export type AiEntryValueSituation = {
  title: string;
  summary?: string;
  examples?: string[];
};

export type AiEntryAffectBlock = {
  title: string;
  body: string;
};

export type AiEntryGoalBlock = {
  title: string;
  questionsIntro: string;
  questions: string[];
};

export type AiEntryTreatmentCategory = {
  title: string;
  includes?: string[];
  questionsIntro: string;
  questions: string[];
};

export type AiEntryEvaluateBlock = {
  title: string;
  intro: string;
  items: string[];
};

export type AiEntryBridge = {
  title: string;
  body: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type AiEntryNextAction = {
  label: string;
  examples?: string[];
};

export type AiEntryFaqItem = {
  question: string;
  answer: string[];
};

export type AiEntryJourneyLink = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export type AiEntryFlagshipModules = {
  cancerLabel: string;
  decisionMoment: string;
  exploring: string;
  /** Optional subtitle under H1 */
  subtitle?: string;
  relatedDecisions: { label: string; href: string }[];
  journeyLabel: string;
  journeyPath: AiEntryJourneyNode[];

  triggersTitle: string;
  triggersLead?: string;
  triggers?: string[];
  triggerGroups?: AiEntryTriggerGroup[];

  whyTitle: string;
  whyLead: string;
  whyBody?: string[];
  whyQuestions: string[];
  whyDependsIntro?: string;
  whyDependsOn?: string[];
  whyNotLabel?: string;
  whyNotQuestion?: string;
  whyBetterLabel?: string;
  whyBetterQuestion?: string;
  whyClose: string[];

  /** Entry #1 — first 3 decisions */
  firstDecisionsTitle?: string;
  firstDecisions?: AiEntryDecisionCard[];

  /** Entry #2 — what a second opinion can clarify */
  clarifyTitle?: string;
  clarifyGroups?: AiEntryClarifyGroup[];

  /** Entry #3 — information completeness gap */
  infoGapTitle?: string;
  infoGapKnownIntro?: string;
  infoGapKnown?: string[];
  infoGapMissingIntro?: string;
  infoGapMissing?: string[];
  infoGapClose?: string[];

  /** Entry #3 — what decisions biomarker info can affect */
  affectTitle?: string;
  affectBlocks?: AiEntryAffectBlock[];
  affectClose?: string;

  /** Entry #3 — what testing does not decide */
  doesNotDecideTitle?: string;
  doesNotDecideLead?: string;
  doesNotDecideItems?: string[];
  doesNotDecideClose?: string;
  /** Extra boundary notes (e.g. no actionable finding) */
  doesNotDecideNotes?: string[];

  /** Decision prep — who typically needs this discussion */
  whoNeedsTitle?: string;
  whoNeedsLead?: string;
  whoNeedsBody?: string[];
  whoNeedsDependsIntro?: string;
  whoNeedsDependsOn?: string[];
  whoNeedsClose?: string;

  /** Decision prep — how testing is done + biopsy risk boundary */
  howDoneTitle?: string;
  howDoneLead?: string;
  howDoneSources?: AiEntryAffectBlock[];
  howDoneBiopsyTitle?: string;
  howDoneBiopsyBody?: string[];
  howDoneRisksTitle?: string;
  howDoneRisksLead?: string;
  howDoneRisksItems?: string[];
  howDoneRisksClose?: string;

  /** Real-world planning — cost/insurance principles (no fixed prices) */
  costTitle?: string;
  costLead?: string;
  costItems?: string[];
  costClose?: string;

  /** How long until results — no fixed calendar promises */
  resultsTimingTitle?: string;
  resultsTimingLead?: string;
  resultsTimingDependsIntro?: string;
  resultsTimingDependsOn?: string[];
  resultsTimingAskIntro?: string;
  resultsTimingAsk?: string[];
  resultsTimingClose?: string;

  /** Entry #4/#5 — start with goal / problem to solve */
  goalFrameworkTitle?: string;
  goalFrameworkLead?: string;
  goalFrameworkBlocks?: AiEntryGoalBlock[];
  goalFrameworkClose?: string;
  goalNotLabel?: string;
  goalNotQuestion?: string;
  goalBetterLabel?: string;
  goalBetterQuestion?: string;

  /** Entry #4 — treatment categories (tools, not answers) */
  treatmentCategoriesTitle?: string;
  treatmentCategoriesLead?: string;
  treatmentCategories?: AiEntryTreatmentCategory[];
  treatmentCategoriesClose?: string;

  /** Entry #4 — why doctors may recommend differently */
  differTitle?: string;
  differLead?: string;
  differFactorsIntro?: string;
  differFactors?: string[];
  differNotLabel?: string;
  differNotQuestion?: string;
  differBetterLabel?: string;
  differBetterQuestion?: string;

  /** When additional info / opinion may add value */
  valueTitle?: string;
  valueSituations?: AiEntryValueSituation[];

  /** Entry #2 — when it may not change the decision */
  mayNotTitle?: string;
  mayNotLead?: string;
  mayNotWhenIntro?: string;
  mayNotWhen?: string[];
  mayNotValueIntro?: string;
  mayNotValue?: string[];

  timingTitle?: string;
  timingLead?: string;
  timingConcern?: string;
  timingDependsIntro?: string;
  timingDependsOn?: string[];
  timingAsk?: string;
  timingClose?: string;

  timelineTitle?: string;
  timelineSteps?: string[];
  timelineNote?: string;

  prepTitle?: string;
  prepItems?: string[];

  mistakesTitle?: string;
  mistakes?: AiEntryMistake[];

  /** Entry #2 — how to evaluate opinions */
  evaluateTitle?: string;
  evaluateLead?: string;
  evaluateBlocks?: AiEntryEvaluateBlock[];

  /** Optional journey bridge (second opinion / global care) */
  bridge?: AiEntryBridge;
  /** Multiple soft Journey bridges (biomarker, trial, etc.) */
  bridges?: AiEntryBridge[];

  /** Decisions can change over time (e.g. Stage IV / progression) */
  progressionTitle?: string;
  progressionLead?: string;
  progressionFactorsIntro?: string;
  progressionFactors?: string[];
  progressionCloseIntro?: string;
  progressionClose?: string[];

  /** Common patient Q&A (not FAQPage schema) */
  faqTitle?: string;
  faqItems?: AiEntryFaqItem[];

  /** Explicit Journey graph connections */
  journeyLinksTitle?: string;
  journeyLinksLead?: string;
  journeyLinks?: AiEntryJourneyLink[];

  /** Legacy Entry #1 second-opinion bridge */
  secondOpinionTitle?: string;
  secondOpinionLead?: string;
  secondOpinionWhen?: string[];
  secondOpinionClose?: string;
  secondOpinionCtaLabel?: string;
  secondOpinionHref?: string;

  doctorTitle?: string;
  doctorGroups?: AiEntryQuestionGroup[];
  /** Short “before you leave the appointment” confirms */
  doctorLeaveTitle?: string;
  doctorLeaveItems?: string[];

  scenarioTitle: string;
  scenarioTag: string;
  scenarioDisclaimer: string;
  scenarioBody: string[];
  scenarioFocus: string[];
  scenarioClose: string;

  nextStepTitle: string;
  nextStepLead: string;
  nextStepActions: AiEntryNextAction[];
  nextStepCtaLabel: string;
  nextStepHref: string;
  nextStepCtaMeta: string;
  nextStepSecondaryCtaLabel?: string;
  nextStepSecondaryHref?: string;
  nextStepSecondaryMeta?: string;

  relatedPathsTitle: string;
  relatedPaths: AiEntryRelatedPath[];
};

const NEW_DIAGNOSIS =
  "/questions/what-decisions-matter-most-after-new-lung-cancer-diagnosis";
const TREATMENT_COMPARE =
  "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer";
const BIOMARKER =
  "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment";
const SECOND_OPINION =
  "/questions/should-i-get-second-opinion-after-lung-cancer-diagnosis";
const GLOBAL_CARE =
  "/questions/when-to-consider-lung-cancer-care-abroad";
const CARE_CENTER =
  "/questions/do-i-need-different-lung-cancer-center-or-specialized-expertise";
const STAGE_IV =
  "/questions/how-to-choose-treatment-options-for-stage-iv-lung-cancer";
const CLINICAL_TRIAL =
  "/questions/should-i-consider-a-clinical-trial-for-lung-cancer";
const RECURRENCE =
  "/questions/what-are-my-options-if-lung-cancer-comes-back";
const TREATMENT_PROGRESSION =
  "/questions/what-are-my-options-if-lung-cancer-treatment-no-longer-working";
const SURGERY =
  "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan";
const QUALITY_OF_LIFE =
  "/questions/how-should-quality-of-life-factor-into-lung-cancer-decisions";
const COST_LOGISTICS =
  "/questions/can-my-lung-cancer-treatment-plan-work-with-my-real-life";
const CARE_MAP = "/cancers/lung-cancer#decision-map";

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
  journeyLabel: "Lung Cancer Journey",
  journeyPath: [
    { label: "New Diagnosis", current: true },
    { label: "Treatment Decisions", href: TREATMENT_COMPARE },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  triggersTitle: "You may be asking this because…",
  triggersLead: "You recently:",
  triggers: [
    "Received your first lung cancer diagnosis",
    "Were told you need to choose a treatment approach",
    "Are unsure whether more testing is needed",
    "Want to understand whether another opinion could help",
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

  timingTitle: "Do I need to decide immediately?",
  timingLead:
    "Some decisions may require timely discussion, but many treatment choices depend on having complete information first.",
  timingDependsIntro: "The right timing depends on:",
  timingDependsOn: [
    "Cancer type",
    "Stage",
    "Test results",
    "Your healthcare team's advice",
  ],
  timingClose:
    "Ask your care team which questions need a timely discussion, and which can wait until key information is available. If symptoms worsen, seek urgent care rather than waiting for elective sequencing.",

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
    { label: "Confirm your lung cancer type and stage" },
    { label: "Ask whether additional testing may affect your options" },
    { label: "Prepare questions before your next medical discussion" },
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

/** Lung Cancer AI Entry #2 — Second Opinion */
export const SECOND_OPINION_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "Whether a second opinion may help",
  exploring: "Second Opinion Decision",
  relatedDecisions: [
    { label: "Treatment Options", href: TREATMENT_COMPARE },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Choosing a Care Team", href: CARE_CENTER },
    { label: "Global Care Options", href: GLOBAL_CARE },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: NEW_DIAGNOSIS },
    { label: "Second Opinion", current: true },
    { label: "Treatment Decisions", href: TREATMENT_COMPARE },
  ],

  triggersTitle: "You may be considering a second opinion if:",
  triggerGroups: [
    {
      heading: "Received a new diagnosis",
      lead: "You want to confirm:",
      items: [
        "Is the diagnosis accurate?",
        "Is the cancer type clearly identified?",
        "Is the stage information complete?",
      ],
    },
    {
      heading: "Received a treatment recommendation",
      lead: "You want to understand:",
      items: [
        "Are there other reasonable options?",
        "Why is this approach recommended?",
        "What are the potential trade-offs?",
      ],
    },
    {
      heading: "Heard different opinions",
      lead: "You want to understand:",
      items: [
        "Why doctors may recommend different approaches",
        "Which factors influence each recommendation",
      ],
    },
    {
      heading: "Have a complex or uncommon situation",
      lead: "You want access to:",
      items: [
        "Specialized expertise",
        "Multidisciplinary review",
        "Additional perspectives",
      ],
    },
  ],

  whyTitle: "A second opinion is about confidence, not disagreement",
  whyLead: "After a lung cancer diagnosis, patients often face decisions involving:",
  whyQuestions: [
    "Understanding the diagnosis",
    "Confirming the cancer stage",
    "Choosing between treatment options",
    "Deciding where to receive care",
  ],
  whyDependsIntro:
    "Cancer treatment decisions can be complex because different approaches may be reasonable depending on:",
  whyDependsOn: [
    "Cancer type",
    "Stage",
    "Biomarker information",
    "Overall health",
    "Personal priorities",
  ],
  whyClose: [
    "A second opinion can help you better understand the reasoning behind your options before making a major decision.",
  ],

  clarifyTitle: "What questions can a second opinion answer?",
  clarifyGroups: [
    {
      heading: "About diagnosis",
      mayHelpIntro: "A second opinion may help review:",
      mayHelp: ["Pathology findings", "Cancer subtype", "Stage information"],
      questionsIntro: "Questions:",
      questions: [
        "Do you agree with the diagnosis?",
        "Is any additional review needed?",
      ],
    },
    {
      heading: "About treatment choices",
      mayHelpIntro: "A second opinion may help explain:",
      mayHelp: [
        "Available options",
        "Why a treatment is recommended",
        "Alternative approaches",
      ],
      questionsIntro: "Questions:",
      questions: [
        "Are there other reasonable options?",
        "What are the benefits and trade-offs?",
      ],
    },
    {
      heading: "About care planning",
      mayHelpIntro: "A second opinion may help you understand:",
      mayHelp: [
        "Which specialists may be involved",
        "Whether additional expertise could help",
        "How your care plan fits your goals",
      ],
      questionsIntro: "Questions:",
      questions: [],
    },
  ],

  valueTitle: "Situations where a second opinion may be especially helpful",
  valueSituations: [
    {
      title: "Complex diagnosis",
      examples: [
        "Rare cancer subtype",
        "Unclear pathology",
        "Difficult staging questions",
      ],
    },
    {
      title: "Major treatment decisions",
      examples: [
        "Choosing initial treatment",
        "Considering surgery",
        "Starting long-term therapy",
      ],
    },
    {
      title: "Multiple possible approaches",
      examples: [
        "Different treatment combinations",
        "Different treatment sequences",
        "Different care strategies",
      ],
    },
    {
      title: "Seeking specialized expertise",
      examples: [
        "High-volume cancer centers",
        "Multidisciplinary teams",
        "Specialized treatment experience",
      ],
    },
  ],

  mayNotTitle: "A second opinion does not always mean a different answer",
  mayNotLead: "A second opinion may confirm the original recommendation.",
  mayNotWhenIntro: "This can happen when:",
  mayNotWhen: [
    "The diagnosis is clear",
    "Treatment options are well established",
    "Multiple specialists reach the same conclusion",
  ],
  mayNotValueIntro:
    "The value of a second opinion is not only finding a different recommendation. It may also provide:",
  mayNotValue: ["More confidence", "Better understanding", "Clearer expectations"],

  timingTitle: "Does getting a second opinion mean waiting to start treatment?",
  timingLead:
    "Seeking more information and moving forward with appropriate care are not always opposite choices.",
  timingDependsIntro: "The timing of decisions depends on:",
  timingDependsOn: [
    "Cancer type and stage",
    "How quickly treatment decisions need to be made",
    "Your healthcare team's guidance",
  ],
  timingClose:
    "A second opinion should help you make a more informed decision, not create unnecessary delay. If you are concerned about timing, discuss this directly with your care team.",

  evaluateTitle: "How should I compare different medical opinions?",
  evaluateLead:
    "Different recommendations do not always mean one doctor is right and another is wrong.",
  evaluateBlocks: [
    {
      title: "1. Diagnostic reasoning",
      intro: "Ask:",
      items: [
        "Do they agree on the diagnosis?",
        "Do they interpret the available information differently?",
        "Is more information needed?",
      ],
    },
    {
      title: "2. Treatment reasoning",
      intro: "Ask:",
      items: [
        "Why is this option recommended?",
        "What alternatives were considered?",
        "What are the trade-offs?",
      ],
    },
    {
      title: "3. Expertise and experience",
      intro: "Consider:",
      items: [
        "Does the team regularly treat similar cases?",
        "Is multidisciplinary input available?",
        "Do they have experience with your specific situation?",
      ],
    },
    {
      title: "4. Your personal priorities",
      intro: "Consider:",
      items: [
        "Treatment goals",
        "Side effects",
        "Lifestyle impact",
        "Access and cost",
      ],
    },
  ],

  prepTitle: "What information should I prepare for a second opinion?",
  prepItems: [
    "Pathology report",
    "Biopsy information",
    "Imaging reports and scans",
    "Cancer stage information",
    "Biomarker / molecular testing results",
    "Current treatment recommendation",
    "Previous treatment information (if any)",
    "Questions you want answered",
  ],

  bridge: {
    title: "Exploring specialized opinions beyond your local care team",
    body: [
      "Some patients explore opinions from specialized centers in other regions or countries, especially when looking for expertise in complex or uncommon cases.",
      "International opinions are not necessary for everyone.",
      "The important question is whether additional expertise could meaningfully improve your understanding of available options.",
    ],
    ctaLabel: "When is lung cancer care abroad worth considering?",
    ctaHref: GLOBAL_CARE,
  },

  doctorTitle: "Questions you may want to discuss with a specialist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "What specifically should this second opinion clarify?",
    "Do I have the records I need for another review?",
    "How urgent is starting treatment versus waiting for another perspective?",
    "Who would you recommend for another review — and why?",
  ],
  doctorGroups: [
    {
      heading: "Diagnosis",
      questions: [
        "Do you agree with my diagnosis?",
        "Is the cancer type and stage clear?",
        "Is additional testing recommended?",
      ],
    },
    {
      heading: "Treatment",
      questions: [
        "What options would you consider?",
        "Why would you recommend this approach?",
        "What alternatives should I understand?",
        "What are the main trade-offs?",
      ],
    },
    {
      heading: "Expertise",
      questions: [
        "How often do you treat similar cases?",
        "Is a multidisciplinary team involved?",
        "Are there specialized options I should consider?",
      ],
    },
  ],

  scenarioTitle: "Example: Deciding whether to seek another opinion",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person recently receives a lung cancer diagnosis and is offered a treatment plan.",
    "They feel uncertain and wonder whether they should immediately start treatment or seek another perspective.",
    "Instead of searching for a different answer, they focus on understanding:",
  ],
  scenarioFocus: [
    "Whether their diagnosis information is complete",
    "Whether additional testing may affect choices",
    "What treatment options exist",
    "What questions they need answered",
  ],
  scenarioClose:
    "The second opinion helps them make a decision with more confidence.",

  nextStepTitle: "Your next step",
  nextStepLead: "If you are considering a second opinion:",
  nextStepActions: [
    { label: "Collect your medical information." },
    {
      label: "Identify what you want the second opinion to clarify.",
      examples: [
        "Confirm diagnosis",
        "Compare treatments",
        "Understand alternatives",
      ],
    },
    { label: "Prepare questions before speaking with another specialist." },
  ],
  nextStepCtaLabel: "Compare Lung Cancer Treatment Options",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison Decision Center",

  relatedPathsTitle: "Related decisions",
  relatedPaths: [
    {
      title: "Newly diagnosed?",
      question: "What should I do first after a lung cancer diagnosis?",
      cta: "New diagnosis next steps",
      href: NEW_DIAGNOSIS,
    },
    {
      title: "Need to understand testing?",
      question: "Could biomarker testing change my treatment options?",
      cta: "Biomarker testing",
      href: BIOMARKER,
    },
    {
      title: "Comparing treatments?",
      question: "How should I compare lung cancer treatment options?",
      cta: "Treatment options",
      href: TREATMENT_COMPARE,
    },
  ],
};

/** Lung Cancer AI Entry #3 — Biomarker Testing (Entry Template v2.0 sample) */
export const BIOMARKER_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "Whether additional information may change treatment choices",
  exploring: "Whether testing should happen before locking a treatment plan",
  subtitle:
    "Could additional test results change which treatment options are considered?",
  relatedDecisions: [
    { label: "New Diagnosis", href: NEW_DIAGNOSIS },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Clinical Trials", href: CARE_MAP },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: NEW_DIAGNOSIS },
    { label: "Biomarker Testing", current: true },
    { label: "Treatment Decisions", href: TREATMENT_COMPARE },
  ],

  triggersTitle: "When biomarker testing may matter most",
  triggerGroups: [
    {
      heading: "New diagnosis",
      lead: "You may be asking:",
      items: [
        "Do I know enough about my cancer yet?",
        "Is important information still missing before we choose?",
      ],
    },
    {
      heading: "Choosing treatment",
      lead: "You may be asking:",
      items: [
        "Could results change the options on the table?",
        "Should testing happen before locking a plan?",
      ],
    },
    {
      heading: "Treatment change or another opinion",
      lead: "You may be asking:",
      items: [
        "Was all relevant information reviewed?",
        "Would updated testing change what we compare next?",
      ],
    },
  ],

  whyTitle: "Why does biomarker testing matter?",
  whyLead:
    "After a lung cancer diagnosis, many people want to move quickly toward treatment — and some choices depend on understanding more about the cancer itself.",
  whyBody: [],
  whyQuestions: [
    "Biomarker testing looks for features of your cancer",
    "Some results may open or change treatment discussions",
    "Treatment decisions are stronger when important information is available",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Do I need every possible test?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion: "Do I have the information needed to make a treatment decision?",
  whyClose: [
    "Ask your care team whether testing is complete and whether results could change the options you should discuss.",
  ],

  whoNeedsTitle: "Does everyone need the same tests?",
  whoNeedsLead:
    "No. Not every person with lung cancer needs the same tests at the same time — and asking about testing is not the same as being “upsold.”",
  whoNeedsBody: [
    "What is useful depends on your cancer type, stage, the treatment decision in front of you, and what information is already available.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Cancer type and subtype",
    "Stage and how quickly a first treatment decision is needed",
    "Whether results could change the options under discussion",
    "What testing has already been completed",
  ],
  whoNeedsClose:
    "A useful question: “For my situation, which tests matter before we choose a plan — and which can wait?”",

  howDoneTitle: "How is biomarker testing done?",
  howDoneLead:
    "Biomarker testing is laboratory analysis of cancer features. It is not the same thing as a biopsy — though it often uses tissue or other samples already collected, or sometimes a new sample.",
  howDoneSources: [
    {
      title: "Tissue already collected",
      body: "Many tests use pathology samples from a prior biopsy or surgery, if enough usable material remains.",
    },
    {
      title: "Blood-based testing (liquid biopsy)",
      body: "In some situations, doctors discuss blood tests that look for cancer-related signals. Availability and usefulness depend on the clinical context.",
    },
    {
      title: "A new sample, if needed",
      body: "If prior tissue is insufficient or outdated for the decision at hand, another biopsy may be discussed. That is a separate procedure decision.",
    },
  ],
  howDoneBiopsyTitle: "Will I need another biopsy?",
  howDoneBiopsyBody: [
    "Not always. Ask whether existing samples can be used first.",
    "If a new biopsy is recommended, ask why it is needed now, what it would change, and what the alternatives are if waiting or using other sample types.",
  ],
  howDoneRisksTitle: "What are the risks if another biopsy is needed?",
  howDoneRisksLead:
    "The main risks usually come from obtaining new tissue — not from the laboratory biomarker analysis itself. Procedure risks depend on how and where a sample would be taken.",
  howDoneRisksItems: [
    "Bleeding or bruising at the procedure site",
    "Infection (uncommon, but possible with invasive procedures)",
    "Pain or discomfort during recovery",
    "Procedure-specific risks your team should explain for the planned approach",
  ],
  howDoneRisksClose:
    "Ask: “If we need new tissue, what are the risks in my case, and how do those trade off against the information we might gain?”",

  infoGapTitle:
    "Before making treatment decisions, ask whether the picture is complete",
  infoGapKnownIntro: "After diagnosis, you may already know:",
  infoGapKnown: [
    "Your lung cancer diagnosis",
    "Your cancer stage",
    "Some treatment options",
  ],
  infoGapMissingIntro: "But you may still need to clarify:",
  infoGapMissing: [
    "Whether additional testing is needed",
    "Whether test results could change treatment options",
    "Whether all reasonable approaches have been discussed",
  ],
  infoGapClose: [
    "The goal is not to collect every possible piece of information.",
    "The goal is to make sure important decisions are not made without information that could matter.",
  ],

  affectTitle: "How can biomarker information support treatment decisions?",
  affectBlocks: [
    {
      title: "Understanding which options may be considered",
      body: "Some test results may provide information that helps doctors evaluate whether certain treatment approaches should be discussed.",
    },
    {
      title: "Comparing treatment strategies",
      body: "Additional information may change how different treatment options are compared.",
    },
    {
      title: "Preparing for another medical opinion",
      body: "Complete information can help another specialist provide a more informed review of your situation.",
    },
    {
      title: "Understanding future options",
      body: "In some situations, testing information may help guide discussions about current or future treatment choices.",
    },
  ],

  doesNotDecideTitle:
    "Could biomarker results change my treatment options?",
  doesNotDecideLead:
    "Results may change which approaches your team discusses. A biomarker finding does not automatically mean a specific treatment — and it is only one factor among several. Decisions still consider:",
  doesNotDecideItems: [
    "Cancer stage",
    "Overall health",
    "Previous treatments",
    "Treatment goals",
    "Potential benefits and trade-offs",
    "Personal preferences",
  ],
  doesNotDecideNotes: [
    "If no “actionable” finding is reported, that does not mean there are no options — it means this particular information did not point to a specific matched approach. Ask what the next discussion should focus on.",
    "Results may support discussions about certain therapies, comparisons among options, or clinical trials — or they may mainly confirm that the current plan still fits the information available.",
  ],
  doesNotDecideClose:
    "Testing improves the information for discussion — it does not replace a conversation with your care team.",

  costTitle: "Cost and insurance — what to ask before testing is ordered",
  costLead:
    "There is no single “typical price.” Cost depends on the test type, lab, country or system, insurance rules, and whether another procedure is needed. Use these questions instead of guessing a number.",
  costItems: [
    "Which tests are being ordered, and why does each one matter for this decision?",
    "What is usually covered, what needs prior authorization, and what might we pay out of pocket?",
    "If cost is a barrier, can existing tissue, a narrower panel, or another path still answer the key question?",
  ],
  costClose:
    "Practical pair to ask together: “What will this cost us — and will the result change what we discuss next?”",

  valueTitle: "Situations where additional testing may be especially important",
  valueSituations: [
    {
      title: "Before choosing initial treatment",
      summary:
        "Testing may help clarify options before starting a treatment plan.",
    },
    {
      title: "When multiple approaches are possible",
      summary:
        "Additional information may help compare different strategies.",
    },
    {
      title: "When considering specialized treatments",
      summary:
        "Some treatment approaches may depend on specific cancer characteristics.",
    },
    {
      title: "When seeking another opinion",
      summary:
        "Complete information can help specialists review your situation more accurately.",
    },
  ],

  timingTitle: "Does biomarker testing mean delaying treatment?",
  timingLead:
    "One of the most common concerns after diagnosis is whether waiting for more information will delay care.",
  timingConcern: "Will waiting for more information delay my care?",
  timingDependsIntro: "Important factors may include:",
  timingDependsOn: [
    "Cancer type and stage",
    "How quickly treatment decisions need to be made",
    "What information is still needed",
  ],
  timingAsk:
    "Could waiting for these results change the treatment options we should consider?",
  timingClose:
    "The answer depends on your individual situation. Discuss timing directly with your care team.",

  resultsTimingTitle: "How long does biomarker testing take?",
  resultsTimingLead:
    "There is no single calendar for every test. Turnaround depends on the type of test, where it is performed, whether a usable sample is already available, and whether another sample is needed.",
  resultsTimingDependsIntro: "Timing often depends on:",
  resultsTimingDependsOn: [
    "Whether existing tissue or a blood sample can be used",
    "Which tests are ordered and which laboratory runs them",
    "Local processing and shipping time",
    "Whether an additional biopsy is needed first",
  ],
  resultsTimingAskIntro: "Ask your care team:",
  resultsTimingAsk: [
    "Has my sample already been sent for testing?",
    "When should we expect results in our setting?",
    "Will treatment decisions wait for these results — and why or why not?",
  ],
  resultsTimingClose:
    "Do not assume “waiting” always means unsafe delay — or that results will arrive overnight. Confirm both the expected window and how it affects the next decision.",

  mistakesTitle: "Common mistakes when thinking about biomarker testing",
  mistakes: [
    {
      mistake: "Assuming all lung cancers are treated the same",
      why: "Different cancers may have different characteristics that influence treatment discussions.",
    },
    {
      mistake:
        "Choosing treatment before asking whether important information is missing",
      why: "Some decisions may depend on having complete information.",
    },
    {
      mistake: "Thinking more testing always means unnecessary delay",
      why: "The purpose of testing is not to slow decisions. The purpose is to avoid making important choices without relevant information.",
    },
    {
      mistake: "Treating one test result as the entire decision",
      why: "Good decisions consider medical information together with personal goals and preferences.",
    },
  ],

  doctorTitle: "Questions you can ask your doctor",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Has biomarker testing been completed?",
    "Are all recommended results available?",
    "Could results change my treatment options?",
    "Should we wait for results before deciding treatment?",
  ],
  doctorGroups: [
    {
      heading: "Before testing",
      questions: [
        "What biomarkers should be tested for my cancer type and situation?",
        "Has my tissue or sample already been sent — or can you use what we already have?",
        "Do I need another biopsy, and what are the risks if we do?",
        "What should we expect for cost, insurance, and turnaround time?",
      ],
    },
    {
      heading: "Before choosing treatment",
      questions: [
        "Should we wait for results before locking a plan?",
        "Could these results change my options?",
        "What happens if results are not back yet but treatment pressure is rising?",
      ],
    },
    {
      heading: "If testing is incomplete or unclear",
      questions: [
        "Are the results complete for the decision we are making now?",
        "What if there is no actionable finding?",
        "Are there other ways to get the information we still need?",
        "How should these results change our next step?",
      ],
    },
  ],

  scenarioTitle:
    "Example: Deciding whether more information is needed before treatment",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person receives a lung cancer diagnosis and is presented with treatment options.",
    "Before choosing a treatment, they ask whether additional testing could provide information that changes the discussion.",
    "They focus on:",
  ],
  scenarioFocus: [
    "What is already known",
    "What information is still missing",
    "Whether test results could affect available options",
    "What questions to ask their care team",
  ],
  scenarioClose:
    "The goal is not to delay decisions. The goal is to make decisions with the most relevant information available.",

  nextStepTitle: "Your next step",
  nextStepLead: "Before you leave this page, focus on three actions:",
  nextStepActions: [
    {
      label:
        "Ask whether biomarker testing is complete — and whether existing samples can be used.",
    },
    {
      label:
        "Ask whether results (or waiting for them) could change the options you discuss.",
    },
    {
      label:
        "If a new biopsy or cost is a concern, ask about risks, alternatives, coverage, and timing before anything is ordered.",
    },
  ],
  nextStepCtaLabel: "Compare Lung Cancer Treatment Options",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison Decision Center",

  relatedPathsTitle: "Related decisions",
  relatedPaths: [
    {
      title: "Recently diagnosed?",
      question: "What should I do first after a lung cancer diagnosis?",
      cta: "New diagnosis next steps",
      href: NEW_DIAGNOSIS,
    },
    {
      title: "Unsure about your current plan?",
      question: "Should I get a second opinion after lung cancer diagnosis?",
      cta: "Second opinion",
      href: SECOND_OPINION,
    },
    {
      title: "Comparing treatments?",
      question: "How should I compare lung cancer treatment options?",
      cta: "Treatment options",
      href: TREATMENT_COMPARE,
    },
  ],
};

/** Lung Cancer AI Entry #4 — Treatment Comparison */
export const TREATMENT_COMPARISON_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "How to compare treatment choices",
  exploring: "Treatment Comparison Decision",
  subtitle:
    "A framework to understand choices, trade-offs, and questions before making a treatment decision.",
  relatedDecisions: [
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Clinical Trials", href: CARE_MAP },
    { label: "Care Center Selection", href: CARE_CENTER },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: NEW_DIAGNOSIS },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Treatment Comparison", current: true },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  triggersTitle: "You may be comparing treatment options if:",
  triggerGroups: [
    {
      heading: "You have received a treatment recommendation",
      lead: "You want to understand:",
      items: [
        "Why this option was suggested",
        "Whether alternatives exist",
        "What factors influenced this recommendation",
      ],
    },
    {
      heading: "You have more than one possible option",
      lead: "You want to compare:",
      items: [
        "Potential benefits",
        "Side effects",
        "Treatment burden",
        "Long-term considerations",
      ],
    },
    {
      heading: "You are unsure whether you have enough information",
      lead: "You may be asking:",
      items: [
        "Are there missing test results?",
        "Should I get another opinion?",
        "What questions should I ask before deciding?",
      ],
    },
    {
      heading: "Your situation has changed",
      lead: "Examples:",
      items: [
        "New test results",
        "Treatment response changes",
        "Recurrence",
        "New health considerations",
      ],
    },
  ],

  whyTitle: "Treatment decisions are choices, not just recommendations",
  whyLead:
    "After a lung cancer diagnosis, patients may hear different treatment names or receive different recommendations.",
  whyQuestions: [],
  whyNotLabel: "The natural question is:",
  whyNotQuestion: "Which treatment is best?",
  whyBetterLabel: "But a more useful question is:",
  whyBetterQuestion: "Which option makes the most sense for my situation?",
  whyClose: [
    "A treatment decision involves understanding what each option is trying to achieve, what benefits may be expected, what risks or trade-offs exist, and how the choice fits your life and priorities.",
  ],

  goalFrameworkTitle: "The first question: What is each option trying to achieve?",
  goalFrameworkLead: "Before comparing treatments, understand the goal.",
  goalFrameworkBlocks: [
    {
      title: "Is the goal to remove the cancer?",
      questionsIntro: "Questions:",
      questions: [
        "Is the cancer in a situation where removal may be possible?",
        "What is the goal of this approach?",
      ],
    },
    {
      title: "Is the goal to control the cancer?",
      questionsIntro: "Questions:",
      questions: [
        "Is the goal to slow growth or manage disease?",
        "How is success evaluated?",
      ],
    },
    {
      title: "Is the goal to improve quality of life?",
      questionsIntro: "Questions:",
      questions: [
        "Could this approach help symptoms?",
        "How might it affect daily life?",
      ],
    },
  ],
  goalFrameworkClose:
    "The same treatment can have different roles depending on the patient's situation.",

  evaluateTitle: "Compare any two options using these five questions",
  evaluateLead:
    "Use the same five questions for each option your care team discusses.",
  evaluateBlocks: [
    {
      title: "1. What is the goal?",
      intro: "Ask:",
      items: [
        "What problem is this option trying to solve?",
        "Is the goal cure, control, or symptom relief?",
      ],
    },
    {
      title: "2. What benefit is expected?",
      intro: "Ask:",
      items: [
        "What improvement do doctors hope to achieve?",
        "How will success be measured?",
      ],
    },
    {
      title: "3. What are the trade-offs?",
      intro: "Ask:",
      items: [
        "What are the possible risks?",
        "What side effects should I understand?",
        "How could this affect daily life?",
      ],
    },
    {
      title: "4. What does the treatment require?",
      intro: "Ask:",
      items: [
        "How long does treatment take?",
        "How frequent are appointments?",
        "What commitment does it require?",
      ],
    },
    {
      title: "5. How does it fit my priorities?",
      intro: "Ask:",
      items: [
        "What matters most to me?",
        "What outcomes am I hoping for?",
        "What risks am I comfortable accepting?",
      ],
    },
  ],

  differTitle: "Different recommendations do not always mean someone is wrong",
  differLead: "Patients may sometimes hear different opinions.",
  differFactorsIntro: "This can happen because doctors may weigh:",
  differFactors: [
    "Different medical information",
    "Different treatment goals",
    "Different interpretations of risks and benefits",
    "Different patient priorities",
  ],
  differNotLabel: "The important question is not:",
  differNotQuestion: "Who is right?",
  differBetterLabel: "The better question is:",
  differBetterQuestion: "What reasoning supports each option?",

  infoGapTitle: "Make sure the decision is based on complete information",
  infoGapKnownIntro: "Before choosing treatment, consider whether you understand:",
  infoGapKnown: [
    "Your cancer type",
    "Your cancer stage",
    "Relevant biomarker information",
    "Treatment goals",
    "Available alternatives",
    "Expected benefits and trade-offs",
  ],
  infoGapClose: [
    "If important information is missing, ask what additional information may help before making a decision.",
  ],

  treatmentCategoriesTitle: "Treatments are tools, not automatic answers",
  treatmentCategoriesLead: "Different treatment approaches may include:",
  treatmentCategories: [
    {
      title: "Surgery",
      questionsIntro: "Questions:",
      questions: [
        "Is surgery appropriate in my situation?",
        "What is the goal?",
        "What are the benefits and risks?",
      ],
    },
    {
      title: "Radiation therapy",
      questionsIntro: "Questions:",
      questions: [
        "What role would radiation play?",
        "Would it be combined with other approaches?",
      ],
    },
    {
      title: "Systemic treatments",
      includes: ["Chemotherapy", "Immunotherapy", "Targeted treatments"],
      questionsIntro: "Questions:",
      questions: [
        "Why is this approach recommended?",
        "Does my cancer information affect this choice?",
      ],
    },
  ],
  treatmentCategoriesClose:
    "The important decision is not choosing a treatment category. It is understanding why a particular option is being considered for you.",

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be worth considering when:",
  secondOpinionWhen: [
    "The decision is complex",
    "Several approaches appear reasonable",
    "You want to understand alternatives",
    "You want more confidence before deciding",
  ],
  secondOpinionClose:
    "A second opinion does not always change the recommendation. Sometimes it confirms that the decision is based on complete information.",
  secondOpinionCtaLabel:
    "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
  secondOpinionHref: SECOND_OPINION,

  mistakesTitle: "Common mistakes when comparing treatment options",
  mistakes: [
    {
      mistake: "Choosing based on one factor only",
      why: "Treatment decisions involve benefits, risks, and personal priorities.",
    },
    {
      mistake: "Assuming the newest treatment is automatically better",
      why: "A newer option may not always be the most appropriate option.",
    },
    {
      mistake: "Comparing treatments without understanding the goal",
      why: "Different treatments may serve different purposes.",
    },
    {
      mistake: "Ignoring quality of life",
      why: "Your priorities are part of the treatment decision.",
    },
  ],

  scenarioTitle: "Example: Comparing two possible treatment approaches",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person with lung cancer receives two possible treatment approaches.",
    "Instead of asking “Which treatment is the best?”, they ask:",
  ],
  scenarioFocus: [
    "What is the goal of each option?",
    "Why is each approach recommended?",
    "What benefits and trade-offs should I understand?",
    "Which option fits my priorities?",
  ],
  scenarioClose:
    "By comparing the reasoning behind each option, they are better prepared for a discussion with their care team.",

  doctorTitle: "Questions that help compare treatment options",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "What are my reasonable options right now?",
    "What is the goal of each option?",
    "What are the main trade-offs I should understand?",
    "What information is still missing before I decide?",
  ],
  doctorGroups: [
    {
      heading: "Before comparing",
      questions: [
        "Is my diagnosis, stage, and biomarker information complete for this decision?",
        "What are the reasonable options for my situation?",
        "What is each option trying to achieve?",
      ],
    },
    {
      heading: "Comparing options",
      questions: [
        "What benefit is expected from each approach?",
        "What are the main risks and side effects?",
        "What time, visits, and recovery burden should I expect?",
        "How does each option fit my priorities?",
      ],
    },
    {
      heading: "Before deciding",
      questions: [
        "What happens if we wait for more information?",
        "Would a second opinion help before locking a plan?",
        "What is the next step either way?",
      ],
    },
  ],

  nextStepTitle: "Your next step",
  nextStepLead: "Before choosing a treatment approach:",
  nextStepActions: [
    { label: "Confirm you understand your cancer information." },
    {
      label: "Ask:",
      examples: ["What are my reasonable options?"],
    },
    {
      label: "Compare each option by:",
      examples: [
        "Goal",
        "Expected benefit",
        "Trade-offs",
        "Impact on your life",
      ],
    },
    { label: "Prepare questions for your next medical discussion." },
  ],
  nextStepCtaLabel: "Review Biomarker Testing Decision",
  nextStepHref: BIOMARKER,
  nextStepCtaMeta: "Biomarker Testing Journey",
  nextStepSecondaryCtaLabel: "Explore Second Opinion Decision",
  nextStepSecondaryHref: SECOND_OPINION,
  nextStepSecondaryMeta: "Second Opinion Journey",

  relatedPathsTitle: "Related decisions",
  relatedPaths: [
    {
      title: "Wondering about surgery?",
      question: "Should Surgery Be Part of My Lung Cancer Treatment Plan?",
      cta: "Surgery decision",
      href: SURGERY,
    },
    {
      title: "Need to understand missing information?",
      question: "Do I Need Biomarker Testing Before Lung Cancer Treatment?",
      cta: "Biomarker testing",
      href: BIOMARKER,
    },
    {
      title: "Need more confidence?",
      question: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      cta: "Second opinion",
      href: SECOND_OPINION,
    },
  ],
};

/** Lung Cancer AI Entry #5 — Care Center & Expertise */
export const CARE_CENTER_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "Whether additional expertise may improve your care decision",
  exploring: "Care Center & Expertise Decision",
  subtitle:
    "Understand when another center, specialist team, or additional expertise may help your cancer decision.",
  relatedDecisions: [
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Clinical Trials", href: CARE_MAP },
    { label: "International Care Options", href: GLOBAL_CARE },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Care Center & Expertise", current: true },
  ],

  triggersTitle: "You may be considering another center if:",
  triggerGroups: [
    {
      heading: "Your diagnosis is complex",
      lead: "You want to understand:",
      items: [
        "Is my diagnosis complete?",
        "Does my situation require specialized expertise?",
        "Would another team provide useful insight?",
      ],
    },
    {
      heading: "You are facing an important treatment decision",
      lead: "You want to explore:",
      items: [
        "Whether other approaches exist",
        "How different specialists think about your case",
        "What trade-offs you should understand",
      ],
    },
    {
      heading: "Your cancer situation is uncommon",
      lead: "Examples:",
      items: [
        "Rare cancer characteristics",
        "Difficult treatment decisions",
        "Limited experience locally",
      ],
    },
    {
      heading: "You want access to specialized resources",
      lead: "Examples:",
      items: [
        "Multidisciplinary teams",
        "Clinical trials",
        "Specialized programs",
      ],
    },
  ],

  whyTitle:
    "The best cancer care is not only about finding the most famous center",
  whyLead: "After a lung cancer diagnosis, many patients wonder:",
  whyBody: [
    "“Should I stay with my current doctor?” or “Should I look for another center?”",
    "This is an important decision. However, the goal is not simply finding the biggest hospital or the most well-known doctor.",
    "The goal is finding the right expertise for your specific decision.",
  ],
  whyQuestions: [],
  whyDependsIntro: "The value of another center depends on:",
  whyDependsOn: [
    "Your cancer type",
    "Your cancer stage",
    "Treatment complexity",
    "Available expertise",
    "Your personal priorities",
  ],
  whyClose: [],

  goalFrameworkTitle:
    "A different center is valuable only if it helps answer an important question",
  goalFrameworkLead:
    "Before searching for another hospital or country, clarify your goal.",
  goalFrameworkBlocks: [
    {
      title: "Goal 1: Confirm my diagnosis",
      questionsIntro: "You may be looking for:",
      questions: [
        "Pathology review",
        "Confirmation of cancer type",
        "Clarification of stage",
      ],
    },
    {
      title: "Goal 2: Understand treatment choices",
      questionsIntro: "You may be looking for:",
      questions: [
        "Different treatment perspectives",
        "Alternative approaches",
        "Better understanding of trade-offs",
      ],
    },
    {
      title: "Goal 3: Find specialized expertise",
      questionsIntro: "You may be looking for:",
      questions: [
        "Doctors who frequently treat similar cases",
        "Multidisciplinary review",
        "Experience with complex situations",
      ],
    },
    {
      title: "Goal 4: Explore additional options",
      questionsIntro: "You may be looking for:",
      questions: [
        "Clinical trials",
        "Specialized programs",
        "New care pathways",
      ],
    },
  ],
  goalNotLabel: "The first question is not:",
  goalNotQuestion: "Where is the best hospital?",
  goalBetterLabel: "The better question is:",
  goalBetterQuestion: "What expertise do I need for my decision?",

  valueTitle: "Situations where another team may help",
  valueSituations: [
    {
      title: "Complex decisions",
      examples: [
        "Multiple reasonable treatment approaches",
        "Difficult risk-benefit decisions",
      ],
    },
    {
      title: "Rare or uncommon cases",
      examples: [
        "Less common cancer features",
        "Limited local experience",
      ],
    },
    {
      title: "Need for multiple specialists",
      examples: [
        "Surgery decisions",
        "Combined treatment approaches",
        "Complex care planning",
      ],
    },
    {
      title: "Exploring advanced options",
      examples: ["Clinical trials", "Specialized treatment programs"],
    },
  ],

  infoGapTitle: "The goal is better decisions, not simply a different location",
  infoGapKnownIntro:
    "A new center may provide valuable input. However, another center may not always change the recommendation. A useful evaluation is whether this center provides:",
  infoGapKnown: [
    "Relevant experience",
    "Clear explanation of options",
    "Strong reasoning behind recommendations",
    "Expertise that matches my situation",
  ],
  infoGapClose: [
    "The value comes from better decision support, not simply changing locations.",
  ],

  evaluateTitle: "Compare expertise, not only reputation",
  evaluateLead: "Use these questions when evaluating another cancer center.",
  evaluateBlocks: [
    {
      title: "1. Experience with similar cases",
      intro: "Ask:",
      items: [
        "Does this team regularly treat patients like me?",
        "Do they have experience with my cancer situation?",
      ],
    },
    {
      title: "2. Decision quality",
      intro: "Ask:",
      items: [
        "Do they explain why options are recommended?",
        "Do they discuss alternatives and trade-offs?",
      ],
    },
    {
      title: "3. Team expertise",
      intro: "Ask:",
      items: [
        "Are multiple specialists involved?",
        "Is my case reviewed from different perspectives?",
      ],
    },
    {
      title: "4. Practical fit",
      intro: "Consider:",
      items: [
        "Cost",
        "Travel",
        "Communication",
        "Follow-up coordination",
      ],
    },
  ],

  bridge: {
    title: "When looking beyond your country may provide value",
    body: [
      "Some patients explore international expertise when they are seeking experience with complex or uncommon cases, additional medical review, access to specialized programs, or different treatment resources.",
      "However, international care is not automatically the best option.",
      "Important questions: What specific advantage am I seeking? Could this change my decision? How would ongoing care be coordinated?",
    ],
    ctaLabel: "When is lung cancer care abroad worth considering?",
    ctaHref: GLOBAL_CARE,
  },

  mistakesTitle: "Common mistakes when choosing where to receive care",
  mistakes: [
    {
      mistake: "Choosing based only on reputation",
      why: "The most famous center may not always be the best match for your situation.",
    },
    {
      mistake:
        "Looking for a different answer instead of better understanding",
      why: "A useful opinion explains the reasoning behind decisions.",
    },
    {
      mistake: "Changing centers without a clear goal",
      why: "A different location does not automatically improve a decision.",
    },
    {
      mistake: "Ignoring follow-up care",
      why: "Cancer care often requires long-term coordination.",
    },
  ],

  doctorTitle: "Questions that can help evaluate another care option",
  doctorGroups: [
    {
      heading: "About expertise",
      questions: [
        "Does this team treat patients with my type of lung cancer?",
        "How much experience do they have with similar situations?",
      ],
    },
    {
      heading: "About decisions",
      questions: [
        "Would they approach my situation differently?",
        "What additional perspective could they provide?",
      ],
    },
    {
      heading: "About logistics",
      questions: [
        "How would care coordination work?",
        "What challenges should I consider?",
      ],
    },
  ],

  scenarioTitle: "Example: Deciding whether another center may help",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person with lung cancer receives a treatment recommendation locally.",
    "They wonder: “Should I look for another hospital?”",
    "Instead of starting with a search for the most famous center, they ask:",
  ],
  scenarioFocus: [
    "What decision am I trying to improve?",
    "What expertise am I looking for?",
    "Would another team provide meaningful additional information?",
  ],
  scenarioClose:
    "They compare options based on expertise, decision quality, and practical factors.",

  nextStepTitle: "Your next step",
  nextStepLead: "If you are considering another cancer center:",
  nextStepActions: [
    {
      label: "Identify what you want to improve.",
      examples: [
        "Confirm diagnosis",
        "Compare treatment options",
        "Find specialized expertise",
      ],
    },
    { label: "Prepare your medical information." },
    { label: "Evaluate centers based on expertise and fit." },
  ],
  nextStepCtaLabel: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
  nextStepHref: SECOND_OPINION,
  nextStepCtaMeta: "Second Opinion Journey",
  nextStepSecondaryCtaLabel: "How Should I Compare Lung Cancer Treatment Options?",
  nextStepSecondaryHref: TREATMENT_COMPARE,
  nextStepSecondaryMeta: "Treatment Comparison Journey",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Wondering if the plan fits real life?",
      question: "Can My Lung Cancer Treatment Plan Work With My Real Life?",
      cta: "Treatment Feasibility",
      href: COST_LOGISTICS,
    },
    {
      title: "Need more confidence?",
      question: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      cta: "Second Opinion Journey",
      href: SECOND_OPINION,
    },
    {
      title: "Comparing treatment choices?",
      question: "How Should I Compare Lung Cancer Treatment Options?",
      cta: "Treatment Comparison Journey",
      href: TREATMENT_COMPARE,
    },
  ],
};

/** Lung Cancer AI Entry #6 — Stage IV / Advanced */
export const STAGE_IV_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "How to make treatment decisions in advanced lung cancer",
  exploring: "Stage IV Lung Cancer Decision",
  subtitle:
    "Understand your goals, options, and the decisions that matter most when facing advanced lung cancer.",
  relatedDecisions: [
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Clinical Trials", href: CLINICAL_TRIAL },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Quality of Life", href: CARE_MAP },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: NEW_DIAGNOSIS },
    { label: "Stage IV Decision", current: true },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
  ],

  triggersTitle: "You may be facing an advanced lung cancer decision if:",
  triggerGroups: [
    {
      heading: "You were recently diagnosed with Stage IV lung cancer",
      lead: "You may be wondering:",
      items: [
        "What happens next?",
        "What information do I need?",
        "How do I begin making decisions?",
      ],
    },
    {
      heading: "You received a treatment recommendation",
      lead: "You may want to understand:",
      items: [
        "Why this option was recommended",
        "What alternatives exist",
        "What trade-offs should I consider",
      ],
    },
    {
      heading: "Your current treatment is changing",
      lead: "You may be asking:",
      items: [
        "What happens if treatment stops working?",
        "Are there other options to discuss?",
        "Should I seek another opinion?",
      ],
    },
    {
      heading: "You are thinking about your priorities",
      lead: "You may be considering:",
      items: [
        "How treatment affects daily life",
        "What outcomes matter most",
        "How to balance treatment and quality of life",
      ],
    },
  ],

  whyTitle:
    "Stage IV lung cancer decisions are about choosing a path, not choosing a single answer",
  whyLead: "A Stage IV diagnosis can bring a lot of uncertainty.",
  whyQuestions: [],
  whyNotLabel: "Many people immediately ask:",
  whyNotQuestion: "What treatment should I choose?",
  whyBetterLabel: "But the deeper question is:",
  whyBetterQuestion:
    "How do I choose the approach that makes sense for my situation?",
  whyDependsIntro: "Stage IV decisions often involve balancing:",
  whyDependsOn: [
    "Cancer control",
    "Treatment burden",
    "Daily life",
    "Personal goals",
    "Future options",
  ],
  whyClose: [
    "The goal is not simply finding the most aggressive treatment.",
    "The goal is making a decision you understand and feel prepared for.",
  ],

  goalFrameworkTitle: "Stage IV decisions begin with your goals",
  goalFrameworkLead:
    "Different patients may have different priorities. Understanding your goals can help guide conversations.",
  goalFrameworkBlocks: [
    {
      title: "Goal: Control the cancer",
      questionsIntro: "Questions:",
      questions: [
        "What treatment approaches may help manage the cancer?",
        "How will doctors evaluate whether treatment is working?",
      ],
    },
    {
      title: "Goal: Maintain quality of life",
      questionsIntro: "Questions:",
      questions: [
        "How might treatment affect daily activities?",
        "What side effects should I prepare for?",
      ],
    },
    {
      title: "Goal: Preserve future options",
      questionsIntro: "Questions:",
      questions: [
        "What information should be collected now?",
        "How might today's decision affect future choices?",
      ],
    },
  ],
  goalFrameworkClose:
    "There is no single goal that applies to every patient. The important step is understanding what matters most to you.",

  infoGapTitle:
    "Before choosing a treatment path, make sure the important information is available",
  infoGapKnownIntro: "Consider whether you understand:",
  infoGapKnown: [
    "Your exact lung cancer type",
    "Your cancer stage and disease characteristics",
    "Biomarker testing results",
    "Current treatment options",
    "Expected benefits and trade-offs",
    "Your personal priorities",
  ],
  infoGapClose: [
    "If important information is missing, ask: “Could additional information change the options we should consider?”",
  ],

  evaluateTitle: "How to compare Stage IV treatment options",
  evaluateLead: "Use the same questions for every option.",
  evaluateBlocks: [
    {
      title: "1. What is the goal?",
      intro: "Ask:",
      items: [
        "What is this option trying to achieve?",
        "How will success be measured?",
      ],
    },
    {
      title: "2. What benefit is expected?",
      intro: "Ask:",
      items: [
        "What improvement are doctors hoping for?",
        "What information supports this expectation?",
      ],
    },
    {
      title: "3. What are the trade-offs?",
      intro: "Ask:",
      items: [
        "What risks or side effects should I understand?",
        "How could this affect my daily life?",
      ],
    },
    {
      title: "4. What does this option require?",
      intro: "Ask:",
      items: [
        "How often is treatment needed?",
        "What monitoring is involved?",
      ],
    },
    {
      title: "5. Does this fit my priorities?",
      intro: "Ask:",
      items: [
        "Does this approach match what matters most to me?",
        "Do I understand the balance between benefits and burden?",
      ],
    },
  ],

  bridges: [
    {
      title: "Some treatment decisions depend on information about the cancer itself",
      body: [
        "For some patients, biomarker information may help doctors understand which treatment approaches should be considered.",
        "Useful questions: Has biomarker testing been completed? Could the results change my options? Should testing happen before choosing treatment?",
      ],
      ctaLabel:
        "Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment?",
      ctaHref: BIOMARKER,
    },
    {
      title: "Clinical trials may be one option to discuss",
      body: [
        "Some patients explore clinical trials when they want to understand additional possibilities.",
        "Questions to ask: Is a clinical trial appropriate for my situation? How would it compare with other options? What would participation involve?",
      ],
      ctaLabel: "Should I Consider a Clinical Trial for Lung Cancer?",
      ctaHref: CLINICAL_TRIAL,
    },
    {
      title: "When treatment is no longer working as expected",
      body: [
        "Stage IV decisions are not always one-time decisions. If treatment response, new information, side effects, or goals change, it may be time to reassess.",
        "Useful questions: What has changed? What options do I have now? How should we decide the next step?",
      ],
      ctaLabel:
        "What Are My Options If My Lung Cancer Treatment Is No Longer Working?",
      ctaHref: TREATMENT_PROGRESSION,
    },
  ],

  secondOpinionTitle: "Complex decisions often benefit from another perspective",
  secondOpinionLead: "A second opinion may be useful when:",
  secondOpinionWhen: [
    "The decision feels uncertain",
    "Several approaches seem possible",
    "You want to understand alternatives",
    "You want more confidence before deciding",
  ],
  secondOpinionClose:
    "A second opinion is not always about changing doctors. Sometimes it helps confirm that your decision is based on complete information.",
  secondOpinionCtaLabel:
    "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
  secondOpinionHref: SECOND_OPINION,

  progressionTitle: "Stage IV decisions are not always one-time decisions",
  progressionLead: "Your situation may change because of:",
  progressionFactors: [
    "Treatment response",
    "New test information",
    "Side effects",
    "Changes in personal goals",
  ],
  progressionCloseIntro: "When circumstances change, it may be time to revisit:",
  progressionClose: [
    "Available options",
    "Treatment goals",
    "Support needed",
  ],

  mistakesTitle: "Common mistakes when making Stage IV treatment decisions",
  mistakes: [
    {
      mistake:
        "Thinking Stage IV means there are no meaningful choices",
      why: "Advanced lung cancer decisions often involve multiple paths and trade-offs.",
    },
    {
      mistake: "Choosing treatment before understanding the goal",
      why: "A treatment decision should be connected to what you are trying to achieve.",
    },
    {
      mistake: "Focusing only on treatment effectiveness",
      why: "Daily life, side effects, and personal priorities also matter.",
    },
    {
      mistake: "Making decisions without complete information",
      why: "Testing, expert opinions, and updated information may influence choices.",
    },
  ],

  scenarioTitle:
    "Example: Choosing a treatment path after Stage IV diagnosis",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person receives a Stage IV lung cancer diagnosis and is presented with treatment options.",
    "Instead of asking “Which treatment is strongest?”, they ask:",
  ],
  scenarioFocus: [
    "What is the goal of each option?",
    "What information supports each recommendation?",
    "What are the trade-offs?",
    "How does this fit the life I want to maintain?",
  ],
  scenarioClose:
    "By understanding the reasoning behind each option, they are better prepared to discuss decisions with their care team.",

  nextStepTitle: "Your next step",
  nextStepLead:
    "If you are making decisions after a Stage IV lung cancer diagnosis:",
  nextStepActions: [
    { label: "Understand your cancer information." },
    { label: "Clarify your treatment goals." },
    {
      label: "Compare options based on:",
      examples: ["Expected benefit", "Trade-offs", "Impact on your life"],
    },
    {
      label: "Ask whether additional expertise or information could help.",
    },
  ],
  nextStepCtaLabel: "How Should I Compare Lung Cancer Treatment Options?",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison Journey",
  nextStepSecondaryCtaLabel:
    "Do I Need Biomarker Testing Before Lung Cancer Treatment?",
  nextStepSecondaryHref: BIOMARKER,
  nextStepSecondaryMeta: "Biomarker Testing Journey",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Want goals and daily life in the decision?",
      question:
        "How Should Quality of Life Factor Into My Lung Cancer Decisions?",
      cta: "Personal Goals Decision",
      href: QUALITY_OF_LIFE,
    },
    {
      title: "Need to compare treatments?",
      question: "How Should I Compare Lung Cancer Treatment Options?",
      cta: "Treatment Comparison Journey",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Need more confidence?",
      question: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      cta: "Second Opinion Journey",
      href: SECOND_OPINION,
    },
  ],
};

/** Lung Cancer AI Entry #7 — Clinical Trial */
export const CLINICAL_TRIAL_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment:
    "Whether a clinical trial should be part of your treatment discussion",
  exploring: "Clinical Trial Decision",
  subtitle:
    "Understand when clinical trials may be worth discussing and how to compare them with other treatment options.",
  relatedDecisions: [
    { label: "Stage IV Lung Cancer", href: STAGE_IV },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Care Center Selection", href: CARE_CENTER },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Stage IV Decision", href: STAGE_IV },
    { label: "Clinical Trial", current: true },
  ],

  triggersTitle: "You may be considering a clinical trial if:",
  triggerGroups: [
    {
      heading: "You were recently diagnosed",
      lead: "You may wonder:",
      items: [
        "Should I ask about trials before starting treatment?",
        "Are there studies related to my cancer characteristics?",
      ],
    },
    {
      heading: "You are comparing treatment options",
      lead: "You may want to understand:",
      items: [
        "Should trials be considered alongside standard treatments?",
        "How do they compare with other choices?",
      ],
    },
    {
      heading: "Your current treatment is changing",
      lead: "You may ask:",
      items: [
        "Are there additional options?",
        "Should I explore trials before making my next decision?",
      ],
    },
    {
      heading: "Your cancer situation is complex",
      lead: "Examples:",
      items: [
        "Advanced disease",
        "Rare cancer characteristics",
        "Multiple possible approaches",
      ],
    },
  ],

  whyTitle: "A clinical trial is a decision option, not a last resort",
  whyLead: "Many patients hear “clinical trial” and think:",
  whyBody: [
    "“Does this mean my regular treatment has failed?” or “Am I choosing something uncertain instead of proven care?”",
    "These concerns are understandable.",
    "However, clinical trials can be considered at different points in the cancer journey.",
  ],
  whyQuestions: [],
  whyNotLabel: "The important decision is not:",
  whyNotQuestion: "Should I join a trial?",
  whyBetterLabel: "The better question is:",
  whyBetterQuestion: "Could a clinical trial be a reasonable option for my situation?",
  whyClose: [],

  goalFrameworkTitle:
    "Clinical trials may be discussed at different decision points",
  goalFrameworkLead:
    "The right timing depends on your situation. There is value in understanding options before you urgently need them.",
  goalFrameworkBlocks: [
    {
      title: "Before starting treatment",
      questionsIntro: "Questions:",
      questions: [
        "Are there relevant trials for my situation?",
        "Would knowing about them change my decision?",
      ],
    },
    {
      title: "During treatment",
      questionsIntro: "Questions:",
      questions: [
        "Is my current treatment meeting its goals?",
        "Are there other approaches worth discussing?",
      ],
    },
    {
      title: "When treatment options change",
      questionsIntro: "Questions:",
      questions: [
        "What options exist now?",
        "Should clinical trials be part of the next discussion?",
      ],
    },
  ],

  affectTitle: "A clinical trial studies a specific question",
  affectBlocks: [
    {
      title: "New treatment approaches",
      body: "Researchers may study new therapies or combinations.",
    },
    {
      title: "Different treatment strategies",
      body: "Some studies explore new ways to use existing treatments.",
    },
    {
      title: "New ways to understand or manage cancer",
      body: "Some studies focus on diagnosis, monitoring, or supportive care.",
    },
  ],
  affectClose:
    "The key question is: “What is this trial trying to learn, and how does it relate to my decision?”",

  evaluateTitle:
    "Evaluate a clinical trial using the same framework as any treatment option",
  evaluateLead:
    "How to compare a clinical trial with other options.",
  evaluateBlocks: [
    {
      title: "1. What decision is this trial trying to improve?",
      intro: "Ask:",
      items: [
        "What problem is this study addressing?",
        "Why is this option being considered?",
      ],
    },
    {
      title: "2. What is known and unknown?",
      intro: "Ask:",
      items: [
        "What evidence already exists?",
        "What is still uncertain?",
      ],
    },
    {
      title: "3. What are the possible benefits?",
      intro: "Ask:",
      items: [
        "What potential benefit are researchers hoping for?",
        "How realistic is that benefit for my situation?",
      ],
    },
    {
      title: "4. What are the commitments and risks?",
      intro: "Ask:",
      items: [
        "What visits are required?",
        "What monitoring is involved?",
        "What side effects or uncertainties exist?",
      ],
    },
    {
      title: "5. How does it compare with alternatives?",
      intro: "Ask:",
      items: [
        "What other options do I have?",
        "How does this choice fit my goals?",
      ],
    },
  ],

  faqTitle: "Common questions patients ask",
  faqItems: [
    {
      question: "Are clinical trials only for people with no options?",
      answer: [
        "No. Clinical trials may be discussed at different points in the cancer journey.",
        "The important question is whether a specific trial matches your situation.",
      ],
    },
    {
      question:
        "Does joining a clinical trial mean I receive better treatment?",
      answer: [
        "Not necessarily. A clinical trial provides access to an approach being studied.",
        "It should be evaluated by understanding potential benefits, risks, and alternatives.",
      ],
    },
    {
      question: "Should I wait until treatment stops working?",
      answer: [
        "Not always. Some trials may be considered earlier depending on your situation.",
        "Discussing options early may help you understand what choices exist.",
      ],
    },
  ],

  infoGapTitle: "Better decisions require the right information",
  infoGapKnownIntro: "Useful information may include:",
  infoGapKnown: [
    "Cancer type",
    "Cancer stage",
    "Biomarker results",
    "Previous treatments",
    "Current treatment goals",
    "Medical records",
  ],
  infoGapClose: [
    "Having complete information helps determine whether a trial is relevant.",
  ],

  journeyLinksTitle: "Clinical trial decisions connect with:",
  journeyLinksLead:
    "Trials are rarely a standalone decision — they sit inside your broader lung cancer journey.",
  journeyLinks: [
    {
      title: "Biomarker Testing",
      body: "Some trials may require specific cancer information.",
      href: BIOMARKER,
      cta: "Explore Biomarker Testing Journey",
    },
    {
      title: "Treatment Comparison",
      body: "Trials should be compared with other available options.",
      href: TREATMENT_COMPARE,
      cta: "Explore Treatment Comparison Journey",
    },
    {
      title: "Second Opinion",
      body: "Another specialist may help review whether trials are relevant.",
      href: SECOND_OPINION,
      cta: "Explore Second Opinion Journey",
    },
    {
      title: "Care Center Selection",
      body: "Some centers have access to research programs.",
      href: CARE_CENTER,
      cta: "Explore Care Center Decision",
    },
  ],

  mistakesTitle: "Common mistakes when thinking about clinical trials",
  mistakes: [
    {
      mistake: "Thinking clinical trials are only a last option",
      why: "Some patients discuss trials before other decisions are finalized.",
    },
    {
      mistake: "Assuming a clinical trial is automatically better",
      why: "A trial should be compared with available alternatives.",
    },
    {
      mistake: "Joining without understanding the purpose",
      why: "Every trial has a specific research question.",
    },
    {
      mistake: "Ignoring practical requirements",
      why: "Travel, visits, monitoring, and time commitments affect the decision.",
    },
  ],

  scenarioTitle: "Example: Deciding whether to explore a clinical trial",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person with lung cancer learns about a possible clinical trial.",
    "Instead of immediately asking “Should I join?”, they ask:",
  ],
  scenarioFocus: [
    "What question is this trial trying to answer?",
    "How does it compare with my current options?",
    "What are the possible benefits and uncertainties?",
    "Does it fit my goals?",
  ],
  scenarioClose:
    "The trial becomes one option to evaluate, not a decision made without comparison.",

  nextStepTitle: "Your next step",
  nextStepLead: "If you are considering a clinical trial:",
  nextStepActions: [
    { label: "Understand your current treatment options." },
    {
      label: "Ask:",
      examples: ["Are there clinical trials relevant to my situation?"],
    },
    {
      label: "Compare:",
      examples: [
        "Purpose",
        "Evidence",
        "Potential benefits",
        "Risks",
        "Practical requirements",
      ],
    },
    { label: "Discuss whether the option fits your goals." },
  ],
  nextStepCtaLabel: "How Should I Compare Lung Cancer Treatment Options?",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison Journey",
  nextStepSecondaryCtaLabel:
    "Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment?",
  nextStepSecondaryHref: BIOMARKER,
  nextStepSecondaryMeta: "Biomarker Testing Journey",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Need to compare treatment choices?",
      question: "How Should I Compare Lung Cancer Treatment Options?",
      cta: "Treatment Comparison Journey",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Need more cancer information?",
      question: "Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment?",
      cta: "Biomarker Testing Journey",
      href: BIOMARKER,
    },
    {
      title: "Need another perspective?",
      question: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      cta: "Second Opinion Journey",
      href: SECOND_OPINION,
    },
  ],
};

/** Lung Cancer AI Entry #8 — Recurrence */
export const RECURRENCE_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "How to make decisions after recurrence",
  exploring: "Recurrence Decision",
  subtitle:
    "Understand how recurrence changes your decisions, what information matters now, and how to choose your next step.",
  relatedDecisions: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Clinical Trial", href: CLINICAL_TRIAL },
    { label: "Care Center Selection", href: CARE_CENTER },
    { label: "Quality of Life", href: CARE_MAP },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Recurrence Decision", current: true },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  triggersTitle: "You may be facing a recurrence decision if:",
  triggerGroups: [
    {
      heading: "Your scans show the cancer has returned",
      lead: "You may be wondering:",
      items: [
        "What does this mean?",
        "Is my previous treatment still relevant?",
        "What happens next?",
      ],
    },
    {
      heading: "Your doctor recommends a new treatment plan",
      lead: "You may want to understand:",
      items: [
        "Why has the recommendation changed?",
        "What alternatives exist?",
        "How should I compare options?",
      ],
    },
    {
      heading: "Your cancer returned after a period of control",
      lead: "You may be asking:",
      items: [
        "Does the timing of recurrence matter?",
        "Does this change my available choices?",
      ],
    },
    {
      heading: "You want more confidence before deciding",
      lead: "You may be considering:",
      items: [
        "A second opinion",
        "Another specialist",
        "Additional information",
      ],
    },
  ],

  whyTitle:
    "Recurrence is a new decision point, not simply a return to the old plan",
  whyLead: "Hearing “Your cancer has come back” can create immediate fear.",
  whyBody: [
    "Many patients think: “Does this mean treatment failed?” or “Are my options running out?”",
    "Recurrence does not mean the decision process stops. It means the situation needs to be understood again.",
  ],
  whyQuestions: [
    "What has changed?",
    "What information do we have now?",
    "What choices should be considered?",
    "What matters most at this stage?",
  ],
  whyClose: [],

  goalFrameworkTitle: "First understand: What has changed?",
  goalFrameworkLead:
    "Recurrence decisions begin with reassessment. Before choosing a next step, understand the current situation.",
  goalFrameworkBlocks: [
    {
      title: "Where has the cancer returned?",
      questionsIntro: "Questions:",
      questions: [
        "Where is the recurrence located?",
        "Is the situation different from the original diagnosis?",
      ],
    },
    {
      title: "When did recurrence happen?",
      questionsIntro: "Questions:",
      questions: [
        "How long after treatment did it occur?",
        "Does timing affect the discussion?",
      ],
    },
    {
      title: "What treatments have already been used?",
      questionsIntro: "Questions:",
      questions: [
        "What approaches were tried?",
        "What was the response?",
        "What limitations were experienced?",
      ],
    },
    {
      title: "What new information is available?",
      questionsIntro: "Questions:",
      questions: [
        "Is additional testing needed?",
        "Has anything changed about the cancer?",
      ],
    },
  ],
  goalFrameworkClose:
    "The next decision should be based on the current situation, not only the original diagnosis.",

  infoGapTitle:
    "Make sure your next decision is based on updated information",
  infoGapKnownIntro: "Before choosing a path, consider whether you understand:",
  infoGapKnown: [
    "Current cancer situation",
    "Previous treatments",
    "Treatment response",
    "Biomarker information",
    "Available options",
    "Your current goals",
  ],
  infoGapClose: [
    "A useful question: “Do we have enough information to compare my options?”",
  ],

  evaluateTitle: "How to compare options after recurrence",
  evaluateLead: "Use the same questions for every possible option.",
  evaluateBlocks: [
    {
      title: "1. What is the goal?",
      intro: "Ask:",
      items: [
        "What is this option trying to achieve?",
        "How does it fit my current priorities?",
      ],
    },
    {
      title: "2. Why is this option being considered?",
      intro: "Ask:",
      items: [
        "What information supports this approach?",
        "Why might it fit my situation?",
      ],
    },
    {
      title: "3. What are the benefits and trade-offs?",
      intro: "Ask:",
      items: [
        "What potential benefits should I understand?",
        "What risks or burdens should I consider?",
      ],
    },
    {
      title: "4. What does this mean for future choices?",
      intro: "Ask:",
      items: [
        "Could this affect future options?",
        "What decisions may come next?",
      ],
    },
    {
      title: "5. Does this fit my life?",
      intro: "Ask:",
      items: [
        "How might this affect daily life?",
        "What matters most to me now?",
      ],
    },
  ],

  faqTitle: "Common questions after recurrence",
  faqItems: [
    {
      question: "Does recurrence mean I need a completely different treatment?",
      answer: [
        "Sometimes the answer changes, sometimes it does not.",
        "After recurrence, doctors may consider what treatment was used before, how long the cancer was controlled, what information is available now, and what goals matter at this stage.",
        "The next step is not determined by recurrence alone.",
        "The important question is: “What has changed, and how should that change our decision?”",
      ],
    },
  ],

  bridges: [
    {
      title: "Should I get a second opinion after recurrence?",
      body: [
        "Complex decisions often benefit from another perspective. A second opinion may help when the situation feels uncertain, multiple options are possible, you want to understand alternatives, or you want more confidence before deciding.",
        "A second opinion does not always change the recommendation. Sometimes it confirms that the decision is based on complete information.",
      ],
      ctaLabel:
        "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      ctaHref: SECOND_OPINION,
    },
    {
      title: "Should I consider a clinical trial after recurrence?",
      body: [
        "Clinical trials may become part of the discussion. Some patients explore clinical trials after recurrence because they want to understand additional options.",
        "Questions: Are there trials relevant to my situation? How would they compare with other choices? What are the possible benefits and uncertainties?",
      ],
      ctaLabel: "Should I Consider a Clinical Trial for Lung Cancer?",
      ctaHref: CLINICAL_TRIAL,
    },
  ],

  mistakesTitle: "Common mistakes after lung cancer recurrence",
  mistakes: [
    {
      mistake:
        "Thinking recurrence means there are no meaningful choices",
      why: "Recurrence creates a new decision point.",
    },
    {
      mistake:
        "Assuming the previous treatment should automatically be repeated",
      why: "Your situation may have changed.",
    },
    {
      mistake: "Making decisions without updated information",
      why: "New information may influence available choices.",
    },
    {
      mistake:
        "Focusing only on treatment and ignoring personal goals",
      why: "Your priorities remain part of the decision.",
    },
  ],

  doctorTitle: "Questions that can help after recurrence",
  doctorGroups: [
    {
      heading: "About what changed",
      questions: [
        "What is different compared with my original diagnosis?",
        "What information do we know now?",
      ],
    },
    {
      heading: "About options",
      questions: [
        "What are my reasonable options?",
        "Why are these options being considered?",
      ],
    },
    {
      heading: "About decisions",
      questions: [
        "What are the benefits and trade-offs of each option?",
        "What would you consider if this were your decision?",
      ],
    },
    {
      heading: "About the future",
      questions: [
        "How might this decision affect future options?",
      ],
    },
  ],

  scenarioTitle: "Example: Making a decision after recurrence",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person who previously completed lung cancer treatment learns that the cancer has returned.",
    "Their first thought is: “Does this mean there are no more options?”",
    "Instead of immediately choosing the next step, they ask:",
  ],
  scenarioFocus: [
    "What has changed?",
    "What information do we have now?",
    "What options should be compared?",
    "What matters most at this stage?",
  ],
  scenarioClose:
    "The focus shifts from reacting to recurrence to making an informed next decision.",

  nextStepTitle: "Your next step",
  nextStepLead: "If lung cancer has returned:",
  nextStepActions: [
    { label: "Understand what has changed." },
    { label: "Confirm what information is available." },
    {
      label: "Compare options based on:",
      examples: [
        "Goals",
        "Expected benefits",
        "Trade-offs",
        "Impact on your life",
      ],
    },
    {
      label:
        "Consider whether additional expertise or information would help.",
    },
  ],
  nextStepCtaLabel: "How Should I Compare Lung Cancer Treatment Options?",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison Journey",
  nextStepSecondaryCtaLabel:
    "Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment?",
  nextStepSecondaryHref: BIOMARKER,
  nextStepSecondaryMeta: "Biomarker Testing Journey",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Need to compare current options?",
      question: "How Should I Compare Lung Cancer Treatment Options?",
      cta: "Treatment Comparison Journey",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Need more information?",
      question: "Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment?",
      cta: "Biomarker Testing Journey",
      href: BIOMARKER,
    },
    {
      title: "Need another perspective?",
      question: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      cta: "Second Opinion Journey",
      href: SECOND_OPINION,
    },
  ],
};

/** Lung Cancer AI Entry #9 — Treatment Progression */
export const TREATMENT_PROGRESSION_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment:
    "What to do when the current treatment is no longer achieving its goal",
  exploring: "Treatment Progression Decision",
  subtitle:
    "Understand what changed, what information matters now, and how to make your next treatment decision.",
  relatedDecisions: [
    { label: "Recurrence", href: RECURRENCE },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Clinical Trial", href: CLINICAL_TRIAL },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Care Center Selection", href: CARE_CENTER },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Treatment Progression", current: true },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  triggersTitle: "You may be facing a treatment progression decision if:",
  triggerGroups: [
    {
      heading: "Your scans show the cancer is growing",
      lead: "You may wonder:",
      items: [
        "What does this change mean?",
        "Does my current treatment need to change?",
        "What information should we review?",
      ],
    },
    {
      heading: "Your doctor recommends changing treatment",
      lead: "You may want to understand:",
      items: [
        "Why is a different approach being considered?",
        "What alternatives exist?",
        "How should I compare them?",
      ],
    },
    {
      heading: "Your treatment is becoming harder to continue",
      lead: "You may be considering:",
      items: [
        "Side effects",
        "Daily life impact",
        "Whether the current balance still makes sense",
      ],
    },
    {
      heading: "You want to understand future options",
      lead: "You may be exploring:",
      items: [
        "Additional treatments",
        "Clinical trials",
        "Another expert opinion",
      ],
    },
  ],

  whyTitle:
    "A treatment change is a new decision point, not the end of the journey",
  whyLead:
    "Hearing “Your treatment is no longer working” can feel overwhelming.",
  whyBody: [
    "Many patients immediately think: “Does this mean there is nothing else to try?” “Was the previous decision wrong?” “What happens next?”",
    "But cancer treatment decisions often change over time.",
  ],
  whyQuestions: [],
  whyDependsIntro: "A treatment may need to be reconsidered because:",
  whyDependsOn: [
    "The cancer has changed",
    "The treatment is no longer providing the expected benefit",
    "The balance between benefit and burden has changed",
    "New information has become available",
  ],
  whyClose: [
    "The goal is not simply finding another treatment.",
    "The goal is making the best decision based on the situation today.",
  ],

  goalFrameworkTitle: "First understand: What has changed?",
  goalFrameworkLead:
    "The next decision starts with understanding the reason for change. Before choosing a new direction, clarify:",
  goalFrameworkBlocks: [
    {
      title: "Has the cancer changed?",
      questionsIntro: "Questions:",
      questions: [
        "Is the cancer growing?",
        "Has the pattern of disease changed?",
      ],
    },
    {
      title: "Is the current treatment still achieving its goal?",
      questionsIntro: "Questions:",
      questions: [
        "What was this treatment intended to do?",
        "Is it still achieving that goal?",
      ],
    },
    {
      title: "Has new information become available?",
      questionsIntro: "Questions:",
      questions: [
        "Are additional tests needed?",
        "Do we understand the cancer characteristics today?",
      ],
    },
    {
      title: "Have your goals changed?",
      questionsIntro: "Questions:",
      questions: [
        "What matters most to me now?",
        "How do I balance treatment and daily life?",
      ],
    },
  ],

  affectTitle: "“Treatment not working” can mean different things",
  affectBlocks: [
    {
      title: "The cancer is growing",
      body: "The current approach may no longer be controlling the cancer as expected.",
    },
    {
      title: "The benefit is limited",
      body: "The treatment may not be providing enough benefit compared with its burden.",
    },
    {
      title: "New information changes the decision",
      body: "Additional testing or expert review may reveal new options to consider.",
    },
  ],
  affectClose:
    "The important question is: “What exactly has changed, and what does that mean for my choices?”",

  evaluateTitle: "How to compare your next options",
  evaluateLead:
    "Use a decision framework, not a simple “best treatment” question.",
  evaluateBlocks: [
    {
      title: "1. What is the goal?",
      intro: "Ask:",
      items: [
        "What are we trying to achieve?",
        "Has the treatment goal changed?",
      ],
    },
    {
      title: "2. Why is this option being considered?",
      intro: "Ask:",
      items: [
        "What information supports this approach?",
        "Why might it fit my situation?",
      ],
    },
    {
      title: "3. What are the possible benefits?",
      intro: "Ask:",
      items: [
        "What improvement are we hoping for?",
        "How will we know if it is helping?",
      ],
    },
    {
      title: "4. What are the trade-offs?",
      intro: "Ask:",
      items: [
        "What side effects or burdens should I understand?",
        "How might this affect my daily life?",
      ],
    },
    {
      title: "5. What future choices remain?",
      intro: "Ask:",
      items: [
        "How might this decision affect later options?",
        "What should we consider next?",
      ],
    },
  ],

  bridges: [
    {
      title: "Should I get another opinion before changing treatment?",
      body: [
        "A treatment change is often an important time for another perspective. A second opinion may help when the decision feels complex, several options are possible, you want to understand alternatives, or you want more confidence before changing direction.",
        "A second opinion does not always mean changing doctors. Sometimes it confirms that the next step is based on complete information.",
      ],
      ctaLabel:
        "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      ctaHref: SECOND_OPINION,
    },
    {
      title: "Could additional testing change my options?",
      body: [
        "New information may influence future decisions. Depending on your situation, your care team may discuss whether additional information could help.",
        "Questions: Do we have the latest information about my cancer? Could additional testing affect available options? Has anything changed since my original treatment decision?",
      ],
      ctaLabel:
        "Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment?",
      ctaHref: BIOMARKER,
    },
    {
      title: "Should I consider a clinical trial?",
      body: [
        "Clinical trials may be one option to discuss. When treatment options are changing, some patients explore clinical trials.",
        "Questions: Are there trials relevant to my situation? How would they compare with other options? What uncertainties should I understand?",
      ],
      ctaLabel: "Should I Consider a Clinical Trial for Lung Cancer?",
      ctaHref: CLINICAL_TRIAL,
    },
  ],

  mistakesTitle: "Common mistakes when treatment changes",
  mistakes: [
    {
      mistake:
        "Thinking the previous treatment decision was wrong",
      why: "A treatment can be appropriate even if the cancer later changes.",
    },
    {
      mistake:
        "Assuming treatment change means there are no options",
      why: "A change creates a new decision point.",
    },
    {
      mistake: "Focusing only on the next treatment",
      why: "The goal and trade-offs are also important.",
    },
    {
      mistake: "Making decisions without updated information",
      why: "New information may affect available choices.",
    },
  ],

  doctorTitle: "Questions that can help when treatment changes",
  doctorGroups: [
    {
      heading: "About what changed",
      questions: [
        "What tells us that the current treatment is no longer achieving its goal?",
        "What information are we using?",
      ],
    },
    {
      heading: "About options",
      questions: [
        "What are my reasonable next options?",
        "Why are these options being considered?",
      ],
    },
    {
      heading: "About trade-offs",
      questions: [
        "What are the possible benefits and burdens?",
        "How might each choice affect my daily life?",
      ],
    },
    {
      heading: "About the future",
      questions: [
        "What decisions may come after this?",
        "How does this choice affect future options?",
      ],
    },
  ],

  scenarioTitle: "Example: Deciding when treatment changes",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person with lung cancer has been receiving treatment.",
    "At a follow-up visit, tests show that the cancer is no longer responding as expected.",
    "Their first thought is: “Does this mean there is nothing else I can do?”",
    "Instead of immediately choosing another treatment, they ask:",
  ],
  scenarioFocus: [
    "What has changed?",
    "What information do we have now?",
    "What options should we compare?",
    "What matters most at this stage?",
  ],
  scenarioClose:
    "The focus shifts from reacting to change to making an informed next decision.",

  nextStepTitle: "Your next step",
  nextStepLead:
    "If your lung cancer treatment is no longer working as expected:",
  nextStepActions: [
    { label: "Understand what has changed." },
    { label: "Confirm whether additional information is needed." },
    {
      label: "Compare options based on:",
      examples: [
        "Goals",
        "Benefits",
        "Trade-offs",
        "Impact on your life",
      ],
    },
    {
      label:
        "Consider whether another perspective or specialized expertise would help.",
    },
  ],
  nextStepCtaLabel: "What Are My Options If Lung Cancer Comes Back?",
  nextStepHref: RECURRENCE,
  nextStepCtaMeta: "Recurrence Decision",
  nextStepSecondaryCtaLabel:
    "How Should I Compare Lung Cancer Treatment Options?",
  nextStepSecondaryHref: TREATMENT_COMPARE,
  nextStepSecondaryMeta: "Treatment Comparison",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Cancer has returned?",
      question: "What Are My Options If Lung Cancer Comes Back?",
      cta: "Recurrence Decision",
      href: RECURRENCE,
    },
    {
      title: "Need to compare treatments?",
      question: "How Should I Compare Lung Cancer Treatment Options?",
      cta: "Treatment Comparison",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Need more confidence?",
      question: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      cta: "Second Opinion",
      href: SECOND_OPINION,
    },
  ],
};

/** Lung Cancer Decision Module #10 — Surgery (supporting) */
export const SURGERY_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "Whether surgery should be part of your treatment plan",
  exploring: "Surgery Decision",
  subtitle:
    "Surgery can be an important option for some people with lung cancer — when it can be safely done and may provide meaningful benefit. The goal is the approach that best matches your cancer, health, and treatment goals.",
  relatedDecisions: [
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Clinical Trials", href: CLINICAL_TRIAL },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Surgery Decision", current: true },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  triggersTitle: "You may be thinking about surgery if:",
  triggerGroups: [
    {
      heading: "Your doctor mentioned surgery",
      lead: "You may want to understand:",
      items: [
        "Why is surgery being considered?",
        "What information supports this recommendation?",
      ],
    },
    {
      heading: "You are deciding between approaches",
      lead: "You may ask:",
      items: [
        "Surgery or another approach?",
        "Treatment before surgery, after, or instead?",
      ],
    },
    {
      heading: "You want to know whether surgery could help",
      lead: "You may wonder:",
      items: [
        "What benefit would surgery aim for?",
        "What would recovery mean for my life?",
      ],
    },
    {
      heading: "You are preparing for a major decision",
      lead: "You may be considering:",
      items: [
        "A second opinion before surgery",
        "Whether the care team has the right experience",
      ],
    },
  ],

  whyTitle: "Why are my doctors talking about surgery?",
  whyLead:
    "Surgery is considered when your care team believes removing the cancer may offer meaningful benefit.",
  whyBody: [
    "Before recommending surgery, doctors usually look at whether the cancer is located in a way that allows removal, whether surgery can achieve the intended treatment goal, and whether your body can safely handle the procedure.",
    "Being offered surgery does not automatically mean surgery is the only option. It means your team believes it is an option worth discussing.",
  ],
  whyQuestions: [],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Can the tumor be removed?",
  whyBetterLabel: "The more important question is:",
  whyBetterQuestion:
    "Will surgery provide meaningful benefit in my overall treatment plan?",
  whyClose: [
    "The goal is not simply to remove a tumor. The goal is to choose the approach that best matches your cancer, your health, and your treatment goals.",
  ],

  doesNotDecideTitle: "Is surgery the best choice for my situation?",
  doesNotDecideLead:
    "Surgery is one possible treatment approach. Doctors compare it with other options based on cancer stage, tumor characteristics, biomarker information when relevant, your overall health, and your personal goals.",
  doesNotDecideItems: [
    "For some people, surgery is the main treatment",
    "For others, another treatment may happen before surgery",
    "Some people need additional treatment after surgery",
    "For some people, a different approach is discussed instead of surgery",
  ],
  doesNotDecideNotes: [
    "The decision is not “surgery or no surgery?” It is: which treatment approach gives the best balance of benefit and risk for my situation?",
  ],
  doesNotDecideClose:
    "Open the cards beside this step for before-surgery treatment, biomarkers, and when surgery may not be the best option.",

  costTitle: "Cost and insurance — what to ask before surgery",
  costLead:
    "Costs vary depending on the hospital, procedure, insurance coverage, and recovery needs. Use questions instead of guessing a number.",
  costItems: [
    "What costs should I expect for the surgery and hospital stay?",
    "What is usually covered, and what might we pay out of pocket?",
    "Are financial support resources available if cost is a barrier?",
  ],
  costClose:
    "Practical pair to ask: “What will this cost us — and what support will recovery require?”",

  bridges: [
    {
      title: "Should I get a second opinion before surgery?",
      body: [
        "Many patients seek a second opinion before a major treatment decision. Another review may help you better understand your options, confirm the recommended approach, or feel more confident moving forward.",
        "It may be especially helpful when surgery is complex, several treatment options exist, or you feel uncertain.",
      ],
      ctaLabel: "Second opinion decision guide",
      ctaHref: SECOND_OPINION,
    },
    {
      title: "How do I choose a lung cancer treatment center?",
      body: [
        "Expertise can be part of a major surgery decision.",
        "Ask whether the center regularly treats lung cancer, whether the team has experience with your type of surgery, and whether decisions are reviewed by multiple specialists.",
      ],
      ctaLabel: "Care center & expertise guide",
      ctaHref: CARE_CENTER,
    },
  ],

  mistakesTitle: "Common mistakes when considering surgery",
  mistakes: [
    {
      mistake: "Assuming surgery is automatically the best option",
      why: "The right choice depends on your cancer, health, and goals — not only whether surgery is possible.",
    },
    {
      mistake: "Choosing surgery without comparing alternatives",
      why: "Different approaches may have different goals, sequences, and trade-offs.",
    },
    {
      mistake: "Focusing only on removing the tumor",
      why: "A good decision also includes recovery, daily life, and the rest of the treatment plan.",
    },
    {
      mistake: "Ignoring personal priorities",
      why: "What matters to you is part of choosing among real options.",
    },
  ],

  doctorTitle: "Doctor Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Why are you recommending surgery in my case?",
    "What is the goal of surgery?",
    "Are there alternatives to surgery?",
    "How will recovery affect my daily life?",
  ],
  doctorGroups: [
    {
      heading: "Understanding the recommendation",
      questions: [
        "Why are you recommending surgery in my case?",
        "What is the goal of surgery?",
        "What benefit do you expect surgery to provide?",
      ],
    },
    {
      heading: "Comparing options",
      questions: [
        "Are there alternatives to surgery?",
        "What are the benefits and risks of each option?",
        "Would another treatment happen before or after surgery?",
      ],
    },
    {
      heading: "Preparing for recovery",
      questions: [
        "What type of surgery is planned?",
        "How will recovery affect my daily life?",
        "What support will I need after surgery?",
      ],
    },
  ],

  scenarioTitle: "Example: Deciding whether surgery fits",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person diagnosed with lung cancer learns that surgery may be possible.",
    "Their first thought is: “If surgery is available, should I do it?”",
    "Instead of deciding immediately, they ask:",
  ],
  scenarioFocus: [
    "Why is surgery being considered?",
    "What alternatives exist?",
    "What are the benefits and trade-offs?",
    "How does this fit my goals and recovery?",
  ],
  scenarioClose:
    "The decision becomes a comparison of paths rather than a simple yes-or-no choice.",

  nextStepTitle: "Your next step",
  nextStepLead: "If you are considering surgery for lung cancer:",
  nextStepActions: [
    { label: "Understand why surgery is being recommended — and what goal it serves." },
    { label: "Ask what alternatives exist, and whether treatment may come before or after surgery." },
    {
      label: "Compare benefit and risk for your situation:",
      examples: [
        "Expected cancer benefit",
        "Recovery and daily-life impact",
        "Support you may need",
      ],
    },
  ],
  nextStepCtaLabel: "Compare Lung Cancer Treatment Options",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison Decision Center",
  nextStepSecondaryCtaLabel: "Biomarker Testing Decision",
  nextStepSecondaryHref: BIOMARKER,
  nextStepSecondaryMeta: "Could results change the plan?",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Need more information first?",
      question: "Do I need biomarker testing before lung cancer treatment?",
      cta: "Biomarker testing",
      href: BIOMARKER,
    },
    {
      title: "Comparing treatments?",
      question: "How should I compare lung cancer treatment options?",
      cta: "Treatment options",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Wondering about a trial?",
      question: "Should I consider a clinical trial for lung cancer?",
      cta: "Clinical trials",
      href: CLINICAL_TRIAL,
    },
  ],
};

/** Lung Cancer Decision Module #11 — Quality of Life (supporting) */
export const QUALITY_OF_LIFE_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment: "How personal goals should influence treatment choices",
  exploring: "Personal Goals Decision Layer",
  subtitle:
    "Understand how your personal goals, daily life, and treatment priorities can help shape cancer decisions.",
  relatedDecisions: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Stage IV Decision", href: STAGE_IV },
    { label: "Recurrence", href: RECURRENCE },
    { label: "Treatment Progression", href: TREATMENT_PROGRESSION },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Cost & Logistics", href: COST_LOGISTICS },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Personal Goals", current: true },
    { label: "Stage IV Decision", href: STAGE_IV },
  ],

  triggersTitle: "You may want to discuss this when:",
  triggerGroups: [
    {
      heading: "You are comparing treatments",
      lead: "You may wonder:",
      items: [
        "How will these options affect my daily life?",
        "What trade-offs should I consider?",
      ],
    },
    {
      heading: "Treatment has significant burdens",
      lead: "You may be thinking about:",
      items: [
        "Side effects",
        "Frequent appointments",
        "Recovery time",
        "Travel requirements",
      ],
    },
    {
      heading: "Your cancer situation changes",
      lead: "You may ask:",
      items: [
        "Should my priorities change with my situation?",
        "Does my current plan still fit my goals?",
      ],
    },
    {
      heading: "You are making advanced cancer decisions",
      lead: "You may consider:",
      items: [
        "What outcomes matter most now?",
        "How should treatment goals and daily life be balanced?",
      ],
    },
  ],

  whyTitle: "Cancer decisions are about your life, not only your cancer",
  whyLead: "When facing treatment choices, patients often focus on:",
  whyBody: [
    "Will this treatment work? What options do I have? What does my doctor recommend?",
    "These questions are important. But another question is equally important:",
  ],
  whyQuestions: ["What kind of life am I trying to protect?"],
  whyDependsIntro: "Every treatment decision involves trade-offs. Those trade-offs may include:",
  whyDependsOn: [
    "Possible medical benefits",
    "Side effects",
    "Time commitments",
    "Daily activities",
    "Family responsibilities",
    "Personal goals",
  ],
  whyClose: [
    "Quality of life helps make those trade-offs clear.",
  ],

  affectTitle: "Quality of life does not mean “less treatment”",
  affectBlocks: [
    {
      title: "It means choosing treatment that fits your goals",
      body: "Some patients may prioritize exploring every possible treatment option, pursuing additional possibilities, or maximizing treatment opportunities. Others may prioritize maintaining independence, spending time with family, reducing treatment burden, or preserving daily routines.",
    },
    {
      title: "Neither approach is automatically right or wrong",
      body: "Different people have different goals. What matters is understanding your priorities when comparing options.",
    },
  ],
  affectClose:
    "The important question is: “What matters most to me when comparing my options?”",

  goalFrameworkTitle: "Define what quality of life means for you",
  goalFrameworkLead:
    "Different people value different outcomes. Consider what matters most:",
  goalFrameworkBlocks: [
    {
      title: "Independence",
      questionsIntro: "Examples:",
      questions: [
        "Managing daily activities",
        "Staying active",
        "Maintaining personal routines",
      ],
    },
    {
      title: "Relationships",
      questionsIntro: "Examples:",
      questions: [
        "Spending time with family",
        "Participating in important events",
      ],
    },
    {
      title: "Treatment goals",
      questionsIntro: "Examples:",
      questions: [
        "Pursuing additional treatment possibilities",
        "Understanding every available option",
      ],
    },
    {
      title: "Daily comfort and function",
      questionsIntro: "Examples:",
      questions: [
        "Reducing treatment burden",
        "Maintaining activities that are meaningful",
      ],
    },
  ],
  goalFrameworkClose:
    "Your priorities help define what a good decision looks like.",

  evaluateTitle: "How quality of life connects with treatment decisions",
  evaluateLead: "Add your goals to every treatment discussion. When comparing options, consider:",
  evaluateBlocks: [
    {
      title: "1. What is the medical goal?",
      intro: "Ask:",
      items: [
        "What is this treatment trying to achieve?",
        "What outcome are we hoping for?",
      ],
    },
    {
      title: "2. How could it affect daily life?",
      intro: "Ask:",
      items: [
        "What changes might I experience?",
        "What activities are important to protect?",
      ],
    },
    {
      title: "3. What are the trade-offs?",
      intro: "Ask:",
      items: [
        "What benefits should I understand?",
        "What burdens should I consider?",
      ],
    },
    {
      title: "4. Does it fit my priorities?",
      intro: "Ask:",
      items: [
        "Does this option match what matters most to me?",
        "What compromises am I comfortable making?",
      ],
    },
    {
      title: "5. Will my priorities change over time?",
      intro: "Ask:",
      items: [
        "Should this decision be revisited later?",
        "Has my situation changed?",
      ],
    },
  ],

  bridges: [
    {
      title: "Quality of life in advanced lung cancer decisions",
      body: [
        "Goals may become even more important as decisions become more complex. In advanced lung cancer, patients may consider how to balance treatment goals and daily life, which outcomes matter most now, and how to evaluate future choices.",
        "The question is not only “What treatments exist?” It is also: “What choice best fits my goals at this stage?”",
      ],
      ctaLabel: "How Do I Choose Treatment Options for Stage IV Lung Cancer?",
      ctaHref: STAGE_IV,
    },
    {
      title: "Quality of life when treatment changes",
      body: [
        "New decisions may require new priorities. When treatment is no longer achieving its intended goal, patients may ask whether what matters most has changed, what balance feels right now, and how priorities should influence the next step.",
      ],
      ctaLabel:
        "What Are My Options If My Lung Cancer Treatment Is No Longer Working?",
      ctaHref: TREATMENT_PROGRESSION,
    },
  ],

  mistakesTitle: "Common mistakes when considering quality of life",
  mistakes: [
    {
      mistake:
        "Thinking quality of life means giving up treatment",
      why: "Quality of life helps guide decisions. It does not automatically mean choosing fewer treatments.",
    },
    {
      mistake:
        "Assuming every patient should want the same outcome",
      why: "Different people have different goals.",
    },
    {
      mistake: "Discussing treatment without discussing priorities",
      why: "A treatment decision should fit the person, not only the disease.",
    },
    {
      mistake: "Waiting until decisions become urgent",
      why: "Understanding your priorities earlier can make future decisions clearer.",
    },
  ],

  doctorTitle: "Questions that support patient-centered decisions",
  doctorGroups: [
    {
      heading: "About treatment goals",
      questions: [
        "What is the goal of this treatment?",
        "What outcome are we hoping to achieve?",
      ],
    },
    {
      heading: "About daily life",
      questions: [
        "How might this affect my normal activities?",
        "What changes should I prepare for?",
      ],
    },
    {
      heading: "About trade-offs",
      questions: [
        "What are the benefits and burdens of each option?",
        "How should I think about these differences?",
      ],
    },
    {
      heading: "About my priorities",
      questions: [
        "How can my goals be included in this decision?",
        "Are there options that better match what matters to me?",
      ],
    },
  ],

  scenarioTitle:
    "Example: Including personal goals in a treatment decision",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person with lung cancer is comparing two possible approaches.",
    "Their first question is: “Which treatment is stronger?”",
    "Instead, they discuss:",
  ],
  scenarioFocus: [
    "What outcome matters most?",
    "How might each option affect daily life?",
    "What trade-offs feel acceptable?",
    "What does a meaningful outcome look like?",
  ],
  scenarioClose:
    "The decision becomes more than choosing a treatment. It becomes choosing a path that fits their goals.",

  nextStepTitle: "Include your goals in your next cancer conversation",
  nextStepLead: "Your next step:",
  nextStepActions: [
    { label: "Identify what matters most to you." },
    { label: "Understand the goals and trade-offs of each option." },
    { label: "Discuss how each choice may affect your life." },
    { label: "Make sure your priorities are part of the decision." },
  ],
  nextStepCtaLabel: "How Should I Compare Lung Cancer Treatment Options?",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Comparison",
  nextStepSecondaryCtaLabel:
    "How Do I Choose Treatment Options for Stage IV Lung Cancer?",
  nextStepSecondaryHref: STAGE_IV,
  nextStepSecondaryMeta: "Stage IV Decision",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Comparing treatments?",
      question: "How Should I Compare Lung Cancer Treatment Options?",
      cta: "Treatment Comparison",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Facing advanced decisions?",
      question: "How Do I Choose Treatment Options for Stage IV Lung Cancer?",
      cta: "Stage IV Decision",
      href: STAGE_IV,
    },
    {
      title: "Treatment changing?",
      question:
        "What Are My Options If My Lung Cancer Treatment Is No Longer Working?",
      cta: "Treatment Progression",
      href: TREATMENT_PROGRESSION,
    },
  ],
};

/** Lung Cancer Decision Module #12 — Treatment Feasibility / Cost & Logistics */
export const TREATMENT_FEASIBILITY_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Lung Cancer",
  decisionMoment:
    "Whether a treatment plan is realistic and sustainable in daily life",
  exploring: "Treatment Feasibility Layer",
  subtitle:
    "Understand how cost, location, time, support, and daily responsibilities can become part of your cancer decisions.",
  relatedDecisions: [
    { label: "Care Center Selection", href: CARE_CENTER },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Treatment Comparison", href: TREATMENT_COMPARE },
    { label: "Clinical Trial", href: CLINICAL_TRIAL },
    { label: "Quality of Life", href: QUALITY_OF_LIFE },
    { label: "Stage IV Decision", href: STAGE_IV },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Care Center Selection", href: CARE_CENTER },
    { label: "Treatment Feasibility", current: true },
    { label: "Quality of Life", href: QUALITY_OF_LIFE },
  ],

  triggersTitle: "Real-life factors may become important when:",
  triggerGroups: [
    {
      heading: "You are choosing where to receive care",
      lead: "You may wonder:",
      items: [
        "Should I stay near home?",
        "Should I consider a specialized cancer center?",
        "How much travel is realistic?",
      ],
    },
    {
      heading: "You are considering a second opinion",
      lead: "You may ask:",
      items: [
        "Can my records be reviewed remotely?",
        "What information do I need to prepare?",
        "Will travel be necessary?",
      ],
    },
    {
      heading: "Your treatment requires ongoing care",
      lead: "You may consider:",
      items: [
        "Appointment frequency",
        "Transportation",
        "Time away from normal activities",
      ],
    },
    {
      heading: "Your treatment plan changes",
      lead: "You may need to understand:",
      items: [
        "New schedules",
        "New costs",
        "New practical requirements",
      ],
    },
  ],

  whyTitle:
    "The best treatment plan is one you can realistically follow",
  whyLead: "Cancer treatment decisions are often discussed around:",
  whyBody: [
    "What treatments exist? What does the evidence show? What does my doctor recommend?",
    "But every treatment plan eventually becomes part of daily life.",
  ],
  whyQuestions: [],
  whyDependsIntro: "Patients may need to consider:",
  whyDependsOn: [
    "How often appointments happen",
    "How far they need to travel",
    "Who can support them",
    "How treatment affects work or family",
    "Whether the plan can continue over time",
  ],
  whyClose: [
    "A medically appropriate option also needs to be practical.",
  ],

  goalFrameworkTitle: "Cost is only one part of the decision",
  goalFrameworkLead:
    "Understanding the complete impact of cancer care. When patients think about cost, they may consider:",
  goalFrameworkBlocks: [
    {
      title: "Direct medical costs",
      questionsIntro: "Examples:",
      questions: [
        "Treatments",
        "Procedures",
        "Tests",
        "Visits",
      ],
    },
    {
      title: "Insurance and coverage",
      questionsIntro: "Questions:",
      questions: [
        "What costs should I understand before starting?",
        "Who can help explain coverage?",
      ],
    },
    {
      title: "Travel and location costs",
      questionsIntro: "Examples:",
      questions: [
        "Transportation",
        "Accommodation",
        "Time away from home",
      ],
    },
    {
      title: "Life impact",
      questionsIntro: "Examples:",
      questions: [
        "Work changes",
        "Family responsibilities",
        "Caregiver needs",
      ],
    },
  ],
  goalFrameworkClose:
    "The goal is not simply finding the least expensive option. The goal is understanding the full impact of each choice.",

  affectTitle: "How logistics can influence treatment decisions",
  affectBlocks: [
    {
      title: "Location",
      body: "Where will treatment happen? How often do I need to be there?",
    },
    {
      title: "Time commitment",
      body: "How much time will treatment require? How might it affect my routine?",
    },
    {
      title: "Support system",
      body: "Who can help during treatment? What support will I need?",
    },
    {
      title: "Long-term sustainability",
      body: "Can I realistically continue this plan? What challenges should I prepare for?",
    },
  ],
  affectClose:
    "Practical factors can affect which options are realistic — without replacing medical judgment.",

  evaluateTitle: "A decision framework for treatment feasibility",
  evaluateLead:
    "Include practical reality alongside medical information.",
  evaluateBlocks: [
    {
      title: "1. Understand the medical goal",
      intro: "Ask:",
      items: [
        "What is this option trying to achieve?",
        "Why is it being considered?",
      ],
    },
    {
      title: "2. Understand the practical requirements",
      intro: "Ask:",
      items: [
        "Where will care happen?",
        "How often are visits needed?",
      ],
    },
    {
      title: "3. Understand the personal impact",
      intro: "Ask:",
      items: [
        "How will this affect my daily life?",
        "What support will I need?",
      ],
    },
    {
      title: "4. Understand financial considerations",
      intro: "Ask:",
      items: [
        "What costs should I plan for?",
        "Who can help me understand available resources?",
      ],
    },
    {
      title: "5. Decide whether the plan is realistic",
      intro: "Ask:",
      items: [
        "Can this approach fit my medical needs and my life circumstances?",
      ],
    },
  ],

  bridges: [
    {
      title: "Does the cancer center decision affect logistics?",
      body: [
        "Expertise and practicality may both matter. Some patients consider specialist experience, multidisciplinary care, distance from home, and travel requirements.",
        "A highly specialized center may provide additional expertise. Patients may also consider time, cost, support, and ability to continue care.",
        "The question is not “Which center is always best?” The question is: “Which care approach fits my medical needs and my real situation?”",
      ],
      ctaLabel:
        "Do I Need a Different Cancer Center or More Specialized Expertise?",
      ctaHref: CARE_CENTER,
    },
    {
      title: "How does this connect with second opinions?",
      body: [
        "Another perspective may also require planning. Second opinions may involve preparing medical records, remote consultations, travel, and additional appointments.",
        "Questions: What information does another specialist need? Can this process happen remotely?",
      ],
      ctaLabel:
        "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      ctaHref: SECOND_OPINION,
    },
  ],

  mistakesTitle: "Common mistakes when considering treatment feasibility",
  mistakes: [
    {
      mistake: "Looking only at the treatment itself",
      why: "A treatment plan also has practical requirements.",
    },
    {
      mistake: "Ignoring daily-life challenges until later",
      why: "Planning early can reduce avoidable difficulties.",
    },
    {
      mistake: "Choosing only based on cost",
      why: "Medical fit and personal circumstances both matter.",
    },
    {
      mistake: "Assuming practical concerns cannot be discussed",
      why: "Your care team needs to understand your real situation.",
    },
  ],

  doctorTitle: "Questions that improve treatment planning",
  doctorGroups: [
    {
      heading: "About logistics",
      questions: [
        "How often will I need appointments?",
        "How long will treatment visits usually take?",
      ],
    },
    {
      heading: "About location",
      questions: [
        "Do I need to receive all care at this center?",
        "Are some parts of care possible closer to home?",
      ],
    },
    {
      heading: "About support",
      questions: [
        "What help might I need from family or caregivers?",
        "What should I prepare before treatment begins?",
      ],
    },
    {
      heading: "About costs",
      questions: [
        "Who can help me understand expected costs?",
        "What resources may be available?",
      ],
    },
  ],

  scenarioTitle: "Example: Choosing a realistic treatment path",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person with lung cancer is considering receiving care at a specialized center farther from home.",
    "Their first question is: “Is this the right medical option?”",
    "They also consider:",
  ],
  scenarioFocus: [
    "How often would I need to travel?",
    "Can my family support this plan?",
    "What time and financial commitments are involved?",
    "Are some parts of care possible closer to home?",
  ],
  scenarioClose:
    "The decision becomes: “What treatment approach can I realistically follow while receiving appropriate care?”",

  nextStepTitle:
    "Make sure your treatment plan fits both your cancer and your life",
  nextStepLead: "Your next step:",
  nextStepActions: [
    { label: "Understand your medical options." },
    { label: "Identify practical requirements." },
    {
      label: "Discuss:",
      examples: [
        "Location",
        "Time",
        "Cost",
        "Support needs",
      ],
    },
    {
      label:
        "Choose a plan that is medically appropriate and realistic for your situation.",
    },
  ],
  nextStepCtaLabel:
    "Do I Need a Different Cancer Center or More Specialized Expertise?",
  nextStepHref: CARE_CENTER,
  nextStepCtaMeta: "Care Center Decision",
  nextStepSecondaryCtaLabel:
    "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
  nextStepSecondaryHref: SECOND_OPINION,
  nextStepSecondaryMeta: "Second Opinion",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Need more expertise?",
      question:
        "Do I Need a Different Cancer Center or More Specialized Expertise?",
      cta: "Care Center Decision",
      href: CARE_CENTER,
    },
    {
      title: "Want another perspective?",
      question: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      cta: "Second Opinion",
      href: SECOND_OPINION,
    },
    {
      title: "Comparing treatments?",
      question: "How Should I Compare Lung Cancer Treatment Options?",
      cta: "Treatment Comparison",
      href: TREATMENT_COMPARE,
    },
  ],
};

const FLAGSHIP_BY_SLUG: Record<string, AiEntryFlagshipModules> = {
  "what-decisions-matter-most-after-new-lung-cancer-diagnosis":
    NEWLY_DIAGNOSED_FLAGSHIP,
  "should-i-get-second-opinion-after-lung-cancer-diagnosis":
    SECOND_OPINION_FLAGSHIP,
  "do-i-need-biomarker-testing-before-lung-cancer-treatment":
    BIOMARKER_FLAGSHIP,
  "how-to-compare-surgery-and-systemic-therapy-lung-cancer":
    TREATMENT_COMPARISON_FLAGSHIP,
  "do-i-need-different-lung-cancer-center-or-specialized-expertise":
    CARE_CENTER_FLAGSHIP,
  "how-to-choose-treatment-options-for-stage-iv-lung-cancer":
    STAGE_IV_FLAGSHIP,
  "should-i-consider-a-clinical-trial-for-lung-cancer":
    CLINICAL_TRIAL_FLAGSHIP,
  "what-are-my-options-if-lung-cancer-comes-back": RECURRENCE_FLAGSHIP,
  "what-are-my-options-if-lung-cancer-treatment-no-longer-working":
    TREATMENT_PROGRESSION_FLAGSHIP,
  "should-surgery-be-part-of-my-lung-cancer-treatment-plan":
    SURGERY_FLAGSHIP,
  "how-should-quality-of-life-factor-into-lung-cancer-decisions":
    QUALITY_OF_LIFE_FLAGSHIP,
  "can-my-lung-cancer-treatment-plan-work-with-my-real-life":
    TREATMENT_FEASIBILITY_FLAGSHIP,
};

export function getAiEntryFlagshipModules(
  slug: string
): AiEntryFlagshipModules | null {
  return FLAGSHIP_BY_SLUG[slug] ?? null;
}
