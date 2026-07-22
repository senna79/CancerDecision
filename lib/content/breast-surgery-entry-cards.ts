/** Hang-card bodies for Breast Surgery Decision Path (Entry Template v2) */

export const BREAST_SURGERY_ENTRY_CARDS = {
  whatIs: {
    lead: "Lumpectomy (breast-conserving surgery) removes the cancer and a margin of nearby tissue, usually followed by radiation. Mastectomy removes most or all of the breast tissue on that side.",
    close:
      "Both can be medically appropriate for many early breast cancers when you are a candidate for either. The choice is often about fit — not about picking the “stronger” operation.",
  },
  similarControl: {
    lead: "For many people who are good candidates for breast conservation, lumpectomy plus radiation and mastectomy can offer similar cancer control.",
    close:
      "Ask whether both options are oncologically reasonable for you — before comparing recovery, radiation, reconstruction, and personal priorities.",
  },
  notOnlyCancer: {
    lead: "Even when cancer control looks similar, the operations can feel very different. People weigh body image, radiation willingness, reconstruction timing, genetics, and how they want to live afterward.",
    close:
      "A good surgery decision matches medical fit and personal priorities — not only a survival headline.",
  },
  sequencing: {
    lead: "Sometimes systemic therapy starts before surgery. That sequence can change timing — and occasionally what surgery options are realistic later.",
    close:
      "If before-vs-after surgery timing is still open, clarify sequencing enough to know whether surgery options may change.",
  },
  lumpectomy: {
    lead: "Breast-conserving surgery may fit when the cancer can be removed with a good cosmetic result and radiation is part of the plan (for most people).",
    items: [
      "Usually keeps more of the breast shape",
      "Typically followed by radiation therapy",
      "May need additional surgery if margins are not clear",
      "Recovery is often shorter than mastectomy — but radiation adds its own course",
    ],
    close:
      "Ask: “Am I a candidate for lumpectomy — and what would radiation involve for me?”",
  },
  mastectomy: {
    lead: "Mastectomy may be discussed when conservation is not a good fit, when genetics or personal goals point that way, or when someone prefers to avoid radiation that would accompany lumpectomy.",
    items: [
      "Removes more breast tissue on the operated side",
      "Radiation is not always required afterward — ask for your situation",
      "Reconstruction may be immediate, delayed, or not chosen",
      "Some people consider surgery on the other breast for risk reduction — that is a separate decision",
    ],
    close:
      "Ask what mastectomy would achieve for you that conservation would not — in plain language.",
  },
  genetics: {
    lead: "Germline genetic counseling (for example BRCA-related testing) is different from tumor subtype. Results can change whether mastectomy — or surgery on the other breast — enters the discussion.",
    ask: [
      "Do I need genetic counseling before a final surgery choice?",
      "How would a positive result change lumpectomy vs mastectomy?",
      "Should we wait for genetics if the result could change the operation?",
    ],
    close:
      "Until a dedicated genetics guide ships, treat this as a hang-card question — ask early if it might change the operation.",
  },
  reconstruction: {
    lead: "Reconstruction timing (immediate vs delayed) and whether to reconstruct at all are part of many mastectomy conversations — and sometimes affect surgical planning.",
    ask: [
      "If I choose mastectomy, what reconstruction options exist?",
      "Would reconstruction happen at the same time or later?",
      "How would reconstruction affect recovery and systemic therapy timing?",
    ],
    close:
      "Reconstruction is hang-card context here — not a separate Entry yet. Ask what fits your cancer timeline and preferences.",
  },
  recurrence: {
    lead: "People often fear that keeping the breast means higher risk. For appropriate candidates, local recurrence risk differences are part of a nuanced conversation — not a reason to assume mastectomy is always safer.",
    ask: [
      "For my situation, how do local recurrence risks compare?",
      "What surveillance would follow each option?",
      "What would we do if cancer came back in the breast or chest wall?",
    ],
    close:
      "Ask for numbers and follow-up plans in plain language — not only reassurance or fear.",
  },
  bilateral: {
    lead: "Surgery on the other breast (contralateral / risk-reducing mastectomy) is not automatic. It may be discussed for genetic risk, strong personal preference, or symmetry goals — and it adds recovery and decision complexity.",
    close:
      "Ask whether the other breast is a medical recommendation, an option, or something that can wait.",
  },
  recovery: {
    lead: "Recovery differs by operation, reconstruction, and whether lymph nodes are also addressed.",
    ask: [
      "What does recovery look like for each option in the first weeks?",
      "When could I return to work or caregiving?",
      "What restrictions matter most after surgery?",
    ],
  },
  radiation: {
    lead: "Most people who choose lumpectomy need radiation afterward. After mastectomy, radiation depends on stage, nodes, and other factors.",
    ask: [
      "If I choose lumpectomy, what would radiation involve — schedule and side effects?",
      "If I choose mastectomy, am I likely to need radiation anyway?",
      "Would radiation change reconstruction timing?",
    ],
  },
  pending: {
    lead: "Before locking surgery, confirm whether key information is still pending:",
    items: [
      "Subtype / biology results that affect sequencing",
      "Whether treatment should start before or after surgery",
      "Genetic counseling if it could change the operation",
      "Imaging completeness and candidacy for conservation",
    ],
    close:
      "Waiting for information that would change the operation is not automatically an unsafe delay — ask how urgent your situation is.",
  },
  thisWeek: {
    lead: "If surgery choice is the decision in front of you, focus on:",
    steps: [
      "Ask whether both lumpectomy and mastectomy are medically reasonable for you",
      "Clarify genetics, radiation, and reconstruction questions that could change the choice",
      "Write down priorities (body image, radiation willingness, recovery, risk reduction)",
    ],
    close:
      "A short priority list beats researching every surgical technique online.",
  },
  mistakes: {
    lead: "Common surgery-choice mistakes include:",
    items: [
      {
        mistake: "Assuming mastectomy is always the safer choice",
        why: "For many candidates, conservation plus radiation can offer similar cancer control — ask for your situation.",
      },
      {
        mistake: "Choosing before genetics or sequencing are clear",
        why: "Either can change what operation makes sense.",
      },
      {
        mistake: "Treating reconstruction as an afterthought only",
        why: "Timing can affect planning — even if you are unsure about reconstructing.",
      },
    ],
  },
} as const;

export const BREAST_SURGERY_GLOSS =
  "Lumpectomy (usually with radiation) and mastectomy can both be reasonable for many early breast cancers. Choose by medical fit plus personal priorities — genetics, radiation, reconstruction, and recurrence concerns — not by which operation sounds stronger.";

export const BREAST_SURGERY_DIRECT_ANSWER = `For many early breast cancers, lumpectomy plus radiation and mastectomy can offer similar cancer control when you are a candidate for either. The decision often hinges on tumor extent, genetics, radiation willingness, reconstruction preferences, and personal priorities — not on picking the “stronger” surgery.

Ask: “Am I a candidate for both options — and what would change the recommendation either way?”

If genetic counseling or treatment sequencing could change the operation, ask whether those should be clear before you lock a surgery date.`;
