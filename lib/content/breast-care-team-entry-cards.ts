/** Hang-card bodies for Breast Care Team / Center Decision Path (Entry Template v2) */

export const BREAST_CARE_TEAM_ENTRY_CARDS = {
  whatIs: {
    lead: "Choosing a breast cancer care team is about who coordinates your plan over time — surgeons, medical oncologists, radiation oncologists, plastic surgeons, genetics counselors, and navigators — not only picking a famous building.",
    close:
      "The useful question is “Who will own my next decisions and how will they work together?” — not “Which hospital ranks highest online?”",
  },
  everyone: {
    lead: "No. Many people receive excellent breast cancer care close to home. The right level of care depends on:",
    items: [
      "How complex your decisions are (sequencing, genetics, reconstruction, radiation)",
      "Expertise and multidisciplinary review available nearby",
      "Whether you need specialized services, trials, or a hybrid plan",
    ],
    close:
      "Some people stay local. Others combine specialist planning with treatment closer to home.",
  },
  vsSecondOpinion: {
    lead: "A second opinion is another expert review of a specific decision — surgery, sequencing, or systemic options. Choosing a care team is about where and how care is organized over time.",
    close:
      "You may use both: a second opinion for clarity on one fork, and a care-team decision for who coordinates the journey.",
  },
  whoTreats: {
    lead: "Breast cancer care usually involves more than one specialist. Common roles include:",
    items: [
      "Breast / surgical oncology — local surgery decisions",
      "Medical oncology — systemic therapy and sequencing",
      "Radiation oncology — radiation after surgery when needed",
      "Plastic surgery — reconstruction timing and method when relevant",
      "Genetics counseling — inherited-risk questions before surgery",
      "Nurse navigators / care coordinators — scheduling and handoffs",
    ],
    close:
      "Ask who leads your case — and when other specialists join the conversation.",
  },
  multidisciplinary: {
    lead: "Multidisciplinary care means key specialists review your situation together (or in a coordinated sequence) so surgery, medicines, radiation, and reconstruction do not conflict.",
    close:
      "Ask: “Will my case be reviewed by a team when the plan is complex — and who brings the recommendation back to me?”",
  },
  hybrid: {
    lead: "Many people build a care network rather than choosing one location. For example:",
    items: [
      "Specialized center — complex planning, genetics, reconstruction, or trial access",
      "Local center — infusions, radiation courses, monitoring, and follow-up closer to home",
    ],
    close:
      "The best approach is not always one building. It is a workable network with clear ownership.",
  },
  whenHelps: {
    lead: "Another team or higher-volume center may help when:",
    items: [
      "Surgery, sequencing, or reconstruction recommendations conflict",
      "Genetics or bilateral planning feels high-stakes",
      "You need expertise your local team does not offer regularly",
      "Communication or coordination feels fragmented across specialists",
    ],
    close:
      "Name the gap you are trying to fix — expertise, coordination, or confidence — before traveling for reputation alone.",
  },
  capabilities: {
    lead: "Match capabilities to your decision — not brand names. Look for:",
    items: [
      "Breast multidisciplinary clinic or tumor-board access",
      "Timely subtype / pathology and imaging review",
      "Surgical and reconstruction experience for your situation",
      "Clear radiation and systemic therapy coordination",
      "Genetics counseling access when surgery may depend on it",
    ],
    close:
      "Ask what happens if you need a capability this team does not offer — that answer often matters more than reputation.",
  },
  famous: {
    lead: "Not necessarily. The best team is the one that provides appropriate expertise, clear communication, and access to the care you need.",
    close:
      "Reputation alone does not tell you whether a team fits your situation or will coordinate with local care.",
  },
  travel: {
    lead: "Consider decision complexity, expertise available locally, how often visits are needed, and family support.",
    close:
      "Some people travel for planning or complex surgery, then receive systemic therapy or radiation closer to home.",
  },
  records: {
    lead: "Prepare copies of:",
    items: [
      "Pathology and receptor / HER2 results",
      "Imaging reports and scan images when available",
      "Genetic counseling notes if ordered",
      "Current surgery / sequencing / systemic recommendations",
    ],
    close:
      "Also write one sentence: what expertise or clarity you are hoping another team can provide.",
  },
  coordination: {
    lead: "If more than one site is involved, ask who owns each part:",
    items: [
      "Who schedules surgery and reconstruction?",
      "Who orders and interprets key tests?",
      "Who manages systemic therapy and radiation calendars?",
      "How do teams share records and revise the plan?",
    ],
    close:
      "A named coordinator often matters more than an impressive brochure.",
  },
  thisWeek: {
    lead: "If care-team choice is the decision in front of you, focus on:",
    steps: [
      "Name the gap: expertise, coordination, or confidence on a specific fork",
      "Ask whether a second opinion, a new primary team, or a hybrid setup fits",
      "Prepare records and one sentence about what you need from another team",
    ],
    close:
      "A clear ask beats touring hospitals without a decision question.",
  },
  mistakes: {
    lead: "Common care-team mistakes include:",
    items: [
      {
        mistake: "Choosing by reputation alone",
        why: "Fit depends on your decisions, coordination, and practical access — not brand names.",
      },
      {
        mistake: "Confusing a second opinion with changing your whole team",
        why: "You can get clarity on one decision without relocating all care.",
      },
      {
        mistake: "Traveling without a hybrid plan",
        why: "Many people need a specialist for planning and local care for ongoing treatment.",
      },
      {
        mistake: "Switching teams without naming the gap",
        why: "If the problem is communication, a new famous center may not fix it.",
      },
    ],
  },
} as const;

export const BREAST_CARE_TEAM_GLOSS =
  "Choosing a breast cancer care team is about expertise, multidisciplinary coordination, and practical fit — not picking the most famous hospital. You may combine specialist planning with local treatment.";

export const BREAST_CARE_TEAM_DIRECT_ANSWER = `You do not automatically need a major cancer center. Many people get excellent breast cancer care close to home. Consider another team — or a hybrid setup — when decisions are complex, recommendations conflict, specialized expertise is missing, or coordination feels fragmented.

Ask: “What gap am I trying to fix — expertise, coordination, or confidence — and who will own my next decisions?”

A second opinion reviews a specific fork. A care-team choice decides who coordinates the journey. You may need one, both, or neither.`;
