# AGENTS.md — expo-wind docs

## What this project is

A documentation website for **expo-wind**, a shadcn-style React Native component library built with Uniwind + Tailwind CSS v4. The library itself lives separately; this repo only contains the docsite source.

## Directory structure

```
docs/                          # raw markdown source (flat + components/)
├── index.md                   # overview / homepage content
├── getting-started.md
├── architecture.md
├── styling.md
├── migration.md
├── building-a-library.md
├── creating-components.md
└── components/                # 51 individual component docs
    ├── accordion.md
    ├── button.md
    └── ...
```

## Docs site framework

Built with **Fumadocs** (Next.js-based, MDX) — https://fumadocs.vercel.app.

- Source content lives in `docs/` as markdown, mapped into Fumadocs by convention
- The docsite lives at the repo root (not a subdirectory)
- `npm run dev` to start the dev server
- `npm run build` to build

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Fumadocs dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npx tsc --noEmit` | Type-check all files |

## Conventions

- Component docs use `shadcn-ui`-style: props table, examples, accessibility notes
- Animations: `LayoutAnimation` (layout), `useAnimatedStyle`+`withTiming` (transitions), `Modal` (overlays)
- No CSS hover — mobile-only patterns
- `cn()` utility = `twMerge(clsx(...))` from `@/lib/cn`

## Initial setup (first time)

```bash
npm install
npm run dev
```

## Build History

### 2026-06-21 — Scaffold & fixes
- Scaffolded Fumadocs project manually (no CLI)
- Install with `bun` (not npm)
- Fixed `collections/server` → `collections/index` import for fumadocs-mdx@11
- Fixed `page.data.body` type mismatch — cast to custom `PageData` interface
- Fixed `source.files` function-vs-array — cast `(sourceInput.files as any)()` at source init
- Build now passes with 61 SSG pages
- Source config: `source.config.ts` points `docs/` collection to `docs/` directory
  - Schema: `title(z.string()), description(z.string().optional()), icon(z.string().optional()), full(z.boolean().optional())`
