import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import {
  BREAST_CARE_TEAM_SLUG,
  BREAST_GENETICS_SLUG,
  BREAST_METASTATIC_SLUG,
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_RECURRENCE_SLUG,
  BREAST_RADIATION_SLUG,
  BREAST_RECONSTRUCTION_SLUG,
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
const BREAST_GENETICS = `/questions/${BREAST_GENETICS_SLUG}`;
const BREAST_RECONSTRUCTION = `/questions/${BREAST_RECONSTRUCTION_SLUG}`;
const BREAST_RADIATION = `/questions/${BREAST_RADIATION_SLUG}`;
const BREAST_CARE_TEAM = `/questions/${BREAST_CARE_TEAM_SLUG}`;

/** Breast Cancer Orientation Entry — Newly Diagnosed (P0 #1) */
export const BREAST_NEWLY_DIAGNOSED_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "What happens next after a new diagnosis",
  exploring: "Orientation after diagnosis",
  subtitle:
    "A breast cancer diagnosis brings many questions. This guide helps you understand what information you need — especially subtype and sequencing — and how to prepare for conversations without solving the whole journey today.",
  relatedDecisions: [
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "Genetic counseling", href: BREAST_GENETICS },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", current: true },
    { label: "Subtype", href: BREAST_SUBTYPE },
    { label: "Genetics", href: BREAST_GENETICS },
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
      question: "How should I choose between lumpectomy and mastectomy?",
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
    { label: "Genetic counseling", href: BREAST_GENETICS },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Systemic options", href: BREAST_SYSTEMIC },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: BREAST_NEW },
    { label: "Subtype", current: true },
    { label: "Genetics", href: BREAST_GENETICS },
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
      question: "How should I choose between lumpectomy and mastectomy?",
      cta: "Surgery choice",
      href: BREAST_SURGERY,
    },
  ],
};

/** Breast Cancer Entry — Treatment Sequencing (P0 #3) */
export const BREAST_SEQUENCING_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "Whether treatment should start before or after surgery",
  exploring: "Neoadjuvant vs adjuvant sequencing",
  subtitle:
    "Before locking surgery or a drug plan, clarify which sequence fits your subtype, stage, and goals — and what would change that recommendation.",
  relatedDecisions: [
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "Surgery choice", href: BREAST_SURGERY },
    { label: "Systemic options", href: BREAST_SYSTEMIC },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: BREAST_NEW },
    { label: "Subtype", href: BREAST_SUBTYPE },
    { label: "Sequencing", current: true },
  ],

  triggersTitle: "When sequencing may matter most",
  triggerGroups: [
    {
      heading: "After subtype results",
      lead: "You may be asking:",
      items: [
        "Should medicines start before surgery?",
        "Or should surgery happen first?",
      ],
    },
    {
      heading: "Comparing treatment options",
      lead: "You may be asking:",
      items: [
        "What is my team trying to achieve with each sequence?",
        "Would response before surgery change later decisions?",
      ],
    },
    {
      heading: "Unsure about the plan",
      lead: "You may be asking:",
      items: [
        "Why was this sequence recommended for me?",
        "Would a second opinion help before locking timing?",
      ],
    },
  ],

  whyTitle: "Why does treatment sequencing matter?",
  whyLead:
    "Many people hear “chemo before surgery” or “surgery first” without a clear comparison frame. Sequencing is a real fork — not a minor calendar detail.",
  whyBody: [],
  whyQuestions: [
    "Some people start systemic therapy before surgery; others have surgery first",
    "The sequence can affect response assessment, surgery options, and timeline",
    "Subtype and stage often shape which sequence belongs in the discussion",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which approach sounds stronger online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "For my subtype and stage, should treatment start before or after surgery — and what would change that?",
  whyClose: [
    "Ask your care team what each sequence is trying to achieve for you.",
  ],

  whoNeedsTitle: "Does everyone face the same sequencing decision?",
  whoNeedsLead:
    "Not every breast cancer plan includes a close call between medicines-first and surgery-first. Whether sequencing is a live decision depends on your situation.",
  whoNeedsBody: [
    "What matters is whether both sequences are realistic options — and what information would tip the choice.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Subtype (HR+, HER2+, triple-negative, and related biology)",
    "Stage, tumor size, and nodal status",
    "Goals — shrink, assess response, enable surgery options, or refine pathology first",
    "Whether genetics could change the operation itself",
    "Urgency, symptoms, and practical fit",
  ],
  whoNeedsClose:
    "A useful question: “Is sequencing still open for me — and what would lock one path?”",

  doesNotDecideTitle: "How should I compare before-surgery vs after-surgery paths?",
  doesNotDecideLead:
    "Compare sequences by goals and fit — not by fear or online “aggressiveness.” Both paths still consider:",
  doesNotDecideItems: [
    "What the sequence is trying to achieve",
    "What information you gain (or wait for)",
    "How surgery options may change",
    "Timeline and daily-life burden",
    "What would change the recommendation",
  ],
  doesNotDecideNotes: [
    "Neoadjuvant therapy is not automatically “more treatment.”",
    "Surgery first is not automatically “less cancer care” — systemic therapy often follows.",
  ],
  doesNotDecideClose:
    "Sequencing improves the order of decisions — it does not replace a conversation with your care team.",

  costTitle: "Timeline, logistics, and practical fit",
  costLead:
    "Sequencing changes when infusions, surgery, recovery, and time away from work happen. Ask about the calendar, not only the drug names.",
  costItems: [
    "What is the expected timeline for each sequence?",
    "How would work, family, fertility, or travel be affected?",
    "What support would I need during medicines-first vs surgery-first?",
  ],

  mistakesTitle: "Common mistakes around sequencing",
  mistakes: [
    {
      mistake: "Treating before vs after as a strength contest",
      why: "The better sequence fits goals and biology — not online aggression.",
    },
    {
      mistake: "Locking surgery before subtype or sequencing is clear",
      why: "Biology and timing often change what the operation means.",
    },
    {
      mistake: "Assuming surgery first means no systemic therapy",
      why: "Many people still need medicines after surgery.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Recommendations differ on before-surgery vs after-surgery sequencing",
    "Subtype, stage, or genetics leave the fork unclear",
    "You want confidence before locking an irreversible local plan",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Sequencing Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "For my subtype and stage, should treatment start before or after surgery?",
    "What would change that recommendation?",
    "How will we know if neoadjuvant therapy is working — if that path is chosen?",
    "Is any key information still pending before we lock the sequence?",
  ],
  doctorGroups: [
    {
      heading: "About the recommended sequence",
      questions: [
        "Why is this sequence recommended for my situation?",
        "What is each path trying to achieve?",
        "What would tip the decision the other way?",
      ],
    },
    {
      heading: "About information and timing",
      questions: [
        "Are subtype and staging results complete enough?",
        "Should genetic counseling happen before a final surgery choice?",
        "What is the expected timeline for each sequence?",
      ],
    },
    {
      heading: "About what comes next",
      questions: [
        "If medicines come first, how do we monitor response?",
        "If surgery comes first, what systemic therapy may follow?",
        "How does this sequence affect lumpectomy vs mastectomy options?",
      ],
    },
  ],

  scenarioTitle: "Example: Clarifying medicines-first vs surgery-first",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person is told they may have chemo before surgery — or surgery soon.",
    "Online searches make “more treatment first” sound automatically better.",
    "Instead, they ask:",
  ],
  scenarioFocus: [
    "For my subtype and stage, what is each sequence trying to achieve?",
    "Would response before surgery change later decisions?",
    "What information is still pending?",
    "What would change the recommendation?",
  ],
  scenarioClose:
    "The focus shifts from picking the “stronger” path to choosing the sequence that fits their cancer and goals.",

  nextStepTitle: "Your next step",
  nextStepLead: "If sequencing is still open:",
  nextStepActions: [
    {
      label:
        "Confirm subtype and staging information are complete enough for this fork.",
    },
    {
      label:
        "Ask which sequence is recommended — and what would change that recommendation.",
    },
    {
      label:
        "Clarify timeline and how the sequence affects surgery options next.",
    },
  ],
  nextStepCtaLabel: "Surgery choice",
  nextStepHref: BREAST_SURGERY,
  nextStepCtaMeta: "Lumpectomy vs mastectomy",
  nextStepSecondaryCtaLabel: "Systemic options by subtype",
  nextStepSecondaryHref: BREAST_SYSTEMIC,
  nextStepSecondaryMeta: "When the sequence is clearer",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Still waiting on biology?",
      question:
        "Do I need breast cancer subtype results before choosing treatment?",
      cta: "Subtype testing",
      href: BREAST_SUBTYPE,
    },
    {
      title: "Comparing surgery options?",
      question: "How should I choose between lumpectomy and mastectomy?",
      cta: "Surgery choice",
      href: BREAST_SURGERY,
    },
    {
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
  ],
};

