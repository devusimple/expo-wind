---
title: Styling Guide
description: CSS variables, cn() utility, tailwind-variants, and dark mode patterns.
---

# Styling Guide

## How Components Reference Colors

All components use Tailwind CSS v4 utility classes that reference CSS variables. This allows automatic light/dark theme switching without any JavaScript theme context.

### Pattern

```css
/* global.css */
:root {
  --primary: #171717;
  --primary-foreground: #fafafa;
}
```

```tsx
// component usage
<View className="bg-primary">
  <Text className="text-primary-foreground">Primary</Text>
</View>
```

### Available CSS Variables

| Variable | Tailwind Class | Usage |
|----------|---------------|-------|
| `--background` | `bg-background` | Page background |
| `--foreground` | `text-foreground` | Default text color |
| `--card` | `bg-card` | Card background |
| `--card-foreground` | `text-card-foreground` | Card text |
| `--primary` | `bg-primary` | Primary actions, active state |
| `--primary-foreground` | `text-primary-foreground` | Text on primary |
| `--secondary` | `bg-secondary` | Secondary actions |
| `--secondary-foreground` | `text-secondary-foreground` | Text on secondary |
| `--muted` | `bg-muted` | Muted background |
| `--muted-foreground` | `text-muted-foreground` | Muted text |
| `--accent` | `bg-accent` | Accent background |
| `--accent-foreground` | `text-accent-foreground` | Text on accent |
| `--destructive` | `bg-destructive` | Destructive actions |
| `--destructive-foreground` | `text-destructive-foreground` | Text on destructive |
| `--border` | `border-border` | Default border color |
| `--input` | `border-input` | Form input border |
| `--ring` | `border-ring` | Focus ring color |
| `--radius` | `rounded-[--radius]` | Border radius |
| `--chart-1` through `--chart-5` | various | Chart color palette |

## The `accent-` Prefix Rule

When passing non-style color values to a component (e.g., chart segment colors, progress bar colors), use the `accent-` prefix prop instead of `className`:

```tsx
// ✅ Correct - accent- prefix for non-style color
<Progress value={75} accent="accent-destructive" />

// ✅ Correct
<PieChart data={items} accent="accent-chart-1" />

// ❌ Wrong - className overrides entire component style
<Progress value={75} className="bg-destructive" />
```

This follows Uniwind rule #10: non-style color props use `accent-` prefix so they're processed as colors by the Metro plugin.

## The `cn()` Utility

Every component accepts a `className` prop that gets merged via `cn()` (clsx + tailwind-merge):

```tsx
import { cn } from '@/lib/cn'
import { View } from 'react-native'

function Box({ className }: { className?: string }) {
  return (
    <View
      className={cn(
        'bg-primary p-4 rounded-lg',
        className
      )}
    />
  )
}
```

`tailwind-merge` intelligently resolves conflicts — the last conflicting class wins:

```tsx
// Result: className="bg-destructive p-4 rounded-lg"
<Box className="bg-destructive" />
```

## Creating New Variant Systems

Use `tailwind-variants` (`tv`) to create multi-variant components:

```tsx
import { tv, type VariantProps } from 'tailwind-variants'

const badge = tv({
  base: 'px-2.5 py-0.5 rounded-full text-xs font-medium',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      outline: 'border border-border text-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
    },
    size: {
      sm: 'px-2 py-0 text-[10px]',
      lg: 'px-3 py-1 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
```

## Dark Mode

Dark mode is handled entirely via CSS `@media (prefers-color-scheme: dark)`. No JavaScript context needed:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #fafafa;
  }
}
```

Components automatically update when the system theme changes.

## Customizing Border Radius

The `--radius` CSS variable controls the default border radius:

```css
:root {
  --radius: 0.5rem; /* 8px */
}
```

Components reference it via:

```tsx
<View className="rounded-[--radius]" />
```

For specific elements, override directly with Tailwind classes:

```tsx
<View className="rounded-full" />
<View className="rounded-sm" />
<View className="rounded-lg" />
```
