/** Hang-card bodies for Care Abroad / Another City Decision Path (Entry Template v2) */

/**
 * Why people explore cross-border care (canonical six — not country rankings):
 * access · lost confidence · reject plan · international desk · cost · path not available locally
 */
export const GLOBAL_CARE_EXPLORE_REASONS = [
  "Access where you are is limited (specialists, wait times, or coordinated review)",
  "You have already seen more than one team and still lack confidence in the plan",
  "You do not accept the current recommendation and want an outside review",
  "You need coordinated international-patient support (records, language, written plan)",
  "Cost or coverage makes the local path hard to continue",
  "A technique, trial, or treatment path is not available locally",
] as const;

const EXPLORE_REASONS_BULLETS = GLOBAL_CARE_EXPLORE_REASONS.map(
  (r) => `- ${r}`
).join("\n");

/** Care abroad Entry Direct Answer (`question.summary`) — shared with seed/store. */
export const GLOBAL_CARE_DIRECT_ANSWER_SUMMARY = `Sometimes people consider lung cancer care in another city or country when a named capability, second review, or support path is hard to get locally. Whether travel helps depends on the specific gap, fitness for travel, record quality, follow-up after return, and total cost. Moving for a famous name alone usually does not improve care. Ask: is there a capability abroad that changes my options, and can remote review answer that first?`;

/** Compact gloss for Entry Template v2 config (hero-adjacent copy). */
export const GLOBAL_CARE_DIRECT_ANSWER_GLOSS =
  "Sometimes people consider lung cancer care in another city or country when a named capability, second review, or support path is hard to get locally. Whether travel helps depends on the specific gap, fitness for travel, record quality, follow-up after return, and total cost. Moving for a famous name alone usually does not improve care. Ask: is there a capability abroad that changes my options, and can remote review answer that first?";

/** Primary `/global-care` hub article summary + body (CMS seed). */
export const GLOBAL_CARE_HUB_PRIMARY_SUMMARY =
  "Why people explore care across borders — six reasons — then how to compare remote review, travel, and written next steps without country rankings.";

export const GLOBAL_CARE_HUB_PRIMARY_BODY = `Cross-border care is worth exploring for a named reason — not as a default upgrade to a more famous hospital or country.

People usually explore when one or more of these are true:

${EXPLORE_REASONS_BULLETS}

**What to do next**

1. Write your reason in one sentence.
2. When clinically safe, try remote records review before booking flights.
3. Ask the receiving center’s international desk for a written next-step plan (not a country ranking).
4. Compare centers on the same factors: clinical expertise, treatment access, practical fit, and continuity.

Desperation alone (“one last try”) is understandable — but it is not a clinical reason to book travel. Tie the next step to a clear question an outside center can answer.`;