/** Breast Cancer Entry — Surgery Choice (P0 #4) */
export const BREAST_SURGERY_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "How to choose between lumpectomy and mastectomy",
  exploring: "Breast-conserving surgery vs mastectomy",
  subtitle:
    "When both options may be medically reasonable, compare cancer fit and personal priorities — genetics, radiation, reconstruction, and how you want to live afterward.",
  relatedDecisions: [
    { label: "Radiation decisions", href: BREAST_RADIATION },
    { label: "Reconstruction timing", href: BREAST_RECONSTRUCTION },
    { label: "Genetic counseling", href: BREAST_GENETICS },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "Second opinion", href: BREAST_SECOND },
    { label: "Systemic options", href: BREAST_SYSTEMIC },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Surgery", current: true },
    { label: "Radiation", href: BREAST_RADIATION },
    { label: "Reconstruction", href: BREAST_RECONSTRUCTION },
  ],

  triggersTitle: "When surgery choice may matter most",
  triggerGroups: [
    {
      heading: "Comparing treatment options",
      lead: "You may be asking:",
      items: [
        "Am I a candidate for lumpectomy, mastectomy, or both?",
        "Is one option safer — or do they offer similar control?",
      ],
    },
    {
      heading: "Genetics or reconstruction questions",
      lead: "You may be asking:",
      items: [
        "Would genetic results change the operation?",
        "When would reconstruction happen if I choose mastectomy?",
      ],
    },
    {
      heading: "Unsure about the plan",
      lead: "You may be asking:",
      items: [
        "Should I get another surgical opinion before locking a date?",
        "What would change the recommendation either way?",
      ],
    },
  ],

  whyTitle: "Why does the surgery choice matter?",
  whyLead:
    "People often hear that both operations can be “fine” — and still feel stuck. Two oncologically sound options can still feel very different personally.",
  whyBody: [],
  whyQuestions: [
    "Lumpectomy usually keeps more of the breast and is typically followed by radiation",
    "Mastectomy removes more breast tissue and may or may not need radiation afterward",
    "Genetics, reconstruction timing, and personal priorities often tip the choice",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which surgery sounds stronger online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "Am I a candidate for both — and which path fits my medical picture and priorities?",
  whyClose: [
    "Ask your care team what each option would achieve for you in plain language.",
  ],

  whoNeedsTitle: "Is everyone choosing between these two operations?",
  whoNeedsLead:
    "Not always. Some people are clearly better suited to one path. Others face a real fork between conservation and mastectomy.",
  whoNeedsBody: [
    "What matters is whether both options are medically reasonable for you — and what information would tip the choice.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Tumor size relative to breast size and extent of disease",
    "Whether radiation after lumpectomy is feasible and acceptable",
    "Genetic risk and future risk-reduction goals",
    "Reconstruction preferences and timing",
    "Whether sequencing (medicines before surgery) could change options",
  ],
  whoNeedsClose:
    "A useful question: “Are both options on the table for me — or is one clearly preferred medically?”",

  doesNotDecideTitle: "How should I compare lumpectomy and mastectomy?",
  doesNotDecideLead:
    "Compare by medical fit and lived priorities. For appropriate candidates, cancer control can be similar — decisions still consider:",
  doesNotDecideItems: [
    "Candidacy for breast-conserving surgery",
    "Radiation course after lumpectomy (and whether mastectomy still needs radiation)",
    "Genetic counseling results when relevant",
    "Reconstruction timing and body-image priorities",
    "Recovery, work, and daily-life trade-offs",
  ],
  doesNotDecideNotes: [
    "Mastectomy is not automatically safer for every early breast cancer.",
    "Lumpectomy is not automatically “less treatment” — radiation is usually part of the package.",
  ],
  doesNotDecideClose:
    "Surgery choice improves the fit of the local plan — it does not replace a conversation with your care team.",

  costTitle: "Recovery, radiation time, and practical fit",
  costLead:
    "The calendar differs: lumpectomy often means a shorter operation followed by weeks of radiation; mastectomy recovery may be longer, especially with reconstruction.",
  costItems: [
    "What does recovery look like for each option in the first weeks?",
    "If I choose lumpectomy, what radiation schedule should I expect?",
    "How would work, caregiving, or travel be affected?",
  ],

  mistakesTitle: "Common mistakes around surgery choice",
  mistakes: [
    {
      mistake: "Assuming mastectomy is always safer",
      why: "For many candidates, conservation plus radiation can offer similar control — ask for your situation.",
    },
    {
      mistake: "Choosing before genetics or sequencing are clear",
      why: "Either can change what operation makes sense.",
    },
    {
      mistake: "Treating reconstruction as an afterthought only",
      why: "Timing can affect planning — even if you are unsure about reconstructing.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "You are a candidate for both operations and feel stuck",
    "Genetics, reconstruction, or radiation advice conflicts",
    "You want confidence before an irreversible local plan",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Surgery Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Am I a candidate for lumpectomy, mastectomy, or both?",
    "What would change the recommendation either way?",
    "Do I need genetic counseling before a final surgery choice?",
    "What would radiation and reconstruction look like for each path?",
  ],
  doctorGroups: [
    {
      heading: "About candidacy",
      questions: [
        "Are both operations medically reasonable for me?",
        "What tumor or imaging findings tip the choice?",
        "Would medicines before surgery change my options?",
      ],
    },
    {
      heading: "About genetics and the other breast",
      questions: [
        "Do I need genetic counseling before locking surgery?",
        "Is surgery on the other breast recommended, optional, or not needed?",
        "How would a positive genetic result change the plan?",
      ],
    },
    {
      heading: "About recovery and next steps",
      questions: [
        "What does recovery look like for each option?",
        "If I choose lumpectomy, what does radiation involve?",
        "If I choose mastectomy, what reconstruction timing is realistic?",
      ],
    },
  ],

  scenarioTitle: "Example: Choosing when both surgeries are options",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person is told both lumpectomy and mastectomy could be reasonable.",
    "Fear pushes them toward “remove everything.”",
    "Instead, they ask:",
  ],
  scenarioFocus: [
    "Am I a true candidate for both — with similar cancer control?",
    "What would radiation after lumpectomy involve?",
    "Do I need genetics before locking the operation?",
    "What are my priorities for body image, recovery, and risk reduction?",
  ],
  scenarioClose:
    "The focus shifts from fear of the “weaker” surgery to a choice that matches medical fit and personal priorities.",

  nextStepTitle: "Your next step",
  nextStepLead: "If surgery choice is still open:",
  nextStepActions: [
    {
      label:
        "Confirm whether both lumpectomy and mastectomy are medically reasonable for you.",
    },
    {
      label:
        "Ask whether genetics, sequencing, or radiation details should be clear before locking a date.",
    },
    {
      label:
        "Write down your priorities — then use them in the next surgical conversation.",
    },
  ],
  nextStepCtaLabel: "Second opinion",
  nextStepHref: BREAST_SECOND,
  nextStepCtaMeta: "Before locking major surgery",
  nextStepSecondaryCtaLabel: "Treatment sequencing",
  nextStepSecondaryHref: BREAST_SEQUENCING,
  nextStepSecondaryMeta: "If timing before vs after surgery is still open",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Unsure about timing?",
      question:
        "Should breast cancer treatment start before or after surgery?",
      cta: "Treatment sequencing",
      href: BREAST_SEQUENCING,
    },
    {
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
    {
      title: "Still clarifying biology?",
      question:
        "Do I need breast cancer subtype results before choosing treatment?",
      cta: "Subtype testing",
      href: BREAST_SUBTYPE,
    },
  ],
};

