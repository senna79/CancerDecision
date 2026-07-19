"use client";

import { usePrepSheet } from "@/components/prep-sheet/prep-sheet-provider";
import type { PrepSection } from "@/lib/prep-sheet/types";
import { cn } from "@/lib/utils";

export function AddToPrepButton({
  section,
  text,
  sourceLabel,
  sourceHref,
  className,
}: {
  section: PrepSection;
  text: string;
  sourceLabel?: string;
  sourceHref?: string;
  className?: string;
}) {
  const { ready, hasItem, toggleItem, launchAddFlight } = usePrepSheet();
  const active = ready && hasItem(section, text);

  return (
    <button
      type="button"
      disabled={!ready}
      onClick={(event) => {
        if (!active) {
          const rect = event.currentTarget.getBoundingClientRect();
          launchAddFlight(
            { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
            text
          );
        }
        toggleItem({ section, text, sourceLabel, sourceHref });
      }}
      className={cn(
        "shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] transition",
        active
          ? "border-[var(--accent)] bg-[rgba(15,118,110,0.1)] text-[var(--accent)]"
          : "border-[var(--line)] bg-white/80 text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]",
        className
      )}
      aria-pressed={active}
      title={active ? "Remove from prep sheet" : "Add to prep sheet"}
    >
      {active ? "Added" : "Add"}
    </button>
  );
}

export function PrepItemRow({
  section,
  text,
  sourceLabel,
  sourceHref,
}: {
  section: PrepSection;
  text: string;
  sourceLabel?: string;
  sourceHref?: string;
}) {
  return (
    <li className="flex items-start gap-2.5 text-[var(--ink)]">
      <span
        className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]"
        aria-hidden
      />
      <span className="min-w-0 flex-1 leading-relaxed">{text}</span>
      <AddToPrepButton
        section={section}
        text={text}
        sourceLabel={sourceLabel}
        sourceHref={sourceHref}
      />
    </li>
  );
}
