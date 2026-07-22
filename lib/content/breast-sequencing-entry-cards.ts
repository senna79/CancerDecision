/** Hang-card bodies for Breast Treatment Sequencing Decision Path (Entry Template v2) */

export const BREAST_SEQUENCING_ENTRY_CARDS = {
  whatIs: {
    lead: "Sequencing means deciding whether systemic therapy (medicines such as chemotherapy, HER2-targeted therapy, endocrine therapy, or immunotherapy in selected cases) should start before surgery or after surgery.",
    close:
      "Doctors often call treatment before surgery “neoadjuvant,” and treatment after surgery “adjuvant.” The labels matter less than the goals of each sequence.",
  },
  whyMatters: {
    lead: "Timing is not a minor calendar detail. The sequence can change:",
    items: [
      "How much information you have before an irreversible surgery choice",
      "Whether the team can see how the cancer responds to medicines",
      "What surgery options may be realistic later",
      "How long treatment stretches across months of life",
    ],
    close:
      "That is why sequencing sits on the breast cancer decision spine after subtype — and before locking the local plan.",
  },
  notStronger: {
    lead: "This decision is not “which approach is stronger in the abstract.” Both sequences can be medically appropriate for different people.",
    close:
      "The useful question is which sequence fits your subtype, stage/extent, and goals — not which one sounds more aggressive online.",
  },
  subtypeFirst: {
    lead: "Subtype (ER/PR, HER2, and related biology) often shapes whether starting medicines before surgery is even on the table — and which medicines would be discussed.",
    close:
      "If subtype results are incomplete, ask whether sequencing should wait until the biology picture is clear.",
  },
  beforeSurgery: {
    lead: "Starting systemic therapy before surgery (neoadjuvant) may be discussed when teams want to:",
    items: [
      "Shrink the cancer before an operation",
      "See how the cancer responds to medicines",
      "Enable or refine surgery options in some situations",
      "Begin systemic therapy earlier for higher-risk disease",
    ],
    close:
      "Ask what your team is trying to achieve with treatment before surgery — not only which drugs are named.",
  },
  afterSurgery: {
    lead: "Surgery first, then systemic therapy afterward (adjuvant), may be discussed when:",
    items: [
      "Upfront surgery is clearly appropriate and preferred",
      "Full pathology after surgery will refine later systemic choices",
      "Neoadjuvant therapy is not expected to change the next useful step",
    ],
    close:
      "Surgery first does not mean “no medicines.” Many people still need systemic therapy after the operation.",
  },
  whatChanges: {
    lead: "Ask what would change the recommendation between before-surgery and after-surgery sequencing. Common factors include:",
    items: [
      "Subtype and stage / nodal status",
      "Tumor size and surgical goals",
      "Whether response assessment would change later decisions",
      "Pending genetics that could change the operation itself",
      "Urgency, symptoms, and practical fit",
    ],
    close:
      "A clear “what would change this?” answer is often more useful than a long drug list.",
  },
  response: {
    lead: "If treatment starts before surgery, ask how the team will know whether it is working — and what happens if response is less than hoped.",
    ask: [
      "How will we monitor response during neoadjuvant therapy?",
      "What would change the plan if response is limited?",
      "When do we decide the surgery date?",
    ],
    close:
      "Response assessment is one reason some people choose medicines first — ask whether that reason applies to you.",
  },
  surgeryLink: {
    lead: "Sequencing and surgery choice are connected, but they are not the same decision. Timing asks when systemic therapy starts; surgery asks which operation fits.",
    close:
      "If both are open, clarify sequence first enough to know whether surgery options may change — then compare lumpectomy vs mastectomy with that context.",
  },
  timeline: {
    lead: "Ask for a plain-language timeline: what happens in the next weeks, how long neoadjuvant therapy would last if chosen, and when surgery would be planned.",
    ask: [
      "What is the expected timeline for each sequence?",
      "What appointments and tests sit between now and surgery?",
      "How flexible is the calendar if key results are still pending?",
    ],
  },
  pendingInfo: {
    lead: "Before locking sequencing, confirm whether important information is still pending:",
    items: [
      "Subtype / receptor / HER2 results",
      "Staging imaging",
      "Genetic counseling if it could change the operation",
      "Any second-opinion review you still want",
    ],
    close:
      "Waiting for information that would change the sequence is not automatically an unsafe delay — ask how urgent your situation is.",
  },
  lifeFit: {
    lead: "Sequencing also affects daily life — work leave, childcare, fertility timing, travel to infusions, and recovery after surgery.",
    ask: [
      "How would each sequence affect work and daily life?",
      "Are fertility or life-stage issues part of this timing decision?",
      "What support would I need during medicines-first vs surgery-first?",
    ],
  },
  thisWeek: {
    lead: "If sequencing is the decision in front of you, focus on:",
    steps: [
      "Confirm subtype and staging information are complete enough",
      "Ask which sequence is recommended for you — and what would change it",
      "Write down timeline, goals, and open questions before the next visit",
    ],
    close:
      "Clarity on sequence beats comparing every drug name before the fork is clear.",
  },
  mistakes: {
    lead: "Common sequencing mistakes include:",
    items: [
      {
        mistake: "Treating “before vs after” as a strength contest",
        why: "The better sequence is the one that fits goals and biology — not the one that sounds tougher.",
      },
      {
        mistake: "Locking surgery before subtype or sequencing is clear",
        why: "Biology and timing often change what the operation means.",
      },
      {
        mistake: "Assuming surgery first means no systemic therapy",
        why: "Many people still need medicines after surgery.",
      },
    ],
  },
} as const;

export const BREAST_SEQUENCING_GLOSS =
  "Breast cancer treatment sequencing asks whether systemic therapy should start before surgery (neoadjuvant) or after surgery (adjuvant) — based on subtype, stage/extent, and goals, not on which path sounds stronger.";

export const BREAST_SEQUENCING_DIRECT_ANSWER = `Some people start systemic therapy before breast cancer surgery (neoadjuvant); others have surgery first, then medicines afterward (adjuvant). The better sequence depends on subtype, stage/extent, and what your team is trying to learn or achieve — not which approach sounds “stronger.”

Ask: “For my subtype and stage, should treatment start before or after surgery — and what would change that recommendation?”

If subtype results are still pending, ask whether that information should arrive before locking the sequence.`;
