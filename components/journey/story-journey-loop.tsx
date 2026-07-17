import Link from "next/link";
import type { DecisionMapNode } from "@/types/database";

export function StoryJourneyLoop({
  cancerSlug,
  cancerName,
  currentNode,
  nextNode,
  nextQuestionSlug,
  questionTitles = {},
  treatmentNames = {},
}: {
  cancerSlug: string;
  cancerName: string;
  currentNode: DecisionMapNode;
  nextNode: DecisionMapNode | null;
  nextQuestionSlug: string | null;
  questionTitles?: Record<string, string>;
  treatmentNames?: Record<string, string>;
}) {
  const state =
    currentNode.state_label ?? currentNode.label.replace(/^\d+\.\s*/, "");

  return (
    <section className="mt-10 rounded-lg border border-[var(--accent)]/30 bg-[rgba(15,118,110,0.06)] p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Knowledge-graph connection
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold text-[var(--ink)]">
        This story connects to
      </h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Illustrative scenario for{" "}
        <span className="font-medium text-[var(--ink)]">{state}</span> — use it
        to orient, then continue the decision path.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Decision node
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--ink)]">{state}</p>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            {currentNode.summary}
          </p>
        </div>
        {currentNode.question_slugs.length > 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
              Doctor questions / decision steps
            </p>
            <ul className="mt-2 space-y-1.5">
              {currentNode.question_slugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/questions/${slug}`}
                    className="text-sm text-[var(--accent)] hover:underline"
                  >
                    {questionTitles[slug] ?? "Open linked question"} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {currentNode.treatment_slugs.length > 0 ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Treatment comparison
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {currentNode.treatment_slugs.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/treatments/${slug}`}
                  className="rounded-md border border-[var(--line)] bg-white/80 px-2.5 py-1 text-xs text-[var(--ink-soft)] hover:border-[var(--accent)]"
                >
                  {treatmentNames[slug] ?? slug.replaceAll("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

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
            Next:{" "}
            {nextNode.state_label ??
              nextNode.label.replace(/^\d+\.\s*/, "")}{" "}
            →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
