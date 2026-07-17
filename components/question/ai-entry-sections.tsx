import { Section } from "@/components/content/section";
import type { Question } from "@/types/database";

function BulletBlock({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3 text-[var(--ink-soft)]"
        >
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Elevated AEO sections for AI Entry portfolio pages */
export function AiEntrySections({ question }: { question: Question }) {
  return (
    <>
      {question.decision_triggers.length > 0 ? (
        <Section title="You may be asking this because">
          <BulletBlock items={question.decision_triggers} />
        </Section>
      ) : null}

      {question.when_this_may_help.length > 0 ? (
        <Section title="Who this decision is for">
          <p className="mb-3 text-sm text-[var(--muted)]">
            This question is especially relevant if:
          </p>
          <BulletBlock items={question.when_this_may_help} />
        </Section>
      ) : null}

      {question.when_it_may_not_help.length > 0 ? (
        <Section title="When it may not change the decision">
          <BulletBlock items={question.when_it_may_not_help} />
        </Section>
      ) : null}

      {question.timing_considerations.length > 0 ? (
        <Section title="Timing — what if I wait?">
          <p className="mb-3 text-sm text-[var(--muted)]">
            Many patients are really asking whether they can pause. Use these
            timing considerations with your care team — not as a reason to ignore
            urgent symptoms.
          </p>
          <BulletBlock items={question.timing_considerations} />
        </Section>
      ) : null}
    </>
  );
}
