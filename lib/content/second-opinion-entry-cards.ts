/** Hang-card bodies for Second Opinion Decision Path (Entry Template v2) */

export const SECOND_OPINION_ENTRY_CARDS = {
  everyone: {
    lead: "Not everyone needs a second opinion. However, it is common to consider one when:",
    when: [
      "The decision is complex",
      "Treatment choices may differ",
      "Surgery or major therapy is involved",
      "You feel uncertain",
    ],
    close:
      "A second opinion is a decision-support tool, not a sign that something is wrong.",
  },
  delay: {
    lead: "The timing depends on your situation. Ask your care team:",
    ask: [
      "How urgent is my treatment decision?",
      "What information are we waiting for?",
      "Is there enough time for another review?",
    ],
    close:
      "The goal is to balance informed decision-making with timely care.",
  },
  disrespectful: {
    lead: "Most cancer specialists understand that patients want confidence before major decisions.",
    frame:
      "I want to understand all my options and make the best-informed decision.",
    close:
      "Asking for another review is about confidence and clarity — not about distrust.",
  },
  whyImportant: {
    lead: "Lung cancer decisions often involve subtypes, biomarkers, and more than one reasonable plan.",
    items: [
      "Confirm the diagnosis and staging picture",
      "Check whether important testing is missing",
      "Hear whether another approach is also reasonable",
      "Gain confidence before surgery or a major therapy choice",
    ],
    close:
      "A second opinion can confirm the current plan — confirmation is also a useful outcome.",
  },
  canChange: {
    lead: "Yes, but not always. A second opinion may:",
    outcomes: [
      "Confirm the current plan",
      "Suggest additional testing",
      "Discuss another treatment option",
    ],
    close:
      "The goal is not to change treatment. The goal is to understand whether the plan fits your situation.",
  },
  twoDoctors: {
    lead: "Different recommendations can feel confusing. Instead of asking “Which doctor is right?”, ask what information and reasoning led to each recommendation.",
    compare: [
      "Expected benefit",
      "Risks",
      "Impact on daily life",
      "What happens next",
    ],
  },
  pathologyReview: {
    lead: "In some situations, another review of pathology or imaging may provide additional confidence.",
    ask: [
      "Was my diagnosis confirmed?",
      "Are there any uncertain findings?",
      "Would another specialist review change the discussion?",
    ],
  },
  records: {
    lead: "Bring the complete picture when you can:",
    items: [
      "Pathology reports",
      "Biopsy information",
      "Imaging reports",
      "Scan images if available",
      "Biomarker results",
      "Treatment history",
      "Current treatment plan",
    ],
  },
  specialist: {
    lead: "A specialist or experienced cancer center may provide focused expertise, multidisciplinary review, and access to clinical trials.",
    close:
      "The best choice depends on your situation, location, and access.",
  },
  cost: {
    lead: "Costs vary depending on the healthcare system, insurance coverage, and type of consultation.",
    ask: [
      "Is this covered?",
      "Are record reviews included?",
      "Are there additional fees?",
    ],
  },
  mistakes: {
    lead: "Common mistakes include:",
    items: [
      {
        mistake: "Waiting until after a major decision",
        why: "Earlier review may provide more options.",
      },
      {
        mistake: "Asking for another opinion without complete records",
        why: "Missing information limits usefulness.",
      },
      {
        mistake: "Looking only for someone who agrees",
        why: "The goal is understanding, not confirmation.",
      },
    ],
  },
  chooseBetween: {
    lead: "When opinions differ, compare:",
    points: [
      "Why each doctor recommends the approach",
      "What evidence supports it",
      "Expected benefits",
      "Risks",
      "Your personal goals",
    ],
    close: "A good decision comes from understanding the tradeoffs.",
  },
  againLater: {
    lead: "A new opinion may be useful when:",
    when: [
      "Cancer changes",
      "Treatment stops working",
      "New options become available",
      "Another major decision appears",
    ],
    close: "Cancer care involves multiple decisions over time.",
  },
  family: {
    lead: "Many patients involve family because they may help with remembering information, asking questions, and discussing practical concerns.",
    close: "Choose the support that helps you make decisions comfortably.",
  },
} as const;
