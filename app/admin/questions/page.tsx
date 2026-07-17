import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { guardAdmin } from "@/lib/auth/guard";
import { getCancers, getQuestions } from "@/lib/queries";

export default async function AdminQuestionsPage() {
  await guardAdmin();
  const [questions, cancers] = await Promise.all([
    getQuestions({ includeUnpublished: true }),
    getCancers({ includeUnpublished: true }),
  ]);
  const cancerMap = Object.fromEntries(cancers.map((c) => [c.id, c.name]));

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-heading text-3xl font-semibold">Questions</h1>
        <Link
          href="/admin/questions/new"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          New question
        </Link>
      </div>
      <div className="mt-6 overflow-x-auto rounded-lg border border-[var(--line)] bg-white/80">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[var(--line)] text-[var(--muted)]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Cancer</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr key={q.id} className="border-b border-[var(--line)]/70">
                <td className="px-4 py-3 font-medium">{q.title}</td>
                <td className="px-4 py-3 text-[var(--muted)]">
                  {cancerMap[q.cancer_id] ?? "—"}
                </td>
                <td className="px-4 py-3">{q.category}</td>
                <td className="px-4 py-3">
                  <Badge variant="secondary">{q.status}</Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/questions/${q.id}`}
                    className="text-[var(--accent)] hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
