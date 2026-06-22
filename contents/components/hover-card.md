# Hover Card

## Overview
A floating card that appears on hover or long-press, providing additional context or preview information.

## Installation
```bash
bunx rn-shadcn add hover-card
# or
npx rn-shadcn add hover-card
# or
pnpm rn-shadcn add hover-card
```

## Import
```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
```

## Usage
```tsx
<HoverCard>
  <HoverCardTrigger>
    <Text className="underline decoration-dotted">@username</Text>
  </HoverCardTrigger>
  <HoverCardContent>
    <Text className="text-sm">Profile preview content.</Text>
  </HoverCardContent>
</HoverCard>
```

## Props

### Hover Card
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | — |
| onOpenChange | `(open: boolean) => void` | `false` | — |
| defaultOpen | `boolean` | `false` | — |
| children | `React.ReactNode` | `false` | — |

### Hover Card Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

## Examples

### Example 1: Default
```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'

<HoverCard>
  <HoverCardTrigger>
    <Text className="underline decoration-dotted">@username</Text>
  </HoverCardTrigger>
  <HoverCardContent>
    <Text className="text-sm">Profile preview content.</Text>
  </HoverCardContent>
</HoverCard>
```
