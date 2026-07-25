/**
 * Thin FAQ strip for the Prostate Cancer Decision Hub — AI/search landing,
 * not an encyclopedia. Each item links to an existing decision guide.
 */

import {
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

export type ProstateHubFaqItem = {
  question: string;
  answer: string;
  href: string;
  cta: string;
};

export const PROSTATE_HUB_FAQS: ProstateHubFaqItem[] = [
  {
    question: "What should I do first after a prostate cancer diagnosis?",
    answer:
      "You usually do not need to choose surgery or radiation today. First clarify risk group (PSA, Grade Group / Gleason, MRI) and what results are still pending — then ask whether monitoring could be reasonable.",
    href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
    cta: "First steps after diagnosis →",
  },
  {
    question: "Do I need treatment immediately?",
    answer:
      "Not always. For selected lower-risk cancers, active surveillance can defer treatment side effects while watching for change. Ask what features make surveillance appropriate — and what would end it.",
    href: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
    cta: "Active surveillance guide →",
  },
  {
    question: "How do I choose between surgery and radiation?",
    answer:
      "When definitive therapy is recommended, both can be reasonable. Compare cancer-control expectations and urinary, sexual, and bowel tradeoffs for your priorities — not a single “best” treatment for everyone.",
    href: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
    cta: "Surgery vs radiation →",
  },
  {
    question: "What if my doctors recommend different plans?",
    answer:
      "Urology and radiation oncology often frame the same options differently. Ask where they disagree, what would change each recommendation, and whether a joint consult or second opinion helps.",
    href: `/questions/${PROSTATE_SECOND_OPINION_SLUG}`,
    cta: "Second opinion guide →",
  },
  {
    question: "Can I wait for more information before deciding?",
    answer:
      "Often yes, when pending imaging, pathology review, or specialist input could change whether surveillance or treatment fits. Ask what is safe to wait for — and what must happen this week.",
    href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
    cta: "What can wait →",
  },
];
