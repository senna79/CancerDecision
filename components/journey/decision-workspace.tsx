import Link from "next/link";
import type { Question } from "@/types/database";
import type { JourneyContext } from "@/lib/journey/engine";
import { buildNextActionBundle } from "@/lib/journey/next-actions";

export function DecisionWorkspace({
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
    <aside
      id="what-to-do-next"
      className="my-6 scroll-mt-24 rounded-lg border-2 border-[var(--accent)]/40 bg-[var(--paper-deep)]/90 p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Your next step · 3-minute focus
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold text-[var(--ink)] md:text-3xl">
        What to do next
      </h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Leave this page with actions — not only information.
      </p>

      <div className="mt-5 rounded-md border border-[var(--line)] bg-white/80 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          You are here
        </p>
        <p className="mt-1 font-semibold text-[var(--ink)]">{bundle.hereLabel}</p>
        <p className="mt-1 text-sm text-[var(--ink-soft)]">{bundle.hereSummary}</p>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">
            Before deciding
          </h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-[var(--ink-soft)]">
            {bundle.beforeDeciding.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">
            Ask your doctor
          </h3>
          {bundle.askDoctor.length > 0 ? (
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-[var(--ink-soft)]">
              {bundle.askDoctor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          ) : (
            <p className="mt-2 text-sm text-[var(--muted)]">
              Write one question that would change your next appointment.
            </p>
          )}
        </div>
      </div>

      {bundle.continueHref && bundle.continueLabel ? (
        <div className="mt-5 border-t border-[var(--line)] pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Continue
          </p>
          <Link
            href={bundle.continueHref}
            className="mt-2 inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
          >
            Next: {bundle.continueLabel} →
          </Link>
        </div>
      ) : null}
    </aside>
  );
}
