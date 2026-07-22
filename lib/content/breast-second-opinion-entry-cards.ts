/** Hang-card bodies for Breast Second Opinion Decision Path (Entry Template v2) */

export const BREAST_SECOND_OPINION_ENTRY_CARDS = {
  everyone: {
    lead: "Not everyone needs a second opinion. It is especially worth considering before irreversible surgery or a major systemic plan when:",
    items: [
      "Surgery choices feel borderline or conflicting",
      "Before-vs-after surgery sequencing is unclear",
      "Subtype, imaging, or pathology findings do not line up cleanly",
      "Reconstruction or genetics could change the operation",
      "You want confidence before locking a major step",
    ],
    close:
      "A second opinion is a decision-support tool — not a sign that something is wrong with your current team.",
  },
  whyBreast: {
    lead: "A second opinion before breast cancer surgery is often most useful when subtype, sequencing, surgery choice, and personal priorities still intersect — and you want confidence before an irreversible local plan.",
    items: [
      "Confirm whether both lumpectomy and mastectomy are reasonable",
      "Check whether sequencing recommendations fit your subtype and stage",
      "Ask whether key testing or genetics is still missing",
      "Gain confidence before locking surgery or reconstruction timing",
    ],
    close:
      "Confirmation of the current plan is also a useful outcome.",
  },
  delay: {
    lead: "Timing depends on urgency. Ask your care team:",
    ask: [
      "How urgent is my next treatment decision?",
      "What information are we still waiting for?",
      "Is there enough time for another focused review?",
    ],
    close:
      "The goal is informed decision-making without unsafe delay.",
  },
  disrespectful: {
    lead: "Most cancer specialists understand that patients want confidence before major breast surgery or systemic therapy.",
    close:
      "Frame it as: “I want to understand my options clearly before moving forward.” That is about confidence — not distrust.",
  },
  canChange: {
    lead: "Yes, but not always. A second opinion may:",
    items: [
      "Confirm the current plan",
      "Suggest additional testing or genetics before surgery",
      "Discuss a different sequencing or surgery approach",
      "Clarify reconstruction timing or trial options",
    ],
    close:
      "The goal is not to change treatment for its own sake. The goal is to understand whether the plan fits your situation.",
  },
  twoDoctors: {
    lead: "Different recommendations can feel confusing. Instead of asking “Which doctor is right?”, compare the reasoning behind each plan.",
    items: [
      "Expected benefit for your subtype and stage",
      "Risks and side effects",
      "Impact on surgery options and daily life",
      "What information each recommendation assumes",
    ],
    close:
      "Write the differences down side by side before choosing.",
  },
  pathology: {
    lead: "In some situations, another review of pathology, imaging, or subtype reporting may add confidence — especially when results are borderline or recommendations conflict.",
    ask: [
      "Was my diagnosis and subtype reporting confirmed?",
      "Are there uncertain findings that another specialist should re-review?",
      "Would slide or imaging review change the surgery or sequencing discussion?",
    ],
  },
  focus: {
    lead: "A useful second opinion has a named question. Common breast focuses include:",
    items: [
      "Lumpectomy vs mastectomy candidacy",
      "Neoadjuvant vs adjuvant sequencing",
      "Whether genetics should change the operation",
      "Whether systemic options fit the subtype",
    ],
    close:
      "Tell the reviewing team the one decision you need help with.",
  },
  howToGet: {
    lead: "Getting a breast cancer second opinion usually means: name the decision you want reviewed, gather records, ask about urgency, then book a focused consultation (in-person or remote) with a breast specialist or multidisciplinary team.",
    steps: [
      "Write one sentence: the decision you need help with",
      "Collect pathology (with ER/PR/HER2), imaging, and the current plan",
      "Ask your current team whether waiting for the review is safe",
      "Book the review and send records ahead when possible",
    ],
    close:
      "A clear question plus complete records beats “please look at everything.”",
  },
  records: {
    lead: "Bring the complete picture when you can:",
    items: [
      "Pathology reports (including receptors / HER2)",
      "Imaging reports and scans when available",
      "Operative or biopsy details",
      "Genetic counseling notes if done",
      "Current recommended plan and why",
      "Your one-sentence question for the review",
    ],
    close:
      "Incomplete records often produce incomplete opinions.",
  },
  cost: {
    lead: "Costs and coverage vary by clinic, visit type (in-person vs remote), and insurance. Use questions instead of guessing a price:",
    ask: [
      "Is this visit covered as a second opinion / consultation?",
      "What records or slide reviews add extra fees?",
      "Can a remote review answer my question, or do I need to travel?",
    ],
  },
  thisWeek: {
    lead: "If you are arranging a second opinion, focus on:",
    steps: [
      "Name the decision you want reviewed (surgery, sequencing, or systemic plan)",
      "Gather pathology, imaging, and the current recommendation in writing",
      "Ask your current team how urgent the calendar is",
    ],
    close:
      "A focused packet beats a vague request for “another look.”",
  },
  mistakes: {
    lead: "Common second-opinion mistakes include:",
    items: [
      {
        mistake: "Waiting until after irreversible surgery to ask for review",
        why: "Many breast second opinions are most useful before locking the local plan.",
      },
      {
        mistake: "Sending incomplete records",
        why: "Without subtype, imaging, and the current plan, the review cannot be specific.",
      },
      {
        mistake: "Seeking only agreement, not a clear question",
        why: "Ask what would change — confirmation is useful, but the question must be named.",
      },
    ],
  },
} as const;

export const BREAST_SECOND_OPINION_GLOSS =
  "A breast cancer second opinion is most useful before major surgery or systemic therapy when the plan feels irreversible, recommendations conflict, or key information (subtype, genetics, sequencing) still needs confidence — not as a sign that something is wrong.";

export const BREAST_SECOND_OPINION_DIRECT_ANSWER = `A second opinion is especially useful before breast cancer surgery or major systemic therapy when the choice feels irreversible, recommendations conflict, sequencing is unclear, or genetics/reconstruction could change the operation.

It may confirm the current plan, suggest missing information, or discuss another reasonable approach. Confirmation is also a useful outcome.

Ask: “What decision do I want reviewed — and is there time for a focused second opinion before the next irreversible step?”`;
