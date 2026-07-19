"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Clinic takeaway — short leave list with Copy + Print; full groups render below */
export function DoctorChecklistTakeaway({
  title = "Doctor Conversation Checklist",
  lead,
  items,
}: {
  title?: string;
  lead: string;
  items: string[];
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

  function handlePrint() {
    const list = items
      .map((item) => `<li>☐ ${escapeHtml(item)}</li>`)
      .join("");
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; max-width: 36rem; margin: 2rem auto; padding: 0 1.25rem; color: #1a1a1a; line-height: 1.55; }
  h1 { font-size: 1.35rem; margin: 0 0 0.5rem; }
  .lead { color: #444; margin: 0 0 1.25rem; }
  ul { padding-left: 0; list-style: none; }
  li { margin: 0.55rem 0; }
  .foot { margin-top: 1.75rem; font-size: 0.85rem; color: #666; }
</style>
</head>
<body>
  <h1>${escapeHtml(title)}</h1>
  <p class="lead">${escapeHtml(lead)}</p>
  <ul>${list}</ul>
  <p class="foot">From Cancer Next Step — educational decision support, not medical advice.<br/>cancernextstep.com</p>
</body>
</html>`;
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) return;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
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
        <div className="flex flex-wrap gap-2">
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
          <button
            type="button"
            onClick={handlePrint}
            className="rounded-md border border-amber-900/20 bg-white/90 px-3 py-1.5 text-sm font-semibold text-[var(--ink)] transition hover:border-amber-900/40"
          >
            Print
          </button>
        </div>
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
      <p className="mt-3 text-xs text-[var(--muted)]">
        Copy or print this list before your visit — you do not need to finish
        every page first.
      </p>
    </div>
  );
}
