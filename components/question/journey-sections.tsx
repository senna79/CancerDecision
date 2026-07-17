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

export function JourneySections({ question }: { question: Question }) {
  const hasJourney =
    question.decision_context ||
    question.when_this_may_help.length > 0 ||
    question.when_it_may_not_help.length > 0 ||
    question.options_and_tradeoffs.length > 0 ||
    question.records_to_prepare.length > 0 ||
    question.next_steps.length > 0 ||
    question.if_opinions_conflict.length > 0;

  if (!hasJourney) return null;

  return (
    <>
      {question.decision_context ? (
        <Section title="Decision context">
          <p>{question.decision_context}</p>
        </Section>
      ) : null}

      {question.when_this_may_help.length > 0 ? (
        <Section title="This question matters most when">
          <BulletBlock items={question.when_this_may_help} />
        </Section>
      ) : null}

      {question.when_it_may_not_help.length > 0 ? (
        <Section title="When it may not change the decision">
          <BulletBlock items={question.when_it_may_not_help} />
        </Section>
      ) : null}

      {question.options_and_tradeoffs.length > 0 ? (
        <Section title="Options, benefits, and trade-offs">
          <BulletBlock items={question.options_and_tradeoffs} />
        </Section>
      ) : null}

      {question.records_to_prepare.length > 0 ? (
        <Section title="Records to prepare">
          <BulletBlock items={question.records_to_prepare} />
        </Section>
      ) : null}

      {question.next_steps.length > 0 ? (
        <Section title="Suggested next steps">
          <BulletBlock items={question.next_steps} />
        </Section>
      ) : null}

      {question.if_opinions_conflict.length > 0 ? (
        <Section title="If doctors disagree">
          <BulletBlock items={question.if_opinions_conflict} />
        </Section>
      ) : null}
    </>
  );
}
