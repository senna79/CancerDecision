import { Markdown } from "@/components/content/markdown";

/** AI-citable Direct Answer — mandatory 4-sentence form in summary */
export function CitationBlock({
  answer,
  questionTitle,
}: {
  answer: string;
  questionTitle: string;
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
      <p className="mt-1 text-sm text-[var(--muted)]">
        Quotable answer to:{" "}
        <span className="font-medium text-[var(--ink-soft)]">{questionTitle}</span>
      </p>
      <div className="mt-3 text-base leading-relaxed text-[var(--ink)] md:text-[1.05rem]">
        <Markdown content={answer} />
      </div>
      <p className="mt-3 text-[11px] text-[var(--muted)]">
        Form: direct answer → when it matters → when it may not → next step
      </p>
    </section>
  );
}
