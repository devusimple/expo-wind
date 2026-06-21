# Skeleton

## Overview
Skeleton provides a pulsing placeholder while content is loading. Use it to improve perceived performance during data fetches or image loads.

## Import
```tsx
import { Skeleton } from '@/components/ui/skeleton'
```

## Usage
```tsx
<Skeleton className="h-10 w-48" />
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Class name for the skeleton element |
| style | ViewStyle | - | Additional style overrides |
| All ViewProps | - | - | All standard React Native View props are supported |

## Examples

### Example 1: Basic
```tsx
import { View } from 'react-native'
import { Skeleton } from '@/components/ui/skeleton'

export default function BasicSkeleton() {
  return (
    <View className="gap-3 p-4">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-36" />
      <Skeleton className="h-4 w-40" />
    </View>
  )
}
```

### Example 2: Card Loading Placeholder
```tsx
import { View } from 'react-native'
import { Skeleton } from '@/components/ui/skeleton'

export default function CardSkeleton() {
  return (
    <View className="rounded-xl border border-border p-4 gap-3">
      <Skeleton className="h-40 w-full rounded-lg" />
      <View className="gap-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </View>
      <View className="flex-row gap-2 mt-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </View>
    </View>
  )
}
```
