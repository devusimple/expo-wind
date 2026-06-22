# Dialog

## Overview
A modal dialog component for displaying content that requires user interaction or attention.

## Installation
```bash
bunx rn-shadcn add dialog
# or
npx rn-shadcn add dialog
# or
pnpm rn-shadcn add dialog
```

## Import
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
```

## Usage
```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description text.</DialogDescription>
    </DialogHeader>
    <View className="py-4">
      <Text>Dialog content.</Text>
    </View>
    <DialogFooter>
      <DialogClose>
        <Button variant="outline">Close</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Props

### Dialog
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | — |
| onOpenChange | `(open: boolean) => void` | `false` | — |
| defaultOpen | `boolean` | `false` | — |
| children | `React.ReactNode` | `false` | — |

### Dialog Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

## Examples

### Example 1: Default
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description text.</DialogDescription>
    </DialogHeader>
    <View className="py-4">
      <Text>Dialog content.</Text>
    </View>
    <DialogFooter>
      <DialogClose>
        <Button variant="outline">Close</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```
