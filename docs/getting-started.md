---
title: Getting Started
description: Install rn-shadcn CLI, initialize your project, and add components.
---

# Getting Started

## Prerequisites

- Node.js 20+
- Expo SDK 56+ / React Native 0.85.3+
- Uniwind 1.9.0+
- Tailwind CSS v4

## Initialize

Run the init command in your project root:

```bash
npx rn-shadcn init
```

This creates:
- `components.json` — configuration file with registry URL and components directory
- `src/lib/cn.ts` — utility for merging Tailwind CSS classes
- Installs `clsx` and `tailwind-merge`

## Add Components

```bash
npx rn-shadcn add button
npx rn-shadcn add card modal
npx rn-shadcn add accordion dialog sheet
```

Each component is copied into `src/components/ui/` as a standalone file. You own it — modify freely. Required npm dependencies are installed automatically.

## Setup

After running `init`, ensure your project has the following configuration.

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

### 2. Create CSS variables

Create `src/global.css` with shadcn-themed variables:

```css
@import 'tailwindcss';

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --card: #ffffff;
  --card-foreground: #0a0a0a;
  --primary: #171717;
  --primary-foreground: #fafafa;
  --secondary: #f5f5f5;
  --secondary-foreground: #171717;
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --accent: #f5f5f5;
  --accent-foreground: #171717;
  --destructive: #ef4444;
  --destructive-foreground: #fafafa;
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #0a0a0a;
  --radius: 0.5rem;
  --chart-1: #3b82f6;
  --chart-2: #22c55e;
  --chart-3: #eab308;
  --chart-4: #a855f7;
  --chart-5: #ec4899;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #fafafa;
    --card: #0a0a0a;
    --card-foreground: #fafafa;
    --primary: #fafafa;
    --primary-foreground: #171717;
    --secondary: #262626;
    --secondary-foreground: #fafafa;
    --muted: #262626;
    --muted-foreground: #a3a3a3;
    --accent: #262626;
    --accent-foreground: #fafafa;
    --destructive: #7f1d1d;
    --destructive-foreground: #fafafa;
    --border: #404040;
    --input: #404040;
    --ring: #d4d4d4;
    --chart-1: #60a5fa;
    --chart-2: #4ade80;
    --chart-3: #facc15;
    --chart-4: #c084fc;
    --chart-5: #f472b6;
  }
}
```

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
