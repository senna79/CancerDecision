"use client";

import { createContext, useContext, type ReactNode } from "react";

type PrepSourceValue = {
  label?: string;
  href?: string;
};

const PrepSourceContext = createContext<PrepSourceValue>({});

export function PrepSourceProvider({
  label,
  href,
  children,
}: PrepSourceValue & { children: ReactNode }) {
  return (
    <PrepSourceContext.Provider value={{ label, href }}>
      {children}
    </PrepSourceContext.Provider>
  );
}

export function usePrepSource() {
  return useContext(PrepSourceContext);
}
