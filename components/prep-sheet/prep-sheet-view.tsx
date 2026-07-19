"use client";

import Link from "next/link";
import { useState } from "react";
import { usePrepSheet } from "@/components/prep-sheet/prep-sheet-provider";
import { formatPrepSheetText } from "@/lib/prep-sheet/types";
import { cn } from "@/lib/utils";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function PrepSheetView() {
  const { ready, state, count, removeItem, setCustomNote, clearAll } =
    usePrepSheet();
  const [copied, setCopied] = useState(false);

  const ask = state.items.filter((item) => item.section === "ask");
  const bring = state.items.filter((item) => item.section === "bring");
  const notes = state.items.filter((item) => item.section === "note");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(formatPrepSheetText(state));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handlePrint() {
    const text = formatPrepSheetText(state);
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>My appointment prep sheet</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; max-width: 36rem; margin: 2rem auto; padding: 0 1.25rem; color: #1a1a1a; line-height: 1.55; white-space: pre-wrap; }
  .foot { margin-top: 1.5rem; font-size: 0.85rem; color: #666; white-space: normal; }
</style>
</head>
<body>
<pre>${escapeHtml(text)}</pre>
<p class="foot">Educational decision support — not medical advice.</p>
</body>
</html>`;
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) return;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  if (!ready) {
    return (
      <p className="text-sm text-[var(--muted)]">Loading your prep sheet…</p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleCopy}
          disabled={count === 0 && !state.customNote.trim()}
          className={cn(
            "rounded-md border px-3 py-1.5 text-sm font-semibold transition",
            copied
              ? "border-[var(--accent)] bg-[rgba(15,118,110,0.08)] text-[var(--accent)]"
              : "border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--accent)]/40 disabled:opacity-40"
          )}
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <button
          type="button"
          onClick={handlePrint}
          disabled={count === 0 && !state.customNote.trim()}
          className="rounded-md border border-[var(--line)] bg-white px-3 py-1.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)]/40 disabled:opacity-40"
        >
          Print
        </button>
        {count > 0 ? (
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)]"
          >
            Clear all
          </button>
        ) : null}
      </div>

      {count === 0 && !state.customNote.trim() ? (
        <div className="rounded-lg border border-dashed border-[var(--line)] bg-[var(--paper-deep)]/40 px-5 py-6">
          <p className="font-heading text-lg font-semibold text-[var(--ink)]">
            Your sheet is empty
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Open a lung decision guide and tap{" "}
            <span className="font-semibold text-[var(--ink)]">Add</span> next
            to questions you want to ask — or records to bring.
          </p>
          <p className="mt-4">
            <Link
              href="/cancers/lung-cancer#decision-moment"
              className="text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              Where are you in your journey? →
            </Link>
          </p>
        </div>
      ) : null}

      {ask.length ? (
        <section className="rounded-lg border border-[var(--line)] bg-white/90 px-4 py-4 md:px-5">
          <h2 className="font-heading text-lg font-semibold text-[var(--ink)]">
            Questions to ask
          </h2>
          <ul className="mt-3 space-y-3">
            {ask.map((item) => (
              <li key={item.id} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 text-[var(--muted)]" aria-hidden>
                  ☐
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[var(--ink)]">{item.text}</p>
                  {item.sourceLabel ? (
                    <p className="mt-1 text-xs text-[var(--muted)]">
                      {item.sourceHref ? (
                        <Link
                          href={item.sourceHref}
                          className="hover:text-[var(--accent)] hover:underline"
                        >
                          From: {item.sourceLabel}
                        </Link>
                      ) : (
                        <>From: {item.sourceLabel}</>
                      )}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {bring.length ? (
        <section className="rounded-lg border border-[var(--line)] bg-white/90 px-4 py-4 md:px-5">
          <h2 className="font-heading text-lg font-semibold text-[var(--ink)]">
            Records / materials to bring
          </h2>
          <ul className="mt-3 space-y-3">
            {bring.map((item) => (
              <li key={item.id} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 text-[var(--muted)]" aria-hidden>
                  ☐
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[var(--ink)]">{item.text}</p>
                  {item.sourceLabel ? (
                    <p className="mt-1 text-xs text-[var(--muted)]">
                      From: {item.sourceLabel}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {notes.length ? (
        <section className="rounded-lg border border-[var(--line)] bg-white/90 px-4 py-4 md:px-5">
          <h2 className="font-heading text-lg font-semibold text-[var(--ink)]">
            Saved notes
          </h2>
          <ul className="mt-3 space-y-3">
            {notes.map((item) => (
              <li key={item.id} className="flex items-start gap-3 text-sm">
                <div className="min-w-0 flex-1 text-[var(--ink)]">
                  {item.text}
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="rounded-lg border border-[var(--line)] bg-white/90 px-4 py-4 md:px-5">
        <h2 className="font-heading text-lg font-semibold text-[var(--ink)]">
          Still unsure / my notes
        </h2>
        <textarea
          value={state.customNote}
          onChange={(event) => setCustomNote(event.target.value)}
          rows={4}
          placeholder="Optional — e.g. symptoms to mention, family questions, or what you are still deciding."
          className="mt-3 w-full rounded-md border border-[var(--line)] bg-[var(--paper)]/60 px-3 py-2 text-sm text-[var(--ink)] outline-none ring-[var(--accent)]/30 placeholder:text-[var(--muted)] focus:ring-2"
        />
      </section>

      <p className="text-xs text-[var(--muted)]">
        Saved on this device only. Clearing browser data removes the sheet.
      </p>
    </div>
  );
}
