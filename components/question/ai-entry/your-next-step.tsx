import { TrackLink } from "@/components/analytics/track-link";
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
      <ol className="mt-5 list-decimal space-y-4 pl-5 text-base font-medium text-[var(--ink)]">
        {modules.nextStepActions.map((action) => (
          <li key={action.label}>
            <span>{action.label}</span>
            {action.examples?.length ? (
              <ul className="mt-2 list-none space-y-1 pl-0 text-sm font-normal text-[var(--ink-soft)]">
                {action.examples.map((example) => (
                  <li key={example} className="flex gap-2">
                    <span className="text-[var(--muted)]">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="mt-6 border-t border-[var(--accent)]/20 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          Continue your Journey
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <TrackLink
            href={modules.nextStepHref}
            event="next_step_click"
            eventProps={{
              href: modules.nextStepHref,
              role: "primary",
            }}
            className="inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
          >
            {modules.nextStepCtaLabel} →
          </TrackLink>
          {modules.nextStepSecondaryHref &&
          modules.nextStepSecondaryCtaLabel ? (
            <TrackLink
              href={modules.nextStepSecondaryHref}
              event="next_step_click"
              eventProps={{
                href: modules.nextStepSecondaryHref,
                role: "secondary",
              }}
              className="inline-flex rounded-md border border-[var(--accent)] bg-white/90 px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:bg-white"
            >
              {modules.nextStepSecondaryCtaLabel} →
            </TrackLink>
          ) : null}
        </div>
        <p className="mt-2 text-xs text-[var(--muted)]">
          {modules.nextStepCtaMeta}
          {modules.nextStepSecondaryMeta
            ? ` · ${modules.nextStepSecondaryMeta}`
            : ""}
        </p>
      </div>
    </section>
  );
}
