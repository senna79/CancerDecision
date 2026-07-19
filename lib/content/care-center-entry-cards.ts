/** Hang-card bodies for Care Center / Care Team Decision Path (Entry Template v2) */

export const CARE_CENTER_ENTRY_CARDS = {
  everyone: {
    lead: "No. Many people receive excellent lung cancer care close to home. The right level of care depends on:",
    items: [
      "Your cancer situation and decision complexity",
      "Expertise available nearby",
      "Whether you need multidisciplinary review, trials, or specialized services",
    ],
    close:
      "Some patients stay local. Others combine specialist guidance with local treatment.",
  },
  vsSecondOpinion: {
    lead: "A second opinion is another expert review of a specific decision — diagnosis, options, or plan. Choosing a care team is about where and how your care is organized over time.",
    close:
      "You may use both: a second opinion to gain clarity, and a care-team decision to decide who coordinates ongoing care.",
  },
  hybrid: {
    lead: "Many people build a care network rather than choosing one building. For example:",
    items: [
      "Specialized center — diagnosis review, treatment planning, complex decisions",
      "Local center — regular treatments, monitoring, and follow-up closer to home",
    ],
    close:
      "The best approach is not always choosing one location. It is building the right care network.",
  },
  tumorBoard: {
    lead: "A tumor board is a group of specialists who review cancer cases together. For lung cancer, this may include surgeons, medical oncologists, radiation oncologists, radiologists, and pathologists.",
    close:
      "The useful question is not only “Who is my doctor?” It is “Will my case be reviewed by a team when needed?”",
  },
  travel: {
    lead: "Consider complexity of your case, expertise available locally, how often treatment visits are needed, and family support.",
    close:
      "Some patients travel for planning or complex care, then receive regular treatment closer to home.",
  },
  nci: {
    lead: "In the United States, NCI-designated cancer centers meet specific standards for cancer research and care. They may offer specialized expertise and access to clinical studies.",
    close:
      "A designation is one signal — not a ranking. The right center still depends on your cancer type, needs, location, and practical fit. Outside the U.S., people often look for comprehensive or tertiary specialist centres with similar team-based care.",
  },
  famous: {
    lead: "Not necessarily. The best center is the one that provides appropriate expertise, clear communication, and access to the care you need.",
    close: "Reputation alone does not tell you whether a team fits your situation.",
  },
  remoteReview: {
    lead: "Many centers offer case review or second-opinion services before an in-person visit. Ask what records they need and whether a remote review is available.",
    close: "This can help you decide whether travel is worth it before you go.",
  },
  afford: {
    lead: "If travel is difficult, consider local specialists with lung cancer experience, remote consultations where available, or expert review while continuing local care.",
    close:
      "Ask about referral requirements and who would coordinate care with your local team.",
  },
  records: {
    lead: "Prepare copies of:",
    items: [
      "Pathology and biopsy reports",
      "Imaging reports and scan images when available",
      "Biomarker results",
      "Treatment history and current recommendations",
    ],
    close:
      "Also write one sentence: what expertise or clarity you are hoping another team can provide.",
  },
  coordination: {
    lead: "Before changing where you receive care, ask:",
    items: [
      "Who coordinates my care day to day?",
      "How would follow-up work with my local team?",
      "Who should I contact with questions between visits?",
    ],
    close: "Good expertise without coordination can still leave care fragmented.",
  },
  insurance: {
    lead: "In many places, coverage and referral rules may affect which centers and specialists are practical options.",
    ask: "Are there network, referral, or authorization steps I should understand before changing where I receive care?",
    close:
      "You do not need to become an insurance expert — you need the constraints named early.",
  },
  multiSite: {
    lead: "If specialist planning and local treatment are both involved, ask who coordinates visits, records, and questions between sites.",
    items: [
      "Who is the day-to-day contact?",
      "How are records shared?",
      "What happens if the plan changes?",
    ],
    close: "Expertise without coordination can still make a plan hard to follow.",
  },
  whoTreats: {
    lead: "Lung cancer care often involves more than one specialist. Roles may include:",
    items: [
      "Medical oncologist — systemic treatments such as chemotherapy, immunotherapy, or targeted therapy",
      "Thoracic surgeon — surgery decisions and operations",
      "Radiation oncologist — radiation planning and treatment",
      "Pulmonologist — lung function and some diagnostic procedures",
    ],
    ask: "Who is leading my overall plan — and when should other specialists join?",
    close: "The useful question is who coordinates your decisions — not only who has the biggest title.",
  },
  thoracicOnc: {
    lead: "A thoracic oncologist focuses on cancers of the chest, including lung cancer. Some centers use this title for medical oncologists with deep lung-cancer expertise; others refer to a multidisciplinary thoracic team.",
    ask: [
      "Does my doctor primarily treat lung cancer?",
      "Will my case be reviewed by a thoracic multidisciplinary team when needed?",
    ],
    close:
      "Specialization is one signal of fit — communication and access still matter.",
  },
} as const;
