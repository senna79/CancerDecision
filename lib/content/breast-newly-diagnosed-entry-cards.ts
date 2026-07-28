/** Hang-card bodies for Breast Newly Diagnosed Orientation Path (Entry Template v2) */

export const BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS = {
  moreTests: {
    lead: "A biopsy may confirm cancer, but more scans or staging tests are often ordered so the team understands extent — for example lymph nodes or distant sites — before locking a first plan in breast cancer. Subtype testing (ER/PR/HER2) is also part of that clearer picture.",
    ask: [
      "Why is this scan or test being ordered for my next decision?",
      "What would a positive or negative finding change?",
      "What can proceed while we wait for results?",
    ],
    close:
      "Different decisions require different information — ask what each test is for, not only what it is called.",
  },
  diagnosisToSurgery: {
    lead: "There is no single universal number of days from diagnosis to surgery in breast cancer. Many people have weeks while subtype, imaging, genetics, or sequencing decisions become clear — and that wait is often intentional, not neglect.",
    ask: [
      "What is a safe timeline to surgery for my situation?",
      "What results should be back before we lock a date?",
      "Would medicines before surgery change that timeline?",
    ],
    close:
      "Ask for your personal window — internet “average days” rarely match a real plan.",
  },
  stageTimeline: {
    lead: "Stage helps describe how far cancer appears to have spread — but it does not produce a fixed “Stage X = Y weeks of treatment” calendar in breast cancer. Timeline also depends on subtype, whether medicines come before surgery, radiation plans, and your health.",
    ask: [
      "What stage do you think I have so far — and what could still change it?",
      "For my stage and subtype, what usually sets the pace: surgery first, medicines first, or more testing?",
      "What is a realistic near-term timeline for me — not an internet average by stage?",
    ],
    close:
      "Ask for your path’s pacing factors. One stage label is not a treatment schedule by itself.",
  },
  notImmediate: {
    lead: "Because the best sequence depends on a more complete picture in breast cancer. Doctors may need information about:",
    factors: [
      "Cancer subtype (ER, PR, HER2 — and related biology)",
      "How far the cancer has spread (stage / nodes / imaging)",
      "Whether systemic therapy should start before or after surgery",
      "Your overall health and life-stage priorities (including fertility when relevant)",
    ],
    close: "Waiting for key information is not the same as having no plan.",
  },
  subtype: {
    lead: "For many people, receptor and HER2 results affect which systemic options and sequencing are discussed first in breast cancer.",
    ask: "Would subtype results change the options we consider — or when surgery should happen?",
  },
  waiting: {
    lead: "Many people worry that waiting for test results means breast cancer is being left untreated. The useful question is whether the information being collected could change your treatment plan — and whether that wait is safe for you.",
    ask: [
      "What results are we waiting for?",
      "Could these results change surgery or treatment order?",
      "Is this waiting period safe for my situation?",
    ],
    close:
      "Waiting for important information is different from delaying care without a plan.",
  },
  focusFirst: {
    lead: "For breast cancer, usually the first focus is:",
    steps: [
      "Understand your diagnosis and what is still pending",
      "Complete important subtype / staging information",
      "Discuss whether treatment starts before or after surgery",
    ],
    close: "Your care team can help identify the next step for you.",
  },
  notExpert: {
    lead: "For breast cancer, no. Your first goal is not to become an expert on every drug name.",
    close:
      "Your goal is to understand what you know, what you don’t know, and what questions to ask.",
  },
  thisWeek: {
    lead: "For breast cancer, focus on three things:",
    steps: [
      "Understand your diagnosis and subtype status",
      "Collect your medical information",
      "Prepare questions for your care team",
    ],
    close: "You do not need to solve the entire journey immediately.",
  },
  secondOpinion: {
    lead: "A second opinion can be helpful, especially when surgery choices feel irreversible, sequencing is unclear, or multiple options exist in breast cancer.",
    close: "It is about confidence, not distrust.",
  },
  geneticsCard: {
    lead: "Some people need genetic counseling before a final surgery choice — especially with family history or other risk factors in breast cancer. Tumor subtype is not the same as germline genetics.",
    ask: "Do I need genetic counseling before surgery — and would results change the operation?",
    close:
      "Ask early if it might change lumpectomy vs mastectomy — then open the genetics decision guide for the full path.",
  },
  records: {
    lead: "For breast cancer, keep copies of:",
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
    lead: "For breast cancer, yes. A diagnosis brings medical uncertainty and emotional stress.",
    close:
      "A structured next-step plan can help reduce the feeling of being lost.",
  },
  startRightAway: {
    lead: "For breast cancer, not always. Some situations need prompt action; others benefit from waiting for subtype, staging, or genetics results first.",
    ask: [
      "How urgent is my situation?",
      "What needs to happen this week?",
      "What can wait for subtype, staging, or genetics results?",
    ],
    close:
      "Ask for a clear timeline — rushing and waiting both have trade-offs.",
  },
  askOncologist: {
    lead: "A first oncology visit usually reviews what is known so far, what is still pending, and which decisions come next — not a final lifelong plan in one hour in breast cancer. Expect talk about subtype, stage/extent, sequencing, and near-term options.",
    ask: [
      "What subtype of breast cancer do I have — and what stage is it?",
      "What additional information do we still need?",
      "Should treatment start before or after surgery?",
      "Do I need genetic counseling before a final surgery choice?",
      "What are my treatment options, and why this recommendation?",
      "How soon do we need to decide?",
    ],
    close:
      "Bring records and a written list. One clear next step beats fifty unanswered questions.",
  },
  askSurgeon: {
    lead: "If surgery is being discussed, clarify fit and sequencing — not only technique in breast cancer.",
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

export const BREAST_NEWLY_DIAGNOSED_DIRECT_ANSWER = `After a new breast cancer diagnosis, the first step is usually clarifying subtype, stage, and whether treatment should start before or after surgery. Paths differ based on what results are still pending, how urgent the next decision feels, and whether genetic counseling could change an operation. You do not need to choose every treatment today. Ask your care team: what must happen this week, what can wait for results, and what decision comes next?`;
