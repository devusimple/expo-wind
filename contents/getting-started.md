---
title: Getting Started
description: Install rn-shadcn CLI, initialize your project, and add components.
---

# Getting Started

## Prerequisites

- Node.js 20+
- Expo SDK 50+ / React Native 0.85.3+

Uniwind and Tailwind CSS v4 are installed automatically by the `init` command if not detected.

## Initialize

Run the init command in your project root:

```bash
npx rn-shadcn init
# or
bunx rn-shadcn init
# or
pnpm rn-shadcn init
```

The init command will:

1. **Check for Uniwind + Tailwind CSS v4** — installs them if missing
2. **Configure Metro** — adds `withUniwindConfig` to `metro.config.js`
3. **Prompt for a theme** — choose from 8 preset color themes (Neutral, Blue, Amber, Cyan, Emerald, Fuchsia, Green, or Default)
4. **Create `global.css`** — writes the selected theme's CSS variables using `@layer theme` with `@variant light` / `@variant dark` blocks
5. **Create `src/lib/cn.ts`** — utility for merging Tailwind CSS classes with `clsx` and `tailwind-merge`
6. **Create `components.json`** — configuration file with registry URL and component directory
7. **Create `src/components/ui/`** — component output directory

## Add Components

```bash
npx rn-shadcn add button
npx rn-shadcn add card modal
npx rn-shadcn add accordion dialog sheet
# or
bunx rn-shadcn add button
# or
pnpm rn-shadcn add button
```

Each component is copied into `src/components/ui/` as a standalone file. You own it — modify freely. Required npm dependencies are installed automatically.

## Setup

After running `init`, your project is fully configured. Here's what was set up:

### 1. Configure Metro

```js
const { withUniwindConfig } = require('uniwind/metro')

const config = {
  // your existing metro config
}

module.exports = withUniwindConfig(config, {
  cssEntryFile: './src/global.css',
})
```

### 2. global.css with theme variables

Created at `src/global.css` (or `app/global.css` for Expo Router) using the selected theme. The CSS uses Tailwind CSS v4's `@layer theme` and `@variant` at-rules with oklch color values:

```css
@import 'tailwindcss';

@layer theme {
  @variant light {
    --color-background: oklch(1 0 0);
    --color-foreground: oklch(0.145 0 0);
    --color-card: oklch(1 0 0);
    --color-card-foreground: oklch(0.145 0 0);
    --color-popover: oklch(1 0 0);
    --color-popover-foreground: oklch(0.145 0 0);
    --color-primary: oklch(0.205 0 0);
    --color-primary-foreground: oklch(0.985 0 0);
    --color-secondary: oklch(0.97 0 0);
    --color-secondary-foreground: oklch(0.205 0 0);
    --color-muted: oklch(0.97 0 0);
    --color-muted-foreground: oklch(0.556 0 0);
    --color-accent: oklch(0.97 0 0);
    --color-accent-foreground: oklch(0.205 0 0);
    --color-destructive: oklch(0.577 0.245 27.325);
    --color-border: oklch(0.922 0 0);
    --color-input: oklch(0.922 0 0);
    --color-ring: oklch(0.708 0 0);
    --color-chart-1: oklch(0.87 0 0);
    --color-chart-2: oklch(0.556 0 0);
    --color-chart-3: oklch(0.439 0 0);
    --color-chart-4: oklch(0.371 0 0);
    --color-chart-5: oklch(0.269 0 0);
    --color-sidebar: oklch(0.985 0 0);
    --color-sidebar-foreground: oklch(0.145 0 0);
    --color-sidebar-primary: oklch(0.205 0 0);
    --color-sidebar-primary-foreground: oklch(0.985 0 0);
    --color-sidebar-accent: oklch(0.97 0 0);
    --color-sidebar-accent-foreground: oklch(0.205 0 0);
    --color-sidebar-border: oklch(0.922 0 0);
    --color-sidebar-ring: oklch(0.708 0 0);
  }

  @variant dark {
    --color-background: oklch(0.145 0 0);
    --color-foreground: oklch(0.985 0 0);
    --color-card: oklch(0.205 0 0);
    --color-card-foreground: oklch(0.985 0 0);
    --color-popover: oklch(0.205 0 0);
    --color-popover-foreground: oklch(0.985 0 0);
    --color-primary: oklch(0.922 0 0);
    --color-primary-foreground: oklch(0.205 0 0);
    --color-secondary: oklch(0.269 0 0);
    --color-secondary-foreground: oklch(0.985 0 0);
    --color-muted: oklch(0.269 0 0);
    --color-muted-foreground: oklch(0.708 0 0);
    --color-accent: oklch(0.269 0 0);
    --color-accent-foreground: oklch(0.985 0 0);
    --color-destructive: oklch(0.704 0.191 22.216);
    --color-border: oklch(1 0 0 / 10%);
    --color-input: oklch(1 0 0 / 15%);
    --color-ring: oklch(0.556 0 0);
    --color-chart-1: oklch(0.87 0 0);
    --color-chart-2: oklch(0.556 0 0);
    --color-chart-3: oklch(0.439 0 0);
    --color-chart-4: oklch(0.371 0 0);
    --color-chart-5: oklch(0.269 0 0);
    --color-sidebar: oklch(0.205 0 0);
    --color-sidebar-foreground: oklch(0.985 0 0);
    --color-sidebar-primary: oklch(0.488 0.243 264.376);
    --color-sidebar-primary-foreground: oklch(0.985 0 0);
    --color-sidebar-accent: oklch(0.269 0 0);
    --color-sidebar-accent-foreground: oklch(0.985 0 0);
    --color-sidebar-border: oklch(1 0 0 / 10%);
    --color-sidebar-ring: oklch(0.556 0 0);
  }
}
```

The example above shows the **Neutral** theme. Other themes adjust the `--color-primary`, `--color-sidebar-*`, and accent values while keeping the same structure.

### 3. Import global.css in root layout

```tsx
// src/app/_layout.tsx
import '../global.css'
```

## Usage

```tsx
import { View } from 'react-native'
import { Button } from '@/components/ui/button'

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Button>Click me</Button>
    </View>
  )
}
```

## File Structure

After adding components, your project will have:

```
src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...               # components you added
├── lib/
│   └── cn.ts                 # cn() utility (created by init)
└── global.css                # theme variables
components.json               # rn-shadcn configuration
```

## Verification

Run TypeScript check to verify everything compiles:

```bash
npx tsc --noEmit
```

If you see the "No inputs were found in config file" error, add a `tsconfig.json` include:

```json
{
  "include": ["**/*.ts", "**/*.tsx"],
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
