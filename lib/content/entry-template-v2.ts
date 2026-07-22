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
  CARE_CENTER_SLUG,
  CLINICAL_TRIAL_SLUG,
  FEASIBILITY_SLUG,
  FOLLOW_UP_SLUG,
  BRAIN_METS_SLUG,
  GLOBAL_CARE_SLUG,
  NEWLY_DIAGNOSED_SLUG,
  QUALITY_OF_LIFE_SLUG,
  RECURRENCE_SLUG,
  SECOND_OPINION_SLUG,
  STAGE_IV_SLUG,
  SURGERY_SLUG,
  TREATMENT_COMPARE_SLUG,
  TREATMENT_PROGRESSION_SLUG,
} from "./entry-path-v2";
import {
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "./breast-entry-slugs";
import { GLOBAL_CARE_DIRECT_ANSWER_GLOSS } from "./global-care-entry-cards";
import { BREAST_NEWLY_DIAGNOSED_GLOSS } from "./breast-newly-diagnosed-entry-cards";
import { BREAST_SECOND_OPINION_GLOSS } from "./breast-second-opinion-entry-cards";
import { BREAST_SEQUENCING_GLOSS } from "./breast-sequencing-entry-cards";
import { BREAST_SUBTYPE_GLOSS } from "./breast-subtype-entry-cards";
import { BREAST_SURGERY_GLOSS } from "./breast-surgery-entry-cards";
import { BREAST_SYSTEMIC_GLOSS } from "./breast-systemic-entry-cards";

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
      "After a lung cancer diagnosis, you do not need every answer immediately — first understand the type and stage, whether more information is needed, and how to prepare for the next conversation. This helps whether you are the patient or helping someone decide.",
    oneMinuteLabel: "What should we do first?",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Are facing a new lung cancer diagnosis — as the patient or a family member",
      "Feel pressure to choose a treatment before the situation is clear",
      "Are unsure what tests or information still matter",
      "Want a clear next step — not the whole journey at once",
    ],
  },
  [BREAST_NEWLY_DIAGNOSED_SLUG]: {
    plainLanguageGloss: BREAST_NEWLY_DIAGNOSED_GLOSS,
    oneMinuteLabel: "What should we do first?",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Are facing a new breast cancer diagnosis — as the patient or a family member",
      "Are waiting on subtype (receptor / HER2) or staging results",
      "Feel pressure to choose surgery before the sequence is clear",
      "Want a clear next step — not the whole journey at once",
    ],
  },
  [BREAST_SUBTYPE_SLUG]: {
    plainLanguageGloss: BREAST_SUBTYPE_GLOSS,
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Are waiting on receptor / HER2 results after a breast cancer diagnosis",
      "Wonder whether subtype results should arrive before surgery or systemic therapy",
      "Heard about genomic assays (Oncotype-class) and want to know if they matter",
      "Need to separate tumor subtype from germline genetic counseling",
    ],
  },
  [BREAST_SEQUENCING_SLUG]: {
    plainLanguageGloss: BREAST_SEQUENCING_GLOSS,
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Were told treatment might start before or after breast cancer surgery",
      "Want to understand neoadjuvant vs adjuvant sequencing in plain language",
      "Need to know what would change the recommended sequence",
      "Are connecting sequencing with subtype results or surgery options",
    ],
  },
  [BREAST_SURGERY_SLUG]: {
    plainLanguageGloss: BREAST_SURGERY_GLOSS,
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Are choosing between lumpectomy and mastectomy",
      "Wonder whether both options offer similar cancer control for your situation",
      "Need to weigh genetics, radiation, reconstruction, or recurrence concerns",
      "Want confidence before locking a surgery date",
    ],
  },
  [BREAST_SECOND_OPINION_SLUG]: {
    plainLanguageGloss: BREAST_SECOND_OPINION_GLOSS,
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Want confidence before breast cancer surgery or major systemic therapy",
      "Heard conflicting recommendations about sequencing or surgery",
      "Wonder whether genetics, pathology, or imaging should be re-reviewed",
      "Need to know how to prepare a focused second-opinion packet",
    ],
  },
  [BREAST_TREATMENT_COMPARE_SLUG]: {
    plainLanguageGloss: BREAST_SYSTEMIC_GLOSS,
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Have subtype results (HR+ / HER2+ / TNBC) and need to compare medicine options",
      "Want to understand option families instead of a flat drug menu",
      "Need to connect systemic therapy with sequencing before or after surgery",
      "Are weighing side effects, fertility, duration, and goals",
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
  [CARE_CENTER_SLUG]: {
    plainLanguageGloss:
      "Choosing lung cancer care is not only about finding a famous hospital — it is about finding a team with the right expertise, coordination, access, and communication for your situation. Many people combine specialist planning with local treatment.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Wonder whether you need a more specialized cancer team",
      "Are deciding between local care and a larger cancer center",
      "Want multidisciplinary review, trials, or clearer options",
      "Need to know what to look for — without shopping by reputation alone",
    ],
  },
  [GLOBAL_CARE_SLUG]: {
    plainLanguageGloss: GLOBAL_CARE_DIRECT_ANSWER_GLOSS,
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Wonder whether care abroad or in another city would help",
      "Have lost confidence after more than one local opinion",
      "Do not accept the current plan and want an outside review",
      "Cannot continue the local path because of access, cost, or a missing path",
      "Need international-patient support or to compare remote review versus travel",
    ],
  },
  [FEASIBILITY_SLUG]: {
    plainLanguageGloss:
      "A good treatment plan needs to fit both your medical situation and your real life. Cost, travel, time, and support belong in the conversation — then open the decision page that matches your question.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Wonder whether a recommended plan can work with work, family, or travel",
      "Feel stuck between medical fit and practical limits",
      "Need language to raise cost, time, or support with your care team",
      "Want to know which decision page to open next",
    ],
  },
  [BIOMARKER_SLUG]: {
    plainLanguageGloss:
      "Biomarker testing looks for features of the cancer that may affect which treatments doctors discuss — often part of what to check after a new diagnosis, before locking a first plan.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Are sorting out what tests matter after a lung cancer diagnosis",
      "Are deciding on a first treatment plan — for yourself or someone you support",
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
  [BRAIN_METS_SLUG]: {
    plainLanguageGloss:
      "If lung cancer is found in the brain, the next step is not one standard plan — doctors compare local brain-directed options, systemic therapy, trials, and supportive care based on the imaging, symptoms, disease elsewhere, and your goals.",
    oneMinuteLabel: "Direct answer",
    audienceTitle: "This page may help if you:",
    audienceItems: [
      "Scans show lung cancer in the brain",
      "You were told you have brain metastases",
      "Neurologic symptoms led to a brain scan",
      "You need to prepare questions before comparing brain-directed and systemic options",
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
