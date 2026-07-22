/**
 * Supporting Module — Understanding Breast Cancer Stage
 * Orientation analogue of lung “Stage”: extent that shapes options & sequencing.
 * See docs/Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md §3
 */

import {
  BREAST_GENETICS_SLUG,
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/breast-entry-slugs";

export const BREAST_UNDERSTANDING_STAGE = {
  path: "/cancers/breast-cancer/understanding-stage",
  slug: "understanding-stage",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Breast cancer",
    title: "What Does My Breast Cancer Stage Mean?",
    subtitle:
      "Stage describes how far the cancer has gone — tumor size, nearby lymph nodes, and whether it has spread. That map helps explain which options and sequencing may enter the conversation.",
    boundary:
      "This page helps you orient to staging and extent. It is not a prognosis table, and it is not a treatment recommendation.",
  },

  anchors: [
    { label: "What stage describes", href: "#what-stage-describes" },
    { label: "Stage map", href: "#stage-map" },
    { label: "Why it matters", href: "#why-it-matters" },
    { label: "Ask doctor", href: "#doctor-checklist" },
  ],

  directAnswer: {
    id: "direct-answer",
    label: "Direct answer",
    lead: "Breast cancer stage describes where the cancer is, how large or extensive it is, and whether lymph nodes or distant sites are involved.",
    intro: "Stage helps guide treatment discussions. However, stage is not the only factor. Doctors also consider:",
    points: [
      "subtype (receptors / HER2);",
      "imaging and pathology details;",
      "whether treatment might start before surgery;",
      "overall health;",
      "your personal goals.",
    ],
    bodyClose: null as string | null,
    close:
      "The useful question is not “What number am I?” It is “What does my stage — and nodal status — mean for the options we should discuss next?”",
  },

  whatStageDescribes: {
    id: "what-stage-describes",
    title: "What does “stage” actually describe?",
    lead: "Cancer stage answers three questions — before any Stage I–IV labels.",
    questions: [
      {
        id: "where",
        number: "1",
        title: "Where is the cancer?",
        body: "Doctors look at the breast (or chest wall / skin involvement when relevant) and how large the tumor appears.",
      },
      {
        id: "spread",
        number: "2",
        title: "Has it involved nodes or spread farther?",
        body: "Doctors evaluate nearby lymph nodes and whether imaging suggests cancer elsewhere in the body.",
      },
      {
        id: "treatment-meaning",
        number: "3",
        title: "What does this mean for treatment?",
        body: "Stage helps doctors discuss whether surgery-first is realistic, whether systemic therapy before surgery may help, and what goals fit your situation.",
      },
    ],
    takeaway:
      "Stage is a map of extent. It helps guide decisions, but it does not define your entire situation — and it is not a survival prediction by itself.",
  },

  stageMap: {
    id: "stage-map",
    title: "The broad stages of breast cancer",
    lead: "Think in three broad groups — not a full medical staging chart. Your doctor can translate your report into the group that fits you. “Locally advanced” and node-positive situations often sit in the middle group.",
    bands: [
      {
        id: "early-stage",
        name: "Early-stage breast cancer",
        means:
          "Cancer appears limited to the breast and, when nodes are involved, often to a limited nodal area — without distant spread.",
        discussionsIntro: "Treatment discussions may include:",
        discussions: [
          "surgery (breast-conserving or mastectomy);",
          "radiation in many breast-conserving plans;",
          "systemic therapy based on subtype and risk;",
          "whether any treatment should start before surgery.",
        ],
        note: "Ask what “early” means in your report — and whether nodal status still changes sequencing.",
      },
      {
        id: "locally-advanced",
        name: "Locally advanced / node-heavy disease",
        means:
          "Cancer may be larger, involve multiple nodes, or involve nearby structures — still without confirmed distant metastases.",
        discussionsIntro: "Treatment discussions may include:",
        discussions: [
          "systemic therapy before surgery (neoadjuvant);",
          "a plan shared across medical oncology and surgery;",
          "clear goals for shrinking disease and guiding surgery;",
          "how response will be checked before the next step.",
        ],
        note: "Locally advanced is a common decision fork — not a separate diagnosis page. Ask why timing before or after surgery is being recommended.",
        entryHref: `/questions/${BREAST_SEQUENCING_SLUG}`,
        entryLabel:
          "Comparing timing? Open the before-vs-after-surgery decision",
      },
      {
        id: "advanced",
        name: "Advanced (metastatic) breast cancer",
        means:
          "Cancer has spread to distant sites, or the plan focuses on control beyond one local area.",
        discussionsIntro: "Treatment discussions may focus on:",
        discussions: [
          "controlling cancer;",
          "choosing systemic options by subtype;",
          "managing symptoms;",
          "maintaining quality of life and keeping future options open.",
        ],
        note: "Goals often differ from earlier-stage plans. That is not the same as “nothing can be done.”",
        entryHref: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Comparing systemic options? Open the subtype-based guide",
      },
    ],
  },

  whyItMatters: {
    id: "why-it-matters",
    title: "Why does stage matter for treatment decisions?",
    lead: "Stage helps shape which approaches enter the conversation. It does not choose a treatment by itself — and subtype still matters alongside it.",
    bridgeIntro: "Stage helps answer:",
    bridges: [
      {
        id: "why-sequencing",
        title: "Should treatment start before or after surgery?",
        body: "Larger tumors, node-positive disease, and some subtypes more often raise neoadjuvant (before surgery) discussions. Stage and biology are usually considered together.",
        ctaLabel: "Sequencing decision",
        ctaHref: `/questions/${BREAST_SEQUENCING_SLUG}`,
      },
      {
        id: "why-surgery",
        title: "How do lumpectomy and mastectomy compare in my situation?",
        body: "Local extent, node status, genetics, and personal priorities all shape surgery conversations — stage alone does not pick one operation.",
        ctaLabel: "Surgery decision",
        ctaHref: `/questions/${BREAST_SURGERY_SLUG}`,
      },
      {
        id: "why-subtype",
        title: "Do I still need clear subtype results?",
        body: "Stage describes extent. Subtype describes biology. Many first-plan decisions need both — especially systemic choices and sequencing.",
        ctaLabel: "Subtype testing decision",
        ctaHref: `/questions/${BREAST_SUBTYPE_SLUG}`,
      },
    ],
    closeLines: [
      "Stage answers: “How far has the cancer gone?”",
      "Subtype and goals answer: “Which plan fits me now?”",
    ],
  },

  myths: {
    id: "myths",
    title: "Stage does not tell the whole story",
    lead: "These misconceptions are common — and they can get in the way of a clear next conversation.",
    items: [
      {
        id: "myth-prognosis",
        myth: "“My stage number is my prognosis.”",
        reality:
          "Stage is about extent at a point in time. Outlook also depends on subtype, treatment response, health, and many other factors. This page is not a survival chart.",
      },
      {
        id: "myth-same-tx",
        myth: "“Everyone with the same stage gets the same treatment.”",
        reality:
          "Treatment can differ because of receptor/HER2 status, genomic assays in some situations, overall health, and personal goals.",
      },
      {
        id: "myth-nodes",
        myth: "“If lymph nodes are involved, surgery is off the table.”",
        reality:
          "Node involvement often changes sequencing and systemic discussions — it does not automatically mean surgery is impossible. Ask what your team is trying to achieve with each step.",
      },
    ],
  },

  faqs: {
    id: "common-questions",
    title: "Questions patients often ask",
    lead: "Open a question only if it matches what you are wondering.",
    items: [
      {
        id: "faq-why-stage",
        question: "Why do doctors need to know my stage?",
        paragraphs: [
          "Stage helps doctors understand extent — breast, nodes, and distant sites — and which treatment approaches may make sense.",
          "It is one important piece of treatment planning — not the whole plan.",
        ],
      },
      {
        id: "faq-stage-vs-subtype",
        question: "Is stage the same as subtype?",
        paragraphs: [
          "No. Stage describes how far the cancer has gone. Subtype describes tumor biology (receptors / HER2).",
          "Many first decisions need both pieces of information.",
        ],
      },
      {
        id: "faq-stage-change",
        question: "Can my breast cancer stage change?",
        paragraphs: [
          "The stage assigned at diagnosis usually describes extent at that time.",
          "Your current situation can change over time and may affect future decisions — even if the original stage label stays in your record.",
        ],
      },
      {
        id: "faq-locally-advanced",
        question: "What does “locally advanced” mean?",
        paragraphs: [
          "It usually means the cancer is more extensive in the breast or regional nodes, but has not been shown to have distant metastases.",
          "Discussions often include systemic therapy before surgery and a clear plan across specialists — not a separate disease category.",
        ],
      },
      {
        id: "faq-same-stage-different",
        question:
          "Why do two people with the same stage receive different treatments?",
        paragraphs: [
          "Because treatment depends on more than stage. Doctors also consider:",
        ],
        bullets: [
          "subtype;",
          "response goals;",
          "previous treatment;",
          "health;",
          "personal priorities (including surgery preferences).",
        ],
      },
      {
        id: "faq-second-opinion-stage",
        question: "Should I get a second opinion about my stage or plan?",
        paragraphs: [
          "A second opinion may be useful when staging is complex, neoadjuvant timing is unclear, surgery options feel high-stakes, or you want more confidence before locking a plan.",
        ],
      },
    ],
  },

  stageReport: {
    id: "stage-report",
    title: "Understanding your cancer stage report",
    heroSentence:
      "Your stage is usually summarized from imaging, pathology, exam findings, and your doctor’s assessment.",
    reassure: "You do not need to decode every staging code on your own.",
    prompt: "Start by confirming:",
    finders: [
      {
        id: "find-stage-label",
        label: "What stage (or clinical stage) is listed",
        examples: "May appear in imaging summaries, pathology notes, or visit notes",
        hint: "Ask: “What stage is my breast cancer — clinical, pathologic, or both?”",
      },
      {
        id: "find-nodes",
        label: "Lymph node status",
        examples: "Node-negative · Node-positive · Pending biopsy / imaging",
        hint: "Ask: “Are nodes involved — and does that change sequencing?”",
      },
      {
        id: "find-treatment-meaning",
        label: "What it means for options",
        examples: "Surgery-first, systemic-first, or combined plans",
        hint: "Ask: “What does this stage mean for my next decision?”",
      },
      {
        id: "find-other-factors",
        label: "Other factors that affect the plan",
        examples: "Subtype, genetics, health, goals",
        hint: "Ask: “Besides stage, what else shapes my plan right now?”",
      },
    ],
    close:
      "Bring your latest imaging and pathology summaries to the appointment. Confirming a few answers is enough to start a clearer conversation.",
  },

  checklist: {
    id: "doctor-checklist",
    title: "Questions to take to your doctor",
    leaveTitle: "Before you leave, confirm:",
    leaveItems: [
      "What stage is my breast cancer — and how was it determined?",
      "Are lymph nodes involved, and does that change sequencing?",
      "What does my stage mean for options we should discuss next?",
      "Do we also have clear subtype results to use with stage?",
    ],
    groups: [
      {
        id: "checklist-stage",
        heading: "Understand my stage",
        questions: [
          "What stage is my breast cancer?",
          "How was my stage determined?",
          "What does my stage mean in my situation?",
        ],
      },
      {
        id: "checklist-impact",
        heading: "Understand treatment impact",
        questions: [
          "How does my stage affect treatment options?",
          "Should treatment start before or after surgery?",
          "How do lumpectomy and mastectomy fit my extent?",
        ],
      },
      {
        id: "checklist-future",
        heading: "Understand my future plan",
        questions: [
          "What is the goal of the next step?",
          "How will we know if treatment before surgery is working?",
          "What decisions may come after this one?",
        ],
      },
    ],
  },

  related: {
    id: "related-decisions",
    title: "Continue into a decision",
    lead: "Your next steps may include one of these Decision Paths — not more staging articles.",
    items: [
      {
        id: "related-sequencing",
        title: "Treatment sequencing",
        question:
          "Should breast cancer treatment start before or after surgery?",
        hint: "Especially useful when nodes or larger tumors raise neoadjuvant talks.",
        href: `/questions/${BREAST_SEQUENCING_SLUG}`,
        cta: "Open sequencing decision",
      },
      {
        id: "related-surgery",
        title: "Surgery decision",
        question: "How should I compare lumpectomy and mastectomy?",
        hint: "Compare local surgery options for your situation — not stage alone.",
        href: `/questions/${BREAST_SURGERY_SLUG}`,
        cta: "Open surgery decision",
      },
      {
        id: "related-subtype",
        title: "Subtype testing",
        question:
          "Do I need my breast cancer subtype results before choosing treatment?",
        hint: "Confirm biology so stage and subtype can shape the plan together.",
        href: `/questions/${BREAST_SUBTYPE_SLUG}`,
        cta: "Open subtype decision",
      },
      {
        id: "related-newly",
        title: "Newly diagnosed",
        question:
          "What decisions matter most after a new breast cancer diagnosis?",
        hint: "Orient to what information comes first after diagnosis.",
        href: `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`,
        cta: "Open newly diagnosed guide",
      },
    ],
    secondary: [
      {
        href: `/questions/${BREAST_GENETICS_SLUG}`,
        label: "Genetic counseling before surgery",
        hint: "when inherited risk could change the operation",
      },
      {
        href: "/cancers/breast-cancer/understanding-subtype",
        label: "Understanding Subtype",
        hint: "if you still need to orient to HR+ / HER2+ / triple-negative",
      },
      {
        href: "/cancers/breast-cancer/treatment-landscape",
        label: "Treatment Landscape",
        hint: "a map of treatment families after you know subtype and stage",
      },
    ],
    mapHref: "/cancers/breast-cancer#decision-moment",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand breast cancer stage as part of decision preparation. It is not a prognosis table and does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Breast Cancer",
      "American Society of Clinical Oncology (ASCO)",
      "American Cancer Society (ACS)",
    ],
  },
} as const;
