"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TrackLink } from "@/components/analytics/track-link";
import { DecisionMarkBadge } from "@/components/brand/decision-marks";
import { JOURNEY_PHASE_MARKS } from "@/lib/brand/situation-marks";
import { HOME_FEATURED_BY_CANCER } from "@/lib/content/home-decision-paths";
import { cancerSituationMapHref } from "@/lib/journey/decision-moments";

/**
 * Homepage strips under the situation map — switch lung ↔ breast with
 * `?cancer=` (same param CancerJourneyNav writes on select).
 */
export function HomeCancerFeatured({
  initialSlug = "lung-cancer",
}: {
  initialSlug?: "lung-cancer" | "breast-cancer";
}) {
  const searchParams = useSearchParams();
  const param = searchParams.get("cancer");
  const slug =
    param === "breast-cancer" || param === "lung-cancer"
      ? param
      : initialSlug;
  const config = HOME_FEATURED_BY_CANCER[slug];

  return (
    <>
      <section
        id="common-decision-paths"
        className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Common decision questions
          </h2>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            {config.commonBadge}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {config.commonIntro}
        </p>
        <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {config.commonPaths.map((item) => (
            <li key={item.href}>
              <TrackLink
                href={item.href}
                event="home_question_click"
                eventProps={{ href: item.href, cancer: slug }}
                className="group flex items-baseline justify-between gap-4 py-4 transition hover:bg-[rgba(15,118,110,0.04)]"
              >
                <span className="text-base font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] md:text-[1.05rem]">
                  {item.question}
                </span>
                <span className="shrink-0 text-sm font-semibold text-[var(--accent)]">
                  Open →
                </span>
              </TrackLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
              {config.journeyTitle}
            </h2>
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
              {config.journeyBadge}
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            {config.journeyIntro}
          </p>
          <ol className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {config.journeySteps.map((step, index) => {
              const markId = JOURNEY_PHASE_MARKS[index] ?? "diagnosis";
              return (
                <li key={step.href} className="relative">
                  <Link
                    href={step.href}
                    className="group flex items-center gap-3 border-b border-[var(--line)] py-4 lg:border-b-0 lg:border-l lg:border-[var(--line)] lg:px-5 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
                  >
                    <DecisionMarkBadge
                      id={markId}
                      className="size-7 transition group-hover:border-[var(--accent)]/50"
                    />
                    <span className="font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                      {step.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
          <p className="mt-6">
            <Link
              href={cancerSituationMapHref(config.mapHrefSlug)}
              className="text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              See where decisions sit on the map →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
