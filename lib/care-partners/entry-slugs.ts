import {
  CARE_CENTER_SLUG,
  GLOBAL_CARE_SLUG,
  SECOND_OPINION_SLUG,
} from "@/lib/content/entry-path-v2";

/** Decision Entries that mount Care Options after the path ending. */
export const CARE_OPTIONS_ENTRY_SLUGS = new Set<string>([
  SECOND_OPINION_SLUG,
  CARE_CENTER_SLUG,
  GLOBAL_CARE_SLUG,
]);

export function showsCareOptionsOnEntry(slug: string): boolean {
  return CARE_OPTIONS_ENTRY_SLUGS.has(slug);
}
