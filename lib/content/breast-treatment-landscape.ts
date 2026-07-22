/**
 * Supporting Module — Breast Cancer Treatment Landscape
 * Orientation analogue of lung “Treatment map”: families so later comparisons make sense.
 * See docs/Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md §3
 */

import {
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_RADIATION_SLUG,
  BREAST_RECONSTRUCTION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/breast-entry-slugs";

export const BREAST_TREATMENT_LANDSCAPE = {
  path: "/cancers/breast-cancer/treatment-landscape",
  slug: "treatment-landscape",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Breast cancer",
    title: "What Breast Cancer Treatments Might Be Discussed?",
    subtitle:
      "A map of the treatment families you may hear after diagnosis — so later comparisons make sense before you lock a first plan.",
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
    lead: "Breast cancer treatment is not one single approach.",
    intro:
      "Doctors may consider different directions depending on subtype, stage and nodal extent, whether therapy should start before surgery, your health, and your goals.",
    points: [
      "Local treatments focus on the breast and nearby areas — such as surgery or radiation.",
      "Systemic treatments work throughout the body — such as endocrine therapy, chemotherapy, targeted therapy, or immunotherapy.",
      "Reconstruction and supportive care may also belong in the conversation alongside cancer treatment.",
    ],
    close:
      "The right discussion depends on your situation — not on which treatment name sounds strongest.",
  },

  orientFirst: {
    id: "orient-first",
    title: "Orient before you compare treatments",
    lead: "In breast cancer, three facts usually change which directions get discussed first.",
    points: [
      {
        id: "orient-subtype",
        title: "Subtype (biology)",
        body: "HR+, HER2+, and triple-negative disease open different systemic families. Knowing your receptor and HER2 status changes which medicines enter the conversation.",
        href: "/cancers/breast-cancer/understanding-subtype",
        linkLabel: "What is my breast cancer subtype?",
      },
      {
        id: "orient-stage",
        title: "Stage and nodal extent",
        body: "Earlier disease more often centers on surgery plus subtype-guided systemic therapy. Locally advanced or node-heavy situations more often raise treatment before surgery.",
        href: "/cancers/breast-cancer/understanding-stage",
        linkLabel: "What does my breast cancer stage mean?",
      },
      {
        id: "orient-timing",
        title: "Whether timing before surgery matters",
        body: "Some plans start with systemic therapy first. If that fork is open, comparing drug names too early can skip the real decision.",
        href: `/questions/${BREAST_SEQUENCING_SLUG}`,
        linkLabel: "Before-vs-after-surgery decision",
      },
    ],
  },

  treatmentMap: {
    id: "treatment-map",
    title: "The breast cancer treatment map",
    lead: "Start with three large directions. Most plans combine or sequence more than one.",
    groups: [
      {
        id: "local",
        name: "Local treatments",
        tag: "Treat cancer in a specific area",
        examples: ["Surgery", "Radiation therapy", "Reconstruction (with surgery)"],
        note: "Often considered when doctors can focus treatment on the breast and nearby nodes — and when reconstruction timing matters with mastectomy.",
      },
      {
        id: "systemic",
        name: "Systemic treatments",
        tag: "Treat cancer throughout the body",
        examples: [
          "Endocrine (hormone) therapy",
          "Chemotherapy",
          "HER2-targeted therapy",
          "Immunotherapy (selected situations)",
        ],
        note: "Often considered based on subtype — and sometimes before surgery, after surgery, or both.",
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
        items: ["subtype;", "stage / nodes;", "genomic assays when relevant."],
      },
      {
        id: "history",
        title: "Your plan and history",
        items: [
          "whether treatment starts before or after surgery;",
          "what you already received;",
          "how your cancer responded.",
        ],
      },
      {
        id: "personal",
        title: "Your personal situation",
        items: [
          "overall health;",
          "surgery and reconstruction priorities;",
          "quality-of-life goals.",
        ],
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
        what: "Removes cancer from the breast and assesses or treats nearby nodes — often lumpectomy or mastectomy.",
        when: "Discussed in many early and some locally advanced plans; timing may be before or after systemic therapy.",
        entryHref: `/questions/${BREAST_SURGERY_SLUG}`,
        entryLabel: "Surgery decision",
      },
      {
        id: "radiation",
        name: "Radiation therapy",
        what: "Uses focused energy to treat remaining breast tissue, chest wall, or nodal areas after or instead of certain surgery choices.",
        when: "Common after breast-conserving surgery; also discussed after some mastectomies depending on risk.",
        entryHref: `/questions/${BREAST_RADIATION_SLUG}`,
        entryLabel: "Radiation decision",
      },
      {
        id: "endocrine",
        name: "Endocrine (hormone) therapy",
        what: "Medicines that block or lower hormone signals that can fuel HR+ breast cancer — often for years.",
        when: "Central for many HR+ plans; may be used after surgery, and sometimes in other sequences.",
        entryHref: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Systemic options by subtype",
      },
      {
        id: "chemotherapy",
        name: "Chemotherapy",
        what: "Medicines that affect fast-growing cells throughout the body.",
        when: "Discussed based on subtype, stage/risk, and sometimes genomic assay results — before or after surgery.",
        entryHref: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Systemic options by subtype",
      },
      {
        id: "targeted",
        name: "HER2-targeted therapy",
        what: "Medicines aimed at HER2-positive biology, often combined with chemotherapy.",
        when: "Usually belongs in HER2+ systemic discussions — sometimes sequenced before surgery.",
        entryHref: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Systemic options by subtype",
      },
      {
        id: "immuno",
        name: "Immunotherapy",
        what: "Helps the immune system recognize and respond to cancer in selected situations.",
        when: "More often discussed in certain triple-negative plans — ask whether it fits your subtype and stage.",
        entryHref: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Systemic options by subtype",
      },
      {
        id: "reconstruction",
        name: "Breast reconstruction",
        what: "Rebuilds breast shape after mastectomy (immediate or delayed), using implants, tissue, or a staged approach.",
        when: "Often discussed with mastectomy timing — and may interact with radiation plans.",
        entryHref: `/questions/${BREAST_RECONSTRUCTION_SLUG}`,
        entryLabel: "Reconstruction timing decision",
      },
      {
        id: "sequencing",
        name: "Treatment before vs after surgery",
        what: "A timing decision: start systemic therapy first, or operate first then add systemic therapy.",
        when: "Common when tumors are larger, nodes are involved, or subtype makes neoadjuvant therapy useful.",
        entryHref: `/questions/${BREAST_SEQUENCING_SLUG}`,
        entryLabel: "Sequencing decision",
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
          "No. A newer treatment may be helpful, but the right choice depends on evidence, subtype, stage, possible benefits, and risks.",
        ],
      },
      {
        id: "faq-multiple",
        question: "Why do some patients receive multiple treatments?",
        paragraphs: [
          "Different treatments may serve different purposes — for example shrinking cancer before surgery, lowering recurrence risk, or controlling cancer over time.",
        ],
      },
      {
        id: "faq-subtype",
        question: "Why does my subtype change which medicines are discussed?",
        paragraphs: [
          "Hormone receptors and HER2 help explain which systemic families may work. Two people with similar stage can hear very different medicine menus.",
        ],
      },
      {
        id: "faq-goals-change",
        question: "Can treatment goals change over time?",
        paragraphs: [
          "Yes. Goals may change depending on cancer response, side effects, and personal priorities — including surgery and reconstruction preferences.",
        ],
      },
      {
        id: "faq-different",
        question:
          "Why did someone else with breast cancer get a different treatment?",
        paragraphs: [
          "Treatment depends on subtype, stage, sequencing, genetics in some cases, previous treatment, and personal goals. There is no single plan for everyone.",
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
      "Should any treatment start before surgery in my situation?",
      "What happens next if this treatment does not work as hoped?",
    ],
    groups: [
      {
        id: "checklist-understanding",
        heading: "Understanding my treatment",
        questions: [
          "What is the goal of this treatment?",
          "Why is this treatment recommended for my subtype and stage?",
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
          "How do surgery, radiation, and reconstruction fit the sequence?",
          "What options remain if it does not work?",
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
        id: "related-systemic",
        title: "Systemic options",
        question:
          "How do I choose among systemic therapy options for my breast cancer subtype?",
        hint: "Compare medicine families by subtype — not a flat drug menu.",
        href: `/questions/${BREAST_TREATMENT_COMPARE_SLUG}`,
        cta: "Open systemic comparison",
      },
      {
        id: "related-sequencing",
        title: "Treatment sequencing",
        question:
          "Should breast cancer treatment start before or after surgery?",
        hint: "Decide timing before comparing every drug name.",
        href: `/questions/${BREAST_SEQUENCING_SLUG}`,
        cta: "Open sequencing decision",
      },
      {
        id: "related-surgery",
        title: "Surgery decision",
        question: "How should I compare lumpectomy and mastectomy?",
        hint: "Compare local surgery options — including radiation and reconstruction context.",
        href: `/questions/${BREAST_SURGERY_SLUG}`,
        cta: "Open surgery decision",
      },
      {
        id: "related-subtype",
        title: "Subtype testing",
        question:
          "Do I need my breast cancer subtype results before choosing treatment?",
        hint: "Confirm biology before locking a systemic plan.",
        href: `/questions/${BREAST_SUBTYPE_SLUG}`,
        cta: "Open subtype decision",
      },
    ],
    secondary: [
      {
        href: `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`,
        label: "Newly diagnosed guide",
        hint: "if you still need to orient to first decisions after diagnosis",
      },
      {
        href: "/cancers/breast-cancer/understanding-subtype",
        label: "Understanding Subtype",
        hint: "if you still need to orient to HR+ / HER2+ / triple-negative",
      },
      {
        href: "/cancers/breast-cancer/understanding-stage",
        label: "Understanding Stage",
        hint: "if you still need to orient to what stage means",
      },
    ],
    mapHref: "/cancers/breast-cancer#decision-moment",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand breast cancer treatment directions as part of decision preparation. It does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Breast Cancer",
      "American Society of Clinical Oncology (ASCO)",
      "American Cancer Society (ACS)",
    ],
  },
} as const;
