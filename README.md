# Global Cancer Decision Platform

AI-powered cancer decision knowledge platform (MVP). Structured knowledge graph, not a blog.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Local JSON knowledge store for development (seeded graph)
- Supabase PostgreSQL schema + RLS migrations ready for production
- Optional OpenAI draft generation (never auto-publishes)
- Vercel-ready

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Admin CMS: [http://localhost:3000/admin](http://localhost:3000/admin)  
Default password: `admin123` (override with `ADMIN_PASSWORD`)

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/cancers` | Cancer library |
| `/cancers/[slug]` | Cancer Decision Center |
| `/questions/[slug]` | Question detail |
| `/treatments/[slug]` | Treatment comparison |
| `/stories/[slug]` | Patient decision story |
| `/global-care` | International medical guide |
| `/about` | Trust & disclaimer |
| `/admin` | Knowledge graph CMS |

## Architecture notes

- Public pages are data-driven templates. Adding a cancer is data entry, not new code.
- Seed includes 5 cancers, 25 questions, treatments, stories, global options, and graph edges.
- SQL schema lives in `supabase/migrations/`.
- Runtime data defaults to `data/store.json` (created from `lib/db/seed-data.ts` on first read).
- AI drafts save as `status: draft` only.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
