# Daniel's Personal Website — CLAUDE.md

Personal portfolio for Daniel Christl. AI Field Development Engineer at Databricks.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 — config is CSS-only via `@theme` in `app/globals.css`, no `tailwind.config.ts`
- **Language**: TypeScript (strict mode)
- **Animation**: Framer Motion (Hero fade-in only)
- **Package manager**: pnpm
- **Deployment**: Vercel (not yet set up)

---

## Commands

```bash
pnpm dev          # dev server at localhost:3000
pnpm build        # production build + type check
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
```

---

## Project Structure

```
app/
  layout.tsx          # root layout — Nav + Footer, dark mode script
  page.tsx            # home — Hero, bio, selected works, rotating quote
  work/page.tsx       # work — tabbed (production/research/creative), client component
  about/page.tsx      # about — background, reading list, music, creative work, contact
  globals.css         # Tailwind v4 import, dark variant, cursor-blink keyframe

components/
  Nav.tsx             # client — dark/light toggle, active link highlight
  Hero.tsx            # client — Framer Motion fade-in, name + title
  Footer.tsx          # static — name, year, contact links
  RotatingQuote.tsx   # client — typewriter quote rotator, 15s interval
  ProjectCard.tsx     # server — used by TagFilter (legacy, not on work page)
  TagFilter.tsx       # client — legacy, not currently used

lib/
  projects.ts         # ALL work content — bullets, dates, categories, links
  quotes.ts           # ALL rotating quotes — edit here to add/change quotes
  types.ts            # Project, Category, Tag, Quote types
  utils.ts            # cn() utility (clsx + tailwind-merge)
```

---

## Where to Edit Content

| What | File |
|---|---|
| Name, title ("AI Engineer · Databricks"), fade-in | `components/Hero.tsx` |
| Bio (two sentences) | `app/page.tsx` — "Two-sentence summary" comment |
| Selected works (images, labels, links) | `app/page.tsx` — `WorkImage` components |
| Rotating quotes | `lib/quotes.ts` |
| Work bullets, dates, categories | `lib/projects.ts` |
| About — background paragraphs | `app/about/page.tsx` — Background section |
| About — reading list | `app/about/page.tsx` — Reading list section |
| About — music | `app/about/page.tsx` — Music section |
| About — creative work | `app/about/page.tsx` — Creative work section |
| About — inspiration | `app/about/page.tsx` — Inspiration section |
| Contact (email, LinkedIn, GitHub) | `app/about/page.tsx` — Contact section |
| Footer links | `components/Footer.tsx` |

---

## Design

- **Dark mode default** — `dark` class on `<html>`, toggled via Nav button, persisted in localStorage
- **Accent color (terracotta)**: `#c07a5a` — used on page titles (Work, About Me) and Daniel name
- **Teal** (`teal-400/600`): nav active states, hover accents
- **Fonts**: Geist Sans (body), Geist Mono (headings, labels, nav links)
- **Background**: `#0a0a0a` dark / `neutral-50` light
- **Text**: `#e5e5e5` dark / `neutral-900` light
- Keep it minimal — no visual clutter, generous whitespace

### Dark mode in Tailwind v4
Uses `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css`.
Apply dark styles with `dark:` prefix as normal.

---

## Work Page Categories

Assign projects in `lib/projects.ts` via the `category` field:
- `"production"` — shipped systems (Doowii NL→SQL, Dropout Risk)
- `"research"` — academic / published work (VideoSemble)
- `"creative"` — competition / personal projects (PokeAgent)

---

## Images

Drop images in `/public/`. Reference them as `src="/filename.ext"` in the `WorkImage` components in `app/page.tsx`. Images render as 4:3 `object-cover`.

---

## Code Standards

- Named exports for all components
- No `any` types
- Tailwind classes only — no CSS modules
- Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`)
- Client components (`"use client"`) only when needed (state, effects, browser APIs)
- `cn()` from `lib/utils.ts` for conditional class names
