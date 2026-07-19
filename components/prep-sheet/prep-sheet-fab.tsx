"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePrepSheet } from "@/components/prep-sheet/prep-sheet-provider";
import { cn } from "@/lib/utils";

/** Persistent bottom-right entry to the appointment prep sheet */
export function PrepSheetFab() {
  const pathname = usePathname();
  const { ready, count, fabBump } = usePrepSheet();
  const [bumping, setBumping] = useState(false);

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
        "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-md border px-3.5 py-2.5 text-sm font-semibold shadow-md transition md:bottom-7 md:right-7",
        count > 0
          ? "border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[#0d655e]"
          : "border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]",
        bumping && "prep-fab-bump"
      )}
      aria-label={
        ready && count > 0
          ? `Prep sheet, ${count} items`
          : "Open appointment prep sheet"
      }
    >
      <span aria-hidden className="text-base leading-none">
        ☐
      </span>
      <span>Prep sheet</span>
      {ready && count > 0 ? (
        <span
          key={count}
          className="inline-flex min-w-[1.25rem] items-center justify-center rounded bg-white/20 px-1.5 text-[11px] font-bold tabular-nums prep-fab-count"
        >
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </Link>
  );
}
