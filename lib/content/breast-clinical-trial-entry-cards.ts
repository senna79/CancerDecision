/** Hang-card bodies for Breast Clinical Trial Decision Path (Entry Template v2) */

export const BREAST_CLINICAL_TRIAL_ENTRY_CARDS = {
  notLastResort: {
    lead: "Many people believe a trial means standard treatment has failed. That is a common misunderstanding.",
    items: [
      "Newly diagnosed — before locking surgery or neoadjuvant therapy",
      "Comparing first systemic options by subtype",
      "Receiving standard therapy and wanting to know what else exists",
      "After recurrence or in metastatic planning",
    ],
    close:
      "The right time depends on your situation — not only on “running out of options.”",
  },
  askEarly: {
    lead: "For some people, discussing trials early may identify options before surgery timing, sequencing, or first medicines are locked.",
    ask: [
      "Are there clinical trials that should be considered before I lock my treatment plan?",
      "Would waiting for a trial screen change the next irreversible step?",
    ],
    close: "Earlier discussion can still help even if you stay with standard care.",
  },
  notTestSubject: {
    lead: "Clinical trials involve research, but they follow structured safety processes. You should understand:",
    items: [
      "What is being studied",
      "What is already known",
      "What is still uncertain",
      "What monitoring is required",
    ],
    close: "You decide whether participation fits your situation.",
  },
  subtype: {
    lead: "Subtype and other cancer features often shape which breast cancer trials are relevant — HR+, HER2+, TNBC, and selected genomic findings may open different study doors.",
    ask: [
      "For my subtype, which trial families belong in the discussion?",
      "Would additional testing change which trials I could consider?",
    ],
    close:
      "Ask how your subtype results connect to trial eligibility — not only to standard medicines.",
  },
  notQualify: {
    lead: "Clinical trials have eligibility requirements designed for safety and research accuracy. They may involve:",
    items: [
      "Breast cancer subtype and stage",
      "Previous treatments and responses",
      "Other health conditions",
      "How recently surgery, radiation, or medicines were given",
    ],
    close: "Not qualifying for one trial does not mean there are no other options.",
  },
  replaceCurrent: {
    lead: "Sometimes a trial is studied as an alternative approach. Sometimes it is added to standard treatment. Sometimes it is offered after a plan changes.",
    items: [
      "Trial design (what is being compared)",
      "Your cancer situation and goals",
      "Whether standard care continues alongside the study",
    ],
    close: "Ask how the trial would sit next to — or instead of — the current plan.",
  },
  notAutomaticallyBetter: {
    lead: "A clinical trial is not automatically better than standard treatment.",
    items: [
      "Access to a treatment being studied",
      "Another option to compare with standard care",
      "Closer monitoring in some studies",
    ],
    close:
      "It may also involve uncertainty. Ask: “Does this option make sense for me compared with standard care?”",
  },
  risks: {
    lead: "Possible considerations include:",
    items: [
      "Unknown effectiveness compared with standard care",
      "Side effects — known and unknown",
      "Additional testing and appointments",
      "Travel or schedule burden",
    ],
    close: "Your team should explain what is known and what remains uncertain.",
  },
  dailyLife: {
    lead: "Participation may involve more visits, additional scans or tests, travel, and schedule changes.",
    ask: [
      "What would my normal week look like during this trial?",
      "Can some visits happen closer to home?",
    ],
    close: "Practical fit belongs in the trial decision — not only medical novelty.",
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
  thisWeek: {
    lead: "If a clinical trial is in the conversation, focus on:",
    steps: [
      "Ask whether any trials fit your subtype, stage, and prior treatment",
      "Compare the trial with standard options — goal, evidence, and impact",
      "Clarify visits, travel, and what happens if it does not work",
    ],
    close:
      "A clear comparison beats joining because something is “new.”",
  },
  mistakes: {
    lead: "Common mistakes when considering breast cancer clinical trials include:",
    items: [
      {
        mistake: "Waiting too long to ask",
        why: "Some opportunities require discussion before surgery or first systemic therapy is locked.",
      },
      {
        mistake: "Assuming trials are only for metastatic disease",
        why: "Trials exist at different stages of the journey, including earlier settings.",
      },
      {
        mistake: "Choosing based only on “new”",
        why: "New does not always mean appropriate for your subtype and goals.",
      },
      {
        mistake: "Ignoring practical burden",
        why: "Visit load and travel can decide whether a trial is workable.",
      },
    ],
  },
} as const;

export const BREAST_CLINICAL_TRIAL_GLOSS =
  "A breast cancer clinical trial is another option to evaluate — not automatically better than standard care, and not only for people who have run out of options. Fit depends on subtype, prior treatment, goals, and practical burden.";

export const BREAST_CLINICAL_TRIAL_DIRECT_ANSWER = `A clinical trial is another option to evaluate alongside standard breast cancer care — not automatically better, and not only a last resort.

Ask: “Is there a trial that fits my subtype and situation — and how does it compare with standard options on goal, evidence, and daily-life impact?”

Discuss trials early enough that you are not locked out by timing. Not qualifying for one study does not mean other options have ended.`;
