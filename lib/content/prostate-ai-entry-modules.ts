import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import {
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

const PROSTATE_SURVEILLANCE = `/questions/${PROSTATE_SURVEILLANCE_SLUG}`;
const PROSTATE_COMPARE = `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`;
const PROSTATE_SECOND = `/questions/${PROSTATE_SECOND_OPINION_SLUG}`;

/** Prostate Cancer Orientation Entry — Newly Diagnosed (P0 #1) */
export const PROSTATE_NEWLY_DIAGNOSED_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Prostate Cancer",
  decisionMoment: "What happens next after a new diagnosis",
  exploring: "Orientation after diagnosis",
  subtitle:
    "A prostate cancer diagnosis brings many questions. This guide helps you understand risk group clarity — and whether monitoring or treatment belongs first — without solving the whole journey today.",
  relatedDecisions: [
    { label: "Active surveillance", href: PROSTATE_SURVEILLANCE },
    { label: "Surgery vs radiation", href: PROSTATE_COMPARE },
    { label: "Second opinion", href: PROSTATE_SECOND },
  ],
  journeyLabel: "Prostate Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", current: true },
    { label: "Surveillance", href: PROSTATE_SURVEILLANCE },
    { label: "Treatment compare", href: PROSTATE_COMPARE },
  ],

  triggersTitle: "You may be facing this if:",
  triggerGroups: [
    {
      heading: "You were just diagnosed",
      lead: "You may be thinking:",
      items: [
        "What happens next?",
        "Do I need to choose surgery or radiation today?",
      ],
    },
    {
      heading: "You are waiting on results",
      lead: "You may wonder:",
      items: [
        "Do I need a clearer risk group before choosing a path?",
        "Is active surveillance even on the table?",
      ],
    },
    {
      heading: "You feel pressure to decide quickly",
      lead: "You may want to know:",
      items: [
        "What must happen this week?",
        "Would waiting for MRI or staging change the first plan?",
      ],
    },
  ],

  whyTitle: "Get clear on your diagnosis",
  whyLead:
    "“Prostate cancer” describes a wide range of situations. Before locking a first path, your team will usually clarify what you have.",
  whyBody: [
    "Risk group — PSA, Grade Group / Gleason, and related biopsy details that shape monitoring versus treatment",
    "Stage / extent — MRI and whether more staging is needed",
    "First-path fork — whether active surveillance could be reasonable, or treatment planning comes next",
  ],
  whyQuestions: [],
  whyNotLabel: "The goal is not:",
  whyNotQuestion: "Choosing every treatment today.",
  whyBetterLabel: "The goal is:",
  whyBetterQuestion:
    "Understanding your risk picture and the next decision — then preparing for the conversation.",
  whyClose: [
    "Your diagnosis is more than a name. It is the information doctors use to decide monitoring versus treatment — and you do not need every answer on day one.",
  ],

  doesNotDecideTitle: "Make sure you have the information needed",
  doesNotDecideLead:
    "Many first paths depend on risk-group clarity and imaging — not only the biopsy that confirmed cancer.",
  doesNotDecideItems: [
    "The useful question is not “Why are we waiting?”",
    "It is “Is there important information that could change monitoring versus treatment?”",
    "Ask how urgent your situation is — not every wait is the same",
  ],
  doesNotDecideNotes: [
    "If symptoms worsen, seek urgent care rather than waiting for elective planning.",
  ],
  doesNotDecideClose:
    "Open the cards beside this step for risk-group results and what “waiting” may mean.",

  mistakesTitle: "Common early missteps after diagnosis",
  mistakes: [
    {
      mistake: "Trying to choose surgery or radiation before risk group is clear",
      why: "Risk group often decides whether surveillance is even on the table — and which treatment tradeoffs matter.",
    },
    {
      mistake: "Hearing “cancer” and assuming treatment must start immediately",
      why: "For some people, structured monitoring is a reasonable first path — ask if it applies to you.",
    },
    {
      mistake: "Believing you must solve the whole journey this week",
      why: "Your next step matters more than every future decision.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Surveillance versus treatment feels unclear",
    "Surgery and radiation are both offered",
    "Specialty recommendations differ",
    "You want more confidence",
  ],
  secondOpinionClose: "It helps you understand your options before the next irreversible step.",
  secondOpinionCtaLabel: "Prostate second opinion guide",
  secondOpinionHref: PROSTATE_SECOND,

  doctorTitle: "Doctor Conversation Checklist",
  doctorLeaveTitle: "Copy this question list before your appointment:",
  doctorLeaveItems: [
    "What is my risk group in plain language — and what is still missing?",
    "What information are we still waiting for?",
    "Is active surveillance a reasonable option for someone like me?",
    "If treatment is recommended, how do surgery and radiation compare for me?",
  ],
  doctorGroups: [
    {
      heading: "Understanding my diagnosis",
      questions: [
        "What is my risk group — PSA, Grade Group / Gleason, and imaging so far?",
        "What stage or extent do we think this is — and do we need more imaging?",
        "What information are we still waiting for?",
      ],
    },
    {
      heading: "Understanding my next step",
      questions: [
        "What decision comes next?",
        "How urgent is this decision?",
        "Is monitoring or treatment the first fork for me?",
      ],
    },
    {
      heading: "Understanding my care team",
      questions: [
        "Who will coordinate my care?",
        "Should I hear both urology and radiation oncology before deciding?",
        "Would another opinion be helpful?",
      ],
    },
  ],

  scenarioTitle: "Example: The first week after diagnosis",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person receives a prostate cancer diagnosis and feels pressure to schedule surgery immediately.",
    "Their first thought is: “I have to decide everything now.”",
    "Instead, they focus on:",
  ],
  scenarioFocus: [
    "What is my risk group — and what is still pending?",
    "Is active surveillance a reasonable option for me?",
    "If treatment is needed, what would change surgery versus radiation?",
    "What questions should I bring to my care team?",
  ],
  scenarioClose:
    "The focus shifts from solving the whole journey to taking a clear next step.",

  nextStepTitle: "Your next step",
  nextStepLead: "You do not need every answer today. This week, focus on:",
  nextStepActions: [
    {
      label:
        "Clarify your risk group — or what results are still pending.",
    },
    {
      label:
        "Ask whether active surveillance could be reasonable for your situation.",
    },
    {
      label:
        "Prepare a short question list and keep your key reports together.",
    },
  ],
  nextStepCtaLabel: "Active surveillance decision",
  nextStepHref: PROSTATE_SURVEILLANCE,
  nextStepCtaMeta: "When monitoring may be a reasonable first path",
  nextStepSecondaryCtaLabel: "Surgery vs radiation",
  nextStepSecondaryHref: PROSTATE_COMPARE,
  nextStepSecondaryMeta: "If definitive treatment is already on the table",

  relatedPathsTitle: "Continue your prostate cancer decision journey",
  relatedPaths: [
    {
      title: "Wondering about prostate cancer active surveillance?",
      question: "Is active surveillance reasonable for prostate cancer?",
      cta: "Active surveillance",
      href: PROSTATE_SURVEILLANCE,
    },
    {
      title: "Comparing prostate cancer surgery and radiation?",
      question: "How do I compare surgery and radiation for prostate cancer?",
      cta: "Surgery vs radiation",
      href: PROSTATE_COMPARE,
    },
    {
      title: "Want more confidence in a prostate cancer decision?",
      question: "Should I get a second opinion for prostate cancer?",
      cta: "Second opinion",
      href: PROSTATE_SECOND,
    },
  ],
};

