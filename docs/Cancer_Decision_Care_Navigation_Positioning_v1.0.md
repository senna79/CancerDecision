# Cancer Decision & Care Navigation — Phase Spec v1.2

**Status:** Active — **basis for next development phase**  
**Phase A:** Implemented in codebase (Transparency, Care Options mounts, partner types, noindex index stub)  
**Supersedes:** v1.1 (tightens UI naming, lead fields, noindex, Care Options template, milestone order, homepage tone)  
**Commercial focus:** International / cross-border **Partner layer** (not homepage brand)  
**Legal posture:** Transparent navigation — not “pretend-neutral dark commission”  
**Related:** `Cancer_Decision_OS_Architecture_v1.0.md` · `Entry_Template_v2.0.md` · `Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md`

> **Not legal advice.** Product and engineering rules for counsel to review. Lead submission ships only after disclosure + Privacy Policy language is approved (US advertising / EU GDPR as applicable).

---

## 0. Phase goal

Deliver the **Care Navigation commercial layer** on top of Decision OS — without turning Entries into hospital ads.

| Ship | Outcome |
|------|---------|
| Transparency | Users can see how we may be paid |
| Care Options block | Fixed factor template at path endings |
| Partner Profiles | Labeled, **noindex** profiles (fixture data OK first) |
| Countable leads | Short form → lead ID → handoff (**last** milestone) |
| Firewall | Decision / Prep clinical copy never altered by who pays |

**Out of this phase:** Breast journey (separate plan); US insurance matching; record uploads; hospital rankings; free-text clinical messages; silent lead pixels on Entry views.

**Standing content rule (agreed):** Do **not** build country × cancer “medical advantage” comparison pages or league tables. Cross-border “why explore” covers access gaps, lost confidence, rejecting the current plan, international-patient support, cost/coverage, and paths not available locally — plus Care Options compare factors and factual Partner Profiles. Do **not** lead with country rankings or “last try / hail Mary” as a primary reason.

**We are not building a “hospital marketplace.”**  
Positioning stays **Decision guides + Care Navigation** — Partners are an optional resource layer, not the product identity.

---

## 1. Product principles

### P1 — Layer order (unchanged)

```text
① Decision → ② Prep → ③ Care Options → ④ Partner
```

Partner never appears in Entry hero or Direct Answer.

### P2 — Commercial Layer Principle (**named rule**)

> Partner visibility may help users explore care options, but **payment must never influence** educational ranking, clinical explanation, decision guidance, or Direct Answers.

### P3 — Code isolation

```text
DecisionContent (Entries / OS)     // untouched by partner pay status
        +
OptionalCareNavigationModule      // Care Options + Partner entry points only
```

**Forbidden pattern:** `if (partner) inject hospital CTA` inside Entry clinical render.  
**Required pattern:** page ending mounts `<CareOptionsSection />` / links as a **sibling module** after Decision/Prep.

### P4 — Brand vs commercial focus

| Surface | Tone |
|---------|------|
| Homepage / primary nav / SEO titles for Entries | **Cancer decision & care navigation** — not “International Cancer Treatment Platform” |
| Global Care hub / Care Options / Partner | Cross-border exploration is appropriate |
| Partner commercial BD | International patient services / cross-border |

Most SEO traffic will be diagnosis / biomarker / treatment decisions — do not overweight “international” on the homepage.

### P5 — UI naming freeze (commercial surfaces)

| Use | Do not use |
|-----|------------|
| Explore Care Options | Recommended Centers |
| Partner Profiles | Top Cancer Centers |
| International Care Centers *(subtitle OK)* | Find Your Hospital |
| You may explore | We recommend / Best / Matched for you |

Component / route names should follow the “Use” column (e.g. `CareOptionsSection`, `/care-partners`).

---

## 2. Positioning

**One line:**  
Cancer Next Step helps people understand the cancer decisions in front of them, prepare for care conversations, and — when relevant — explore cross-border care options with transparent partner relationships.

**Independent ≠ no commercial relationships.**  
Education is not rewritten for pay; ties are disclosed; users choose whether to contact anyone.

| Segment | Role |
|---------|------|
| Cross-border explorers | Primary for Partner + leads |
| English SEO (incl. US/EU) | Decision + Prep traffic |
| US in-network matching | Out of scope for Partner v1 |

---

## 3. Four-layer IA & site mapping

