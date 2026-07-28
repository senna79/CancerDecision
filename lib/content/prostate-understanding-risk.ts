/**
 * Supporting Module — Understanding Prostate Cancer Risk Group
 * Orientation analogue of breast “Subtype” / lung “Types”:
 * risk information that shapes monitoring vs treatment.
 */

import {
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

export const PROSTATE_UNDERSTANDING_RISK = {
  path: "/cancers/prostate-cancer/understanding-risk",
  slug: "understanding-risk",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Prostate cancer",
    title: "What Is My Prostate Cancer Risk Group?",
    subtitle:
      "Prostate cancer decisions often start with risk clarity — PSA, Grade Group / Gleason, and imaging — before locking monitoring or treatment.",
    boundary:
      "This page helps you orient to risk grouping. It is not a prognosis table, and it is not a treatment recommendation.",
  },

  anchors: [
    { label: "Next decision", href: "#decision-meaning" },
    { label: "Risk map", href: "#type-map" },
    { label: "Why it matters", href: "#why-it-matters" },
    { label: "Your report", href: "#pathology-report" },
    { label: "Ask doctor", href: "#doctor-checklist" },
  ],

  directAnswer: {
    id: "direct-answer",
    label: "Direct answer",
    lead: "Your prostate cancer risk group comes mainly from PSA, Grade Group (or Gleason score), clinical stage, and often MRI / biopsy findings.",
    intro: "Knowing your risk group helps your care team understand:",
    points: [
      "whether active surveillance may be reasonable;",
      "how urgently definitive therapy is usually discussed;",
      "which details still need to be confirmed before a first plan.",
    ],
    bodyClose:
      "Risk group is one important piece of the decision — not the whole plan. Health, life expectancy, function priorities, and personal goals still matter.",
    close:
      "The useful next step is not memorizing every risk label. It is confirming your risk group in plain language — and asking whether pending results would change monitoring versus treatment.",
  },

  decisionMeaning: {
    id: "decision-meaning",
    title: "What this means for your next prostate cancer decision",
    lead: "Risk group points to the first fork — monitor or treat — not to a single “best” treatment name.",
    passages: [
      {
        id: "meaning-surveillance",
        body: "Lower-risk and some favorable intermediate features more often put active surveillance on the table. Ask whether structured monitoring fits your risk group — and what would end it — before locking surgery or radiation.",
        ctaLabel: "Active surveillance decision",
        ctaHref: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
      },
      {
        id: "meaning-compare",
        body: "When definitive therapy is recommended, risk group frames how urgently to compare surgery and radiation — including urinary, sexual, and bowel tradeoffs that matter to you.",
        ctaLabel: "Surgery vs radiation",
        ctaHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
      },
      {
        id: "meaning-waiting",
        body: "If MRI, pathology review, or staging is still pending, ask whether the monitoring-versus-treatment decision should wait until the risk picture is clear enough.",
        ctaLabel: "Newly diagnosed guide",
        ctaHref: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
      },
    ],
  },

  typeMap: {
    id: "type-map",
    title: "The risk groups patients hear most often",
    lead: "Think in broad groups — not a full medical chart. Your team can translate your report into the group that fits you. Labels and cutoffs can vary slightly by guideline.",
    types: [
      {
        id: "lower-risk",
        name: "Lower risk (very low / low)",
        tag: "Often surveillance discussions",
        body: "Cancer features usually look less aggressive. Active surveillance is often on the table for selected men — structured monitoring instead of immediate surgery or radiation.",
        bulletsIntro: "Discussions often include:",
        bullets: [
          "Whether surveillance fits your risk features",
          "How often PSA, MRI, and biopsy would be checked",
          "What triggers would end surveillance",
        ],
        whyTitle: "Why it matters",
        whyIntro: "Lower-risk status can change:",
        whyItems: [
          "whether monitoring is a real option;",
          "how urgently treatment is framed;",
          "which questions about side effects belong early.",
        ],
        note: "“Lower risk” is not “no cancer.” Ask what makes surveillance appropriate for you — and what would change that answer.",
      },
      {
        id: "intermediate-risk",
        name: "Intermediate risk",
        tag: "Favorable vs unfavorable often matters",
        body: "Intermediate risk sits between clear surveillance and clear treatment-first conversations. Favorable intermediate disease may still discuss surveillance; unfavorable intermediate disease more often discusses definitive therapy.",
        bulletsIntro: "Doctors consider:",
        bullets: [
          "Favorable vs unfavorable intermediate features",
          "Whether surveillance, surgery, or radiation fits",
          "How imaging and biopsy details tip the balance",
        ],
        whyTitle: "Why it matters",
        whyIntro: null as string | null,
        whyItems: [
          "Intermediate risk is where many men feel stuck between monitoring and treatment. Ask which intermediate subgroup you are in — and what that means for the next decision.",
        ],
        note: "If two specialists frame intermediate risk differently, ask them to name the exact features driving each recommendation.",
      },
      {
        id: "higher-risk",
        name: "Higher risk (high / very high)",
        tag: "Treatment conversations usually lead",
        body: "Higher-risk features more often push toward definitive local therapy, sometimes with hormone therapy, and a clearer plan across specialties.",
        bulletsIntro: "Common discussion points include:",
        bullets: [
          "Surgery versus radiation approaches",
          "Whether hormone therapy belongs with radiation",
          "Staging completeness before locking a path",
        ],
        whyTitle: "Why it matters",
        whyIntro: "Higher-risk status can change:",
        whyItems: [
          "how urgently a treatment plan is needed;",
          "whether combined approaches are discussed;",
          "which second-opinion questions are highest value.",
        ],
        note: "Higher risk does not mean “no good options.” Ask what the next decision is — and what information would still change it.",
      },
    ],
  },

  whyItMatters: {
    id: "why-it-matters",
    title: "Why does my risk group matter?",
    lead: "Risk group helps guide the first fork: monitor or treat. It does not choose a treatment by itself.",
    bridgeIntro: "Your risk group can influence:",
    bridges: [
      {
        id: "why-surveillance",
        title: "Whether active surveillance is reasonable",
        body: "Lower-risk and some favorable intermediate situations more often discuss structured monitoring. Higher-risk situations more often move to treatment comparison.",
        ctaLabel: "Active surveillance decision",
        ctaHref: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
      },
      {
        id: "why-compare",
        title: "When surgery vs radiation enters the conversation",
        body: "If definitive therapy is recommended, risk group helps frame how urgently to compare surgery and radiation — and what side-effect tradeoffs matter.",
        ctaLabel: "Surgery vs radiation",
        ctaHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
      },
      {
        id: "why-waiting",
        title: "Whether to wait for complete results",
        body: "If MRI, pathology review, or staging is still pending, ask whether major monitoring-versus-treatment decisions should wait until the risk picture is clear.",
        ctaLabel: "Newly diagnosed guide",
        ctaHref: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
      },
    ],
    closeLines: [
      "Risk group answers: “How aggressive does this look on paper?”",
      "Stage, health, and goals answer: “Which plan fits me now?”",
    ],
  },

  faqs: {
    id: "common-questions",
    title: "Questions patients often ask",
    lead: "Open a question only if it matches what you are wondering.",
    items: [
      {
        id: "faq-better-risk",
        question: "Is one risk group better than another?",
        paragraphs: [
          "Risk groups behave and are treated differently.",
          "The important question is not: “Which group is better?”",
          "It is: “What does my risk group mean for monitoring versus treatment?”",
        ],
      },
      {
        id: "faq-determines-treatment",
        question: "Does my risk group determine my treatment?",
        paragraphs: ["Not by itself. Doctors also consider:"],
        bullets: [
          "stage and imaging extent;",
          "overall health and life expectancy;",
          "urinary, sexual, and bowel priorities;",
          "tolerance for monitoring uncertainty;",
          "personal goals.",
        ],
      },
      {
        id: "faq-gleason",
        question: "What is the difference between Gleason and Grade Group?",
        paragraphs: [
          "Both describe how aggressive the cancer cells look under the microscope.",
          "Grade Group is a newer plain-language scale (1–5) built from Gleason patterns.",
          "Ask your team to translate both into one risk conversation — not two competing scores.",
        ],
      },
      {
        id: "faq-psa-alone",
        question: "Can PSA alone tell me my risk?",
        paragraphs: [
          "PSA is one input — not the whole risk picture.",
          "Grade Group / Gleason, clinical stage, MRI, and biopsy findings usually matter together.",
          "Ask: “With my full results, what risk group am I in?”",
        ],
      },
      {
        id: "faq-friend-different",
        question: "Why did my friend with prostate cancer get different advice?",
        paragraphs: [
          "Different plans may happen because situations differ in:",
        ],
        bullets: [
          "risk group;",
          "stage / imaging;",
          "function priorities;",
          "health and life expectancy;",
          "comfort with surveillance.",
        ],
        close: "A plan that fits one person may not fit another.",
      },
    ],
  },

  pathology: {
    id: "pathology-report",
    title: "Understanding your key results",
    heroSentence:
      "Your pathology and lab reports contain the building blocks of prostate cancer risk.",
    reassure: "You do not need to understand every medical term.",
    prompt: "Start by looking for these:",
    finders: [
      {
        id: "find-psa",
        label: "PSA level",
        examples: "Current PSA · Trend over time when available",
        hint: "Ask: “How does my PSA fit into my overall risk group?”",
      },
      {
        id: "find-grade",
        label: "Grade Group / Gleason score",
        examples: "Grade Group 1–5 · Gleason patterns (for example 3+4)",
        hint: "Ask: “What is my Grade Group in plain language?”",
      },
      {
        id: "find-mri",
        label: "MRI / imaging findings",
        examples: "PI-RADS · Lesion location · Staging imaging when ordered",
        hint: "Ask: “Does imaging change whether surveillance or treatment is favored?”",
      },
      {
        id: "find-pending",
        label: "Pending or incomplete pieces",
        examples: "Repeat biopsy · Pathology re-review · Staging scans",
        hint: "Ask: “Would pending results change monitoring versus treatment?”",
      },
    ],
    close:
      "Bring the reports (or photos/PDFs) to your appointment. Confirming risk group in one sentence is enough to start a clearer conversation.",
  },

  checklist: {
    id: "doctor-checklist",
    title: "Questions to take to your doctor",
    leaveTitle: "Before you leave, confirm:",
    leaveItems: [
      "What is my risk group in plain language?",
      "Which results built that risk group?",
      "Are any key results still pending?",
      "Does my risk group make surveillance a real option — or point toward treatment comparison?",
    ],
    groups: [
      {
        id: "checklist-risk",
        heading: "Understand my risk",
        questions: [
          "Am I lower, intermediate, or higher risk — and which subgroup?",
          "Can you explain PSA, Grade Group, and imaging together?",
          "Is any testing still incomplete?",
        ],
      },
      {
        id: "checklist-impact",
        heading: "Understand decision impact",
        questions: [
          "Is active surveillance reasonable for my risk group?",
          "If treatment is favored, should I compare surgery and radiation next?",
          "What would change your recommendation if one more result arrived?",
        ],
      },
      {
        id: "checklist-next",
        heading: "Plan my next step",
        questions: [
          "What should I learn about next — surveillance, treatment comparison, or a second opinion?",
          "Which decisions are time-sensitive this week?",
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
        id: "related-newly",
        title: "Newly diagnosed",
        question:
          "What decisions matter most after a new prostate cancer diagnosis?",
        hint: "Orient to what information comes first after diagnosis.",
        href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
        cta: "Open newly diagnosed guide",
      },
      {
        id: "related-surveillance",
        title: "Active surveillance",
        question: "Is active surveillance a reasonable option for me?",
        hint: "Decide whether structured monitoring fits your risk group.",
        href: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
        cta: "Open surveillance decision",
      },
      {
        id: "related-compare",
        title: "Surgery vs radiation",
        question: "How should I compare surgery and radiation?",
        hint: "Compare definitive options when treatment is on the table.",
        href: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
        cta: "Open treatment comparison",
      },
      {
        id: "related-second",
        title: "Second opinion",
        question: "Should I get a second opinion before deciding?",
        hint: "Useful when risk framing or recommendations diverge.",
        href: `/questions/${PROSTATE_SECOND_OPINION_SLUG}`,
        cta: "Open second opinion guide",
      },
    ],
    stageHref: "/cancers/prostate-cancer/understanding-stage",
    stageLabel: "Understanding Stage",
    stageHint: "what extent means for options next.",
    landscapeHref: "/cancers/prostate-cancer/treatment-landscape",
    landscapeLabel: "Treatment Landscape",
    landscapeHint:
      "a map of monitoring and treatment families after you know risk and stage.",
    mapHref: "/cancers/prostate-cancer#decision-moment",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand prostate cancer risk grouping as part of decision preparation. It does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Prostate Cancer",
      "American Cancer Society (ACS)",
      "American Urological Association (AUA) / patient education materials",
    ],
  },
} as const;