/** Prostate Cancer Entry — Active Surveillance (P0 #2) */
export const PROSTATE_SURVEILLANCE_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Prostate Cancer",
  decisionMoment: "Whether active surveillance is a reasonable first path",
  exploring: "Monitor vs treat",
  subtitle:
    "For selected prostate cancers, structured monitoring can defer treatment side effects while watching for change. Clarify whether it fits your risk group — and what would trigger treatment.",
  relatedDecisions: [
    { label: "Newly diagnosed", href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}` },
    { label: "Surgery vs radiation", href: PROSTATE_COMPARE },
    { label: "Second opinion", href: PROSTATE_SECOND },
  ],
  journeyLabel: "Prostate Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}` },
    { label: "Surveillance", current: true },
    { label: "Treatment compare", href: PROSTATE_COMPARE },
  ],

  triggersTitle: "When this decision may matter most",
  triggerGroups: [
    {
      heading: "After risk group is clearer",
      lead: "You may be asking:",
      items: [
        "Is monitoring a reasonable option for me?",
        "Or should treatment start now?",
      ],
    },
    {
      heading: "Comparing paths",
      lead: "You may be asking:",
      items: [
        "What does active surveillance actually involve?",
        "What would make us switch to treatment?",
      ],
    },
    {
      heading: "Unsure about the plan",
      lead: "You may be asking:",
      items: [
        "Why was surveillance — or treatment — recommended?",
        "Would a second opinion help before locking the fork?",
      ],
    },
  ],

  whyTitle: "Why does the surveillance decision matter?",
  whyLead:
    "Many people hear “we can watch it” or “you should treat” without a clear comparison frame. Monitoring versus treatment is a real fork — not a minor preference.",
  whyBody: [],
  whyQuestions: [
    "Active surveillance is structured monitoring — not ignoring the cancer",
    "It can defer urinary, sexual, or bowel side effects while watching for change",
    "Risk group and imaging often decide whether it belongs in the discussion",
  ],
  whyNotLabel: "The important question is not:",
  whyNotQuestion: "Which path sounds stronger online?",
  whyBetterLabel: "The more useful question is:",
  whyBetterQuestion:
    "For my risk group, is active surveillance reasonable — and what would change that?",
  whyClose: [
    "Ask your care team what monitoring would involve — and what would end it.",
  ],

  whoNeedsTitle: "Does everyone face this decision?",
  whoNeedsLead:
    "Not every prostate cancer plan includes a close call between monitoring and treatment. Whether surveillance is a live option depends on your situation.",
  whoNeedsBody: [
    "What matters is whether monitoring is realistic for your risk features — and whether you can live with the follow-up plan.",
  ],
  whoNeedsDependsIntro: "Your care team may weigh factors such as:",
  whoNeedsDependsOn: [
    "Risk group (PSA, Grade Group / Gleason, biopsy details)",
    "MRI and staging findings",
    "Life expectancy and other health conditions",
    "Urinary and sexual priorities",
    "Comfort with monitoring uncertainty and visit intensity",
  ],
  whoNeedsClose:
    "A useful question: “Is surveillance still open for me — and what would lock treatment instead?”",

  doesNotDecideTitle: "How should I compare monitoring vs treatment?",
  doesNotDecideLead:
    "Compare paths by fit and triggers — not by fear of the word “cancer.” Both paths still consider:",
  doesNotDecideItems: [
    "Whether your risk group supports surveillance",
    "What follow-up would look like",
    "What changes would end monitoring",
    "Side-effect tradeoffs if treatment starts now",
    "What would change the recommendation",
  ],
  doesNotDecideNotes: [
    "Surveillance is not automatically “less care.”",
    "Choosing treatment now is not automatically “safer” if monitoring fits your risk group.",
  ],
  doesNotDecideClose:
    "This fork improves the order of decisions — it does not replace a conversation with your care team.",

  costTitle: "Follow-up intensity and practical fit",
  costLead:
    "Surveillance has a calendar: PSA visits, imaging, and possible repeat biopsy. Ask what the year ahead looks like — not only whether monitoring is “allowed.”",
  costItems: [
    "What is the expected follow-up schedule?",
    "Can I keep those appointments reliably?",
    "How does monitoring compare with recovery after surgery or radiation?",
  ],

  mistakesTitle: "Common mistakes around active surveillance",
  mistakes: [
    {
      mistake: "Hearing “surveillance” as “doing nothing”",
      why: "Active surveillance is a structured program with tests and exit triggers.",
    },
    {
      mistake: "Choosing treatment only because cancer sounds urgent",
      why: "For selected lower-risk cancers, deferring side effects can be guideline-supported.",
    },
    {
      mistake: "Starting monitoring without clear follow-up rules",
      why: "Without schedule and triggers, surveillance is not a complete plan.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "A second opinion may be especially useful when:",
  secondOpinionWhen: [
    "Surveillance and treatment are both offered",
    "Risk features are borderline",
    "Specialty recommendations differ",
    "You want confidence before locking the fork",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Prostate second opinion guide",
  secondOpinionHref: PROSTATE_SECOND,

  doctorTitle: "Surveillance Conversation Checklist",
  doctorLeaveTitle: "Before leaving your appointment, ask:",
  doctorLeaveItems: [
    "Is active surveillance reasonable for my risk group?",
    "What is the exact follow-up schedule?",
    "What PSA, MRI, or biopsy changes would end surveillance?",
    "If we treat now instead, what are we trying to achieve?",
  ],
  doctorGroups: [
    {
      heading: "About whether surveillance fits",
      questions: [
        "What features make surveillance appropriate — or not — for me?",
        "Is any key risk information still pending?",
        "What would tip the decision toward treatment?",
      ],
    },
    {
      heading: "About the monitoring plan",
      questions: [
        "How often will PSA, MRI, and biopsy happen?",
        "What are the exit triggers in plain language?",
        "What happens if I feel too anxious between visits?",
      ],
    },
    {
      heading: "About what comes next",
      questions: [
        "If we treat now, how do surgery and radiation compare for me?",
        "Would a second opinion help before locking this fork?",
        "What should I do this week while deciding?",
      ],
    },
  ],

  scenarioTitle: "Example: Clarifying monitor vs treat",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person is told their prostate cancer may be watched — or treated soon.",
    "Online searches make any delay sound automatically dangerous.",
    "Instead, they ask:",
  ],
  scenarioFocus: [
    "Is surveillance appropriate for my risk group?",
    "What is the follow-up schedule?",
    "What would end monitoring?",
    "If we treat now, what are we trying to achieve?",
  ],
  scenarioClose:
    "The focus shifts from fear of waiting to choosing the path that fits their risk picture and priorities.",

  nextStepTitle: "Your next step",
  nextStepLead: "If monitoring versus treatment is still open:",
  nextStepActions: [
    {
      label:
        "Confirm risk-group and imaging information are complete enough for this fork.",
    },
    {
      label:
        "Ask whether surveillance is reasonable — and what schedule and triggers define the plan.",
    },
    {
      label:
        "If treatment is favored, compare surgery and radiation next — not every hospital ranking.",
    },
  ],
  nextStepCtaLabel: "Surgery vs radiation",
  nextStepHref: PROSTATE_COMPARE,
  nextStepCtaMeta: "When definitive therapy is on the table",
  nextStepSecondaryCtaLabel: "Newly diagnosed orientation",
  nextStepSecondaryHref: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
  nextStepSecondaryMeta: "If risk clarity is still incomplete",

  relatedPathsTitle: "Continue your prostate cancer decision journey",
  relatedPaths: [
    {
      title: "Still clarifying the prostate cancer diagnosis?",
      question:
        "What decisions matter most after a new prostate cancer diagnosis?",
      cta: "Newly diagnosed",
      href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
    },
    {
      title: "Comparing prostate cancer surgery and radiation?",
      question: "How do I compare surgery and radiation for prostate cancer?",
      cta: "Surgery vs radiation",
      href: PROSTATE_COMPARE,
    },
    {
      title: "Want more confidence in a prostate cancer decision?",
      question: "Should I get a second opinion for prostate cancer?",
      cta: "Second opinion",
      href: PROSTATE_SECOND,
    },
  ],
};

/** Prostate Cancer Entry — Second Opinion (P0 confidence node) */
export const PROSTATE_SECOND_OPINION_FLAGSHIP: AiEntryFlagshipModules = {
  cancerLabel: "Prostate Cancer",
  decisionMoment: "Whether a second opinion may help before locking a path",
  exploring: "Second opinion before surveillance or definitive therapy",
  subtitle:
    "Before locking active surveillance or irreversible treatment, decide whether another focused review would add confidence — confirmation included.",
  relatedDecisions: [
    { label: "Newly diagnosed", href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}` },
    { label: "Active surveillance", href: PROSTATE_SURVEILLANCE },
    { label: "Surgery vs radiation", href: PROSTATE_COMPARE },
  ],
  journeyLabel: "Prostate Cancer Decision Journey",
  journeyPath: [
    { label: "New Diagnosis", href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}` },
    { label: "Surveillance", href: PROSTATE_SURVEILLANCE },
    { label: "Second opinion", current: true },
  ],

  triggersTitle: "When a second opinion may matter most",
  triggerGroups: [
    {
      heading: "Before locking a path",
      lead: "You may be asking:",
      items: [
        "Should I monitor or treat?",
        "Am I ready to lock surgery or radiation?",
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
    {
      heading: "Borderline risk features",
      lead: "You may be asking:",
      items: [
        "Should pathology or MRI be re-reviewed?",
        "Would another specialist change the fork?",
      ],
    },
  ],

  whyTitle: "Why consider a second opinion for prostate cancer?",
  whyLead:
    "Prostate cancer plans often combine risk group, monitoring versus treatment, and surgery versus radiation. Another review can add confidence before locking a path.",
  whyBody: [],
  whyQuestions: [
    "Another opinion may confirm the current plan — confirmation is useful",
    "It may identify missing pathology, MRI, or risk-group information",
    "It may clarify surveillance or treatment when recommendations conflict",
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
    "Recommendations diverge across specialists",
    "Surveillance versus treatment still feels unclear",
    "Surgery and radiation are both offered without a clear comparison",
    "Pathology, MRI, or risk-group findings leave open questions",
    "You want confidence before locking a major step",
  ],
  whoNeedsClose:
    "A useful question: “If I do not get another review, what uncertainty am I accepting?”",

  doesNotDecideTitle: "What could another opinion change?",
  doesNotDecideLead:
    "A second opinion may confirm, clarify, expand options, or identify gaps. It still depends on:",
  doesNotDecideItems: [
    "The records and question you bring",
    "Your risk group and imaging picture",
    "Whether timing allows a careful review",
    "Your goals and function priorities",
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
      mistake: "Waiting until after irreversible treatment",
      why: "Many prostate reviews are most useful before locking surveillance or definitive therapy.",
    },
    {
      mistake: "Sending incomplete records",
      why: "Without pathology, PSA, imaging, and the current plan, the review stays vague.",
    },
    {
      mistake: "Seeking only agreement, not a clear question",
      why: "Name what would change — confirmation is useful when the question is clear.",
    },
  ],

  secondOpinionTitle: "When another perspective may help",
  secondOpinionLead: "Consider a focused review when:",
  secondOpinionWhen: [
    "Surveillance and treatment recommendations conflict",
    "The next step feels irreversible and you want confidence",
    "Key information still seems incomplete",
  ],
  secondOpinionClose: "It is about confidence, not distrust.",
  secondOpinionCtaLabel: "Active surveillance decision",
  secondOpinionHref: PROSTATE_SURVEILLANCE,

  doctorTitle: "Second Opinion Conversation Checklist",
  doctorLeaveTitle: "Before leaving the review, ask:",
  doctorLeaveItems: [
    "Do you agree with the current plan — and why?",
    "What would you change, if anything?",
    "Is any key information still missing before locking monitoring or treatment?",
    "How urgent is the next step on the calendar?",
  ],
  doctorGroups: [
    {
      heading: "About the decision under review",
      questions: [
        "What decision are we focusing on today?",
        "For my risk group, is the recommended path reasonable?",
        "What would tip you toward a different approach?",
      ],
    },
    {
      heading: "About information gaps",
      questions: [
        "Should pathology, MRI, or risk-group reporting be re-reviewed?",
        "Is active surveillance still on the table for me?",
        "If we treat, how do surgery and radiation compare for my priorities?",
      ],
    },
    {
      heading: "About next steps",
      questions: [
        "Can I continue with my current team after this review?",
        "What should I take back to my primary care team in writing?",
        "How soon should monitoring or treatment proceed if we confirm the plan?",
      ],
    },
  ],

  scenarioTitle: "Example: Review before locking the fork",
  scenarioTag: "Illustrative decision scenario",
  scenarioDisclaimer: "Not a real patient story",
  scenarioBody: [
    "A person is offered either active surveillance or a treatment date soon.",
    "Urology and radiation oncology framed the options differently.",
    "Instead of canceling care, they ask:",
  ],
  scenarioFocus: [
    "What decision do I want reviewed before locking a path?",
    "Is there time for a focused second opinion?",
    "Should pathology or MRI be re-reviewed?",
    "What should I take back to my current team in writing?",
  ],
  scenarioClose:
    "The focus shifts from picking a “winning doctor” to clarifying the next irreversible step.",

  nextStepTitle: "Your next step",
  nextStepLead: "If a second opinion is still open:",
  nextStepActions: [
    {
      label:
        "Name the one decision you want reviewed — surveillance, surgery vs radiation, or risk clarity.",
    },
    {
      label:
        "Gather pathology, PSA, imaging, and the current recommendation in writing.",
    },
    {
      label:
        "Ask how urgent the calendar is — then return to the matching Decision Path.",
    },
  ],
  nextStepCtaLabel: "Active surveillance decision",
  nextStepHref: PROSTATE_SURVEILLANCE,
  nextStepCtaMeta: "If monitor vs treat is still the open fork",
  nextStepSecondaryCtaLabel: "Surgery vs radiation",
  nextStepSecondaryHref: PROSTATE_COMPARE,
  nextStepSecondaryMeta: "If definitive therapy is already on the table",

  relatedPathsTitle: "Continue your prostate cancer decision journey",
  relatedPaths: [
    {
      title: "Still clarifying the prostate cancer diagnosis?",
      question:
        "What decisions matter most after a new prostate cancer diagnosis?",
      cta: "Newly diagnosed",
      href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
    },
    {
      title: "Wondering about prostate cancer active surveillance?",
      question: "Is active surveillance reasonable for prostate cancer?",
      cta: "Active surveillance",
      href: PROSTATE_SURVEILLANCE,
    },
    {
      title: "Comparing prostate cancer surgery and radiation?",
      question: "How do I compare surgery and radiation for prostate cancer?",
      cta: "Surgery vs radiation",
      href: PROSTATE_COMPARE,
    },
  ],
};

export const PROSTATE_FLAGSHIP_BY_SLUG: Record<string, AiEntryFlagshipModules> =
  {
    [PROSTATE_NEWLY_DIAGNOSED_SLUG]: PROSTATE_NEWLY_DIAGNOSED_FLAGSHIP,
    [PROSTATE_SURVEILLANCE_SLUG]: PROSTATE_SURVEILLANCE_FLAGSHIP,
    [PROSTATE_SECOND_OPINION_SLUG]: PROSTATE_SECOND_OPINION_FLAGSHIP,
  };
