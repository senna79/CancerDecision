/**
 * Entry Template v2.0 — Patient Decision Workspace
 * See docs/Entry_Template_v2.0.md
 *
 * Hero: brand plane + H1 + compact Direct Answer + path CTA.
 * Path: Understand → Compare → Practical → Conversation.
 * Audience lives on Step 1 “Is this my situation?” card.
 */

import {
  BIOMARKER_SLUG,
  SECOND_OPINION_SLUG,
  SURGERY_SLUG,
  TREATMENT_COMPARE_SLUG,
} from "./entry-path-v2";

export type EntryTemplateV2Config = {
  /** One plain-language gloss (used in cards / SEO helpers) */
  plainLanguageGloss: string;
  /** Label above Direct Answer */
  oneMinuteLabel: string;
  /** Fast fit check — Step 1 card */
  audienceTitle?: string;
  audienceItems?: string[];
};

export const ENTRY_TEMPLATE_V2_BY_SLUG: Record<string, EntryTemplateV2Config> = {
  [BIOMARKER_SLUG]: {
    plainLanguageGloss:
      "Biomarker testing looks for features of your cancer that may affect which treatments your doctors discuss.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Were recently diagnosed with lung cancer",
      "Are deciding on a first treatment plan",
      "Are considering a second opinion and want complete information",
      "Need to know whether more information is needed before locking a plan",
    ],
  },
  [SECOND_OPINION_SLUG]: {
    plainLanguageGloss:
      "A second opinion is another specialist review of your diagnosis and options — often about confidence and clarity, not disagreement.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Received a new lung cancer diagnosis and want more confidence",
      "Were given a major treatment recommendation",
      "Heard different opinions and need a way to compare them",
      "Have a complex situation and wonder about specialized review",
    ],
  },
  [TREATMENT_COMPARE_SLUG]: {
    plainLanguageGloss:
      "Choosing a lung cancer treatment is about the plan that best fits your cancer, test information, health, and goals — not finding the “strongest” treatment.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Were recently diagnosed with lung cancer",
      "Your doctor discussed more than one possible treatment approach",
      "You are trying to understand surgery, radiation, medicines, or clinical trials",
      "You want to know why your recommended treatment may differ from someone else’s",
    ],
  },
  [SURGERY_SLUG]: {
    plainLanguageGloss:
      "Surgery can be an important option for some people with lung cancer when the cancer can be safely removed and surgery may provide meaningful benefit — it is not automatically best for everyone.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Your doctor mentioned surgery as a possible treatment",
      "You are deciding between different treatment approaches",
      "You want to understand whether surgery could help",
      "You are preparing for a major treatment decision",
    ],
  },
};

export function usesEntryTemplateV2(slug: string): boolean {
  return slug in ENTRY_TEMPLATE_V2_BY_SLUG;
}

export function getEntryTemplateV2Config(
  slug: string
): EntryTemplateV2Config | null {
  return ENTRY_TEMPLATE_V2_BY_SLUG[slug] ?? null;
}

export const ENTRY_TEMPLATE_V2_BIOMARKER_SLUG = BIOMARKER_SLUG;
