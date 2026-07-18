/** Hang-card bodies for Quality of Life Decision Path (Entry Template v2) */

export const QUALITY_OF_LIFE_ENTRY_CARDS = {
  supportiveWorse: {
    lead: "No. Supportive care can be part of cancer treatment at any stage.",
    helps: [
      "Symptoms",
      "Side effects",
      "Emotional challenges",
      "Daily life",
    ],
    close: "It can be provided while you are receiving cancer treatment.",
  },
  tellDoctor: {
    lead: "Yes. Your priorities are important medical information.",
    examples: [
      "Staying independent",
      "Attending family events",
      "Continuing work",
      "Reducing treatment burden",
    ],
    close:
      "Doctors can make better recommendations when they understand your goals.",
  },
  affectChoice: {
    lead: "Yes. Treatment decisions often consider expected benefit, possible risks, and your personal goals.",
    close: "The best option is not always the most aggressive option.",
  },
  whichSymptoms: {
    lead: "Tell your care team about changes such as:",
    symptoms: [
      "Worsening fatigue",
      "Breathing difficulties",
      "Pain",
      "Appetite changes",
      "Sleep problems",
      "Anything affecting daily activities",
    ],
    close: "Do not assume you should simply tolerate symptoms.",
  },
  waitAppointment: {
    lead: "Not always. Some symptoms need earlier attention.",
    ask: "Which symptoms should I call about immediately?",
    close: "Knowing this beforehand can reduce stress.",
  },
  adjustTreatment: {
    lead: "Sometimes doctors may consider adjustments depending on treatment goals, side effects, and your overall situation.",
    close: "The important step is telling your team what is happening.",
  },
  burdenTooMuch: {
    lead: "Consider discussing:",
    factors: [
      "Are side effects preventing daily activities?",
      "Is treatment helping achieve my goals?",
      "Are there ways to reduce burden?",
    ],
    close:
      "A treatment decision should be reviewed when your situation changes.",
  },
  moreBetter: {
    lead: "Not necessarily. More treatment may bring more possible benefit — but also more burden.",
    close:
      "The right choice depends on your cancer, health, and priorities.",
  },
  goalsChange: {
    lead: "Yes. Goals may change as circumstances change. For example:",
    examples: [
      "Focusing more on cancer control",
      "Focusing more on daily function",
      "Prioritizing comfort and independence",
    ],
    close: "Your goals can be revisited.",
  },
  planTooHard: {
    lead: "Tell your team what is becoming hard: work, caregiving, travel frequency, side-effect burden, or money stress.",
    ask: "Can we adjust the schedule, location, supportive care, or approach so this plan is more sustainable?",
    close:
      "Raising practical limits is part of good decision-making — not quitting care.",
  },
  costConversation: {
    lead: "Yes — at a high level. Ask what costs and time commitments to expect, what support resources exist, and whether another workable option has a lighter practical burden.",
    close:
      "Exact prices vary; the useful step is putting affordability and time on the table with your team.",
  },
  hospice: {
    lead: "Supportive care focuses on improving quality of life during cancer care. It can happen during active treatment, alongside cancer therapy.",
    close:
      "Hospice care is a specific type of care focused on comfort when treatment goals are different. They are not the same thing.",
  },
  family: {
    lead: "Families can help by:",
    ways: [
      "Attending appointments",
      "Helping organize information",
      "Understanding your goals",
      "Supporting your choices",
    ],
    close: "Your preferences should remain central.",
  },
  services: {
    lead: "Depending on your needs, ask about:",
    items: [
      "Symptom management",
      "Nutrition",
      "Rehabilitation",
      "Emotional support",
      "Social resources",
      "Financial guidance",
    ],
  },
  whoHelps: {
    lead: "Decision support may involve:",
    people: [
      "Oncologists",
      "Nurses",
      "Supportive care specialists",
      "Family members",
      "Trusted people in your life",
    ],
    close: "You do not have to make every decision alone.",
  },
} as const;
