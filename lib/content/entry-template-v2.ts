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
  CLINICAL_TRIAL_SLUG,
  FOLLOW_UP_SLUG,
  NEWLY_DIAGNOSED_SLUG,
  QUALITY_OF_LIFE_SLUG,
  RECURRENCE_SLUG,
  SECOND_OPINION_SLUG,
  STAGE_IV_SLUG,
  SURGERY_SLUG,
  TREATMENT_COMPARE_SLUG,
  TREATMENT_PROGRESSION_SLUG,
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
  [NEWLY_DIAGNOSED_SLUG]: {
    plainLanguageGloss:
      "After a lung cancer diagnosis, you do not need every answer immediately — first understand your type and stage, whether more information is needed, and how to prepare for the next conversation.",
    oneMinuteLabel: "What should I do first?",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Were just told you have lung cancer",
      "Feel pressure to choose a treatment before you understand your situation",
      "Are unsure what information still matters",
      "Want a clear next step — not the whole journey at once",
    ],
  },
  [STAGE_IV_SLUG]: {
    plainLanguageGloss:
      "A Stage IV diagnosis can feel overwhelming — you do not need to answer everything today. First understand your situation, clarify treatment goals with your team, check key information, and prepare for the next conversation.",
    oneMinuteLabel: "What should I know first?",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Were told you have Stage IV or advanced lung cancer",
      "Feel lost about what happens next",
      "Want to understand treatment goals without assuming care is ending",
      "Need a clear next step — not the whole journey at once",
    ],
  },
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
      "A second opinion is another expert review of your diagnosis, options, or care plan — about having enough information to feel confident, not about distrusting your doctor.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Were recently diagnosed with lung cancer",
      "Are choosing between treatment approaches",
      "Surgery or another major treatment has been recommended",
      "Your diagnosis, stage, or current plan feels uncertain — or treatment is not working as expected",
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
  [CLINICAL_TRIAL_SLUG]: {
    plainLanguageGloss:
      "A clinical trial studies a possible new approach or a new way of using existing treatments — worth discussing at different points in care, not only as a last resort.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Heard a clinical trial mentioned as a possible option",
      "Are comparing treatments and wonder whether a trial belongs in the discussion",
      "Want to ask about trials before locking a first plan",
      "Are facing a treatment change and want to understand research options",
    ],
  },
  [TREATMENT_PROGRESSION_SLUG]: {
    plainLanguageGloss:
      "When lung cancer treatment stops working as expected, it does not mean there are no more options — it means your team is reassessing what information and choices fit the situation now.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Your scans show that cancer has grown or changed",
      "Your doctor says the current treatment is no longer controlling the cancer",
      "Symptoms have changed or you are considering a new option",
      "You want to understand what happens after the first treatment",
    ],
  },
  [RECURRENCE_SLUG]: {
    plainLanguageGloss:
      "If lung cancer returns after treatment, it does not mean there are no options — the next decision starts with understanding what has changed and what fits your situation now.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Your doctor says the cancer has returned",
      "Scans show a new area of concern after treatment",
      "Symptoms appear after a period of control",
      "You want to understand what options exist if cancer comes back",
    ],
  },
  [QUALITY_OF_LIFE_SLUG]: {
    plainLanguageGloss:
      "Lung cancer treatment decisions are not only about controlling cancer — they are also about helping you live as well as possible while receiving care.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Treatment side effects are affecting your daily activities",
      "You are unsure whether the benefits of treatment outweigh the burden",
      "You want to stay active and independent during treatment",
      "Symptoms are becoming harder to manage — or you and your family are discussing what matters most",
    ],
  },
  [FOLLOW_UP_SLUG]: {
    plainLanguageGloss:
      "Finishing treatment is an important milestone, but cancer care does not simply stop — follow-up helps you monitor changes, manage long-term effects, and know when to contact your team.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "You recently completed lung cancer treatment",
      "You are moving from active treatment into follow-up care",
      "You are worried about recurrence or unsure what symptoms matter",
      "You want a clearer plan for life after treatment",
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
