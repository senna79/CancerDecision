import Link from "next/link";
import { guardAdmin } from "@/lib/auth/guard";
import {
  getCancers,
  getGlobalCareOptions,
  getQuestions,
  getStories,
  getTreatments,
} from "@/lib/queries";

export default async function AdminDashboardPage() {
  await guardAdmin();
  const [cancers, questions, treatments, stories, globalCare] =
    await Promise.all([
      getCancers({ includeUnpublished: true }),
      getQuestions({ includeUnpublished: true }),
      getTreatments({ includeUnpublished: true }),
      getStories({ includeUnpublished: true }),
      getGlobalCareOptions({ includeUnpublished: true }),
    ]);

  const cards = [
    { label: "Cancers", count: cancers.length, href: "/admin/cancers" },
    { label: "Questions", count: questions.length, href: "/admin/questions" },
    { label: "Treatments", count: treatments.length, href: "/admin/treatments" },
    { label: "Stories", count: stories.length, href: "/admin/stories" },
    {
      label: "Global care",
      count: globalCare.length,
      href: "/admin/global-care",
    },
    {
      label: "Published questions",
      count: questions.filter((q) => q.status === "published").length,
      href: "/admin/questions",
    },
  ];

  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold text-[var(--ink)]">
        Knowledge graph dashboard
      </h1>
      <p className="mt-2 text-[var(--muted)]">
        Edit structured entities and relationships. AI drafts never auto-publish.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-lg border border-[var(--line)] bg-white/80 p-5 hover:border-[var(--accent)]"
          >
            <p className="text-sm text-[var(--muted)]">{card.label}</p>
            <p className="mt-2 font-heading text-3xl font-semibold text-[var(--ink)]">
              {card.count}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
