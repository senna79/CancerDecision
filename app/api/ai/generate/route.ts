import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth/session";
import { questionDraftPrompt, type QuestionDraft } from "@/lib/ai/prompts";
import { upsertQuestion } from "@/lib/queries";
import { readStore } from "@/lib/db/store";
import { newId, slugify } from "@/lib/utils/slug";
import type { QuestionCategory } from "@/types/database";

const bodySchema = z.object({
  title: z.string().min(8),
  cancer_id: z.string().min(1),
  category: z.string().min(1),
  question_id: z.string().optional(),
  save_draft: z.boolean().optional().default(true),
});

function localDraft(input: {
  title: string;
  cancerName: string;
  category: string;
}): QuestionDraft {
  return {
    summary: `Patients facing “${input.title}” in ${input.cancerName} often need a structured comparison of uncertainty, timing, and tradeoffs rather than a single answer. Educational decision support can clarify which tests, second opinions, or pathway comparisons matter before irreversible choices. This draft is a starting point for human review and is not medical advice.`,
    why_patients_ask: `People ask this because ${input.cancerName.toLowerCase()} decisions in the ${input.category.replaceAll("_", " ")} category often involve incomplete information, specialty differences, and pressure to act quickly.`,
    key_factors: [
      "Completeness of diagnosis and staging information",
      "Whether biomarker or specialist review could change options",
      "Time sensitivity versus the value of another review",
      "Personal priorities around side effects, travel, and recovery",
      "Access to multidisciplinary expertise",
    ],
    doctor_questions: [
      "What information is still missing before a final decision?",
      "Are there alternative approaches that fit my priorities?",
      "Would another specialist review change the current plan?",
    ],
  };
}

export async function POST(request: Request) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = bodySchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const store = await readStore();
  const cancer = store.cancers.find((c) => c.id === parsed.data.cancer_id);
  if (!cancer) {
    return NextResponse.json({ error: "Cancer not found" }, { status: 404 });
  }

  let draft: QuestionDraft;
  const apiKey = process.env.OPENAI_API_KEY;

  if (apiKey) {
    const openai = new OpenAI({ apiKey });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You draft educational cancer decision content. Never diagnose or recommend a specific treatment. Return JSON only.",
        },
        {
          role: "user",
          content: questionDraftPrompt({
            title: parsed.data.title,
            cancerName: cancer.name,
            category: parsed.data.category,
          }),
        },
      ],
    });
    const content = completion.choices[0]?.message?.content ?? "{}";
    draft = JSON.parse(content) as QuestionDraft;
  } else {
    draft = localDraft({
      title: parsed.data.title,
      cancerName: cancer.name,
      category: parsed.data.category,
    });
  }

  let savedId: string | null = null;
  if (parsed.data.save_draft) {
    const id = parsed.data.question_id || newId("q");
    const existing = store.questions.find((q) => q.id === id);
    await upsertQuestion({
      id,
      cancer_id: cancer.id,
      title: parsed.data.title,
      slug: existing?.slug || slugify(parsed.data.title),
      category: parsed.data.category as QuestionCategory,
      summary: draft.summary,
      why_patients_ask: draft.why_patients_ask,
      key_factors: draft.key_factors,
      doctor_questions: draft.doctor_questions,
      body: existing?.body ?? null,
      decision_context: existing?.decision_context ?? null,
      when_this_may_help: existing?.when_this_may_help ?? [],
      when_it_may_not_help: existing?.when_it_may_not_help ?? [],
      options_and_tradeoffs: existing?.options_and_tradeoffs ?? [],
      records_to_prepare: existing?.records_to_prepare ?? [],
      next_steps: existing?.next_steps ?? [],
      if_opinions_conflict: existing?.if_opinions_conflict ?? [],
      seo_title: existing?.seo_title ?? parsed.data.title,
      seo_description: existing?.seo_description ?? draft.summary.slice(0, 155),
      seo_keywords: existing?.seo_keywords ?? [
        cancer.name.toLowerCase(),
        parsed.data.category.replaceAll("_", " "),
      ],
      status: "draft",
      content_reviewed_at: existing?.content_reviewed_at ?? null,
      ai_generated_at: new Date().toISOString(),
      created_at: existing?.created_at,
    });
    savedId = id;
  }

  return NextResponse.json({
    draft,
    question_id: savedId,
    status: "draft",
    provider: apiKey ? "openai" : "local-fallback",
    note: "AI output is saved as draft only and never auto-published.",
  });
}
