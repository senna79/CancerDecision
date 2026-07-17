export type ContentStatus = "draft" | "review" | "published" | "archived";

export type QuestionCategory =
  | "diagnosis"
  | "treatment"
  | "second_opinion"
  | "hospital_selection"
  | "global_care"
  | "cost";

export type DecisionTopicKey =
  | "newly_diagnosed"
  | "second_opinion"
  | "compare_treatments"
  | "treatment_abroad"
  | "understand_costs";

export type EntityType =
  | "cancer"
  | "question"
  | "treatment"
  | "story"
  | "global_care_option";

export type AdminRole = "admin" | "editor";

export interface SeoFields {
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string[];
}

export interface Cancer extends SeoFields {
  id: string;
  name: string;
  slug: string;
  overview: string;
  status: ContentStatus;
  content_reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Question extends SeoFields {
  id: string;
  cancer_id: string;
  title: string;
  slug: string;
  category: QuestionCategory;
  summary: string;
  why_patients_ask: string;
  key_factors: string[];
  doctor_questions: string[];
  body: string | null;
  /** Optional journey fields — used on flagship decision questions */
  decision_context: string | null;
  when_this_may_help: string[];
  when_it_may_not_help: string[];
  options_and_tradeoffs: string[];
  records_to_prepare: string[];
  next_steps: string[];
  if_opinions_conflict: string[];
  status: ContentStatus;
  content_reviewed_at: string | null;
  ai_generated_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface DecisionMapNode {
  id: string;
  label: string;
  summary: string;
  sort_order: number;
  question_slugs: string[];
  treatment_slugs: string[];
  story_slugs: string[];
  /** Patient-state language for progress UI (e.g. "Biomarker testing") */
  state_label?: string;
  /** Explicit branching edges; when omitted, engine falls back to sort order */
  next_node_ids?: string[];
  /** Optional branch — not required on the core path */
  optional?: boolean;
}

export interface DecisionMap {
  id: string;
  cancer_id: string;
  title: string;
  intro: string;
  nodes: DecisionMapNode[];
}

export interface Treatment extends SeoFields {
  id: string;
  name: string;
  slug: string;
  description: string;
  when_considered: string;
  advantages: string[];
  limitations: string[];
  doctor_questions: string[];
  cost_considerations: string;
  status: ContentStatus;
  content_reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Story extends SeoFields {
  id: string;
  cancer_id: string;
  title: string;
  slug: string;
  country: string;
  age_range: string;
  decision_topic: string;
  background: string;
  initial_diagnosis: string;
  decision_challenge: string;
  options_considered: string[];
  why_compared: string;
  final_decision: string;
  lessons_learned: string[];
  status: ContentStatus;
  content_reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface GlobalCareOption extends SeoFields {
  id: string;
  cancer_id: string | null;
  title: string;
  slug: string;
  country_code: string;
  summary: string;
  body: string;
  cost_notes: string;
  status: ContentStatus;
  content_reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Country {
  code: string;
  name: string;
}

export interface Source {
  id: string;
  title: string;
  url: string;
  publisher: string | null;
  published_on: string | null;
  notes: string | null;
}

export interface DecisionTopic {
  id: string;
  key: DecisionTopicKey;
  label: string;
  description: string;
  sort_order: number;
}

export interface AdminProfile {
  user_id: string;
  role: AdminRole;
  display_name: string;
}

export interface CancerTreatment {
  cancer_id: string;
  treatment_id: string;
  sort_order: number;
}

export interface QuestionTreatment {
  question_id: string;
  treatment_id: string;
  sort_order: number;
}

export interface QuestionStory {
  question_id: string;
  story_id: string;
  sort_order: number;
}

export interface RelatedQuestion {
  from_id: string;
  to_id: string;
  sort_order: number;
}

export interface StoryTreatment {
  story_id: string;
  treatment_id: string;
  sort_order: number;
}

export interface TreatmentCountry {
  treatment_id: string;
  country_code: string;
}

export interface ContentSource {
  entity_type: EntityType;
  entity_id: string;
  source_id: string;
}

export interface KnowledgeGraphStore {
  cancers: Cancer[];
  questions: Question[];
  treatments: Treatment[];
  stories: Story[];
  global_care_options: GlobalCareOption[];
  countries: Country[];
  sources: Source[];
  decision_topics: DecisionTopic[];
  decision_maps: DecisionMap[];
  cancer_treatments: CancerTreatment[];
  question_treatments: QuestionTreatment[];
  question_stories: QuestionStory[];
  related_questions: RelatedQuestion[];
  story_treatments: StoryTreatment[];
  treatment_countries: TreatmentCountry[];
  content_sources: ContentSource[];
}

export const QUESTION_CATEGORIES: QuestionCategory[] = [
  "diagnosis",
  "treatment",
  "second_opinion",
  "hospital_selection",
  "global_care",
  "cost",
];

export const CONTENT_STATUSES: ContentStatus[] = [
  "draft",
  "review",
  "published",
  "archived",
];
