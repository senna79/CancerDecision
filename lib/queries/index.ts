import type {
  Cancer,
  ContentSource,
  ContentStatus,
  DecisionTopic,
  DecisionTopicKey,
  EntityType,
  GlobalCareOption,
  Question,
  QuestionCategory,
  Source,
  Story,
  Treatment,
} from "@/types/database";
import { readStore, updateStore } from "@/lib/db/store";
import {
  buildJourneyContext,
  buildStoryJourneyLoop,
} from "@/lib/journey/engine";

function publishedOnly<T extends { status: ContentStatus }>(
  items: T[],
  includeUnpublished = false
): T[] {
  if (includeUnpublished) return items;
  return items.filter((item) => item.status === "published");
}

export async function getCancers(opts?: { includeUnpublished?: boolean }) {
  const store = await readStore();
  return publishedOnly(store.cancers, opts?.includeUnpublished).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export async function getCancerBySlug(
  slug: string,
  opts?: { includeUnpublished?: boolean }
) {
  const store = await readStore();
  const cancer = store.cancers.find((c) => c.slug === slug);
  if (!cancer) return null;
  if (!opts?.includeUnpublished && cancer.status !== "published") return null;
  return cancer;
}

export async function getCancerById(id: string) {
  const store = await readStore();
  return store.cancers.find((c) => c.id === id) ?? null;
}

export async function getQuestions(opts?: {
  includeUnpublished?: boolean;
  cancerId?: string;
  category?: QuestionCategory;
  topicKey?: DecisionTopicKey;
}) {
  const store = await readStore();
  let questions = publishedOnly(store.questions, opts?.includeUnpublished);
  if (opts?.cancerId) {
    questions = questions.filter((q) => q.cancer_id === opts.cancerId);
  }
  if (opts?.category) {
    questions = questions.filter((q) => q.category === opts.category);
  }
  if (opts?.topicKey) {
    const categoryMap: Record<DecisionTopicKey, QuestionCategory[]> = {
      newly_diagnosed: ["diagnosis"],
      second_opinion: ["second_opinion"],
      compare_treatments: ["treatment"],
      treatment_abroad: ["global_care"],
      understand_costs: ["cost"],
    };
    const cats = categoryMap[opts.topicKey];
    questions = questions.filter((q) => cats.includes(q.category));
  }
  return questions.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getQuestionBySlug(
  slug: string,
  opts?: { includeUnpublished?: boolean }
) {
  const store = await readStore();
  const question = store.questions.find((q) => q.slug === slug);
  if (!question) return null;
  if (!opts?.includeUnpublished && question.status !== "published") return null;
  return question;
}

export async function getTreatments(opts?: { includeUnpublished?: boolean }) {
  const store = await readStore();
  return publishedOnly(store.treatments, opts?.includeUnpublished).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export async function getTreatmentBySlug(
  slug: string,
  opts?: { includeUnpublished?: boolean }
) {
  const store = await readStore();
  const treatment = store.treatments.find((t) => t.slug === slug);
  if (!treatment) return null;
  if (!opts?.includeUnpublished && treatment.status !== "published") return null;
  return treatment;
}

export async function getStories(opts?: {
  includeUnpublished?: boolean;
  cancerId?: string;
  limit?: number;
}) {
  const store = await readStore();
  let stories = publishedOnly(store.stories, opts?.includeUnpublished);
  if (opts?.cancerId) {
    stories = stories.filter((s) => s.cancer_id === opts.cancerId);
  }
  stories = stories.sort(
    (a, b) => +new Date(b.created_at) - +new Date(a.created_at)
  );
  if (opts?.limit) return stories.slice(0, opts.limit);
  return stories;
}

export async function getStoryBySlug(
  slug: string,
  opts?: { includeUnpublished?: boolean }
) {
  const store = await readStore();
  const story = store.stories.find((s) => s.slug === slug);
  if (!story) return null;
  if (!opts?.includeUnpublished && story.status !== "published") return null;
  return story;
}

export async function getGlobalCareOptions(opts?: {
  includeUnpublished?: boolean;
  cancerId?: string | null;
}) {
  const store = await readStore();
  let options = publishedOnly(
    store.global_care_options,
    opts?.includeUnpublished
  );
  if (opts?.cancerId !== undefined) {
    options = options.filter((o) => o.cancer_id === opts.cancerId);
  }
  return options.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getGlobalCareBySlug(
  slug: string,
  opts?: { includeUnpublished?: boolean }
) {
  const store = await readStore();
  const option = store.global_care_options.find((o) => o.slug === slug);
  if (!option) return null;
  if (!opts?.includeUnpublished && option.status !== "published") return null;
  return option;
}

export async function getDecisionTopics(): Promise<DecisionTopic[]> {
  const store = await readStore();
  return [...store.decision_topics].sort((a, b) => a.sort_order - b.sort_order);
}

export async function getSourcesForEntity(
  entityType: EntityType,
  entityId: string
): Promise<Source[]> {
  const store = await readStore();
  const sourceIds = store.content_sources
    .filter((cs) => cs.entity_type === entityType && cs.entity_id === entityId)
    .map((cs) => cs.source_id);
  return store.sources.filter((s) => sourceIds.includes(s.id));
}

export async function getAllSources() {
  const store = await readStore();
  return [...store.sources].sort((a, b) => a.title.localeCompare(b.title));
}

export async function getCountries() {
  const store = await readStore();
  return [...store.countries].sort((a, b) => a.name.localeCompare(b.name));
}

export async function getTreatmentsForCancer(cancerId: string) {
  const store = await readStore();
  const links = store.cancer_treatments
    .filter((ct) => ct.cancer_id === cancerId)
    .sort((a, b) => a.sort_order - b.sort_order);
  return links
    .map((link) => store.treatments.find((t) => t.id === link.treatment_id))
    .filter((t): t is Treatment => !!t && t.status === "published");
}

export async function getTreatmentsForQuestion(questionId: string) {
  const store = await readStore();
  const links = store.question_treatments
    .filter((qt) => qt.question_id === questionId)
    .sort((a, b) => a.sort_order - b.sort_order);
  return links
    .map((link) => store.treatments.find((t) => t.id === link.treatment_id))
    .filter((t): t is Treatment => !!t && t.status === "published");
}

export async function getStoriesForQuestion(questionId: string) {
  const store = await readStore();
  const links = store.question_stories
    .filter((qs) => qs.question_id === questionId)
    .sort((a, b) => a.sort_order - b.sort_order);
  return links
    .map((link) => store.stories.find((s) => s.id === link.story_id))
    .filter((s): s is Story => !!s && s.status === "published");
}

export async function getRelatedQuestions(questionId: string) {
  const store = await readStore();
  const links = store.related_questions
    .filter((rq) => rq.from_id === questionId)
    .sort((a, b) => a.sort_order - b.sort_order);
  return links
    .map((link) => store.questions.find((q) => q.id === link.to_id))
    .filter((q): q is Question => !!q && q.status === "published");
}

export async function getTreatmentsForStory(storyId: string) {
  const store = await readStore();
  const links = store.story_treatments
    .filter((st) => st.story_id === storyId)
    .sort((a, b) => a.sort_order - b.sort_order);
  return links
    .map((link) => store.treatments.find((t) => t.id === link.treatment_id))
    .filter((t): t is Treatment => !!t && t.status === "published");
}

export async function getCountriesForTreatment(treatmentId: string) {
  const store = await readStore();
  const codes = store.treatment_countries
    .filter((tc) => tc.treatment_id === treatmentId)
    .map((tc) => tc.country_code);
  return store.countries.filter((c) => codes.includes(c.code));
}

export async function getDecisionMapForCancer(cancerId: string) {
  const store = await readStore();
  return store.decision_maps.find((m) => m.cancer_id === cancerId) ?? null;
}

export async function getCancerDecisionCenter(slug: string) {
  const cancer = await getCancerBySlug(slug);
  if (!cancer) return null;

  const [questions, treatments, stories, globalOptions, sources, decisionMap] =
    await Promise.all([
      getQuestions({ cancerId: cancer.id }),
      getTreatmentsForCancer(cancer.id),
      getStories({ cancerId: cancer.id }),
      getGlobalCareOptions({ cancerId: cancer.id }),
      getSourcesForEntity("cancer", cancer.id),
      getDecisionMapForCancer(cancer.id),
    ]);

  return {
    cancer,
    questions,
    treatments,
    stories,
    globalOptions,
    sources,
    decisionMap,
    secondOpinionQuestions: questions.filter(
      (q) => q.category === "second_opinion"
    ),
  };
}

export async function getQuestionPage(slug: string) {
  const question = await getQuestionBySlug(slug);
  if (!question) return null;

  const [
    cancer,
    linkedTreatments,
    linkedStories,
    linkedRelated,
    sources,
  ] = await Promise.all([
    getCancerById(question.cancer_id),
    getTreatmentsForQuestion(question.id),
    getStoriesForQuestion(question.id),
    getRelatedQuestions(question.id),
    getSourcesForEntity("question", question.id),
  ]);

  const [cancerTreatments, cancerStories, cancerQuestions] = await Promise.all([
    linkedTreatments.length === 0
      ? getTreatmentsForCancer(question.cancer_id)
      : Promise.resolve([]),
    linkedStories.length === 0
      ? getStories({ cancerId: question.cancer_id, limit: 3 })
      : Promise.resolve([]),
    linkedRelated.length === 0
      ? getQuestions({ cancerId: question.cancer_id })
      : Promise.resolve([]),
  ]);

  const treatments =
    linkedTreatments.length > 0
      ? linkedTreatments
      : cancerTreatments.slice(0, 3);
  const stories =
    linkedStories.length > 0 ? linkedStories : cancerStories.slice(0, 2);
  const relatedQuestions =
    linkedRelated.length > 0
      ? linkedRelated
      : cancerQuestions.filter((q) => q.id !== question.id).slice(0, 4);

  const decisionMap = cancer
    ? await getDecisionMapForCancer(cancer.id)
    : null;
  const journey =
    decisionMap != null
      ? buildJourneyContext(decisionMap, question.slug)
      : null;

  return {
    question,
    cancer,
    treatments,
    stories,
    relatedQuestions,
    sources,
    journey,
  };
}

export async function getTreatmentPage(slug: string) {
  const treatment = await getTreatmentBySlug(slug);
  if (!treatment) return null;
  const [countries, sources] = await Promise.all([
    getCountriesForTreatment(treatment.id),
    getSourcesForEntity("treatment", treatment.id),
  ]);
  return { treatment, countries, sources };
}

export async function getStoryPage(slug: string) {
  const story = await getStoryBySlug(slug);
  if (!story) return null;
  const [cancer, treatments, sources] = await Promise.all([
    getCancerById(story.cancer_id),
    getTreatmentsForStory(story.id),
    getSourcesForEntity("story", story.id),
  ]);
  const decisionMap = cancer
    ? await getDecisionMapForCancer(cancer.id)
    : null;
  const journeyLoop =
    decisionMap != null
      ? buildStoryJourneyLoop(decisionMap, story.slug)
      : null;

  let questionTitles: Record<string, string> = {};
  let treatmentNames: Record<string, string> = {};
  if (journeyLoop) {
    const store = await readStore();
    questionTitles = Object.fromEntries(
      store.questions
        .filter((q) =>
          journeyLoop.connectedQuestionSlugs.includes(q.slug)
        )
        .map((q) => [q.slug, q.title])
    );
    treatmentNames = Object.fromEntries(
      store.treatments
        .filter((t) =>
          journeyLoop.connectedTreatmentSlugs.includes(t.slug)
        )
        .map((t) => [t.slug, t.name])
    );
  }

  return {
    story,
    cancer,
    treatments,
    sources,
    journeyLoop,
    questionTitles,
    treatmentNames,
  };
}

export async function getSitemapEntries() {
  const [cancers, questions, treatments, stories, globalCare] =
    await Promise.all([
      getCancers(),
      getQuestions(),
      getTreatments(),
      getStories(),
      getGlobalCareOptions(),
    ]);

  return {
    cancers,
    questions,
    treatments,
    stories,
    globalCare,
  };
}

// Admin mutations
function stamp() {
  return new Date().toISOString();
}

export async function upsertCancer(
  input: Omit<Cancer, "created_at" | "updated_at"> & {
    created_at?: string;
    updated_at?: string;
  }
) {
  return updateStore((store) => {
    const idx = store.cancers.findIndex((c) => c.id === input.id);
    const record: Cancer = {
      ...input,
      created_at: input.created_at ?? stamp(),
      updated_at: stamp(),
    };
    if (idx >= 0) store.cancers[idx] = record;
    else store.cancers.push(record);
  });
}

export async function upsertQuestion(
  input: Omit<Question, "created_at" | "updated_at"> & {
    created_at?: string;
    updated_at?: string;
  }
) {
  return updateStore((store) => {
    const idx = store.questions.findIndex((q) => q.id === input.id);
    const record: Question = {
      ...input,
      created_at: input.created_at ?? stamp(),
      updated_at: stamp(),
    };
    if (idx >= 0) store.questions[idx] = record;
    else store.questions.push(record);
  });
}

export async function upsertTreatment(
  input: Omit<Treatment, "created_at" | "updated_at"> & {
    created_at?: string;
    updated_at?: string;
  }
) {
  return updateStore((store) => {
    const idx = store.treatments.findIndex((t) => t.id === input.id);
    const record: Treatment = {
      ...input,
      created_at: input.created_at ?? stamp(),
      updated_at: stamp(),
    };
    if (idx >= 0) store.treatments[idx] = record;
    else store.treatments.push(record);
  });
}

export async function upsertStory(
  input: Omit<Story, "created_at" | "updated_at"> & {
    created_at?: string;
    updated_at?: string;
  }
) {
  return updateStore((store) => {
    const idx = store.stories.findIndex((s) => s.id === input.id);
    const record: Story = {
      ...input,
      created_at: input.created_at ?? stamp(),
      updated_at: stamp(),
    };
    if (idx >= 0) store.stories[idx] = record;
    else store.stories.push(record);
  });
}

export async function upsertGlobalCareOption(
  input: Omit<GlobalCareOption, "created_at" | "updated_at"> & {
    created_at?: string;
    updated_at?: string;
  }
) {
  return updateStore((store) => {
    const idx = store.global_care_options.findIndex((o) => o.id === input.id);
    const record: GlobalCareOption = {
      ...input,
      created_at: input.created_at ?? stamp(),
      updated_at: stamp(),
    };
    if (idx >= 0) store.global_care_options[idx] = record;
    else store.global_care_options.push(record);
  });
}

export async function upsertSource(input: Source) {
  return updateStore((store) => {
    const idx = store.sources.findIndex((s) => s.id === input.id);
    if (idx >= 0) store.sources[idx] = input;
    else store.sources.push(input);
  });
}

export async function setQuestionTreatments(
  questionId: string,
  treatmentIds: string[]
) {
  return updateStore((store) => {
    store.question_treatments = store.question_treatments.filter(
      (qt) => qt.question_id !== questionId
    );
    treatmentIds.forEach((treatmentId, sort_order) => {
      store.question_treatments.push({
        question_id: questionId,
        treatment_id: treatmentId,
        sort_order,
      });
    });
  });
}

export async function setRelatedQuestions(fromId: string, toIds: string[]) {
  return updateStore((store) => {
    store.related_questions = store.related_questions.filter(
      (rq) => rq.from_id !== fromId
    );
    toIds.forEach((to_id, sort_order) => {
      store.related_questions.push({ from_id: fromId, to_id, sort_order });
    });
  });
}

export async function setContentSources(
  entityType: EntityType,
  entityId: string,
  sourceIds: string[]
) {
  return updateStore((store) => {
    store.content_sources = store.content_sources.filter(
      (cs) => !(cs.entity_type === entityType && cs.entity_id === entityId)
    );
    sourceIds.forEach((source_id) => {
      const link: ContentSource = {
        entity_type: entityType,
        entity_id: entityId,
        source_id,
      };
      store.content_sources.push(link);
    });
  });
}

export async function setCancerTreatments(
  cancerId: string,
  treatmentIds: string[]
) {
  return updateStore((store) => {
    store.cancer_treatments = store.cancer_treatments.filter(
      (ct) => ct.cancer_id !== cancerId
    );
    treatmentIds.forEach((treatment_id, sort_order) => {
      store.cancer_treatments.push({
        cancer_id: cancerId,
        treatment_id,
        sort_order,
      });
    });
  });
}

export async function setQuestionStories(questionId: string, storyIds: string[]) {
  return updateStore((store) => {
    store.question_stories = store.question_stories.filter(
      (qs) => qs.question_id !== questionId
    );
    storyIds.forEach((story_id, sort_order) => {
      store.question_stories.push({
        question_id: questionId,
        story_id,
        sort_order,
      });
    });
  });
}

export async function setStoryTreatments(storyId: string, treatmentIds: string[]) {
  return updateStore((store) => {
    store.story_treatments = store.story_treatments.filter(
      (st) => st.story_id !== storyId
    );
    treatmentIds.forEach((treatment_id, sort_order) => {
      store.story_treatments.push({
        story_id: storyId,
        treatment_id,
        sort_order,
      });
    });
  });
}

export async function setTreatmentCountries(
  treatmentId: string,
  countryCodes: string[]
) {
  return updateStore((store) => {
    store.treatment_countries = store.treatment_countries.filter(
      (tc) => tc.treatment_id !== treatmentId
    );
    countryCodes.forEach((country_code) => {
      store.treatment_countries.push({
        treatment_id: treatmentId,
        country_code,
      });
    });
  });
}
