import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Timing anxiety — “can I wait?” without medical directives */
export function TimingAnxiety({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (
    !modules.timingTitle ||
    !modules.timingLead ||
    !modules.timingDependsIntro ||
    !modules.timingDependsOn?.length ||
    !modules.timingClose
  ) {
    return null;
  }

  return (
    <Section id="timing-anxiety" title={modules.timingTitle}>
      <p>{modules.timingLead}</p>
      {modules.timingConcern ? (
        <p className="mt-3 rounded-md border border-[var(--line)] bg-white/70 px-4 py-3 font-medium text-[var(--ink)]">
          “{modules.timingConcern}”
        </p>
      ) : null}
      <p className="mt-3 text-sm font-medium text-[var(--ink)]">
        {modules.timingDependsIntro}
      </p>
      <ul className="mt-2 space-y-2">
        {modules.timingDependsOn.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {modules.timingAsk ? (
        <div className="mt-4 rounded-md border border-[var(--accent)]/25 bg-[rgba(15,118,110,0.06)] px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            A useful question to ask your care team
          </p>
          <p className="mt-1 font-medium text-[var(--ink)]">
            “{modules.timingAsk}”
          </p>
        </div>
      ) : null}
      <p className="mt-4 text-sm text-[var(--ink-soft)]">{modules.timingClose}</p>
    </Section>
  );
}
