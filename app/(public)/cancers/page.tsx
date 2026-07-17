import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  getCancers,
  getDecisionTopics,
  getQuestions,
} from "@/lib/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import type { DecisionTopicKey } from "@/types/database";

export const metadata = buildMetadata({
  title: "Cancer Library",
  description:
    "Browse structured cancer decision centers for lung, prostate, breast, liver, and brain tumors.",
  path: "/cancers",
});

export default async function CancersPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const params = await searchParams;
  const topicKey = params.topic as DecisionTopicKey | undefined;
  const [cancers, topics, topicQuestions] = await Promise.all([
    getCancers(),
    getDecisionTopics(),
    topicKey ? getQuestions({ topicKey }) : Promise.resolve([]),
  ]);

  const activeTopic = topics.find((t) => t.key === topicKey);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cancers" }]} />
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        Cancer Library
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Every cancer type opens the same decision-center pathway: common
        questions, treatment comparisons, global options, and patient journeys.
      </p>

      {activeTopic ? (
        <div className="mt-8 rounded-lg border border-[var(--accent-soft)] bg-white/80 p-5">
          <p className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
            Decision topic
          </p>
          <h2 className="mt-1 font-heading text-2xl font-semibold text-[var(--ink)]">
            {activeTopic.label}
          </h2>
          <ul className="mt-4 space-y-2">
            {topicQuestions.slice(0, 8).map((q) => (
              <li key={q.id}>
                <Link
                  href={`/questions/${q.slug}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {q.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {cancers.map((cancer) => (
          <Link
            key={cancer.id}
            href={`/cancers/${cancer.slug}`}
            className="rounded-lg border border-[var(--line)] bg-white/70 p-6 transition hover:border-[var(--accent)]"
          >
            <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
              {cancer.name}
            </h2>
            <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-[var(--muted)]">
              {cancer.overview}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