/** Breast Cancer Entry — Second Opinion (P0 #5) */
export const BREAST_SECOND_OPINION_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "Whether a second opinion may help before major treatment",
  exploring: "Second opinion before surgery or systemic therapy",
  subtitle:
    "Before locking surgery or a major systemic plan, decide whether another focused review would add confidence — confirmation included.",
  relatedDecisions: [
    { label: "Care team / center", href: BREAST_CARE_TEAM },
    { label: "Surgery choice", href: BREAST_SURGERY },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "Systemic options", href: BREAST_SYSTEMIC },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Sequencing", href: BREAST_SEQUENCING },
    { label: "Surgery", href: BREAST_SURGERY },
    { label: "Second opinion", current: true },
  ],

  triggersTitle: "When a second opinion may matter most",
  triggerGroups: [
    {
      heading: "Before major surgery",
      lead: "You may be asking:",
      items: [
        "Am I choosing the right operation?",
        "Would genetics or reconstruction change the plan?",
      ],
    },
    {
      heading: "Unsure about sequencing or systemic therapy",
      lead: "You may be asking:",
      items: [
        "Should medicines start before or after surgery?",
        "Do the systemic options fit my subtype?",
      ],
    },
    {
      heading: "Conflicting advice",
      lead: "You may be asking:",
      items: [
        "Why do two recommendations differ?",
        "What information is each plan assuming?",
      ],
    },
  ],

  whyTitle: "Why consider a second opinion for breast cancer?",
  whyLead:
    "Breast cancer plans often combine subtype biology, sequencing, surgery, and personal priorities. Another review can add confidence before an irreversible step.",
  whyBody: [],
  whyQuestions: [
    "Another opinion may confirm the current plan — confirmation is useful",
    "It may identify missing subtype, genetics, or imaging information",
    "It may clarify surgery or sequencing when recommendations conflict",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "How do I prove my doctor is wrong?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "What decision do I want reviewed before the next irreversible step?",
  whyClose: [
    "Name the decision. Then ask whether there is time for a focused review.",
  ],

  whoNeedsTitle: "Does everyone need a second opinion?",
  whoNeedsLead:
    "No. Many people move forward confidently with one clear multidisciplinary plan. A second opinion is most useful when uncertainty or irreversibility is high.",
  whoNeedsBody: [
    "What matters is whether another review would change what you understand — or what you would do next.",
  ],
  whoNeedsDependsIntro: "It may be especially useful when:",
  whoNeedsDependsOn: [
    "Surgery choice feels borderline or conflicting",
    "Neoadjuvant vs adjuvant sequencing is unclear",
    "Genetics or reconstruction could change the operation",
    "Pathology, imaging, or subtype results leave open questions",
    "You want confidence before locking a major step",
  ],
  whoNeedsClose:
    "A useful question: “If I do not get another review, what uncertainty am I accepting?”",

  doesNotDecideTitle: "What could another opinion change?",
  doesNotDecideLead:
    "A second opinion may confirm, clarify, expand options, or identify gaps. It still depends on:",
  doesNotDecideItems: [
    "The records and question you bring",
    "Your subtype, stage, and surgical candidacy",
    "Whether timing allows a careful review",
    "Your goals and practical constraints",
  ],
  doesNotDecideNotes: [
    "Changing the plan is not required for the review to be valuable.",
    "A vague “look at everything” request is less useful than one named decision.",
  ],
  doesNotDecideClose:
    "Second opinions improve confidence in the next step — they do not replace ongoing care conversations.",

  costTitle: "Cost, coverage, and visit type",
  costLead:
    "Fees and coverage vary. Ask before you assume a second opinion is unaffordable — or free.",
  costItems: [
    "Is this visit covered as a consultation / second opinion?",
    "Do slide or imaging re-reviews add cost?",
    "Can a remote review answer my question, or do I need to travel?",
  ],

  mistakesTitle: "Common mistakes around second opinions",
  mistakes: [
    {
      mistake: "Waiting until after irreversible surgery",
      why: "Many breast reviews are most useful before locking the local plan.",
    },
    {
      mistake: "Sending incomplete records",
      why: "Without subtype, imaging, and the current plan, the review stays vague.",
    },
    {
      mistake: "Seeking only agreement, not a clear question",
      why: "Name what would change — confirmation is useful when the question is clear.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "Consider a focused review when:",
  secondOpinionWhen: [
    "Surgery or sequencing recommendations conflict",
    "The next step feels irreversible and you want confidence",
    "Key information still seems incomplete",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Surgery choice",
  secondOpinionHref: BREAST_SURGERY,

  doctorTitle: "Second Opinion Conversation Checklist",
  doctorLeaveTitle: "Before leaving the review, ask:",
  doctorLeaveItems: [
    "Do you agree with the current plan — and why?",
    "What would you change, if anything?",
    "Is any key information still missing before surgery or systemic therapy?",
    "How urgent is the next step on the calendar?",
  ],
  doctorGroups: [
    {
      heading: "About the decision under review",
      questions: [
        "What decision are we focusing on today?",
        "For my subtype and stage, is the recommended sequence/surgery reasonable?",
        "What would tip you toward a different approach?",
      ],
    },
    {
      heading: "About information gaps",
      questions: [
        "Should pathology, imaging, or subtype reporting be re-reviewed?",
        "Do I need genetic counseling before a final surgery choice?",
        "Are clinical trial options relevant before I lock a plan?",
      ],
    },
    {
      heading: "About next steps",
      questions: [
        "Can I continue with my current team after this review?",
        "What should I take back to my primary care team in writing?",
        "How soon should treatment proceed if we confirm the plan?",
      ],
    },
  ],

  scenarioTitle: "Example: Review before locking surgery",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person is offered a surgery date within two weeks.",
    "They feel unsure whether lumpectomy or mastectomy fits better.",
    "Instead of canceling care, they ask:",
  ],
  scenarioFocus: [
    "What decision do I want reviewed before the date?",
    "Is there time for a focused second opinion?",
    "Which records does the reviewing team need?",
    "What would change the recommendation either way?",
  ],
  scenarioClose:
    "The focus shifts from rushing or distrusting to getting confidence before an irreversible step.",

  nextStepTitle: "Your next step",
  nextStepLead: "If you are considering another review:",
  nextStepActions: [
    {
      label:
        "Name the decision you want reviewed (surgery, sequencing, or systemic plan).",
    },
    {
      label:
        "Gather pathology, imaging, and the current recommendation — plus one sentence question.",
    },
    {
      label:
        "Ask how urgent the calendar is before booking the review.",
    },
  ],
  nextStepCtaLabel: "Systemic options by subtype",
  nextStepHref: BREAST_SYSTEMIC,
  nextStepCtaMeta: "When the plan involves medicines",
  nextStepSecondaryCtaLabel: "Surgery choice",
  nextStepSecondaryHref: BREAST_SURGERY,
  nextStepSecondaryMeta: "When the fork is lumpectomy vs mastectomy",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Choosing who coordinates care?",
      question: "How do I choose a breast cancer care team or center?",
      cta: "Care team / center",
      href: BREAST_CARE_TEAM,
    },
    {
      title: "Comparing surgery options?",
      question: "How should I choose between lumpectomy and mastectomy?",
      cta: "Surgery choice",
      href: BREAST_SURGERY,
    },
    {
      title: "Unsure about timing?",
      question:
        "Should breast cancer treatment start before or after surgery?",
      cta: "Treatment sequencing",
      href: BREAST_SEQUENCING,
    },
  ],
};

/** Breast Cancer Entry — Systemic Therapy by Subtype (P0 #6) */
export const BREAST_SYSTEMIC_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "How to choose systemic therapy for my subtype",
  exploring: "Systemic options forked by HR+ / HER2+ / TNBC",
  subtitle:
    "Start from your subtype, then compare option families, goals, sequencing, and trade-offs — not a flat ranking of drug names.",
  relatedDecisions: [
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Surgery choice", href: BREAST_SURGERY },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Subtype", href: BREAST_SUBTYPE },
    { label: "Sequencing", href: BREAST_SEQUENCING },
    { label: "Systemic options", current: true },
  ],

  triggersTitle: "When systemic options may matter most",
  triggerGroups: [
    {
      heading: "Subtype results are in",
      lead: "You may be asking:",
      items: [
        "Which medicines fit my HR+ / HER2+ / TNBC subtype?",
        "Do I need chemo, endocrine therapy, targeted therapy, or a combination?",
      ],
    },
    {
      heading: "Comparing treatment options",
      lead: "You may be asking:",
      items: [
        "What is each approach trying to achieve?",
        "Should medicines start before or after surgery?",
      ],
    },
    {
      heading: "Unsure about the plan",
      lead: "You may be asking:",
      items: [
        "Why this regimen and not another?",
        "Would a second opinion help before locking systemic therapy?",
      ],
    },
  ],

  whyTitle: "Why do systemic options fork by subtype?",
  whyLead:
    "Breast cancer systemic therapy is not one conversation. Receptor and HER2 status usually decide which option families belong on the table.",
  whyBody: [],
  whyQuestions: [
    "HR+, HER2+, and TNBC open different medicine families",
    "Goals and sequencing still shape which option fits inside that family",
    "Drug names matter less than fit until the subtype fork is clear",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which drug is strongest online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "For my subtype, which systemic approaches fit — and what is each trying to achieve?",
  whyClose: [
    "Confirm your subtype in plain language, then compare option families with your team.",
  ],

  whoNeedsTitle: "Does everyone face the same systemic menu?",
  whoNeedsLead:
    "No. Your subtype, stage, overall health, fertility goals, and sequencing needs change which options are realistic.",
  whoNeedsBody: [
    "What matters is which families apply to you — and what trade-offs you are comparing inside that fork.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "HR+ / HER2+ / TNBC (and combinations like HR+/HER2+)",
    "Stage, nodes, and recurrence-risk context",
    "Whether therapy is neoadjuvant or adjuvant",
    "Genomic assays for some early HR+ cancers",
    "Side effects, fertility, and daily-life fit",
  ],
  whoNeedsClose:
    "A useful question: “Which option families apply to my subtype — and which can we set aside?”",

  doesNotDecideTitle: "How should I compare systemic options?",
  doesNotDecideLead:
    "Compare by subtype fork, goals, and trade-offs. Decisions still consider:",
  doesNotDecideItems: [
    "Which medicine families fit your subtype",
    "What each approach is trying to achieve",
    "Before-surgery vs after-surgery sequencing",
    "Side effects, monitoring, and duration",
    "Fertility and practical fit",
  ],
  doesNotDecideNotes: [
    "A longer or “stronger-sounding” regimen is not automatically better.",
    "If subtype results are incomplete, ask whether major systemic choices should wait.",
  ],
  doesNotDecideClose:
    "Systemic comparison improves the medicine plan — it does not replace a conversation with your care team.",

  costTitle: "Duration, visits, and practical burden",
  costLead:
    "Systemic plans differ in visit load, lab monitoring, and how long therapy continues — especially endocrine therapy.",
  costItems: [
    "How long would each part of the plan last?",
    "What does a typical treatment week look like?",
    "How will costs and coverage questions be handled for this regimen?",
  ],

  mistakesTitle: "Common mistakes around systemic options",
  mistakes: [
    {
      mistake: "Comparing drug names before knowing the subtype fork",
      why: "HR+, HER2+, and TNBC open different option families.",
    },
    {
      mistake: "Assuming more chemotherapy is always better care",
      why: "Fit and goals matter more than maximum intensity.",
    },
    {
      mistake: "Ignoring sequencing and fertility until after the plan is locked",
      why: "Timing questions belong in the systemic decision.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Subtype-based recommendations conflict",
    "Sequencing and systemic choices feel irreversible together",
    "You want confidence before starting a major regimen",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Systemic Therapy Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "In plain language, what is my subtype — and which option families fit it?",
    "What is the goal of the systemic plan you recommend?",
    "Should therapy start before or after surgery?",
    "What side effects and monitoring should I expect?",
  ],
  doctorGroups: [
    {
      heading: "About my subtype fork",
      questions: [
        "Am I HR+, HER2+, TNBC — or a combination?",
        "Which medicine families apply — and which do not?",
        "Would a genomic assay change chemo discussions for me?",
      ],
    },
    {
      heading: "About goals and sequencing",
      questions: [
        "What is systemic therapy trying to achieve in my sequence?",
        "Should medicines start before or after surgery?",
        "What would change the recommended regimen?",
      ],
    },
    {
      heading: "About living with the plan",
      questions: [
        "What side effects are most important to watch for?",
        "How long will treatment last, and what does a typical week look like?",
        "Could this plan affect fertility or menopause timing?",
      ],
    },
  ],

  scenarioTitle: "Example: Comparing options after subtype results",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person receives subtype results and a long list of drug names.",
    "Online searches make every regimen sound mandatory.",
    "Instead, they ask:",
  ],
  scenarioFocus: [
    "Which option families fit my subtype?",
    "What is each approach trying to achieve?",
    "Should medicines start before or after surgery?",
    "What would change the recommendation?",
  ],
  scenarioClose:
    "The focus shifts from memorizing drug brands to choosing the systemic path that fits their subtype and goals.",

  nextStepTitle: "Your next step",
  nextStepLead: "If systemic options are still open:",
  nextStepActions: [
    {
      label:
        "Confirm your subtype in plain language and which option families apply.",
    },
    {
      label:
        "Ask the goal of the recommended plan and whether sequencing is settled.",
    },
    {
      label:
        "Write down side-effect, fertility, and calendar questions before the next visit.",
    },
  ],
  nextStepCtaLabel: "Treatment sequencing",
  nextStepHref: BREAST_SEQUENCING,
  nextStepCtaMeta: "Before vs after surgery",
  nextStepSecondaryCtaLabel: "Second opinion",
  nextStepSecondaryHref: BREAST_SECOND,
  nextStepSecondaryMeta: "Before locking a major regimen",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Still clarifying biology?",
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
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
  ],
};

