import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function WhyDecisionMatters({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <Section id="why-this-decision-matters" title={modules.whyTitle}>
      <p>{modules.whyLead}</p>
      {modules.whyBody?.map((line) => (
        <p key={line} className="mt-3">
          {line}
        </p>
      ))}
      {modules.whyQuestions.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {modules.whyQuestions.map((q) => (
            <li
              key={q}
              className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{q}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {modules.whyDependsIntro && modules.whyDependsOn?.length ? (
        <>
          <p className="mt-4">{modules.whyDependsIntro}</p>
          <ul className="mt-2 space-y-2">
            {modules.whyDependsOn.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {modules.whyNotQuestion || modules.whyBetterQuestion ? (
        <div className="mt-4 space-y-3 rounded-lg border border-[var(--line)] bg-white/70 px-4 py-4">
          {modules.whyNotQuestion ? (
            <div>
              {modules.whyNotLabel ? (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {modules.whyNotLabel}
                </p>
              ) : null}
              <p className="mt-1 text-[var(--ink-soft)]">
                “{modules.whyNotQuestion}”
              </p>
            </div>
          ) : null}
          {modules.whyBetterQuestion ? (
            <div>
              {modules.whyBetterLabel ? (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                  {modules.whyBetterLabel}
                </p>
              ) : null}
              <p className="mt-1 font-medium text-[var(--ink)]">
                “{modules.whyBetterQuestion}”
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
      {modules.whyClose.length > 0 ? (
        <div className="mt-4 space-y-2">
          {modules.whyClose.map((line) => (
            <p key={line} className="font-medium text-[var(--ink)]">
              {line}
            </p>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
