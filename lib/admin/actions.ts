"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import {
  setCancerTreatments,
  setContentSources,
  setQuestionStories,
  setQuestionTreatments,
  setRelatedQuestions,
  setStoryTreatments,
  setTreatmentCountries,
  upsertCancer,
  upsertGlobalCareOption,
  upsertQuestion,
  upsertSource,
  upsertStory,
  upsertTreatment,
} from "@/lib/queries";
import { newId, slugify } from "@/lib/utils/slug";
import type {
  ContentStatus,
  QuestionCategory,
} from "@/types/database";

function parseList(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string" || !value.trim()) return [];
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseCsvIds(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string" || !value.trim()) return [];
  return value
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

function statusOf(value: FormDataEntryValue | null): ContentStatus {
  const allowed: ContentStatus[] = ["draft", "review", "published", "archived"];
  if (typeof value === "string" && allowed.includes(value as ContentStatus)) {
    return value as ContentStatus;
  }
  return "draft";
}

export async function saveCancerAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || newId("cancer"));
  const name = String(formData.get("name") || "");
  const slug = String(formData.get("slug") || slugify(name));
  await upsertCancer({
    id,
    name,
    slug,
    overview: String(formData.get("overview") || ""),
    seo_title: String(formData.get("seo_title") || "") || null,
    seo_description: String(formData.get("seo_description") || "") || null,
    seo_keywords: parseList(formData.get("seo_keywords")),
    status: statusOf(formData.get("status")),
    content_reviewed_at: String(formData.get("content_reviewed_at") || "") || null,
  });
  const treatmentIds = parseCsvIds(formData.get("treatment_ids"));
  await setCancerTreatments(id, treatmentIds);
  const sourceIds = parseCsvIds(formData.get("source_ids"));
  await setContentSources("cancer", id, sourceIds);
  revalidatePath("/");
  revalidatePath("/cancers");
  revalidatePath(`/cancers/${slug}`);
  revalidatePath("/admin/cancers");
  redirect("/admin/cancers");
}

export async function saveQuestionAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || newId("q"));
  const title = String(formData.get("title") || "");
  const slug = String(formData.get("slug") || slugify(title));
  await upsertQuestion({
    id,
    cancer_id: String(formData.get("cancer_id") || ""),
    title,
    slug,
    category: String(formData.get("category") || "diagnosis") as QuestionCategory,
    summary: String(formData.get("summary") || ""),
    why_patients_ask: String(formData.get("why_patients_ask") || ""),
    key_factors: parseList(formData.get("key_factors")),
    doctor_questions: parseList(formData.get("doctor_questions")),
    body: String(formData.get("body") || "") || null,
    seo_title: String(formData.get("seo_title") || "") || null,
    seo_description: String(formData.get("seo_description") || "") || null,
    seo_keywords: parseList(formData.get("seo_keywords")),
    status: statusOf(formData.get("status")),
    content_reviewed_at: String(formData.get("content_reviewed_at") || "") || null,
    ai_generated_at: String(formData.get("ai_generated_at") || "") || null,
  });
  await setQuestionTreatments(id, parseCsvIds(formData.get("treatment_ids")));
  await setQuestionStories(id, parseCsvIds(formData.get("story_ids")));
  await setRelatedQuestions(id, parseCsvIds(formData.get("related_question_ids")));
  await setContentSources("question", id, parseCsvIds(formData.get("source_ids")));
  revalidatePath(`/questions/${slug}`);
  revalidatePath("/admin/questions");
  redirect("/admin/questions");
}

export async function saveTreatmentAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || newId("tx"));
  const name = String(formData.get("name") || "");
  const slug = String(formData.get("slug") || slugify(name));
  await upsertTreatment({
    id,
    name,
    slug,
    description: String(formData.get("description") || ""),
    when_considered: String(formData.get("when_considered") || ""),
    advantages: parseList(formData.get("advantages")),
    limitations: parseList(formData.get("limitations")),
    doctor_questions: parseList(formData.get("doctor_questions")),
    cost_considerations: String(formData.get("cost_considerations") || ""),
    seo_title: String(formData.get("seo_title") || "") || null,
    seo_description: String(formData.get("seo_description") || "") || null,
    seo_keywords: parseList(formData.get("seo_keywords")),
    status: statusOf(formData.get("status")),
    content_reviewed_at: String(formData.get("content_reviewed_at") || "") || null,
  });
  await setTreatmentCountries(id, parseCsvIds(formData.get("country_codes")));
  await setContentSources("treatment", id, parseCsvIds(formData.get("source_ids")));
  revalidatePath(`/treatments/${slug}`);
  revalidatePath("/admin/treatments");
  redirect("/admin/treatments");
}

export async function saveStoryAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || newId("story"));
  const title = String(formData.get("title") || "");
  const slug = String(formData.get("slug") || slugify(title));
  await upsertStory({
    id,
    cancer_id: String(formData.get("cancer_id") || ""),
    title,
    slug,
    country: String(formData.get("country") || ""),
    age_range: String(formData.get("age_range") || ""),
    decision_topic: String(formData.get("decision_topic") || ""),
    background: String(formData.get("background") || ""),
    initial_diagnosis: String(formData.get("initial_diagnosis") || ""),
    decision_challenge: String(formData.get("decision_challenge") || ""),
    options_considered: String(formData.get("options_considered") || ""),
    why_compared: String(formData.get("why_compared") || ""),
    final_decision: String(formData.get("final_decision") || ""),
    lessons_learned: String(formData.get("lessons_learned") || ""),
    seo_title: String(formData.get("seo_title") || "") || null,
    seo_description: String(formData.get("seo_description") || "") || null,
    seo_keywords: parseList(formData.get("seo_keywords")),
    status: statusOf(formData.get("status")),
    content_reviewed_at: String(formData.get("content_reviewed_at") || "") || null,
  });
  await setStoryTreatments(id, parseCsvIds(formData.get("treatment_ids")));
  await setContentSources("story", id, parseCsvIds(formData.get("source_ids")));
  revalidatePath(`/stories/${slug}`);
  revalidatePath("/admin/stories");
  redirect("/admin/stories");
}

export async function saveGlobalCareAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || newId("gco"));
  const title = String(formData.get("title") || "");
  const slug = String(formData.get("slug") || slugify(title));
  const cancerId = String(formData.get("cancer_id") || "");
  await upsertGlobalCareOption({
    id,
    cancer_id: cancerId || null,
    title,
    slug,
    country_code: String(formData.get("country_code") || "US"),
    summary: String(formData.get("summary") || ""),
    body: String(formData.get("body") || ""),
    cost_notes: String(formData.get("cost_notes") || ""),
    seo_title: String(formData.get("seo_title") || "") || null,
    seo_description: String(formData.get("seo_description") || "") || null,
    seo_keywords: parseList(formData.get("seo_keywords")),
    status: statusOf(formData.get("status")),
    content_reviewed_at: String(formData.get("content_reviewed_at") || "") || null,
  });
  await setContentSources(
    "global_care_option",
    id,
    parseCsvIds(formData.get("source_ids"))
  );
  revalidatePath("/global-care");
  revalidatePath("/admin/global-care");
  redirect("/admin/global-care");
}

export async function saveSourceAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || newId("src"));
  await upsertSource({
    id,
    title: String(formData.get("title") || ""),
    url: String(formData.get("url") || ""),
    publisher: String(formData.get("publisher") || "") || null,
    published_on: String(formData.get("published_on") || "") || null,
    notes: String(formData.get("notes") || "") || null,
  });
  revalidatePath("/admin/sources");
  redirect("/admin/sources");
}
