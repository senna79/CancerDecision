/** Hang-card bodies for Breast Cancer Follow-up Decision Path (Entry Template v2) */

export const BREAST_FOLLOW_UP_ENTRY_CARDS = {
  whatHappens: {
    lead: "After active treatment ends, follow-up usually looks like a structured plan — visits, exams, selected imaging, and monitoring of ongoing medicines — not a sudden stop to care. It continues because:",
    items: [
      "Some cancers can return — local, regional, or distant",
      "Treatment effects may appear or linger later",
      "Ongoing medicines (such as endocrine therapy) still need monitoring",
      "Overall health and recovery still matter",
    ],
    close:
      "The end of treatment is not the end of care — it is the start of a different care phase. Ask what your schedule and contact plan look like.",
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
    lead: "How often you see your oncologist after treatment depends on your situation — subtype, stage, treatments received, ongoing medicines, and risk assessment. Many people have more frequent visits early, then space them out; there is no single universal calendar.",
    ask: [
      "How often will I see oncology in the first year — and after that?",
      "Which imaging (mammogram, other) do I need, and how often?",
      "Who do I contact between visits if something changes?",
    ],
    close:
      "The goal is appropriate monitoring, not simply more testing.",
  },
  guidelines: {
    lead: "Follow-up schedules are usually shaped by clinical guideline frameworks plus your personal details — subtype, treatments received, reconstruction status, ongoing endocrine therapy, and risk. Your plan should be individualized, not copied from a generic chart alone.",
    ask: [
      "What framework are we using for my follow-up — and how is it tailored to me?",
      "Which visits and imaging are routine vs only if symptoms appear?",
      "When would we intensify or space out monitoring?",
    ],
    close:
      "Ask how guidelines and your history combine into your written schedule.",
  },
  cancerFree: {
    lead: "“Cancer-free” language varies. Teams may say there is no evidence of disease (NED) on exams and imaging, while follow-up continues because recurrence risk is never zero and ongoing medicines or late effects still need monitoring. There is rarely a single day when surveillance suddenly stops for everyone.",
    ask: [
      "For my situation, what does “no evidence of disease” mean right now?",
      "How long does closer follow-up usually last — and what changes later?",
      "Which medicines or late effects still need monitoring even if scans look clear?",
    ],
    close:
      "Ask what label your team uses and what the surveillance plan actually is — not only whether you can say “cancer-free.”",
  },
  mammoType: {
    lead: "After a breast cancer diagnosis, breast imaging is often ordered as a diagnostic mammogram (or a diagnostic workup) rather than a routine screening mammogram — especially when there is a new concern, recent surgery, or a need for more views/ultrasound. Labels and schedules vary by center.",
    ask: [
      "For my follow-up, are we using screening or diagnostic mammograms — and why?",
      "How often will I have imaging, and of which breast(s)?",
      "When would ultrasound or MRI be added?",
    ],
    close:
      "Ask what your written plan says. “After cancer” does not always mean the same order type as population screening.",
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
    lead: "Fear of recurrence after breast cancer is common. What often helps is a concrete plan — not trying to eliminate worry completely:",
    items: [
      "Understanding your follow-up schedule in plain language",
      "Knowing which symptoms should trigger a call — and which usually do not",
      "Discussing anxiety openly with your team (support is part of care)",
      "Focusing on actions you can control between visits",
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
