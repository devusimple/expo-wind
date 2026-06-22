# Sheet

## Overview
A slide-in panel component that displays content from the side of the screen, commonly used for mobile navigation or filters.

## Installation
```bash
bunx rn-shadcn add sheet
# or
npx rn-shadcn add sheet
# or
pnpm rn-shadcn add sheet
```

## Import
```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
```

## Usage
```tsx
<Sheet>
  <SheetTrigger>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Sheet description.</SheetDescription>
    </SheetHeader>
    <View className="p-4">
      <Text>Sheet content.</Text>
    </View>
  </SheetContent>
</Sheet>
```

## Props

### Sheet
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | — |
| onOpenChange | `(open: boolean) => void` | `false` | — |
| defaultOpen | `boolean` | `false` | — |
| children | `React.ReactNode` | `false` | — |

### Sheet Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

### Sheet Close
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

## Examples

### Example 1: Default
```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'

<Sheet>
  <SheetTrigger>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Sheet description.</SheetDescription>
    </SheetHeader>
    <View className="p-4">
      <Text>Sheet content.</Text>
    </View>
  </SheetContent>
</Sheet>
```
