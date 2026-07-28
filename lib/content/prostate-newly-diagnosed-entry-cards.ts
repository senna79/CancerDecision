/** Hang-card bodies for Prostate Newly Diagnosed Orientation Path (Entry Template v2) */

export const PROSTATE_NEWLY_DIAGNOSED_ENTRY_CARDS = {
  moreTests: {
    lead: "A biopsy may confirm prostate cancer, but risk group often needs more than that one result. PSA, Grade Group / Gleason, MRI, and sometimes staging scans help the team decide whether monitoring or treatment belongs first.",
    ask: [
      "Why is this scan or test being ordered for my next decision?",
      "What would a higher- or lower-risk finding change?",
      "What can proceed while we wait for results?",
    ],
    close:
      "Different decisions require different information — ask what each test is for, not only what it is called.",
  },
  diagnosisToTreatment: {
    lead: "There is no single universal number of days from diagnosis to surgery or radiation in prostate cancer. Many people have weeks while risk group, imaging, and the surveillance-versus-treatment fork become clear — and that wait is often intentional, not neglect.",
    ask: [
      "What is a safe timeline to a first treatment decision for my situation?",
      "What results should be back before we lock a path?",
      "Would active surveillance change that timeline?",
    ],
    close:
      "Ask for your personal window — internet “average days” rarely match a real plan.",
  },
  riskTimeline: {
    lead: "Risk group and stage help describe how serious prostate cancer appears — but they do not produce a fixed “Risk X = Y weeks of treatment” calendar. Timeline also depends on whether surveillance is reasonable, which treatment is discussed, and your health and priorities.",
    ask: [
      "What risk group do you think I have so far — and what could still change it?",
      "For my risk group, what usually sets the pace: more testing, monitoring, or treatment planning?",
      "What is a realistic near-term timeline for me — not an internet average by stage?",
    ],
    close:
      "Ask for your path’s pacing factors. One risk label is not a treatment schedule by itself.",
  },
  notImmediate: {
    lead: "Because the best first path depends on a more complete picture in prostate cancer. Doctors may need information about:",
    factors: [
      "Risk group (PSA, Grade Group / Gleason, and related biopsy details)",
      "How far the cancer appears to have spread (MRI / staging)",
      "Whether active surveillance could be reasonable for someone like you",
      "Your overall health and priorities around urinary and sexual function",
    ],
    close: "Waiting for key information is not the same as having no plan.",
  },
  riskGroup: {
    lead: "For many people, risk group — not the word “cancer” alone — shapes whether monitoring or treatment is discussed first in prostate cancer.",
    ask: "Would clarifying my risk group change whether surveillance is on the table — or which treatment options we discuss?",
  },
  waiting: {
    lead: "Many people worry that waiting for test results means prostate cancer is being left untreated. The useful question is whether the information being collected could change your first path — and whether that wait is safe for you.",
    ask: [
      "What results are we waiting for?",
      "Could these results change monitoring versus treatment?",
      "Is this waiting period safe for my situation?",
    ],
    close:
      "Waiting for important information is different from delaying care without a plan.",
  },
  startRightAway: {
    lead: "For prostate cancer, not always. Some situations need prompt action; others benefit from waiting for risk-group clarity, MRI, or staging first — and some people can start with structured monitoring.",
    ask: [
      "How urgent is my situation?",
      "What needs to happen this week?",
      "What can wait for risk-group or imaging results?",
    ],
    close:
      "Ask for a clear timeline — rushing and waiting both have trade-offs.",
  },
  surveillanceFork: {
    lead: "For some risk groups, active surveillance for prostate cancer (structured monitoring) can be a reasonable first path — not “doing nothing.” Whether it fits depends on your risk details, life expectancy, and comfort with monitoring.",
    ask: "Is active surveillance a reasonable option for someone like me — and what would make us treat instead?",
    close:
      "Ask early if monitoring could be on the table — then open the surveillance decision guide for the full path.",
  },
  focusFirst: {
    lead: "For prostate cancer, usually the first focus is:",
    steps: [
      "Understand your diagnosis and what is still pending",
      "Clarify risk group (PSA, Grade Group / Gleason, imaging)",
      "Discuss whether monitoring or treatment belongs first",
    ],
    close: "Your care team can help identify the next step for you.",
  },
  notExpert: {
    lead: "For prostate cancer, no. Your first goal is not to become an expert on every treatment name.",
    close:
      "Your goal is to understand what you know, what you don’t know, and what questions to ask.",
  },
  thisWeek: {
    lead: "For prostate cancer, focus on three things:",
    steps: [
      "Understand your diagnosis and risk-group status",
      "Collect your medical information",
      "Prepare questions for your care team",
    ],
    close: "You do not need to solve the entire journey immediately.",
  },
  secondOpinion: {
    lead: "A second opinion can be helpful, especially when surveillance versus treatment feels unclear, surgery and radiation are both offered, or specialty recommendations differ in prostate cancer.",
    close: "It is about confidence, not distrust.",
  },
  records: {
    lead: "For prostate cancer, keep copies of:",
    items: [
      "Pathology report (including Grade Group / Gleason)",
      "PSA history and recent PSA values",
      "MRI and staging imaging reports when available",
      "Risk-group summary in plain language, if your team provides one",
      "Treatment or surveillance recommendations so far",
    ],
    close: "These records help throughout your cancer journey.",
  },
  overwhelmed: {
    lead: "For prostate cancer, yes. A diagnosis brings medical uncertainty and emotional stress.",
    close:
      "A structured next-step plan can help reduce the feeling of being lost.",
  },
  askUrologist: {
    lead: "A first urology visit usually reviews what is known so far, what is still pending, and which decisions come next — not a final lifelong plan in one hour in prostate cancer. Expect talk about risk group, whether surveillance may fit, and near-term options.",
    ask: [
      "What is my risk group in plain language — and what is still missing?",
      "What additional information do we still need?",
      "Is active surveillance a reasonable option for someone like me?",
      "If treatment is recommended, how do surgery and radiation compare for me?",
      "What are my options, and why this recommendation?",
      "How soon do we need to decide?",
    ],
    close:
      "Bring records and a written list. One clear next step beats fifty unanswered questions.",
  },
  askRadiation: {
    lead: "If radiation is being discussed, clarify fit and tradeoffs — not only technique names in prostate cancer.",
    ask: [
      "For my risk group, is radiation a reasonable option — alone or with other therapy?",
      "How do urinary, sexual, and bowel side effects compare with surgery for someone like me?",
      "What would make you recommend radiation over surgery — or the reverse?",
      "Would hearing both urology and radiation oncology before deciding be reasonable?",
    ],
  },
} as const;

export const PROSTATE_NEWLY_DIAGNOSED_GLOSS =
  "After a prostate cancer diagnosis, the first step is usually clarifying risk group, pending results, and whether active surveillance could be reasonable — not locking surgery or radiation on day one.";

export const PROSTATE_NEWLY_DIAGNOSED_DIRECT_ANSWER = `After a new prostate cancer diagnosis, the first step is usually clarifying your risk group, what results are still pending, and whether active surveillance could be reasonable. Paths differ based on PSA, Grade Group, imaging, how urgent the next decision feels, and your priorities. You do not need to choose surgery or radiation today. Ask your care team: what must happen this week, what can wait for results, and what decision comes next?`;
