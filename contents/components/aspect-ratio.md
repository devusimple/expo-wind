# Aspect Ratio

## Overview
Displays content within a desired aspect ratio while maintaining the container's proportions.

## Installation
```bash
bunx rn-shadcn add aspect-ratio
# or
npx rn-shadcn add aspect-ratio
# or
pnpm rn-shadcn add aspect-ratio
```

## Import
```tsx
import { AspectRatio } from '@/components/ui/aspect-ratio'
```

## Usage
```tsx
<AspectRatio ratio={16 / 9} className="w-full">
  <View className="bg-muted rounded-lg items-center justify-center">
    <Text className="text-muted-foreground">16:9</Text>
  </View>
</AspectRatio>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { AspectRatio } from '@/components/ui/aspect-ratio'

<AspectRatio ratio={16 / 9} className="w-full">
  <View className="bg-muted rounded-lg items-center justify-center">
    <Text className="text-muted-foreground">16:9</Text>
  </View>
</AspectRatio>
```
