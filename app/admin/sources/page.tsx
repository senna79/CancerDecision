import Link from "next/link";
import { guardAdmin } from "@/lib/auth/guard";
import { getAllSources } from "@/lib/queries";

export default async function AdminSourcesPage() {
  await guardAdmin();
  const sources = await getAllSources();

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-heading text-3xl font-semibold">Sources</h1>
        <Link
          href="/admin/sources/new"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          New source
        </Link>
      </div>
      <div className="mt-6 overflow-x-auto rounded-lg border border-[var(--line)] bg-white/80">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[var(--line)] text-[var(--muted)]">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Publisher</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {sources.map((source) => (
              <tr key={source.id} className="border-b border-[var(--line)]/70">
                <td className="px-4 py-3 font-medium">{source.title}</td>
                <td className="px-4 py-3 text-[var(--muted)]">
                  {source.publisher ?? "—"}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/sources/${source.id}`}
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
