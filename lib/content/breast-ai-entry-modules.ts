import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import {
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/breast-entry-slugs";

const BREAST_NEW = `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`;
const BREAST_SUBTYPE = `/questions/${BREAST_SUBTYPE_SLUG}`;
const BREAST_SEQUENCING = `/questions/${BREAST_SEQUENCING_SLUG}`;
const BREAST_SURGERY = `/questions/${BREAST_SURGERY_SLUG}`;
const BREAST_SECOND = `/questions/${BREAST_SECOND_OPINION_SLUG}`;
const BREAST_SYSTEMIC = `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`;

/** Breast Cancer Orientation Entry — Newly Diagnosed (P0 #1) */
export const BREAST_NEWLY_DIAGNOSED_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "What happens next after a new diagnosis",
  exploring: "Orientation after diagnosis",
  subtitle:
    "A breast cancer diagnosis brings many questions. This guide helps you understand what information you need — especially subtype and sequencing — and how to prepare for conversations without solving the whole journey today.",
  relatedDecisions: [
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", current: true },
    { label: "Subtype", href: BREAST_SUBTYPE },
    { label: "Sequencing", href: BREAST_SEQUENCING },
  ],

  triggersTitle: "You may be facing this if:",
  triggerGroups: [
    {
      heading: "You were just diagnosed",
      lead: "You may be thinking:",
      items: [
        "What happens next?",
        "Do I need to choose surgery or chemo today?",
      ],
    },
    {
      heading: "You are waiting on results",
      lead: "You may wonder:",
      items: [
        "Do I need receptor / HER2 results before choosing treatment?",
        "Should treatment start before or after surgery?",
      ],
    },
    {
      heading: "You feel pressure to decide quickly",
      lead: "You may want to know:",
      items: [
        "What must happen this week?",
        "Would genetic counseling change a surgery choice?",
      ],
    },
  ],

  whyTitle: "Get clear on your diagnosis",
  whyLead:
    "“Breast cancer” describes a group of diseases. Before locking a first plan, your team will usually clarify what you have.",
  whyBody: [
    "Subtype — receptors (ER/PR), HER2, and related biology that shape systemic options",
    "Stage / extent — where it is, nodes, and whether more imaging is needed",
    "Sequencing — whether systemic therapy should start before or after surgery",
  ],
  whyQuestions: [],
  whyNotLabel: "The goal is not:",
  whyNotQuestion: "Choosing every treatment today.",
  whyBetterLabel: "The goal is:",
  whyBetterQuestion:
    "Understanding your cancer and the next decision — then preparing for the conversation.",
  whyClose: [
    "Your diagnosis is more than a name. It is the information doctors use to build a sequence — and you do not need every answer on day one.",
  ],

  doesNotDecideTitle: "Make sure you have the information needed",
  doesNotDecideLead:
    "Many first plans depend on subtype, staging, and sometimes genetics — not only the biopsy that confirmed cancer.",
  doesNotDecideItems: [
    "The useful question is not “Why are we waiting?”",
    "It is “Is there important information that could change my options or sequencing?”",
    "Ask how urgent your situation is — not every wait is the same",
  ],
  doesNotDecideNotes: [
    "If symptoms worsen, seek urgent care rather than waiting for elective sequencing.",
  ],
  doesNotDecideClose:
    "Open the cards beside this step for subtype results and what “waiting” may mean.",

  mistakesTitle: "Common early missteps after diagnosis",
  mistakes: [
    {
      mistake: "Trying to choose surgery before subtype and sequencing are clear",
      why: "Subtype and neoadjuvant vs adjuvant timing often change what surgery options mean.",
    },
    {
      mistake: "Confusing tumor subtype with germline genetics",
      why: "Receptor/HER2 status is not the same as BRCA-class counseling — ask if genetics could change the operation.",
    },
    {
      mistake: "Believing you must solve the whole journey this week",
      why: "Your next step matters more than every future decision.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Surgery choices feel irreversible",
    "Sequencing (before vs after surgery) is unclear",
    "Multiple options exist",
    "You want more confidence",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Doctor Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "What subtype of breast cancer do I have — and what stage is it?",
    "What information are we still waiting for?",
    "Should treatment start before or after surgery?",
    "Do I need genetic counseling before a final surgery choice?",
  ],
  doctorGroups: [
    {
      heading: "Understanding my diagnosis",
      questions: [
        "What subtype of breast cancer do I have?",
        "What stage is it — and do we need more imaging?",
        "What information are we still waiting for?",
      ],
    },
    {
      heading: "Understanding my next step",
      questions: [
        "What decision comes next?",
        "How urgent is this decision?",
        "Should systemic therapy start before or after surgery?",
      ],
    },
    {
      heading: "Understanding my care team",
      questions: [
        "Who will coordinate my care?",
        "Do I need genetic counseling before surgery?",
        "Would another opinion be helpful?",
      ],
    },
  ],

  scenarioTitle: "Example: The first week after diagnosis",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person receives a breast cancer diagnosis and feels pressure to schedule surgery immediately.",
    "Their first thought is: “I have to decide everything now.”",
    "Instead, they focus on:",
  ],
  scenarioFocus: [
    "What subtype and stage do I have?",
    "What information is still pending?",
    "Should treatment start before or after surgery?",
    "What questions should I bring to my care team?",
  ],
  scenarioClose:
    "The focus shifts from solving the whole journey to taking a clear next step.",

  nextStepTitle: "Your next step",
  nextStepLead: "You do not need every answer today. This week, focus on:",
  nextStepActions: [
    {
      label:
        "Clarify your subtype and stage — or what results are still pending.",
    },
    {
      label:
        "Ask whether treatment should start before or after surgery for your situation.",
    },
    {
      label:
        "Prepare a short question list and keep your key reports together.",
    },
  ],
  nextStepCtaLabel: "Subtype testing decision",
  nextStepHref: BREAST_SUBTYPE,
  nextStepCtaMeta: "When receptor / HER2 results may change options",
  nextStepSecondaryCtaLabel: "Treatment sequencing",
  nextStepSecondaryHref: BREAST_SEQUENCING,
  nextStepSecondaryMeta: "Before vs after surgery",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Waiting on biology results?",
      question:
        "Do I need breast cancer subtype results before choosing treatment?",
      cta: "Subtype testing",
      href: BREAST_SUBTYPE,
    },
    {
      title: "Unsure about timing?",
      question:
        "Should breast cancer treatment start before or after surgery?",
      cta: "Treatment sequencing",
      href: BREAST_SEQUENCING,
    },
    {
      title: "Comparing surgery options?",
      question: "How should I compare lumpectomy and mastectomy?",
      cta: "Surgery choice",
      href: BREAST_SURGERY,
    },
  ],
};

