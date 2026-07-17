import { Markdown } from "@/components/content/markdown";

export function SummaryPanel({ summary }: { summary: string }) {
  return (
    <section className="scroll-mt-24 py-6">
      <div className="rounded-lg border border-[var(--accent)]/25 bg-[rgba(15,118,110,0.06)] p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Short answer
        </p>
        <div className="mt-3 text-base leading-relaxed text-[var(--ink-soft)] md:text-[1.05rem]">
          <Markdown content={summary} />
        </div>
      </div>
    </section>
  );
}
