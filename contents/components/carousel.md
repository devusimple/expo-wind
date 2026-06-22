# Carousel

## Overview
A carousel component that cycles through a set of items, images, or content cards with optional navigation controls and autoplay.

## Installation
```bash
bunx rn-shadcn add carousel
# or
npx rn-shadcn add carousel
# or
pnpm rn-shadcn add carousel
```

## Import
```tsx
import { Carousel } from '@/components/ui/carousel'
```

## Usage
```tsx
<Carousel
  data={items}
  renderItem={({ item }) => (
    <View className="h-48 bg-muted rounded-xl items-center justify-center">
      <Text>{item}</Text>
    </View>
  )}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Carousel } from '@/components/ui/carousel'

<Carousel
  data={items}
  renderItem={({ item }) => (
    <View className="h-48 bg-muted rounded-xl items-center justify-center">
      <Text>{item}</Text>
    </View>
  )}
/>
```
