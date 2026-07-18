/** Hang-card bodies for Long-Term Monitoring Decision Path (Entry Template v2) */

export const FOLLOW_UP_ENTRY_CARDS = {
  cancerGone: {
    lead: "Finishing treatment is an important milestone. However, doctors continue follow-up because:",
    reasons: [
      "Some cancers can return",
      "Treatment effects may appear later",
      "Ongoing health needs still matter",
    ],
    close: "Your follow-up plan helps manage the future step by step.",
  },
  firstVisit: {
    lead: "A follow-up visit may include:",
    includes: [
      "Reviewing symptoms",
      "Discussing recovery",
      "Checking test results",
      "Planning future monitoring",
    ],
    bring: [
      "Medication list",
      "Questions",
      "Changes you have noticed",
    ],
  },
  whoManages: {
    lead: "Your care may involve oncology specialists, primary care doctors, and other healthcare professionals.",
    ask: "Who should I contact for different concerns?",
    close: "Knowing your care team reduces uncertainty.",
  },
  scanFrequency: {
    lead: "The schedule depends on cancer type, stage, treatment received, and your doctor’s assessment.",
    close: "The goal is appropriate monitoring, not simply more testing.",
    ask: "Why is this schedule right for my situation?",
  },
  normalScan: {
    lead: "A normal scan is encouraging. However, follow-up continues because cancer behavior varies, long-term health still matters, and symptoms may need attention.",
    close: "The goal is not fear. The goal is having a plan.",
  },
  moreScans: {
    lead: "Not necessarily. Doctors balance useful information, possible stress, cost, and unnecessary procedures.",
    close: "The best plan is the right monitoring plan for you.",
  },
  whichSymptoms: {
    lead: "Ask your doctor which symptoms matter most for your situation. Examples may include:",
    symptoms: [
      "New breathing changes",
      "Persistent pain",
      "Unexplained weight changes",
      "Unusual fatigue",
      "Symptoms that continue or worsen",
    ],
  },
  betweenVisits: {
    lead: "Do not wait automatically. Ask your healthcare team:",
    ask: [
      "Should I schedule a visit?",
      "Should I monitor it?",
      "Does this need attention now?",
    ],
    close: "Having a plan helps avoid unnecessary worry.",
  },
  fearRecurrence: {
    lead: "Fear after cancer treatment is common. Helpful steps include:",
    steps: [
      "Understanding your follow-up plan",
      "Knowing what matters and what does not",
      "Discussing concerns openly",
      "Focusing on actions you can control",
    ],
    close: "You do not have to manage uncertainty alone.",
  },
  longTermEffects: {
    lead: "Some effects may continue after treatment. Depending on your treatment, discuss:",
    effects: [
      "Breathing changes",
      "Fatigue",
      "Pain",
      "Emotional health",
      "Physical recovery",
    ],
    close: "Your healthcare team can help manage long-term effects.",
  },
  returnActivities: {
    lead: "Recovery varies. Consider treatment type, energy level, symptoms, and overall health.",
    ask: "What activities can I safely restart?",
  },
  lifestyle: {
    lead: "Discuss changes that may support your health:",
    changes: [
      "Physical activity",
      "Nutrition",
      "Smoking cessation if relevant",
      "Sleep",
      "Emotional well-being",
    ],
    close: "Focus on realistic changes you can maintain.",
  },
  keepRecords: {
    lead: "Yes. Keep copies of:",
    records: [
      "Pathology reports",
      "Imaging reports",
      "Treatment summaries",
      "Biomarker results",
      "Medication history",
    ],
    close:
      "These records can help if you need another doctor or future treatment decisions.",
  },
  secondOpinion: {
    lead: "Consider another opinion if:",
    when: [
      "Recommendations are unclear",
      "New concerns appear",
      "You face a major new decision",
      "You want more confidence",
    ],
  },
} as const;
