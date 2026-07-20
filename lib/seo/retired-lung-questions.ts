/**
 * Legacy lung question pages absorbed into Decision Entries.
 * Keep seed rows for id stability; hide from hub/sitemap and redirect.
 */
export const RETIRED_LUNG_QUESTION_REDIRECTS: Record<string, string> = {
  "lung-cancer-treatment-costs-what-to-ask":
    "/questions/can-my-lung-cancer-treatment-plan-work-with-my-real-life",
  "how-to-choose-hospital-for-complex-lung-cancer-care":
    "/questions/do-i-need-different-lung-cancer-center-or-specialized-expertise",
};

export function isRetiredLungQuestionSlug(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(
    RETIRED_LUNG_QUESTION_REDIRECTS,
    slug
  );
}

export function retiredLungQuestionRedirect(
  slug: string
): string | undefined {
  return RETIRED_LUNG_QUESTION_REDIRECTS[slug];
}
