"use client";

import Link from "next/link";
import { NotebookPen } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePrepSheet } from "@/components/prep-sheet/prep-sheet-provider";
import { cn } from "@/lib/utils";

/** Persistent bottom-right entry to the appointment prep sheet */
export function PrepSheetFab() {
  const pathname = usePathname();
  const { ready, count, fabBump } = usePrepSheet();
  const [bumping, setBumping] = useState(false);
  const hasItems = ready && count > 0;

  useEffect(() => {
    if (!fabBump) return;
    setBumping(true);
    const timer = window.setTimeout(() => setBumping(false), 420);
    return () => window.clearTimeout(timer);
  }, [fabBump]);

  if (pathname === "/prep-sheet") return null;

  return (
    <Link
      id="prep-sheet-fab"
      href="/prep-sheet"
      className={cn(
        "fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm font-semibold shadow-sm backdrop-blur-md transition md:bottom-7 md:right-7",
        hasItems
          ? "border-[var(--accent)]/35 bg-[rgba(15,118,110,0.12)] text-[var(--ink)] hover:border-[var(--accent)]/55 hover:bg-[rgba(15,118,110,0.18)]"
          : "border-[var(--line)] bg-white/90 text-[var(--ink-soft)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]",
        bumping && "prep-fab-bump"
      )}
      aria-label={
        hasItems
          ? `Prep sheet, ${count} items`
          : "Open appointment prep sheet"
      }
    >
      <NotebookPen
        aria-hidden
        className={cn(
          "size-[1.125rem] shrink-0 stroke-[1.75]",
          hasItems ? "text-[var(--accent)]" : "text-[var(--muted)]"
        )}
      />
      <span className={hasItems ? "text-[var(--ink)]" : undefined}>
        Prep sheet
      </span>
      {hasItems ? (
        <span
          key={count}
          className="inline-flex min-w-[1.35rem] items-center justify-center rounded-md bg-[var(--accent)] px-1.5 py-0.5 text-[11px] font-bold tabular-nums leading-none text-white prep-fab-count"
        >
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </Link>
  );
}
