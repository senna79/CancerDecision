/** Hang-card bodies for Breast Subtype Testing Decision Path (Entry Template v2) */

export const BREAST_SUBTYPE_ENTRY_CARDS = {
  whatIs: {
    lead: "Subtype testing looks at features of the breast cancer itself — especially hormone receptors (ER/PR) and HER2 — that help doctors decide which systemic options and sequencing to discuss.",
    close:
      "It is tumor biology, not a personality label — and it is not the same as germline genetic counseling (BRCA-class testing).",
  },
  lookFor: {
    lead: "Common pieces of the subtype picture include:",
    items: [
      "Hormone receptors (ER and/or PR) — whether the cancer may respond to endocrine approaches",
      "HER2 status — whether HER2-targeted options belong in the conversation",
      "Triple-negative — when ER, PR, and HER2 are all negative; other options may lead",
      "Genomic assays (for some early HR+ cancers) — risk scores that may refine chemo vs endocrine discussions",
    ],
    close:
      "You do not need a textbook of every assay name. You need to know which results are back, which are pending, and whether they change the next decision.",
  },
  everyone: {
    lead: "Almost everyone with invasive breast cancer needs receptor and HER2 information. Exactly which additional tests (and when) depends on stage, the decision in front of you, and what is already known.",
    ask: "For my situation, which subtype results matter before we choose a plan — and which can wait?",
  },
  vsGenetics: {
    lead: "Tumor subtype (ER/PR/HER2) describes the cancer. Germline genetics (for example BRCA-related counseling) describes inherited risk and can change surgery choices for some people.",
    close:
      "Ask about both if either could change your next step — but do not treat them as the same test. Open the genetics guide when surgery timing depends on inherited-risk results.",
  },
  changeOptions: {
    lead: "Yes, often. Subtype results may change:",
    items: [
      "Which systemic families are discussed (endocrine, HER2-targeted, chemo, immuno in selected cases)",
      "Whether treatment should start before or after surgery",
      "How surgery and systemic therapy fit together",
    ],
    close:
      "A result does not automatically pick one drug. It shapes which options belong on the table.",
  },
  genomic: {
    lead: "For some early hormone receptor–positive cancers, doctors discuss genomic assays (Oncotype-class and similar) to refine whether chemotherapy adds enough benefit beyond endocrine therapy.",
    ask: [
      "Is a genomic assay relevant for my situation?",
      "Would the result change whether we discuss chemotherapy?",
      "When would it be ordered — before or after surgery?",
    ],
    close:
      "Not everyone needs this assay. Ask whether it would change your decision — not whether it exists in general.",
  },
  waiting: {
    lead: "Not every wait is the same. Doctors balance the need for subtype information with how urgent treatment is.",
    ask: [
      "How urgent is my situation?",
      "Which results would change the options we discuss?",
      "What can safely wait — and what should not?",
    ],
    close:
      "Waiting for key subtype information is not automatically an unsafe delay.",
  },
  incomplete: {
    lead: "If receptor or HER2 status is missing or unclear, ask what happens next:",
    items: [
      "Can existing tissue be re-tested?",
      "Is another sample needed?",
      "Should major sequencing or surgery wait until this is clear?",
    ],
    close:
      "Incomplete subtype information is a reason to pause and clarify — not to guess.",
  },
  howDone: {
    lead: "Subtype information usually comes from pathology testing on biopsy or surgical tissue. Additional assays may use the same sample when enough material remains.",
    items: [
      "Pathology report — ER, PR, HER2 (and related details)",
      "Sometimes repeat or reflex testing if results are borderline",
      "Genomic assays when clinically indicated — often after surgery for selected early cancers",
    ],
    close: "Ask what was ordered, what is back, and what is still pending.",
  },
  cost: {
    lead: "Costs vary by test, lab, and coverage. Use questions instead of guessing a price:",
    ask: [
      "Which subtype or genomic tests are ordered, and why for this decision?",
      "What is usually covered, and what might we pay out of pocket?",
      "If cost is a barrier, can existing tissue or a narrower test still answer the key question?",
    ],
  },
  mistakes: {
    lead: "Common early mistakes include:",
    items: [
      {
        mistake: "Locking surgery or systemic therapy before subtype is clear",
        why: "Subtype often changes sequencing and which options belong in the discussion.",
      },
      {
        mistake: "Confusing tumor subtype with germline genetics",
        why: "They answer different questions and can both matter before irreversible surgery.",
      },
      {
        mistake: "Assuming “triple-negative” or “HER2-positive” means there is only one path",
        why: "Subtype opens a family of options — your stage, goals, and health still shape the plan.",
      },
    ],
  },
  thisWeek: {
    lead: "If you are waiting on subtype results, focus on:",
    steps: [
      "Confirm which tests were ordered and when results are expected",
      "Ask whether pending results would change sequencing or surgery timing",
      "Keep copies of pathology and imaging reports",
    ],
    close: "Clarity on the next information step beats comparing every drug name online.",
  },
} as const;

export const BREAST_SUBTYPE_GLOSS =
  "Breast cancer subtype testing (receptors / HER2, and sometimes genomic assays) helps decide which systemic options and sequencing to discuss — before locking a first plan. It is tumor biology, not germline genetics.";

export const BREAST_SUBTYPE_DIRECT_ANSWER = `For many people, receptor (ER/PR) and HER2 results — and sometimes genomic assays — change which systemic options and sequencing make sense. Ask whether pending subtype results would change the plan before locking surgery or systemic therapy.

Subtype is tumor biology. It is not the same as germline genetic counseling (BRCA-class testing), which may separately affect surgery choices.

A useful question: “Would subtype results change the options we discuss — or when surgery should happen?”`;