/** Breast Cancer Entry — Genetics / BRCA counseling before surgery (P1 first) */
export const BREAST_GENETICS_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment:
    "Whether genetic counseling / BRCA-class testing should happen before surgery",
  exploring: "Germline genetics vs surgery timing",
  subtitle:
    "Ask whether inherited-risk counseling should happen before you lock an operation — and how results may change lumpectomy, mastectomy, or surgery on the other breast.",
  relatedDecisions: [
    { label: "Surgery choice", href: BREAST_SURGERY },
    { label: "Reconstruction timing", href: BREAST_RECONSTRUCTION },
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "New Diagnosis", href: BREAST_NEW },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Subtype", href: BREAST_SUBTYPE },
    { label: "Genetics", current: true },
    { label: "Surgery", href: BREAST_SURGERY },
  ],

  triggersTitle: "When genetic counseling may matter most",
  triggerGroups: [
    {
      heading: "Before locking surgery",
      lead: "You may be asking:",
      items: [
        "Do I need genetic counseling before a final surgery choice?",
        "Would a BRCA-class result change the operation?",
      ],
    },
    {
      heading: "Family history or risk factors",
      lead: "You may be asking:",
      items: [
        "Does my family history mean I should be tested?",
        "What would results mean for relatives?",
      ],
    },
    {
      heading: "Considering mastectomy or the other breast",
      lead: "You may be asking:",
      items: [
        "Should I wait for genetics before choosing mastectomy?",
        "Is surgery on the other breast a medical recommendation or optional?",
      ],
    },
  ],

  whyTitle: "Why does genetic counseling before surgery matter?",
  whyLead:
    "Germline results can change an irreversible local plan. Waiting may be wise when a result would reshape the operation — and unnecessary delay when it would not.",
  whyBody: [],
  whyQuestions: [
    "Counseling clarifies whether inherited-risk testing is appropriate for you",
    "A pathogenic result may change mastectomy or contralateral surgery discussions",
    "Tumor subtype is a different conversation — both can matter",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which gene list should I memorize online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "Do I need counseling before surgery — would a result change the operation — and is it safe to wait?",
  whyClose: [
    "Ask your care team for a clear wait / don’t-wait answer tied to your surgery plan.",
  ],

  whoNeedsTitle: "Does everyone need genetic counseling before surgery?",
  whoNeedsLead:
    "No. Many people proceed without germline testing changing the operation. Others should counsel first because results could reshape surgery.",
  whoNeedsBody: [
    "Criteria depend on personal history, family history, cancer features, and what surgery is being considered.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Family history and known familial mutations",
    "Age and tumor features (including some triple-negative contexts)",
    "Whether you are choosing between conservation and mastectomy",
    "Whether surgery on the other breast is under discussion",
    "How urgent your cancer timeline is",
  ],
  whoNeedsClose:
    "A useful question: “For my situation, should genetics be clear before we lock surgery?”",

  doesNotDecideTitle: "How should I use genetics in the surgery decision?",
  doesNotDecideLead:
    "Use counseling to answer timing and impact — not to pick a surgery by gene name alone. Compare:",
  doesNotDecideItems: [
    "Whether counseling/testing is recommended for you",
    "Whether a pathogenic result would change the operation",
    "What a negative result or VUS would (and would not) change",
    "Whether waiting is safe while results are pending",
    "How family implications fit without delaying urgent care",
  ],
  doesNotDecideNotes: [
    "A VUS is not the same as a pathogenic mutation.",
    "Genetics does not replace subtype, staging, or sequencing conversations.",
  ],
  doesNotDecideClose:
    "Genetics improves the fit of surgery timing — it does not replace your surgical consultation.",

  costTitle: "Timeline, access, and what can proceed in parallel",
  costLead:
    "Counseling and lab turnaround can take days to weeks. The practical question is what must wait versus what can start now.",
  costItems: [
    "How soon can counseling happen, and how long do results take?",
    "What parts of staging or systemic planning can proceed in parallel?",
    "If results are delayed, what surgery plan remains safe?",
  ],

  mistakesTitle: "Common mistakes around genetics before surgery",
  mistakes: [
    {
      mistake: "Confusing tumor subtype with germline genetics",
      why: "Receptor/HER2 status is not a BRCA answer.",
    },
    {
      mistake: "Locking irreversible surgery before results that would change it",
      why: "Ask whether waiting is warranted for your operation.",
    },
    {
      mistake: "Treating a VUS like a positive result",
      why: "Uncertain variants usually should not drive surgery alone.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Genetics advice and surgery recommendations conflict",
    "You are considering bilateral or risk-reducing surgery",
    "You want confidence before an irreversible local plan",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Genetics Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Do I need genetic counseling before a final surgery choice?",
    "Would a positive result change lumpectomy vs mastectomy?",
    "Is it safe to wait for results — and what can proceed now?",
    "How would results affect surgery on the other breast?",
  ],
  doctorGroups: [
    {
      heading: "About whether I need counseling",
      questions: [
        "Do I meet criteria for genetic counseling?",
        "Is counseling recommended even without a strong family history?",
        "How is this different from my tumor subtype results?",
      ],
    },
    {
      heading: "About surgery impact",
      questions: [
        "How would a pathogenic result change my operation?",
        "What would a negative result or VUS mean for surgery?",
        "Is contralateral surgery recommended, optional, or not needed?",
      ],
    },
    {
      heading: "About timing",
      questions: [
        "How soon can counseling and results happen?",
        "What is safe to start while we wait?",
        "Who will update the surgical plan when results arrive?",
      ],
    },
  ],

  scenarioTitle: "Example: Waiting for genetics before locking surgery",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person is offered both lumpectomy and mastectomy.",
    "Family history raises the question of inherited risk.",
    "Instead of locking a date immediately, they ask:",
  ],
  scenarioFocus: [
    "Do I need genetic counseling before a final surgery choice?",
    "Would a positive result change the operation or the other breast?",
    "Is it safe to wait — and what can proceed in parallel?",
  ],
  scenarioClose:
    "The focus shifts from rushing a surgery date to making sure inherited-risk information that could change the operation is handled on purpose.",

  nextStepTitle: "Your next step",
  nextStepLead: "If genetics may affect surgery:",
  nextStepActions: [
    {
      label:
        "Ask whether genetic counseling is recommended before you lock surgery.",
    },
    {
      label:
        "Ask whether a result would change the operation — and whether waiting is safe.",
    },
    {
      label:
        "Get a referral timeline, then return to the surgery decision with clearer timing.",
    },
  ],
  nextStepCtaLabel: "Surgery choice",
  nextStepHref: BREAST_SURGERY,
  nextStepCtaMeta: "After genetics timing is clearer",
  nextStepSecondaryCtaLabel: "Subtype testing",
  nextStepSecondaryHref: BREAST_SUBTYPE,
  nextStepSecondaryMeta: "If tumor biology is still incomplete",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Choosing the operation?",
      question: "How should I compare lumpectomy and mastectomy?",
      cta: "Surgery decision",
      href: BREAST_SURGERY,
    },
    {
      title: "Still sorting biology?",
      question:
        "Do I need my breast cancer subtype results before choosing treatment?",
      cta: "Subtype testing",
      href: BREAST_SUBTYPE,
    },
    {
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
  ],
};

