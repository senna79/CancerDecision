import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--paper-deep)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-[var(--muted)] md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="font-heading text-base font-semibold text-[var(--ink)]">
            Cancer Next Step
          </p>
          <p className="mt-1 text-[var(--ink-soft)]">
            Understand your options. Know your next step.
          </p>
          <p className="mt-2 max-w-md leading-relaxed">
            Decision guides and care navigation for people facing cancer
            choices. Educational only — not medical advice. Some care
            organizations may compensate us when you contact them; see
            Transparency.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/about" className="hover:text-[var(--accent)]">
            Trust & Disclaimer
          </Link>
          <Link href="/transparency" className="hover:text-[var(--accent)]">
            Transparency
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
