import Link from "next/link";
import {
  getDecisionGraphNodeById,
  LUNG_DECISION_GRAPH,
  type DecisionGraphLink,
  type DecisionGraphNode,
} from "@/lib/os/decision-graph";

function cleanLabel(label: string) {
  return label.replace(/^\d+\.\s*/, "");
}

function LocatorCard({
  link,
  role,
}: {
  link: DecisionGraphLink & { summary?: string };
  role: "previous" | "current" | "next";
}) {
  const roleLabel =
    role === "current" ? "You are here" : role === "previous" ? "Before" : "Next";

  return (
    <li
      className={
        role === "current"
          ? "rounded-md border border-[var(--accent)]/40 bg-[rgba(15,118,110,0.06)] px-4 py-4"
          : "rounded-md border border-[var(--line)] bg-white/80 px-4 py-4"
      }
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        {roleLabel}
      </p>
      <p className="mt-1 font-heading text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
        {link.stateLabel || cleanLabel(link.label)}
      </p>
      {link.summary ? (
        <p className="mt-1.5 line-clamp-2 text-sm text-[var(--muted)]">
          {link.summary}
        </p>
      ) : null}
      {link.href ? (
        <Link
          href={link.href}
          className="mt-3 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          Open this guide →
        </Link>
      ) : null}
    </li>
  );
}

function toCardLink(
  node: DecisionGraphNode,
  summary?: string
): DecisionGraphLink & { summary?: string } {
  return {
    id: node.id,
    slug: node.slug,
    label: node.label,
    stateLabel: node.stateLabel,
    href: node.href,
    optional: node.optional,
    summary,
  };
}

/**
 * Human-facing map strip: current node + close neighbors.
 * Not the full OS graph — that stays behind a technical fold.
 */
export function DecisionMapLocator({
  activeNodeId,
}: {
  /** OS moment id, e.g. node-biomarkers */
  activeNodeId?: string | null;
}) {
  const graph = LUNG_DECISION_GRAPH;
  const fallbackId = graph.nodes[0]?.id ?? "node-diagnosis";
  const current =
    getDecisionGraphNodeById(activeNodeId ?? fallbackId) ??
    getDecisionGraphNodeById(fallbackId);

  if (!current) return null;

  const previous = current.previous[0]
    ? getDecisionGraphNodeById(current.previous[0].id)
    : null;
  const nextNodes = current.next
    .slice(0, 2)
    .map((link) => getDecisionGraphNodeById(link.id))
    .filter((n): n is DecisionGraphNode => Boolean(n));

  const cards: Array<{
    link: DecisionGraphLink & { summary?: string };
    role: "previous" | "current" | "next";
  }> = [];

  if (previous) {
    cards.push({
      link: toCardLink(previous, previous.summary),
      role: "previous",
    });
  }
  cards.push({
    link: toCardLink(current, current.summary),
    role: "current",
  });
  for (const next of nextNodes) {
    if (cards.length >= 3) break;
    cards.push({
      link: toCardLink(next, next.summary),
      role: "next",
    });
  }

  return (
    <section
      id="map-locator"
      className="scroll-mt-24 rounded-lg border border-[var(--line)] bg-white/90 px-5 py-5 md:px-6 md:py-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        On the decision map
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
        Where this sits
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
        Your current decision and the nearest next steps — not the full graph.
      </p>

      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {cards.map((card) => (
          <LocatorCard key={`${card.role}-${card.link.id}`} {...card} />
        ))}
      </ul>

      <p className="mt-5 text-sm text-[var(--muted)]">
        Need every node?{" "}
        <a
          href="#decision-map"
          className="font-semibold text-[var(--accent)] hover:underline"
        >
          View the full technical map
        </a>
      </p>
    </section>
  );
}
