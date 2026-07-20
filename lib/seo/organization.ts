import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo/metadata";

/** Sitewide Organization identity for JSON-LD (editorial, not a clinic). */
export const SITE_ORGANIZATION = {
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: SITE_URL,
  description:
    "Decision navigation for cancer patients — helping people understand options, prepare questions, and know their next step. Educational only; not a healthcare provider.",
  publishingPrinciples: absoluteUrl("/about"),
  /** Editorial reviewer entity — not a named physician unless one is listed on-page */
  editorialReviewerName: `${SITE_NAME} Editorial`,
} as const;
