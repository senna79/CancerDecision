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
  subtitle:
    "A second opinion is another expert review of your diagnosis, options, or care plan — about having enough information to feel confident, not about distrusting your doctor.",
  relatedDecisions: [
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Treatment Options", href: TREATMENT_COMPARE },
    { label: "Surgery Decision", href: SURGERY },
    { label: "Clinical Trials", href: CLINICAL_TRIAL },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: NEW_DIAGNOSIS },
    { label: "Second Opinion", current: true },
    { label: "Treatment Options", href: TREATMENT_COMPARE },
  ],

  triggersTitle: "You may be considering a second opinion if:",
  triggerGroups: [
    {
      heading: "You were recently diagnosed",
      lead: "You may want to confirm:",
      items: [
        "Whether important information is complete",
        "Whether other options should be discussed",
      ],
    },
    {
      heading: "You are choosing between approaches",
      lead: "You may want to understand:",
      items: [
        "Why this plan was recommended",
        "What alternatives exist",
      ],
    },
    {
      heading: "Surgery or another major treatment was recommended",
      lead: "You may want confidence before a hard-to-reverse decision.",
      items: [
        "Whether the recommendation fits your situation",
        "What tradeoffs you should understand",
      ],
    },
    {
      heading: "Diagnosis, stage, or treatment feels uncertain",
      lead: "You may be asking:",
      items: [
        "Is anything missing?",
        "Should pathology or scans be reviewed again?",
        "What if treatment is not working as expected?",
      ],
    },
  ],

  whyTitle: "Is this a situation where another opinion could help?",
  whyLead:
    "A second opinion may be useful when a decision has significant consequences or when multiple reasonable paths may exist.",
  whyBody: [
    "Patients often consider another opinion when they receive a new diagnosis, surgery is being considered, several treatment options are possible, biomarker results may affect choices, or treatment is changing.",
    "A second opinion is not about questioning every decision. It is about making sure the decision is based on the right information.",
  ],
  whyQuestions: [],
  whyNotLabel: "The question is not:",
  whyNotQuestion: "Do I trust my doctor?",
  whyBetterLabel: "The better question is:",
  whyBetterQuestion:
    "Do I have enough information to feel confident about this decision?",
  whyClose: [
    "The value of a second opinion is highest before a major decision is made — especially decisions that may be difficult to reverse.",
  ],

  doesNotDecideTitle:
    "What could another doctor tell me that I do not already know?",
  doesNotDecideLead:
    "A second opinion may confirm your current plan, clarify why a treatment is recommended, expand options worth discussing, or identify additional information that may affect the decision.",
  doesNotDecideItems: [
    "Confirm — your current plan is reasonable",
    "Clarify — why a treatment is recommended",
    "Expand — other options worth discussing",
    "Identify — information that may affect the decision",
  ],
  doesNotDecideNotes: [
    "Sometimes the most valuable result is not changing the plan. It is knowing why that plan makes sense.",
    "A second opinion is not about finding a different answer. It is about making sure you understand the reasoning behind the answer.",
  ],
  doesNotDecideClose:
    "Open the cards beside this step for conflicting recommendations and when pathology or scans should be reviewed again.",

  costTitle: "Cost and insurance — what to ask about a second opinion",
  costLead:
    "Costs vary depending on the healthcare system, insurance coverage, and type of consultation.",
  costItems: [
    "Is this consultation covered?",
    "Are record reviews included?",
    "Are there additional fees?",
  ],
  costClose:
    "Ask before you schedule — so cost does not surprise you mid-decision.",

  prepTitle: "What information should I prepare for a second opinion?",
  prepItems: [
    "Pathology reports",
    "Biopsy information",
    "Imaging reports and scan images if available",
    "Biomarker results",
    "Treatment history",
    "Current treatment plan",
    "Questions you want answered",
  ],

  bridge: {
    title: "Should I seek a lung cancer specialist or cancer center?",
    body: [
      "A specialist or experienced cancer center may provide focused expertise, multidisciplinary review, and access to clinical trials.",
      "The best choice depends on your situation, location, and access.",
    ],
    ctaLabel: "Care center & expertise guide",
    ctaHref: CARE_CENTER,
  },

  mistakesTitle: "Common mistakes when getting a second opinion",
  mistakes: [
    {
      mistake: "Waiting until after a major decision",
      why: "Earlier review may provide more options.",
    },
    {
      mistake: "Asking for another opinion without complete records",
      why: "Missing information limits usefulness.",
    },
    {
      mistake: "Looking only for someone who agrees",
      why: "The goal is understanding, not confirmation.",
    },
  ],

  doctorTitle: "Doctor Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Do you agree with my diagnosis and stage?",
    "Would you recommend the same treatment plan?",
    "What alternatives should I discuss?",
    "What questions should I bring back to my current doctor?",
  ],
  doctorGroups: [
    {
      heading: "About my diagnosis",
      questions: [
        "Do you agree with my diagnosis and stage?",
        "Is there any additional information I should consider?",
        "Are there uncertainties that could affect my options?",
      ],
    },
    {
      heading: "About treatment choices",
      questions: [
        "Would you recommend the same treatment plan?",
        "What alternatives should I discuss?",
        "What are the main tradeoffs between options?",
      ],
    },
    {
      heading: "About next steps",
      questions: [
        "What would you recommend if this treatment does not work?",
        "Are there clinical trials I should consider?",
        "What questions should I bring back to my current doctor?",
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
    "What questions they need answered before a hard-to-reverse decision",
  ],
  scenarioClose:
    "The second opinion helps them make a decision with more confidence — whether or not the plan changes.",

  nextStepTitle: "Your next step",
  nextStepLead: "If you are considering a second opinion:",
  nextStepActions: [
    { label: "Collect the records another specialist needs for a full review." },
    {
      label: "Decide what you most need clarified:",
      examples: [
        "Diagnosis or stage",
        "Treatment alternatives",
        "Tradeoffs before a major decision",
      ],
    },
    { label: "Prepare questions — and ask how urgent timing is." },
  ],
  nextStepCtaLabel: "Compare Treatment Options",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Options Decision",
  nextStepSecondaryCtaLabel: "Biomarker Testing Decision",
  nextStepSecondaryHref: BIOMARKER,
  nextStepSecondaryMeta: "Could results change the discussion?",

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
      title: "Considering surgery?",
      question: "Should surgery be part of my lung cancer treatment plan?",
      cta: "Surgery decision",
      href: SURGERY,
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
  decisionMoment: "How to choose among lung cancer treatment options",
  exploring: "Treatment Options Decision",
  subtitle:
    "Choosing a lung cancer treatment is not about finding the “strongest” option. It is about the plan that best fits your cancer, test information, health, and goals.",
  relatedDecisions: [
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Surgery Decision", href: SURGERY },
    { label: "Clinical Trials", href: CLINICAL_TRIAL },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: NEW_DIAGNOSIS },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Treatment Options", current: true },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  triggersTitle: "You may be facing this decision if:",
  triggerGroups: [
    {
      heading: "You were recently diagnosed",
      lead: "You may wonder:",
      items: [
        "What treatment options are on the table?",
        "Why might my plan differ from someone else’s?",
      ],
    },
    {
      heading: "Your doctor discussed more than one approach",
      lead: "You want to understand:",
      items: [
        "Why this option was recommended",
        "What alternatives exist",
        "How to compare them",
      ],
    },
    {
      heading: "You are trying to understand the main categories",
      lead: "You may be hearing about:",
      items: [
        "Surgery or radiation",
        "Chemotherapy, immunotherapy, or targeted therapy",
        "Clinical trials",
      ],
    },
    {
      heading: "You want confidence before choosing",
      lead: "You may be asking:",
      items: [
        "Is more aggressive always better?",
        "Can I wait for more information?",
        "Would another opinion help?",
      ],
    },
  ],

  whyTitle: "What treatment options are being discussed?",
  whyLead:
    "Lung cancer treatment includes several different approaches. Some focus on removing or controlling cancer in a specific area. Others work throughout the body.",
  whyBody: [
    "Doctors choose among these approaches based on the goal of treatment and the information available about your cancer.",
    "Understanding the categories helps you ask better questions. It does not mean you need to choose from every available treatment.",
  ],
  whyQuestions: [],
  whyNotLabel: "The key question is not:",
  whyNotQuestion: "Which treatment is the best?",
  whyBetterLabel: "It is:",
  whyBetterQuestion:
    "Which treatment plan makes the most sense for my situation, and why?",
  whyClose: [
    "Some people receive one treatment. Others receive a combination or a sequence of treatments.",
  ],

  treatmentCategoriesTitle: "Treatment landscape — local, systemic, and trials",
  treatmentCategoriesLead:
    "Most lung cancer discussions use a few large categories:",
  treatmentCategories: [
    {
      title: "Local treatments",
      includes: ["Surgery", "Radiation therapy"],
      questionsIntro: "Often considered when:",
      questions: [
        "Controlling a specific tumor area is an important goal",
        "What role would a local treatment play in my plan?",
      ],
    },
    {
      title: "Systemic treatments",
      includes: ["Chemotherapy", "Immunotherapy", "Targeted therapy"],
      questionsIntro: "Often considered when:",
      questions: [
        "Treatment needs to address cancer beyond one location",
        "Why this medicine approach for my situation?",
      ],
    },
    {
      title: "Clinical trials",
      questionsIntro: "May provide another option when:",
      questions: [
        "A newer approach or combination is being studied",
        "Eligibility and trade-offs fit your situation",
      ],
    },
  ],
  treatmentCategoriesClose:
    "These are tools for discussion — not a menu you must pick from.",

  doesNotDecideTitle: "Why did my doctor recommend this treatment?",
  doesNotDecideLead:
    "A treatment recommendation comes from putting many pieces together: lung cancer type, stage and spread pattern, biomarker information, previous treatments, your overall health, and your goals.",
  doesNotDecideItems: [
    "Expected benefit — what doctors hope the treatment can achieve",
    "Possible risks — side effects or challenges that may occur",
    "Personal priorities — what matters most in your daily life",
  ],
  doesNotDecideNotes: [
    "The same treatment is not automatically right for everyone.",
    "The goal is not to choose the most aggressive treatment. The goal is to choose the plan with the right balance for you.",
  ],
  doesNotDecideClose:
    "Open the cards beside this step for why plans differ, how biomarkers fit, and why “less aggressive” can still be appropriate.",

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may help you better understand:",
  secondOpinionWhen: [
    "Available options",
    "Reasons behind the recommendation",
    "Possible alternatives",
    "Whether you want more confidence before deciding",
  ],
  secondOpinionClose:
    "It can be especially helpful when multiple treatments seem possible or the decision feels complex.",
  secondOpinionCtaLabel: "Second opinion decision guide",
  secondOpinionHref: SECOND_OPINION,

  mistakesTitle: "Common mistakes when choosing treatment",
  mistakes: [
    {
      mistake: "Choosing based only on what worked for someone else",
      why: "Another person’s plan may not fit your cancer, health, or goals.",
    },
    {
      mistake: "Assuming the newest treatment is automatically best",
      why: "Newer is valuable when it matches your situation — not by default.",
    },
    {
      mistake: "Focusing only on the cancer and ignoring personal goals",
      why: "Daily life and priorities belong in the comparison.",
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

  doctorTitle: "Doctor Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "What is the main goal of this treatment?",
    "Why do you think this option fits my situation?",
    "What alternatives should we discuss?",
    "How will we know whether treatment is working?",
  ],
  doctorGroups: [
    {
      heading: "Understanding the recommendation",
      questions: [
        "What is the main goal of this treatment?",
        "Why do you think this option fits my situation?",
        "What information influenced this recommendation?",
      ],
    },
    {
      heading: "Comparing options",
      questions: [
        "What alternatives should we discuss?",
        "What are the main benefits and risks?",
        "How do these options compare for my daily life?",
      ],
    },
    {
      heading: "Looking ahead",
      questions: [
        "How will we know whether treatment is working?",
        "What are the next options if this treatment does not work?",
        "Are clinical trials relevant for me?",
      ],
    },
  ],

  nextStepTitle: "Your next step",
  nextStepLead: "Before choosing a treatment approach:",
  nextStepActions: [
    { label: "Confirm you understand why this plan was recommended." },
    { label: "Ask what alternatives exist — and how they compare for daily life." },
    {
      label: "Compare each option by:",
      examples: ["Goal", "Timing in the sequence", "Impact on your life"],
    },
  ],
  nextStepCtaLabel: "Biomarker Testing Decision",
  nextStepHref: BIOMARKER,
  nextStepCtaMeta: "Could results change the options?",
  nextStepSecondaryCtaLabel: "Surgery Decision",
  nextStepSecondaryHref: SURGERY,
  nextStepSecondaryMeta: "When surgery is part of the comparison",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Need more information first?",
      question: "Do I need biomarker testing before lung cancer treatment?",
      cta: "Biomarker testing",
      href: BIOMARKER,
    },
    {
      title: "Wondering about surgery?",
      question: "Should surgery be part of my lung cancer treatment plan?",
      cta: "Surgery decision",
      href: SURGERY,
    },
    {
      title: "Wondering about a trial?",
      question: "Should I consider a clinical trial for lung cancer?",
      cta: "Clinical trials",
      href: CLINICAL_TRIAL,
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
    "A clinical trial is another option to evaluate — not automatically better than standard care, and not only for people who have run out of options.",
  relatedDecisions: [
    { label: "Treatment Options", href: TREATMENT_COMPARE },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Treatment Changes", href: TREATMENT_PROGRESSION },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Options", href: TREATMENT_COMPARE },
    { label: "Clinical Trial", current: true },
    { label: "Second Opinion", href: SECOND_OPINION },
  ],

  triggersTitle: "You may be considering a clinical trial if:",
  triggerGroups: [
    {
      heading: "You are choosing an initial plan",
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
        "Should a trial sit alongside standard options?",
        "How do they compare for my goals?",
      ],
    },
    {
      heading: "Your current options are limited or changing",
      lead: "You may ask:",
      items: [
        "Are there additional options to discuss?",
        "Should I explore trials before the next decision?",
      ],
    },
    {
      heading: "A new approach may match your cancer features",
      lead: "You may be hearing about:",
      items: [
        "Biomarker-selected studies",
        "New combinations or sequences",
      ],
    },
  ],

  whyTitle: "Why would a clinical trial be mentioned for someone like me?",
  whyLead:
    "Clinical trials are considered when researchers are studying a treatment approach that may help people with certain situations.",
  whyBody: [
    "A clinical trial may be discussed when choosing an initial plan, when current options are limited, when cancer changes over time, or when a new approach matches specific cancer characteristics.",
    "A clinical trial is not only for people who have “run out of options.”",
  ],
  whyQuestions: [],
  whyNotLabel: "The key question is not:",
  whyNotQuestion: "Should I join a clinical trial?",
  whyBetterLabel: "The better question is:",
  whyBetterQuestion:
    "Is there a clinical trial that fits my situation and is worth discussing with my care team?",
  whyClose: [
    "The right timing to discuss trials depends on your journey. Earlier discussion can help you understand whether any options may exist.",
  ],

  doesNotDecideTitle: "How do I know if a trial is relevant to me?",
  doesNotDecideLead:
    "Clinical trials have specific requirements. Your care team may consider lung cancer type, stage, biomarker results, previous treatments, overall health, and treatment goals.",
  doesNotDecideItems: [
    "A trial that is valuable for one person may not be appropriate for another",
    "Finding a trial is not about finding the newest option",
    "It is about finding a trial that matches your situation",
  ],
  doesNotDecideNotes: [
    "Not qualifying for one trial does not mean there are no other options.",
  ],
  doesNotDecideClose:
    "Open the cards beside this step for eligibility, biomarkers, and whether a trial replaces or combines with standard care.",

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may help when:",
  secondOpinionWhen: [
    "The trial decision is complex",
    "Multiple options exist",
    "You want more confidence before deciding",
  ],
  secondOpinionClose:
    "The goal is better understanding — not delaying care unnecessarily.",
  secondOpinionCtaLabel: "Second opinion decision guide",
  secondOpinionHref: SECOND_OPINION,

  mistakesTitle: "Common mistakes when considering clinical trials",
  mistakes: [
    {
      mistake: "Waiting too long to ask",
      why: "Some opportunities require early discussion.",
    },
    {
      mistake: "Assuming trials are only for advanced cancer",
      why: "Trials exist at different stages of the journey.",
    },
    {
      mistake: "Choosing based only on “new”",
      why: "New does not always mean appropriate for you.",
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
    "Does it fit my goals and daily life?",
  ],
  scenarioClose:
    "The trial becomes one option to evaluate — not a decision made without comparison.",

  doctorTitle: "Doctor Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "What question is this trial trying to answer?",
    "Why do you think I may be a candidate?",
    "How does this compare with standard treatment?",
    "How might this affect my daily life?",
  ],
  doctorGroups: [
    {
      heading: "About the trial",
      questions: [
        "What question is this trial trying to answer?",
        "Why do you think I may be a candidate?",
        "How does this compare with standard treatment?",
      ],
    },
    {
      heading: "About benefits and risks",
      questions: [
        "What is known about this treatment so far?",
        "What are the possible benefits?",
        "What risks should I understand?",
      ],
    },
    {
      heading: "About my life",
      questions: [
        "How often would I need to visit?",
        "Would travel be required?",
        "How might this affect my daily life?",
      ],
    },
  ],

  nextStepTitle: "Your next step",
  nextStepLead: "If you are considering a clinical trial:",
  nextStepActions: [
    { label: "Ask whether any trials fit your type, stage, and prior treatment." },
    { label: "Compare the trial with standard options — goal, evidence, and impact." },
    {
      label: "Clarify practical requirements:",
      examples: ["Visits", "Travel", "What happens if it does not work"],
    },
  ],
  nextStepCtaLabel: "Compare Treatment Options",
  nextStepHref: TREATMENT_COMPARE,
  nextStepCtaMeta: "Treatment Options Decision",
  nextStepSecondaryCtaLabel: "Biomarker Testing Decision",
  nextStepSecondaryHref: BIOMARKER,
  nextStepSecondaryMeta: "Could results affect trial options?",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Comparing treatments?",
      question: "How should I compare lung cancer treatment options?",
      cta: "Treatment options",
      href: TREATMENT_COMPARE,
    },
    {
      title: "Need more information first?",
      question: "Do I need biomarker testing before lung cancer treatment?",
      cta: "Biomarker testing",
      href: BIOMARKER,
    },
    {
      title: "Facing a treatment change?",
      question:
        "What are my options if lung cancer treatment is no longer working?",
      cta: "Treatment changes",
      href: TREATMENT_PROGRESSION,
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
  exploring: "Treatment Change Decision",
  subtitle:
    "When treatment stops working as expected, it does not mean there are no more options. Cancer care often involves multiple decisions over time.",
  relatedDecisions: [
    { label: "Clinical Trials", href: CLINICAL_TRIAL },
    { label: "Second Opinion", href: SECOND_OPINION },
    { label: "Biomarker Testing", href: BIOMARKER },
    { label: "Quality of Life", href: QUALITY_OF_LIFE },
  ],
  journeyLabel: "Lung Cancer Decision Journey",
  journeyPath: [
    { label: "Treatment Options", href: TREATMENT_COMPARE },
    { label: "Treatment Change", current: true },
    { label: "Clinical Trial", href: CLINICAL_TRIAL },
  ],

  triggersTitle: "You may be facing this decision if:",
  triggerGroups: [
    {
      heading: "Your scans show cancer has grown or changed",
      lead: "You may wonder:",
      items: [
        "What does this change mean?",
        "What information should we review next?",
      ],
    },
    {
      heading: "Current treatment is no longer controlling the cancer",
      lead: "You may want to understand:",
      items: [
        "Why is a different approach being considered?",
        "What alternatives exist now?",
      ],
    },
    {
      heading: "Symptoms have changed",
      lead: "You may be asking:",
      items: [
        "Is the balance of benefit and burden still right?",
        "What matters most in daily life now?",
      ],
    },
    {
      heading: "You are considering a new option",
      lead: "You may be exploring:",
      items: [
        "Another treatment approach",
        "Clinical trials",
        "Supportive care focused on symptoms",
      ],
    },
  ],

  whyTitle: "Does treatment change mean my cancer is getting worse?",
  whyLead:
    "A treatment change can happen for different reasons. Doctors may consider changing treatment when scans show growth, side effects become difficult, a different treatment may offer more benefit, or new information changes the discussion.",
  whyBody: [
    "A treatment change does not always mean an emergency. It means the care team is reassessing the situation.",
    "Cancer care is often a series of decisions, not one single treatment choice.",
  ],
  whyQuestions: [],
  whyNotLabel: "The key question is not:",
  whyNotQuestion: "Did my treatment fail?",
  whyBetterLabel: "It is:",
  whyBetterQuestion:
    "What information do we need now to understand the next best option?",
  whyClose: [
    "When treatment stops working as expected, it does not mean there are no more options.",
  ],

  doesNotDecideTitle: "How will doctors decide what comes next?",
  doesNotDecideLead:
    "When treatment changes, doctors usually review the complete picture again — latest imaging, symptoms, previous treatments, biomarker information, and whether additional testing is needed.",
  doesNotDecideItems: [
    "Sometimes the most useful next step is not immediately choosing another treatment",
    "It is understanding what has changed",
    "A new decision starts with new information",
  ],
  doesNotDecideNotes: [
    "Previous treatments, how long they helped, and side effects all guide future choices.",
  ],
  doesNotDecideClose:
    "Open the cards beside this step for biopsy, biomarkers over time, and why prior treatment matters.",

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be useful when:",
  secondOpinionWhen: [
    "Several options exist",
    "The decision feels complex",
    "You want more confidence before changing direction",
  ],
  secondOpinionClose:
    "Treatment changes are another important decision point.",
  secondOpinionCtaLabel: "Second opinion decision guide",
  secondOpinionHref: SECOND_OPINION,

  mistakesTitle: "Common mistakes when treatment changes",
  mistakes: [
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

  doctorTitle: "Doctor Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Why are we considering changing treatment?",
    "What are my available options now?",
    "What benefit do we expect from each option?",
    "How will we measure whether this treatment is helping?",
  ],
  doctorGroups: [
    {
      heading: "Understanding the change",
      questions: [
        "Why are we considering changing treatment?",
        "What information shows that change may help?",
        "Is this change urgent?",
      ],
    },
    {
      heading: "Comparing options",
      questions: [
        "What are my available options now?",
        "What benefit do we expect from each option?",
        "What are the possible risks?",
      ],
    },
    {
      heading: "Looking ahead",
      questions: [
        "What happens if the next treatment does not work?",
        "Are clinical trials relevant?",
        "How will we measure whether this treatment is helping?",
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
    { label: "Understand what has changed — and whether the change is urgent." },
    { label: "Ask whether additional testing would change the options." },
    {
      label: "Compare next options by:",
      examples: ["Expected benefit", "Risks", "Your goals and daily life"],
    },
  ],
  nextStepCtaLabel: "Clinical Trial Decision",
  nextStepHref: CLINICAL_TRIAL,
  nextStepCtaMeta: "When research options may fit",
  nextStepSecondaryCtaLabel: "Second Opinion Decision",
  nextStepSecondaryHref: SECOND_OPINION,
  nextStepSecondaryMeta: "When you want more confidence",

  relatedPathsTitle: "Continue your lung cancer decision journey",
  relatedPaths: [
    {
      title: "Wondering about a trial?",
      question: "Should I consider a clinical trial for lung cancer?",
      cta: "Clinical trials",
      href: CLINICAL_TRIAL,
    },
    {
      title: "Need more confidence?",
      question: "Should I get a second opinion after lung cancer diagnosis?",
      cta: "Second opinion",
      href: SECOND_OPINION,
    },
    {
      title: "Need updated information?",
      question: "Do I need biomarker testing before lung cancer treatment?",
      cta: "Biomarker testing",
      href: BIOMARKER,
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
