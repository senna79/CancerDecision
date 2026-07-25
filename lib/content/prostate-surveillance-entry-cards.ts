/** Hang-card bodies for Prostate Active Surveillance Decision Path (Entry Template v2) */

export const PROSTATE_SURVEILLANCE_ENTRY_CARDS = {
  whatIs: {
    lead: "Active surveillance means structured monitoring — regular PSA checks, exams, and usually repeat MRI or biopsy on a planned schedule — instead of immediate surgery or radiation. It is not the same as “doing nothing” or ignoring the cancer.",
    close:
      "The goal is to defer treatment side effects while watching carefully for change that would make treatment the better next step.",
  },
  whyMatters: {
    lead: "This fork sits at the center of many prostate decisions. Choosing monitoring versus treatment can change:",
    items: [
      "Whether you face urinary, sexual, or bowel side effects now — or later, if needed",
      "How often you return for PSA, imaging, and possible repeat biopsy",
      "When surgery vs radiation comparison becomes the next decision",
      "How much uncertainty you are willing to live with between visits",
    ],
    close:
      "That is why surveillance belongs on the prostate spine after risk clarity — and before locking definitive therapy.",
  },
  notDoingNothing: {
    lead: "Active surveillance is not watchful waiting in the old sense of “wait until symptoms.” It is a planned monitoring program with triggers to switch to treatment if the cancer changes.",
    close:
      "Ask what the follow-up schedule and exit triggers are — those details define whether monitoring is a real plan.",
  },
  notWeaker: {
    lead: "This decision is not “which path is stronger in the abstract.” For selected lower-risk cancers, monitoring can be medically appropriate; for others, treatment is favored now.",
    close:
      "The useful question is whether surveillance fits your risk group and priorities — not which option sounds more aggressive online.",
  },
  riskFirst: {
    lead: "Risk group (PSA, Grade Group / Gleason, MRI and biopsy details) often decides whether surveillance is even on the table.",
    close:
      "If risk-group information is incomplete, ask whether this fork should wait until the picture is clearer.",
  },
  whoFits: {
    lead: "Surveillance is discussed more often when:",
    items: [
      "Risk group looks lower (or selected favorable intermediate, depending on findings)",
      "Imaging and biopsy do not show features that push toward prompt treatment",
      "Life expectancy and overall health support a monitoring plan",
      "You can follow the PSA / MRI / biopsy schedule",
    ],
    close:
      "“Fits on paper” still needs a conversation about your comfort with monitoring.",
  },
  whoMayNot: {
    lead: "Treatment now may be favored when risk features are higher, imaging or biopsy raises concern, life expectancy and goals favor definitive therapy, or you prefer not to live with monitoring uncertainty.",
    ask: [
      "What features make surveillance less appropriate for me?",
      "If we treat now, what are we trying to achieve?",
      "Would another pathology or MRI review change that?",
    ],
    close:
      "Ask for the specific reasons — not only “you should treat” or “you should watch.”",
  },
  triggers: {
    lead: "Before choosing surveillance, ask what would end it. Common trigger categories include:",
    items: [
      "Rising PSA pattern that concerns the team",
      "MRI changes that suggest progression",
      "Repeat biopsy showing higher Grade Group or more disease",
      "Your preference shifting toward treatment",
    ],
    close:
      "Clear exit rules make monitoring feel like a plan — not an open-ended wait.",
  },
  schedule: {
    lead: "Ask what follow-up would look like in the first year and after — PSA timing, exams, MRI intervals, and when repeat biopsy is planned.",
    ask: [
      "How often will PSA be checked?",
      "When do MRI and repeat biopsy usually happen?",
      "What happens between visits if I worry about a change?",
    ],
    close:
      "A written schedule is more useful than a vague “we will watch it.”",
  },
  anxiety: {
    lead: "Living with monitoring can feel stressful even when it is medically reasonable. Comfort with uncertainty is part of the decision — not a side issue.",
    ask: [
      "How do people usually handle the uncertainty of surveillance?",
      "What support or check-in options exist if anxiety rises?",
      "If monitoring feels too hard for me, how do we switch to treatment?",
    ],
    close:
      "Preferring treatment for peace of mind can be a valid reason — discuss it openly.",
  },
  vsTreatment: {
    lead: "If treatment is recommended instead, the next decision is usually how to compare surgery and radiation — not automatically which hospital or drug name to chase.",
    close:
      "Clarify the monitoring-versus-treatment fork first. Then open the surgery vs radiation guide if definitive therapy is the path.",
  },
  whatChanges: {
    lead: "Ask what would change the recommendation between surveillance and treatment. Common factors include:",
    items: [
      "Risk group and PSA kinetics",
      "MRI and biopsy findings (including volume / Grade Group)",
      "Life expectancy and other health conditions",
      "Urinary and sexual priorities",
      "Tolerance for follow-up intensity and uncertainty",
    ],
    close:
      "A clear “what would change this?” answer is often more useful than a long treatment menu.",
  },
  pendingInfo: {
    lead: "Before locking surveillance or treatment, confirm whether important information is still pending:",
    items: [
      "Complete risk-group summary (PSA, Grade Group / Gleason)",
      "MRI or staging imaging",
      "Pathology re-review if results are borderline",
      "Any second-opinion review you still want",
    ],
    close:
      "Waiting for information that would change the fork is not automatically an unsafe delay — ask how urgent your situation is.",
  },
  lifeFit: {
    lead: "Surveillance also has a practical side — visit frequency, travel to imaging, and living with results between appointments.",
    ask: [
      "Can I realistically keep the follow-up schedule?",
      "What happens if I miss a visit or move cities?",
      "How does monitoring compare with recovery time after surgery or radiation?",
    ],
  },
  thisWeek: {
    lead: "If monitoring versus treatment is the decision in front of you, focus on:",
    steps: [
      "Confirm risk-group and imaging information are complete enough",
      "Ask whether surveillance is reasonable for you — and what would end it",
      "Write down schedule, triggers, and open questions before the next visit",
    ],
    close:
      "Clarity on the fork beats comparing every treatment side effect before monitoring is ruled in or out.",
  },
  secondOpinion: {
    lead: "A second opinion can help when surveillance and treatment are both offered, risk features are borderline, or specialty recommendations differ.",
    close: "It is about confidence, not distrust.",
  },
  mistakes: {
    lead: "Common surveillance mistakes include:",
    items: [
      {
        mistake: "Hearing “surveillance” as “doing nothing”",
        why: "Active surveillance is a structured program with tests and exit triggers.",
      },
      {
        mistake: "Choosing treatment only because “cancer” sounds urgent",
        why: "For selected lower-risk cancers, deferring side effects can be guideline-supported.",
      },
      {
        mistake: "Starting monitoring without clear follow-up rules",
        why: "Without schedule and triggers, surveillance is not a complete plan.",
      },
    ],
  },
} as const;

export const PROSTATE_SURVEILLANCE_GLOSS =
  "Active surveillance is structured monitoring for selected prostate cancers — not “doing nothing.” Ask whether it fits your risk group, what follow-up looks like, and what would trigger treatment.";

export const PROSTATE_SURVEILLANCE_DIRECT_ANSWER = `Active surveillance can be a reasonable option for selected lower-risk prostate cancers — and for some favorable intermediate situations, depending on findings.

It means structured monitoring (PSA, exams, and usually MRI or repeat biopsy on a schedule) to defer treatment side effects while watching for change. It is not the same as ignoring the cancer.

Before choosing it, ask:
1. Is surveillance appropriate for my risk group?
2. What is the exact follow-up schedule?
3. What PSA, MRI, or biopsy changes would end surveillance?
4. How do I feel about living with monitoring uncertainty?

If surveillance is not appropriate — or you prefer treatment now — the next step is usually comparing surgery and radiation for your situation.`;
