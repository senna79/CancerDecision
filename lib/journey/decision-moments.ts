/**
 * Patient-facing "decision moments" — entry routing for the 3-minute next-step standard.
 * Flagship destinations use the lung cancer journey (most complete path today).
 */

export type DecisionMoment = {
  id: string;
  /** Patient language for the choice */
  label: string;
  /** One-line clarification */
  hint: string;
  /** What happens when they click — stated plainly */
  nextStep: string;
  /** Direct destination (question page preferred for speed) */
  href: string;
  /** Decision map node id when applicable */
  nodeId?: string;
  /** Optional accent for lung map deep-link */
  mapHref?: string;
};

/** Lung flagship moments — any stage, not only newly diagnosed */
export const LUNG_DECISION_MOMENTS: DecisionMoment[] = [
  {
    id: "diagnosis",
    label: "I was just diagnosed — I don’t know what comes first",
    hint: "Confirm what is known and which tests still change the plan.",
    nextStep: "Next: get 3 concrete actions in What to do next.",
    href: "/questions/what-decisions-matter-most-after-new-lung-cancer-diagnosis",
    nodeId: "node-diagnosis",
    mapHref: "/cancers/lung-cancer#node-diagnosis",
  },
  {
    id: "biomarkers",
    label: "I’m deciding about biomarker / molecular testing",
    hint: "Whether to wait for results before locking first-line therapy.",
    nextStep: "Next: see when waiting helps — then leave with ask-your-doctor questions.",
    href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
    nodeId: "node-biomarkers",
    mapHref: "/cancers/lung-cancer#node-biomarkers",
  },
  {
    id: "treatments",
    label: "I need to compare treatment options",
    hint: "Surgery-led vs systemic paths, sequencing, and trade-offs.",
    nextStep: "Next: compare options, then take 3 prep actions to your visit.",
    href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
    nodeId: "node-compare",
    mapHref: "/cancers/lung-cancer#node-compare",
  },
  {
    id: "second-opinion",
    label: "I’m considering a second opinion",
    hint: "When another review is worth it — and when it may not change much.",
    nextStep: "Next: decide what to ask for, what to send, and what not to delay.",
    href: "/questions/should-i-get-second-opinion-after-lung-cancer-diagnosis",
    nodeId: "node-second-opinion",
    mapHref: "/cancers/lung-cancer#node-second-opinion",
  },
  {
    id: "recurrence",
    label: "My cancer came back, or the plan suddenly changed",
    hint: "Re-orient: what changed, what to compare again, when to seek another review.",
    nextStep: "Next: re-enter treatment comparison with a clear next-action list.",
    href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
    nodeId: "node-compare",
    mapHref: "/cancers/lung-cancer#node-compare",
  },
  {
    id: "abroad",
    label: "I’m wondering about care in another city or country",
    hint: "Only useful when a specific capability is missing locally.",
    nextStep: "Next: define the capability gap before booking travel.",
    href: "/questions/when-to-consider-lung-cancer-care-abroad",
    nodeId: "node-global",
    mapHref: "/cancers/lung-cancer#node-global",
  },
  {
    id: "costs",
    label: "I need to understand costs and logistics",
    hint: "Episode cost — tests, drugs, travel, time away — not just one fee.",
    nextStep: "Next: leave with the cost questions to ask your team.",
    href: "/questions/lung-cancer-treatment-costs-what-to-ask",
    nodeId: "node-costs",
    mapHref: "/cancers/lung-cancer#node-costs",
  },
];

export function getDecisionMoment(id: string | null | undefined) {
  if (!id) return null;
  return LUNG_DECISION_MOMENTS.find((m) => m.id === id) ?? null;
}
