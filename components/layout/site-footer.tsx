import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--paper-deep)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-[var(--muted)] md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="font-heading text-base font-semibold text-[var(--ink)]">
            Global Cancer Decision Platform
          </p>
          <p className="mt-2 max-w-md leading-relaxed">
            Structured decision knowledge for patients exploring diagnosis,
            treatment comparisons, and global care options. Educational only.
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-[var(--accent)]">
            Trust & Disclaimer
          </Link>
          <Link href="/cancers" className="hover:text-[var(--accent)]">
            Cancer Library
          </Link>
          <Link href="/admin" className="hover:text-[var(--accent)]">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
