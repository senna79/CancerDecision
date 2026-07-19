"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Collapsed technical map; auto-opens when URL hash is #decision-map. */
export function DecisionMapFold({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const openIfTargeted = () => {
      if (window.location.hash === "#decision-map" && ref.current) {
        ref.current.open = true;
      }
    };
    openIfTargeted();
    window.addEventListener("hashchange", openIfTargeted);
    return () => window.removeEventListener("hashchange", openIfTargeted);
  }, []);

  return (
    <details
      ref={ref}
      id="decision-map"
      className="scroll-mt-24 mt-10 rounded-lg border border-[var(--line)] bg-[var(--paper-deep)]/40 px-5 py-4 md:px-6"
    >
      <summary className="cursor-pointer font-heading text-lg font-semibold text-[var(--ink)]">
        Full technical decision map
      </summary>
      <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
        Complete node graph for structure and deep links — most people can stay
        with the situation map and nearby decisions above.
      </p>
      <div className="mt-4">{children}</div>
    </details>
  );
}