export const GLOBAL_CARE_ENTRY_CARDS = {
  exploreReasons: {
    lead: "For lung cancer, people consider care across borders when one or more of these are true:",
    items: [...GLOBAL_CARE_EXPLORE_REASONS],
    close:
      "Desperation alone (“one last try”) is understandable — but it is not a reason to book flights. Tie the next step to a clear question an outside center can answer. Do not start with “which country is stronger.”",
  },
  defaultUpgrade: {
    lead: "For lung cancer, no. Care in another city or country is not automatically better because a hospital or country is more famous. It is worth exploring when access, trust, cost, or support makes the current path hard to continue.",
    close:
      "If you cannot name your reason in one sentence, pause before booking travel.",
  },
  capabilityGap: {
    lead: "One common reason is a capability gap — a concrete missing piece that could change your options in lung cancer. Examples:",
    items: [
      "A specialized technique or procedure not available nearby",
      "A clinical trial you may qualify for",
      "Pathology, biomarker, or multidisciplinary review you cannot get where you are",
      "Experience with an uncommon molecular subtype or complex case",
    ],
    close:
      "Write it as: “I am looking for ___ because where I am we cannot ___.”",
  },
  vsCareTeam: {
    lead: "Choosing a care team asks who should coordinate ongoing care in lung cancer. Considering another city or country asks whether a specific capability requires leaving home — for a visit, a procedure, or a trial.",
    close:
      "You may use both: evaluate local vs specialist teams first, then decide whether travel is needed for a named gap.",
  },
  vsSecondOpinion: {
    lead: "A second opinion is another expert review of a decision in lung cancer. Travel is a logistics choice after you know whether the review (or treatment) must happen in person.",
    close:
      "Remote second opinion often comes before flights — not after.",
  },
  remoteFirst: {
    lead: "When clinically safe, start with remote review of records and imaging in lung cancer. Many centers will tell you whether an in-person visit would change options.",
    items: [
      "Lower cost and burden than immediate travel",
      "Clarifies whether the access gap is real",
      "Gives you a written opinion you can use for your next step",
    ],
    close:
      "Travel is most useful after remote review suggests a concrete next step you cannot get where you are.",
  },
  stayLocal: {
    lead: "Staying local can be the stronger choice when care is already equivalent for your gap, or travel would interrupt urgent therapy without clear benefit in lung cancer.",
    close:
      "Timing and a named capability gap matter more than distance or reputation.",
  },
  hybridTravel: {
    lead: "Many people travel for planning, a procedure, or trial screening — then continue care where it fits their life in lung cancer.",
    items: [
      "Receiving center — focused review, complex decision, or procedure",
      "Ongoing care — infusions, monitoring, or follow-up arranged where practical",
    ],
    close:
      "Ask the receiving center’s international desk what they own after the visit and what they put in writing.",
  },
  fitnessTravel: {
    lead: "Travel fitness is part of the medical decision — not only a logistics detail in lung cancer.",
    items: [
      "Can you travel safely given symptoms, oxygen needs, or recent procedures?",
      "Who travels with you, and for how long?",
      "What happens if plans change mid-trip?",
    ],
    close:
      "If fitness is uncertain, ask clinicians who know your current condition — this is about safe travel, not permission to explore options.",
  },
  followUpHome: {
    lead: "For lung cancer, ask the receiving center’s international desk — not your home doctor — what happens after the visit:",
    items: [
      "Will you receive a written next-step plan?",
      "How do they support aftercare questions, side effects, or urgent issues tied to this episode?",
      "When would they expect a return visit, if at all?",
      "How do they share notes, pathology, and imaging with you?",
    ],
    close:
      "Aftercare design is part of what a serious international program should offer. It is not a homework assignment for you to negotiate with a home doctor before you explore.",
  },
  compareCenters: {
    lead: "For lung cancer, when you compare two centers, use the same questions for each — not reputation or country labels:",
    items: [
      "Clinical expertise — experience with your cancer situation; multidisciplinary review",
      "Treatment access — trials or techniques you cannot get where you are",
      "Practical factors — travel, language, international-patient support",
      "Continuity — written next-step plan from their international desk after the visit",
    ],
    close:
      "You are comparing fit for your reason to explore — not crowning a “best hospital.” Use Explore Care Options below for the same factor list.",
  },
  compareTotalCost: {
    lead: "For lung cancer, a useful cost comparison covers the whole episode, not only the first invoice:",
    items: [
      "Medical fees for the planned visit or procedure",
      "Travel, lodging, and companion costs",
      "Time away from work and caregiving",
      "Likely repeat visits or remote follow-up fees",
      "What insurance or self-pay actually covers across borders",
    ],
    close:
      "Ask the international desk what a typical full episode includes. Do not treat a low first-consult price as the total cost — and do not treat “cheaper abroad” as proof it is the right next step.",
  },
  lostConfidence: {
    lead: "Losing confidence after more than one team is a common reason people explore care elsewhere in lung cancer. That feeling can be valid — and it still needs a clear next question:",
    items: [
      "What, specifically, feels unfinished or untrusted in the current plan?",
      "Do you need another review of the same decision, or access to a path you were told is unavailable?",
      "Would a remote records review answer enough before anyone travels?",
    ],
    close:
      "You do not need a home doctor’s permission to seek an outside review. You do need one sentence for what you want the outside center to answer.",
  },
  disagreePlan: {
    lead: "Not accepting the current recommendation is a legitimate reason to seek an outside review in lung cancer. Focus the review — do not start by arguing about countries:",
    items: [
      "Which part of the plan do you reject — the goal, the treatment type, the timing, or the trade-offs?",
      "What decision do you want an outside center to re-examine in writing?",
      "Would remote review of records be enough for that question, or is an in-person visit required?",
    ],
    close:
      "A clear disagreement plus a clear question is more useful than “I just want a better hospital.” You do not need approval from the team you disagree with before you explore.",
  },
  remoteVsTravelCompare: {
    lead: "Remote review and travel answer different questions in lung cancer. Compare them on purpose — not by assuming travel is always stronger:",
    items: [
      "Remote review — can records and imaging answer whether a path exists that you cannot get where you are?",
      "Travel — is an exam, procedure, trial screening, or in-person planning visit actually required?",
      "Burden — cost, time away, and fitness for travel versus a written remote opinion first",
      "Output — will you receive a written next-step plan either way?",
    ],
    close:
      "Choose the lightest option that can answer your question. Many people use remote review first, then travel only if the written result shows a concrete in-person next step.",
  },
  intlSupport: {
    lead: "International-patient support is a practical service layer — not a promise of better medicine in lung cancer. Ask what a desk actually provides:",
    items: [
      "Help assembling and translating records for review",
      "Language support during visits",
      "A written next-step / aftercare outline after the consult",
      "Clear points of contact for scheduling and episode questions",
      "How notes and imaging are shared with you",
    ],
    close:
      "If a center cannot explain these basics in writing, treat that as a practical red flag — regardless of reputation. Partner Profiles, when listed, should describe services like these factually.",
  },
  recordsAbroad: {
    lead: "For an international or remote review, incomplete files are a common reason the center cannot help in lung cancer. Aim for a package that includes:",
    items: [
      "Pathology and biopsy reports (and slides if requested)",
      "Imaging reports plus scan images when available",
      "Biomarker / molecular results",
      "Treatment history and the current recommendation you are reacting to",
      "One-sentence question you want answered",
      "Medication list and key allergies",
    ],
    close:
      "Ask the international desk for their preferred upload checklist before you travel. A complete file often matters more than arriving in person with gaps.",
  },
  lastTryBoundary: {
    lead: "Feeling that this is a “last try” is human in lung cancer. It is also easy to turn into rushed travel without a clear question:",
    items: [
      "What, specifically, do you hope another center can answer or offer?",
      "Has a remote review already tested whether that hope maps to a real option?",
      "If the outside answer is “no new path,” what will you do next — emotionally and practically?",
    ],
    close:
      "Desperation is not a clinical indication to book flights. Tie any contact to a question an outside center can answer in writing — then use Explore Care Options if you are ready to look at centers.",
  },
  costBlocking: {
    lead: "Cost or coverage can make the current path hard to continue in lung cancer. That is a real reason to explore options — including across borders — without pretending price equals better medicine:",
    items: [
      "Which part of care is unaffordable — drugs, procedures, hospital stay, or the whole plan?",
      "Have assistance programs, payment plans, or coverage appeals been checked where you are?",
      "If you look elsewhere, what is the total episode cost, not only the first visit?",
    ],
    close:
      "Use cost as a practical constraint, not as a ranking of countries. Ask any international desk for a written outline of typical episode costs before you commit.",
  },
  questionsBeforeContact: {
    lead: "For lung cancer, before you contact a center abroad, have short answers ready:",
    items: [
      "My reason for exploring, in one sentence (access, confidence, cost, or support)",
      "Can you review records remotely first?",
      "What written next-step plan will I receive after the visit?",
      "What does a typical full episode usually include (fees, stay, return visits)?",
      "How do you share notes and imaging with me?",
    ],
    close:
      "Clear questions make contact useful. Next, open the International Medical Guide to compare centers with the same factors — not country rankings. See Transparency if a future Partner listing may involve compensation.",
  },
  familyPressure: {
    lead: "Families sometimes push for international care out of hope or fear in lung cancer. A useful response is to name the reason for exploring first.",
    ask: "Which reason are we acting on — a missing path, lost confidence, cost, or support — and what question should another center answer?",
    close:
      "Love is not the same as a clinical reason to travel. Name the reason together before anyone books flights.",
  },
  records: {
    lead: "For lung cancer, prepare a complete package before remote review or travel:",
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
    lead: "For lung cancer, before booking flights, confirm:",
    items: [
      "The capability gap in one written sentence",
      "Whether remote review already supports travel",
      "A written next-step / aftercare outline from the receiving center’s international desk",
      "That travel will not interrupt urgent therapy without a clear benefit",
    ],
    close: "If the gap or the receiving center’s next-step plan is unclear, clarify first.",
  },
  conflict: {
    lead: "For lung cancer, if recommendations from different centers differ, ask what changes:",
    items: [
      "Survival or disease control",
      "Side effects or quality of life",
      "Access only (convenience, wait time, or a trial)",
    ],
    close:
      "Ask what changes clinically, then decide your next step with a written plan from the center you choose to continue with.",
  },
};
