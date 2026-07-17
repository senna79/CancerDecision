import Link from "next/link";
import type { DecisionMap, DecisionMapNode } from "@/types/database";
import { outgoingNodes, sortedNodes } from "@/lib/journey/engine";

function NodeCard({
  node,
  map,
  questionTitles,
  treatmentNames,
  storyTitles,
}: {
  node: DecisionMapNode;
  map: DecisionMap;
  questionTitles: Record<string, string>;
  treatmentNames: Record<string, string>;
  storyTitles: Record<string, string>;
}) {
  const branches = outgoingNodes(map, node);

  return (
    <article className="rounded-lg border border-[var(--line)] bg-white/80 p-4 transition hover:border-[var(--accent)]/50 md:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-heading text-xl font-semibold text-[var(--ink)]">
          {node.label}
        </h3>
        {node.optional ? (
          <span className="rounded-md border border-dashed border-[var(--line)] px-2 py-0.5 text-[10px] uppercase tracking-wide text-[var(--muted)]">
            Optional
          </span>
        ) : null}
      </div>
      {node.state_label ? (
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
          {node.state_label}
        </p>
      ) : null}
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

      {branches.length > 0 ? (
        <div className="mt-4 border-t border-[var(--line)] pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Branches to
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {branches.map((branch) => (
              <li key={branch.id}>
                <a
                  href={`#${branch.id}`}
                  className="inline-flex rounded-md border border-[var(--accent)]/30 bg-[rgba(15,118,110,0.06)] px-2.5 py-1 text-xs font-medium text-[var(--ink)] hover:border-[var(--accent)]"
                >
                  {branch.state_label ?? branch.label.replace(/^\d+\.\s*/, "")}
                  {branch.optional ? " · optional" : ""}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

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
  const nodes = sortedNodes(map);
  const entry = nodes[0];
  const forkTargets =
    entry != null
      ? outgoingNodes(map, entry).filter((n) => !n.optional)
      : [];
  const forkIds = new Set(forkTargets.map((n) => n.id));
  const rest = nodes.filter(
    (n) => n.id !== entry?.id && !forkIds.has(n.id)
  );

  return (
    <section id="decision-map" className="scroll-mt-24 py-8">
      <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        {map.title}
      </h2>
      <p className="mt-2 max-w-3xl text-[var(--muted)] leading-relaxed">
        {map.intro}
      </p>
      <p className="mt-3 max-w-3xl text-sm text-[var(--ink-soft)]">
        Cancer decisions are rarely a straight line. After the first checkpoint,
        paths can fork — you may need biomarkers, treatment comparison, and a
        second-opinion review in parallel, not only in sequence.
      </p>

      {entry ? (
        <div id={entry.id} className="mt-8 scroll-mt-24">
          <NodeCard
            node={entry}
            map={map}
            questionTitles={questionTitles}
            treatmentNames={treatmentNames}
            storyTitles={storyTitles}
          />
        </div>
      ) : null}

      {forkTargets.length > 0 ? (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Decision fork — paths can run in parallel
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-3">
            {forkTargets.map((node) => (
              <div key={node.id} id={node.id} className="scroll-mt-24">
                <NodeCard
                  node={node}
                  map={map}
                  questionTitles={questionTitles}
                  treatmentNames={treatmentNames}
                  storyTitles={storyTitles}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {rest.length > 0 ? (
        <ol className="mt-6 space-y-4">
          {rest.map((node) => (
            <li key={node.id} id={node.id} className="scroll-mt-24">
              <NodeCard
                node={node}
                map={map}
                questionTitles={questionTitles}
                treatmentNames={treatmentNames}
                storyTitles={storyTitles}
              />
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}