| Layer | Surfaces |
|-------|----------|
| ① Decision | `/questions/*`, situation router, cancer hubs, orientation |
| ② Prep | Prep sheet, doctor checklist takeaways |
| ③ Care Options | Module after path on global-care / care-center / second-opinion + `/global-care` |
| ④ Partner | `/care-partners`, `/care-partners/[slug]` — **noindex in this phase** |
| Trust | `/transparency` (or About section) — required before any live lead submit |

---

## 4. Care Options module (fixed template)

**Title:** Factors to consider when exploring care centers  

**Intro:**  
> If you are exploring treatment centers or a second opinion across borders, these factors may help you compare options.

| Block | Points |
|-------|--------|
| **Clinical expertise** | Experience with your cancer type; multidisciplinary team |
| **Treatment access** | Clinical trials; advanced therapies (as available) |
| **Practical factors** | Travel; language; international patient support |
| **Continuity** | Clear review goal + complete records + **written after-visit next steps from the receiving center’s international desk**. **Do not** make “who handles emergencies at home” or home-doctor approval a patient pre-decision gate (aftercare design is the receiving program’s job; many patients explore abroad because they are already unhappy with current care). |

**CTA:** Explore care options → `/care-partners` (or Partner list).  
**Forbid:** rankings; “for your stage go to X”; implying Partners are the only centers.

---

## 5. Partner layer

### 5.1 Profile

- Badge: **Partner profile** (or Sponsored profile)  
- Sections: program summary, international patient services, second-opinion/remote if any, contact form area  
- Disclosure adjacent to form (see §7)  
- **SEO:** `robots: noindex, follow` on all `/care-partners/*` for this phase (thin commercial pages must not compete with `/questions/*` and `/cancers/*`)

### 5.2 Lead form v1 (conservative)

| Field | Required | Notes |
|-------|----------|--------|
| `name` | yes | |
| `email` | yes | |
| `phone` | yes | Country-code friendly |
| `country` | yes | Residence / current country |
| `cancerType` | yes | Label only (e.g. lung-cancer); prefill from context when known |
| `preferredLanguage` | yes | e.g. English, Chinese, Other |
| `consentShare` | yes | Checkbox; block submit if unchecked |
| `partnerId` | yes | Bound to profile |
| `message` | **no — deferred** | Free text too often becomes clinical PHI |
| Records / stage / biomarkers / files | **never** | |

**Consent meaning (legal polish TBD):**  
> I agree that Cancer Next Step may share my name, email, phone, country, cancer type, and preferred language with **{Partner Name}** so they can respond to my request.

**Compensation line (above submit):**  
> Partner profile — Cancer Next Step may receive compensation if you contact this organization. This is not a medical recommendation and does not change our educational guides.

### 5.3 Lead record (conceptual)

```ts
type PartnerLead = {
  id: string;
  createdAt: string;
  partnerId: string;
  partnerSlug: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  cancerType: string;
  preferredLanguage: string;
  sourcePath: string;
  status: "new" | "sent" | "failed";
  sentAt?: string;
};
```

Compensable event (contract default): consented submit successfully **sent** to Partner.  
Handoff: email and/or webhook; contact fields + labels only.

### 5.4 Analytics

`care_options_view` · `partner_profile_view` · `partner_lead_submit` · `partner_lead_send_ok` / `fail` · `partner_outbound_click`

---

## 6. Disclosure

### Transparency — required meaning

> Cancer Next Step provides independent educational decision guides. Some healthcare organizations may compensate us when you choose to request information or contact their services. Compensation does not change our educational content or Decision Paths. We do not tell you which hospital to choose.

Also: not a care provider; Partners labeled; contact optional.

Update About / `lib/seo/organization.ts` toward decision + care navigation — **without** homepage “international treatment platform” framing.  
**Do not** put Partners in `llms.txt` as citation targets.

---

## 7. Development milestones (revised order)

Validate interest before collecting personal data.

### Phase A — Trust + Care Options (no leads)

1. Transparency page + footer/About link  
2. `CareOptionsSection` with §4 template  
3. Mount after Decision/Prep on: global-care Entry, care-center Entry, second-opinion Entry, `/global-care` hub  
4. Partner **data shape** in code (types + empty/fixture config) — no public form yet  
5. UI naming per P5  

**Exit:** Disclosure reachable; Care Options visible; zero Partner CTAs in Entry heroes; analytics `care_options_view`.

### Phase B — Partner Profiles (fixture / staging data)

