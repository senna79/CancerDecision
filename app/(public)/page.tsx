import Link from "next/link";
import { CancerJourneyNav } from "@/components/home/cancer-journey-nav";
import {
  HOME_COMMON_DECISION_PATHS,
  HOME_FEATURED_LUNG_JOURNEY,
} from "@/lib/content/home-decision-paths";
import { LUNG_DECISION_MOMENTS } from "@/lib/journey/decision-moments";
import { getCancers, getStories } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Navigate Cancer Decisions — Know Your Next Step",
  description:
    "Cancer Next Step helps you understand options, prepare better questions, and know what to do next. Lung cancer is the first complete decision journey — more cancer journeys are in development.",
  path: "/",
  keywords: [
    "cancer next step",
    "cancer decision",
    "cancer navigation",
    "second opinion",
    "treatment comparison",
    "lung cancer decisions",
  ],
});

export default async function HomePage() {
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
          <p className="animate-rise text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            Decision Navigation
          </p>
          <h1 className="animate-rise mt-2 font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl md:text-6xl">
            Cancer Next Step
          </h1>

          <p className="animate-rise-delay mt-6 max-w-2xl font-heading text-xl font-medium tracking-[-0.02em] text-[var(--ink-soft)] md:text-2xl">
            Navigate your cancer journey with confidence.
          </p>
          <div className="animate-rise-delay mt-4 max-w-xl space-y-1 text-base text-[var(--muted)] md:text-lg">
            <p>Understand your options.</p>
            <p>Prepare better questions.</p>
            <p>Know your next step.</p>
          </div>

          <div className="animate-rise-delay mt-10 border-t border-[var(--line)]/80 pt-8">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-3xl">
              Start with your cancer journey.
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)] md:text-lg">
              Choose your cancer type and we&apos;ll guide you to the decisions
              that matter most.
            </p>
            <div className="mt-6 max-w-3xl">
              <CancerJourneyNav
                cancers={cancerOptions}
                lungMoments={LUNG_DECISION_MOMENTS}
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
              <Link
                href={item.href}
                className="group flex items-baseline justify-between gap-4 py-4 transition hover:bg-[rgba(15,118,110,0.04)]"
              >
                <span className="font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] md:text-xl">
                  {item.question}
                </span>
                <span className="shrink-0 text-sm font-semibold text-[var(--accent)]">
                  Open →
                </span>
              </Link>
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
            {HOME_FEATURED_LUNG_JOURNEY.map((step, index) => (
              <li key={step.href}>
                <Link
                  href={step.href}
                  className="group flex items-baseline gap-3 border-b border-[var(--line)] py-4 lg:border-b-0 lg:border-l lg:border-[var(--line)] lg:px-5 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
                >
                  <span className="font-heading text-sm font-semibold text-[var(--accent)]">
                    {index + 1}
                  </span>
                  <span className="font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                    {step.label}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <Link
              href="/cancers/lung-cancer#map-locator"
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
            const complete = cancer.slug === "lung-cancer";
            return (
              <Link
                key={cancer.id}
                href={
                  complete
                    ? "/cancers/lung-cancer#decision-moment"
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
