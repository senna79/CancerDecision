/** Hang-card bodies for Brain Metastases Decision Path (Entry Template v2) */

export const BRAIN_METS_ENTRY_CARDS = {
  whatMeans: {
    lead: "It means lung cancer cells have been found in the brain — either on imaging, or because symptoms led to a scan.",
    close:
      "It is a new piece of information about where the cancer is, not an automatic verdict about what happens next. The next decision starts with understanding the brain findings and the rest of your situation together.",
  },
  stillOptions: {
    lead: "Not necessarily. Brain involvement changes the conversation, but it does not automatically mean there are no options.",
    close:
      "Doctors often still discuss local treatment for the brain when appropriate, systemic therapy for cancer elsewhere, clinical trials, supportive care for symptoms, or a combination. The useful question is which approaches fit your situation now — not whether any path exists.",
  },
  scanVsSymptoms: {
    lead: "Not always the same decision. Some people learn about brain findings from a scan before symptoms appear. Others notice neurologic symptoms first.",
    items: [
      "Scan findings without major symptoms — timing and goals may still matter",
      "Symptoms such as headache, weakness, speech changes, or seizures — symptom control may be urgent even while treatment options are compared",
      "Both — the care team may address symptoms and the disease plan together",
    ],
    close:
      "Ask: “Are we deciding about symptoms, about cancer control, or both right now?”",
  },
  urgent: {
    lead: "Some neurologic changes need urgent medical attention first — before a longer decision conversation.",
    items: [
      "Sudden severe headache, confusion, or loss of consciousness",
      "New weakness, facial droop, or trouble speaking",
      "A seizure",
      "Rapidly worsening vision or balance",
    ],
    close:
      "This page helps you prepare for the next planned conversation. It is not a substitute for emergency care when symptoms are sudden or severe.",
  },
  whatMatters: {
    lead: "Before choosing a path, teams usually want a clear picture of:",
    items: [
      "How many brain lesions are present, and where",
      "Whether there are symptoms that need prompt control",
      "How much cancer is active outside the brain",
      "What treatments you have already received",
      "Biomarker or molecular information when relevant",
      "Your overall health and what matters most to you now",
    ],
    close:
      "Sometimes the most important next step is not picking a treatment immediately — it is making sure the team has the information that would change the options.",
  },
  numberLocation: {
    lead: "Yes. Number, size, and location of brain findings often affect which local approaches are discussed — and whether local treatment is the main focus or part of a broader plan.",
    close:
      "You do not need to memorize every technique. Ask what the imaging shows in plain language, and how that picture changes the options on the table.",
  },
  bodyDisease: {
    lead: "Often, yes. A brain-directed plan and a plan for cancer elsewhere in the body are frequently considered together.",
    close:
      "Controlling disease outside the brain may matter as much as treating the brain findings. Ask how the team is balancing both.",
  },
  biomarkers: {
    lead: "They still can. Biomarker or molecular results may affect systemic options even when brain metastases are present.",
    ask: [
      "Do we already have biomarker results that guide treatment?",
      "Would updated testing change the options we discuss now?",
      "How do those results interact with brain-directed treatment?",
    ],
  },
  whoInvolved: {
    lead: "Brain metastases decisions often involve more than one specialty. Depending on the situation, your team may include:",
    items: [
      "Medical oncology — systemic treatment and overall plan",
      "Radiation oncology — focused or broader brain radiation discussions",
      "Neurosurgery — when surgery is being considered",
      "Neurology or supportive care — symptoms, steroids, daily function",
    ],
    close:
      "Ask who is coordinating the plan, and who decides if recommendations differ.",
  },
  localOptions: {
    lead: "Local treatments aim at the brain findings themselves. Doctors may discuss approaches such as focused radiation, broader brain radiation, or surgery in selected situations.",
    close:
      "Which option is considered depends on the imaging, symptoms, overall disease, and goals — not on a single “best” technique for everyone. Ask what local options are realistic for you, and why.",
  },
  systemicOptions: {
    lead: "Systemic treatments treat cancer through the bloodstream and may be discussed for disease outside the brain — and sometimes for brain involvement, depending on the cancer and available therapies.",
    close:
      "Ask whether the next systemic option is expected to help the brain findings, disease elsewhere, or both — and what that means for sequencing with local treatment.",
  },
  howCompare: {
    lead: "Compare each realistic approach with the same questions:",
    items: [
      "Goal — control growth, relieve symptoms, protect function, or buy time for another option?",
      "Expected benefit — for the brain, for the rest of the body, or both?",
      "Risks and recovery — including effects on thinking, energy, and daily life",
      "Timing — what needs to happen soon versus what can wait for more information",
      "Fit — travel, visits, steroids, support at home, and what you want to protect",
    ],
    close:
      "The goal is not “find the strongest treatment.” It is “find the approach that best fits my situation now.”",
  },
  dailyLife: {
    lead: "Brain-directed care can affect daily life even when it is the right medical discussion. Common practical topics include:",
    items: [
      "Steroids — why they are used, side effects, and the plan to taper",
      "Thinking, memory, fatigue, or mood changes during treatment",
      "Driving, work, and safety if symptoms or seizures are a concern",
      "Support at home while recovery or visits are underway",
    ],
    close:
      "These topics belong in the decision — not only after a plan is chosen.",
  },
  trial: {
    lead: "Clinical trials may be worth discussing when brain metastases are part of the picture — especially if standard options are limited or your cancer has specific features.",
    ask: [
      "Does this trial allow people with brain metastases?",
      "How does it compare with the standard options we are discussing?",
      "What extra visits, scans, or risks would it involve?",
    ],
  },
  mistakes: {
    lead: "Common challenges include:",
    items: [
      {
        mistake: "Assuming brain involvement means there are no options",
        why: "Many people still have choices to compare — the question is which ones fit now.",
      },
      {
        mistake: "Focusing only on the brain and ignoring disease elsewhere",
        why: "A durable plan often has to account for both.",
      },
      {
        mistake: "Rushing a major choice before key information is clear",
        why: "Unless symptoms are urgent, knowing what would change the options can prevent a decision based on fear alone.",
      },
      {
        mistake: "Leaving daily function and support out of the conversation",
        why: "Steroids, cognition, travel, and home support shape whether a plan is workable.",
      },
    ],
  },
  family: {
    lead: "Families often want clarity on:",
    topics: [
      "What the brain findings mean in plain language",
      "What decisions are needed now versus later",
      "How treatment may affect thinking, energy, and safety",
      "How they can help with appointments, notes, and support at home",
    ],
    close:
      "It can help to name one priority together: control cancer, relieve symptoms, protect independence — or a balance of these.",
  },
  records: {
    lead: "Bring what you can so the discussion stays concrete:",
    items: [
      "Brain imaging reports (and images if available)",
      "Recent body staging scans",
      "Pathology and biomarker results",
      "Treatment history and current medications, including steroids",
      "A short list of symptoms and what matters most to you now",
    ],
    close: "These records help the team compare options instead of guessing.",
  },
  secondOpinion: {
    lead: "A second opinion can be useful when brain metastases decisions involve several specialties, unclear sequencing, or major trade-offs.",
    mayHelp: [
      "Clarify whether local treatment, systemic therapy, or both should lead",
      "Review whether key information is already complete",
      "Increase confidence in the recommended plan — or surface another realistic option",
    ],
  },
};
