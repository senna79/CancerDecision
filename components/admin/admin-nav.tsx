"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/cancers", label: "Cancers" },
  { href: "/admin/questions", label: "Questions" },
  { href: "/admin/treatments", label: "Treatments" },
  { href: "/admin/stories", label: "Stories" },
  { href: "/admin/global-care", label: "Global Care" },
  { href: "/admin/sources", label: "Sources" },
  { href: "/admin/generate", label: "AI Draft" },
];

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="w-full border-b border-[var(--line)] bg-white/80 md:w-56 md:border-b-0 md:border-r md:min-h-screen">
      <div className="p-4">
        <p className="font-heading text-lg font-semibold text-[var(--ink)]">
          Admin CMS
        </p>
        <p className="text-xs text-[var(--muted)]">Knowledge graph editor</p>
      </div>
      <nav className="flex flex-wrap gap-1 px-2 pb-4 md:flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-md px-3 py-2 text-sm",
              pathname === link.href
                ? "bg-[var(--accent-soft)] font-semibold text-[var(--ink)]"
                : "text-[var(--ink-soft)] hover:bg-[var(--paper-deep)]"
            )}
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={logout}
          className="rounded-md px-3 py-2 text-left text-sm text-[var(--muted)] hover:bg-[var(--paper-deep)]"
        >
          Log out
        </button>
      </nav>
    </aside>
  );
}
