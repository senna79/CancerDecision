import { AdminNav } from "@/components/admin/admin-nav";
import { isAdminAuthenticated } from "@/lib/auth/session";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    return <div className="min-h-screen bg-[var(--paper)]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--paper)] md:flex">
      <AdminNav />
      <div className="flex-1 px-5 py-6 md:px-8">{children}</div>
    </div>
  );
}
