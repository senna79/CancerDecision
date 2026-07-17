import { promises as fs } from "fs";
import path from "path";
import type { KnowledgeGraphStore } from "@/types/database";
import { createSeedData } from "./seed-data";

const STORE_PATH = path.join(process.cwd(), "data", "store.json");

let memoryStore: KnowledgeGraphStore | null = null;

async function ensureStoreFile(): Promise<void> {
  const dir = path.dirname(STORE_PATH);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    const seed = createSeedData();
    await fs.writeFile(STORE_PATH, JSON.stringify(seed, null, 2), "utf8");
  }
}

function normalizeStore(store: KnowledgeGraphStore): KnowledgeGraphStore {
  return {
    ...store,
    decision_maps: store.decision_maps ?? [],
    questions: (store.questions ?? []).map((q) => ({
      ...q,
      decision_context: q.decision_context ?? null,
      when_this_may_help: q.when_this_may_help ?? [],
      when_it_may_not_help: q.when_it_may_not_help ?? [],
      options_and_tradeoffs: q.options_and_tradeoffs ?? [],
      records_to_prepare: q.records_to_prepare ?? [],
      next_steps: q.next_steps ?? [],
      if_opinions_conflict: q.if_opinions_conflict ?? [],
    })),
  };
}

export async function readStore(): Promise<KnowledgeGraphStore> {
  if (memoryStore) return structuredClone(memoryStore);
  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");
  memoryStore = normalizeStore(JSON.parse(raw) as KnowledgeGraphStore);
  return structuredClone(memoryStore);
}

export async function writeStore(store: KnowledgeGraphStore): Promise<void> {
  await ensureStoreFile();
  memoryStore = structuredClone(store);
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
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
