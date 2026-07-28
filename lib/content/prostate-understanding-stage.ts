/**
 * Supporting Module — Understanding Prostate Cancer Stage
 * Orientation analogue of breast/lung “Stage”: extent that shapes options.
 */

import {
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

export const PROSTATE_UNDERSTANDING_STAGE = {
  path: "/cancers/prostate-cancer/understanding-stage",
  slug: "understanding-stage",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Prostate cancer",
    title: "How Far Has My Prostate Cancer Spread?",
    subtitle:
      "Stage describes how far the cancer has gone — whether it appears limited to the prostate, involves nearby structures, or has spread farther. That map helps explain which options enter the conversation.",
    boundary:
      "This page helps you orient to staging and extent. It is not a prognosis table, and it is not a treatment recommendation.",
  },

  anchors: [
    { label: "Next decision", href: "#decision-meaning" },
    { label: "What stage describes", href: "#what-stage-describes" },
    { label: "Stage map", href: "#stage-map" },
    { label: "Why it matters", href: "#why-it-matters" },
    { label: "Your report", href: "#stage-report" },
    { label: "Ask doctor", href: "#doctor-checklist" },
  ],

  directAnswer: {
    id: "direct-answer",
    label: "Direct answer",
    lead: "Prostate cancer stage describes where the cancer is and whether it has stayed in the prostate, involved nearby tissues, or spread to distant sites.",
    intro:
      "Stage helps guide treatment discussions. However, stage is not the only factor. Doctors also consider:",
    points: [
      "risk group (PSA, Grade Group / Gleason);",
      "MRI and staging imaging details;",
      "overall health and life expectancy;",
      "urinary, sexual, and bowel priorities;",
      "your personal goals.",
    ],
    bodyClose: null as string | null,
    close:
      "The useful question is not “What number am I?” It is “What does my stage — together with risk group — mean for monitoring versus treatment next?”",
  },

  decisionMeaning: {
    id: "decision-meaning",
    title: "What this means for your next prostate cancer decision",
    lead: "Stage describes extent. Risk group describes aggressiveness. Many first-plan decisions need both.",
    passages: [
      {
        id: "meaning-surveillance",
        body: "Localized lower-risk disease more often keeps active surveillance on the table. Locally advanced or metastatic extent usually reframes the conversation toward treatment — ask which fork is still open for you.",
        ctaLabel: "Active surveillance decision",
        ctaHref: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
      },
      {
        id: "meaning-compare",
        body: "When definitive local therapy is recommended, stage and nodal status help frame surgery versus radiation — alongside risk group and function priorities.",
        ctaLabel: "Surgery vs radiation",
        ctaHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
      },
      {
        id: "meaning-risk",
        body: "If stage is clearer than risk group — or the reverse — ask what is still missing before locking monitor-versus-treat or surgery-versus-radiation.",
        ctaLabel: "Understanding risk group",
        ctaHref: "/cancers/prostate-cancer/understanding-risk",
      },
    ],
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
        body: "Doctors look at whether cancer appears limited to the prostate gland and how it relates to the capsule and nearby tissues.",
      },
      {
        id: "spread",
        number: "2",
        title: "Has it involved nodes or spread farther?",
        body: "Doctors evaluate nearby lymph nodes and whether imaging suggests cancer in bones or other distant sites.",
      },
      {
        id: "treatment-meaning",
        number: "3",
        title: "What does this mean for treatment?",
        body: "Stage helps doctors discuss whether surveillance, local therapy (surgery or radiation), hormone therapy, or a combined plan fits your situation.",
      },
    ],
    takeaway:
      "Stage is a map of extent. It helps guide decisions, but it does not define your entire situation — and it is not a survival prediction by itself.",
  },

  stageMap: {
    id: "stage-map",
    title: "The broad stages of prostate cancer",
    lead: "Think in three broad groups — not a full medical staging chart. Your doctor can translate your report into the group that fits you.",
    bands: [
      {
        id: "localized",
        name: "Localized prostate cancer",
        means:
          "Cancer appears confined to the prostate — without confirmed spread to distant sites.",
        discussionsIntro: "Treatment discussions may include:",
        discussions: [
          "active surveillance for selected lower-risk situations;",
          "surgery (radical prostatectomy);",
          "radiation therapy (with or without hormone therapy);",
          "how risk group tips the balance between monitoring and treatment.",
        ],
        note: "Most newly diagnosed men start in a localized conversation. Ask how risk group and stage work together for you.",
        entryHref: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
        entryLabel:
          "Wondering about monitoring? Open the active surveillance decision",
      },
      {
        id: "locally-advanced",
        name: "Locally advanced / regional disease",
        means:
          "Cancer may extend beyond the prostate capsule or involve nearby nodes — still without confirmed distant metastases.",
        discussionsIntro: "Treatment discussions may include:",
        discussions: [
          "definitive local therapy with a clearer multidisciplinary plan;",
          "radiation plus hormone therapy in many situations;",
          "whether surgery still belongs in the discussion;",
          "how staging completeness changes the first plan.",
        ],
        note: "Locally advanced is a common decision fork — not a separate diagnosis page. Ask why a combined approach is being recommended.",
        entryHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
        entryLabel: "Comparing local options? Open surgery vs radiation",
      },
      {
        id: "metastatic",
        name: "Advanced (metastatic) prostate cancer",
        means:
          "Cancer has spread to distant sites (often bones), or the plan focuses on control beyond one local area.",
        discussionsIntro: "Treatment discussions may focus on:",
        discussions: [
          "controlling cancer and symptoms;",
          "systemic / hormone-directed approaches;",
          "whether local therapy still has a role;",
          "maintaining quality of life and keeping future options open.",
        ],
        note: "Goals often differ from localized plans. That is not the same as “nothing can be done.”",
        entryHref: `/questions/${PROSTATE_SECOND_OPINION_SLUG}`,
        entryLabel: "Want another review? Open the second opinion guide",
      },
    ],
  },

  whyItMatters: {
    id: "why-it-matters",
    title: "Why does stage matter for treatment decisions?",
    lead: "Stage helps shape which approaches enter the conversation. It does not choose a treatment by itself — and risk group still matters alongside it.",
    bridgeIntro: "Stage helps answer:",
    bridges: [
      {
        id: "why-surveillance",
        title: "Is monitoring still on the table?",
        body: "Localized lower-risk disease more often discusses surveillance. Locally advanced or metastatic extent usually reframes the conversation toward treatment.",
        ctaLabel: "Active surveillance decision",
        ctaHref: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
      },
      {
        id: "why-compare",
        title: "How do surgery and radiation compare in my situation?",
        body: "Local extent and nodal status often shape how surgery versus radiation is framed — together with risk group and function priorities.",
        ctaLabel: "Surgery vs radiation",
        ctaHref: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
      },
      {
        id: "why-risk",
        title: "Do I still need clear risk-group results?",
        body: "Stage describes extent. Risk group describes aggressiveness features. Many first-plan decisions need both.",
        ctaLabel: "Understanding risk group",
        ctaHref: "/cancers/prostate-cancer/understanding-risk",
      },
    ],
    closeLines: [
      "Stage answers: “How far has the cancer gone?”",
      "Risk group and goals answer: “Which plan fits me now?”",
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
          "Stage is about extent at a point in time. Outlook also depends on risk group, treatment response, health, and many other factors. This page is not a survival chart.",
      },
      {
        id: "myth-same-tx",
        myth: "“Everyone with the same stage gets the same treatment.”",
        reality:
          "Treatment can differ because of risk group, imaging details, overall health, and personal priorities around function and monitoring.",
      },
      {
        id: "myth-localized-safe",
        myth: "“If it is localized, I can ignore it.”",
        reality:
          "Localized prostate cancer still needs a clear plan — which may be surveillance or treatment. “Localized” means extent, not “no decisions.”",
      },
    ],
  },

  faqs: {
    id: "common-questions",
    title: "Questions patients often ask",
    lead: "Open a question only if it matches what you are wondering.",
    items: [
      {
        id: "faq-stage-vs-risk",
        question: "Is stage the same as risk group?",
        paragraphs: [
          "No. They answer different questions.",
          "Stage: how far the cancer has gone.",
          "Risk group: how aggressive key features look (PSA, Grade Group, and related findings).",
          "Ask for both in plain language before locking monitoring or treatment.",
        ],
      },
      {
        id: "faq-imaging",
        question: "Do I need more scans before deciding?",
        paragraphs: [
          "Not always. Imaging depends on risk features and what would change the plan.",
          "Ask: “Would another scan change monitoring versus treatment — or only confirm what we already know?”",
        ],
      },
      {
        id: "faq-bones",
        question: "If I have bone pain, does that mean metastatic disease?",
        paragraphs: [
          "Not by itself. Bone pain has many causes.",
          "Ask what symptoms should trigger imaging — and what your current staging already shows.",
        ],
      },
    ],
  },

  stageReport: {
    id: "stage-report",
    title: "Understanding your cancer stage report",
    heroSentence:
      "Your stage is usually summarized from exam findings, pathology, MRI, and other staging imaging.",
    reassure: "You do not need to decode every staging code on your own.",
    prompt: "Start by confirming:",
    finders: [
      {
        id: "find-stage-label",
        label: "What stage (or clinical stage) is listed",
        examples:
          "May appear in imaging summaries, pathology notes, or visit notes",
        hint: "Ask: “What stage is my prostate cancer — clinical, pathologic, or both?”",
      },
      {
        id: "find-extent",
        label: "Whether disease looks localized or beyond the prostate",
        examples: "Confined to prostate · Beyond capsule · Nodes · Distant sites",
        hint: "Ask: “Is this localized, locally advanced, or metastatic in plain language?”",
      },
      {
        id: "find-treatment-meaning",
        label: "What it means for options",
        examples: "Surveillance · Surgery · Radiation · Combined plans",
        hint: "Ask: “What does this stage mean for my next decision?”",
      },
      {
        id: "find-other-factors",
        label: "Other factors that affect the plan",
        examples: "Risk group, health, function priorities, goals",
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
      "What stage is my prostate cancer — and how was it determined?",
      "Is disease localized, locally advanced, or metastatic in plain language?",
      "What does my stage mean for options we should discuss next?",
      "Do we also have a clear risk group to use with stage?",
    ],
    groups: [
      {
        id: "checklist-stage",
        heading: "Understand my stage",
        questions: [
          "What stage is my prostate cancer?",
          "How was my stage determined?",
          "What does my stage mean in my situation?",
        ],
      },
      {
        id: "checklist-impact",
        heading: "Understand treatment impact",
        questions: [
          "How does my stage affect monitoring versus treatment?",
          "Should I compare surgery and radiation next?",
          "Is any more staging needed before a first plan?",
        ],
      },
      {
        id: "checklist-future",
        heading: "Understand my future plan",
        questions: [
          "What is the goal of the next step?",
          "What decisions may come after this one?",
          "Would a second opinion change staging interpretation?",
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
        id: "related-surveillance",
        title: "Active surveillance",
        question: "Is active surveillance a reasonable option for me?",
        hint: "Especially useful when disease appears localized and risk is lower.",
        href: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
        cta: "Open surveillance decision",
      },
      {
        id: "related-compare",
        title: "Surgery vs radiation",
        question: "How should I compare surgery and radiation?",
        hint: "Compare local therapy options for your situation — not stage alone.",
        href: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
        cta: "Open treatment comparison",
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
      {
        id: "related-second",
        title: "Second opinion",
        question: "Should I get a second opinion before deciding?",
        hint: "Useful when staging or recommendations feel uncertain.",
        href: `/questions/${PROSTATE_SECOND_OPINION_SLUG}`,
        cta: "Open second opinion guide",
      },
    ],
    secondary: [
      {
        href: "/cancers/prostate-cancer/understanding-risk",
        label: "Understanding Risk Group",
        hint: "if you still need to orient to PSA / Grade Group / MRI risk",
      },
      {
        href: "/cancers/prostate-cancer/treatment-landscape",
        label: "Treatment Landscape",
        hint: "a map of monitoring and treatment families after you know risk and stage",
      },
    ],
    mapHref: "/cancers/prostate-cancer#decision-moment",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose:
      "This guide helps patients understand prostate cancer stage as part of decision preparation. It is not a prognosis table and does not replace medical advice.",
    items: [
      "National Cancer Institute (NCI)",
      "NCCN Guidelines for Patients: Prostate Cancer",
      "American Society of Clinical Oncology (ASCO)",
      "American Cancer Society (ACS)",
    ],
  },
} as const;