/** Breast Cancer Entry — Reconstruction timing & choices (P1 #8) */
export const BREAST_RECONSTRUCTION_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment:
    "How reconstruction timing and choices fit into the cancer decision",
  exploring: "Immediate vs delayed vs none — inside the cancer plan",
  subtitle:
    "Ask how reconstruction timing and method families fit mastectomy, radiation, recovery, and your goals — not which photo looks best online.",
  relatedDecisions: [
    { label: "Surgery choice", href: BREAST_SURGERY },
    { label: "Radiation decisions", href: BREAST_RADIATION },
    { label: "Genetic counseling", href: BREAST_GENETICS },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Surgery", href: BREAST_SURGERY },
    { label: "Radiation", href: BREAST_RADIATION },
    { label: "Reconstruction", current: true },
  ],

  triggersTitle: "When reconstruction timing may matter most",
  triggerGroups: [
    {
      heading: "Considering mastectomy",
      lead: "You may be asking:",
      items: [
        "Would reconstruction happen at the same time or later?",
        "What if I am not sure I want reconstruction?",
      ],
    },
    {
      heading: "Radiation or systemic therapy may follow",
      lead: "You may be asking:",
      items: [
        "Would radiation change reconstruction timing or method?",
        "Could reconstruction delay needed cancer treatment?",
      ],
    },
    {
      heading: "Balancing recovery with life",
      lead: "You may be asking:",
      items: [
        "How many operations might the full sequence involve?",
        "What does recovery look like for implant vs tissue options?",
      ],
    },
  ],

  whyTitle: "Why does reconstruction timing matter in the cancer plan?",
  whyLead:
    "Reconstruction is optional — but when it is on the table, timing can change recovery, radiation fit, and how many operations you need.",
  whyBody: [],
  whyQuestions: [
    "Immediate, delayed, and no reconstruction are all real paths",
    "Radiation and systemic therapy often reshape what timing is safest",
    "Method families (implant vs tissue) matter after timing is clearer",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which reconstruction photo looks best online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "Which timing and method family fit my cancer plan, radiation likelihood, and goals?",
  whyClose: [
    "Ask for a radiation-aware and recovery-aware answer before locking mastectomy timing.",
  ],

  whoNeedsTitle: "Does everyone facing mastectomy need to decide reconstruction now?",
  whoNeedsLead:
    "No. Some people choose a plan early; others keep options open with delayed reconstruction; others choose not to reconstruct.",
  whoNeedsBody: [
    "What matters is knowing which paths are medically realistic — and what would change if radiation or genetics enters the plan.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Whether mastectomy (vs conservation) is the local plan",
    "Likelihood of post-mastectomy radiation",
    "Overall health and ability to undergo additional surgery",
    "Bilateral surgery or genetics-driven plans",
    "Personal priorities about body image, recovery time, and number of operations",
  ],
  whoNeedsClose:
    "A useful question: “What reconstruction paths are realistic for my cancer timeline — and what can wait?”",

  doesNotDecideTitle: "How should I compare reconstruction options?",
  doesNotDecideLead:
    "Compare by fit with the cancer plan first, then personal priorities. Weigh:",
  doesNotDecideItems: [
    "Immediate vs delayed vs no reconstruction",
    "Whether radiation is likely and how it changes timing",
    "Implant-based vs autologous (tissue) families — at a high level",
    "Recovery load and number of planned operations",
    "How systemic therapy sequencing fits the calendar",
  ],
  doesNotDecideNotes: [
    "Not reconstructing is a valid choice.",
    "You can revise aesthetic preferences later inside a medically sound timing plan.",
  ],
  doesNotDecideClose:
    "Reconstruction improves the lived fit of mastectomy — it does not replace the cancer surgery decision itself.",

  costTitle: "Recovery, operations, and practical fit",
  costLead:
    "Immediate reconstruction can mean a longer first operation; delayed means a flat period then another surgery; either path has work and caregiving implications.",
  costItems: [
    "How many operations might the full sequence involve?",
    "What does recovery look like in the first weeks for each path?",
    "How would work, caregiving, or travel be affected?",
  ],

  mistakesTitle: "Common mistakes around reconstruction timing",
  mistakes: [
    {
      mistake: "Treating reconstruction as an afterthought only",
      why: "Timing can affect planning — even if you are unsure about reconstructing.",
    },
    {
      mistake: "Choosing immediate reconstruction without a radiation plan",
      why: "Radiation often changes what is safest and most durable.",
    },
    {
      mistake: "Assuming you must reconstruct to finish treatment",
      why: "Cancer control does not require reconstruction.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Immediate vs delayed advice conflicts across teams",
    "Radiation and reconstruction recommendations seem incompatible",
    "You want confidence before locking mastectomy plus reconstruction timing",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Reconstruction Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Is immediate, delayed, or no reconstruction realistic for my cancer plan?",
    "Am I likely to need radiation — and how does that change timing?",
    "What method families fit me at a high level (implant vs tissue)?",
    "How many operations and what recovery should I expect?",
  ],
  doctorGroups: [
    {
      heading: "About timing",
      questions: [
        "Is immediate reconstruction appropriate for me?",
        "If delayed, what is the realistic window?",
        "What happens if I choose not to reconstruct?",
      ],
    },
    {
      heading: "About radiation and systemic therapy",
      questions: [
        "Am I likely to need radiation after mastectomy?",
        "Would reconstruction delay needed systemic therapy?",
        "Who coordinates plastic surgery with oncology timing?",
      ],
    },
    {
      heading: "About methods and recovery",
      questions: [
        "Which method families fit my body and timeline?",
        "How many operations might the sequence involve?",
        "What does recovery look like for each path?",
      ],
    },
  ],

  scenarioTitle: "Example: Fitting reconstruction into a mastectomy plan",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person chooses mastectomy and feels pressure to decide reconstruction the same week.",
    "Radiation may still be needed based on pathology.",
    "Instead of locking an immediate plan from photos, they ask:",
  ],
  scenarioFocus: [
    "Is immediate reconstruction appropriate if radiation is likely?",
    "What does delayed reconstruction look like in my timeline?",
    "What are my priorities for recovery and number of operations?",
  ],
  scenarioClose:
    "The focus shifts from picking a look to choosing a timing path that fits the cancer plan.",

  nextStepTitle: "Your next step",
  nextStepLead: "If reconstruction timing is still open:",
  nextStepActions: [
    {
      label:
        "Confirm whether mastectomy is the local plan — reconstruction usually sits inside that choice.",
    },
    {
      label:
        "Ask whether immediate, delayed, or no reconstruction fits radiation and recovery realities.",
    },
    {
      label:
        "If useful, get a plastic surgery consult before locking the mastectomy date.",
    },
  ],
  nextStepCtaLabel: "Surgery choice",
  nextStepHref: BREAST_SURGERY,
  nextStepCtaMeta: "If lumpectomy vs mastectomy is still open",
  nextStepSecondaryCtaLabel: "Genetic counseling",
  nextStepSecondaryHref: BREAST_GENETICS,
  nextStepSecondaryMeta: "If genetics could change a bilateral plan",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Still choosing the operation?",
      question: "How should I compare lumpectomy and mastectomy?",
      cta: "Surgery decision",
      href: BREAST_SURGERY,
    },
    {
      title: "Genetics still open?",
      question:
        "Do I need genetic counseling before breast cancer surgery?",
      cta: "Genetic counseling",
      href: BREAST_GENETICS,
    },
    {
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
  ],
};

