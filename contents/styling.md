---
title: Styling Guide
description: CSS variables, theme system, cn() utility, tailwind-variants, and dark mode patterns.
---

# Styling Guide

## Theme System

rn-shadcn uses Tailwind CSS v4's theme layer with oklch color values. When you run `rn-shadcn init`, you're prompted to select one of 8 preset themes, and the CLI generates a `global.css` with `@layer theme` and `@variant light` / `@variant dark` blocks.

The generated CSS uses the `--color-*` prefix convention (Tailwind CSS v4 theme variables) with oklch color notation:

```css
@import 'tailwindcss';

@layer theme {
  @variant light {
    --color-background: oklch(1 0 0);
    --color-primary: oklch(0.205 0 0);
    --color-primary-foreground: oklch(0.985 0 0);
  }

  @variant dark {
    --color-background: oklch(0.145 0 0);
    --color-primary: oklch(0.922 0 0);
    --color-primary-foreground: oklch(0.205 0 0);
  }
}
```

### How Components Reference Colors

All components use Tailwind CSS v4 utility classes that reference these CSS variables. This allows automatic light/dark theme switching without any JavaScript theme context.

```tsx
<View className="bg-primary">
  <Text className="text-primary-foreground">Primary</Text>
</View>
```

### Preset Themes

| Theme | Description |
|-------|-------------|
| Neutral | Gray-based neutral theme (default) |
| Blue | Blue primary accent |
| Amber | Warm amber primary |
| Cyan | Cyan primary accent |
| Emerald | Green-emerald primary |
| Fuchsia | Fuchsia/pink primary |
| Green | Green primary |
| Default (Minimal) | Minimal theme with only 5 variables |

### Available CSS Variables

| Variable | Tailwind Class | Usage |
|----------|---------------|-------|
| `--color-background` | `bg-background` | Page background |
| `--color-foreground` | `text-foreground` | Default text color |
| `--color-card` | `bg-card` | Card background |
| `--color-card-foreground` | `text-card-foreground` | Card text |
| `--color-popover` | `bg-popover` | Popover background |
| `--color-popover-foreground` | `text-popover-foreground` | Popover text |
| `--color-primary` | `bg-primary` | Primary actions, active state |
| `--color-primary-foreground` | `text-primary-foreground` | Text on primary |
| `--color-secondary` | `bg-secondary` | Secondary actions |
| `--color-secondary-foreground` | `text-secondary-foreground` | Text on secondary |
| `--color-muted` | `bg-muted` | Muted background |
| `--color-muted-foreground` | `text-muted-foreground` | Muted text |
| `--color-accent` | `bg-accent` | Accent background |
| `--color-accent-foreground` | `text-accent-foreground` | Text on accent |
| `--color-destructive` | `bg-destructive` | Destructive actions |
| `--color-destructive-foreground` | `text-destructive-foreground` | Text on destructive |
| `--color-border` | `border-border` | Default border color |
| `--color-input` | `border-input` | Form input border |
| `--color-ring` | `border-ring` | Focus ring color |
| `--radius` | `rounded-[--radius]` | Border radius |
| `--color-chart-1` through `--color-chart-5` | various | Chart color palette |
| `--color-sidebar` | `bg-sidebar` | Sidebar background |
| `--color-sidebar-foreground` | `text-sidebar-foreground` | Sidebar text |
| `--color-sidebar-primary` | `bg-sidebar-primary` | Sidebar primary actions |
| `--color-sidebar-primary-foreground` | `text-sidebar-primary-foreground` | Text on sidebar primary |
| `--color-sidebar-accent` | `bg-sidebar-accent` | Sidebar accent |
| `--color-sidebar-accent-foreground` | `text-sidebar-accent-foreground` | Text on sidebar accent |
| `--color-sidebar-border` | `border-sidebar-border` | Sidebar border |
| `--color-sidebar-ring` | `border-sidebar-ring` | Sidebar focus ring |

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

Dark mode is handled entirely via CSS `@variant dark` (Tailwind CSS v4's replacement for `@media (prefers-color-scheme: dark)`). No JavaScript context needed:

```css
@layer theme {
  @variant light {
    --color-background: oklch(1 0 0);
    --color-foreground: oklch(0.145 0 0);
  }

  @variant dark {
    --color-background: oklch(0.145 0 0);
    --color-foreground: oklch(0.985 0 0);
  }
}
```

Components automatically update when the system theme changes. The `@variant` at-rule is Tailwind CSS v4's equivalent of `@media (prefers-color-scheme: dark)` but also integrates with the Tailwind theme system for proper class generation.

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
