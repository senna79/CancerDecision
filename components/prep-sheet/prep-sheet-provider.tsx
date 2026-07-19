"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_PREP_CANCER,
  emptyPrepSheet,
  makePrepItemId,
  PREP_SHEET_STORAGE_KEY,
  type PrepItem,
  type PrepSection,
  type PrepSheetState,
} from "@/lib/prep-sheet/types";

type AddPrepInput = {
  section: PrepSection;
  text: string;
  sourceLabel?: string;
  sourceHref?: string;
};

type PrepSheetContextValue = {
  ready: boolean;
  state: PrepSheetState;
  count: number;
  hasItem: (section: PrepSection, text: string) => boolean;
  addItem: (input: AddPrepInput) => void;
  removeItem: (id: string) => void;
  toggleItem: (input: AddPrepInput) => void;
  setCustomNote: (note: string) => void;
  clearAll: () => void;
};

const PrepSheetContext = createContext<PrepSheetContextValue | null>(null);

function readStored(): PrepSheetState {
  if (typeof window === "undefined") {
    return emptyPrepSheet();
  }
  try {
    const raw = window.localStorage.getItem(PREP_SHEET_STORAGE_KEY);
    if (!raw) return emptyPrepSheet();
    const parsed = JSON.parse(raw) as PrepSheetState;
    if (parsed?.version !== 1 || !Array.isArray(parsed.items)) {
      return emptyPrepSheet();
    }
    return {
      version: 1,
      cancerSlug: parsed.cancerSlug || DEFAULT_PREP_CANCER,
      items: parsed.items,
      customNote: typeof parsed.customNote === "string" ? parsed.customNote : "",
    };
  } catch {
    return emptyPrepSheet();
  }
}

export function PrepSheetProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PrepSheetState>(emptyPrepSheet);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(readStored());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(PREP_SHEET_STORAGE_KEY, JSON.stringify(state));
  }, [ready, state]);

  const hasItem = useCallback(
    (section: PrepSection, text: string) => {
      const id = makePrepItemId(section, text);
      return state.items.some((item) => item.id === id);
    },
    [state.items]
  );

  const addItem = useCallback((input: AddPrepInput) => {
    const text = input.text.trim();
    if (!text) return;
    const id = makePrepItemId(input.section, text);
    setState((prev) => {
      if (prev.items.some((item) => item.id === id)) return prev;
      const next: PrepItem = {
        id,
        section: input.section,
        text,
        sourceLabel: input.sourceLabel,
        sourceHref: input.sourceHref,
        addedAt: Date.now(),
      };
      return { ...prev, items: [...prev.items, next] };
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  }, []);

  const toggleItem = useCallback(
    (input: AddPrepInput) => {
      const id = makePrepItemId(input.section, input.text);
      setState((prev) => {
        if (prev.items.some((item) => item.id === id)) {
          return {
            ...prev,
            items: prev.items.filter((item) => item.id !== id),
          };
        }
        const text = input.text.trim();
        if (!text) return prev;
        return {
          ...prev,
          items: [
            ...prev.items,
            {
              id,
              section: input.section,
              text,
              sourceLabel: input.sourceLabel,
              sourceHref: input.sourceHref,
              addedAt: Date.now(),
            },
          ],
        };
      });
    },
    []
  );

  const setCustomNote = useCallback((note: string) => {
    setState((prev) => ({ ...prev, customNote: note }));
  }, []);

  const clearAll = useCallback(() => {
    setState(emptyPrepSheet());
  }, []);

  const value = useMemo<PrepSheetContextValue>(
    () => ({
      ready,
      state,
      count: state.items.length,
      hasItem,
      addItem,
      removeItem,
      toggleItem,
      setCustomNote,
      clearAll,
    }),
    [
      ready,
      state,
      hasItem,
      addItem,
      removeItem,
      toggleItem,
      setCustomNote,
      clearAll,
    ]
  );

  return (
    <PrepSheetContext.Provider value={value}>
      {children}
    </PrepSheetContext.Provider>
  );
}

export function usePrepSheet() {
  const ctx = useContext(PrepSheetContext);
  if (!ctx) {
    throw new Error("usePrepSheet must be used within PrepSheetProvider");
  }
  return ctx;
}
