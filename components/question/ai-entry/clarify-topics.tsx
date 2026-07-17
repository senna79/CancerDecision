import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function ClarifyTopics({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.clarifyTitle || !modules.clarifyGroups?.length) return null;

  return (
    <Section id="clarify-topics" title={modules.clarifyTitle}>
      <div className="space-y-5">
        {modules.clarifyGroups.map((group) => (
          <article
            key={group.heading}
            className="rounded-lg border border-[var(--line)] bg-white/75 px-5 py-5"
          >
            <h3 className="font-heading text-xl font-semibold text-[var(--ink)]">
              {group.heading}
            </h3>
            <p className="mt-3 text-sm text-[var(--ink-soft)]">
              {group.mayHelpIntro}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
              {group.mayHelp.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--muted)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {group.questions.length > 0 ? (
              <>
                <p className="mt-3 text-sm font-medium text-[var(--ink)]">
                  {group.questionsIntro}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
                  {group.questions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--muted)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
