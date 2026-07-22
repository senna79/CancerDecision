/** Hang-card bodies for Breast Newly Diagnosed Orientation Path (Entry Template v2) */

export const BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS = {
  moreTests: {
    lead: "A biopsy may confirm cancer, but additional information is often needed before a first plan is clear — especially subtype (receptors / HER2), imaging for extent, and sometimes genetic counseling.",
    close: "Different decisions require different information.",
  },
  notImmediate: {
    lead: "Because the best sequence depends on a more complete picture. Doctors may need information about:",
    factors: [
      "Cancer subtype (ER, PR, HER2 — and related biology)",
      "How far the cancer has spread (stage / nodes / imaging)",
      "Whether systemic therapy should start before or after surgery",
      "Your overall health and life-stage priorities (including fertility when relevant)",
    ],
    close: "Waiting for key information is not the same as having no plan.",
  },
  subtype: {
    lead: "For many people, receptor and HER2 results affect which systemic options and sequencing are discussed first.",
    ask: "Would subtype results change the options we consider — or when surgery should happen?",
  },
  waiting: {
    lead: "Not every delay is the same. Doctors balance the need for subtype, staging, and genetics information with the urgency of treatment.",
    ask: "How urgent is my situation?",
    close: "Ask what needs to happen quickly — and what can wait for results.",
  },
  focusFirst: {
    lead: "Usually the first focus is:",
    steps: [
      "Understand your diagnosis and what is still pending",
      "Complete important subtype / staging information",
      "Discuss whether treatment starts before or after surgery",
    ],
    close: "Your care team can help identify the next step for you.",
  },
  notExpert: {
    lead: "No. Your first goal is not to become an expert on every drug name.",
    close:
      "Your goal is to understand what you know, what you don’t know, and what questions to ask.",
  },
  thisWeek: {
    lead: "Focus on three things:",
    steps: [
      "Understand your diagnosis and subtype status",
      "Collect your medical information",
      "Prepare questions for your care team",
    ],
    close: "You do not need to solve the entire journey immediately.",
  },
  secondOpinion: {
    lead: "A second opinion can be helpful, especially when surgery choices feel irreversible, sequencing is unclear, or multiple options exist.",
    close: "It is about confidence, not distrust.",
  },
  geneticsCard: {
    lead: "Some people need genetic counseling before a final surgery choice — especially with family history or other risk factors. Tumor subtype is not the same as germline genetics.",
    ask: "Do I need genetic counseling before surgery — and would results change the operation?",
    close:
      "Ask early if it might change lumpectomy vs mastectomy — then open the genetics decision guide for the full path.",
  },
  records: {
    lead: "Keep copies of:",
    items: [
      "Pathology report",
      "Receptor / HER2 results (and genomic assay results when available)",
      "Imaging reports and scan images when available",
      "Genetic counseling notes if ordered",
      "Treatment recommendations and sequencing plan",
    ],
    close: "These records help throughout your cancer journey.",
  },
  overwhelmed: {
    lead: "Yes. A diagnosis brings medical uncertainty and emotional stress.",
    close:
      "A structured next-step plan can help reduce the feeling of being lost.",
  },
  startRightAway: {
    lead: "Not always. Some situations need prompt action; others benefit from waiting for subtype, staging, or genetics results first.",
    ask: [
      "How urgent is my situation?",
      "What needs to happen this week?",
      "What can wait for subtype, staging, or genetics results?",
    ],
    close:
      "Ask for a clear timeline — rushing and waiting both have trade-offs.",
  },
  askOncologist: {
    lead: "Focus on questions that clarify your next decision — not every possible detail.",
    ask: [
      "What subtype of breast cancer do I have — and what stage is it?",
      "What additional information do we still need?",
      "Should treatment start before or after surgery?",
      "Do I need genetic counseling before a final surgery choice?",
      "What are my treatment options, and why this recommendation?",
      "How soon do we need to decide?",
    ],
    close: "Bring a written list. One clear next step beats fifty unanswered questions.",
  },
  askSurgeon: {
    lead: "If surgery is being discussed, clarify fit and sequencing — not only technique.",
    ask: [
      "Is surgery appropriate now, or should systemic therapy come first?",
      "Am I a candidate for lumpectomy, mastectomy, or both?",
      "Would genetic results change the surgery recommendation?",
      "How does reconstruction timing fit if mastectomy is chosen?",
      "Would a second opinion before surgery be reasonable?",
    ],
  },
} as const;

export const BREAST_NEWLY_DIAGNOSED_GLOSS =
  "After a breast cancer diagnosis, you do not need every answer immediately — first understand subtype and stage, whether treatment should start before or after surgery, and how to prepare for the next conversation.";

export const BREAST_NEWLY_DIAGNOSED_DIRECT_ANSWER = `After a new breast cancer diagnosis, you do not need every answer immediately. First clarify what is known and what is still pending — especially subtype (receptors / HER2), stage or extent, and whether treatment should start before or after surgery.

Ask what must happen this week, what can wait for results, and whether genetic counseling could change a surgery choice. Prepare a short question list and keep your key reports together.

Your next step is clarity and sequencing — not choosing every treatment today.`;
