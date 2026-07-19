/** Hang-card bodies for Recurrence Decision Path (Entry Template v2) */

export const RECURRENCE_ENTRY_CARDS = {
  notFailed: {
    lead: "Not necessarily. Treatment may have removed visible cancer, controlled it for a period, or reduced cancer burden.",
    close:
      "Recurrence means the cancer has returned or become detectable again. It means the situation needs to be reassessed — not that everything failed.",
  },
  whyReturn: {
    lead: "Cancer can return because some cancer cells may remain after treatment or because cancer can change over time. Doctors consider:",
    factors: [
      "Where recurrence appears",
      "How long after treatment it occurs",
      "How the cancer behaves now",
    ],
    close: "These details help guide the next decision.",
  },
  harder: {
    lead: "Every recurrence is different. Doctors consider:",
    factors: [
      "Location of recurrence",
      "Previous treatments",
      "Cancer characteristics",
      "Overall health",
    ],
    close: "Some situations may have more treatment options than others.",
  },
  afterSurgery: {
    lead: "Yes, recurrence can occur after surgery. This is why follow-up care is important.",
    reassess: [
      "Where it occurred",
      "What treatments have already been used",
      "What options are available now",
    ],
  },
  biopsy: {
    lead: "Not everyone needs another biopsy. Doctors may consider additional testing when it could provide information that changes treatment decisions.",
    ask: "Would another test change the options we discuss?",
  },
  characteristicsChange: {
    lead: "Cancer can evolve over time, including after treatment.",
    close:
      "This is why doctors may review whether previous information is still enough to guide the next decision.",
  },
  priorTreatment: {
    lead: "Previous treatment provides important information. Doctors consider:",
    factors: [
      "What treatment you received",
      "How long it worked",
      "Side effects you experienced",
      "What options remain",
    ],
    close: "Your history helps shape the next plan.",
  },
  stillTreatable: {
    lead: "Yes. Treatment goals may include:",
    goals: [
      "Controlling cancer growth",
      "Reducing symptoms",
      "Maintaining daily life",
      "Extending treatment options",
    ],
    close:
      "Your doctor can explain what goals are realistic in your situation.",
  },
  trial: {
    lead: "Clinical trials may be worth discussing after recurrence.",
    ask: [
      "Does this trial match my cancer characteristics?",
      "How does it compare with standard options?",
      "What are the possible benefits and risks?",
    ],
  },
  qol: {
    lead: "This is a personal decision. Consider:",
    factors: [
      "How treatment affects daily activities",
      "What matters most to you",
      "Your family responsibilities",
      "Treatment burden",
    ],
    close: "Quality of life is part of the treatment decision.",
  },
  newest: {
    lead: "Not necessarily. The best option depends on:",
    factors: ["Evidence", "Expected benefit", "Risks", "Your goals"],
    close: "A newer treatment is valuable only if it fits your situation.",
  },
  secondOpinion: {
    lead: "A second opinion may be especially useful after recurrence because decisions can become more complex.",
    mayHelp: [
      "Understand options",
      "Review treatment strategy",
      "Feel more confident",
    ],
  },
  mistakes: {
    lead: "Common challenges include:",
    items: [
      {
        mistake: "Assuming there are no options",
        why: "Recurrence does not automatically mean the end of treatment choices.",
      },
      {
        mistake: "Making decisions only from fear",
        why: "Understanding the situation can reduce uncertainty.",
      },
      {
        mistake: "Ignoring personal goals",
        why: "Treatment should fit your life, not only your scans.",
      },
    ],
  },
  family: {
    lead: "Families often want to know:",
    topics: [
      "What changed",
      "What options exist",
      "How they can help",
      "What support may be needed",
    ],
    close: "A shared understanding can make decisions easier.",
  },
  supportive: {
    lead: "Supportive care focuses on:",
    focus: [
      "Symptoms",
      "Comfort",
      "Daily function",
      "Quality of life",
    ],
    close:
      "It can be discussed alongside cancer treatment, not only when treatment options are limited.",
  },
  afterLobectomy: {
    lead: "Recurrence after lobectomy is a new decision point. Doctors usually reassess:",
    items: [
      "Where the cancer returned — local area, lymph nodes, or elsewhere",
      "How long after surgery it appeared",
      "What treatments you have already received",
      "Whether new testing could change options",
    ],
    ask: "Given that I had a lobectomy, what options make sense now — and why?",
  },
  afterImmuno: {
    lead: "If cancer returns after immunotherapy, prior treatment history is part of the next comparison.",
    items: [
      "How long immunotherapy helped",
      "Whether the cancer changed in ways that need new testing",
      "What other systemic, local, or trial options remain",
      "How quality of life and goals should shape the next step",
    ],
    ask: "After immunotherapy, what are my options now — and do we need updated biomarkers?",
  },
} as const;
