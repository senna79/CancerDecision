import Link from "next/link";
import { SituationGuidedRouter } from "@/components/journey/situation-guided-router";
import { LUNG_DECISION_MOMENTS } from "@/lib/journey/decision-moments";
import { getCancers, getStories } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Navigate Cancer Treatment Decisions",
  description:
    "Cancer Next Step helps you understand options, prepare better questions, and know what to do next. Start with lung cancer — the first complete cancer decision journey.",
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

  const lung = cancers.find((c) => c.slug === "lung-cancer");
  const otherCancers = cancers.filter((c) => c.slug !== "lung-cancer");

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
          <p className="animate-rise font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-7xl">
            Cancer Next Step
          </p>
          <p className="animate-rise-delay mt-3 max-w-2xl text-base font-medium tracking-[-0.01em] text-[var(--ink-soft)] md:text-lg">
            Understand your options. Know your next step.
          </p>
          <h1 className="animate-rise-delay mt-5 max-w-3xl font-heading text-2xl font-medium tracking-[-0.02em] text-[var(--ink-soft)] md:text-3xl">
            Know your next step in a cancer decision
          </h1>
          <p className="animate-rise-delay mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Not an encyclopedia. A navigation path — so you leave knowing what
            to do next, not only what cancer is.
          </p>
          <p className="animate-rise-delay mt-3 max-w-2xl text-base font-medium text-[var(--ink-soft)]">
            Start with lung cancer — the first complete cancer decision journey.
          </p>

          <div className="animate-rise-delay mt-8 max-w-3xl">
            <SituationGuidedRouter
              moments={LUNG_DECISION_MOMENTS}
              footer={
                <>
                  Other cancer guides are structured the same way and will deepen
                  over time.{" "}
                  <Link
                    href="/cancers"
                    className="font-semibold text-[var(--accent)] hover:underline"
                  >
                    Browse all guides
                  </Link>
                  {lung ? (
                    <>
                      {" "}
                      ·{" "}
                      <Link
                        href="/cancers/lung-cancer#decision-moment"
                        className="font-semibold text-[var(--accent)] hover:underline"
                      >
                        Open the lung decision center
                      </Link>
                    </>
                  ) : null}
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
          Other cancer guides
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Lung cancer is the first complete case. Other centers share the same
          decision framework and will deepen over time — not a different product.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherCancers.map((cancer) => (
            <Link
              key={cancer.id}
              href={`/cancers/${cancer.slug}`}
              className="group border-b border-[var(--line)] py-3 transition hover:border-[var(--accent)]"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                {cancer.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                {cancer.overview}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]/70">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Illustrative decision journeys
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Examples of how patients compare options — not miracle recoveries,
            and not verified testimonials.
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