/** Breast Cancer Entry — Radiation decisions (P1 #9) */
export const BREAST_RADIATION_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment:
    "How radiation decisions factor into breast cancer treatment",
  exploring: "Radiation after lumpectomy or mastectomy — fit and timing",
  subtitle:
    "Ask how radiation fits your surgery path, reconstruction timing, schedule, and life — before locking a local plan around assumptions.",
  relatedDecisions: [
    { label: "Surgery choice", href: BREAST_SURGERY },
    { label: "Reconstruction timing", href: BREAST_RECONSTRUCTION },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Second opinion", href: BREAST_SECOND },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Surgery", href: BREAST_SURGERY },
    { label: "Radiation", current: true },
    { label: "Reconstruction", href: BREAST_RECONSTRUCTION },
  ],

  triggersTitle: "When radiation decisions may matter most",
  triggerGroups: [
    {
      heading: "Choosing between lumpectomy and mastectomy",
      lead: "You may be asking:",
      items: [
        "If I choose lumpectomy, what radiation would I need?",
        "If I choose mastectomy, am I still likely to need radiation?",
      ],
    },
    {
      heading: "Planning reconstruction",
      lead: "You may be asking:",
      items: [
        "Would radiation change immediate vs delayed reconstruction?",
        "Should radiation and plastic surgery plans be clear before I lock a date?",
      ],
    },
    {
      heading: "Balancing treatment with everyday life",
      lead: "You may be asking:",
      items: [
        "What does the daily schedule look like for several weeks?",
        "What side effects should I plan for at work or home?",
      ],
    },
  ],

  whyTitle: "Why do radiation decisions matter?",
  whyLead:
    "Radiation is often part of the local plan — especially after lumpectomy. Assumptions about radiation can tip surgery choice, reconstruction timing, and weeks of daily life.",
  whyBody: [],
  whyQuestions: [
    "After lumpectomy, radiation is commonly part of the package",
    "After mastectomy, radiation is situational — not automatically zero",
    "Schedule and side effects shape whether a path is workable for you",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which radiation machine sounds most advanced online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "How does radiation fit my surgery path, reconstruction timing, calendar, and goals?",
  whyClose: [
    "Ask for expected / maybe / unlikely answers before locking surgery around radiation myths.",
  ],

  whoNeedsTitle: "Does everyone with breast cancer need radiation?",
  whoNeedsLead:
    "No. Many people after lumpectomy do. After mastectomy it depends on risk features. Some situations use radiation for specific local problems.",
  whoNeedsBody: [
    "What matters is what is recommended for your path — and what would change that recommendation.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Whether surgery is conservation or mastectomy",
    "Tumor size, margins, and lymph-node status",
    "Whether reconstruction is planned and how timing interacts",
    "Overall health and ability to complete a multi-week course",
    "Personal priorities about daily treatment logistics",
  ],
  whoNeedsClose:
    "A useful question: “For each surgery path I am considering, what radiation should I expect?”",

  doesNotDecideTitle: "How should I use radiation in the decision?",
  doesNotDecideLead:
    "Use radiation information to compare full local plans — not to pick a machine. Weigh:",
  doesNotDecideItems: [
    "Radiation expected after lumpectomy in your case",
    "Likelihood of radiation after mastectomy",
    "How radiation changes reconstruction timing",
    "Schedule length, visit burden, and travel",
    "Side effects that matter for your work and daily life",
  ],
  doesNotDecideNotes: [
    "Mastectomy does not automatically avoid radiation.",
    "Lumpectomy is not “less treatment” if radiation is part of the package.",
  ],
  doesNotDecideClose:
    "Radiation improves the fit of the local plan — it does not replace surgery or systemic decisions.",

  costTitle: "Schedule, travel, and practical fit",
  costLead:
    "Radiation is often a daily commitment for a period of time. The practical question is whether the calendar and travel load are workable alongside recovery and other treatments.",
  costItems: [
    "How many weeks and visits should I expect?",
    "Where would treatment happen, and is a closer option appropriate?",
    "How would work, caregiving, or fatigue be affected?",
  ],

  mistakesTitle: "Common mistakes around radiation decisions",
  mistakes: [
    {
      mistake: "Assuming mastectomy always avoids radiation",
      why: "Node status and other features can still lead to post-mastectomy radiation.",
    },
    {
      mistake: "Choosing lumpectomy without the radiation package in view",
      why: "For many people, conservation and radiation are planned together.",
    },
    {
      mistake: "Locking immediate reconstruction before a radiation plan",
      why: "Radiation often changes timing and durability considerations.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Radiation recommendations conflict across teams",
    "You are choosing surgery mainly to avoid or accept radiation",
    "Reconstruction and radiation advice seem incompatible",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Radiation Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "If I choose lumpectomy, what radiation would I need?",
    "If I choose mastectomy, am I likely to need radiation anyway?",
    "How would radiation change reconstruction timing?",
    "What schedule and side effects should I plan for?",
  ],
  doctorGroups: [
    {
      heading: "About whether I need radiation",
      questions: [
        "Is radiation expected after lumpectomy for me?",
        "How likely is radiation after mastectomy in my situation?",
        "What findings would change that recommendation?",
      ],
    },
    {
      heading: "About timing with other treatments",
      questions: [
        "Where does radiation sit relative to surgery and systemic therapy?",
        "How does radiation affect reconstruction timing?",
        "Can anything proceed in parallel while radiation is planned?",
      ],
    },
    {
      heading: "About schedule and side effects",
      questions: [
        "What schedule is most likely — and are shorter options appropriate?",
        "What side effects are most common for me?",
        "What support exists for travel, work, or fatigue?",
      ],
    },
  ],

  scenarioTitle: "Example: Letting radiation tip the local plan",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person leans toward mastectomy mainly to “skip radiation.”",
    "Node findings still make post-mastectomy radiation possible.",
    "Instead of locking that assumption, they ask:",
  ],
  scenarioFocus: [
    "If I choose lumpectomy, what radiation package should I expect?",
    "If I choose mastectomy, am I still likely to need radiation?",
    "How would either path affect reconstruction and my calendar?",
  ],
  scenarioClose:
    "The focus shifts from avoiding a word (“radiation”) to comparing full local plans with eyes open.",

  nextStepTitle: "Your next step",
  nextStepLead: "If radiation is still unclear:",
  nextStepActions: [
    {
      label:
        "Ask for expected / maybe / unlikely radiation answers for each surgery path you are considering.",
    },
    {
      label:
        "If mastectomy is possible, ask how radiation would change reconstruction timing.",
    },
    {
      label:
        "Get a rough schedule and side-effect picture before locking work and travel plans.",
    },
  ],
  nextStepCtaLabel: "Surgery choice",
  nextStepHref: BREAST_SURGERY,
  nextStepCtaMeta: "If lumpectomy vs mastectomy is still open",
  nextStepSecondaryCtaLabel: "Reconstruction timing",
  nextStepSecondaryHref: BREAST_RECONSTRUCTION,
  nextStepSecondaryMeta: "If radiation may change reconstruction",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Still choosing the operation?",
      question: "How should I compare lumpectomy and mastectomy?",
      cta: "Surgery decision",
      href: BREAST_SURGERY,
    },
    {
      title: "Reconstruction still open?",
      question:
        "How do breast reconstruction timing and choices fit into the cancer decision?",
      cta: "Reconstruction timing",
      href: BREAST_RECONSTRUCTION,
    },
    {
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
  ],
};

/** Breast Cancer Entry — Care team / center (P1 #10) */
export const BREAST_CARE_TEAM_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "How to choose a breast cancer care team or center",
  exploring: "Expertise, coordination, and hybrid care — not hospital fame",
  subtitle:
    "Ask what gap you are trying to fix — expertise, coordination, or confidence — then decide whether a second opinion, a new primary team, or a hybrid setup fits.",
  relatedDecisions: [
    { label: "Second opinion", href: BREAST_SECOND },
    { label: "Surgery choice", href: BREAST_SURGERY },
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Genetic counseling", href: BREAST_GENETICS },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Second opinion", href: BREAST_SECOND },
    { label: "Care team", current: true },
    { label: "Surgery", href: BREAST_SURGERY },
  ],

  triggersTitle: "When care-team choice may matter most",
  triggerGroups: [
    {
      heading: "Unsure about the plan or care team",
      lead: "You may be asking:",
      items: [
        "Do I need a major cancer center — or is my local team enough?",
        "Who should coordinate surgery, medicines, and radiation?",
      ],
    },
    {
      heading: "Complex decisions",
      lead: "You may be asking:",
      items: [
        "Can this team handle genetics, reconstruction, and sequencing together?",
        "Should I travel for planning and treat closer to home?",
      ],
    },
    {
      heading: "After a second opinion",
      lead: "You may be asking:",
      items: [
        "Was that review enough — or do I need a new primary team?",
        "How would two sites share records and ownership?",
      ],
    },
  ],

  whyTitle: "Why does choosing a care team matter?",
  whyLead:
    "Breast cancer plans often cross surgery, medical oncology, radiation, reconstruction, and genetics. Fragmented teams can create conflicting timelines even when each specialist is skilled.",
  whyBody: [],
  whyQuestions: [
    "The right level of care depends on complexity — not fame alone",
    "A second opinion reviews a fork; a care team owns the journey",
    "Hybrid setups (specialist + local) are common and workable",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which hospital ranks highest online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "What gap am I trying to fix — and who will own my next decisions?",
  whyClose: [
    "Name the gap before you travel, switch teams, or stay put by default.",
  ],

  whoNeedsTitle: "Does everyone need a major breast cancer center?",
  whoNeedsLead:
    "No. Many people get excellent care locally. Consider a specialized team or hybrid plan when decisions are complex, expertise is missing, or coordination feels broken.",
  whoNeedsBody: [
    "What matters is matching capabilities to your forks — sequencing, genetics, reconstruction, radiation — and who coordinates them.",
  ],
  whoNeedsDependsIntro: "Your situation may weigh factors such as:",
  whoNeedsDependsOn: [
    "Complexity of surgery, sequencing, genetics, or reconstruction",
    "Whether multidisciplinary review is available nearby",
    "Travel burden versus visit frequency for treatment",
    "Insurance, referral rules, and record sharing",
    "Whether you need clarity on one decision or a new ongoing team",
  ],
  whoNeedsClose:
    "A useful question: “Is my gap expertise, coordination, or confidence — and which setup fixes it?”",

  doesNotDecideTitle: "How should I compare care-team options?",
  doesNotDecideLead:
    "Compare by fit to your decisions and life — not by reputation alone. Weigh:",
  doesNotDecideItems: [
    "Whether you need a second opinion, a new primary team, or both",
    "Multidisciplinary access for your specific forks",
    "Hybrid care (specialist planning + local treatment) when travel is hard",
    "Who owns surgery, systemic therapy, radiation, and reconstruction calendars",
    "How records and plan changes move between sites",
  ],
  doesNotDecideNotes: [
    "Famous does not automatically mean better for your case.",
    "Staying local is reasonable when expertise and coordination are already solid.",
  ],
  doesNotDecideClose:
    "Care-team choice improves ownership of the journey — it does not replace the clinical forks themselves.",

  costTitle: "Travel, visits, and practical fit",
  costLead:
    "Some people travel for one planning visit; others need repeated trips. Match the setup to how often you must be on-site.",
  costItems: [
    "Which visits require travel — and which can stay local?",
    "Who coordinates scheduling across sites?",
    "What support exists for records, lodging, or caregiver travel?",
  ],

  mistakesTitle: "Common mistakes around choosing a care team",
  mistakes: [
    {
      mistake: "Choosing by reputation alone",
      why: "Fit depends on your decisions, coordination, and access — not brand names.",
    },
    {
      mistake: "Confusing a second opinion with changing your whole team",
      why: "You can get clarity on one fork without relocating all care.",
    },
    {
      mistake: "Traveling without a hybrid plan",
      why: "Many people need specialist planning plus local ongoing treatment.",
    },
  ],

  secondOpinionTitle: "When a focused second opinion may be enough",
  secondOpinionLead: "Consider a second opinion first when:",
  secondOpinionWhen: [
    "You need clarity on one fork before locking surgery or systemic therapy",
    "You are not sure you want to change your primary team yet",
    "Time is short and a targeted review is more realistic than relocating care",
  ],
  secondOpinionClose: "A second opinion and a care-team change solve different problems.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Care Team Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Who leads my case — and which specialists are on my team?",
    "Will complex decisions get multidisciplinary review?",
    "If I seek another center, what hybrid options exist?",
    "What records should I prepare for another team?",
  ],
  doctorGroups: [
    {
      heading: "About my current team",
      questions: [
        "Who owns surgery, medicines, radiation, and reconstruction timing?",
        "How do specialists communicate when the plan changes?",
        "What capabilities would require a referral elsewhere?",
      ],
    },
    {
      heading: "About another center or hybrid care",
      questions: [
        "Would a second opinion be enough — or should I change my primary team?",
        "Can planning happen at a specialty center with treatment closer to home?",
        "Who would coordinate records and calendars across sites?",
      ],
    },
    {
      heading: "About next steps",
      questions: [
        "What decision gap am I trying to fix right now?",
        "Is there time to arrange another review before the next irreversible step?",
        "What should I prepare this week?",
      ],
    },
  ],

  scenarioTitle: "Example: Choosing a hybrid care network",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person feels pressure to “go to the most famous hospital” for everything.",
    "Daily radiation and infusions would be hard far from home.",
    "Instead of relocating all care, they ask:",
  ],
  scenarioFocus: [
    "What gap am I trying to fix — expertise, coordination, or confidence?",
    "Can specialist planning happen elsewhere with treatment closer to home?",
    "Who will own handoffs so the plan does not fragment?",
  ],
  scenarioClose:
    "The focus shifts from picking a brand to building a workable care network.",

  nextStepTitle: "Your next step",
  nextStepLead: "If care-team choice is still open:",
  nextStepActions: [
    {
      label:
        "Name the gap you are trying to fix — expertise, coordination, or confidence.",
    },
    {
      label:
        "Decide whether a second opinion, a new primary team, or a hybrid setup fits that gap.",
    },
    {
      label:
        "Prepare records and one sentence about what you need from another team.",
    },
  ],
  nextStepCtaLabel: "Second opinion",
  nextStepHref: BREAST_SECOND,
  nextStepCtaMeta: "If you need clarity on one fork first",
  nextStepSecondaryCtaLabel: "Surgery choice",
  nextStepSecondaryHref: BREAST_SURGERY,
  nextStepSecondaryMeta: "If the local plan is still the main decision",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Need clarity on one decision?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
    {
      title: "Still choosing the operation?",
      question: "How should I compare lumpectomy and mastectomy?",
      cta: "Surgery decision",
      href: BREAST_SURGERY,
    },
    {
      title: "Genetics still open?",
      question:
        "Do I need genetic counseling before breast cancer surgery?",
      cta: "Genetic counseling",
      href: BREAST_GENETICS,
    },
  ],
};

