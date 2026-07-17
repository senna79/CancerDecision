import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Why this question appears now — for patients + AI search intent */
export function DecisionTriggers({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  const hasGroups = (modules.triggerGroups?.length ?? 0) > 0;
  const hasFlat = (modules.triggers?.length ?? 0) > 0;
  if (!hasGroups && !hasFlat) return null;

  return (
    <Section id="decision-triggers" title={modules.triggersTitle}>
      {hasGroups ? (
        <div className="space-y-5">
          {modules.triggerGroups!.map((group) => (
            <article
              key={group.heading}
              className="rounded-lg border border-[var(--line)] bg-white/70 px-5 py-4"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
                {group.heading}
              </h3>
              {group.lead ? (
                <p className="mt-2 text-sm text-[var(--muted)]">{group.lead}</p>
              ) : null}
              <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--muted)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <>
          {modules.triggersLead ? (
            <p className="text-sm text-[var(--muted)]">{modules.triggersLead}</p>
          ) : null}
          <ul className="mt-3 space-y-2">
            {modules.triggers!.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3 text-[var(--ink-soft)]"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
