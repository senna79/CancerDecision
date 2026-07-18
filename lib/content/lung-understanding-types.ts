/**
 * Supporting Module #1 — Understanding Lung Cancer Types
 * Diagnosis orientation map → meaning bridges → doctor takeaway.
 * See docs/Supporting_Module_Understanding_Lung_Cancer_Types_v1.0.md
 */

export const LUNG_UNDERSTANDING_TYPES = {
  path: "/cancers/lung-cancer/understanding-types",
  slug: "understanding-types",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Lung cancer",
    title: "What Type of Lung Cancer Do I Have?",
    subtitle:
      "Lung cancer is not one single disease. Understanding your cancer type helps explain why certain tests and treatments may be discussed.",
    boundary:
      "This page helps you orient to your diagnosis. It is not a treatment recommendation.",
  },

  anchors: [
    { label: "Types", href: "#type-map" },
    { label: "Why it matters", href: "#why-it-matters" },
    { label: "Pathology", href: "#pathology-report" },
    { label: "Ask doctor", href: "#doctor-checklist" },
  ],

  directAnswer: {
    id: "direct-answer",
    label: "Direct answer",
    lead: "Your lung cancer type comes mainly from pathology and biopsy results.",
    intro: "Knowing your type helps your care team understand:",
    points: [
      "how your cancer may behave;",
      "which treatments may be discussed;",
      "whether additional testing may be useful.",
    ],
    bodyClose:
      "Your cancer type is one important piece of the decision — not the only one.",
    close:
      "The useful next step is not memorizing every subtype. It is confirming your type and asking how it shapes the conversation ahead.",
  },

  typeMap: {
    id: "type-map",
    title: "The two main types of lung cancer",
    lead: "Start with the map patients hear most often. Your report may use these names, or a more specific subtype under one of them.",
    types: [
      {
        id: "nsclc",
        name: "Non-Small Cell Lung Cancer (NSCLC)",
        tag: "The most common type of lung cancer",
        body: "Most lung cancers are NSCLC.",
        bulletsIntro: "NSCLC includes several subtypes, such as:",
        bullets: [
          "Adenocarcinoma",
          "Squamous cell carcinoma",
          "Other less common types",
        ],
        whyTitle: "Why it matters",
        whyIntro: "Treatment discussions may depend on:",
        whyItems: [
          "cancer stage;",
          "biomarker results;",
          "whether surgery is possible;",
          "your overall health.",
        ],
        note: "Questions about subtype and biomarkers belong in your doctor checklist below — not as homework before you know your report.",
      },
      {
        id: "sclc",
        name: "Small Cell Lung Cancer (SCLC)",
        tag: "A different type of lung cancer",
        body: "SCLC often behaves differently from NSCLC.",
        bulletsIntro: "Doctors consider:",
        bullets: [
          "where the cancer is located;",
          "whether it has spread;",
          "how it responds to treatment.",
        ],
        whyTitle: "Why it matters",
        whyIntro: null as string | null,
        whyItems: [
          "SCLC treatment decisions may differ from NSCLC. Your doctor will consider the overall situation — not the cancer type alone.",
        ],
        note: "If your report says small cell, ask what the treatment goal is in your situation and which options should be discussed now.",
      },
    ],
  },

  whyItMatters: {
    id: "why-it-matters",
    title: "Why does my cancer type matter?",
    lead: "Cancer type helps guide treatment discussions. It does not choose a treatment by itself.",
    bridgeIntro: "Your cancer type can influence:",
    bridges: [
      {
        id: "why-treatments",
        title: "Which treatments are considered",
        body: "Different cancer types may lead doctors to discuss different approaches — for example surgery, radiation, or systemic treatments — and in what order.",
        ctaLabel: "Compare treatment options",
        ctaHref:
          "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      },
      {
        id: "why-biomarkers",
        title: "Whether biomarker testing matters",
        body: "Some lung cancers — especially many NSCLC cases — may be tested for specific characteristics that can affect which options are discussed.",
        ctaLabel: "Biomarker testing decision",
        ctaHref:
          "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
      },
      {
        id: "why-trials",
        title: "Which clinical trials may apply",
        body: "Some trials are designed for specific cancer types or characteristics. Knowing your type helps you ask whether research options belong in the conversation.",
        ctaLabel: "Clinical trial decision",
        ctaHref: "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
      },
    ],
    closeLines: [
      "Type answers: “What kind of cancer is this?”",
      "Other information — stage, biomarkers, health, and goals — answers: “Which plan fits me now?”",
    ],
  },

  faqs: {
    id: "common-questions",
    title: "Questions patients often ask",
    lead: "Open a question only if it matches what you are wondering.",
    items: [
      {
        id: "faq-better-type",
        question: "Is one type of lung cancer better than another?",
        paragraphs: [
          "Cancer types behave differently.",
          "The important question is not: “Which type is better?”",
          "It is: “What does my cancer type mean for my treatment options?”",
        ],
      },
      {
        id: "faq-determines-treatment",
        question: "Does my cancer type determine my treatment?",
        paragraphs: ["Not by itself. Doctors also consider:"],
        bullets: [
          "stage;",
          "biomarkers;",
          "previous treatments;",
          "overall health;",
          "personal goals.",
        ],
      },
      {
        id: "faq-type-change",
        question: "Can my cancer type change over time?",
        paragraphs: [
          "The original cancer type usually remains part of your medical record.",
          "However, cancer characteristics can change, especially after treatment. Your doctor may consider whether new information is needed.",
        ],
      },
      {
        id: "faq-why-biomarkers",
        question:
          "Why do I need biomarker testing if my cancer type is already known?",
        paragraphs: [
          "Cancer type and biomarkers answer different questions.",
          "Cancer type: “What kind of cancer is this?”",
          "Biomarkers: “What characteristics might affect treatment choices?”",
          "Both may be important.",
        ],
      },
      {
        id: "faq-friend-different",
        question: "Why did my friend with lung cancer get different treatment?",
        paragraphs: [
          "Different treatment plans may happen because cancers differ in:",
        ],
        bullets: [
          "type;",
          "stage;",
          "biomarkers;",
          "previous treatments;",
          "personal health.",
        ],
        close: "A treatment that fits one person may not fit another.",
      },
    ],
  },

  pathology: {
    id: "pathology-report",
    title: "Understanding your pathology report",
    heroSentence:
      "Your pathology report contains important information about your cancer.",
    reassure: "You do not need to understand every medical term.",
    prompt: "Start by looking for these:",
    finders: [
      {
        id: "find-cancer-type",
        label: "Cancer type",
        examples: "NSCLC · SCLC",
        hint: "Ask: “Which main type do I have?”",
      },
      {
        id: "find-subtype",
        label: "Subtype",
        examples: "Adenocarcinoma · Squamous cell carcinoma",
        hint: "Ask: “What subtype is listed — and does it change anything we discuss?”",
      },
      {
        id: "find-biomarkers",
        label: "Biomarker information",
        examples:
          "May appear as molecular / genomic / biomarker results — or as “pending” / “not performed”",
        hint: "Ask: “Has biomarker testing been performed for my decision?”",
      },
      {
        id: "find-other",
        label: "Other important details",
        examples:
          "Findings your doctor says affect staging or treatment timing",
        hint: "Ask: “Which findings on this report change the next decision?”",
      },
    ],
    close:
      "Bring the report (or a photo/PDF) to your appointment. Confirming a few terms is enough to start a clearer conversation.",
  },

  checklist: {
    id: "doctor-checklist",
    title: "Questions to take to your doctor",
    leaveTitle: "Before you leave, confirm:",
    leaveItems: [
      "What type of lung cancer do I have — and what subtype?",
      "Can you explain the key lines on my pathology report?",
      "How does my cancer type affect the options we should discuss?",
      "Are there tests that could provide more information before we decide?",
    ],
    groups: [
      {
        id: "checklist-diagnosis",
        heading: "Understand my diagnosis",
        questions: [
          "What type of lung cancer do I have?",
          "What subtype is it?",
          "Can you explain my pathology report?",
        ],
      },
      {
        id: "checklist-impact",
        heading: "Understand treatment impact",
        questions: [
          "How does my cancer type affect treatment options?",
          "Are there tests that could provide more information?",
          "What decisions will this information help us make?",
        ],
      },
      {
        id: "checklist-next",
        heading: "Plan my next step",
        questions: [
          "What should I learn about next?",
          "Which decisions should I prepare for?",
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
        id: "related-biomarker",
        title: "Biomarker testing",
        question:
          "Do I need biomarker testing before choosing lung cancer treatment?",
        hint: "Understand whether additional cancer information may affect treatment discussions.",
        href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
        cta: "Open biomarker decision",
      },
      {
        id: "related-treatment",
        title: "Treatment options",
        question: "How should I compare lung cancer treatment options?",
        hint: "Learn how doctors compare different approaches for your situation.",
        href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
        cta: "Open treatment comparison",
      },
      {
        id: "related-trial",
        title: "Clinical trials",
        question: "Should I consider a clinical trial for lung cancer?",
        hint: "Understand whether research options may apply to your type and situation.",
        href: "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
        cta: "Open clinical trial decision",
      },
    ],
    landscapeHref: "/cancers/lung-cancer/treatment-landscape",
    landscapeLabel: "Lung Cancer Treatment Landscape",
    landscapeHint:
      "a map of treatment directions after you know your type.",
    stageHref: "/cancers/lung-cancer/understanding-stage",
    stageLabel: "Understanding Stage",
    stageHint: "what stage means for the options you may discuss next.",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand lung cancer type as part of decision preparation. It does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Non-Small Cell Lung Cancer",
      "American Cancer Society (ACS)",
      "American Society of Clinical Oncology (ASCO)",
    ],
  },
} as const;
