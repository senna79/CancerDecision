import Link from "next/link";
import type { JourneyContext } from "@/lib/journey/engine";

export function JourneyStepNav({
  journey,
  cancerSlug,
}: {
  journey: JourneyContext;
  cancerSlug: string;
}) {
  return (
    <section className="mt-8 rounded-lg border border-[var(--line)] bg-white/85 p-5">
      <h2 className="font-heading text-xl font-semibold text-[var(--ink)]">
        Keep moving along the path
      </h2>
      <p className="mt-1 text-sm text-[var(--muted)]">
        This is navigation, not a reading list. Choose previous, next, or an
        optional branch.
      </p>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {journey.previous?.questionSlug ? (
          <Link
            href={`/questions/${journey.previous.questionSlug}`}
            className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-3 transition hover:border-[var(--accent)]"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              Previous step
            </p>
            <p className="mt-1 font-semibold text-[var(--ink)]">
              {journey.previous.node.label}
            </p>
          </Link>
        ) : (
          <div className="rounded-lg border border-dashed border-[var(--line)] px-4 py-3 text-sm text-[var(--muted)]">
            You are at the start of the core path.
          </div>
        )}

        {journey.next?.questionSlug ? (
          <Link
            href={`/questions/${journey.next.questionSlug}`}
            className="rounded-lg border border-[var(--accent)] bg-[rgba(15,118,110,0.08)] px-4 py-3 transition hover:bg-[rgba(15,118,110,0.12)]"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
              Next step
            </p>
            <p className="mt-1 font-semibold text-[var(--ink)]">
              {journey.next.node.label}
            </p>
          </Link>
        ) : (
          <Link
            href={`/cancers/${cancerSlug}#decision-map`}
            className="rounded-lg border border-[var(--accent)] bg-[rgba(15,118,110,0.08)] px-4 py-3"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
              Core path complete
            </p>
            <p className="mt-1 font-semibold text-[var(--ink)]">
              Review the full decision map →
            </p>
          </Link>
        )}
      </div>

      {journey.optionalBranches.length > 0 ? (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Optional branches
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {journey.optionalBranches.map((branch) =>
              branch.questionSlug ? (
                <li key={branch.node.id}>
                  <Link
                    href={`/questions/${branch.questionSlug}`}
                    className="inline-block rounded-md border border-dashed border-[var(--line)] px-3 py-1.5 text-sm text-[var(--ink-soft)] hover:border-[var(--accent)]"
                  >
                    {branch.node.label}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
