import Link from "next/link";
import type { DecisionMapNode } from "@/types/database";

export function StoryJourneyLoop({
  cancerSlug,
  cancerName,
  currentNode,
  nextNode,
  nextQuestionSlug,
}: {
  cancerSlug: string;
  cancerName: string;
  currentNode: DecisionMapNode;
  nextNode: DecisionMapNode | null;
  nextQuestionSlug: string | null;
}) {
  return (
    <section className="mt-10 rounded-lg border border-[var(--accent)]/30 bg-[rgba(15,118,110,0.06)] p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        If you are at this stage
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold text-[var(--ink)]">
        Return to the decision journey
      </h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        This illustrative scenario sits at{" "}
        <span className="font-medium text-[var(--ink)]">
          {currentNode.label}
        </span>
        . Use it to orient — then continue the path.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href={`/cancers/${cancerSlug}#decision-map`}
          className="inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
        >
          Open {cancerName} Decision Map
        </Link>
        {nextQuestionSlug && nextNode ? (
          <Link
            href={`/questions/${nextQuestionSlug}`}
            className="inline-flex rounded-md border border-[var(--accent)] bg-white/80 px-4 py-2.5 text-sm font-semibold text-[var(--ink)] hover:border-[var(--accent)]"
          >
            Next step: {nextNode.label.replace(/^\d+\.\s*/, "")} →
          </Link>
        ) : null}
        {currentNode.question_slugs[0] ? (
          <Link
            href={`/questions/${currentNode.question_slugs[0]}`}
            className="inline-flex rounded-md border border-[var(--line)] bg-white/70 px-4 py-2.5 text-sm font-semibold text-[var(--ink-soft)] hover:border-[var(--accent)]"
          >
            Explore this stage&apos;s question →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
