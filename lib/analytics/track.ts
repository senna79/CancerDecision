import { track as vercelTrack } from "@vercel/analytics";

/** Funnel events for citation → journey validation */
export type AnalyticsEvent =
  | "entry_view"
  | "hang_card_open"
  | "hang_card_close"
  | "next_step_click"
  | "situation_click"
  | "home_question_click"
  | "prep_sheet_open"
  | "care_options_view";

type AnalyticsProps = Record<string, string | number | boolean | null>;

/** Safe client-side track — no-ops if Analytics is unavailable. */
export function trackEvent(
  name: AnalyticsEvent,
  props?: AnalyticsProps
): void {
  try {
    if (props) {
      vercelTrack(name, props);
    } else {
      vercelTrack(name);
    }
  } catch {
    // Ignore analytics failures in production UX paths.
  }
}
