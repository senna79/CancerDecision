import Link from "next/link";
import { getCancers, getDecisionTopics, getStories } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Make Better Cancer Treatment Decisions",
  description:
    "Understand your options, compare treatments, and explore global medical choices with structured cancer decision knowledge.",
  path: "/",
  keywords: [
    "cancer decisions",
    "treatment comparison",
    "second opinion",
    "global cancer care",
  ],
});

export default async function HomePage() {
  const [cancers, topics, stories] = await Promise.all([
    getCancers(),
    getDecisionTopics(),
    getStories({ limit: 3 }),
  ]);

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
        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-5 py-16 md:px-8 md:py-24">
          <p className="animate-rise font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-7xl">
            Global Cancer Decision
          </p>
          <h1 className="animate-rise-delay mt-6 max-w-3xl font-heading text-2xl font-medium tracking-[-0.02em] text-[var(--ink-soft)] md:text-3xl">
            Make Better Cancer Treatment Decisions
          </h1>
          <p className="animate-rise-delay mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Understand your options, compare treatments, and explore global
            medical choices.
          </p>
          <div className="animate-rise-delay mt-8 flex flex-wrap gap-3">
            <Link
              href="/cancers"
              className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d655e]"
            >
              Explore cancer guides
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)]"
            >
              Trust & disclaimer
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
          Start with your cancer type
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Start with the cancer type or decision you are facing. Each guide
          brings together diagnosis questions, treatment choices, second-opinion
          guidance, decision journeys, and international options.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cancers.map((cancer) => (
            <Link
              key={cancer.id}
              href={`/cancers/${cancer.slug}`}
              className="group rounded-lg border border-[var(--line)] bg-white/70 p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_12px_30px_rgba(23,48,42,0.08)]"
            >
              <h3 className="font-heading text-xl font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                {cancer.name}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
                {cancer.overview}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper-deep)]/70">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
            Decision Topics
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Start from the decision you are facing right now.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/cancers?topic=${topic.key}`}
                className="rounded-lg border border-transparent bg-white/80 px-5 py-4 transition hover:border-[var(--accent)]"
              >
                <p className="font-semibold text-[var(--ink)]">{topic.label}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
          Decision journey examples
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Illustrative decision scenarios that show how patients compare options
          — not miracle recovery stories, and not verified patient testimonials.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="rounded-lg border border-[var(--line)] bg-white/70 p-5 transition hover:border-[var(--accent)]"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                Illustrative · {story.country} · {story.age_range}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--ink)]">
                {story.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                {story.decision_challenge}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