/** Breast Cancer Entry — Metastatic / Stage IV (P1 #11) */
export const BREAST_METASTATIC_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "What to know after metastatic / Stage IV breast cancer",
  exploring: "Control, symptoms, and quality of life — not “nothing can be done”",
  subtitle:
    "Metastatic breast cancer changes the decision frame. This guide helps you understand goals, how subtype still forks options, and what to clarify before locking a next plan.",
  relatedDecisions: [
    { label: "Systemic options", href: BREAST_SYSTEMIC },
    { label: "Second opinion", href: BREAST_SECOND },
    { label: "Care team / center", href: BREAST_CARE_TEAM },
    { label: "Subtype testing", href: BREAST_SUBTYPE },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Subtype", href: BREAST_SUBTYPE },
    { label: "Metastatic options", current: true },
    { label: "Systemic therapy", href: BREAST_SYSTEMIC },
  ],

  triggersTitle: "When metastatic decisions may be in front of you",
  triggerGroups: [
    {
      heading: "You were told the cancer is metastatic or Stage IV",
      lead: "You may be wondering:",
      items: [
        "Does this mean there is nothing doctors can do?",
        "What happens next — and how urgent is it?",
      ],
    },
    {
      heading: "You received a first metastatic treatment recommendation",
      lead: "You may want to understand:",
      items: [
        "What the goal of treatment is in plain language",
        "Whether subtype still changes which option families belong first",
      ],
    },
    {
      heading: "You are weighing daily life and priorities",
      lead: "You may be asking:",
      items: [
        "How treatment fits the life I want to maintain",
        "Whether the strongest plan is always the best fit",
      ],
    },
  ],

  whyTitle: "Why does a metastatic decision frame matter?",
  whyLead:
    "Stage IV describes where cancer is — not your entire future. Metastatic planning usually focuses on control, symptoms, and quality of life, while subtype and prior treatment still shape which option families belong in the discussion.",
  whyBody: [],
  whyQuestions: [
    "Active treatment is common — Stage IV is not the same as “nothing can be done”",
    "Goals can emphasize control and living with cancer without meaning care is ending",
    "HR+, HER2+, and TNBC still fork medicine families in metastatic disease",
  ],
  whyNotLabel: "The goal is not:",
  whyNotQuestion: "Solving every future metastatic decision today.",
  whyBetterLabel: "The goal is:",
  whyBetterQuestion:
    "Understanding your situation — then preparing for the next important step with clear goals.",
  whyClose: [
    "Take this one step at a time. You do not need every answer on day one.",
  ],

  whoNeedsTitle: "Is metastatic breast cancer the same as early-stage planning?",
  whoNeedsLead:
    "No. Early-stage plans often aim at cure-focused packages. Metastatic plans usually aim at control, symptom relief, and protecting daily life — while still using active treatment when it fits.",
  whoNeedsBody: [
    "People with the same Stage IV label still hear different plans because subtype, extent of disease, prior therapy, symptoms, and goals differ.",
  ],
  whoNeedsDependsIntro: "Your situation may weigh factors such as:",
  whoNeedsDependsOn: [
    "Current subtype / receptor and HER2 status",
    "Where cancer has spread and how it is affecting you",
    "Previous treatments and responses",
    "Overall health and what “a good day” means to you",
    "Whether key information (imaging, re-testing, symptoms) is still pending",
  ],
  whoNeedsClose:
    "A useful question: “What is the goal of the next treatment — and what trade-offs matter most right now?”",

  doesNotDecideTitle: "How should I compare metastatic options?",
  doesNotDecideLead:
    "Compare by goals and fit — not by intensity alone. Weigh:",
  doesNotDecideItems: [
    "What treatment is trying to achieve (control, symptoms, both)",
    "Which option families fit your subtype first",
    "Side effects and visit burden versus possible benefit",
    "Whether local therapy (surgery/radiation) helps a specific site or symptom",
    "Whether a second opinion or clinical trial belongs in the discussion",
  ],
  doesNotDecideNotes: [
    "Strongest is not automatically best for metastatic decision-making.",
    "Symptom control can proceed while options are still being compared.",
  ],
  doesNotDecideClose:
    "This frame clarifies the next metastatic fork — it does not replace your care team’s recommendations.",

  costTitle: "Daily life, visits, and practical fit",
  costLead:
    "Metastatic care often continues over time. Ask how the plan fits work, travel, caregiving, and the activities that matter most.",
  costItems: [
    "How often would I need to be on-site for treatment or monitoring?",
    "Which side effects are most likely to affect daily life?",
    "What support exists for symptoms while the plan is underway?",
  ],

  mistakesTitle: "Common mistakes around metastatic decisions",
  mistakes: [
    {
      mistake: "Assuming Stage IV means no active options",
      why: "Many people receive active treatment aimed at control and quality of life.",
    },
    {
      mistake: "Ignoring subtype in metastatic planning",
      why: "HR+, HER2+, and TNBC still open different medicine families.",
    },
    {
      mistake: "Choosing the “strongest” plan without goals",
      why: "Benefit, side effects, and daily life still decide fit.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Options feel complex or recommendations conflict",
    "You want more confidence before locking a first metastatic plan",
    "You want to understand whether a trial or alternative family belongs in the discussion",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Metastatic Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "What do we know about my cancer so far — subtype, extent, and symptoms?",
    "What is the goal of the next treatment in plain language?",
    "What information are we still waiting for?",
    "What decision comes next — and how urgent is it?",
  ],
  doctorGroups: [
    {
      heading: "Understanding my situation",
      questions: [
        "What does metastatic / Stage IV mean in my specific case?",
        "Is my subtype / receptor and HER2 status current — or should it be re-tested?",
        "Where has cancer been found, and how is it affecting me now?",
      ],
    },
    {
      heading: "Understanding treatment goals",
      questions: [
        "What are we hoping the next treatment can do?",
        "How will we know if treatment is helping?",
        "How do my priorities (control, side effects, time at home) fit this plan?",
      ],
    },
    {
      heading: "Understanding my next step",
      questions: [
        "Which option families belong in the discussion for my subtype?",
        "Would a second opinion or clinical trial change what we discuss?",
        "What should I focus on this week?",
      ],
    },
  ],

  scenarioTitle: "Example: First conversations after metastatic diagnosis",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person hears “Stage IV” and feels pressure to choose the strongest treatment immediately — or fears that care is ending.",
    "Instead of solving every future question, they focus on:",
  ],
  scenarioFocus: [
    "What do we know about my cancer so far?",
    "What is the goal of the options being discussed?",
    "Does my subtype change which option families come first?",
    "What decision comes next — and how urgent is it?",
  ],
  scenarioClose:
    "The focus shifts from solving the whole journey to taking a clear next step with the care team.",

  nextStepTitle: "Your next step",
  nextStepLead: "If metastatic decisions are in front of you:",
  nextStepActions: [
    {
      label:
        "Confirm what doctors know so far — subtype, extent, and symptoms — and what is still pending.",
    },
    {
      label:
        "Ask what the goal of the next treatment is in plain language, and how your priorities fit.",
    },
    {
      label:
        "Ask whether a second opinion, care-team change, or clinical trial belongs in the discussion.",
    },
  ],
  nextStepCtaLabel: "Systemic options by subtype",
  nextStepHref: BREAST_SYSTEMIC,
  nextStepCtaMeta: "When you are ready to compare medicine families",
  nextStepSecondaryCtaLabel: "Second opinion",
  nextStepSecondaryHref: BREAST_SECOND,
  nextStepSecondaryMeta: "When you want more confidence before locking a plan",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Ready to compare medicine families?",
      question:
        "How should I choose systemic therapy options for my breast cancer subtype?",
      cta: "Systemic options",
      href: BREAST_SYSTEMIC,
    },
    {
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
    {
      title: "Unsure about the care setup?",
      question: "How do I choose a breast cancer care team or center?",
      cta: "Care team / center",
      href: BREAST_CARE_TEAM,
    },
  ],
};

