# Daniel's Personal Website

## Project Overview

Personal portfolio website for Daniel — AI Field Development Engineer at Databricks. Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. Deployed on Vercel.

## Pages

### Home (`/`)
- Hero section with name, title, and a one-liner
- Brief intro paragraph (not a wall of text — personality over formality)
- Quick links to other sections
- Subtle animation on load (Framer Motion)

### Previous Work (`/work`)
- Card-based layout for projects and roles
- Each card: title, company/context, tech stack tags, short description, link
- Key items to feature:
  - **Databricks** — AI Field Development Engineer, building and demoing ML/AI solutions
  - **Doowii** — ML Engineer. NL→SQL agents (50k+ requests), RAG pipelines, churn prediction (XGBoost), 99.6% uptime system
  - **NeurIPS 2025 PokeAgent** — 3rd place. Actor-critic + MCTS for competitive Pokémon
  - **UIUC Blender Lab** — VideoSemble, multimodal research
  - **Canvas LMS Predictive Analytics** — Cross-client ML for student dropout prediction across 300+ orgs
- Filterable by tag (ML, NLP, RL, Production Systems, Research)

### About Me (`/about`)
- Professional background (Rice BS → UIUC MS CS → ML Engineering → Databricks)
- Interests section: continental philosophy (Nietzsche, ancient Greek thought), competitive gaming (Pokémon, Smash), pickleball, music production/rap, strength training
- Currently reading / thinking about
- Contact links (GitHub, LinkedIn, email)

## Tech Stack

- **Framework**: Next.js 14 with App Router (`/app` directory)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript (strict mode)
- **Animation**: Framer Motion (subtle, tasteful — not a portfolio of animations)
- **Deployment**: Vercel
- **Package manager**: pnpm (via corepack)

## Project Structure

```
danielsite/
├── CLAUDE.md              # This file
├── .cursorrules           # Mirror of relevant CLAUDE.md rules for Cursor
├── app/
│   ├── layout.tsx         # Root layout with nav + footer
│   ├── page.tsx           # Home
│   ├── work/
│   │   └── page.tsx       # Previous Work
│   └── about/
│       └── page.tsx       # About Me
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── Hero.tsx
│   └── TagFilter.tsx
├── lib/
│   ├── projects.ts        # Project data as typed array
│   └── types.ts           # Shared TypeScript types
├── public/
│   └── images/            # Headshot, project screenshots
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Code Standards

- TypeScript strict mode everywhere
- Prefer named exports over default exports for components
- Use `cn()` utility (clsx + tailwind-merge) for conditional class names
- Components are functional with explicit return types
- No `any` types — use `unknown` and narrow
- Tailwind classes only — no CSS modules, no styled-components
- Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`)
- All images use `next/image` with proper alt text
- Keep components small — if > 80 lines, extract subcomponents

## Commands

```bash
pnpm dev              # start dev server (localhost:3000)
pnpm build            # production build
pnpm lint             # run ESLint
pnpm type-check       # run tsc --noEmit
```

## Design Direction

- Dark mode default with light mode toggle
- Monospace accent font for headings (JetBrains Mono or similar)
- Clean, minimal — closer to a well-designed README than a flashy portfolio
- Color palette: dark bg (#0a0a0a), off-white text (#e5e5e5), one accent color (muted blue or teal)
- Generous whitespace, no visual clutter
- Mobile-first responsive design
- Subtle hover states and page transitions — nothing distracting

## Content Tone

- Confident but not boastful
- Technical but accessible
- Brief — every sentence earns its place
- No corporate buzzwords ("leverage", "synergy", "passionate about")
- Personality comes through in what's included, not in flowery language