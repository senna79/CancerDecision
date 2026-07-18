import Link from "next/link";
import { LUNG_TREATMENT_LANDSCAPE } from "@/lib/content/lung-treatment-landscape";

const content = LUNG_TREATMENT_LANDSCAPE;

export function TreatmentLandscape() {
  return (
    <article className="space-y-14 md:space-y-16">
      <header className="relative overflow-hidden border-b border-[var(--line)] pb-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(15,118,110,0.12),transparent_45%),linear-gradient(180deg,rgba(231,238,233,0.55),transparent)]"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            {content.eyebrow}
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {content.lead}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
            {content.notThis}
          </p>
        </div>
      </header>

      <section aria-labelledby="landscape-map">
        <h2
          id="landscape-map"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.mapTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">{content.mapLead}</p>

        <div className="mt-8">
          <p className="text-center font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
            Lung cancer treatment
          </p>
          <div
            aria-hidden
            className="mx-auto mt-3 h-8 w-px bg-[var(--line)]"
          />
          <ul className="mt-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.topBranches.map((branch) => (
              <li
                key={branch.id}
                className="border-t-2 border-[var(--accent)]/50 pt-3"
              >
                <p className="font-heading text-lg font-semibold text-[var(--ink)]">
                  {branch.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {branch.note}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-l-2 border-[var(--accent)]/30 pl-5 md:pl-6">
            <p className="text-sm font-semibold text-[var(--ink)]">
              Under systemic therapy
            </p>
            <ul className="mt-3 grid gap-4 sm:grid-cols-3">
              {content.systemicBranches.map((branch) => (
                <li key={branch.id}>
                  <p className="font-medium text-[var(--ink)]">{branch.name}</p>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">
                    {branch.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="landscape-approaches">
        <h2
          id="landscape-approaches"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.approachesTitle}
        </h2>
        <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {content.approaches.map((approach) => (
            <div key={approach.id} className="py-6 md:py-7">
              <div className="md:grid md:grid-cols-[minmax(0,12rem)_1fr] md:gap-8">
                <h3 className="font-heading text-xl font-semibold text-[var(--ink)]">
                  {approach.name}
                </h3>
                <div className="mt-3 space-y-3 md:mt-0">
                  <p className="text-[var(--ink-soft)] leading-relaxed">
                    {approach.what}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    <span className="font-semibold text-[var(--ink)]">
                      When it may be discussed:{" "}
                    </span>
                    {approach.whenDiscussed}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      Questions to ask
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {approach.questions.map((q) => (
                        <li
                          key={q}
                          className="flex gap-2.5 text-sm text-[var(--ink-soft)]"
                        >
                          <span
                            className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]"
                            aria-hidden
                          />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <Link
                      href={approach.entryHref}
                      className="text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      {approach.entryLabel} →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="landscape-emerging"
        className="border-t border-[var(--line)] pt-10"
      >
        <h2
          id="landscape-emerging"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]"
        >
          {content.emergingTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.emergingLead}
        </p>
        <ul className="mt-5 max-w-2xl space-y-2">
          {content.emergingItems.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm text-[var(--ink-soft)]"
            >
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-2xl border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
          Ask your care team: “{content.emergingAsk}”
        </p>
      </section>

      <section
        aria-labelledby="landscape-continue"
        className="border-t border-[var(--line)] pt-10"
      >
        <h2
          id="landscape-continue"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]"
        >
          {content.continueTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.continueLead}
        </p>
        <ul className="mt-6 space-y-4">
          {content.continueLinks.map((link) => (
            <li key={link.href} className="border-b border-[var(--line)] pb-4">
              <Link
                href={link.href}
                className="group block transition hover:border-[var(--accent)]"
              >
                <span className="font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                  {link.label}
                </span>
                <span className="mt-0.5 block text-sm text-[var(--ink-soft)]">
                  {link.hint}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-[var(--muted)]">
          Prefer situation-based navigation?{" "}
          <Link
            href="/cancers/lung-cancer#decision-moment"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Back to where you are now
          </Link>
        </p>
      </section>
    </article>
  );
}
