import Link from "next/link";
import { TrackLink } from "@/components/analytics/track-link";
import { DecisionMarkBadge } from "@/components/brand/decision-marks";
import { CancerJourneyNav } from "@/components/home/cancer-journey-nav";
import { JOURNEY_PHASE_MARKS } from "@/lib/brand/situation-marks";
import {
  HOME_COMMON_DECISION_PATHS,
  HOME_FEATURED_LUNG_JOURNEY,
} from "@/lib/content/home-decision-paths";
import {
  BREAST_DECISION_MOMENTS,
  cancerSituationMapHref,
  LUNG_DECISION_MOMENTS,
} from "@/lib/journey/decision-moments";
import { getCancers, getStories } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Navigate Cancer Decisions — Know Your Next Step",
  description:
    "Cancer Next Step helps patients and the people supporting them match a cancer situation to the next decision — understand options, prepare questions, know the next step. Lung cancer is the first complete journey.",
  path: "/",
  ogType: "website",
  keywords: [
    "cancer next step",
    "cancer decision",
    "cancer navigation",
    "second opinion",
    "treatment comparison",
    "lung cancer decisions",
  ],
});

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ cancer?: string }>;
}) {
  const { cancer: cancerParam } = await searchParams;
  const [cancers, stories] = await Promise.all([
    getCancers(),
    getStories({ limit: 3 }),
  ]);

  const cancerOptions = cancers.map((c) => ({
    slug: c.slug,
    name: c.name,
  }));
  const orderedCancers = [
    ...cancers.filter((c) => c.slug === "lung-cancer"),
    ...cancers.filter((c) => c.slug !== "lung-cancer"),
  ];
  const initialJourneySlug =
    cancerParam === "breast-cancer" ? "breast-cancer" : "lung-cancer";

  return (
    <div>
      <section
        id="choose-cancer"
        className="relative scroll-mt-20 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(15,118,110,0.12),transparent_45%),linear-gradient(120deg,rgba(231,238,233,0.85),rgba(243,246,244,0.35))]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <div className="animate-rise max-w-2xl">
            <h1 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl md:text-5xl md:leading-[1.12]">
              Navigate the next cancer decision with confidence.
            </h1>
            <p className="animate-rise-delay mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Understand the options · Prepare better questions · Know the next
              step.
            </p>
            <p className="animate-rise-delay mt-3 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]">
              For patients and the people helping them decide — match the
              situation to the next decision.
            </p>
          </div>

          <div className="animate-rise-delay mt-10 border-t border-[var(--line)]/80 pt-8">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-3xl">
              Start from the situation.
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)] md:text-lg">
              Choose a cancer type, then the decision that matters most right
              now.
            </p>
            <div className="mt-6 max-w-3xl">
              <CancerJourneyNav
                cancers={cancerOptions}
                lungMoments={LUNG_DECISION_MOMENTS}
                breastMoments={BREAST_DECISION_MOMENTS}
                initialSlug={initialJourneySlug}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="common-decision-paths"
        className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Common decision questions
          </h2>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            Lung · Complete
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Start from the question — not the encyclopedia. These paths are live
          for lung cancer today; the same question shapes will extend to other
          cancers.
        </p>
        <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {HOME_COMMON_DECISION_PATHS.map((item) => (
            <li key={item.href}>
              <TrackLink
                href={item.href}
                event="home_question_click"
                eventProps={{ href: item.href }}
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
              Lung cancer decision journey
            </h2>
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
              Featured · Complete
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            The first complete Cancer Next Step guide — from first clarity to
            follow-up.
          </p>
          <ol className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_FEATURED_LUNG_JOURNEY.map((step, index) => {
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
              href={cancerSituationMapHref("lung-cancer")}
              className="text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              See where decisions sit on the map →
            </Link>
          </p>
        </div>
      </section>

      <section
        id="journeys-in-development"
        className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-14 md:px-8"
      >
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
          Cancer journeys in development
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Same decision framework across cancers. Lung cancer is complete today;
          others deepen over time — not a different product.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {orderedCancers.map((cancer) => {
            const hasSituationMap =
              cancer.slug === "lung-cancer" || cancer.slug === "breast-cancer";
            const complete = cancer.slug === "lung-cancer";
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
                    {complete ? "Complete" : "In development"}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                  {complete
                    ? "The first complete Cancer Next Step decision journey."
                    : cancer.slug === "breast-cancer"
                      ? "Situation map and P0 decision guides are live — more situations unlock next."
                      : "Uses the same decision framework — depth coming next."}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]/70">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Illustrative decision journeys
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Product examples of how people compare options and prepare questions
            — not miracle recoveries, and not verified testimonials.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group block border-b border-[var(--line)] pb-4 transition hover:border-[var(--accent)]"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  Illustrative · {story.country} · {story.age_range}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                  {story.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                  {story.decision_challenge}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
