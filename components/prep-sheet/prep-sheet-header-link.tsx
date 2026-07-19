"use client";

import Link from "next/link";
import { usePrepSheet } from "@/components/prep-sheet/prep-sheet-provider";

export function PrepSheetHeaderLink() {
  const { ready, count } = usePrepSheet();

  return (
    <Link
      href="/prep-sheet"
      className="relative transition hover:text-[var(--accent)]"
    >
      Prep sheet
      {ready && count > 0 ? (
        <span className="ml-1 inline-flex min-w-[1.1rem] items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[10px] font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </Link>
  );
}
