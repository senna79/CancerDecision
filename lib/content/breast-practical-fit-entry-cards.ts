/** Hang-card bodies for Breast Practical Fit pointer stub (Entry Template v2) */

export const BREAST_PRACTICAL_FIT_ENTRY_CARDS = {
  belongs: {
    lead: "Cost, travel, time, and support do not replace medical advice — but they belong in the breast cancer conversation.",
    close:
      "A medically appropriate option also needs to be one you can realistically follow through surgery, medicines, radiation, and recovery.",
  },
  notPrices: {
    lead: "This guide does not list prices, insurance rules, or hospital rankings. Those change by place and plan.",
    close:
      "The useful step is naming constraints early with your care team — then opening the decision page that fits your question.",
  },
  costAsk: {
    lead: "There is no single price for “breast cancer treatment.” Costs usually accumulate across surgery, reconstruction, systemic therapy, radiation visits, imaging, genetics, supportive medicines, and time away from work — and they vary widely by insurance and location.",
    ask: [
      "Which parts of my pathway are most cost-variable?",
      "What will a normal treatment week look like for my plan?",
      "What travel, time, or out-of-pocket pressures should we plan for?",
      "If this plan is hard to sustain, what could be adjusted?",
      "Who can help with financial navigation or support resources?",
    ],
    close:
      "Ask pathway questions early. A single procedure quote rarely answers the real cost question.",
  },
  insurance: {
    lead: "Many medically necessary breast cancer treatments are covered in part by insurance — but coverage, prior authorization, deductibles, and out-of-pocket costs vary by plan, site of care, and whether services are in-network.",
    ask: [
      "Which parts of my plan usually need prior authorization?",
      "What out-of-pocket costs should I expect for surgery, medicines, and radiation?",
      "Who on the team can help with benefits checks or financial navigation?",
      "If coverage is denied, what is the appeal or alternative path?",
    ],
    close:
      "Ask your care team and insurer early. “Covered” rarely means “no cost.”",
  },
} as const;

export const BREAST_PRACTICAL_FIT_GLOSS =
  "A good breast cancer plan needs to fit both your medical situation and your real life. Cost, travel, time, and support belong in the conversation — then open the decision page that matches your question.";

export const BREAST_PRACTICAL_FIT_DIRECT_ANSWER = `A good breast cancer treatment plan needs to fit both your medical situation and your real life. Cost, travel, time off work, radiation schedules, and caregiver support belong in the conversation — they do not replace medical advice.

Ask: “Is this plan workable for my life — and if not, what can we adjust?”

This page is a pointer, not a price list. Next, open Care Team (where care happens), Systemic options (which plan fits a real week), or Quality of Life (whether the burden is sustainable).`;
