import Link from "next/link";
import { cancerSituationMapHref } from "@/lib/journey/decision-moments";
import type { DecisionGraphNode } from "@/lib/os/decision-graph";

function LinkList({
  title,
  items,
}: {
  title: string;
  items: DecisionGraphNode["next"];
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        {title}
      </p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            {item.href ? (
              <Link
                href={item.href}
                className="font-medium text-[var(--accent)] hover:underline"
              >
                {item.stateLabel}
                {item.optional ? " (optional)" : ""}
              </Link>
            ) : (
              <span className="text-[var(--ink-soft)]">{item.stateLabel}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Graph-driven journey panel — “you are here / next / related”
 * Complements JourneyProgressRail; does not replace the full Decision Map.
 */
export function DecisionJourneyNav({
  node,
  cancerSlug,
  cancerName,
}: {
  node: DecisionGraphNode;
  cancerSlug: string;
  cancerName: string;
}) {
  return (
    <aside
      id="decision-journey"
      className="mt-6 scroll-mt-24 rounded-lg border border-[var(--accent)]/25 bg-white/85 px-4 py-4 md:px-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Your decision journey
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-[var(--ink)]">
            {cancerName} Decision Journey
          </p>
        </div>
        <Link
          href={cancerSituationMapHref(cancerSlug)}
          className="text-xs font-semibold text-[var(--accent)] hover:underline"
        >
          Full map →
        </Link>
      </div>

      <div className="mt-3 rounded-md border border-[var(--line)] bg-[var(--paper)]/80 px-3 py-2.5">
        <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
          You are here
        </p>
        <p className="mt-0.5 font-semibold text-[var(--ink)]">{node.stateLabel}</p>
        <p className="mt-1 text-sm text-[var(--ink-soft)]">{node.summary}</p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <LinkList title="Came from" items={node.previous.slice(0, 4)} />
        <LinkList title="Likely next" items={node.next.slice(0, 5)} />
        <LinkList title="Also related" items={node.related.slice(0, 5)} />
      </div>

      <p className="mt-4 text-xs text-[var(--muted)]">
        This is a decision path, not a fixed sequence — your care team still
        guides what fits your situation.
      </p>
    </aside>
  );
}
