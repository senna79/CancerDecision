import { Markdown } from "@/components/content/markdown";

/** AI-citable Direct Answer — short, quotable, decision-first */
export function CitationBlock({
  answer,
  questionTitle,
  eyebrow = "Direct answer · AI citation block",
  formHint = "Direct answer · under 100 words · citation-ready",
  /** Hide repeated question title when H1 is already on the page */
  compact = false,
}: {
  answer: string;
  questionTitle: string;
  /** Small label above the answer title */
  eyebrow?: string;
  formHint?: string;
  compact?: boolean;
}) {
  return (
    <section
      id="citation-answer"
      aria-label="Direct answer"
      className={
        compact
          ? "mt-4 scroll-mt-24 rounded-lg border border-[var(--accent)]/30 bg-white/90 px-4 py-4 md:px-5 md:py-5"
          : "mt-5 scroll-mt-24 rounded-lg border-2 border-[var(--accent)]/35 bg-white/90 p-5 md:p-6"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        {eyebrow}
      </p>
      {compact ? null : (
        <h2 className="mt-1 font-heading text-lg font-semibold text-[var(--ink)] md:text-xl">
          {questionTitle}
        </h2>
      )}
      <div
        className={
          compact
            ? "mt-2 space-y-2 text-base leading-relaxed text-[var(--ink)] md:text-[1.05rem]"
            : "mt-3 space-y-3 text-base leading-relaxed text-[var(--ink)] md:text-[1.05rem]"
        }
      >
        <Markdown content={answer} />
      </div>
      {compact ? null : (
        <p className="mt-3 text-[11px] text-[var(--muted)]">{formHint}</p>
      )}
    </section>
  );
}
