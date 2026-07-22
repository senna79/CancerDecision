/** Hang-card bodies for Breast Cancer Follow-up Decision Path (Entry Template v2) */

export const BREAST_FOLLOW_UP_ENTRY_CARDS = {
  whatHappens: {
    lead: "Finishing active treatment is an important milestone. Follow-up continues because:",
    items: [
      "Some cancers can return — local, regional, or distant",
      "Treatment effects may appear or linger later",
      "Ongoing medicines (such as endocrine therapy) still need monitoring",
      "Overall health and recovery still matter",
    ],
    close:
      "The end of treatment is not the end of care — it is the start of a different care phase.",
  },
  notWaiting: {
    lead: "The goal is not to spend your life waiting for bad news. The goal is a clear plan:",
    items: [
      "What should I monitor?",
      "When should I contact my team?",
      "What happens if something changes?",
    ],
    close: "A plan reduces uncertainty even when worry remains.",
  },
  firstVisit: {
    lead: "A follow-up visit may include:",
    items: [
      "Reviewing symptoms and recovery",
      "Examining the breast, chest wall, and lymph-node areas as relevant",
      "Checking imaging or lab results when due",
      "Reviewing endocrine or other ongoing medicines",
      "Planning the next monitoring steps",
    ],
    close: "Bring a medication list, questions, and any changes you have noticed.",
  },
  whoManages: {
    lead: "Your care may involve medical oncology, surgery, radiation, primary care, and other specialists. Ask:",
    ask: [
      "Who leads my follow-up right now?",
      "Who should I contact for different concerns — new lump, medicine side effects, or general health?",
    ],
    close: "Knowing your care team reduces uncertainty between visits.",
  },
  schedule: {
    lead: "Visit and imaging schedules depend on your situation — subtype, stage, treatments received, reconstruction status, and risk assessment.",
    ask: [
      "What is my follow-up schedule — and why is it right for me?",
      "Which imaging (mammogram, other) do I need, and how often?",
    ],
    close:
      "The goal is appropriate monitoring, not simply more testing.",
  },
  moreScans: {
    lead: "Not necessarily. Doctors balance useful information, possible stress, cost, and unnecessary procedures.",
    close: "The best plan is the right monitoring plan for you — not the densest one.",
  },
  endocrine: {
    lead: "If you are on endocrine therapy or other long-term medicines, follow-up often includes checking side effects, adherence, bone or heart health when relevant, and whether the plan still fits.",
    ask: [
      "What side effects should I report on this medicine?",
      "How long is this therapy planned — and what would change that?",
    ],
    close:
      "Ongoing medicine is still part of “after treatment” care for many people.",
  },
  whichSymptoms: {
    lead: "Ask your doctor which symptoms matter most for your situation. Examples may include:",
    items: [
      "A new lump, skin change, or swelling in the breast, chest wall, or underarm",
      "Persistent bone pain, headache, or unexplained weight loss",
      "Shortness of breath or new persistent cough",
      "Arm swelling after lymph-node surgery",
      "Medicine side effects that disrupt daily life",
      "Symptoms that continue or worsen",
    ],
    close: "Your personal “call about this” list matters more than a generic checklist.",
  },
  betweenVisits: {
    lead: "Do not wait automatically. Ask your healthcare team:",
    ask: [
      "Should I schedule a visit?",
      "Should I monitor it until the next appointment?",
      "Does this need attention now?",
    ],
    close: "Having a plan helps avoid unnecessary worry — and delayed care.",
  },
  fearRecurrence: {
    lead: "Fear after breast cancer treatment is common. Helpful steps include:",
    items: [
      "Understanding your follow-up plan in plain language",
      "Knowing which symptoms matter and which usually do not",
      "Discussing concerns openly with your team",
      "Focusing on actions you can control",
    ],
    close:
      "If cancer returns, that is a new decision point — see the Recurrence guide when you need that frame.",
  },
  longTermEffects: {
    lead: "Some effects may continue after treatment. Depending on your care, discuss:",
    items: [
      "Fatigue, sleep, and mood",
      "Arm swelling / lymphedema risk",
      "Pain, numbness, or restricted movement",
      "Menopausal symptoms or sexual health after endocrine therapy",
      "Bone health, heart health, or weight changes when relevant",
      "Body image and reconstruction recovery",
    ],
    close: "Your healthcare team can help manage long-term effects — raise them early.",
  },
  thisWeek: {
    lead: "If you are entering follow-up, focus on:",
    steps: [
      "Ask for your follow-up schedule and who to call between visits",
      "Write down symptoms that should trigger a call",
      "Keep a simple treatment summary and imaging/pathology copies",
    ],
    close:
      "A one-page plan beats vague reassurance.",
  },
  mistakes: {
    lead: "Common follow-up mistakes include:",
    items: [
      {
        mistake: "Assuming treatment ending means care is over",
        why: "Follow-up is a different care phase — monitoring, recovery, and ongoing medicines still matter.",
      },
      {
        mistake: "Waiting for the next visit with a concerning new symptom",
        why: "Some changes deserve a call between appointments.",
      },
      {
        mistake: "Assuming more scans are always safer",
        why: "The right schedule balances information, stress, cost, and procedures.",
      },
      {
        mistake: "Not knowing who manages which concern",
        why: "Unclear ownership increases delay and anxiety.",
      },
    ],
  },
} as const;

export const BREAST_FOLLOW_UP_GLOSS =
  "Finishing breast cancer treatment is a milestone, not the end of care. Follow-up helps you know what to monitor, when to contact your team, how ongoing medicines fit, and what happens if something changes.";

export const BREAST_FOLLOW_UP_DIRECT_ANSWER = `Finishing active breast cancer treatment is an important milestone, but care does not simply stop. Follow-up helps monitor for possible changes, manage long-term effects, support recovery, and guide ongoing medicines such as endocrine therapy when relevant.

Ask: “What is my follow-up schedule, which symptoms should trigger a call, and who do I contact if something changes?”

The goal is not to live waiting for bad news. The goal is a clear plan you can act on.`;
