"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  HOME_BREAST_ILLUSTRATIVE_CARDS,
  HOME_BREAST_SITUATION_DESTINATIONS,
} from "@/lib/content/home-decision-paths";
import { cancerSituationMapHref } from "@/lib/journey/decision-moments";

export type HomeStoryCard = {
  id: string;
  slug: string;
  title: string;
  country: string;
  age_range: string;
  decision_challenge: string;
};

type CancerOption = {
  id: string;
  slug: string;
  name: string;
};

/**
 * Homepage closing strips — switch lung ↔ breast with `?cancer=`.
 */
export function HomeCancerClosing({
  initialSlug = "lung-cancer",
  cancers,
  lungStories,
  breastStories,
}: {
  initialSlug?: "lung-cancer" | "breast-cancer";
  cancers: CancerOption[];
  lungStories: HomeStoryCard[];
  breastStories: HomeStoryCard[];
}) {
  const searchParams = useSearchParams();
  const param = searchParams.get("cancer");
  const slug =
    param === "breast-cancer" || param === "lung-cancer"
      ? param
      : initialSlug;
  const isBreast = slug === "breast-cancer";

  const orderedCancers = [
    ...cancers.filter((c) => c.slug === "lung-cancer"),
    ...cancers.filter((c) => c.slug !== "lung-cancer"),
  ];

  const illustrativeCards = isBreast
    ? HOME_BREAST_ILLUSTRATIVE_CARDS
    : lungStories.map((story) => ({
        title: story.title,
        meta: `Illustrative · ${story.country} · ${story.age_range}`,
        summary: story.decision_challenge,
        href: `/stories/${story.slug}`,
      }));

  return (
    <>
      {isBreast ? (
        <section
          id="breast-decision-situations"
          className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8"
        >
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Breast cancer decision situations
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Same framework as the map above — jump to the situation that matches
            where you are now, then open one guide.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {HOME_BREAST_SITUATION_DESTINATIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border-b border-[var(--line)] py-3 transition hover:border-[var(--accent)]"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.hint}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <Link
              href={cancerSituationMapHref("breast-cancer")}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Open the full Breast Cancer Decision Center →
            </Link>
            {" · "}
            <Link
              href="/?cancer=lung-cancer#choose-cancer"
              className="font-semibold text-[var(--ink-soft)] hover:text-[var(--accent)] hover:underline"
            >
              Switch to lung cancer
            </Link>
          </p>
        </section>
      ) : (
        <section
          id="journeys-in-development"
          className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8"
        >
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Cancer journeys in development
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Same decision framework across cancers. Lung and breast have live
            situation maps today; others deepen over time — not a different
            product.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orderedCancers.map((cancer) => {
              const hasSituationMap =
                cancer.slug === "lung-cancer" ||
                cancer.slug === "breast-cancer";
              const statusLabel =
                cancer.slug === "lung-cancer"
                  ? "Complete"
                  : cancer.slug === "breast-cancer"
                    ? "Live"
                    : "In development";
              return (
                <Link
                  key={cancer.id}
                  href={
                    hasSituationMap
                      ? cancerSituationMapHref(cancer.slug)
                      : `/cancers/${cancer.slug}`
                  }
                  className="group border-b border-[var(--line)] py-3 transition hover:border-[var(--accent)]"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                      {cancer.name}
                    </h3>
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                      {statusLabel}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                    {cancer.slug === "lung-cancer"
                      ? "The first complete Cancer Next Step decision journey."
                      : cancer.slug === "breast-cancer"
                        ? "Situation map and core decision guides are live — diagnosis → subtype → treatment order."
                        : "Uses the same decision framework — depth coming next."}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]/70">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            {isBreast
              ? "Illustrative breast cancer journeys"
              : "Illustrative decision journeys"}
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            {isBreast
              ? "Product examples of how people compare breast cancer options and prepare questions — not miracle recoveries, and not verified testimonials."
              : "Product examples of how people compare options and prepare questions — not miracle recoveries, and not verified testimonials."}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {illustrativeCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block border-b border-[var(--line)] pb-4 transition hover:border-[var(--accent)]"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {card.meta}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                  {card.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                  {card.summary}
                </p>
              </Link>
            ))}
          </div>
          {isBreast && breastStories.length > 0 ? (
            <p className="mt-6 text-sm text-[var(--muted)]">
              Prefer the full map?{" "}
              <Link
                href={cancerSituationMapHref("breast-cancer")}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Open Breast Cancer Decision Center →
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
