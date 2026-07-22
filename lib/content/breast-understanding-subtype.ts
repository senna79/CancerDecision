/**
 * Supporting Module — Understanding Breast Cancer Subtype
 * Orientation analogue of lung “Types”: biology that shapes the first plan.
 * See docs/Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md §3
 */

import {
  BREAST_GENETICS_SLUG,
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/breast-entry-slugs";

export const BREAST_UNDERSTANDING_SUBTYPE = {
  path: "/cancers/breast-cancer/understanding-subtype",
  slug: "understanding-subtype",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Breast cancer",
    title: "What Is My Breast Cancer Subtype?",
    subtitle:
      "Breast cancer is not one conversation. Receptor and HER2 status help explain which systemic options and sequencing may be discussed first.",
    boundary:
      "This page helps you orient to tumor biology. It is not a treatment recommendation — and it is not the same as germline genetic counseling.",
  },

  anchors: [
    { label: "Subtypes", href: "#type-map" },
    { label: "Why it matters", href: "#why-it-matters" },
    { label: "Pathology", href: "#pathology-report" },
    { label: "Ask doctor", href: "#doctor-checklist" },
  ],

  directAnswer: {
    id: "direct-answer",
    label: "Direct answer",
    lead: "Your breast cancer subtype comes mainly from pathology testing on biopsy or surgical tissue — especially hormone receptors (ER/PR) and HER2.",
    intro: "Knowing your subtype helps your care team understand:",
    points: [
      "which systemic therapy families may belong in the discussion;",
      "whether treatment might start before or after surgery;",
      "what additional assays (including some genomic tests) may still matter.",
    ],
    bodyClose:
      "Subtype is one important piece of the decision — not the whole plan. Stage, health, goals, and personal priorities still matter.",
    close:
      "The useful next step is not memorizing every assay name. It is confirming your receptor and HER2 status — and asking whether pending results would change the next decision.",
  },

  typeMap: {
    id: "type-map",
    title: "The main subtype forks patients hear most often",
    lead: "Start with the map on many pathology reports. Your situation may combine labels (for example HR+ and HER2+). Ask your team to translate your report in plain language.",
    types: [
      {
        id: "hr-positive",
        name: "Hormone receptor–positive (HR+)",
        tag: "ER and/or PR positive",
        body: "The cancer may respond to endocrine (hormone) approaches. Many people with HR+ disease discuss endocrine therapy as a central part of the plan.",
        bulletsIntro: "Discussions often include:",
        bullets: [
          "Endocrine therapy — often long-duration",
          "Whether chemotherapy adds enough benefit in your situation",
          "Genomic assays (for some early HR+ / HER2− cancers)",
        ],
        whyTitle: "Why it matters",
        whyIntro: "HR+ status can change:",
        whyItems: [
          "which medicine families lead the conversation;",
          "how long therapy may continue;",
          "whether a genomic assay would refine chemo discussions.",
        ],
        note: "If you are also HER2-positive, ask how both labels shape the plan together — not as two unrelated diagnoses.",
      },
      {
        id: "her2-positive",
        name: "HER2-positive",
        tag: "HER2 testing positive",
        body: "HER2-targeted therapy usually belongs in the systemic discussion, often combined with chemotherapy, and sometimes sequenced before or after surgery.",
        bulletsIntro: "Doctors consider:",
        bullets: [
          "HER2-targeted therapy as part of the plan",
          "Combinations and duration that fit your stage",
          "How response before surgery may be monitored, if neoadjuvant therapy is discussed",
        ],
        whyTitle: "Why it matters",
        whyIntro: null as string | null,
        whyItems: [
          "HER2 status opens a different option family than HR+ alone or triple-negative disease. Ask what the HER2-targeted part is trying to achieve for you.",
        ],
        note: "Borderline or unclear HER2 results sometimes need repeat or reflex testing — ask before locking a major step.",
      },
      {
        id: "triple-negative",
        name: "Triple-negative (TNBC)",
        tag: "ER, PR, and HER2 negative",
        body: "When hormone receptors and HER2 are all negative, chemotherapy often leads the systemic conversation. Immunotherapy may apply in selected situations — ask whether it is relevant for you.",
        bulletsIntro: "Common discussion points include:",
        bullets: [
          "Chemotherapy regimens and sequencing",
          "Whether immunotherapy belongs in your plan",
          "Clinical trial options in some settings",
        ],
        whyTitle: "Why it matters",
        whyIntro: "TNBC changes:",
        whyItems: [
          "which medicine families are usually discussed first;",
          "how sequencing before or after surgery may be framed;",
          "what questions to ask about trials or immunotherapy.",
        ],
        note: "Triple-negative is a biology label — not a single automatic regimen. Ask what fits your stage and goals.",
      },
    ],
  },

  whyItMatters: {
    id: "why-it-matters",
    title: "Why does my subtype matter?",
    lead: "Subtype helps guide treatment discussions. It does not choose a treatment by itself.",
    bridgeIntro: "Your subtype can influence:",
    bridges: [
      {
        id: "why-systemic",
        title: "Which systemic options are considered",
        body: "HR+, HER2+, and triple-negative each open different medicine families — endocrine, HER2-targeted, chemotherapy, and immunotherapy in selected cases — rather than one flat drug menu.",
        ctaLabel: "Systemic options by subtype",
        ctaHref: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
      },
      {
        id: "why-sequencing",
        title: "Whether treatment may start before or after surgery",
        body: "Subtype and stage often shape neoadjuvant versus adjuvant sequencing — a breast-distinctive fork before locking the local plan.",
        ctaLabel: "Treatment sequencing decision",
        ctaHref: `/questions/${BREAST_SEQUENCING_SLUG}`,
      },
      {
        id: "why-waiting",
        title: "Whether to wait for complete results",
        body: "If receptor or HER2 results are still pending, ask whether major sequencing or surgery decisions should wait until the biology picture is clear.",
        ctaLabel: "Subtype testing decision",
        ctaHref: `/questions/${BREAST_SUBTYPE_SLUG}`,
      },
    ],
    closeLines: [
      "Subtype answers: “What biology is this cancer?”",
      "Other information — stage, genetics when relevant, health, and goals — answers: “Which plan fits me now?”",
    ],
  },

  faqs: {
    id: "common-questions",
    title: "Questions patients often ask",
    lead: "Open a question only if it matches what you are wondering.",
    items: [
      {
        id: "faq-better-subtype",
        question: "Is one subtype better than another?",
        paragraphs: [
          "Subtypes behave and are treated differently.",
          "The important question is not: “Which subtype is better?”",
          "It is: “What does my subtype mean for the options we should discuss?”",
        ],
      },
      {
        id: "faq-determines-treatment",
        question: "Does my subtype determine my treatment?",
        paragraphs: ["Not by itself. Doctors also consider:"],
        bullets: [
          "stage and extent;",
          "whether therapy starts before or after surgery;",
          "overall health and life-stage priorities;",
          "side effects and practical fit;",
          "personal goals.",
        ],
      },
      {
        id: "faq-vs-genetics",
        question:
          "Is subtype the same as genetic counseling or BRCA testing?",
        paragraphs: [
          "No. They answer different questions.",
          "Subtype (tumor biology): receptors and HER2 on the cancer itself.",
          "Germline genetics: inherited risk that can change surgery choices for some people.",
          "Ask about both if either could change your next step — but do not treat them as the same test.",
        ],
      },
      {
        id: "faq-genomic",
        question: "What about Oncotype or other genomic assays?",
        paragraphs: [
          "For some early HR+ / HER2− cancers, genomic assays help estimate whether chemotherapy adds enough benefit beyond endocrine therapy.",
          "Not everyone needs this assay. Ask whether the result would change your decision — and when it would be ordered.",
        ],
      },
      {
        id: "faq-friend-different",
        question: "Why did my friend with breast cancer get different treatment?",
        paragraphs: [
          "Different plans may happen because cancers differ in:",
        ],
        bullets: [
          "subtype;",
          "stage;",
          "sequencing;",
          "genetics;",
          "personal health and goals.",
        ],
        close: "A treatment that fits one person may not fit another.",
      },
    ],
  },

  pathology: {
    id: "pathology-report",
    title: "Understanding your pathology report",
    heroSentence:
      "Your pathology report contains important information about your breast cancer’s biology.",
    reassure: "You do not need to understand every medical term.",
    prompt: "Start by looking for these:",
    finders: [
      {
        id: "find-receptors",
        label: "Hormone receptors (ER / PR)",
        examples: "Positive · Negative · Percentage or intensity when listed",
        hint: "Ask: “Am I hormone receptor–positive — and what does that mean for options?”",
      },
      {
        id: "find-her2",
        label: "HER2 status",
        examples: "Positive · Negative · Equivocal / pending repeat testing",
        hint: "Ask: “Is my HER2 result complete and clear?”",
      },
      {
        id: "find-tnbc",
        label: "Triple-negative wording",
        examples: "When ER, PR, and HER2 are all negative",
        hint: "Ask: “If I am triple-negative, which systemic approaches fit my situation?”",
      },
      {
        id: "find-pending",
        label: "Pending or incomplete biology",
        examples: "Tests ordered · Results pending · Repeat / reflex testing",
        hint: "Ask: “Would pending results change sequencing or surgery timing?”",
      },
    ],
    close:
      "Bring the report (or a photo/PDF) to your appointment. Confirming receptor and HER2 status is enough to start a clearer conversation.",
  },

  checklist: {
    id: "doctor-checklist",
    title: "Questions to take to your doctor",
    leaveTitle: "Before you leave, confirm:",
    leaveItems: [
      "What is my receptor and HER2 status in plain language?",
      "Are any subtype results still pending?",
      "Would pending results change options or sequencing?",
      "Do I also need germline genetic counseling before surgery?",
    ],
    groups: [
      {
        id: "checklist-diagnosis",
        heading: "Understand my subtype",
        questions: [
          "Am I HR+, HER2+, triple-negative — or a combination?",
          "Can you explain the key biology lines on my pathology report?",
          "Is any testing still incomplete?",
        ],
      },
      {
        id: "checklist-impact",
        heading: "Understand treatment impact",
        questions: [
          "How does my subtype affect systemic options?",
          "Should treatment start before or after surgery for my subtype?",
          "Is a genomic assay relevant for my situation?",
        ],
      },
      {
        id: "checklist-next",
        heading: "Plan my next step",
        questions: [
          "What should I learn about next — sequencing, surgery, or systemic options?",
          "Do I need genetic counseling before a final surgery choice?",
        ],
      },
    ],
  },

  related: {
    id: "related-decisions",
    title: "Continue into a decision",
    lead: "Your next steps may include one of these Decision Paths — not more articles.",
    items: [
      {
        id: "related-subtype-entry",
        title: "Subtype testing",
        question:
          "Do I need my breast cancer subtype results before choosing treatment?",
        hint: "Decide whether pending biology should arrive before locking a first plan.",
        href: `/questions/${BREAST_SUBTYPE_SLUG}`,
        cta: "Open subtype decision",
      },
      {
        id: "related-sequencing",
        title: "Treatment sequencing",
        question:
          "Should breast cancer treatment start before or after surgery?",
        hint: "Compare neoadjuvant vs adjuvant timing for your situation.",
        href: `/questions/${BREAST_SEQUENCING_SLUG}`,
        cta: "Open sequencing decision",
      },
      {
        id: "related-systemic",
        title: "Systemic options",
        question:
          "How do I choose among systemic therapy options for my breast cancer subtype?",
        hint: "Compare option families by subtype — not a flat drug menu.",
        href: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
        cta: "Open systemic comparison",
      },
      {
        id: "related-genetics",
        title: "Genetic counseling",
        question:
          "Do I need genetic counseling before breast cancer surgery?",
        hint: "Germline risk (BRCA-class) is separate from subtype — and may change the operation.",
        href: `/questions/${BREAST_GENETICS_SLUG}`,
        cta: "Open genetics decision",
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
    stageHref: "/cancers/breast-cancer/understanding-stage",
    stageLabel: "Understanding Stage",
    stageHint:
      "what stage and nodal extent mean for options and sequencing next.",
    landscapeHref: "/cancers/breast-cancer/treatment-landscape",
    landscapeLabel: "Treatment Landscape",
    landscapeHint:
      "a map of treatment families after you know subtype and stage.",
    mapHref: "/cancers/breast-cancer#decision-moment",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand breast cancer subtype as part of decision preparation. It does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Breast Cancer",
      "American Cancer Society (ACS)",
      "American Society of Clinical Oncology (ASCO)",
    ],
  },
} as const;
