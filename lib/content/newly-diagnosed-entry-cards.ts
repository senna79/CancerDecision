/** Hang-card bodies for Newly Diagnosed Orientation Path (Entry Template v2) */

export const NEWLY_DIAGNOSED_ENTRY_CARDS = {
  moreTests: {
    lead: "A biopsy may confirm cancer, but additional information may be needed to understand cancer type, stage, and which options should be discussed.",
    close: "Different decisions require different information.",
  },
  notImmediate: {
    lead: "Because the best treatment depends on a more complete picture. Doctors may need information about:",
    factors: [
      "Cancer characteristics",
      "How far the cancer has spread",
      "Your overall health",
    ],
    close: "Waiting for key information is not the same as having no plan.",
  },
  biomarker: {
    lead: "For some patients, biomarker information may affect which treatments are discussed.",
    ask: "Would biomarker results change the options we consider?",
  },
  waiting: {
    lead: "Not every delay is the same. Doctors balance the need for information with the urgency of treatment.",
    ask: "How urgent is my situation?",
    close: "Ask what needs to happen quickly — and what can wait for results.",
  },
  focusFirst: {
    lead: "Usually the first focus is:",
    steps: [
      "Understand your diagnosis",
      "Complete important testing",
      "Discuss appropriate options",
    ],
    close: "Your care team can help identify the next step for you.",
  },
  notExpert: {
    lead: "No. Your first goal is not to become an expert.",
    close:
      "Your goal is to understand what you know, what you don’t know, and what questions to ask.",
  },
  thisWeek: {
    lead: "Focus on three things:",
    steps: [
      "Understand your diagnosis",
      "Collect your medical information",
      "Prepare questions for your care team",
    ],
    close: "You do not need to solve the entire journey immediately.",
  },
  secondOpinion: {
    lead: "A second opinion can be helpful, especially when decisions are complex, surgery is being considered, or multiple options exist.",
    close: "It is about confidence, not distrust.",
  },
  records: {
    lead: "Keep copies of:",
    items: [
      "Pathology report",
      "Imaging reports",
      "Scan images when available",
      "Biomarker results",
      "Treatment recommendations",
    ],
    close: "These records help throughout your cancer journey.",
  },
  overwhelmed: {
    lead: "Yes. A diagnosis brings medical uncertainty and emotional stress.",
    close:
      "A structured next-step plan can help reduce the feeling of being lost.",
  },
  startRightAway: {
    lead: "Not always. Some situations need prompt action; others benefit from waiting for key information first.",
    ask: [
      "How urgent is my situation?",
      "What needs to happen this week?",
      "What can wait for biomarker or staging results?",
    ],
    close:
      "Ask for a clear timeline — rushing and waiting both have trade-offs.",
  },
  askOncologist: {
    lead: "Focus on questions that clarify your next decision — not every possible detail.",
    ask: [
      "What type and stage of lung cancer do I have?",
      "What additional information do we still need?",
      "Has biomarker testing been ordered — and could results change options?",
      "What are my treatment options, and why this recommendation?",
      "How soon do we need to decide?",
      "Are clinical trials or a second opinion worth discussing now?",
    ],
    close: "Bring a written list. One clear next step beats fifty unanswered questions.",
  },
  askThoracic: {
    lead: "If surgery is being discussed, a thoracic surgeon conversation should clarify fit — not only technique.",
    ask: [
      "Is surgery appropriate for my situation, and what is the goal?",
      "What are the alternatives if I do not have surgery?",
      "How much of your practice is lung cancer surgery?",
      "What recovery and breathing changes should I expect?",
      "Would a second opinion before surgery be reasonable?",
    ],
  },
} as const;
