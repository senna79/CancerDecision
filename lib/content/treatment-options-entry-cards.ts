/** Hang-card bodies for Treatment Options Decision Path (Entry Template v2) */

export const TREATMENT_OPTIONS_ENTRY_CARDS = {
  approaches: {
    lead: "Treatment approaches generally fall into several categories. The relevant options depend on your individual situation.",
    types: [
      {
        name: "Surgery",
        body: "Removes cancer that can potentially be removed.",
      },
      {
        name: "Radiation therapy",
        body: "Uses focused radiation to treat cancer in a specific area.",
      },
      {
        name: "Chemotherapy",
        body: "Uses medicines that affect cancer cells.",
      },
      {
        name: "Immunotherapy",
        body: "Helps the immune system recognize and attack cancer cells.",
      },
      {
        name: "Targeted therapy",
        body: "Uses specific cancer features to guide treatment.",
      },
      {
        name: "Clinical trials",
        body: "Evaluate newer approaches under structured research.",
      },
    ],
  },
  combined: {
    lead: "Doctors may combine treatments because different approaches can serve different purposes.",
    examples: [
      "One treatment may reduce visible cancer",
      "Another may address cancer cells that cannot be seen",
      "Another may reduce the chance of future problems",
    ],
    ask: "What role does each treatment play in my plan?",
  },
  newer: {
    lead: "Newer does not always mean better for every person.",
    match: [
      "Your cancer characteristics",
      "Expected benefit",
      "Possible risks",
      "Your goals",
    ],
    ask: "Why is this treatment a good fit for me?",
  },
  differentPeople: {
    lead: "Treatment decisions depend on more than cancer type. Differences may include:",
    factors: [
      "Stage",
      "Biomarkers",
      "Tumor characteristics",
      "Overall health",
      "Personal priorities",
    ],
    close: "A personalized plan considers the complete picture.",
  },
  biomarkers: {
    lead: "For some lung cancers, biomarker information can influence which treatments doctors discuss.",
    body: "Results may help identify whether certain approaches should be considered. Biomarkers are one part of the decision — doctors also consider stage, health, and treatment goals.",
    ask: "Could biomarker results change the options we are comparing?",
  },
  lessAggressive: {
    lead: "More treatment is not always better.",
    body: "Doctors consider whether the expected benefit outweighs side effects, recovery burden, and impact on quality of life.",
    close: "The goal is appropriate treatment, not simply maximum treatment.",
  },
  compareTradeoffs: {
    lead: "A useful comparison includes:",
    points: [
      "Benefit — what outcome is expected?",
      "Risk — what challenges or side effects may occur?",
      "Life impact — how will treatment affect daily activities?",
    ],
    close: "Ask your care team to explain the tradeoffs clearly.",
  },
  qualityOfLife: {
    lead: "Yes. Treatment decisions often consider:",
    factors: [
      "Ability to work",
      "Family responsibilities",
      "Independence",
      "Symptom control",
      "Personal goals",
    ],
    close: "Your priorities are part of the decision.",
  },
  practicalCompare: {
    lead: "For each option, also ask about visit frequency, travel, recovery time, work impact, and support needed at home.",
    close:
      "Two medically reasonable options can differ a lot in how livable they are week to week.",
  },
  cantManage: {
    lead: "Say so early. Teams may discuss local treatment, schedule changes, supportive services, or another approach that still fits your goals.",
    close: "A plan only works if it can be followed.",
    nextHref: "/questions/can-my-lung-cancer-treatment-plan-work-with-my-real-life",
    nextLabel: "Open Practical Fit — cost, travel, time, and support →",
  },
  ifNotWorking: {
    lead: "Treatment decisions can change over time. If a treatment is not working as expected, doctors may consider:",
    options: [
      "Another treatment approach",
      "Additional testing",
      "Clinical trials",
      "Supportive care options",
    ],
    close: "The first decision is not always the last decision.",
  },
  takeTime: {
    lead: "The timing depends on your specific situation.",
    ask: [
      "How urgent is this decision?",
      "What information are we waiting for?",
      "Would more information change the options?",
    ],
    close: "Understanding the timeline can help you decide with confidence.",
  },
  mistakes: {
    lead: "Common challenges include:",
    items: [
      {
        mistake: "Choosing based only on what worked for someone else",
        why: "Another person’s plan may not fit your cancer, health, or goals.",
      },
      {
        mistake: "Assuming the newest treatment is automatically best",
        why: "Newer is valuable when it matches your situation — not by default.",
      },
      {
        mistake: "Focusing only on the cancer and ignoring personal goals",
        why: "Daily life and priorities belong in the comparison.",
      },
    ],
    close: "A good decision considers the whole picture.",
  },
  secondOpinion: {
    lead: "A second opinion may help you better understand available options, the reasons behind the recommendation, and possible alternatives.",
    when: [
      "Multiple treatments seem possible",
      "The decision feels complex",
      "You want more confidence",
    ],
  },
  clinicalTrial: {
    lead: "Clinical trials may provide access to treatments being studied.",
    ask: [
      "Are there trials suitable for my situation?",
      "What are the possible benefits and risks?",
      "How would participation affect my current plan?",
    ],
  },
  chemoVsImmuno: {
    lead: "Chemotherapy and immunotherapy are different tools — not simply “stronger” vs “gentler.”",
    items: [
      "Chemotherapy uses medicines that affect rapidly dividing cells, including cancer cells",
      "Immunotherapy helps the immune system recognize and attack cancer cells",
      "They may be used alone, together, or in sequence depending on your situation",
    ],
    ask: [
      "What is each treatment trying to achieve for me?",
      "Could biomarker results change which approach fits better?",
    ],
  },
  targetedVsImmuno: {
    lead: "Targeted therapy and immunotherapy also work differently.",
    items: [
      "Targeted therapy uses specific cancer features (biomarkers) to guide medicine choice",
      "Immunotherapy engages the immune system; biomarkers such as PD-L1 may affect discussion",
      "Having a targetable feature can change which options are preferred",
    ],
    ask: [
      "Do I have biomarker results that point toward targeted therapy?",
      "If not, how does immunotherapy compare with my other options?",
    ],
    close: "The comparison belongs with your care team — not a general ranking.",
  },
} as const;
