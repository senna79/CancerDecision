"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/** Clinic takeaway — copy the doctor checklist to your notes */
export function DoctorChecklistTakeaway({
  title = "Doctor Conversation Checklist",
  lead,
  items,
  onOpenFull,
}: {
  title?: string;
  lead: string;
  items: string[];
  onOpenFull?: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const plainText = [
    title,
    lead,
    "",
    ...items.map((item) => `☐ ${item}`),
    "",
    "From Cancer Next Step — educational decision support, not medical advice.",
  ].join("\n");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-lg border border-amber-800/15 bg-amber-50/80 px-4 py-4 md:px-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-amber-900/70">
            Take to your appointment
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-[var(--ink)] md:text-xl">
            {title}
          </p>
          <p className="mt-1 text-sm font-medium text-[var(--ink-soft)]">{lead}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "rounded-md border px-3 py-1.5 text-sm font-semibold transition",
            copied
              ? "border-[var(--accent)] bg-[rgba(15,118,110,0.08)] text-[var(--accent)]"
              : "border-amber-900/20 bg-white/90 text-[var(--ink)] hover:border-amber-900/40"
          )}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <ul className="mt-4 space-y-2.5 text-sm text-[var(--ink)] md:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="mt-1 size-3.5 shrink-0 rounded-[2px] border border-amber-900/40"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {onOpenFull ? (
        <button
          type="button"
          onClick={onOpenFull}
          className="mt-4 text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          Open full doctor checklist →
        </button>
      ) : null}
    </div>
  );
}
