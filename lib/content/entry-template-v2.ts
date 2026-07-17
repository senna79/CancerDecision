/**
 * Entry Template v2.0 — Patient Decision Workspace
 * See docs/Entry_Template_v2.0.md
 *
 * Short path default-visible; deeper modules remain in HTML (disclosure).
 */

export type EntryTemplateV2Config = {
  /** One plain-language gloss under H1 (translates jargon once) */
  plainLanguageGloss: string;
  /** Label above Direct Answer */
  oneMinuteLabel: string;
};

const BIOMARKER_SLUG =
  "do-i-need-biomarker-testing-before-lung-cancer-treatment";

export const ENTRY_TEMPLATE_V2_BY_SLUG: Record<string, EntryTemplateV2Config> = {
  [BIOMARKER_SLUG]: {
    plainLanguageGloss:
      "Biomarker testing looks for features of your cancer that may affect which treatments your doctors discuss.",
    oneMinuteLabel: "One-minute answer",
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
