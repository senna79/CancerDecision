import Link from "next/link";
import type { Question } from "@/types/database";
import type { JourneyContext } from "@/lib/journey/engine";
import { buildNextActionBundle } from "@/lib/journey/next-actions";

/** End-of-page recap so the 3-minute path closes with a clear action. */
export function NextActionClose({
  question,
  journey,
  cancerSlug,
}: {
  question: Question;
  journey: JourneyContext | null;
  cancerSlug?: string | null;
}) {
  const bundle = buildNextActionBundle(question, journey, cancerSlug);

  return (
    <section className="mt-10 rounded-lg border border-[var(--accent)]/35 bg-[rgba(15,118,110,0.07)] p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Before you leave
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold text-[var(--ink)]">
        Your next step
      </h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        You are at <span className="font-medium text-[var(--ink)]">{bundle.hereLabel}</span>.
        Do these three things next:
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm font-medium text-[var(--ink)]">
        {bundle.beforeDeciding.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      {bundle.askDoctor[0] ? (
        <p className="mt-4 text-sm text-[var(--ink-soft)]">
          Bring this question to your visit:{" "}
          <span className="font-medium text-[var(--ink)]">
            “{bundle.askDoctor[0]}”
          </span>
        </p>
      ) : null}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href="#what-to-do-next"
          className="inline-flex rounded-md border border-[var(--accent)] bg-white/90 px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-white"
        >
          Revisit What to do next
        </a>
        {bundle.continueHref && bundle.continueLabel ? (
          <Link
            href={bundle.continueHref}
            className="inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
          >
            Continue: {bundle.continueLabel} →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
