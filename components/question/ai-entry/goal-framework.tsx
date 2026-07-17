import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function GoalFramework({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.goalFrameworkTitle || !modules.goalFrameworkBlocks?.length) {
    return null;
  }

  return (
    <Section id="goal-framework" title={modules.goalFrameworkTitle}>
      {modules.goalFrameworkLead ? <p>{modules.goalFrameworkLead}</p> : null}
      <div className="mt-5 space-y-4">
        {modules.goalFrameworkBlocks.map((block) => (
          <article
            key={block.title}
            className="rounded-lg border border-[var(--line)] bg-white/75 px-5 py-4"
          >
            <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
              {block.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-[var(--ink)]">
              {block.questionsIntro}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
              {block.questions.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--muted)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {modules.goalNotQuestion || modules.goalBetterQuestion ? (
        <div className="mt-4 space-y-3 rounded-lg border border-[var(--line)] bg-white/70 px-4 py-4">
          {modules.goalNotQuestion ? (
            <div>
              {modules.goalNotLabel ? (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {modules.goalNotLabel}
                </p>
              ) : null}
              <p className="mt-1 text-[var(--ink-soft)]">
                “{modules.goalNotQuestion}”
              </p>
            </div>
          ) : null}
          {modules.goalBetterQuestion ? (
            <div>
              {modules.goalBetterLabel ? (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                  {modules.goalBetterLabel}
                </p>
              ) : null}
              <p className="mt-1 font-medium text-[var(--ink)]">
                “{modules.goalBetterQuestion}”
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
      {modules.goalFrameworkClose ? (
        <p className="mt-4 font-medium text-[var(--ink)]">
          {modules.goalFrameworkClose}
        </p>
      ) : null}
    </Section>
  );
}
