/**
 * Supporting Module #3 — Lung Cancer Treatment Landscape
 * Treatment direction map → how doctors choose → short approaches → checklist.
 * Route kept for SEO; not a Decision Path and not a treatment encyclopedia.
 */

export const LUNG_TREATMENT_LANDSCAPE = {
  path: "/cancers/lung-cancer/treatment-landscape",
  slug: "treatment-landscape",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Lung cancer",
    title: "What Lung Cancer Treatments Might Be Discussed?",
    subtitle:
      "A map of the directions you may hear after diagnosis — so you can see how they relate before you compare options with your care team.",
    boundary:
      "This is not a treatment menu, not a ranking, and not a recommendation of what you should choose.",
  },

  anchors: [
    { label: "Treatment map", href: "#treatment-map" },
    { label: "How doctors choose", href: "#how-doctors-choose" },
    { label: "Approaches", href: "#approaches" },
    { label: "Ask doctor", href: "#doctor-checklist" },
  ],

  directAnswer: {
    id: "direct-answer",
    label: "Direct answer",
    lead: "Lung cancer treatment is not one single approach.",
    intro:
      "Doctors may consider different directions depending on cancer type, stage, biomarker information, previous treatments, your health, and your goals.",
    points: [
      "Local treatments focus on a specific area — such as surgery or radiation.",
      "Systemic treatments work throughout the body — such as chemotherapy, targeted therapy, or immunotherapy.",
      "Research options and supportive care may also belong in the conversation.",
    ],
    close:
      "The right discussion depends on your situation — not on which treatment name sounds strongest.",
  },

  orientFirst: {
    id: "orient-first",
    title: "Orient before you compare treatments",
    lead: "In lung cancer, three facts usually change which directions get discussed first.",
    points: [
      {
        id: "orient-type",
        title: "Cancer type",
        body: "NSCLC and SCLC are planned differently. Knowing your type changes how surgery, radiation, medicines, and trials enter the conversation.",
        href: "/cancers/lung-cancer/understanding-types",
        linkLabel: "What type of lung cancer do I have?",
      },
      {
        id: "orient-stage",
        title: "How far it has spread",
        body: "Earlier-stage disease more often includes local treatments. More advanced disease more often starts with systemic therapy — sometimes with radiation for specific problems.",
        href: "/cancers/lung-cancer/understanding-stage",
        linkLabel: "What does my lung cancer stage mean?",
      },
      {
        id: "orient-info",
        title: "Whether key information is complete",
        body: "For many people with NSCLC, biomarker testing is part of building the map — not an optional extra. Incomplete information can mean you are comparing options too early.",
        href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
        linkLabel: "Biomarker testing decision",
      },
    ],
  },

  treatmentMap: {
    id: "treatment-map",
    title: "The lung cancer treatment map",
    lead: "Start with three large directions. Most plans combine or sequence more than one.",
    groups: [
      {
        id: "local",
        name: "Local treatments",
        tag: "Treat cancer in a specific area",
        examples: ["Surgery", "Radiation therapy"],
        note: "Often considered when doctors can focus treatment on a known location.",
      },
      {
        id: "systemic",
        name: "Systemic treatments",
        tag: "Treat cancer throughout the body",
        examples: ["Chemotherapy", "Targeted therapy", "Immunotherapy"],
        note: "Often considered when cancer may need treatment beyond one location — or before/after local treatment.",
      },
      {
        id: "research-support",
        name: "Research & supportive care",
        tag: "Additional directions in the conversation",
        examples: ["Clinical trials", "Supportive care"],
        note: "Trials may open another option depending on fit. Supportive care can run alongside cancer treatment.",
      },
    ],
  },

  howDoctorsChoose: {
    id: "how-doctors-choose",
    title: "How doctors choose between treatments",
    lead: "Doctors do not choose treatments based on the treatment name alone.",
    factors: [
      {
        id: "cancer-info",
        title: "Your cancer information",
        items: ["cancer type;", "stage;", "biomarkers."],
      },
      {
        id: "history",
        title: "Your treatment history",
        items: ["what you already received;", "how your cancer responded."],
      },
      {
        id: "personal",
        title: "Your personal situation",
        items: ["overall health;", "priorities;", "quality-of-life goals."],
      },
    ],
    notLabel: "The question is not:",
    notQuestion: "Which treatment is the strongest?",
    betterLabel: "The better question is:",
    betterQuestion: "Which treatment fits my situation and goals?",
  },

  approaches: {
    id: "approaches",
    title: "Common directions you may hear",
    lead: "Each line is a direction — not a recommendation. Open the Decision Path when you need to compare or decide.",
    items: [
      {
        id: "surgery",
        name: "Surgery",
        what: "Removes cancer when location, stage, and recovery make that realistic.",
        when: "More often discussed in earlier-stage NSCLC.",
        entryHref:
          "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
        entryLabel: "Surgery decision",
      },
      {
        id: "radiation",
        name: "Radiation therapy",
        what: "Uses focused energy to treat cancer in specific areas.",
        when: "Instead of surgery in some cases, with other treatments, or for symptom control.",
        entryHref:
          "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
        entryLabel: "Compare treatment options",
      },
      {
        id: "chemotherapy",
        name: "Chemotherapy",
        what: "Medicines that affect cancer cells throughout the body.",
        when: "Alone, with other medicines, with radiation, or when the plan changes.",
        entryHref:
          "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
        entryLabel: "Compare treatment options",
      },
      {
        id: "targeted",
        name: "Targeted therapy",
        what: "Medicines matched to specific characteristics of the cancer.",
        when: "When biomarker results may open a matched approach — testing status matters early.",
        entryHref:
          "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
        entryLabel: "Biomarker testing decision",
      },
      {
        id: "immuno",
        name: "Immunotherapy",
        what: "Helps the immune system recognize and respond to cancer.",
        when: "Often discussed in NSCLC based on cancer characteristics and prior treatment.",
        entryHref:
          "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
        entryLabel: "Compare treatment options",
      },
      {
        id: "trials",
        name: "Clinical trials",
        what: "Studies of new treatments or new ways of using existing treatments.",
        when: "When a study may fit your type, stage, biomarkers, or a changing plan.",
        entryHref:
          "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
        entryLabel: "Clinical trial decision",
      },
      {
        id: "supportive",
        name: "Supportive care",
        what: "Helps manage symptoms, side effects, daily challenges, and quality of life.",
        when: "Can happen alongside cancer treatment — it does not mean treatment has stopped.",
        entryHref:
          "/questions/how-should-quality-of-life-factor-into-lung-cancer-decisions",
        entryLabel: "Quality of life decision",
      },
    ],
  },

  faqs: {
    id: "common-questions",
    title: "Questions patients often ask",
    lead: "Open a question only if it matches what you are wondering.",
    items: [
      {
        id: "faq-newest",
        question: "Is the newest treatment always the best?",
        paragraphs: [
          "No. A newer treatment may be helpful, but the right choice depends on evidence, cancer characteristics, possible benefits, and risks.",
        ],
      },
      {
        id: "faq-multiple",
        question: "Why do some patients receive multiple treatments?",
        paragraphs: [
          "Different treatments may serve different purposes — for example reducing cancer before surgery, lowering recurrence risk, or controlling cancer over time.",
        ],
      },
      {
        id: "faq-goals-change",
        question: "Can treatment goals change over time?",
        paragraphs: [
          "Yes. Goals may change depending on cancer response, side effects, and personal priorities.",
        ],
      },
      {
        id: "faq-different",
        question:
          "Why did someone else with lung cancer get a different treatment?",
        paragraphs: [
          "Treatment depends on cancer type, stage, biomarkers, previous treatment, and personal health. There is no single plan for everyone.",
        ],
      },
      {
        id: "faq-decline",
        question: "Can I choose not to start a recommended treatment?",
        paragraphs: [
          "Treatment decisions should include expected benefits, possible risks, and alternatives. Your goals and preferences are part of the conversation.",
        ],
      },
    ],
  },

  checklist: {
    id: "doctor-checklist",
    title: "Questions to take to your doctor",
    leaveTitle: "Before you leave, confirm:",
    leaveItems: [
      "What is the goal of this treatment — and why is it recommended for me?",
      "What alternatives should I understand?",
      "What benefit do we expect, and how will we know if it is working?",
      "What happens next if this treatment does not work as hoped?",
    ],
    groups: [
      {
        id: "checklist-understanding",
        heading: "Understanding my treatment",
        questions: [
          "What is the goal of this treatment?",
          "Why is this treatment recommended for me?",
          "What alternatives should I understand?",
        ],
      },
      {
        id: "checklist-benefits",
        heading: "Understanding benefits and risks",
        questions: [
          "What benefit do we expect?",
          "What are the main risks?",
          "How will we know if it is working?",
        ],
      },
      {
        id: "checklist-future",
        heading: "Understanding my future",
        questions: [
          "What happens after this treatment?",
          "What options remain if it does not work?",
          "Are there decisions I should prepare for?",
        ],
      },
    ],
  },

  related: {
    id: "related-decisions",
    title: "Continue into a decision",
    lead: "Use the map to orient. Then open the Decision Path that matches the choice in front of you.",
    items: [
      {
        id: "related-options",
        title: "Treatment options",
        question: "How should I compare lung cancer treatment options?",
        hint: "Compare approaches based on your situation — not the treatment name alone.",
        href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
        cta: "Open treatment comparison",
      },
      {
        id: "related-biomarker",
        title: "Biomarker testing",
        question:
          "Do I need biomarker testing before choosing lung cancer treatment?",
        hint: "Understand whether cancer characteristics may change which options are discussed.",
        href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
        cta: "Open biomarker decision",
      },
      {
        id: "related-surgery",
        title: "Surgery decision",
        question: "Should surgery be part of my lung cancer treatment plan?",
        hint: "Understand when surgery may be considered.",
        href: "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
        cta: "Open surgery decision",
      },
    ],
    secondary: [
      {
        href: "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
        label: "Clinical trial decision",
        hint: "when research options may apply",
      },
      {
        href: "/questions/how-should-quality-of-life-factor-into-lung-cancer-decisions",
        label: "Quality of life decision",
        hint: "when burden and daily life are part of the choice",
      },
      {
        href: "/cancers/lung-cancer/understanding-types",
        label: "Understanding Types",
        hint: "if you still need to orient to NSCLC vs SCLC",
      },
      {
        href: "/cancers/lung-cancer/understanding-stage",
        label: "Understanding Stage",
        hint: "if you still need to orient to what stage means",
      },
    ],
    mapHref: "/cancers/lung-cancer#decision-moment",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand lung cancer treatment directions as part of decision preparation. It does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Non-Small Cell Lung Cancer",
      "American Society of Clinical Oncology (ASCO)",
      "American Cancer Society (ACS)",
    ],
  },
} as const;
