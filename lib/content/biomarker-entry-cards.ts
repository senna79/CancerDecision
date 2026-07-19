/** Hang-card bodies for Biomarker Decision Path (Entry Template v2) */

export const BIOMARKER_ENTRY_CARDS = {
  comprehensive: {
    lead: "“Comprehensive” usually means a broad panel that looks for many cancer features at once — not only one or two markers.",
    items: [
      "Limited testing may miss options that a broader panel could surface",
      "Tissue amount, cancer type, and stage can affect what is ordered",
      "Your team should be able to say what was tested and what was not",
    ],
    ask: [
      "Was comprehensive testing ordered for my situation?",
      "If not, what would change if we broadened the panel?",
    ],
  },
  askTested: {
    lead: "This is one of the most useful early questions after a lung cancer diagnosis.",
    ask: [
      "Has my tumor been tested for the biomarkers that matter for my decision?",
      "Which results are back, and which are still pending?",
      "Would any pending result change the options we discuss?",
    ],
    close:
      "You do not need a gene list — you need clarity on whether key information is already available.",
  },
} as const;
