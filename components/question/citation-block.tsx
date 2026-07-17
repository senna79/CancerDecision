import { Markdown } from "@/components/content/markdown";

/** AI-citable Direct Answer — short, quotable, decision-first */
export function CitationBlock({
  answer,
  questionTitle,
  formHint = "Direct answer · under 100 words · citation-ready",
}: {
  answer: string;
  questionTitle: string;
  formHint?: string;
}) {
  return (
    <section
      id="citation-answer"
      aria-label="Direct answer"
      className="mt-5 scroll-mt-24 rounded-lg border-2 border-[var(--accent)]/35 bg-white/90 p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Direct answer · AI citation block
      </p>
      <h2 className="mt-1 font-heading text-lg font-semibold text-[var(--ink)] md:text-xl">
        {questionTitle}
      </h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-[var(--ink)] md:text-[1.05rem]">
        <Markdown content={answer} />
      </div>
      <p className="mt-3 text-[11px] text-[var(--muted)]">{formHint}</p>
    </section>
  );
}
