# Scroll Area

## Overview
A custom scroll area with styled scroll indicators for consistent scrolling behavior across platforms.

## Installation
```bash
bunx rn-shadcn add scroll-area
# or
npx rn-shadcn add scroll-area
# or
pnpm rn-shadcn add scroll-area
```

## Import
```tsx
import { ScrollArea } from '@/components/ui/scroll-area'
```

## Usage
```tsx
<ScrollArea className="h-48">
  <View className="gap-2 p-4">
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </View>
</ScrollArea>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { ScrollArea } from '@/components/ui/scroll-area'

<ScrollArea className="h-48">
  <View className="gap-2 p-4">
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </View>
</ScrollArea>
```
