"use client";

import Link from "next/link";
import { useState } from "react";
import { SituationGuidedRouter } from "@/components/journey/situation-guided-router";
import type { DecisionMoment } from "@/lib/journey/decision-moments";
import { cn } from "@/lib/utils";

type CancerOption = {
  slug: string;
  name: string;
};

const LUNG_SLUG = "lung-cancer";

/**
 * Homepage nav: pick a cancer → show that cancer’s Start here path (lung is complete).
 */
export function CancerJourneyNav({
  cancers,
  lungMoments,
}: {
  cancers: CancerOption[];
  lungMoments: DecisionMoment[];
}) {
  const ordered = [
    ...cancers.filter((c) => c.slug === LUNG_SLUG),
    ...cancers.filter((c) => c.slug !== LUNG_SLUG),
  ];
  const [selectedSlug, setSelectedSlug] = useState(
    ordered[0]?.slug === LUNG_SLUG ? LUNG_SLUG : ordered[0]?.slug ?? LUNG_SLUG
  );
  const selected = ordered.find((c) => c.slug === selectedSlug) ?? ordered[0];
  const isLung = selectedSlug === LUNG_SLUG;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Choose a cancer type
        </p>
        <div
          role="listbox"
          aria-label="Cancer type"
          className="mt-3 flex flex-wrap gap-x-1 gap-y-2"
        >
          {ordered.map((cancer) => {
            const active = cancer.slug === selectedSlug;
            return (
              <button
                key={cancer.slug}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => setSelectedSlug(cancer.slug)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-semibold transition",
                  active
                    ? "bg-[var(--ink)] text-white"
                    : "text-[var(--ink-soft)] hover:bg-[var(--paper-deep)] hover:text-[var(--ink)]"
                )}
              >
                {cancer.name}
                {cancer.slug === LUNG_SLUG ? (
                  <span
                    className={cn(
                      "ml-1.5 text-[10px] font-medium uppercase tracking-[0.08em]",
                      active ? "text-white/70" : "text-[var(--muted)]"
                    )}
                  >
                    Complete
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {isLung ? (
        <SituationGuidedRouter
          moments={lungMoments}
          cancerLabel="lung cancer"
          footer={
            <>
              Prefer the full center?{" "}
              <Link
                href="/cancers/lung-cancer#decision-moment"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Open the lung decision center
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
        <div className="rounded-lg border border-[var(--line)] bg-white/80 px-5 py-6 md:px-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Building next
          </p>
          <h2 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
            {selected.name} decision guide
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
            Lung cancer is the first complete journey. {selected.name} uses the
            same decision framework and will deepen over time.
          </p>
          <p className="mt-4">
            <Link
              href={`/cancers/${selected.slug}`}
              className="text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              Open the {selected.name} center →
            </Link>
          </p>
        </div>
      ) : null}
    </div>
  );
}
