export function DoctorQuestionsPanel({
  questions,
}: {
  questions: string[];
}) {
  if (questions.length === 0) return null;

  return (
    <section className="scroll-mt-24 py-6">
      <div className="rounded-lg border border-amber-700/20 bg-amber-50/80 p-5 md:p-6">
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
          Questions to ask your doctor
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Bring these to your next visit to clarify the decision in front of you.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--ink-soft)]">
          {questions.map((q) => (
            <li key={q} className="leading-relaxed">
              {q}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
