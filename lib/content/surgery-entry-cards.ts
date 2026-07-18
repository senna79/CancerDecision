/** Hang-card bodies for Surgery Decision Path (Entry Template v2) */

export const SURGERY_ENTRY_CARDS = {
  candidate: {
    lead: "Doctors consider surgery when they believe removing the cancer may provide meaningful benefit.",
    factors: [
      "Cancer location",
      "Cancer stage",
      "Whether the tumor can be removed safely",
      "Overall health and ability to recover",
    ],
    close:
      "Being a surgery candidate does not mean surgery is automatically the right choice. It means it is one option worth evaluating.",
  },
  stage: {
    lead: "Surgery is often considered for some early-stage lung cancers, but stage alone does not determine the decision.",
    also: [
      "Lymph node involvement",
      "Tumor location",
      "Other cancer characteristics",
      "Your overall health",
    ],
    close: "Each person’s situation is different.",
  },
  cancerGone: {
    lead: "Surgery aims to remove cancer that can be safely removed.",
    points: [
      "Some people need additional treatment",
      "Cancer behavior can vary",
      "Surgery is only one part of the overall treatment plan",
    ],
    close:
      "Ask your doctor what outcome surgery is expected to achieve in your plan.",
  },
  beforeSurgery: {
    lead: "Some people receive treatment before surgery.",
    reasons: [
      "Shrink the cancer",
      "Treat cancer cells that may not be visible",
      "Improve the chances of successful treatment",
    ],
    close:
      "Ask why a specific treatment sequence is recommended in your case.",
  },
  biomarker: {
    lead: "Biomarker information may affect treatment discussions for some people with lung cancer.",
    mayHelp: [
      "Targeted treatments",
      "Immunotherapy approaches",
      "Clinical trial options",
    ],
    ask: "Could biomarker results change the treatment plan we are considering?",
  },
  whenNot: {
    lead: "Surgery may not be recommended when:",
    reasons: [
      "Cancer cannot be safely removed",
      "Another treatment approach may provide more benefit",
      "Health conditions increase surgical risk",
    ],
    close: "The decision depends on the complete picture — not one factor alone.",
  },
  surgeryTypes: {
    lead: "Common lung surgery approaches include:",
    types: [
      {
        name: "Lobectomy",
        body: "Removing one lobe of the lung.",
      },
      {
        name: "Segmentectomy",
        body: "Removing a smaller section.",
      },
      {
        name: "Pneumonectomy",
        body: "Removing an entire lung.",
      },
    ],
    close:
      "The recommended approach depends on cancer location and your individual situation.",
  },
  risks: {
    lead: "Risks vary depending on the type of surgery, your health, and your lung function.",
    ask: [
      "What risks are most relevant for me?",
      "How are complications managed?",
      "What symptoms should I watch for after surgery?",
    ],
  },
  recovery: {
    lead: "Recovery depends on surgery type, surgical approach, and your health before surgery.",
    ask: [
      "When can I return to normal activities?",
      "What restrictions should I expect?",
      "What help will I need at home?",
    ],
  },
  breathing: {
    lead: "Some people notice changes after lung surgery. The impact depends on:",
    factors: [
      "How much lung tissue is removed",
      "Your lung function before surgery",
      "Your recovery process",
    ],
    close: "Your care team can help set realistic expectations.",
  },
  careCenter: {
    lead: "Expertise can be part of a major surgery decision. Questions you may consider:",
    ask: [
      "Does the center regularly treat lung cancer?",
      "Does the team have experience with my type of surgery?",
      "Are treatment decisions reviewed by multiple specialists?",
    ],
  },
} as const;
