import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/login-form";
import { isAdminAuthenticated } from "@/lib/auth/session";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin");

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-5">
      <h1 className="font-heading text-3xl font-semibold text-[var(--ink)]">
        Admin sign in
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Manage the cancer decision knowledge graph.
      </p>
      <div className="mt-6 rounded-lg border border-[var(--line)] bg-white/80 p-5">
        <LoginForm />
      </div>
    </div>
  );
}
