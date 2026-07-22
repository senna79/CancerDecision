"use client";

import { createContext, useContext, type ReactNode } from "react";

type PrepSourceValue = {
  label?: string;
  href?: string;
  cancerSlug?: string;
};

const PrepSourceContext = createContext<PrepSourceValue>({});

export function PrepSourceProvider({
  label,
  href,
  cancerSlug,
  children,
}: PrepSourceValue & { children: ReactNode }) {
  return (
    <PrepSourceContext.Provider value={{ label, href, cancerSlug }}>
      {children}
    </PrepSourceContext.Provider>
  );
}

export function usePrepSource() {
  return useContext(PrepSourceContext);
}
