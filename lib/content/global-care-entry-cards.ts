/** Hang-card bodies for Care Abroad / Another City Decision Path (Entry Template v2) */

export const GLOBAL_CARE_ENTRY_CARDS = {
  defaultUpgrade: {
    lead: "No. Care in another city or country is not automatically better. It helps when a specific capability is missing locally — not when you only want a more famous name.",
    close:
      "If you cannot name the gap in one sentence, pause before booking travel.",
  },
  capabilityGap: {
    lead: "A capability gap is a concrete missing piece that could change your options. Examples:",
    items: [
      "A specialized technique or procedure not available nearby",
      "A clinical trial you may qualify for",
      "Pathology, biomarker, or multidisciplinary review your local team cannot complete",
      "Experience with an uncommon molecular subtype or complex case",
    ],
    close:
      "Write it as: “I am looking for ___ because locally we cannot ___.”",
  },
  vsCareTeam: {
    lead: "Choosing a care team asks who should coordinate ongoing care. Considering another city or country asks whether a specific capability requires leaving home — for a visit, a procedure, or a trial.",
    close:
      "You may use both: evaluate local vs specialist teams first, then decide whether travel is needed for a named gap.",
  },
  vsSecondOpinion: {
    lead: "A second opinion is another expert review of a decision. Travel is a logistics choice after you know whether the review (or treatment) must happen in person.",
    close:
      "Remote second opinion often comes before flights — not after.",
  },
  remoteFirst: {
    lead: "When clinically safe, start with remote review of records and imaging. Many centers will tell you whether an in-person visit would change options.",
    items: [
      "Lower cost and burden than immediate travel",
      "Clarifies whether the gap is real",
      "Helps your local team respond to a written recommendation",
    ],
    close:
      "Travel is most useful after remote review suggests a concrete next step you cannot get locally.",
  },
  stayLocal: {
    lead: "Staying local can be the stronger choice when care is already equivalent, travel would interrupt urgent therapy, or you have no plan for follow-up after return.",
    close:
      "Continuity and timing matter as much as access to a specialty clinic.",
  },
  hybridTravel: {
    lead: "Many people travel for planning, a procedure, or trial screening — then receive ongoing treatment closer to home.",
    items: [
      "Specialist center — focused review, complex decision, or procedure",
      "Local team — infusions, monitoring, symptom management, follow-up",
    ],
    close:
      "Ask both teams who owns day-to-day care and who manages complications.",
  },
  fitnessTravel: {
    lead: "Travel fitness is part of the medical decision — not only a logistics detail.",
    items: [
      "Can you travel safely given symptoms, oxygen needs, or recent procedures?",
      "Who travels with you, and for how long?",
      "What happens if plans change mid-trip?",
    ],
    close: "Ask your local team whether travel is medically appropriate now.",
  },
  followUpHome: {
    lead: "Before you leave, confirm who manages care after you return:",
    items: [
      "Who handles complications or side effects at home?",
      "How are notes, pathology, and imaging shared both ways?",
      "When do you need to return for repeat visits?",
    ],
    close:
      "If follow-up is unclear, the episode is incomplete — even if the abroad visit goes well.",
  },
  totalCost: {
    lead: "Compare the whole episode, not only the first appointment:",
    items: [
      "Medical fees, travel, lodging, companion costs",
      "Time away from work and caregiving",
      "Likely repeat visits",
      "What insurance or self-pay covers across borders",
    ],
    close:
      "A cheaper first consult can become expensive if you must return often without local backup.",
  },
  familyPressure: {
    lead: "Families sometimes push for international care out of hope or fear. A useful response is to return to the capability gap.",
    ask: "What specific capability are we hoping another center can provide that we cannot get here?",
    close:
      "Love is not the same as a clinical reason to travel. Name the gap together.",
  },
  records: {
    lead: "Prepare a complete package before remote review or travel:",
    items: [
      "Pathology and biopsy reports",
      "Imaging reports and scan images when available",
      "Biomarker / molecular results",
      "Treatment history and current recommendations",
      "One-sentence question you want answered",
    ],
    close:
      "Incomplete records are a common reason remote reviews cannot decide whether travel helps.",
  },
  beforeBooking: {
    lead: "Before booking flights, confirm:",
    items: [
      "The capability gap in one written sentence",
      "Whether remote review already supports travel",
      "Who manages complications after return",
      "That travel will not interrupt urgent local therapy without a clear benefit",
    ],
    close: "If any of these are missing, wait — clarify first.",
  },
  conflict: {
    lead: "If local and abroad recommendations differ, ask what changes:",
    items: [
      "Survival or disease control",
      "Side effects or quality of life",
      "Access only (convenience, wait time, or a trial)",
    ],
    close:
      "Ask your local team to respond to the foreign plan in writing before you commit to travel.",
  },
};
