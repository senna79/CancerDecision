import Link from "next/link";
import type { DecisionMap } from "@/types/database";

export function DecisionMapView({
  map,
  questionTitles = {},
  treatmentNames = {},
  storyTitles = {},
}: {
  map: DecisionMap;
  questionTitles?: Record<string, string>;
  treatmentNames?: Record<string, string>;
  storyTitles?: Record<string, string>;
}) {
  const nodes = [...map.nodes].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <section id="decision-map" className="scroll-mt-24 py-8">
      <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        {map.title}
      </h2>
      <p className="mt-2 max-w-3xl text-[var(--muted)] leading-relaxed">
        {map.intro}
      </p>

      <ol className="mt-8 space-y-0">
        {nodes.map((node, index) => (
          <li key={node.id} className="relative pl-8 md:pl-10">
            {index < nodes.length - 1 ? (
              <span
                aria-hidden
                className="absolute left-[0.7rem] top-8 bottom-0 w-px bg-[var(--accent)]/35 md:left-[0.85rem]"
              />
            ) : null}
            <span
              aria-hidden
              className="absolute left-0 top-2 flex size-6 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper)] text-[10px] font-bold text-[var(--accent)] md:size-7 md:text-xs"
            >
              {node.sort_order}
            </span>

            <article className="mb-4 rounded-lg border border-[var(--line)] bg-white/80 p-4 transition hover:border-[var(--accent)]/50 md:p-5">
              <h3 className="font-heading text-xl font-semibold text-[var(--ink)]">
                {node.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                {node.summary}
              </p>

              {node.question_slugs.length > 0 ? (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Decision questions
                  </p>
                  <ul className="mt-2 space-y-2">
                    {node.question_slugs.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/questions/${slug}`}
                          className="text-sm font-medium text-[var(--accent)] hover:underline"
                        >
                          {questionTitles[slug] ?? "Open this step"} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {node.treatment_slugs.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {node.treatment_slugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/treatments/${slug}`}
                      className="rounded-md border border-[var(--line)] bg-[var(--paper-deep)]/80 px-2.5 py-1 text-xs text-[var(--ink-soft)] hover:border-[var(--accent)]"
                    >
                      {treatmentNames[slug] ?? slug.replaceAll("-", " ")}
                    </Link>
                  ))}
                </div>
              ) : null}

              {node.story_slugs.length > 0 ? (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Illustrative journey
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {node.story_slugs.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/stories/${slug}`}
                          className="text-sm text-[var(--accent)] hover:underline"
                        >
                          {storyTitles[slug] ?? "View example scenario"} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