/** Breast Cancer Entry — Subtype Testing (P0 #2) */
export const BREAST_SUBTYPE_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "Whether subtype results are needed before choosing treatment",
  exploring: "Whether biology results should arrive before locking a first plan",
  subtitle:
    "Could receptor, HER2, or genomic results change which options — or which sequence — you should discuss first?",
  relatedDecisions: [
    { label: "New Diagnosis", href: BREAST_NEW },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Systemic options", href: BREAST_SYSTEMIC },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: BREAST_NEW },
    { label: "Subtype", current: true },
    { label: "Sequencing", href: BREAST_SEQUENCING },
  ],

  triggersTitle: "When subtype testing may matter most",
  triggerGroups: [
    {
      heading: "New diagnosis",
      lead: "You may be asking:",
      items: [
        "Do we know my receptors and HER2 yet?",
        "Is important biology still missing before we choose?",
      ],
    },
    {
      heading: "Choosing treatment",
      lead: "You may be asking:",
      items: [
        "Could results change systemic options or sequencing?",
        "Should we wait for subtype before locking surgery?",
      ],
    },
    {
      heading: "Another opinion or unclear report",
      lead: "You may be asking:",
      items: [
        "Was subtype testing complete?",
        "Do I also need germline genetic counseling?",
      ],
    },
  ],

  whyTitle: "Why does subtype testing matter?",
  whyLead:
    "After a breast cancer diagnosis, many people want to move quickly toward surgery or treatment — and the first plan often depends on understanding the cancer’s biology.",
  whyBody: [],
  whyQuestions: [
    "Subtype testing looks for receptors (ER/PR), HER2, and related features of your cancer",
    "Some results open or change systemic and sequencing discussions",
    "Decisions are stronger when this information is available — or when waiting is clearly unnecessary",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "What is every biomarker in the textbook?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "Do I have the subtype information needed before locking my next step?",
  whyClose: [
    "Ask your care team which results are back, which are pending, and whether they could change options or timing.",
  ],

  whoNeedsTitle: "Does everyone need the same subtype tests?",
  whoNeedsLead:
    "Receptor and HER2 status are standard for invasive breast cancer. Additional assays (including some genomic tests) are not identical for every person or every decision.",
  whoNeedsBody: [
    "What is useful depends on stage, the decision in front of you, and what information is already available.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Whether ER/PR and HER2 are already complete and clear",
    "Stage and how quickly a first treatment decision is needed",
    "Whether a genomic assay would change chemo vs endocrine discussions",
    "Whether germline genetics (separate from subtype) could change surgery",
  ],
  whoNeedsClose:
    "A useful question: “For my situation, which biology results matter before we choose — and which can wait?”",

  doesNotDecideTitle: "Could subtype results change my treatment options?",
  doesNotDecideLead:
    "Results may change which approaches your team discusses. A subtype finding does not automatically mean one drug — and it is only one factor among several. Decisions still consider:",
  doesNotDecideItems: [
    "Stage and extent",
    "Overall health and life-stage priorities",
    "Whether treatment should start before or after surgery",
    "Treatment goals and trade-offs",
    "Personal preferences",
  ],
  doesNotDecideNotes: [
    "HR+, HER2+, and triple-negative each open different option families — not a single ranked “best” treatment.",
    "If results are incomplete, ask whether major sequencing or surgery should wait until the picture is clear.",
  ],
  doesNotDecideClose:
    "Subtype testing improves the information for discussion — it does not replace a conversation with your care team.",

  costTitle: "Cost and insurance — what to ask before extra assays are ordered",
  costLead:
    "Receptor/HER2 testing is usually part of standard pathology. Extra genomic assays vary by coverage. Use questions instead of guessing a price.",
  costItems: [
    "Which subtype or genomic tests are ordered, and why for this decision?",
    "What is usually covered, and what might we pay out of pocket?",
    "If cost is a barrier, can existing tissue still answer the key question?",
  ],

  mistakesTitle: "Common mistakes around subtype testing",
  mistakes: [
    {
      mistake: "Locking a plan before receptors and HER2 are clear",
      why: "Subtype often changes sequencing and which systemic families belong in the discussion.",
    },
    {
      mistake: "Confusing tumor subtype with germline genetics",
      why: "They answer different questions; both can matter before irreversible surgery.",
    },
    {
      mistake: "Treating subtype as the whole decision",
      why: "Stage, goals, and practical fit still shape the plan.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Subtype or genomic results are unclear or conflicting",
    "Sequencing recommendations differ",
    "You want confidence before surgery or systemic therapy",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Subtype Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Are my ER, PR, and HER2 results complete and clear?",
    "Would pending results change options or sequencing?",
    "Is a genomic assay relevant for my situation?",
    "Do I also need genetic counseling before surgery?",
  ],
  doctorGroups: [
    {
      heading: "About my subtype results",
      questions: [
        "What is my receptor and HER2 status, in plain language?",
        "Which results are still pending?",
        "Would those results change the options we discuss?",
      ],
    },
    {
      heading: "About the next decision",
      questions: [
        "Should we wait for subtype results before surgery or systemic therapy?",
        "Should treatment start before or after surgery for my subtype?",
        "Is a genomic assay relevant — and would it change chemo discussions?",
      ],
    },
    {
      heading: "About genetics vs subtype",
      questions: [
        "Do I need germline genetic counseling before a final surgery choice?",
        "How is that different from my tumor subtype testing?",
      ],
    },
  ],

  scenarioTitle: "Example: Waiting for subtype before locking surgery",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person is offered surgery dates before HER2 results return.",
    "They feel pressure to book immediately.",
    "Instead, they ask:",
  ],
  scenarioFocus: [
    "Which subtype results are still pending?",
    "Would those results change sequencing or systemic options?",
    "Is waiting a few days clinically safe?",
    "Do I also need genetic counseling before an irreversible surgery choice?",
  ],
  scenarioClose:
    "The focus shifts from racing to the OR to making sure the next step matches the biology.",

  nextStepTitle: "Your next step",
  nextStepLead: "If subtype information is incomplete or unclear:",
  nextStepActions: [
    {
      label:
        "Confirm which receptor / HER2 results are back and which are pending.",
    },
    {
      label:
        "Ask whether pending results would change sequencing or systemic options.",
    },
    {
      label:
        "Ask whether germline genetic counseling is separate and needed before surgery.",
    },
  ],
  nextStepCtaLabel: "Treatment sequencing",
  nextStepHref: BREAST_SEQUENCING,
  nextStepCtaMeta: "Before vs after surgery",
  nextStepSecondaryCtaLabel: "Systemic options by subtype",
  nextStepSecondaryHref: BREAST_SYSTEMIC,
  nextStepSecondaryMeta: "When biology results are in hand",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Still orienting after diagnosis?",
      question:
        "What decisions matter most after a new breast cancer diagnosis?",
      cta: "Newly diagnosed",
      href: BREAST_NEW,
    },
    {
      title: "Unsure about timing?",
      question:
        "Should breast cancer treatment start before or after surgery?",
      cta: "Treatment sequencing",
      href: BREAST_SEQUENCING,
    },
    {
      title: "Comparing surgery options?",
      question: "How should I compare lumpectomy and mastectomy?",
      cta: "Surgery choice",
      href: BREAST_SURGERY,
    },
  ],
};

export const BREAST_FLAGSHIP_BY_SLUG: Record<string, AiEntryFlagshipModules> = {
  [BREAST_NEWLY_DIAGNOSED_SLUG]: BREAST_NEWLY_DIAGNOSED_FLAGSHIP,
  [BREAST_SUBTYPE_SLUG]: BREAST_SUBTYPE_FLAGSHIP,
};