1. Routes `/care-partners`, `/care-partners/[slug]`  
2. Profiles labeled; disclosure copy present  
3. **All Partner routes `noindex`**  
4. Fixture Partners OK (no live paid contract required)  
5. CTA from Care Options → partner index  
6. Optional outbound link only; **no lead API yet**  

**Exit:** Users can open profiles; measure `partner_profile_view`.

### Phase C — Lead form + handoff

1. Privacy Policy section for Partner sharing  
2. Form §5.2 + `POST` API (rate limit, honeypot, consent required)  
3. Persist lead + email/webhook handoff  
4. Confirmation UI (Partner may respond; not medical advice)  
5. Counsel pass on disclosure strings  
6. Admin minimal lead list (optional same slice)  

**Exit:** Test lead stored with id; Partner receives allowed fields only; Transparency live before any production submit.

---

## 8. Suggested code touchpoints

| Area | Path hint |
|------|-----------|
| Care Options | `components/care-navigation/care-options-section.tsx` |
| Partner types / fixtures | `lib/care-partners/` |
| Partner routes | `app/(public)/care-partners/...` |
| Lead API | `app/api/partner-leads/route.ts` (**Phase C only**) |
| Mount points | Entry page endings / global-care hub — **sibling** to Decision workspace |
| Transparency | `app/(public)/transparency/page.tsx` |
| Analytics | `lib/analytics/track.ts` |
| Org copy | `about`, `lib/seo/organization.ts` |

---

## 9. Acceptance criteria (full phase)

- [ ] Transparency live; linked from footer/About  
- [ ] Care Options uses §4 four-block template + Continuity  
- [ ] Mounted on ≥3 high-intent endings + Global Care hub  
- [ ] Partner routes labeled + **noindex**  
- [ ] No `message` field; no records/stage/biomarker  
- [ ] Lead submit only after Phase C + Privacy Policy  
- [ ] No Partner injection inside Decision clinical components  
- [ ] Homepage not repositioned as international treatment platform  
- [ ] UI copy uses Explore Care Options / Partner Profiles only  
- [ ] `llms.txt` remains Decision-Entry focused  

---

## 10. Parallel tracks

| Track | Doc |
|-------|-----|
| **This phase** | Care Navigation A→B→C |
| Breast Decision Journey | `Breast_Cancer_Decision_Journey_Dev_Plan_v1.0.md` |
| Lung Decision quality / SEO | Existing portfolio — primary AI/search surface |

---

## 11. Decision log

| Date | Decision |
|------|----------|
| 2026-07-20 | Transparent Decision + Care Navigation |
| 2026-07-20 | Partner commercial focus = cross-border; homepage stays decision-first |
| 2026-07-20 | Layer order mandatory; Commercial Layer Principle named |
| 2026-07-20 | Lead = contact + country + cancerType + language; **no message v1** |
| 2026-07-20 | `/care-partners/*` **noindex** this phase |
| 2026-07-20 | Milestones: A Care Options → B Profiles → C Leads |
| 2026-07-20 | Reject “marketplace” as product identity |
| 2026-07-20 | v1.2 incorporates external review (UI freeze, form, Continuity, isolation) |
| 2026-07-20 | No country×cancer advantage comparisons; capability gap + Care Options + Partner facts only |
| 2026-07-20 | Continuity ≠ ask home doctor permission; drop “seek local MD advice before going abroad” |
| 2026-07-20 | Aftercare / complications = receiving-center international desk duty, not a patient pre-decision gate with home MD |
| 2026-07-20 | Cross-border “why explore” list: access, lost confidence, reject current plan, intl support, cost/coverage, path not available locally; no country rankings; no “last try” as primary reason |

---

## Changelog v1.1 → v1.2

| Change | Why |
|--------|-----|
| UI naming freeze | Brand/SEO consistency; avoid “recommend/top” cognition |
| Drop `message`; add `country` + `preferredLanguage` | Free text becomes clinical PHI too easily |
| Partner routes all noindex this phase | Protect Decision SEO; avoid thin commercial pages |
| Care Options four-block template + Continuity | Higher user value; less “abandon home team” vibe |
| Homepage ≠ international platform | Most traffic is decision intent, not medical travel |
| Explicit code isolation + Commercial Layer Principle | Prevent Entry pollution |
| Milestone order A→B→C with leads last | Validate clicks before PII collection |
| Reject “marketplace” label | Partners ≠ transactional marketplace identity |

---

**Document owner:** Product + Engineering  
**First engineering slice:** Phase A — Transparency + `CareOptionsSection` on Global Care / care-center / second-opinion endings
