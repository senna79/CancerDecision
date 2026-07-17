import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function FirstDecisions({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <Section id="first-decisions" title={modules.firstDecisionsTitle}>
      <p className="text-sm text-[var(--muted)]">
        Three decisions that usually matter before locking a treatment path.
      </p>
      <div className="mt-5 space-y-5">
        {modules.firstDecisions.map((card, index) => (
          <article
            key={card.focus}
            className="rounded-lg border border-[var(--line)] bg-white/75 px-5 py-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              {card.title}
            </p>
            <h3 className="mt-1 font-heading text-xl font-semibold text-[var(--ink)]">
              {card.focus}
            </h3>

            {card.clarifyIntro ? (
              <p className="mt-3 text-sm text-[var(--ink-soft)]">
                {card.clarifyIntro}
              </p>
            ) : null}

            {card.clarify.length > 0 ? (
              <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
                {card.clarify.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--muted)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {card.examples && card.examples.length > 0 ? (
              <>
                {card.examplesIntro ? (
                  <p className="mt-3 text-sm text-[var(--ink-soft)]">
                    {card.examplesIntro}
                  </p>
                ) : null}
                <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
                  {card.examples.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--muted)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {card.ask && card.ask.length > 0 ? (
              <>
                {card.askIntro ? (
                  <p className="mt-3 text-sm font-medium text-[var(--ink)]">
                    {card.askIntro}
                  </p>
                ) : null}
                <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
                  {card.ask.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--muted)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="mt-4 border-t border-[var(--line)] pt-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Why this matters
              </p>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{card.why}</p>
            </div>
            <p className="sr-only">Decision {index + 1} of 3</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
