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
  tnbcGenetics: {
    lead: "Triple-negative breast cancer often raises genetic counseling — many teams discuss germline testing because hereditary findings can change surgery planning and family risk conversations. It is common to ask, not automatic that every TNBC person has a BRCA mutation.",
    ask: [
      "Do I meet criteria for genetic counseling because of TNBC?",
      "Would a result change lumpectomy vs mastectomy for me?",
      "Should counseling happen before I lock surgery?",
    ],
    close:
      "Ask whether TNBC alone tips counseling for you — and what a result would change.",
  },
  brcaShows: {
    lead: "A BRCA test (often as part of a broader panel) looks for inherited gene changes that can raise lifetime cancer risk and, when positive, may change surgery and family counseling. It does not report tumor ER/PR/HER2 subtype.",
    ask: [
      "What would a positive BRCA (or related gene) result change for my surgery?",
      "What does a negative result mean — and what does it not mean?",
      "Are we testing BRCA only, or a multi-gene panel?",
    ],
    close:
      "Ask what the test can and cannot answer before treating it like a tumor-biology report.",
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
  onlyBrca: {
    lead: "BRCA1 and BRCA2 are the genes people hear about most — but they are not the only ones that can matter. Many counseling conversations use a multi-gene panel that may include other high- or moderate-risk genes.",
    ask: [
      "Are we testing only BRCA, or a broader panel — and why for my situation?",
      "Which results would change surgery vs only change screening or family counseling?",
      "If a non-BRCA gene is found, how would that affect my operation?",
    ],
    close:
      "You do not need to memorize gene names. Ask which genes are on the panel and which results would change the surgery decision.",
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
  withoutBrca: {
    lead: "Yes. Most people diagnosed with breast cancer do not have a known BRCA1 or BRCA2 mutation. Breast cancer can occur without those genes — and a negative BRCA result does not mean cancer was “impossible” or that family history never matters.",
    ask: [
      "If BRCA testing is negative, what does that mean for my surgery and family counseling?",
      "Should we use a broader gene panel for my situation?",
      "Does my family history still change screening recommendations for relatives?",
    ],
    close:
      "BRCA is important when positive — it is not the only explanation for breast cancer.",
  },
  family: {
    lead: "A parent (or other close relative) with breast cancer can raise questions about inherited risk — but it does not by itself mean you will get the same cancer, or that you must have a BRCA mutation.",
    ask: [
      "Does my family history meet criteria for genetic counseling?",
      "What would a positive or negative result change for me and for relatives?",
      "What screening is recommended for family members either way?",
    ],
    close:
      "Ask for a counseling referral when history is concerning — do not self-calculate lifetime risk from one relative’s story.",
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

export const BREAST_GENETICS_DIRECT_ANSWER = `Some people should talk about genetic testing before a final breast cancer surgery choice. Genetic counseling helps decide whether inherited-risk testing (for example BRCA-class) is useful — and how a result could change lumpectomy vs mastectomy, or whether surgery on the other breast enters the discussion.

Germline genetics (inherited risk) is not the same as tumor subtype. Ask: “Do I need counseling before surgery — would a result change the operation — and is it safe to wait?”

If counseling is recommended, get a timeline and clarify what can proceed in parallel so you do not lock an irreversible plan too early.`;
