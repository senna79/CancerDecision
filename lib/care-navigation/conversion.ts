import {
  CARE_CENTER_SLUG,
  GLOBAL_CARE_SLUG,
  SECOND_OPINION_SLUG,
} from "@/lib/content/entry-path-v2";

/**
 * Interim conversion destination while Partner Profiles are empty / noindex.
 * Funnel: three Entries → Care Options → this page.
 */
export const CARE_CONVERSION_PATH = "/global-care";

/** Primary button on Care Options (from Entries). */
export const CARE_CONVERSION_CTA_LABEL = "Open International Medical Guide";

/** Soft hang-card link into the Care Options module on the same Entry. */
export const CARE_OPTIONS_ANCHOR = "#explore-care-options";
export const CARE_OPTIONS_SOFT_CTA_LABEL = "Explore Care Options";

export const CARE_TRANSPARENCY_PATH = "/transparency";
export const CARE_TRANSPARENCY_CTA_LABEL = "How partnerships work";

/** On the conversion hub itself — continue into the Care abroad decision path. */
export const CARE_ABROAD_ENTRY_PATH =
  "/questions/when-to-consider-lung-cancer-care-abroad";
export const CARE_ABROAD_ENTRY_CTA_LABEL = "Open Care abroad decision guide";

export const CARE_OPTIONS_TITLE =
  "Factors to consider when exploring care centers";

export const CARE_OPTIONS_FOOTNOTE =
  "This is an educational comparison guide — not a hospital ranking or medical recommendation. Partner Profiles may appear later as optional listings; exploring them is never required.";

const REASONS_LINE =
  "People explore across borders for access limits, lost confidence, rejecting the current plan, international-patient support, cost or coverage, or a path not available locally — not country rankings.";

const FACTOR_LINE = "Use the same factors below to compare centers.";

/** Bridge before the shared factor template (by Care Options `source`). */
export function getCareOptionsIntro(source: string): string {
  switch (source) {
    case SECOND_OPINION_SLUG:
      return `If you are exploring an outside review — including across borders — ${FACTOR_LINE} ${REASONS_LINE}`;
    case CARE_CENTER_SLUG:
      return `If you are comparing care teams or centers — including across borders — ${FACTOR_LINE} ${REASONS_LINE}`;
    case GLOBAL_CARE_SLUG:
      return `If you are already exploring care in another city or country — ${FACTOR_LINE} ${REASONS_LINE}`;
    case "global-care-hub":
      return `${REASONS_LINE} ${FACTOR_LINE}`;
    default:
      return `${REASONS_LINE} ${FACTOR_LINE}`;
  }
}

/** Primary CTA — Entries → conversion hub; hub → Care abroad Entry (avoid self-link). */
export function getCareOptionsPrimaryCta(source: string): {
  href: string;
  label: string;
} {
  if (source === "global-care-hub") {
    return {
      href: CARE_ABROAD_ENTRY_PATH,
      label: CARE_ABROAD_ENTRY_CTA_LABEL,
    };
  }
  return {
    href: CARE_CONVERSION_PATH,
    label: CARE_CONVERSION_CTA_LABEL,
  };
}
