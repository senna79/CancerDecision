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
  vsTravel: {
    lead: "A second opinion is another expert review of a decision. Traveling for care is a logistics choice after you know whether review or treatment must happen in person.",
    items: [
      "Start with a records-based (often remote) second opinion when the question can be answered from pathology, imaging, and the current plan",
      "Consider travel when the outside review says an exam, procedure, trial screening, or in-person planning visit is required",
      "Compare burden — cost, time away, and fitness — against whether a written remote opinion would already change your next step",
    ],
    close:
      "Remote second opinion often comes before flights — not after. If travel is the real question, open the care-abroad decision guide next.",
  },
  afterTwoHospitals: {
    lead: "Two opinions can still leave you unsure. Another review may still help when something concrete remains unfinished:",
    items: [
      "The two plans disagree on goal, treatment type, timing, or major trade-offs — and you need the reasoning compared in writing",
      "Important testing (pathology, imaging, or biomarkers) looks incomplete or was never re-reviewed",
      "You still cannot name which recommendation fits your goals, even after both visits",
      "A new decision point has appeared (progression, side effects, or a new option)",
    ],
    close:
      "More opinions are useful when they answer a named gap — not when you are only hoping someone will finally “agree with you.”",
  },
  recordsPackage: {
    lead: "A second opinion is only as usable as the file you send. Aim for a package that lets another doctor reconstruct the full picture:",
    items: [
      "Pathology and biopsy reports (and slides if requested)",
      "Imaging reports plus scan images when available",
      "Biomarker / molecular results",
      "Treatment history and the current recommendation you are reacting to",
      "One-sentence question you want answered",
      "Medication list and key allergies",
    ],
    close:
      "Incomplete records are a common reason outside reviews cannot help. Ask the reviewing team for their preferred checklist before the appointment.",
  },
  disagreePlan: {
    lead: "Disagreeing with the current plan is a valid reason for an outside review. Focus the review — do not only ask someone to “pick a side”:",
    items: [
      "Which part you reject — the goal, the treatment type, the timing, or the trade-offs",
      "What decision you want re-examined in writing",
      "Whether pathology, imaging, or biomarkers should be re-reviewed as part of that question",
      "Whether a remote records review is enough, or an in-person visit is required",
    ],
    close:
      "A clear disagreement plus a clear question is more useful than “find me a better plan.” You do not need approval from the team you disagree with before you seek another review.",
  },
} as const;
