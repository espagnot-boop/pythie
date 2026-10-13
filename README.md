# pythie

Landing page and chat shell for **Pythie**: ask questions in plain language, get numbers, charts, and cited sources from public web pages.

Stack: **Next.js 15** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, **Vercel AI SDK**, **Drizzle** + **Postgres** (optional), deploy on **Vercel**.

## Routes (pages)

| Path | Description |
|------|-------------|
| `/` | Marketing landing (hero, use cases, pricing, FAQ, waitlist) |
| `/app` | Chat UI. Optional query: `/app?q=your+question` pre-fills the input |
| `/robots.txt` | SEO robots |
| `/sitemap.xml` | Sitemap |
| `/opengraph-image` | Generated OG image |

## API

All API routes live under `src/app/api/`.

### `POST /api/chat`

Streaming chat for the `/app` experience. Uses the [Vercel AI SDK](https://sdk.vercel.ai/) `streamText` and returns a **UI message stream** (`toUIMessageStreamResponse()`), consumed by `@ai-sdk/react` `useChat()`.

**Request** (`application/json`):

```json
{
  "messages": [
    {
      "role": "user",
      "parts": [{ "type": "text", "text": "Average 2-bed rent in Lyon?" }]
    }
  ]
}
```

Legacy shape with `content` string is also accepted.

**Response:** `text/event-stream` (AI SDK UI stream).

**Notes:**

- Model id: `openai/gpt-4o-mini` (requires an AI Gateway / OpenAI-compatible key in the deployment environment, e.g. Vercel AI Gateway).
- `maxDuration`: 30s (Vercel function limit configuration).

### `POST /api/waitlist`

Adds an email to the beta waitlist.

**Request:**

```json
{ "email": "you@company.com" }
```

**Success (`200`):**

```json
{ "ok": true, "count": 42 }
```

**Errors:**

- `400` + `{ "error": "invalid" }` if email is invalid
- `500` + `{ "error": "server" }` on database failure

**Storage:**

- If `DATABASE_URL` is set: **Postgres** via Drizzle (`waitlist` table).
- Otherwise: in-memory set (dev only; resets on cold start).

### `GET /api/waitlist`

Returns the current waitlist size.

```json
{ "count": 42 }
```

### `GET /api/cron/alerts`

Placeholder for **Vercel Cron** (or any scheduler) to process monitoring alerts.

**Auth:** if `CRON_SECRET` is set, send:

```http
Authorization: Bearer <CRON_SECRET>
```

**Response:**

```json
{ "ok": true, "processed": 0 }
```

Wire this route to your alert runner when scraping and notifications are implemented.

## Database

Schema: `src/lib/db/schema.ts`

```sql
-- waitlist
id          serial PRIMARY KEY
email       text UNIQUE NOT NULL
created_at  timestamp DEFAULT now()
```

**Migrations:** Drizzle Kit is installed (`drizzle-kit`). Push schema to your database before relying on waitlist persistence in production.

```bash
# example (configure drizzle.config if you add one)
npx drizzle-kit push
```

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URL` | No (yes in prod for waitlist) | Postgres connection string |
| `CRON_SECRET` | No | Protects `/api/cron/alerts` |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL (sitemap, metadata). Default: `https://pythie.eu` |
| AI provider keys | Yes for chat | Depends on your AI SDK setup on Vercel (e.g. AI Gateway) |

See `.env.example`.

## Project layout

```
src/
  app/
    (marketing)/     # Landing
    app/             # Product chat page
    api/             # chat, waitlist, cron
  components/
    landing/         # Landing sections
    app/             # Chat UI
    motion/          # Mask, wipe, counters
    ui/              # Buttons, inputs (square design system)
  content/en.ts      # All user-facing copy
  lib/
    db/              # Drizzle client + schema
    scenarios.ts     # Hero demo data
    motion.ts        # Animation tokens
```

## Scripts

```bash
npm run dev        # Local dev (Turbopack)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run test       # Vitest (content + design rules)
npm run check      # lint + typecheck + test + build
```

## Deploy on Vercel

- `vercel.json` sets `framework: nextjs`.
- Do **not** set **Output Directory** to `public` in project settings (Next.js uses `.next`).
- Add `DATABASE_URL` and AI keys in the Vercel dashboard.
- Optional: Cron job hitting `/api/cron/alerts` with `CRON_SECRET`.

## What is not implemented yet

The landing describes the full product (scraping, alerts, exports). In this repo:

- Chat streams LLM replies; it does not yet call a real scrape pipeline.
- Cron alerts return `processed: 0`.
- Scrape/fetcher modules from the spec are stubs for a later iteration.

The hero demo uses static scenarios in `src/lib/scenarios.ts`.
