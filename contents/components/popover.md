# Popover

## Overview
A floating card that appears when triggered, displaying additional content, actions, or information.

## Installation
```bash
bunx rn-shadcn add popover
# or
npx rn-shadcn add popover
# or
pnpm rn-shadcn add popover
```

## Import
```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle } from '@/components/ui/popover'
```

## Usage
```tsx
<Popover>
  <PopoverTrigger>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Details</PopoverTitle>
    </PopoverHeader>
    <Text className="text-sm text-muted-foreground">
      Popover content here.
    </Text>
  </PopoverContent>
</Popover>
```

## Props

### Popover
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | — |
| onOpenChange | `(open: boolean) => void` | `false` | — |
| defaultOpen | `boolean` | `false` | — |
| children | `React.ReactNode` | `false` | — |

### Popover Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

### Popover Close
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

## Examples

### Example 1: Default
```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle } from '@/components/ui/popover'

<Popover>
  <PopoverTrigger>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Details</PopoverTitle>
    </PopoverHeader>
    <Text className="text-sm text-muted-foreground">
      Popover content here.
    </Text>
  </PopoverContent>
</Popover>
```
