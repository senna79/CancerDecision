import Link from "next/link";
import { CancerJourneyNav } from "@/components/home/cancer-journey-nav";
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
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,118,110,0.16),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(23,48,42,0.12),transparent_35%),linear-gradient(120deg,rgba(231,238,233,0.9),rgba(243,246,244,0.4))]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(15,118,110,0.18),transparent_55%,rgba(49,92,84,0.14))] blur-2xl animate-fade"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <h1 className="animate-rise font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-7xl">
            Cancer Next Step
          </h1>
          <p className="animate-rise-delay mt-4 max-w-2xl text-lg font-medium tracking-[-0.01em] text-[var(--ink-soft)] md:text-xl">
            Understand your options. Prepare better questions. Know your next
            step.
          </p>
          <p className="animate-rise-delay mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Not an encyclopedia — a decision path. Lung cancer is the first
            complete journey; more cancers will follow the same framework.
          </p>
          <div className="animate-rise-delay mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#choose-cancer"
              className="inline-flex items-center justify-center rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
            >
              Start with lung cancer
            </a>
            <a
              href="#journeys-in-development"
              className="text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              See journeys in development
            </a>
          </div>
        </div>
      </section>

      <section
        id="choose-cancer"
        className="scroll-mt-20 border-t border-[var(--line)] bg-[var(--paper-deep)]/40"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Choose your cancer
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Then tell us where you are — so you land on the next decision, not
            a library of everything.
          </p>
          <div className="mt-8 max-w-3xl">
            <CancerJourneyNav
              cancers={cancerOptions}
              lungMoments={LUNG_DECISION_MOMENTS}
            />
          </div>
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
