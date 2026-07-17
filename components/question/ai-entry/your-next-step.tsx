import Link from "next/link";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** North-star CTA — leave with a clear next action */
export function YourNextStep({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <section
      id="your-next-step"
      className="mt-10 scroll-mt-24 rounded-lg border-2 border-[var(--accent)]/40 bg-[rgba(15,118,110,0.07)] p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Before you leave · 3-minute focus
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold text-[var(--ink)] md:text-3xl">
        {modules.nextStepTitle}
      </h2>
      <p className="mt-2 text-sm text-[var(--muted)]">{modules.nextStepLead}</p>
      <ol className="mt-5 list-decimal space-y-3 pl-5 text-base font-medium text-[var(--ink)]">
        {modules.nextStepActions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ol>
      <div className="mt-6 border-t border-[var(--accent)]/20 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          Continue your Journey
        </p>
        <Link
          href={modules.nextStepHref}
          className="mt-3 inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
        >
          {modules.nextStepCtaLabel} →
        </Link>
        <p className="mt-2 text-xs text-[var(--muted)]">
          {modules.nextStepCtaMeta}
        </p>
      </div>
    </section>
  );
}
