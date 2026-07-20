import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo/metadata";

/** Sitewide Organization identity for JSON-LD (editorial, not a clinic). */
export const SITE_ORGANIZATION = {
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: SITE_URL,
  description:
    "Decision guides and care navigation for people facing cancer choices — including when cross-border care is under consideration. Educational only; not a healthcare provider. Some care organizations may compensate us when you contact them.",
  publishingPrinciples: absoluteUrl("/transparency"),
  /** Editorial reviewer entity — not a named physician unless one is listed on-page */
  editorialReviewerName: `${SITE_NAME} Editorial`,
} as const;
