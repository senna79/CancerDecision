/** Hang-card bodies for Breast Cancer Quality of Life Decision Path (Entry Template v2) */

export const BREAST_QOL_ENTRY_CARDS = {
  whatIs: {
    lead: "Quality of life in breast cancer decisions means what you need to protect while receiving care — energy, work, family roles, comfort, body image, intimacy, and the activities that make a day feel like yours.",
    close:
      "It is not a separate “soft” topic. Priorities belong in the same conversation as surgery, medicines, and radiation.",
  },
  notEitherOr: {
    lead: "The useful question is rarely “treatment or quality of life?” It is: how can this plan support both cancer goals and the life you want to protect?",
    close:
      "Talking about daily life does not mean you are refusing care — it helps the team design a workable plan.",
  },
  supportive: {
    lead: "Supportive care can run alongside active breast cancer treatment at any stage. It may help with:",
    items: [
      "Pain, nausea, fatigue, sleep, or hot flashes",
      "Emotional strain and body-image concerns",
      "Nutrition, movement, and recovery after surgery",
      "Practical challenges that make treatment hard to sustain",
    ],
    close:
      "Needing supportive care does not mean doctors are giving up.",
  },
  tellDoctor: {
    lead: "Yes. Your priorities are important medical information. Examples:",
    items: [
      "Staying at work or caregiving for family",
      "Protecting energy for children or parents",
      "Concerns about appearance, reconstruction, or intimacy",
      "Wanting fewer visits or a lighter side-effect burden",
    ],
    close:
      "Doctors can make better recommendations when they know what a “good week” looks like for you.",
  },
  affectChoice: {
    lead: "Yes. Breast cancer choices often weigh expected benefit, side effects, visit burden, and personal goals — not intensity alone.",
    close:
      "The strongest-sounding option is not automatically the best fit.",
  },
  whichSymptoms: {
    lead: "Tell your care team about changes such as:",
    items: [
      "Worsening fatigue, pain, or sleep problems",
      "Nausea, appetite changes, or mouth sores",
      "Hot flashes, joint pain, or mood changes on endocrine therapy",
      "Arm swelling, wound issues, or radiation skin effects",
      "Anything that blocks work, caregiving, or basic daily activities",
    ],
    close: "Do not assume you should simply tolerate symptoms.",
  },
  waitAppointment: {
    lead: "Not always. Some symptoms need earlier attention.",
    ask: [
      "Which symptoms should I call about immediately?",
      "Which ones can wait until the next visit?",
    ],
    close: "Knowing this beforehand can reduce stress.",
  },
  adjustTreatment: {
    lead: "Sometimes doctors may adjust dose, schedule, supportive medicines, or the overall approach depending on goals and side effects.",
    close:
      "The important step is telling your team what is happening before burden becomes a crisis.",
  },
  moreBetter: {
    lead: "Not necessarily. More treatment may bring more possible benefit — and more burden on energy, work, fertility plans, or recovery.",
    close:
      "The right amount of treatment depends on your cancer, health, and priorities.",
  },
  bodyImage: {
    lead: "Body image, reconstruction timing, and intimacy concerns are valid decision inputs — especially around surgery and radiation.",
    ask: [
      "How might this plan affect appearance, sensation, or recovery timeline?",
      "If reconstruction matters to me, how should timing fit the cancer plan?",
    ],
    close:
      "Raising these topics early helps avoid locking a path that fights your priorities.",
  },
  work: {
    lead: "Many people continue some work during breast cancer treatment — others need time off for surgery recovery, chemotherapy cycles, or daily radiation. It depends on the plan and job demands.",
    ask: [
      "What does a typical treatment week look like for my plan?",
      "Which side effects most often affect work or caregiving?",
      "Are schedule adjustments possible if daily life becomes hard?",
    ],
    close:
      "Tell your team what your week requires — planning is part of the decision.",
  },
  thisWeek: {
    lead: "If quality of life is part of the decision, focus on:",
    steps: [
      "Write 2–3 priorities you want the plan to protect",
      "List symptoms or burdens that already affect daily life",
      "Ask which supportive options or adjustments are available now",
    ],
    close:
      "A short priority list beats researching every side effect alone.",
  },
  mistakes: {
    lead: "Common quality-of-life decision mistakes include:",
    items: [
      {
        mistake: "Thinking supportive care means giving up",
        why: "Supportive care can run alongside cancer treatment at any stage.",
      },
      {
        mistake: "Not telling doctors what matters most",
        why: "Your priorities help the team recommend options that fit your life.",
      },
      {
        mistake: "Assuming more treatment is always better",
        why: "Benefit, burden, and goals still decide fit.",
      },
      {
        mistake: "Waiting until symptoms become severe",
        why: "Earlier communication opens more ways to reduce burden.",
      },
    ],
  },
} as const;

export const BREAST_QOL_GLOSS =
  "Quality of life belongs in breast cancer decisions — not as “treatment vs life,” but as how the plan can support cancer goals and the daily life you need to protect, including symptoms, energy, work, and body image.";

export const BREAST_QOL_DIRECT_ANSWER = `Breast cancer decisions are not only about controlling cancer. They are also about helping you live as well as possible while receiving care — energy, work, family roles, comfort, and body image all belong in the conversation.

Ask: “How can this plan support both my cancer goals and the life I need to protect right now?”

Supportive care can run alongside active treatment. You do not need to wait until symptoms become severe to speak up.`;
