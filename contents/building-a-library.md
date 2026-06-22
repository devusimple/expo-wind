---
title: Building a Library
description: Publishing the components as an npm package, CLI add command, and versioning.
---

# Building a Library

If you want to publish these components as an npm package for reuse across projects, this guide covers the steps.

## 1. Package Structure

```
shadcn-rn/
├── src/
│   ├── components/
│   │   └── ui/     ← all component files
│   ├── lib/
│   │   └── cn.ts   ← cn() utility
│   └── index.ts    ← re-export everything
├── package.json
├── tsconfig.json
└── README.md
```

## 2. Package Configuration

```json
{
  "name": "shadcn-rn",
  "version": "0.1.0",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "files": ["src"],
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-native": ">=0.76",
    "uniwind": ">=1.9.0",
    "tailwindcss": ">=4",
    "tailwind-merge": ">=3",
    "clsx": ">=2",
    "tailwind-variants": ">=1",
    "react-native-reanimated": ">=3",
    "react-native-svg": ">=15"
  },
  "exports": {
    ".": "./src/index.ts",
    "./*": "./src/components/ui/*.tsx"
  }
}
```

## 3. Barrel Export

```tsx
// src/index.ts
export { cn } from './lib/cn'
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert'
// ... all components
```

Sub-path exports allow consumers to import individual components:

```tsx
import { Button } from 'shadcn-rn/button'
```

## 4. Consumer Setup

The consumer project must:

1. Install peer deps:
```bash
npm install shadcn-rn uniwind tailwindcss tailwind-merge clsx tailwind-variants react-native-reanimated react-native-svg
```

2. Have `src/global.css` with CSS variables (or use a default theme the library provides)

3. Have Metro configured with `withUniwindConfig`

4. Import `global.css` in root layout

## 5. Optional: CLI Add Command

Mirror shadcn/ui's CLI by creating a tool that copies individual components:

```
npx shadcn-rn add button
npx shadcn-rn add dialog
npx shadcn-rn add card
```

This would:
1. Copy `src/components/ui/button.tsx` to the consumer's project
2. Ensure `cn.ts` exists in their `src/lib/`
3. Add barrel export to their `src/components/ui/index.ts`
4. Install required peer dependencies

## 6. Versioning Strategy

| Version Bump | What Changed |
|-------------|-------------|
| Patch | Bug fix, styling tweak, dependency update |
| Minor | New component added, non-breaking prop addition |
| Major | Breaking prop change, renamed component, API redesign |

## 7. Documentation

For a documentation website, you can build a Next.js, Vite, or Astro site that renders the markdown files in `docs/`. Use `next-mdx-remote` or `react-markdown` to render the MDX/Markdown content with live previews.

Example site structure:

```
website/
├── pages/
│   ├── index.mdx              ← overview
│   ├── docs/
│   │   ├── getting-started.mdx
│   │   ├── styling.mdx
│   │   └── components/
│   │       ├── button.mdx
│   │       ├── dialog.mdx
│   │       └── ...
│   └── _meta.json             ← sidebar navigation
```

## 8. Publishing Checklist

- [ ] All peer dependencies listed with correct semver ranges
- [ ] TypeScript compiles (`npx tsc --noEmit`)
- [ ] CSS variable names documented for theming
- [ ] Each component exported individually and from barrel
- [ ] `files` field in package.json scoped to `src/` only
- [ ] README with installation, setup, and usage examples
- [ ] License file included
