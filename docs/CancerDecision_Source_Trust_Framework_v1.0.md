# CancerDecision Source & Trust Framework v1.0

Shared trust layer for Tier-1 AI Entries and medical decision pages.

**Goal:** Make CancerDecision readable as structured decision support grounded in authoritative public guidance — not AI-generated medical advice.

---

## Principles

1. **Verifyable** — pages name the guidance families they are informed by, and list concrete references when available.
2. **Honest review language** — never claim “medically reviewed by doctors” unless a named physician reviewer is recorded.
3. **AI transparency** — disclose AI-assisted drafting and editorial review for structure, accuracy, and source alignment.
4. **Purpose boundary** — decision support and patient preparation; not diagnosis or treatment advice.
5. **Scale** — one module for all cancers; Entries inherit the framework instead of hand-rolling trust copy.

---

## What every Tier-1 Entry inherits

| Element | Placement | Notes |
|---|---|---|
| Trust strip | Top of page | Short educational boundary + last checked |
| Direct Answer | Near top | AI-citable; inline `[n]` markers optional (Phase 2) |
| Sources & Review Information | Page bottom | Unified module — sources, review meta, AI disclosure, purpose |
| Medical disclaimer | Inside bottom module | Single copy; not duplicated |
| Structured data | Head | `MedicalWebPage` + `Article` + `BreadcrumbList` + `Question` |
| Editorial policy | `/about` | Site-level AI + review policy |

**Do not use:** `FAQPage` spam, `ClaimReview` for clinical claims.

---

## Review language (required wording)

### Current (AI-assisted + editorial)

- AI-assisted content creation
- Reviewed for structure, accuracy, and source alignment
- Content last checked: `{date}`
- Not physician-medically reviewed unless a named medical reviewer is listed

### Future (only when true)

- Medically reviewed by: Dr. {Name}
- Specialty: {Specialty}

---

## Source families (lung cancer default)

Pages may state they are informed by publicly available guidance from:

- National Cancer Institute (NCI)
- American Society of Clinical Oncology (ASCO) / Cancer.Net
- European Society for Medical Oncology (ESMO)
- National Comprehensive Cancer Network (NCCN)

Concrete URLs live in the `sources` catalog and `content_sources` links — not hardcoded in Entry prose.

---

## Inline citations (Phase 2)

- Prefer sparse markers on the Direct Answer only: e.g. `…patient goals.[1][2]`
- Expand numbered References in the bottom module
- Do **not** footnote every sentence in decision-navigation copy

---

## Implementation map

| Asset | Path |
|---|---|
| Framework config | `lib/trust/framework.ts` |
| Bottom module | `components/trust/sources-and-review.tsx` |
| Top strip | `components/trust/trust-strip.tsx` |
| Site policy | `app/(public)/about/page.tsx` |
| Source catalog + links | `lib/db/seed-data.ts` |

---

## Rollout

1. Ship shared module + config (this version)
2. Curate core references for lung Tier-1 Entries
3. Later: optional Direct Answer `[n]` anchors per Entry
4. Later: named medical reviewer fields when available
