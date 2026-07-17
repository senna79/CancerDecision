-- Global Cancer Decision Platform knowledge graph schema

create type content_status as enum ('draft', 'review', 'published', 'archived');
create type question_category as enum (
  'diagnosis',
  'treatment',
  'second_opinion',
  'hospital_selection',
  'global_care',
  'cost'
);
create type decision_topic_key as enum (
  'newly_diagnosed',
  'second_opinion',
  'compare_treatments',
  'treatment_abroad',
  'understand_costs'
);
create type entity_type as enum (
  'cancer',
  'question',
  'treatment',
  'story',
  'global_care_option'
);
create type admin_role as enum ('admin', 'editor');

create table countries (
  code text primary key,
  name text not null
);

create table cancers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  overview text not null default '',
  seo_title text,
  seo_description text,
  seo_keywords text[] not null default '{}',
  status content_status not null default 'draft',
  content_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table questions (
  id uuid primary key default gen_random_uuid(),
  cancer_id uuid not null references cancers(id) on delete cascade,
  title text not null,
  slug text not null unique,
  category question_category not null,
  summary text not null default '',
  why_patients_ask text not null default '',
  key_factors jsonb not null default '[]',
  doctor_questions jsonb not null default '[]',
  body text,
  seo_title text,
  seo_description text,
  seo_keywords text[] not null default '{}',
  status content_status not null default 'draft',
  content_reviewed_at timestamptz,
  ai_generated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table treatments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null default '',
  when_considered text not null default '',
  advantages jsonb not null default '[]',
  limitations jsonb not null default '[]',
  doctor_questions jsonb not null default '[]',
  cost_considerations text not null default '',
  seo_title text,
  seo_description text,
  seo_keywords text[] not null default '{}',
  status content_status not null default 'draft',
  content_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table stories (
  id uuid primary key default gen_random_uuid(),
  cancer_id uuid not null references cancers(id) on delete cascade,
  title text not null,
  slug text not null unique,
  country text not null,
  age_range text not null,
  decision_topic text not null,
  background text not null default '',
  initial_diagnosis text not null default '',
  decision_challenge text not null default '',
  options_considered jsonb not null default '[]',
  why_compared text not null default '',
  final_decision text not null default '',
  lessons_learned jsonb not null default '[]',
  seo_title text,
  seo_description text,
  seo_keywords text[] not null default '{}',
  status content_status not null default 'draft',
  content_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table global_care_options (
  id uuid primary key default gen_random_uuid(),
  cancer_id uuid references cancers(id) on delete set null,
  title text not null,
  slug text not null unique,
  country_code text not null references countries(code),
  summary text not null default '',
  body text not null default '',
  cost_notes text not null default '',
  seo_title text,
  seo_description text,
  seo_keywords text[] not null default '{}',
  status content_status not null default 'draft',
  content_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  url text not null,
  publisher text,
  published_on date,
  notes text
);

create table decision_topics (
  id uuid primary key default gen_random_uuid(),
  key decision_topic_key not null unique,
  label text not null,
  description text not null default '',
  sort_order int not null default 0
);

create table admin_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role admin_role not null default 'editor',
  display_name text not null
);

create table cancer_treatments (
  cancer_id uuid not null references cancers(id) on delete cascade,
  treatment_id uuid not null references treatments(id) on delete cascade,
  sort_order int not null default 0,
  primary key (cancer_id, treatment_id)
);

create table question_treatments (
  question_id uuid not null references questions(id) on delete cascade,
  treatment_id uuid not null references treatments(id) on delete cascade,
  sort_order int not null default 0,
  primary key (question_id, treatment_id)
);

create table question_stories (
  question_id uuid not null references questions(id) on delete cascade,
  story_id uuid not null references stories(id) on delete cascade,
  sort_order int not null default 0,
  primary key (question_id, story_id)
);

create table related_questions (
  from_id uuid not null references questions(id) on delete cascade,
  to_id uuid not null references questions(id) on delete cascade,
  sort_order int not null default 0,
  primary key (from_id, to_id),
  check (from_id <> to_id)
);

create table story_treatments (
  story_id uuid not null references stories(id) on delete cascade,
  treatment_id uuid not null references treatments(id) on delete cascade,
  sort_order int not null default 0,
  primary key (story_id, treatment_id)
);

create table treatment_countries (
  treatment_id uuid not null references treatments(id) on delete cascade,
  country_code text not null references countries(code) on delete cascade,
  primary key (treatment_id, country_code)
);

create table content_sources (
  entity_type entity_type not null,
  entity_id uuid not null,
  source_id uuid not null references sources(id) on delete cascade,
  primary key (entity_type, entity_id, source_id)
);

create index questions_cancer_status_idx on questions (cancer_id, status);
create index questions_category_idx on questions (category);
create index stories_cancer_status_idx on stories (cancer_id, status);
create index global_care_cancer_idx on global_care_options (cancer_id, status);

alter table cancers enable row level security;
alter table questions enable row level security;
alter table treatments enable row level security;
alter table stories enable row level security;
alter table global_care_options enable row level security;
alter table sources enable row level security;
alter table decision_topics enable row level security;
alter table countries enable row level security;
alter table cancer_treatments enable row level security;
alter table question_treatments enable row level security;
alter table question_stories enable row level security;
alter table related_questions enable row level security;
alter table story_treatments enable row level security;
alter table treatment_countries enable row level security;
alter table content_sources enable row level security;
alter table admin_profiles enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.admin_profiles ap
    where ap.user_id = auth.uid()
      and ap.role in ('admin', 'editor')
  );
$$;

create policy "Public read published cancers" on cancers
  for select using (status = 'published' or public.is_admin());
create policy "Public read published questions" on questions
  for select using (status = 'published' or public.is_admin());
create policy "Public read published treatments" on treatments
  for select using (status = 'published' or public.is_admin());
create policy "Public read published stories" on stories
  for select using (status = 'published' or public.is_admin());
create policy "Public read published global care" on global_care_options
  for select using (status = 'published' or public.is_admin());
create policy "Public read sources" on sources for select using (true);
create policy "Public read decision topics" on decision_topics for select using (true);
create policy "Public read countries" on countries for select using (true);
create policy "Public read cancer_treatments" on cancer_treatments for select using (true);
create policy "Public read question_treatments" on question_treatments for select using (true);
create policy "Public read question_stories" on question_stories for select using (true);
create policy "Public read related_questions" on related_questions for select using (true);
create policy "Public read story_treatments" on story_treatments for select using (true);
create policy "Public read treatment_countries" on treatment_countries for select using (true);
create policy "Public read content_sources" on content_sources for select using (true);

create policy "Admin write cancers" on cancers
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write questions" on questions
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write treatments" on treatments
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write stories" on stories
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write global care" on global_care_options
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write sources" on sources
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write decision topics" on decision_topics
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write countries" on countries
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write cancer_treatments" on cancer_treatments
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write question_treatments" on question_treatments
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write question_stories" on question_stories
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write related_questions" on related_questions
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write story_treatments" on story_treatments
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write treatment_countries" on treatment_countries
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin write content_sources" on content_sources
  for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin read profiles" on admin_profiles
  for select using (auth.uid() = user_id or public.is_admin());
