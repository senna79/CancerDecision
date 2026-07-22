"use client";

import Link from "next/link";
import { useState } from "react";
import { SituationGuidedRouter } from "@/components/journey/situation-guided-router";
import type { DecisionMoment } from "@/lib/journey/decision-moments";
import {
  BREAST_SITUATION_BUCKETS,
  LUNG_ORIENTATION_LINKS,
  LUNG_SITUATION_BUCKETS,
} from "@/lib/journey/situation-buckets";
import { cn } from "@/lib/utils";

type CancerOption = {
  slug: string;
  name: string;
};

const LUNG_SLUG = "lung-cancer";
const BREAST_SLUG = "breast-cancer";

/** First-viewport order on the homepage */
const HERO_SLUGS = [
  "lung-cancer",
  "breast-cancer",
  "prostate-cancer",
  "brain-tumor",
] as const;

type JourneyConfig = {
  moments: DecisionMoment[];
  cancerLabel: string;
  buckets: typeof LUNG_SITUATION_BUCKETS;
  orientationLinks: typeof LUNG_ORIENTATION_LINKS;
  mapHref: string;
};

/**
 * Homepage nav: pick a cancer → open that cancer’s decision map.
 * Lung is complete; breast P0 navigation is live (orientation pages deferred).
 */
export function CancerJourneyNav({
  cancers,
  lungMoments,
  breastMoments,
}: {
  cancers: CancerOption[];
  lungMoments: DecisionMoment[];
  breastMoments: DecisionMoment[];
}) {
  const bySlug = new Map(cancers.map((c) => [c.slug, c]));
  const heroCancers = HERO_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (c): c is CancerOption => Boolean(c)
  );
  const moreCancers = cancers.filter(
    (c) => !(HERO_SLUGS as readonly string[]).includes(c.slug)
  );

  const [selectedSlug, setSelectedSlug] = useState(LUNG_SLUG);
  const [showMore, setShowMore] = useState(false);
  const selected =
    cancers.find((c) => c.slug === selectedSlug) ?? heroCancers[0];

  const journeyBySlug: Record<string, JourneyConfig> = {
    [LUNG_SLUG]: {
      moments: lungMoments,
      cancerLabel: "lung cancer",
      buckets: LUNG_SITUATION_BUCKETS,
      orientationLinks: LUNG_ORIENTATION_LINKS,
      mapHref: "/cancers/lung-cancer#map-locator",
    },
    [BREAST_SLUG]: {
      moments: breastMoments,
      cancerLabel: "breast cancer",
      buckets: BREAST_SITUATION_BUCKETS,
      // Orientation routes ship with content pages; hide until then.
      orientationLinks: [],
      mapHref: "/cancers/breast-cancer#decision-moment",
    },
  };

  const journey = journeyBySlug[selectedSlug];

  return (
    <div className="space-y-6">
      <div
        role="listbox"
        aria-label="Cancer type"
        className="flex flex-wrap gap-2"
      >
        {heroCancers.map((cancer) => {
          const active = cancer.slug === selectedSlug;
          return (
            <button
              key={cancer.slug}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => setSelectedSlug(cancer.slug)}
              className={cn(
                "rounded-md border px-4 py-2.5 text-sm font-semibold transition md:text-base",
                active
                  ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                  : "border-[var(--line)] bg-white/80 text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              )}
            >
              {cancer.name}
            </button>
          );
        })}
        {moreCancers.length > 0 ? (
          <button
            type="button"
            aria-expanded={showMore}
            onClick={() => setShowMore((v) => !v)}
            className={cn(
              "rounded-md border border-dashed px-4 py-2.5 text-sm font-semibold transition md:text-base",
              showMore
                ? "border-[var(--accent)] text-[var(--accent)]"
                : "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            )}
          >
            More coming soon
          </button>
        ) : (
          <span className="rounded-md border border-dashed border-[var(--line)] px-4 py-2.5 text-sm font-semibold text-[var(--muted)] md:text-base">
            More coming soon
          </span>
        )}
      </div>

      {showMore && moreCancers.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {moreCancers.map((cancer) => {
            const active = cancer.slug === selectedSlug;
            return (
              <button
                key={cancer.slug}
                type="button"
                onClick={() => setSelectedSlug(cancer.slug)}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm font-semibold transition",
                  active
                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                    : "border-[var(--line)] bg-white/70 text-[var(--ink-soft)] hover:border-[var(--accent)]"
                )}
              >
                {cancer.name}
              </button>
            );
          })}
        </div>
      ) : null}

      {journey ? (
        <SituationGuidedRouter
          moments={journey.moments}
          buckets={journey.buckets}
          orientationLinks={journey.orientationLinks}
          cancerLabel={journey.cancerLabel}
          footer={
            <>
              {selectedSlug === BREAST_SLUG ? (
                <>
                  Breast journey is live for core decisions — more situations
                  unlock as guides ship.{" "}
                </>
              ) : null}
              Want the full center?{" "}
              <Link
                href={journey.mapHref}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Open {selected?.name} Decision Center →
              </Link>
              {" · "}
              <Link
                href="/cancers"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Browse all guides
              </Link>
            </>
          }
        />
      ) : selected ? (
        <div className="border border-[var(--line)] bg-white/80 px-5 py-6 md:px-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            In development
          </p>
          <h3 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
            {selected.name} decision journey
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
            Lung and breast use the situation → decision path framework.{" "}
            {selected.name} will follow the same pattern.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <button
              type="button"
              onClick={() => setSelectedSlug(LUNG_SLUG)}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Start with lung cancer →
            </button>
            <button
              type="button"
              onClick={() => setSelectedSlug(BREAST_SLUG)}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Or breast cancer →
            </button>
            <Link
              href={`/cancers/${selected.slug}`}
              className="font-semibold text-[var(--ink-soft)] hover:text-[var(--accent)] hover:underline"
            >
              Preview the {selected.name} center
            </Link>
          </p>
        </div>
      ) : null}
    </div>
  );
}
