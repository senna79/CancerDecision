/** Hang-card bodies for Clinical Trial Decision Path (Entry Template v2) */

export const CLINICAL_TRIAL_ENTRY_CARDS = {
  notLastResort: {
    lead: "Many people believe a trial means standard treatment has failed. That is a common misunderstanding.",
    when: [
      "Newly diagnosed",
      "Comparing initial treatments",
      "Receiving standard therapy",
      "Looking for options after treatment changes",
    ],
    close: "The right time depends on your situation — not only on “running out of options.”",
  },
  askEarly: {
    lead: "For some patients, discussing trials early may help identify possible options before decisions are locked.",
    ask: "Are there clinical trials that should be considered before choosing my treatment plan?",
  },
  notTestSubject: {
    lead: "Clinical trials involve research, but they follow structured safety processes.",
    understand: [
      "What is being studied",
      "What is known",
      "What is uncertain",
      "What monitoring is required",
    ],
    close: "You decide whether participation fits your situation.",
  },
  notQualify: {
    lead: "Clinical trials have eligibility requirements designed for safety and research accuracy.",
    mayInvolve: [
      "Cancer type",
      "Biomarker results",
      "Previous treatments",
      "Health conditions",
    ],
    close: "Not qualifying does not mean there are no other options.",
  },
  biomarkers: {
    lead: "Some trials look for specific cancer characteristics. Biomarker results may help determine whether certain trials are relevant.",
    ask: "Are there biomarkers that could affect my trial options?",
  },
  replaceCurrent: {
    lead: "Sometimes a trial is studied as an alternative approach. Sometimes it is combined with standard treatment.",
    depends: [
      "Trial design",
      "Your cancer situation",
      "Treatment goals",
    ],
  },
  notAutomaticallyBetter: {
    lead: "A clinical trial is not automatically better than standard treatment.",
    mayOffer: [
      "Access to a treatment being studied",
      "Another possible option",
      "Closer monitoring",
    ],
    close: "It may also involve uncertainty. Ask: “Does this option make sense for me?”",
  },
  risks: {
    lead: "Possible considerations include:",
    items: [
      "Unknown effectiveness",
      "Side effects",
      "Additional testing",
      "Extra appointments",
    ],
    close: "Your team should explain what is known and what remains uncertain.",
  },
  dailyLife: {
    lead: "Participation may involve more visits, additional scans or tests, travel, and schedule changes.",
    ask: "What would my normal week look like during this trial?",
  },
  ifNotWorking: {
    lead: "Before joining, understand what happens next.",
    ask: [
      "What happens if the treatment is not effective?",
      "What options remain afterward?",
      "Can I stop participating?",
    ],
    close: "Understanding the next step is part of the decision.",
  },
  mistakes: {
    lead: "Common mistakes include:",
    items: [
      {
        mistake: "Waiting too long to ask",
        why: "Some opportunities require early discussion.",
      },
      {
        mistake: "Assuming trials are only for advanced cancer",
        why: "Trials exist at different stages of the journey.",
      },
      {
        mistake: "Choosing based only on “new”",
        why: "New does not always mean appropriate for you.",
      },
    ],
  },
  family: {
    lead: "Many patients discuss trials with family because decisions may involve travel, schedules, support needs, and uncertainty.",
    close: "Your care team can help explain the practical impact.",
  },
  secondOpinion: {
    lead: "A second opinion may help when the trial decision is complex, multiple options exist, or you want more confidence.",
    close: "The goal is better understanding — not delaying care unnecessarily.",
  },
} as const;
