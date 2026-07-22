/** Hang-card bodies for Breast Global Care Decision Path (Entry Template v2) */

import { GLOBAL_CARE_EXPLORE_REASONS } from "@/lib/content/global-care-entry-cards";

export const BREAST_GLOBAL_CARE_EXPLORE_REASONS = GLOBAL_CARE_EXPLORE_REASONS;

export const BREAST_GLOBAL_CARE_ENTRY_CARDS = {
  exploreReasons: {
    lead: "People consider breast cancer care in another city or country when one or more of these are true — not because a hospital or country is simply more famous:",
    items: [...BREAST_GLOBAL_CARE_EXPLORE_REASONS],
    close:
      "Desperation alone (“one last try”) is understandable — but it is not a reason to book flights. Tie the next step to a clear question an outside center can answer.",
  },
  defaultUpgrade: {
    lead: "No. Care in another city or country is not automatically better because a hospital or country is more famous. It is worth exploring when access, trust, cost, or support makes the current path hard to continue.",
    close:
      "If you cannot name your reason in one sentence, pause before booking travel.",
  },
  capabilityGap: {
    lead: "One common reason is a capability gap — a concrete missing piece that could change your options. Breast cancer examples:",
    items: [
      "A specialized surgery or reconstruction approach not available nearby",
      "A clinical trial you may qualify for",
      "Multidisciplinary or genetics review you cannot get where you are",
      "Complex metastatic, recurrence, or sequencing decisions needing higher-volume input",
    ],
    close:
      "Write it as: “I am looking for ___ because where I am we cannot ___.”",
  },
  vsCareTeam: {
    lead: "Choosing a care team asks who should coordinate ongoing care. Considering another city or country asks whether a specific capability requires leaving home — for a visit, a procedure, or a trial.",
    close:
      "You may use both: evaluate local vs specialist teams first, then decide whether travel is needed for a named gap.",
  },
  vsSecondOpinion: {
    lead: "A second opinion is another expert review of a decision. Travel is a logistics choice after you know whether the review (or treatment) must happen in person.",
    close: "Remote second opinion often comes before flights — not after.",
  },
  remoteFirst: {
    lead: "When clinically safe, start with remote review of records and imaging. Many centers will tell you whether an in-person visit would change options.",
    items: [
      "Lower cost and burden than immediate travel",
      "Clarifies whether the access gap is real",
      "Gives you a written opinion you can use for your next step",
    ],
    close:
      "Travel is most useful after remote review suggests a concrete next step you cannot get where you are.",
  },
  hybrid: {
    lead: "Many people travel for planning, a procedure, trial screening, or reconstruction consult — then continue infusions, radiation, or follow-up where it fits their life.",
    items: [
      "Receiving center — focused review, complex decision, or procedure",
      "Ongoing care — systemic therapy, radiation, or monitoring arranged where practical",
    ],
    close:
      "Ask the receiving center’s international desk what they own after the visit and what they put in writing.",
  },
  records: {
    lead: "For an international or remote review, incomplete files are a common reason the center cannot help. Aim for a package that includes:",
    items: [
      "Pathology and biopsy reports (and slides if requested)",
      "Imaging reports plus scan images when available",
      "Subtype / receptor and HER2 results (and genomic results if done)",
      "Operative notes, radiation summaries, and systemic therapy history",
      "Genetics counseling notes when relevant",
      "Current recommendations and unanswered questions",
    ],
    close:
      "A complete packet answers more than a famous hospital name.",
  },
  thisWeek: {
    lead: "If you are exploring care elsewhere, focus on:",
    steps: [
      "Write your reason in one sentence (access, confidence, cost, or missing path)",
      "Ask whether remote review can answer that question first",
      "Request a written next-step plan from the receiving center’s international desk",
    ],
    close:
      "Name the gap before anyone books flights.",
  },
  mistakes: {
    lead: "Common mistakes when considering care abroad include:",
    items: [
      {
        mistake: "Booking travel before naming the capability gap",
        why: "Without a specific missing piece, distance rarely improves the decision.",
      },
      {
        mistake: "Skipping remote review when it is available",
        why: "Many questions can be answered with records before flights.",
      },
      {
        mistake:
          "Booking without a written next-step plan from the receiving center",
        why: "Aftercare and episode design belong in writing — not assumed.",
      },
      {
        mistake: "Choosing by country or hospital fame alone",
        why: "Fit depends on your named gap, expertise, and continuity — not rankings.",
      },
    ],
  },
} as const;

export const BREAST_GLOBAL_CARE_GLOSS =
  "People consider breast cancer care in another city or country for access limits, lost confidence, rejecting the current plan, international-patient support, cost pressure, or a path not available locally — not because a country or hospital is simply more famous. Name your reason, try remote review when safe, and ask for a written next-step plan.";

export const BREAST_GLOBAL_CARE_DIRECT_ANSWER = `People consider breast cancer care in another city or country for one or more of these reasons — not because a hospital or country is simply more famous:

- Access where you are is limited (specialists, wait times, or coordinated review)
- You have already seen more than one team and still lack confidence in the plan
- You do not accept the current recommendation and want an outside review
- You need coordinated international-patient support (records, language, written plan)
- Cost or coverage makes the local path hard to continue
- A technique, trial, or treatment path is not available locally

Name your reason in one sentence. When safe, try remote review before travel. Ask the receiving center’s international desk for a written next-step plan. Desperation alone is not a clinical reason to book flights.`;
