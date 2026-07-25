/**
 * Prostate Cancer AI Entry Portfolio — P0 acquisition layer.
 * Add Entries as Template v2 ships.
 */

import {
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

export type ProstateAiEntryId =
  | "prostate-newly-diagnosed"
  | "prostate-active-surveillance"
  | "prostate-second-opinion";

export type ProstateAiEntry = {
  id: ProstateAiEntryId;
  label: string;
  decisionLabel: string;
  slug: string;
  momentId: string;
  searchIntents: string[];
  relatedEntryIds: ProstateAiEntryId[];
};

export const PROSTATE_AI_ENTRY_PORTFOLIO: ProstateAiEntry[] = [
  {
    id: "prostate-newly-diagnosed",
    label: "Newly diagnosed",
    decisionLabel: "What happens next after a new diagnosis",
    slug: PROSTATE_NEWLY_DIAGNOSED_SLUG,
    momentId: "newly-diagnosed",
    searchIntents: [
      "just diagnosed with prostate cancer what happens next",
      "newly diagnosed prostate cancer next steps",
      "what to do after a prostate cancer diagnosis",
      "prostate cancer diagnosis what next",
      "why do I need more scans after prostate cancer diagnosis",
      "how long from prostate cancer diagnosis to treatment",
      "what should I expect at first urology appointment prostate cancer",
      "what should I ask after prostate cancer diagnosis",
      "questions to ask urologist after prostate cancer diagnosis",
      "how soon do I need treatment after prostate cancer diagnosis",
      "should I start treatment right away after prostate cancer diagnosis",
      "can I wait after prostate cancer diagnosis",
      "is waiting after prostate cancer diagnosis dangerous",
      "prostate cancer risk group what next",
      "is active surveillance an option after prostate cancer diagnosis",
      "first steps after prostate cancer diagnosis",
    ],
    relatedEntryIds: [
      "prostate-active-surveillance",
      "prostate-second-opinion",
    ],
  },
  {
    id: "prostate-active-surveillance",
    label: "Active surveillance",
    decisionLabel: "Whether active surveillance is a reasonable first path",
    slug: PROSTATE_SURVEILLANCE_SLUG,
    momentId: "active-surveillance",
    searchIntents: [
      "is active surveillance reasonable for prostate cancer",
      "active surveillance vs treatment prostate cancer",
      "should I watch or treat prostate cancer",
      "prostate cancer monitoring instead of surgery",
      "what is active surveillance prostate cancer",
      "is active surveillance the same as doing nothing",
      "when does active surveillance end prostate cancer",
      "PSA monitoring prostate cancer active surveillance",
      "who is a candidate for active surveillance prostate cancer",
      "active surveillance follow-up schedule prostate",
      "should I treat low risk prostate cancer",
      "watching prostate cancer instead of surgery",
      "active surveillance triggers for treatment",
      "is it safe to delay prostate cancer treatment",
    ],
    relatedEntryIds: [
      "prostate-newly-diagnosed",
      "prostate-second-opinion",
    ],
  },
  {
    id: "prostate-second-opinion",
    label: "Second opinion",
    decisionLabel: "Whether a second opinion may help before locking a path",
    slug: PROSTATE_SECOND_OPINION_SLUG,
    momentId: "second-opinion",
    searchIntents: [
      "should I get a second opinion for prostate cancer",
      "second opinion before prostate cancer treatment",
      "second opinion before active surveillance",
      "prostate cancer recommendations differ",
      "urology vs radiation oncology second opinion",
      "is asking for second opinion disrespectful prostate cancer",
      "what records for prostate cancer second opinion",
      "can second opinion change prostate cancer treatment plan",
      "should pathology be reviewed again prostate cancer",
      "MRI second opinion prostate cancer",
      "second opinion without delaying prostate cancer treatment",
      "when to get second opinion prostate cancer",
    ],
    relatedEntryIds: [
      "prostate-newly-diagnosed",
      "prostate-active-surveillance",
    ],
  },
];

const prostateSlugSet = new Set(PROSTATE_AI_ENTRY_PORTFOLIO.map((e) => e.slug));
const prostateById = Object.fromEntries(
  PROSTATE_AI_ENTRY_PORTFOLIO.map((e) => [e.id, e])
) as Record<ProstateAiEntryId, ProstateAiEntry>;

export function isProstateAiEntrySlug(slug: string): boolean {
  return prostateSlugSet.has(slug);
}

export function getProstateAiEntryBySlug(slug: string): ProstateAiEntry | null {
  return PROSTATE_AI_ENTRY_PORTFOLIO.find((e) => e.slug === slug) ?? null;
}

export function getRelatedProstateAiEntries(
  entry: ProstateAiEntry
): ProstateAiEntry[] {
  return entry.relatedEntryIds.map((id) => prostateById[id]).filter(Boolean);
}
