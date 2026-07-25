/**
 * Supporting Module — Prostate Cancer Treatment Landscape
 * Orientation analogue of breast/lung “Treatment map”:
 * families so later comparisons make sense.
 */

import {
  PROSTATE_CARE_TEAM_SLUG,
  PROSTATE_COST_SLUG,
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

export const PROSTATE_TREATMENT_LANDSCAPE = {
  path: "/cancers/prostate-cancer/treatment-landscape",
  slug: "treatment-landscape",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Prostate cancer",
    title: "What Prostate Cancer Treatment Paths Might Be Discussed?",
    subtitle:
      "A map of the monitoring and treatment families you may hear after diagnosis — so later comparisons make sense before you lock a first plan.",
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
    lead: "Prostate cancer care is not one single approach.",
    intro:
      "Doctors may consider different directions depending on risk group, stage and imaging, your health, function priorities, and your goals.",
    points: [
      "Monitoring (active surveillance) watches selected lower-risk cancers with a structured plan.",
      "Local treatments focus on the prostate — such as surgery or radiation.",
      "Hormone therapy and other systemic approaches may join the plan in selected situations.",
    ],
    close:
      "The right discussion depends on your situation — not on which treatment name sounds strongest.",
  },

  orientFirst: {
    id: "orient-first",
    title: "Orient before you compare treatments",
    lead: "In prostate cancer, three facts usually change which directions get discussed first.",
    points: [
      {
        id: "orient-risk",
        title: "Risk group",
        body: "PSA, Grade Group / Gleason, and related findings shape whether surveillance is even on the table — or whether treatment comparison comes next.",
        href: "/cancers/prostate-cancer/understanding-risk",
        linkLabel: "What is my prostate cancer risk group?",
      },
      {
        id: "orient-stage",
        title: "Stage and extent",
        body: "Localized disease more often centers on surveillance or local therapy. Locally advanced or metastatic extent reframes goals and option families.",
        href: "/cancers/prostate-cancer/understanding-stage",
        linkLabel: "How far has it spread?",
      },
      {
        id: "orient-fork",
        title: "Whether monitoring is still open",
        body: "If surveillance could fit, comparing surgery and radiation too early can skip the real first fork.",
        href: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
        linkLabel: "Active surveillance decision",
      },
    ],
  },

  treatmentMap: {
    id: "treatment-map",
    title: "The prostate cancer treatment map",
    lead: "Start with three large directions. Most plans choose one primary path — or combine approaches over time.",
    groups: [
      {
        id: "monitoring",
        name: "Monitoring",
        tag: "Structured watch, not “doing nothing”",
        examples: ["Active surveillance", "Defined PSA / MRI / biopsy triggers"],
        note: "Often considered for selected lower-risk localized cancers when deferring treatment side effects is reasonable.",
      },
      {
        id: "local",
        name: "Local treatments",
        tag: "Treat cancer in a specific area",
        examples: ["Surgery (radical prostatectomy)", "Radiation therapy"],
        note: "Often considered when definitive therapy is recommended for localized or selected locally advanced disease.",
      },
      {
        id: "systemic-support",
        name: "Systemic & supportive directions",
        tag: "Whole-body or supporting care",
        examples: [
          "Hormone (ADT) therapy",
          "Other systemic options in advanced settings",
          "Supportive care",
        ],
        note: "Hormone therapy often joins radiation in higher-risk plans, and leads many advanced-disease conversations.",
      },
    ],
  },

  howDoctorsChoose: {
    id: "how-doctors-choose",
    title: "How doctors choose between paths",
    lead: "Doctors do not choose paths based on the treatment name alone.",
    factors: [
      {
        id: "cancer-info",
        title: "Your cancer information",
        items: ["risk group;", "stage / imaging;", "biopsy and MRI details."],
      },
      {
        id: "history",
        title: "Your plan and history",
        items: [
          "whether surveillance was tried;",
          "prior treatments if any;",
          "how PSA or imaging has changed.",
        ],
      },
      {
        id: "personal",
        title: "Your personal situation",
        items: [
          "overall health and life expectancy;",
          "urinary, sexual, and bowel priorities;",
          "comfort with monitoring uncertainty;",
          "practical fit (time, travel, cost).",
        ],
      },
    ],
    notLabel: "The question is not:",
    notQuestion: "Which treatment is the strongest?",
    betterLabel: "The better question is:",
    betterQuestion: "Which path fits my risk, stage, and goals?",
  },

  approaches: {
    id: "approaches",
    title: "Common directions you may hear",
    lead: "Each line is a direction — not a recommendation. Open the Decision Path when you need to compare or decide.",
    items: [
      {
        id: "surveillance",
        name: "Active surveillance",
        what: "A structured monitoring plan with PSA checks, imaging, and repeat biopsy triggers — designed to defer treatment while watching for change.",
        when: "Discussed for selected lower-risk (and some favorable intermediate) localized cancers.",
        entryHref: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
        entryLabel: "Active surveillance decision",
      },
      {
        id: "surgery",
        name: "Surgery (radical prostatectomy)",
        what: "Removes the prostate and often assesses nearby nodes — one definitive local option.",
        when: "Discussed when definitive therapy is recommended and surgery fits health and priorities.",
        entryHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Surgery vs radiation",
      },
      {
        id: "radiation",
        name: "Radiation therapy",
        what: "Uses focused energy to treat the prostate (and sometimes nearby areas) — another definitive local option.",
        when: "Discussed as an alternative to surgery, sometimes with hormone therapy depending on risk.",
        entryHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Surgery vs radiation",
      },
      {
        id: "hormone",
        name: "Hormone (ADT) therapy",
        what: "Lowers or blocks testosterone signals that can fuel prostate cancer growth.",
        when: "Often discussed with radiation in higher-risk plans, and in many advanced-disease conversations.",
        entryHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Treatment comparison context",
      },
      {
        id: "specialty",
        name: "Specialty framing (urology vs radiation)",
        what: "Different specialists may emphasize different reasonable paths — not always a conflict of facts.",
        when: "Common when both surgery and radiation are options.",
        entryHref: `/questions/${PROSTATE_CARE_TEAM_SLUG}`,
        entryLabel: "When specialists differ",
      },
      {
        id: "practical",
        name: "Cost and practical fit",
        what: "How surveillance, surgery, and radiation concentrate time, money, and follow-up burden differently.",
        when: "Useful when pathways are otherwise similar for your risk group.",
        entryHref: `/questions/${PROSTATE_COST_SLUG}`,
        entryLabel: "Cost and practical fit",
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
        question: "Is the newest treatment always best?",
        paragraphs: [
          "Not always. Newer is not automatically better for your risk group and goals.",
          "Ask what a recommended approach is trying to achieve — and what tradeoffs come with it.",
        ],
      },
      {
        id: "faq-surveillance-doing-nothing",
        question: "Is active surveillance just doing nothing?",
        paragraphs: [
          "No. Surveillance is a structured plan with checks and triggers.",
          "Ask exactly what will be monitored, how often, and what would lead to treatment.",
        ],
      },
      {
        id: "faq-surgery-or-radiation",
        question: "Is surgery better than radiation — or the reverse?",
        paragraphs: [
          "For many localized situations, both can be reasonable.",
          "The useful comparison is fit for your risk, health, and function priorities — not a single winner for everyone.",
        ],
      },
      {
        id: "faq-second-opinion",
        question: "Should I get a second opinion before choosing?",
        paragraphs: [
          "A focused second opinion can help before locking surveillance or irreversible treatment — especially when recommendations diverge.",
        ],
      },
    ],
  },

  checklist: {
    id: "doctor-checklist",
    title: "Questions to take to your doctor",
    leaveTitle: "Before you leave, confirm:",
    leaveItems: [
      "Which paths are realistic for my risk group and stage?",
      "Is active surveillance a real option for me?",
      "If treating, how do surgery and radiation compare for my priorities?",
      "What is the one next decision I should prepare for?",
    ],
    groups: [
      {
        id: "checklist-options",
        heading: "Understand my options",
        questions: [
          "Which paths are on the table for me?",
          "Why are these paths being discussed — and which are not?",
          "What would change the recommendation?",
        ],
      },
      {
        id: "checklist-tradeoffs",
        heading: "Understand tradeoffs",
        questions: [
          "How do urinary, sexual, and bowel effects differ?",
          "What does recovery or follow-up look like for each path?",
          "How do cost and time differ at a high level?",
        ],
      },
      {
        id: "checklist-future",
        heading: "Understanding my future",
        questions: [
          "What happens after this path?",
          "What options remain if monitoring shows change — or treatment does not work as hoped?",
          "Would hearing both urology and radiation oncology help?",
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
        id: "related-surveillance",
        title: "Active surveillance",
        question: "Is active surveillance a reasonable option for me?",
        hint: "Decide whether structured monitoring fits before comparing every treatment name.",
        href: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
        cta: "Open surveillance decision",
      },
      {
        id: "related-compare",
        title: "Surgery vs radiation",
        question: "How should I compare surgery and radiation?",
        hint: "Compare definitive options when treatment is recommended.",
        href: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
        cta: "Open treatment comparison",
      },
      {
        id: "related-second",
        title: "Second opinion",
        question: "Should I get a second opinion before deciding?",
        hint: "Useful before locking monitoring or irreversible treatment.",
        href: `/questions/${PROSTATE_SECOND_OPINION_SLUG}`,
        cta: "Open second opinion guide",
      },
      {
        id: "related-newly",
        title: "Newly diagnosed",
        question:
          "What decisions matter most after a new prostate cancer diagnosis?",
        hint: "Orient to what information comes first after diagnosis.",
        href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
        cta: "Open newly diagnosed guide",
      },
    ],
    secondary: [
      {
        href: "/cancers/prostate-cancer/understanding-risk",
        label: "Understanding Risk Group",
        hint: "if you still need to orient to PSA / Grade Group / MRI risk",
      },
      {
        href: "/cancers/prostate-cancer/understanding-stage",
        label: "Understanding Stage",
        hint: "if you still need to orient to what stage means",
      },
    ],
    mapHref: "/cancers/prostate-cancer#decision-moment",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand prostate cancer treatment directions as part of decision preparation. It does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Prostate Cancer",
      "American Society of Clinical Oncology (ASCO)",
      "American Cancer Society (ACS)",
    ],
  },
} as const;
