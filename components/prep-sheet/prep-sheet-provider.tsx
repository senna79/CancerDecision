"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
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

export type PrepFlyChip = {
  id: string;
  label: string;
  fromX: number;
  fromY: number;
  dx: number;
  dy: number;
};

type PrepSheetContextValue = {
  ready: boolean;
  state: PrepSheetState;
  count: number;
  flights: PrepFlyChip[];
  fabBump: number;
  hasItem: (section: PrepSection, text: string) => boolean;
  addItem: (input: AddPrepInput) => void;
  removeItem: (id: string) => void;
  toggleItem: (input: AddPrepInput) => void;
  setCustomNote: (note: string) => void;
  clearAll: () => void;
  /** Launch a chip that flies toward the prep-sheet FAB (Add only). */
  launchAddFlight: (origin: { x: number; y: number }, label: string) => void;
  completeFlight: (id: string) => void;
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

function truncateFlyLabel(text: string) {
  const trimmed = text.trim();
  if (trimmed.length <= 42) return trimmed;
  return `${trimmed.slice(0, 39)}…`;
}

export function PrepSheetProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PrepSheetState>(emptyPrepSheet);
  const [ready, setReady] = useState(false);
  const [flights, setFlights] = useState<PrepFlyChip[]>([]);
  const [fabBump, setFabBump] = useState(0);

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

  const completeFlight = useCallback((id: string) => {
    setFlights((prev) => prev.filter((flight) => flight.id !== id));
    setFabBump((n) => n + 1);
  }, []);

  const launchAddFlight = useCallback(
    (origin: { x: number; y: number }, label: string) => {
      if (typeof window === "undefined") return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches;
      if (reduced) {
        setFabBump((n) => n + 1);
        return;
      }

      const fab = document.getElementById("prep-sheet-fab");
      const fabRect = fab?.getBoundingClientRect();
      const toX = fabRect
        ? fabRect.left + fabRect.width / 2
        : window.innerWidth - 72;
      const toY = fabRect
        ? fabRect.top + fabRect.height / 2
        : window.innerHeight - 40;

      const id = `prep-fly-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
      setFlights((prev) => [
        ...prev,
        {
          id,
          label: truncateFlyLabel(label),
          fromX: origin.x,
          fromY: origin.y,
          dx: toX - origin.x,
          dy: toY - origin.y,
        },
      ]);
    },
    []
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
      flights,
      fabBump,
      hasItem,
      addItem,
      removeItem,
      toggleItem,
      setCustomNote,
      clearAll,
      launchAddFlight,
      completeFlight,
    }),
    [
      ready,
      state,
      flights,
      fabBump,
      hasItem,
      addItem,
      removeItem,
      toggleItem,
      setCustomNote,
      clearAll,
      launchAddFlight,
      completeFlight,
    ]
  );

  return (
    <PrepSheetContext.Provider value={value}>
      {children}
      <PrepSheetFlightLayer />
    </PrepSheetContext.Provider>
  );
}

function PrepSheetFlightLayer() {
  const { flights, completeFlight } = usePrepSheet();

  if (!flights.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50" aria-hidden>
      {flights.map((flight) => (
        <span
          key={flight.id}
          className="prep-fly-chip absolute max-w-[14rem] truncate rounded-md border border-[var(--accent)] bg-white px-2.5 py-1 text-xs font-semibold text-[var(--accent)] shadow-md"
          style={
            {
              left: flight.fromX,
              top: flight.fromY,
              "--prep-fly-dx": `${flight.dx}px`,
              "--prep-fly-dy": `${flight.dy}px`,
            } as CSSProperties
          }
          onAnimationEnd={() => completeFlight(flight.id)}
        >
          {flight.label}
        </span>
      ))}
    </div>
  );
}

export function usePrepSheet() {
  const ctx = useContext(PrepSheetContext);
  if (!ctx) {
    throw new Error("usePrepSheet must be used within PrepSheetProvider");
  }
  return ctx;
}
