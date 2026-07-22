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
    { label: "Treatment sequencing", href: BREAST_SEQUENCING },
    { label: "Subtype testing", href: BREAST_SUBTYPE },
    { label: "Second opinion", href: BREAST_SECOND },
    { label: "Systemic options", href: BREAST_SYSTEMIC },
  ],
  journeyLabel: "Breast Cancer Decision Journey",
  journeyPath: [
    { label: "Subtype", href: BREAST_SUBTYPE },
    { label: "Sequencing", href: BREAST_SEQUENCING },
    { label: "Surgery", current: true },
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
    {
      title: "Still clarifying biology?",
      question:
        "Do I need breast cancer subtype results before choosing treatment?",
      cta: "Subtype testing",
      href: BREAST_SUBTYPE,
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

export const BREAST_FLAGSHIP_BY_SLUG: Record<string, AiEntryFlagshipModules> = {
  [BREAST_NEWLY_DIAGNOSED_SLUG]: BREAST_NEWLY_DIAGNOSED_FLAGSHIP,
  [BREAST_SUBTYPE_SLUG]: BREAST_SUBTYPE_FLAGSHIP,
  [BREAST_SEQUENCING_SLUG]: BREAST_SEQUENCING_FLAGSHIP,
  [BREAST_SURGERY_SLUG]: BREAST_SURGERY_FLAGSHIP,
  [BREAST_SECOND_OPINION_SLUG]: BREAST_SECOND_OPINION_FLAGSHIP,
  [BREAST_TREATMENT_COMPARE_SLUG]: BREAST_SYSTEMIC_FLAGSHIP,
};
