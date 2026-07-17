"use client";

import { useMemo, useState } from "react";
import { Label } from "@/components/ui/label";

export function MultiCheckField({
  label,
  name,
  options,
  selected,
}: {
  label: string;
  name: string;
  options: Array<{ id: string; label: string }>;
  selected: string[];
}) {
  const [values, setValues] = useState<string[]>(selected);
  const valueString = useMemo(() => values.join(","), [values]);

  function toggle(id: string) {
    setValues((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="max-h-48 space-y-2 overflow-y-auto rounded-md border border-[var(--line)] p-3">
        {options.map((opt) => (
          <label key={opt.id} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={values.includes(opt.id)}
              onChange={() => toggle(opt.id)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      <input type="hidden" name={name} value={valueString} />
    </div>
  );
}
