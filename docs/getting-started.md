---
title: Getting Started
description: Setup expo-wind in your project with Expo SDK 56+, Uniwind, and Tailwind CSS v4.
---

# Getting Started

## Prerequisites

- Node.js 18+
- Expo SDK 56+
- React Native 0.85.3+
- Uniwind 1.9.0+

## Installation

```bash
npm install uniwind tailwindcss tailwind-merge clsx tailwind-variants react-native-reanimated react-native-svg
```

Or with the exact versions used in this project:

```bash
npm install uniwind@1.9.0 tailwindcss@4 tailwind-merge@3.0.2 clsx@2.1.1 tailwind-variants@1.0.0 react-native-reanimated@3.17.4 react-native-svg@15.11.1
```

## Setup

### 1. Configure Metro

Create or update `metro.config.js`:

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

### 4. Create the cn() utility

```tsx
// src/lib/cn.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 5. Copy components

Copy the `src/components/ui/` directory into your project and ensure all dependencies are installed.

## Usage

```tsx
import { View } from 'react-native'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Button>Click me</Button>
    </View>
  )
}
```

## File Structure

```
src/
├── components/
│   └── ui/
│       ├── index.ts          # barrel exports
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...               # all components
├── lib/
│   └── cn.ts                 # cn() utility
└── global.css                # theme variables
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
