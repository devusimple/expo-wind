# Drawer

## Overview
A slide-in panel that displays additional content or navigation options from the edge of the screen.

## Installation
```bash
bunx rn-shadcn add drawer
# or
npx rn-shadcn add drawer
# or
pnpm rn-shadcn add drawer
```

## Import
```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from '@/components/ui/drawer'
```

## Usage
```tsx
<Drawer>
  <DrawerTrigger>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>Side panel content.</DrawerDescription>
    </DrawerHeader>
    <View className="p-4">
      <Text>Drawer body content.</Text>
    </View>
  </DrawerContent>
</Drawer>
```

## Props

### Drawer
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | — |
| onOpenChange | `(open: boolean) => void` | `false` | — |
| defaultOpen | `boolean` | `false` | — |
| children | `React.ReactNode` | `false` | — |

### Drawer Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

### Drawer Close
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

## Examples

### Example 1: Default
```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from '@/components/ui/drawer'

<Drawer>
  <DrawerTrigger>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>Side panel content.</DrawerDescription>
    </DrawerHeader>
    <View className="p-4">
      <Text>Drawer body content.</Text>
    </View>
  </DrawerContent>
</Drawer>
```
