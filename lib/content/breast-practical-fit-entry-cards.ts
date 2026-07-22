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
    lead: "You do not need exact prices before you ask useful questions. Breast cancer costs and logistics often span surgery, reconstruction, systemic therapy, radiation visits, imaging, genetics, and time away from work — not only one procedure quote.",
    ask: [
      "What will a normal treatment week look like for my plan?",
      "What travel, time, or cost pressures should we plan for?",
      "Which parts of the pathway are most cost- or visit-variable?",
      "If this plan is hard to sustain, what could be adjusted?",
      "Who can help with financial navigation or support resources?",
    ],
    close:
      "Naming constraints early helps your team compare workable options — not only medical ones.",
  },
} as const;

export const BREAST_PRACTICAL_FIT_GLOSS =
  "A good breast cancer plan needs to fit both your medical situation and your real life. Cost, travel, time, and support belong in the conversation — then open the decision page that matches your question.";

export const BREAST_PRACTICAL_FIT_DIRECT_ANSWER = `A good breast cancer treatment plan needs to fit both your medical situation and your real life. Cost, travel, time off work, radiation schedules, and caregiver support belong in the conversation — they do not replace medical advice.

Ask: “Is this plan workable for my life — and if not, what can we adjust?”

This page is a pointer, not a price list. Next, open Care Team (where care happens), Systemic options (which plan fits a real week), or Quality of Life (whether the burden is sustainable).`;
