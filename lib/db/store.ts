import { promises as fs } from "fs";
import path from "path";
import type { KnowledgeGraphStore } from "@/types/database";
import { createSeedData } from "./seed-data";

const STORE_PATH = path.join(process.cwd(), "data", "store.json");

let memoryStore: KnowledgeGraphStore | null = null;

/**
 * Persist seed to disk when possible. On read-only hosts (e.g. Vercel
 * serverless), skip writes — readStore falls back to in-memory seed.
 */
async function tryPersistSeed(seed: KnowledgeGraphStore): Promise<void> {
  try {
    await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
    await fs.writeFile(STORE_PATH, JSON.stringify(seed, null, 2), "utf8");
  } catch {
    // Read-only or missing volume — memory seed is enough for public pages.
  }
}

function normalizeStore(store: KnowledgeGraphStore): KnowledgeGraphStore {
  return {
    ...store,
    decision_maps: (store.decision_maps ?? []).map((map) => ({
      ...map,
      nodes: (map.nodes ?? []).map((node) => ({
        ...node,
        state_label: node.state_label ?? undefined,
        next_node_ids: node.next_node_ids ?? undefined,
        question_slugs: node.question_slugs ?? [],
        treatment_slugs: node.treatment_slugs ?? [],
        story_slugs: node.story_slugs ?? [],
        moment_id: node.moment_id ?? undefined,
        moment_slug: node.moment_slug ?? undefined,
        moment_tier: node.moment_tier ?? undefined,
        why_this_matters: node.why_this_matters ?? undefined,
        facets: node.facets ?? undefined,
      })),
    })),
    questions: (store.questions ?? []).map((q) => ({
      ...q,
      decision_context: q.decision_context ?? null,
      when_this_may_help: q.when_this_may_help ?? [],
      when_it_may_not_help: q.when_it_may_not_help ?? [],
      options_and_tradeoffs: q.options_and_tradeoffs ?? [],
      records_to_prepare: q.records_to_prepare ?? [],
      next_steps: q.next_steps ?? [],
      if_opinions_conflict: q.if_opinions_conflict ?? [],
      timing_considerations: q.timing_considerations ?? [],
      decision_triggers: q.decision_triggers ?? [],
    })),
  };
}

export async function readStore(): Promise<KnowledgeGraphStore> {
  if (memoryStore) return structuredClone(memoryStore);

  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    memoryStore = normalizeStore(JSON.parse(raw) as KnowledgeGraphStore);
  } catch {
    const seed = normalizeStore(createSeedData());
    memoryStore = seed;
    await tryPersistSeed(seed);
  }

  return structuredClone(memoryStore);
}

export async function writeStore(store: KnowledgeGraphStore): Promise<void> {
  memoryStore = structuredClone(store);
  try {
    await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
    await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
  } catch {
    // Keep in-memory store so the request can succeed on read-only hosts.
  }
}

export async function updateStore(
  updater: (store: KnowledgeGraphStore) => KnowledgeGraphStore | void
): Promise<KnowledgeGraphStore> {
  const current = await readStore();
  const next = updater(current) ?? current;
  await writeStore(next);
  return structuredClone(next);
}

export async function resetStore(): Promise<KnowledgeGraphStore> {
  const seed = createSeedData();
  await writeStore(seed);
  return structuredClone(seed);
}
