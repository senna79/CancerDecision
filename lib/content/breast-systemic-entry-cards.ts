/** Hang-card bodies for Breast Systemic Therapy Decision Path (Entry Template v2) */

export const BREAST_SYSTEMIC_ENTRY_CARDS = {
  whatIs: {
    lead: "Systemic therapy means medicines that travel through the body — such as endocrine (hormone) therapy, chemotherapy, HER2-targeted therapy, or immunotherapy in selected cases — rather than only treating the breast surgically.",
    close:
      "Which families belong in the discussion usually depends first on subtype (HR+ / HER2+ / triple-negative), then on stage, goals, and sequencing.",
  },
  subtypeForks: {
    lead: "Breast cancer is not one systemic conversation. Subtype forks the options:",
    items: [
      "HR+ (hormone receptor–positive) — endocrine therapy is often central; chemo is situational",
      "HER2+ — HER2-targeted therapy is usually part of the plan, often with chemo",
      "Triple-negative (TNBC) — chemo leads for many people; immunotherapy may apply in selected cases",
    ],
    close:
      "Start with your subtype label in plain language before comparing drug names online.",
  },
  notDrugMenu: {
    lead: "A useful systemic decision is not “pick the strongest drug from a menu.” It is “which option families fit my subtype, stage, and goals — and what trade-offs am I accepting?”",
    close:
      "Ask what each recommendation is trying to achieve, not only what it is called.",
  },
  sequencing: {
    lead: "Systemic therapy may start before surgery (neoadjuvant) or after surgery (adjuvant). Timing can change what you learn and when surgery happens.",
    close:
      "If before-vs-after surgery timing is still open, clarify sequencing alongside which systemic families are being discussed.",
  },
  hrPositive: {
    lead: "If your cancer is hormone receptor–positive (ER and/or PR positive), discussions often center on endocrine therapy — sometimes with ovarian suppression, CDK4/6 inhibitors, or other agents depending on stage and risk.",
    items: [
      "Endocrine therapy is often a long-duration backbone",
      "Chemotherapy may or may not add enough benefit — ask why it is or is not recommended",
      "Genomic assays (Oncotype-class) may refine chemo vs endocrine discussions for some early cancers",
      "HER2 status still matters — HR+/HER2+ is a different fork than HR+/HER2−",
    ],
    close:
      "Ask: “For my HR+ cancer, what is the goal of each medicine — and would a genomic assay change chemo discussions?”",
  },
  her2Positive: {
    lead: "If your cancer is HER2-positive, HER2-targeted therapy is usually part of the systemic plan, often combined with chemotherapy, and sometimes sequenced before or after surgery.",
    items: [
      "HER2-targeted therapy is not the same as generic “chemo”",
      "Duration, combinations, and monitoring differ by stage and response",
      "Surgery timing may interact with neoadjuvant HER2-directed therapy",
      "HR+/HER2+ plans may also include endocrine therapy later",
    ],
    close:
      "Ask: “What is the HER2-targeted part trying to achieve — and how will we know if the plan is working?”",
  },
  tnbc: {
    lead: "If your cancer is triple-negative (ER, PR, and HER2 negative), chemotherapy often leads the systemic discussion. Immunotherapy may be added in selected situations — ask whether it applies to you.",
    items: [
      "Chemo regimens and sequencing (before vs after surgery) are common decision points",
      "Immunotherapy is not automatic for every TNBC diagnosis",
      "Clinical trials may be especially relevant in some settings",
      "Genetics (germline) can matter for some later options — ask if counseling is needed",
    ],
    close:
      "Ask: “For my TNBC, which systemic approach is recommended — and is immunotherapy or a trial part of the discussion?”",
  },
  goals: {
    lead: "Before comparing drug names, clarify the goal of systemic therapy in your sequence:",
    items: [
      "Cure-intent / reduce recurrence risk after local treatment",
      "Shrink disease before surgery and assess response",
      "Control disease when cure is not the framing",
      "Balance benefit with side effects and daily life",
    ],
    close:
      "The same medicine family can serve different goals depending on stage and timing.",
  },
  genomic: {
    lead: "For some early HR+ / HER2− cancers, genomic assays help estimate whether chemotherapy adds enough benefit beyond endocrine therapy.",
    ask: [
      "Is a genomic assay relevant for my situation?",
      "Would the result change whether we discuss chemotherapy?",
      "When would it be ordered — before or after surgery?",
    ],
    close:
      "Not everyone needs this assay. Ask whether it would change your decision.",
  },
  sideEffects: {
    lead: "Side-effect profiles differ by family — endocrine symptoms, chemo effects, HER2-therapy heart monitoring, immunotherapy immune-related effects.",
    ask: [
      "What side effects are most common for the plan you recommend?",
      "Which effects should make me call urgently?",
      "How will we monitor safety during treatment?",
    ],
  },
  timeline: {
    lead: "Ask for a plain-language calendar: how long therapy lasts, visit frequency, and how it fits around surgery if relevant.",
    ask: [
      "How long would each part of the plan last?",
      "What does a typical treatment week look like?",
      "How does this interact with work, fertility timing, or caregiving?",
    ],
  },
  fertility: {
    lead: "Systemic therapy can affect fertility and menopause timing. If this matters to you, raise it before locking the plan.",
    ask: [
      "Could this plan affect fertility or menopause?",
      "Should I talk with a fertility specialist before starting?",
      "Are there timing options that protect future family-building goals?",
    ],
  },
  thisWeek: {
    lead: "If systemic options are the decision in front of you, focus on:",
    steps: [
      "Confirm your subtype in plain language (HR+ / HER2+ / TNBC — and combinations)",
      "Ask which option families fit that subtype — and the goal of each",
      "Clarify sequencing (before vs after surgery) and what would change the recommendation",
    ],
    close:
      "Subtype + goal + sequence beats memorizing every drug brand name.",
  },
  mistakes: {
    lead: "Common systemic-therapy mistakes include:",
    items: [
      {
        mistake: "Comparing drug names without knowing your subtype fork",
        why: "HR+, HER2+, and TNBC open different option families.",
      },
      {
        mistake: "Assuming “more chemo” is always stronger care",
        why: "Fit and goals matter more than maximum intensity.",
      },
      {
        mistake: "Ignoring sequencing and fertility until after the plan is locked",
        why: "Timing questions are part of the systemic decision, not an afterthought.",
      },
    ],
  },
} as const;

export const BREAST_SYSTEMIC_GLOSS =
  "Breast cancer systemic therapy choices fork by subtype (HR+ / HER2+ / TNBC): endocrine, chemo, HER2-targeted, and immunotherapy in selected cases — compared by goals, sequencing, and trade-offs, not as a flat drug menu.";

export const BREAST_SYSTEMIC_DIRECT_ANSWER = `Systemic therapy options for breast cancer depend first on subtype — hormone receptor–positive, HER2-positive, or triple-negative — then on stage, goals, and whether medicines start before or after surgery.

Compare option families and trade-offs for your subtype. Do not start from a ranked list of drug names.

Ask: “For my subtype, which systemic approaches fit — what is each trying to achieve — and what would change the recommendation?”`;
