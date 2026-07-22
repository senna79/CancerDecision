/** Hang-card bodies for Breast Genetics Decision Path (Entry Template v2) */

export const BREAST_GENETICS_ENTRY_CARDS = {
  whatIs: {
    lead: "Genetic counseling for breast cancer usually means talking with a genetics professional about inherited (germline) risk — and whether testing such as BRCA1/BRCA2 (and related genes) is appropriate for you.",
    close:
      "This is about inherited risk in you (and sometimes family). It is not the same as tumor subtype testing (ER/PR/HER2).",
  },
  whyBeforeSurgery: {
    lead: "Results can change the operation itself — for example whether mastectomy, surgery on the other breast, or risk-reducing options enter the discussion.",
    close:
      "If a result could change an irreversible surgery choice, ask whether counseling should happen before you lock a date.",
  },
  whoMayNeed: {
    lead: "Counseling is more often discussed when risk factors are present — but criteria evolve, and your team may still recommend it without a dramatic family history.",
    items: [
      "Personal or family history that raises hereditary risk questions",
      "Younger age at diagnosis (criteria vary — ask for your situation)",
      "Triple-negative disease in some guidelines/contexts",
      "Known familial mutation, or a relative with BRCA-class results",
      "Considering surgery on the other breast for risk reduction",
    ],
    close:
      "Ask: “Do I meet criteria for genetic counseling before surgery — and why or why not?”",
  },
  vsSubtype: {
    lead: "Tumor subtype describes the cancer’s biology. Germline genetics describes inherited risk that can affect surgery and family implications.",
    close:
      "You may need both conversations. Do not treat a pathology receptor result as a BRCA answer.",
  },
  positiveChange: {
    lead: "A pathogenic (disease-causing) result in a high-risk gene may change what surgery options are discussed — including mastectomy and whether the other breast is part of the plan.",
    items: [
      "Local surgery recommendations may shift toward more extensive risk-reducing options for some people",
      "Reconstruction timing may be discussed alongside a larger operation",
      "Systemic therapy and screening plans for you (and relatives) may also change later",
    ],
    close:
      "Ask what a positive result would change for your operation — in plain language — before assuming one path.",
  },
  negativeOrVus: {
    lead: "A negative result does not mean “zero risk,” and a VUS (variant of uncertain significance) is not the same as a positive result.",
    ask: [
      "If testing is negative, what does that mean for my surgery choice?",
      "If we get a VUS, will we treat it as actionable for surgery?",
      "Would surgery still wait — or proceed — while results are pending?",
    ],
    close:
      "Do not redesign surgery around a VUS unless your genetics and surgical teams agree it should change the plan.",
  },
  waitOrNot: {
    lead: "Waiting for genetics can be appropriate when results would change the operation. Waiting is not automatic for everyone — urgency depends on your cancer situation.",
    ask: [
      "Would a genetic result change lumpectomy vs mastectomy for me?",
      "Is it safe to wait for counseling/results before locking surgery?",
      "What can proceed in parallel while genetics is underway?",
    ],
    close:
      "Ask for a clear timeline: what waits, what can start, and what would make waiting unsafe.",
  },
  otherBreast: {
    lead: "Surgery on the other breast (contralateral risk-reducing mastectomy) is a separate decision. Genetics may raise it — it is not automatic for every positive result, and it is not required for every person with breast cancer.",
    close:
      "Ask whether the other breast is recommended, optional, or something that can wait.",
  },
  family: {
    lead: "Genetic counseling often includes what results could mean for relatives — and how (or whether) family members might pursue their own counseling.",
    close:
      "You do not have to become the family educator overnight. Ask what the counseling team recommends sharing, and when.",
  },
  timeline: {
    lead: "Counseling and testing can take days to weeks depending on access, prior records, and lab turnaround.",
    ask: [
      "How soon can I see genetic counseling?",
      "How long do results usually take?",
      "If results are delayed, what surgery plan is still safe?",
    ],
  },
  process: {
    lead: "A typical path: referral → counseling discussion → decide whether to test → sample → results visit → update the surgical plan if needed.",
    items: [
      "Bring family-history details you know (even if incomplete)",
      "Bring pathology and imaging summaries",
      "Ask who will explain results to your surgical team",
    ],
    close:
      "Counseling is a conversation first — testing is not automatic at every visit.",
  },
  pending: {
    lead: "Before locking surgery, confirm whether genetics is still open:",
    items: [
      "Whether counseling is recommended for you",
      "Whether a result would change the operation",
      "Whether waiting is safe in your cancer timeline",
      "What happens if results arrive after a provisional surgery plan",
    ],
    close:
      "Clear answers here prevent locking a date that genetics would reverse.",
  },
  thisWeek: {
    lead: "If genetics may affect surgery, focus on:",
    steps: [
      "Ask whether you should have genetic counseling before a final surgery choice",
      "Ask whether a positive result would change lumpectomy vs mastectomy (or the other breast)",
      "Get a referral timeline — and what can proceed in parallel",
    ],
    close:
      "A short “wait / don’t wait” answer from your team beats researching gene lists alone.",
  },
  mistakes: {
    lead: "Common genetics-before-surgery mistakes include:",
    items: [
      {
        mistake: "Treating tumor subtype as germline genetics",
        why: "ER/PR/HER2 answers are not BRCA answers — ask for both when relevant.",
      },
      {
        mistake: "Locking mastectomy (or bilateral surgery) before results that could change the plan",
        why: "If genetics would reshape the operation, clarify timing first.",
      },
      {
        mistake: "Assuming every positive result means the same surgery",
        why: "Gene, personal history, and preferences still shape the conversation.",
      },
      {
        mistake: "Treating a VUS like a pathogenic mutation",
        why: "Uncertain variants usually should not drive irreversible surgery alone.",
      },
    ],
  },
} as const;

export const BREAST_GENETICS_GLOSS =
  "Genetic counseling asks whether inherited risk testing (for example BRCA-class) should happen before surgery — and how results may change the operation. It is not the same as tumor subtype (ER/PR/HER2).";

export const BREAST_GENETICS_DIRECT_ANSWER = `Some people benefit from genetic counseling before a final breast cancer surgery choice — especially when results could change lumpectomy vs mastectomy, or whether surgery on the other breast enters the discussion.

Germline genetics (inherited risk) is not the same as tumor subtype. Ask: “Do I need counseling before surgery — would a result change the operation — and is it safe to wait?”

If counseling is recommended, get a timeline and clarify what can proceed in parallel so you do not lock an irreversible plan too early.`;
