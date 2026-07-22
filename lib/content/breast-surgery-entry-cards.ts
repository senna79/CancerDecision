/** Hang-card bodies for Breast Surgery Decision Path (Entry Template v2) */

export const BREAST_SURGERY_ENTRY_CARDS = {
  whatIs: {
    lead: "Lumpectomy (breast-conserving surgery) removes the cancer and a margin of nearby tissue, usually followed by radiation. Mastectomy removes most or all of the breast tissue on that side.",
    close:
      "Both can be medically appropriate for many early breast cancers when you are a candidate for either. The choice is often about fit — not about picking the “stronger” operation.",
  },
  similarControl: {
    lead: "For many people who are good candidates for breast conservation, lumpectomy plus radiation and mastectomy can offer similar cancer control. “Safer” often means fit for your situation — not automatically choosing the bigger operation.",
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
  prosCons: {
    lead: "When both operations are medically reasonable, people often weigh trade-offs like these — ask which apply to you:",
    items: [
      "Lumpectomy — usually keeps more breast shape; typically followed by radiation; may need another surgery if margins are not clear",
      "Mastectomy — removes more breast tissue; radiation is situational afterward; reconstruction may be immediate, delayed, or not chosen",
      "Recovery, body image, genetics, and willingness/ability to complete radiation often tip the choice when cancer control looks similar",
    ],
    close:
      "Pros and cons lists online are starting points. Ask which trade-offs matter for your pathology, body, and life — not which operation “wins” on the internet.",
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
      "Ask early if genetics might change the operation — then open the genetics decision guide for the full timing path.",
  },
  subtype: {
    lead: "Tumor subtype (ER/PR/HER2, including triple-negative) mainly shapes systemic therapy and sequencing. It does not automatically pick lumpectomy or mastectomy the way genetics sometimes can.",
    ask: [
      "For my subtype, are both lumpectomy and mastectomy still reasonable?",
      "Would HER2-positive or triple-negative disease change surgery — or mainly medicines and timing?",
      "Should systemic therapy before surgery change what operation is realistic later?",
    ],
    close:
      "Ask what subtype changes for you: medicines and order first — then whether the surgery options themselves move.",
  },
  reconstruction: {
    lead: "Reconstruction timing (immediate vs delayed) and whether to reconstruct at all are part of many mastectomy conversations — and sometimes affect surgical planning.",
    ask: [
      "If I choose mastectomy, what reconstruction options exist?",
      "Would reconstruction happen at the same time or later?",
      "How would reconstruction affect recovery and systemic therapy timing?",
    ],
    close:
      "Ask what fits your cancer timeline and preferences — then open the reconstruction decision guide for the full timing path.",
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
  doubleRecovery: {
    lead: "Recovery after double (bilateral) mastectomy is often longer and more physically demanding than one-sided surgery — especially with immediate reconstruction, drains, and restrictions on lifting or driving.",
    ask: [
      "What does the first 2–4 weeks usually look like after bilateral mastectomy?",
      "How does reconstruction change recovery and help needed at home?",
      "When can I usually return to work or caregiving?",
    ],
    close:
      "Plan support early. Bilateral recovery is a logistics decision as well as a surgical one.",
  },
  lymphedema: {
    lead: "Lymphedema is swelling that can develop in the arm or chest area after lymph-node surgery or radiation. Risk varies by how many nodes are removed, radiation fields, infection, and body factors — it is not inevitable for everyone.",
    ask: [
      "What is my lymphedema risk with the axillary surgery planned?",
      "What early signs should I watch for?",
      "What prevention or early-treatment steps do you recommend?",
    ],
    close:
      "Ask before surgery when possible — early recognition is easier than waiting for severe swelling.",
  },
  recovery: {
    lead: "Recovery often differs by path. Lumpectomy recovery is frequently shorter in the first weeks, but radiation adds its own course afterward. Mastectomy recovery is often longer — especially with reconstruction or axillary surgery — and radiation may or may not follow.",
    ask: [
      "What does recovery look like for lumpectomy vs mastectomy in the first weeks?",
      "When could I return to work or caregiving after each option?",
      "How would reconstruction or radiation change those timelines?",
    ],
    close:
      "Compare recovery as part of the full local package — not only the operating-room day.",
  },
  radiation: {
    lead: "Most people who choose lumpectomy need radiation afterward. After mastectomy, radiation depends on stage, nodes, and other factors.",
    ask: [
      "If I choose lumpectomy, what would radiation involve — schedule and side effects?",
      "If I choose mastectomy, am I likely to need radiation anyway?",
      "Would radiation change reconstruction timing?",
    ],
    close:
      "Ask for expected / maybe / unlikely answers by surgery path — then open the radiation decision guide for the full path.",
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
