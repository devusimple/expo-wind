---
title: Architecture
description: Design decisions, component categories, state management, and animation strategy.
---

# Architecture

## Design Decisions

### Why CSS variables instead of a ThemeContext

CSS variables are natively supported in React Native via Tailwind CSS v4. By defining `--primary`, `--background`, etc. in `global.css`, every component automatically responds to theme changes without:

- Re-rendering the entire tree
- Passing a theme object through context
- Re-computing styles in JavaScript

Theme switching is driven by `@media (prefers-color-scheme: dark)` — no toggle needed.

### Why `cn()` instead of just `clsx`

`clsx` concatenates class strings but doesn't resolve conflicts:

```tsx
clsx('bg-primary', 'bg-destructive') // => 'bg-primary bg-destructive' (both applied)
```

`tailwind-merge` resolves the conflict:

```tsx
twMerge(clsx('bg-primary', 'bg-destructive')) // => 'bg-destructive' (last wins)
```

This is essential when consumers override component styles via `className`.

### Why `tailwind-variants` instead of manual logic

Maintaining variant tables by hand leads to bugs and boilerplate:

```tsx
// Manual - error prone
function getButtonClasses(size: string) {
  if (size === 'sm') return 'h-8 px-3 text-xs'
  if (size === 'lg') return 'h-12 px-8'
  return 'h-10 px-4'
}
```

With `tv()`:

```tsx
const button = tv({
  base: 'items-center justify-center rounded-md',
  variants: {
    size: { sm: 'h-8 px-3 text-xs', lg: 'h-12 px-8', default: 'h-10 px-4' },
  },
  defaultVariants: { size: 'default' },
})
```

Type inference, intellisense, and merge consistency come for free.

### Why React Context for sub-components

Components like Dialog, DropdownMenu, and Tabs share state (open/closed, selected value) between multiple sub-components. Context avoids prop drilling:

```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description</DialogDescription>
    <DialogClose>Close</DialogClose>
  </DialogContent>
</Dialog>
```

Each sub-component reads `isOpen` / `toggle` / `onClose` from context without explicit props.

### Why `Modal` for overlays

React Native has no DOM portal. Overlay components (Dialog, Sheet, Drawer, Tooltip, Popover) use React Native's built-in `Modal` component, which renders on top of everything at the OS level.

For lightweight overlays that don't need OS-level layering (e.g., DropdownMenu items), components use absolute positioning within a relative parent container.

### Why no `withUniwind` wrapping

Uniwind supports two modes:
1. **Automatic** — `withUniwind` wraps third-party components to accept `className`
2. **Direct** — React Native core components already accept `className`

Since all our components build on core components (View, Text, Pressable), `withUniwind` wrapping is unnecessary and adds overhead.

## Component Categories

```
Layout        — Structural containers (Card, Tabs, Accordion, Sheet)
Forms         — User input (Input, Select, Switch, Slider, Button)
Overlays      — Floating content (Dialog, Popover, Tooltip, Drawer)
Navigation    — Menus and navigation (Breadcrumb, DropdownMenu, Command, Pagination)
Data Display  — Show data (Table, Chart, Avatar, Badge, Calendar)
Feedback      — User notifications (Alert, Sonner, Toast, Progress)
Typography    — Text rendering (Text, Typography/H1-P-Blockquote)
```

## State Management

Components are **uncontrolled by default** but support controlled mode when props are provided:

```tsx
// Uncontrolled (default)
<Accordion />

// Controlled
const [open, setOpen] = useState(false)
<Accordion open={open} onOpenChange={setOpen} />
```

This pattern — accepting `value` + `onValueChange` — is consistent across all stateful components.

## Animation Strategy

| Animation Type | Tool | Used By |
|---------------|------|---------|
| Layout changes | `LayoutAnimation` | Accordion, Collapsible |
| Transitions | `useAnimatedStyle` + `withTiming` | Progress, Switch, Slider |
| Opacity fade | `useAnimatedStyle` | Skeleton |
| No animation | Instant mount/unmount | Dialog, Sheet, Tooltip |

## File Organization

```
src/components/ui/
├── index.ts                    # Barrel exports
├── button.tsx                  # Simple: one component per file
├── dialog.tsx                  # Complex: Root + sub-components in one file
├── toggle-group.tsx            # Related: tightly coupled components
├── chart.tsx                   # Compound: multiple chart types sharing utilities
└── ...
```

Each file is self-contained — no shared utility files within the ui directory (aside from `index.ts`). The only external dependency is `@/lib/cn`.
