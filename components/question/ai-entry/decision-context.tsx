import Link from "next/link";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Visible Decision Context for users + AI crawlers */
export function DecisionContext({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <aside
      id="decision-context"
      className="mt-5 rounded-md border border-[var(--line)] bg-[var(--paper)]/90 px-4 py-4 text-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Decision Context
      </p>
      <dl className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <dt className="text-xs text-[var(--muted)]">Cancer</dt>
          <dd className="font-medium text-[var(--ink)]">{modules.cancerLabel}</dd>
        </div>
        <div>
          <dt className="text-xs text-[var(--muted)]">Decision Moment</dt>
          <dd className="font-medium text-[var(--ink)]">
            {modules.decisionMoment}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs text-[var(--muted)]">You are exploring</dt>
          <dd className="font-medium text-[var(--ink)]">{modules.exploring}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs text-[var(--muted)]">Related decisions</dt>
          <dd className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
            {modules.relatedDecisions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-[var(--accent)] hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </dd>
        </div>
      </dl>
    </aside>
  );
}
