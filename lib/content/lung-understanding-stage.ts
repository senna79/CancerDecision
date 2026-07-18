/**
 * Supporting Module #2 — Understanding Lung Cancer Stage
 * Diagnosis orientation: what stage means → why talks differ → takeaway.
 * Not a Stage I–IV encyclopedia; not the Stage IV Decision Entry.
 */

export const LUNG_UNDERSTANDING_STAGE = {
  path: "/cancers/lung-cancer/understanding-stage",
  slug: "understanding-stage",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Lung cancer",
    title: "What Does My Lung Cancer Stage Mean?",
    subtitle:
      "Cancer stage helps doctors understand where your cancer is, whether it has spread, and which treatment approaches may be considered.",
    boundary:
      "This page helps you orient to staging. It is not a treatment recommendation, and it is not a Stage IV decision guide.",
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
    lead: "Cancer stage describes where the cancer is located, how large or extensive it is, and whether it has spread beyond the original area.",
    intro: "Stage helps guide treatment discussions. However, stage is not the only factor. Doctors also consider:",
    points: [
      "cancer type;",
      "biomarker results;",
      "previous treatments;",
      "overall health;",
      "your personal goals.",
    ],
    bodyClose: null as string | null,
    close:
      "The useful question is not “What number am I?” It is “What does my stage mean for the options we should discuss?”",
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
        body: "Doctors look at the location of the tumor and whether nearby structures are involved.",
      },
      {
        id: "spread",
        number: "2",
        title: "Has it spread?",
        body: "Doctors evaluate whether cancer involves nearby lymph nodes or other areas of the body.",
      },
      {
        id: "treatment-meaning",
        number: "3",
        title: "What does this mean for treatment?",
        body: "Stage helps doctors discuss whether removing cancer may be possible, whether treatment needs to work throughout the body, and what goals are realistic.",
      },
    ],
    takeaway:
      "Stage is a map of where cancer is. It helps guide decisions, but it does not define your entire situation.",
  },

  stageMap: {
    id: "stage-map",
    title: "The broad stages of lung cancer",
    lead: "Think in three broad groups — not a full medical staging chart. Your doctor can translate your report into the group that fits you.",
    bands: [
      {
        id: "early-stage",
        name: "Early-stage lung cancer",
        means:
          "Cancer is limited to the lung area and has not spread widely.",
        discussionsIntro: "Treatment discussions may include:",
        discussions: [
          "surgery;",
          "radiation;",
          "additional treatments depending on risk.",
        ],
        note: "Ask whether removing the cancer is a possible goal — and what else may be recommended.",
      },
      {
        id: "locally-advanced",
        name: "Locally advanced lung cancer",
        means:
          "Cancer may involve nearby structures or lymph nodes.",
        discussionsIntro: "Treatment discussions may include:",
        discussions: [
          "more than one treatment approach;",
          "a plan shared across specialists;",
          "clear goals for each part of the plan.",
        ],
        note: "Ask why multiple treatments are being considered — and what each part is trying to achieve.",
      },
      {
        id: "advanced",
        name: "Advanced lung cancer",
        means:
          "Cancer has spread to distant areas, or local treatment alone is not enough.",
        discussionsIntro: "Treatment discussions may focus on:",
        discussions: [
          "controlling cancer;",
          "reducing symptoms;",
          "maintaining quality of life;",
          "keeping future options open.",
        ],
        note: "Goals often differ from earlier-stage plans. That is not the same as “nothing can be done.”",
        entryHref:
          "/questions/how-to-choose-treatment-options-for-stage-iv-lung-cancer",
        entryLabel: "Facing Stage IV choices? Open the Stage IV decision guide",
      },
    ],
  },

  whyItMatters: {
    id: "why-it-matters",
    title: "Why does stage matter for treatment decisions?",
    lead: "Stage helps shape which approaches enter the conversation. It does not choose a treatment by itself.",
    bridgeIntro: "Stage helps answer:",
    bridges: [
      {
        id: "why-surgery",
        title: "Can surgery be part of my plan?",
        body: "For some early-stage situations, surgery may be an important discussion — depending on location, health, and whether removal is realistic.",
        ctaLabel: "Surgery decision",
        ctaHref:
          "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      },
      {
        id: "why-systemic",
        title: "Do I need treatment that works throughout the body?",
        body: "Some stages require treatments that reach cancer beyond one location. Others combine local and systemic approaches.",
        ctaLabel: "Compare treatment options",
        ctaHref:
          "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      },
      {
        id: "why-biomarkers",
        title: "Should I consider additional information?",
        body: "Stage is considered together with cancer type, pathology, imaging, and — especially in many NSCLC cases — biomarker testing.",
        ctaLabel: "Biomarker testing decision",
        ctaHref:
          "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
      },
    ],
    closeLines: [
      "Stage answers: “Where is the cancer, and how far has it gone?”",
      "Other information answers: “Which plan fits me now?”",
    ],
  },

  myths: {
    id: "myths",
    title: "Stage does not tell the whole story",
    lead: "These misconceptions are common — and they can get in the way of a clear next conversation.",
    items: [
      {
        id: "myth-nothing",
        myth: "“A higher stage means there is nothing doctors can do.”",
        reality:
          "Different stages have different treatment goals. Even advanced cancer may have options focused on controlling cancer, improving symptoms, and maintaining quality of life.",
      },
      {
        id: "myth-same-tx",
        myth: "“Everyone with the same stage gets the same treatment.”",
        reality:
          "Treatment can differ because of biomarkers, cancer type, overall health, and personal goals.",
      },
      {
        id: "myth-future",
        myth: "“My stage is my future.”",
        reality:
          "Stage provides important information. Your path also depends on treatment response, new information, and the choices you make with your care team.",
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
          "Stage helps doctors understand where cancer is, how it may behave, and which treatment approaches may make sense.",
          "It is one important piece of treatment planning — not the whole plan.",
        ],
      },
      {
        id: "faq-stage-change",
        question: "Can my lung cancer stage change?",
        paragraphs: [
          "The stage assigned at diagnosis usually describes the extent of cancer at that time.",
          "Your current situation can change over time and may affect future decisions — even if the original stage label stays in your record.",
        ],
      },
      {
        id: "faq-stage-iv",
        question: "Does Stage IV mean treatment is impossible?",
        paragraphs: [
          "No.",
          "Stage IV often means treatment goals are different. Doctors may focus on controlling cancer, reducing symptoms, and maintaining quality of life.",
          "Many factors influence available options — including cancer type, biomarkers, health, and your goals.",
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
          "cancer type;",
          "biomarkers;",
          "previous treatment;",
          "health;",
          "personal goals.",
        ],
      },
      {
        id: "faq-early-more-than-surgery",
        question: "Can early-stage lung cancer still need more than surgery?",
        paragraphs: [
          "Sometimes. Doctors may recommend additional treatment depending on cancer features, risk of recurrence, and what is found during or after surgery.",
        ],
      },
      {
        id: "faq-second-opinion-stage",
        question: "Should I get a second opinion about my stage?",
        paragraphs: [
          "A second opinion may be useful when staging is complex, a major treatment decision depends on it, or you want more confidence before locking a plan.",
        ],
      },
    ],
  },

  stageReport: {
    id: "stage-report",
    title: "Understanding your cancer stage report",
    heroSentence: "Your stage is usually summarized from imaging, pathology, and your doctor’s assessment.",
    reassure: "You do not need to decode every staging code on your own.",
    prompt: "Start by confirming:",
    finders: [
      {
        id: "find-stage-label",
        label: "What stage is listed",
        examples: "May appear in imaging summaries, pathology notes, or visit notes",
        hint: "Ask: “What stage is my lung cancer?”",
      },
      {
        id: "find-how-determined",
        label: "How it was determined",
        examples: "Imaging, biopsy/pathology, or both",
        hint: "Ask: “Is this based on imaging, biopsy, or both?”",
      },
      {
        id: "find-treatment-meaning",
        label: "What it means for options",
        examples: "Whether local treatment, systemic treatment, or both are in view",
        hint: "Ask: “What does this stage mean for my treatment options?”",
      },
      {
        id: "find-other-factors",
        label: "Other factors that affect the plan",
        examples: "Type, biomarkers, health, goals",
        hint: "Ask: “Are there other factors that affect my plan besides stage?”",
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
      "What stage is my lung cancer — and how was it determined?",
      "What does my stage mean for the options we should discuss?",
      "Is surgery still possible in my situation?",
      "What is the goal of treatment, and how will we know if it is working?",
    ],
    groups: [
      {
        id: "checklist-stage",
        heading: "Understand my stage",
        questions: [
          "What stage is my lung cancer?",
          "How was my stage determined?",
          "What does my stage mean in my situation?",
        ],
      },
      {
        id: "checklist-impact",
        heading: "Understand treatment impact",
        questions: [
          "How does my stage affect treatment options?",
          "Is surgery still possible?",
          "Are other treatments needed?",
        ],
      },
      {
        id: "checklist-future",
        heading: "Understand my future plan",
        questions: [
          "What is the goal of treatment?",
          "How will we know if treatment is working?",
          "What decisions may come next?",
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
        id: "related-biomarker",
        title: "Biomarker testing",
        question:
          "Do I need biomarker testing before choosing lung cancer treatment?",
        hint: "Understand whether additional cancer information may affect treatment choices.",
        href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
        cta: "Open biomarker decision",
      },
      {
        id: "related-surgery",
        title: "Surgery decision",
        question: "Should surgery be part of my lung cancer treatment plan?",
        hint: "Understand when surgery may be considered for your situation.",
        href: "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
        cta: "Open surgery decision",
      },
      {
        id: "related-treatment",
        title: "Treatment options",
        question: "How should I compare lung cancer treatment options?",
        hint: "Compare approaches based on your situation — not stage alone.",
        href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
        cta: "Open treatment comparison",
      },
    ],
    secondary: [
      {
        href: "/questions/how-to-choose-treatment-options-for-stage-iv-lung-cancer",
        label: "Stage IV decision guide",
        hint: "when you are choosing a path in advanced disease",
      },
      {
        href: "/cancers/lung-cancer/understanding-types",
        label: "Understanding Types",
        hint: "if you still need to orient to NSCLC vs SCLC",
      },
      {
        href: "/cancers/lung-cancer/treatment-landscape",
        label: "Treatment Landscape",
        hint: "a map of treatment directions after you know type and stage",
      },
    ],
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand lung cancer stage as part of decision preparation. It does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Non-Small Cell Lung Cancer",
      "American Society of Clinical Oncology (ASCO)",
      "American Cancer Society (ACS)",
    ],
  },
} as const;
