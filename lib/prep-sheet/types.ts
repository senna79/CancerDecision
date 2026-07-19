export type PrepSection = "ask" | "bring" | "note";

export type PrepItem = {
  id: string;
  section: PrepSection;
  text: string;
  sourceLabel?: string;
  sourceHref?: string;
  addedAt: number;
};

export type PrepSheetState = {
  version: 1;
  cancerSlug: string;
  items: PrepItem[];
  customNote: string;
};

export const PREP_SHEET_STORAGE_KEY = "cns-prep-sheet-v1";
export const DEFAULT_PREP_CANCER = "lung-cancer";

export function makePrepItemId(section: PrepSection, text: string) {
  const normalized = `${section}:${text.trim().toLowerCase()}`;
  let hash = 0;
  for (let i = 0; i < normalized.length; i += 1) {
    hash = (hash * 31 + normalized.charCodeAt(i)) >>> 0;
  }
  return `prep-${section}-${hash.toString(16)}`;
}

export function emptyPrepSheet(
  cancerSlug = DEFAULT_PREP_CANCER
): PrepSheetState {
  return {
    version: 1,
    cancerSlug,
    items: [],
    customNote: "",
  };
}

export function formatPrepSheetText(state: PrepSheetState) {
  const ask = state.items.filter((item) => item.section === "ask");
  const bring = state.items.filter((item) => item.section === "bring");
  const notes = state.items.filter((item) => item.section === "note");

  const lines = [
    "My appointment prep sheet",
    "Cancer Next Step — educational decision support, not medical advice.",
    "",
  ];

  if (ask.length) {
    lines.push("Questions to ask");
    for (const item of ask) {
      lines.push(`☐ ${item.text}`);
    }
    lines.push("");
  }

  if (bring.length) {
    lines.push("Records / materials to bring");
    for (const item of bring) {
      lines.push(`☐ ${item.text}`);
    }
    lines.push("");
  }

  if (notes.length || state.customNote.trim()) {
    lines.push("Notes / still unsure");
    for (const item of notes) {
      lines.push(`• ${item.text}`);
    }
    if (state.customNote.trim()) {
      lines.push(state.customNote.trim());
    }
    lines.push("");
  }

  lines.push("cancernextstep.com/prep-sheet");
  return lines.join("\n");
}
