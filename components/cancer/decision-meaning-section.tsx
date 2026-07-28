import Link from "next/link";

export type DecisionMeaningContent = {
  id: string;
  title: string;
  lead: string;
  passages: readonly {
    id: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
};

/** Always-visible, citation-oriented “what this means for the next decision” block. */
export function DecisionMeaningSection({
  content,
}: {
  content: DecisionMeaningContent;
}) {
  return (
    <section
      id={content.id}
      aria-labelledby="decision-meaning-title"
      className="scroll-mt-24"
    >
      <h2
        id="decision-meaning-title"
        className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
      >
        {content.title}
      </h2>
      <p className="mt-2 max-w-2xl text-[var(--muted)]">{content.lead}</p>
      <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {content.passages.map((passage) => (
          <div key={passage.id} id={passage.id} className="py-5 md:py-6">
            <p className="max-w-2xl text-[var(--ink-soft)] leading-relaxed">
              {passage.body}
            </p>
            <p className="mt-3">
              <Link
                href={passage.ctaHref}
                className="text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                {passage.ctaLabel} →
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