/** Breast Cancer Entry — Recurrence (P1 #12) */
export const BREAST_RECURRENCE_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Breast Cancer",
  decisionMoment: "What to sort out if breast cancer comes back",
  exploring: "A new decision point — not an automatic replay of the first plan",
  subtitle:
    "If breast cancer returns after treatment, the next step starts with understanding what changed — location, prior therapy, and whether subtype should be re-checked.",
  relatedDecisions: [
    { label: "Metastatic / Stage IV", href: `/questions/${BREAST_METASTATIC_SLUG}` },
    { label: "Systemic options", href: BREAST_SYSTEMIC },
    { label: "Second opinion", href: BREAST_SECOND },
    { label: "Care team / center", href: BREAST_CARE_TEAM },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Systemic therapy", href: BREAST_SYSTEMIC },
    { label: "Recurrence", current: true },
    { label: "Second opinion", href: BREAST_SECOND },
  ],

  triggersTitle: "When recurrence decisions may be in front of you",
  triggerGroups: [
    {
      heading: "Your doctor says the cancer has returned",
      lead: "You may be wondering:",
      items: [
        "Does this mean previous treatment failed?",
        "What information do we need before the next plan?",
      ],
    },
    {
      heading: "Scans or symptoms raise a new concern after treatment",
      lead: "You may want to understand:",
      items: [
        "Where has cancer returned — local, regional, or distant?",
        "Would re-testing subtype change the options?",
      ],
    },
    {
      heading: "You are weighing next options after prior therapy",
      lead: "You may be asking:",
      items: [
        "Do we repeat the first plan — or compare a new set of options?",
        "Would a second opinion or trial belong in the discussion?",
      ],
    },
  ],

  whyTitle: "Why does recurrence need a new decision frame?",
  whyLead:
    "Recurrence means cancer has returned after a period of control or no detectable disease. It does not automatically mean previous care failed, that options have ended, or that the first plan simply repeats.",
  whyBody: [],
  whyQuestions: [
    "Location (local, regional, or distant) often changes which option families belong first",
    "Prior surgery, radiation, and medicines shape what remains open",
    "Subtype / receptor status may need re-checking when it could change medicines",
  ],
  whyNotLabel: "The first question is not:",
  whyNotQuestion: "Why did this happen?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "What has changed — and what information do we need now to compare next options?",
  whyClose: [
    "Recurrence is not one single situation. Start by understanding what changed.",
  ],

  whoNeedsTitle: "Is recurrence the same as metastatic / Stage IV planning?",
  whoNeedsLead:
    "Not always. Distant recurrence often overlaps with metastatic planning. Local or regional recurrence may reopen surgery, radiation, and systemic questions in a different mix.",
  whoNeedsBody: [
    "Use where cancer returned — plus prior therapy and current biology — to pick the right frame.",
  ],
  whoNeedsDependsIntro: "Your situation may weigh factors such as:",
  whoNeedsDependsOn: [
    "Where recurrence was found (local, regional, or distant)",
    "How long after treatment it appeared",
    "Whether subtype / receptor status should be re-tested",
    "Which treatments you already received and how they worked",
    "Symptoms, overall health, and personal goals",
  ],
  whoNeedsClose:
    "A useful question: “Given where cancer returned and what we already used, which options belong in the discussion now?”",

  doesNotDecideTitle: "How should I compare options after recurrence?",
  doesNotDecideLead:
    "Compare by what has changed — not by repeating the first package by default. Weigh:",
  doesNotDecideItems: [
    "Where cancer returned and how much disease is present",
    "Whether re-testing subtype would change medicine families",
    "What prior treatment already used — and what remains open",
    "Goals (control, symptoms, quality of life) in plain language",
    "Whether a second opinion or clinical trial belongs in the discussion",
  ],
  doesNotDecideNotes: [
    "Fear is understandable — but location and prior therapy still decide the fork.",
    "Distant recurrence may belong in the metastatic decision frame as well.",
  ],
  doesNotDecideClose:
    "This frame clarifies the next recurrence fork — it does not replace your care team’s recommendations.",

  costTitle: "Daily life and practical fit after recurrence",
  costLead:
    "Recurrence decisions often reopen questions about visit burden, side effects, and what you need to protect in daily life.",
  costItems: [
    "How often would treatment or monitoring require being on-site?",
    "Which side effects matter most given what you already went through?",
    "What support exists while the next plan is underway?",
  ],

  mistakesTitle: "Common mistakes after breast cancer recurrence",
  mistakes: [
    {
      mistake: "Assuming there are no options",
      why: "Recurrence does not automatically end treatment choices.",
    },
    {
      mistake: "Assuming the first plan simply repeats",
      why: "Location, prior therapy, and current biology usually reopen the comparison.",
    },
    {
      mistake: "Skipping where / what-changed questions",
      why: "Local, regional, and distant recurrence are different decision frames.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful after recurrence when:",
  secondOpinionWhen: [
    "Location, prior therapy, and re-testing make options feel complex",
    "Recommendations conflict or feel unclear",
    "You want more confidence before locking the next plan",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Breast second opinion guide",
  secondOpinionHref: BREAST_SECOND,

  doctorTitle: "Recurrence Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Where exactly has the cancer returned?",
    "Would re-testing subtype change the options we discuss?",
    "What is the goal of the next treatment in plain language?",
    "What decision comes next — and how urgent is it?",
  ],
  doctorGroups: [
    {
      heading: "Understanding what changed",
      questions: [
        "Is this local, regional, or distant recurrence?",
        "How long after treatment did it appear?",
        "Is prior subtype information still enough — or should we re-test?",
      ],
    },
    {
      heading: "Understanding next options",
      questions: [
        "Given what we already used, which option families belong now?",
        "How do my priorities (control, side effects, daily life) fit?",
        "Would a clinical trial be reasonable to discuss?",
      ],
    },
    {
      heading: "Understanding my next step",
      questions: [
        "What decision comes next — and how urgent is it?",
        "Would a second opinion help before locking the plan?",
        "What should I focus on this week?",
      ],
    },
  ],

  scenarioTitle: "Example: First conversations after recurrence",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person finishes treatment, then hears that cancer has returned and feels pressure to restart the same plan immediately — or fears that options have ended.",
    "Instead of assuming the first package repeats, they focus on:",
  ],
  scenarioFocus: [
    "Where has cancer returned?",
    "Would re-testing subtype change medicine options?",
    "Given prior therapy, which option families belong now?",
    "What decision comes next — and how urgent is it?",
  ],
  scenarioClose:
    "The focus shifts from fear or auto-repeat to a clear next comparison with the care team.",

  nextStepTitle: "Your next step",
  nextStepLead: "If recurrence decisions are in front of you:",
  nextStepActions: [
    {
      label:
        "Confirm where cancer returned and what doctors know so far — including whether re-testing is needed.",
    },
    {
      label:
        "Ask which option families belong now, given prior therapy and current goals.",
    },
    {
      label:
        "Ask whether a second opinion, care-team review, or clinical trial belongs in the discussion.",
    },
  ],
  nextStepCtaLabel: "Systemic options by subtype",
  nextStepHref: BREAST_SYSTEMIC,
  nextStepCtaMeta: "When medicine families are back on the table",
  nextStepSecondaryCtaLabel: "Metastatic / Stage IV",
  nextStepSecondaryHref: `/questions/${BREAST_METASTATIC_SLUG}`,
  nextStepSecondaryMeta: "When recurrence is distant / metastatic",

  relatedPathsTitle: "Continue your breast cancer decision journey",
  relatedPaths: [
    {
      title: "Distant recurrence or Stage IV frame?",
      question:
        "What are my options for metastatic / Stage IV breast cancer?",
      cta: "Metastatic options",
      href: `/questions/${BREAST_METASTATIC_SLUG}`,
    },
    {
      title: "Ready to compare medicine families?",
      question:
        "How should I choose systemic therapy options for my breast cancer subtype?",
      cta: "Systemic options",
      href: BREAST_SYSTEMIC,
    },
    {
      title: "Want more confidence?",
      question:
        "Should I get a second opinion before breast cancer surgery or systemic therapy?",
      cta: "Second opinion",
      href: BREAST_SECOND,
    },
  ],
};

export const BREAST_FLAGSHIP_BY_SLUG: Record<string, AiEntryFlagshipModules> = {
  [BREAST_NEWLY_DIAGNOSED_SLUG]: BREAST_NEWLY_DIAGNOSED_FLAGSHIP,
  [BREAST_SUBTYPE_SLUG]: BREAST_SUBTYPE_FLAGSHIP,
  [BREAST_SEQUENCING_SLUG]: BREAST_SEQUENCING_FLAGSHIP,
  [BREAST_SURGERY_SLUG]: BREAST_SURGERY_FLAGSHIP,
  [BREAST_SECOND_OPINION_SLUG]: BREAST_SECOND_OPINION_FLAGSHIP,
  [BREAST_TREATMENT_COMPARE_SLUG]: BREAST_SYSTEMIC_FLAGSHIP,
  [BREAST_GENETICS_SLUG]: BREAST_GENETICS_FLAGSHIP,
  [BREAST_RECONSTRUCTION_SLUG]: BREAST_RECONSTRUCTION_FLAGSHIP,
  [BREAST_RADIATION_SLUG]: BREAST_RADIATION_FLAGSHIP,
  [BREAST_CARE_TEAM_SLUG]: BREAST_CARE_TEAM_FLAGSHIP,
  [BREAST_METASTATIC_SLUG]: BREAST_METASTATIC_FLAGSHIP,
  [BREAST_RECURRENCE_SLUG]: BREAST_RECURRENCE_FLAGSHIP,
};
