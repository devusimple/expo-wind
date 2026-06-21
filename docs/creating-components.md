---
title: Creating Components
description: Template, conventions, sub-components, and checklist for building new components.
---

# Creating Components

## Architecture Overview

Every component follows three core principles:

1. **`className` override via `cn()`** — consumers can always customize styling
2. **CSS variable references** — automatic theme adaptation without JS context
3. **Composition over configuration** — sub-components for flexibility (matching Radix UI patterns)

## Quick Start Template

```tsx
import { View, Text, type ViewProps } from 'react-native'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/cn'

// 1. Define variants
const alert = tv({
  base: 'flex-row items-center gap-2 rounded-lg border p-4',
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive: 'border-destructive bg-destructive/10 text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

// 2. Export props type
type AlertVariants = VariantProps<typeof alert>
interface AlertProps extends AlertVariants, ViewProps {
  className?: string
  children?: React.ReactNode
}

// 3. Build component
export function Alert({ variant, className, children, ...props }: AlertProps) {
  return (
    <View className={cn(alert({ variant }), className)} {...props}>
      {children}
    </View>
  )
}
```

## Creating Sub-Components (Radix-style Composition)

For complex components, use React Context to share state between sub-components:

```tsx
import { createContext, useContext, useState } from 'react'
import { View, Text, Pressable } from 'react-native'

// 1. Context
interface AccordionContextType {
  expanded: boolean
  toggle: () => void
}
const AccordionContext = createContext<AccordionContextType | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion sub-components must be inside <Accordion>')
  return ctx
}

// 2. Root
export function Accordion({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <AccordionContext.Provider value={{ expanded, toggle: () => setExpanded((v) => !v) }}>
      <View className="divide-y divide-border rounded-lg border border-border">
        {children}
      </View>
    </AccordionContext.Provider>
  )
}

// 3. Sub-components
export function AccordionItem({ children, value }: { children: React.ReactNode; value: string }) {
  return <View>{children}</View>
}

export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  const { toggle } = useAccordion()
  return (
    <Pressable onPress={toggle} className="flex-row items-center justify-between p-4">
      <Text className="text-foreground font-medium">{children}</Text>
    </Pressable>
  )
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  const { expanded } = useAccordion()
  if (!expanded) return null
  return <View className="px-4 pb-4">{children}</View>
}
```

## Checklist

When adding a new component file, verify:

- [ ] Import `cn` from `@/lib/cn`
- [ ] Use `tailwind-variants` (`tv()`) for variant props
- [ ] Export `VariantProps` type for consumers
- [ ] Accept and merge `className` via `cn()`
- [ ] Reference CSS variables (not raw color values)
- [ ] Use React Native core components only (no `withUniwind`)
- [ ] Use `accent-` prefix for non-style color props
- [ ] Sub-components use React Context for shared state
- [ ] Folder structure: one file per component (unless tightly coupled)
- [ ] Add barrel export in `src/components/ui/index.ts`
- [ ] Run `npx tsc --noEmit` to verify types

## Barrel Export Registration

After creating a new component file, add its export to `src/components/ui/index.ts`:

```tsx
export * from './my-new-component'
```

Exports are ordered alphabetically for maintainability.

## Naming Conventions

| Pattern | Example | When |
|---------|---------|------|
| Single component file | `button.tsx` | Simple, self-contained component |
| Context + sub-components | `dialog.tsx` | Complex component with shared state |
| Compound exports | `toggle-group.tsx` | Related components in one file |

Component names are PascalCase in exports, kebab-case in filenames.

## Testing

Verify your component compiles:

```bash
npx tsc --noEmit
```

There are no runtime tests configured; verify rendering by running the app:

```bash
npx expo start
```

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Use `className` for all styling | Use inline `style` objects (except for animations) |
| Reference CSS variables via Tailwind classes | Hardcode color hex values |
| Export component + VariantProps types | Export internal context |
| Use `Pressable` for pressable elements | Wrap with `withUniwind` |
| Keep one component per file for simplicity | Create deep folder hierarchies |
| Make uncontrolled components the default | Require controlled state unless needed |
