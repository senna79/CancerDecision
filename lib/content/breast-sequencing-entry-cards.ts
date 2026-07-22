/** Hang-card bodies for Breast Treatment Sequencing Decision Path (Entry Template v2) */

export const BREAST_SEQUENCING_ENTRY_CARDS = {
  whatIs: {
    lead: "Neoadjuvant chemotherapy (or neoadjuvant systemic therapy) means starting medicines — often chemotherapy, and sometimes other agents by subtype — before surgery. The other common path is adjuvant therapy after surgery. Sequencing is deciding which order fits your goals.",
    close:
      "The labels matter less than what the sequence is trying to achieve: shrink, assess response, refine surgery, or treat after pathology is complete.",
  },
  chemoOrRadiation: {
    lead: "After surgery, chemo and radiation are often both in the plan for some people — but they are usually sequenced, not chosen as “either/or.” Many plans complete systemic therapy first, then radiation; exact order depends on your pathology, reconstruction, and team practice.",
    ask: [
      "For my plan, does chemo come before radiation — or the reverse?",
      "What would change that order?",
      "How does reconstruction timing fit between them?",
    ],
    close:
      "Ask for a written sequence sketch. Online “chemo vs radiation first” debates rarely match one pathology report.",
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
    lead: "“Chemo before surgery” usually means starting systemic therapy (often chemotherapy, and sometimes other medicines by subtype) before the operation. Teams may discuss this when they want to:",
    items: [
      "Shrink the cancer before an operation",
      "See how the cancer responds to medicines",
      "Enable or refine surgery options in some situations",
      "Begin systemic therapy earlier for higher-risk disease",
    ],
    close:
      "Ask what your team is trying to achieve with treatment before surgery — not only which drugs are named.",
  },
  normalBefore: {
    lead: "Yes — for many people with certain subtypes, stages, or surgical goals, starting systemic therapy before surgery is a standard option, not an emergency-only path.",
    items: [
      "Especially common in some HER2+ and triple-negative plans, and selected higher-risk situations",
      "“Normal” still means “fits your biology and goals” — not that everyone should do it",
      "Surgery-first remains appropriate for many other people",
    ],
    close:
      "Ask whether medicines-first is recommended for you — and what it is trying to achieve — rather than whether it sounds unusual.",
  },
  nodesClear: {
    lead: "Clear lymph nodes are important information, but they do not automatically mean “no chemotherapy.” Doctors also weigh subtype, tumor size, genomic assays (when relevant), and overall recurrence risk.",
    ask: [
      "If my nodes are clear, what still drives a chemo recommendation — or against it?",
      "Would a genomic assay change whether we discuss chemo?",
      "Are we deciding adjuvant therapy after surgery, or neoadjuvant therapy before?",
    ],
    close:
      "Ask what factors besides node status tip your plan — node status is one piece, not the whole decision.",
  },
  gapAfterSurgery: {
    lead: "When chemotherapy is planned after surgery, it usually starts after enough healing — often measured in weeks, not the next day. Exact timing depends on wound healing, complications, pathology results, and the overall sequence.",
    ask: [
      "What is the usual window from surgery to starting chemo for me?",
      "What would delay the start — and is that delay still safe?",
      "Do we need final pathology before locking the chemo plan?",
    ],
    close:
      "Ask for your personal window. Online “average days” rarely replace a healing- and pathology-based plan.",
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

export const BREAST_SEQUENCING_DIRECT_ANSWER = `A core early decision is treatment order: whether medicines start before surgery, or surgery comes first and medicines follow. Doctors call this sequencing (neoadjuvant vs adjuvant).

Some people start systemic therapy before breast cancer surgery; others have surgery first, then medicines afterward. The better order depends on subtype, stage/extent, and what your team is trying to learn or achieve — not which approach sounds “stronger.”

Ask: “For my subtype and stage, should treatment start before or after surgery — and what would change that recommendation?”

If subtype results are still pending, ask whether that information should arrive before locking the treatment order.`;
