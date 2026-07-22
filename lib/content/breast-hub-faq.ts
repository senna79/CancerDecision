/**
 * Thin FAQ strip for the Breast Cancer Decision Hub — AI/search landing,
 * not an encyclopedia. Each item links to an existing Decision Entry.
 */

import {
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
} from "@/lib/content/breast-entry-slugs";

export type BreastHubFaqItem = {
  question: string;
  answer: string;
  href: string;
  cta: string;
};

export const BREAST_HUB_FAQS: BreastHubFaqItem[] = [
  {
    question: "What should I do first after a breast cancer diagnosis?",
    answer:
      "You do not need every answer today. First clarify subtype (ER/PR/HER2), stage or extent, and whether treatment should start before or after surgery — then prepare a short question list.",
    href: `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`,
    cta: "First steps after diagnosis →",
  },
  {
    question: "Do I need surgery immediately after diagnosis?",
    answer:
      "Not always. Many people wait for subtype, staging, or genetics results when those could change the plan. Ask what must happen this week versus what can wait.",
    href: `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`,
    cta: "Urgency and waiting →",
  },
  {
    question: "Can I wait for more test results before deciding?",
    answer:
      "Often yes, when the pending results could change surgery or treatment order. Waiting for useful information is different from delaying care without a plan — ask if your wait is safe.",
    href: `/questions/${BREAST_SUBTYPE_SLUG}`,
    cta: "Subtype results before treatment →",
  },
  {
    question: "How do I know which breast cancer decisions matter first?",
    answer:
      "Start from your situation on the map above. Early forks are usually subtype, treatment order (before vs after surgery), and whether genetics could change the operation.",
    href: `/questions/${BREAST_SEQUENCING_SLUG}`,
    cta: "Treatment before or after surgery →",
  },
  {
    question: "Should I get a second opinion before treatment?",
    answer:
      "A focused second opinion can help before irreversible surgery or major systemic therapy. Confirmation of the current plan is also a useful outcome — ask how urgent your next step is.",
    href: `/questions/${BREAST_SECOND_OPINION_SLUG}`,
    cta: "Second opinion guide →",
  },
];
