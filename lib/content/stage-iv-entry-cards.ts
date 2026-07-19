/** Hang-card bodies for Stage IV Decision Path (Entry Template v2) */

export const STAGE_IV_ENTRY_CARDS = {
  activeTreatment: {
    lead: "Many people with Stage IV lung cancer receive active treatment. Depending on the situation, care may focus on:",
    items: [
      "Treatments that may slow or reduce cancer growth",
      "Reducing symptoms so daily life is more manageable",
      "Helping you stay as active and independent as possible",
    ],
    close:
      "Your doctor can explain what goals are realistic for your situation — and what options fit those goals.",
  },
  differentPlans: {
    lead: "Because every cancer situation is different. Doctors usually consider:",
    items: [
      "Cancer biology and biomarkers",
      "Previous treatments",
      "Overall health",
      "Personal goals and daily-life priorities",
    ],
    close: "The same Stage label does not mean the same plan.",
  },
  goalsNotGivingUp: {
    lead: "No. Different treatment goals do not mean less care. They mean your plan is designed around your situation.",
    close:
      "Your medical team is still actively making decisions with you — including which treatments may help and what trade-offs matter.",
  },
  strongest: {
    lead: "Not always. A good treatment choice balances:",
    items: [
      "Possible benefit",
      "Possible risks and side effects",
      "Your goals",
      "Your daily life",
    ],
    close: "More intensity is not automatically a better fit.",
  },
  biomarker: {
    lead: "Some lung cancers have characteristics that may make certain treatments worth discussing.",
    ask: "Has my cancer been tested for information that could change my options?",
  },
  secondOpinion: {
    lead: "Many patients find a second opinion helpful when:",
    when: [
      "Decisions feel complex",
      "They want more confidence",
      "They want to understand alternatives",
    ],
    close: "It is about confidence, not distrust.",
  },
  clinicalTrial: {
    lead: "A clinical trial may be another option depending on cancer type, previous treatment, and eligibility.",
    close:
      "Ask whether any trials fit your situation — and how they compare with standard options.",
  },
  first: {
    lead: "Start with three focuses:",
    steps: [
      "Understand what doctors have confirmed about your cancer",
      "Make sure important information is available or in progress",
      "Ask what decision comes next — and how urgent it is",
    ],
    close: "You do not need to solve everything at once.",
  },
  statistics: {
    lead: "If you already looked up numbers online, remember: statistics describe groups of people. Your situation depends on cancer characteristics, treatment response, and overall health.",
    ask: "What factors matter most in my situation?",
    close: "A useful conversation is about your picture — not a chart average.",
  },
  family: {
    lead: "Start with what you know:",
    items: [
      "What doctors have confirmed",
      "What tests are still pending",
      "What happens next",
    ],
    close:
      "You do not need every answer before talking with family. Sharing the next step is often enough for now.",
  },
  worthIt: {
    lead: "Discuss expected benefit, possible side effects, impact on daily life, and your personal priorities.",
    close: "The best decision is one that fits your goals — not only the strongest-sounding option.",
  },
  haveSay: {
    lead: "Yes. Your preferences matter. Good cancer care includes discussing medical options, expected benefits, risks, and what matters most to you.",
    close: "You are part of the decision — not only the recipient of a plan.",
  },
  askList: {
    lead: "After a Stage IV diagnosis, focus questions on the next useful decision.",
    ask: [
      "What are the goals of treatment in my situation?",
      "Has comprehensive biomarker testing been done?",
      "What options are we comparing — and why this recommendation?",
      "Are clinical trials relevant for me now?",
      "How will treatment affect daily life, work, and symptoms?",
      "What should I do this week while we wait for results or next visits?",
    ],
    close: "You do not need every answer today — you need a clear next step.",
  },
} as const;
