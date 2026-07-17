import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { guardAdmin } from "@/lib/auth/guard";
import { getCancers } from "@/lib/queries";

export default async function AdminCancersPage() {
  await guardAdmin();
  const cancers = await getCancers({ includeUnpublished: true });

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-heading text-3xl font-semibold">Cancers</h1>
        <Link
          href="/admin/cancers/new"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          New cancer
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
            {cancers.map((cancer) => (
              <tr key={cancer.id} className="border-b border-[var(--line)]/70">
                <td className="px-4 py-3 font-medium">{cancer.name}</td>
                <td className="px-4 py-3 text-[var(--muted)]">{cancer.slug}</td>
                <td className="px-4 py-3">
                  <Badge variant="secondary">{cancer.status}</Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/cancers/${cancer.id}`}
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
