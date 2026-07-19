"use client";

import Link from "next/link";
import { useMemo, useState, type MouseEvent } from "react";
import { AddToPrepButton } from "@/components/prep-sheet/add-to-prep-button";
import { usePrepSheet } from "@/components/prep-sheet/prep-sheet-provider";
import { cn } from "@/lib/utils";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Deduped checklist + prep-sheet asks (e.g. from “More questions by situation”). */
function mergeCopyItems(checklist: string[], prepAskTexts: string[]) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const text of [...checklist, ...prepAskTexts]) {
    const key = text.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(text.trim());
  }
  return out;
}

/** Clinic takeaway — short leave list with Copy + Print + Add to prep sheet */
export function DoctorChecklistTakeaway({
  title = "Doctor Conversation Checklist",
  lead,
  items,
  sourceLabel,
  sourceHref,
}: {
  title?: string;
  lead: string;
  items: string[];
  sourceLabel?: string;
  sourceHref?: string;
}) {
  const [copied, setCopied] = useState(false);
  const { addItem, hasItem, ready, state, launchAddFlight } = usePrepSheet();
  const label = sourceLabel ?? title;

  const copyItems = useMemo(() => {
    const prepAsks = state.items
      .filter((item) => item.section === "ask")
      .map((item) => item.text);
    return mergeCopyItems(items, prepAsks);
  }, [items, state.items]);

  const plainText = [
    title,
    lead,
    "",
    ...copyItems.map((item) => `☐ ${item}`),
    "",
    "From Cancer Next Step — educational decision support, not medical advice.",
  ].join("\n");

  const allAdded =
    ready && items.length > 0 && items.every((item) => hasItem("ask", item));

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
    const list = copyItems
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

  function handleAddAll(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const newlyAdded = items.filter((item) => !hasItem("ask", item));
    if (newlyAdded.length) {
      launchAddFlight(
        { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        newlyAdded.length === 1
          ? newlyAdded[0]
          : `${newlyAdded.length} questions`
      );
    }
    for (const item of items) {
      addItem({
        section: "ask",
        text: item,
        sourceLabel: label,
        sourceHref,
      });
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
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleAddAll}
            disabled={!ready || allAdded || items.length === 0}
            className={cn(
              "rounded-md border px-3 py-1.5 text-sm font-semibold transition disabled:opacity-40",
              allAdded
                ? "border-[var(--accent)] bg-[rgba(15,118,110,0.08)] text-[var(--accent)]"
                : "border-amber-900/20 bg-white/90 text-[var(--ink)] hover:border-amber-900/40"
            )}
          >
            {allAdded ? "On prep sheet" : "Add all to prep"}
          </button>
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
          <li key={item} className="flex items-start gap-2.5">
            <span
              className="mt-1 size-3.5 shrink-0 rounded-[2px] border border-amber-900/40"
              aria-hidden
            />
            <span className="min-w-0 flex-1">{item}</span>
            <AddToPrepButton
              section="ask"
              text={item}
              sourceLabel={label}
              sourceHref={sourceHref}
            />
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-[var(--muted)]">
        Add items to your{" "}
        <Link
          href="/prep-sheet"
          className="font-semibold text-[var(--accent)] hover:underline"
        >
          prep sheet
        </Link>
        — Copy/Print includes this list plus any questions you added below.
      </p>
    </div>
  );
}
