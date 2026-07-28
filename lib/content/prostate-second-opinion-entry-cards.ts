/** Hang-card bodies for Prostate Second Opinion Decision Path (Entry Template v2) */

export const PROSTATE_SECOND_OPINION_ENTRY_CARDS = {
  everyone: {
    lead: "Not everyone needs a second opinion. It is especially worth considering before locking active surveillance for prostate cancer or irreversible treatment when:",
    items: [
      "Recommendations diverge across specialists",
      "Surveillance versus treatment still feels unclear",
      "Surgery and radiation are both offered without a clear comparison",
      "Pathology, MRI, or risk-group findings leave open questions",
      "You want confidence before locking a major step",
    ],
    close:
      "A second opinion is a decision-support tool — not a sign that something is wrong with your current team.",
  },
  whyProstate: {
    lead: "A second opinion before deciding on prostate cancer is often most useful when risk group, monitoring versus treatment, and surgery versus radiation still intersect — and you want confidence before locking a path.",
    items: [
      "Confirm whether active surveillance is reasonable for your risk group",
      "Check whether surgery and radiation comparison is complete enough",
      "Ask whether pathology or MRI should be re-reviewed",
      "Gain confidence before locking monitoring or definitive therapy",
    ],
    close: "Confirmation of the current plan is also a useful outcome.",
  },
  delay: {
    lead: "A second opinion is valuable when it helps clarify a major decision in prostate cancer. Timing depends on urgency — ask what must move now and what can continue while you seek another review.",
    ask: [
      "How urgent is my next decision — monitoring or treatment?",
      "Is there time for a focused second opinion?",
      "What can continue while I seek another opinion?",
    ],
    close:
      "The goal is informed decision-making without unsafe delay.",
  },
  disrespectful: {
    lead: "Most cancer specialists understand that patients want confidence before locking surveillance or irreversible treatment in prostate cancer.",
    close:
      "Frame it as: “I want to understand my options clearly before moving forward.” That is about confidence — not distrust.",
  },
  canChange: {
    lead: "Yes, but not always in prostate cancer. A second opinion may:",
    items: [
      "Confirm the current plan",
      "Suggest additional imaging or pathology review before deciding",
      "Discuss a different monitoring-versus-treatment recommendation",
      "Clarify surgery versus radiation tradeoffs for your priorities",
    ],
    close:
      "The goal is not to change treatment for its own sake. The goal is to understand whether the plan fits your situation.",
  },
  twoDoctors: {
    lead: "Different recommendations can feel confusing — especially when urology and radiation oncology frame options differently in prostate cancer. Instead of asking “Which doctor is right?”, compare the reasoning behind each plan.",
    items: [
      "Expected cancer-control fit for your risk group",
      "Urinary, sexual, and bowel tradeoffs",
      "Whether surveillance is still on the table",
      "What information each recommendation assumes",
    ],
    close:
      "Write the differences down side by side before choosing.",
  },
  pathology: {
    lead: "In some situations, another review of pathology, MRI, or risk-group reporting may add confidence — especially when results are borderline or recommendations conflict in prostate cancer.",
    ask: [
      "Was my Grade Group / Gleason and risk summary confirmed?",
      "Are there uncertain MRI or biopsy findings that another specialist should re-review?",
      "Would slide or imaging review change monitoring versus treatment?",
    ],
  },
  focus: {
    lead: "A useful second opinion has a named question. Common prostate focuses include:",
    items: [
      "Whether active surveillance is reasonable",
      "Surgery versus radiation for your risk group and priorities",
      "Whether pathology or MRI should be re-reviewed",
      "How to reconcile specialty recommendations that differ",
    ],
    close:
      "Tell the reviewing team the one decision you need help with.",
  },
  howToGet: {
    lead: "Getting a prostate cancer second opinion usually means: name the decision you want reviewed, gather records, ask about urgency, then book a focused consultation (in-person or remote) with a prostate specialist or multidisciplinary team.",
    steps: [
      "Write one sentence: the decision you need help with",
      "Collect pathology (Grade Group / Gleason), PSA history, MRI/imaging, and the current plan",
      "Ask your current team whether waiting for the review is safe",
      "Book the review and send records ahead when possible",
    ],
    close:
      "A clear question plus complete records beats “please look at everything.”",
  },
  records: {
    lead: "For prostate cancer, bring the complete picture when you can:",
    items: [
      "Pathology report (including Grade Group / Gleason)",
      "PSA history and recent values",
      "MRI and staging imaging reports when available",
      "Current recommended plan and why (surveillance or treatment)",
      "Your one-sentence question for the review",
    ],
    close:
      "Incomplete records often produce incomplete opinions.",
  },
  cost: {
    lead: "Costs and coverage vary by clinic, visit type (in-person vs remote), and insurance in prostate cancer. Use questions instead of guessing a price:",
    ask: [
      "Is this visit covered as a second opinion / consultation?",
      "What records or slide reviews add extra fees?",
      "Can a remote review answer my question, or do I need to travel?",
    ],
  },
  thisWeek: {
    lead: "For prostate cancer, if you are arranging a second opinion, focus on:",
    steps: [
      "Name the decision you want reviewed (surveillance, surgery vs radiation, or risk clarity)",
      "Gather pathology, PSA, imaging, and the current recommendation in writing",
      "Ask your current team how urgent the calendar is",
    ],
    close:
      "A focused packet beats a vague request for “another look.”",
  },
  mistakes: {
    lead: "For prostate cancer, common second-opinion mistakes include:",
    items: [
      {
        mistake: "Waiting until after irreversible treatment to ask for review",
        why: "Many prostate second opinions are most useful before locking surveillance or definitive therapy.",
      },
      {
        mistake: "Sending incomplete records",
        why: "Without pathology, PSA, imaging, and the current plan, the review cannot be specific.",
      },
      {
        mistake: "Seeking only agreement, not a clear question",
        why: "Ask what would change — confirmation is useful, but the question must be named.",
      },
    ],
  },
} as const;

export const PROSTATE_SECOND_OPINION_GLOSS =
  "A prostate cancer second opinion is most useful before locking active surveillance or irreversible treatment when recommendations diverge or you want confidence — not as a sign that something is wrong.";

export const PROSTATE_SECOND_OPINION_DIRECT_ANSWER = `Often a second opinion helps before locking active surveillance or irreversible prostate cancer treatment when recommendations diverge, risk features are borderline, or surgery and radiation are both offered without a clear comparison. Value depends on timing, what you need clarified, and how complete your records are. It is not always necessary if the plan feels clear and concordant. Ask: what decision do I want reviewed, and is there time for a focused second opinion before the next irreversible step?`;
