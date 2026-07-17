"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QUESTION_CATEGORIES } from "@/types/database";

type CancerOption = { id: string; name: string };

export function GenerateForm({ cancers }: { cancers: CancerOption[] }) {
  const [title, setTitle] = useState("");
  const [cancerId, setCancerId] = useState(cancers[0]?.id ?? "");
  const [category, setCategory] = useState("second_opinion");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    question_id: string | null;
    provider: string;
    draft: {
      summary: string;
      why_patients_ask: string;
      key_factors: string[];
      doctor_questions: string[];
    };
  } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    const res = await fetch("/api/ai/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        cancer_id: cancerId,
        category,
        save_draft: true,
      }),
    });
    setLoading(false);
    if (!res.ok) {
      setError("Generation failed");
      return;
    }
    setResult(await res.json());
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="max-w-2xl space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Question title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Should I get a second opinion after..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cancer">Cancer</Label>
          <select
            id="cancer"
            value={cancerId}
            onChange={(e) => setCancerId(e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
          >
            {cancers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
          >
            {QUESTION_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        <Button type="submit" disabled={loading}>
          {loading ? "Generating draft..." : "Generate draft"}
        </Button>
        <p className="text-xs text-[var(--muted)]">
          Drafts are saved with status <strong>draft</strong> only. Human review
          is required before publishing.
        </p>
      </form>

      {result ? (
        <div className="max-w-2xl rounded-lg border border-[var(--line)] bg-white/80 p-5">
          <p className="text-sm text-[var(--muted)]">
            Provider: {result.provider}
          </p>
          <h2 className="mt-2 font-heading text-xl font-semibold">Draft preview</h2>
          <p className="mt-3 text-sm leading-relaxed">{result.draft.summary}</p>
          <h3 className="mt-4 font-semibold">Why patients ask</h3>
          <p className="mt-1 text-sm">{result.draft.why_patients_ask}</p>
          <h3 className="mt-4 font-semibold">Key factors</h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
            {result.draft.key_factors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <h3 className="mt-4 font-semibold">Doctor questions</h3>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
            {result.draft.doctor_questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          {result.question_id ? (
            <Link
              href={`/admin/questions/${result.question_id}`}
              className="mt-5 inline-flex h-8 items-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/80"
            >
              Review and edit draft
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
