"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  HOME_BREAST_ILLUSTRATIVE_CARDS,
  HOME_BREAST_SITUATION_DESTINATIONS,
  HOME_PROSTATE_ILLUSTRATIVE_CARDS,
  HOME_PROSTATE_SITUATION_DESTINATIONS,
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

type JourneySlug = "lung-cancer" | "breast-cancer" | "prostate-cancer";

/**
 * Homepage closing strips — switch with `?cancer=`.
 */
export function HomeCancerClosing({
  initialSlug = "lung-cancer",
  cancers,
  lungStories,
  breastStories,
  prostateStories = [],
}: {
  initialSlug?: JourneySlug;
  cancers: CancerOption[];
  lungStories: HomeStoryCard[];
  breastStories: HomeStoryCard[];
  prostateStories?: HomeStoryCard[];
}) {
  const searchParams = useSearchParams();
  const param = searchParams.get("cancer");
  const slug: JourneySlug =
    param === "breast-cancer" ||
    param === "lung-cancer" ||
    param === "prostate-cancer"
      ? param
      : initialSlug;
  const isBreast = slug === "breast-cancer";
  const isProstate = slug === "prostate-cancer";

  const orderedCancers = [
    ...cancers.filter((c) => c.slug === "lung-cancer"),
    ...cancers.filter((c) => c.slug !== "lung-cancer"),
  ];

  const situationDestinations = isBreast
    ? HOME_BREAST_SITUATION_DESTINATIONS
    : isProstate
      ? HOME_PROSTATE_SITUATION_DESTINATIONS
      : null;

  const illustrativeCards = isBreast
    ? HOME_BREAST_ILLUSTRATIVE_CARDS
    : isProstate
      ? HOME_PROSTATE_ILLUSTRATIVE_CARDS
      : lungStories.map((story) => ({
          title: story.title,
          meta: `Illustrative · ${story.country} · ${story.age_range}`,
          summary: story.decision_challenge,
          href: `/stories/${story.slug}`,
        }));

  const situationTitle = isBreast
    ? "Breast cancer decision situations"
    : "Prostate cancer decision situations";
  const situationIntro = isBreast
    ? "Same framework as the map above — jump to the situation that matches where you are now, then open one guide."
    : "Same framework as the map above — risk clarity and the surveillance-versus-treatment fork sit first.";
  const centerLabel = isBreast
    ? "Open the full Breast Cancer Decision Center →"
    : "Open the full Prostate Cancer Decision Center →";
  const centerHref = cancerSituationMapHref(
    isBreast ? "breast-cancer" : "prostate-cancer"
  );
  const illustrativeTitle = isBreast
    ? "Illustrative breast cancer journeys"
    : isProstate
      ? "Illustrative prostate cancer journeys"
      : "Illustrative decision journeys";
  const illustrativeIntro = isBreast
    ? "Product examples of how people compare breast cancer options and prepare questions — not miracle recoveries, and not verified testimonials."
    : isProstate
      ? "Product examples of how people compare monitoring versus treatment and prepare questions — not miracle recoveries, and not verified testimonials."
      : "Product examples of how people compare options and prepare questions — not miracle recoveries, and not verified testimonials.";

  return (
    <>
      {situationDestinations ? (
        <section
          id={`${slug}-decision-situations`}
          className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8"
        >
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            {situationTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">{situationIntro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {situationDestinations.map((item) => (
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
              href={centerHref}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {centerLabel}
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
            Same decision framework across cancers. Lung, breast, and prostate
            have live situation maps today; others deepen over time — not a
            different product.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orderedCancers.map((cancer) => {
              const hasSituationMap =
                cancer.slug === "lung-cancer" ||
                cancer.slug === "breast-cancer" ||
                cancer.slug === "prostate-cancer";
              const statusLabel =
                cancer.slug === "lung-cancer"
                  ? "Complete"
                  : cancer.slug === "breast-cancer"
                    ? "Live"
                    : cancer.slug === "prostate-cancer"
                      ? "Hub live"
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
                        : cancer.slug === "prostate-cancer"
                          ? "Situation map is live — risk clarity → surveillance vs treatment. Full Entries next."
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
            {illustrativeTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            {illustrativeIntro}
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
          {(isBreast && breastStories.length > 0) ||
          (isProstate && prostateStories.length > 0) ? (
            <p className="mt-6 text-sm text-[var(--muted)]">
              Prefer the full map?{" "}
              <Link
                href={centerHref}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                {isBreast
                  ? "Open Breast Cancer Decision Center →"
                  : "Open Prostate Cancer Decision Center →"}
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
