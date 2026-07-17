import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { guardAdmin } from "@/lib/auth/guard";
import { getTreatments } from "@/lib/queries";

export default async function AdminTreatmentsPage() {
  await guardAdmin();
  const treatments = await getTreatments({ includeUnpublished: true });

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-heading text-3xl font-semibold">Treatments</h1>
        <Link
          href="/admin/treatments/new"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          New treatment
        </Link>
      </div>
      <div className="mt-6 overflow-x-auto rounded-lg border border-[var(--line)] bg-white/80">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[var(--line)] text-[var(--muted)]">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {treatments.map((tx) => (
              <tr key={tx.id} className="border-b border-[var(--line)]/70">
                <td className="px-4 py-3 font-medium">{tx.name}</td>
                <td className="px-4 py-3 text-[var(--muted)]">{tx.slug}</td>
                <td className="px-4 py-3">
                  <Badge variant="secondary">{tx.status}</Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/treatments/${tx.id}`}
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
