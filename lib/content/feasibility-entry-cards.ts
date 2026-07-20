/** Hang-card bodies for Practical Fit stub (Entry Template v2) */

export const FEASIBILITY_ENTRY_CARDS = {
  belongs: {
    lead: "Cost, travel, time, and support do not replace medical advice — but they belong in the conversation.",
    close:
      "A medically appropriate option also needs to be one you can realistically follow.",
  },
  notPrices: {
    lead: "This guide does not list prices, insurance rules, or hospital rankings. Those change by place and plan.",
    close:
      "The useful step is naming constraints early with your care team — then choosing the decision page that fits your question.",
  },
  costAsk: {
    lead: "You do not need exact prices before you ask useful questions. Costs often vary by modality, drugs, hospitalization, travel, and supportive care — not only the headline treatment.",
    ask: [
      "What time, travel, and visit load should I expect with this plan?",
      "What costs or authorization steps should I understand early?",
      "Which parts of the plan are most cost-variable?",
      "If this plan is hard to sustain, what could be adjusted?",
      "Who can help with financial counseling or drug-assistance resources?",
    ],
    close:
      "Naming constraints early helps your team compare workable options — not only medical ones.",
  },
} as const;
