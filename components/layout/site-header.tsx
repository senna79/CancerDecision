"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

const links = [
  { href: "/cancers", label: "Cancers" },
  { href: "/global-care", label: "Global Care" },
  { href: "/about", label: "About" },
];

function goCleanHome(event: MouseEvent<HTMLAnchorElement>) {
  const onHome =
    window.location.pathname === "/" || window.location.pathname === "";
  const dirty = Boolean(window.location.search || window.location.hash);

  if (onHome && !dirty) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Force a clean homepage (drops ?cancer= and #choose-cancer).
  if (onHome && dirty) {
    event.preventDefault();
    window.location.assign("/");
  }
}

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[var(--line)]/70 bg-[var(--paper)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          onClick={goCleanHome}
          className="group flex flex-col"
          aria-label="Cancer Next Step home"
        >
          <span className="font-heading text-lg font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-xl">
            Cancer Next Step
          </span>
          <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] transition group-hover:text-[var(--accent)]">
            Decision Navigation
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[var(--ink-soft)]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
