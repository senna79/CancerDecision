import type { Question } from "@/types/database";
import type { JourneyContext } from "@/lib/journey/engine";

export function DecisionWorkspace({
  question,
  journey,
}: {
  question: Question;
  journey: JourneyContext;
}) {
  const stillNeed =
    question.records_to_prepare.length > 0
      ? question.records_to_prepare
      : question.key_factors.slice(0, 4);
  const nextActions =
    question.next_steps.length > 0
      ? question.next_steps
      : [
          "Write down what is still unknown",
          "Ask which next result would change the plan",
          `Continue to: ${journey.next?.node.label ?? "the decision map"}`,
        ];

  return (
    <aside className="my-8 rounded-lg border border-[var(--accent)]/30 bg-[var(--paper-deep)]/80 p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Decision workspace
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold text-[var(--ink)]">
        Organize this step
      </h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Use this panel to prepare — not just to read.
      </p>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">
            Current stage
          </h3>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            {journey.currentNode.label}
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {journey.currentNode.summary}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">
            Things I still need
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--ink-soft)]">
            {stillNeed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">
            Questions for my doctor
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--ink-soft)]">
            {question.doctor_questions.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)]">
            After this step
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--ink-soft)]">
            {nextActions.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {journey.next ? (
            <p className="mt-3 text-sm font-medium text-[var(--accent)]">
              Suggested next: {journey.next.node.label}
            </p>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
