# Badge

## Overview
A small label used to display status, category, or count. Often placed near an item to draw attention or provide metadata.

## Import
```tsx
import { Badge } from '@/components/ui/badge'
```

## Usage
```tsx
<Badge variant="default">New</Badge>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Visual style of the badge |
| children | `string` | required | Badge text content |
| textClassName | `string` | — | Tailwind class name for the inner Text |
| textProps | `TextProps` | — | Additional props passed to the inner Text |
| className | `string` | — | Tailwind class name for the root container |

## Examples

### Example 1: All variants
```tsx
import { View } from 'react-native'
import { Badge } from '@/components/ui/badge'

<View className="flex-row flex-wrap gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</View>
```

### Example 2: Status labels
```tsx
import { View, Text } from 'react-native'
import { Badge } from '@/components/ui/badge'

<View className="gap-2">
  <View className="flex-row items-center justify-between">
    <Text className="text-foreground">Order #1234</Text>
    <Badge variant="default">Processing</Badge>
  </View>
  <View className="flex-row items-center justify-between">
    <Text className="text-foreground">Order #1235</Text>
    <Badge variant="secondary">Shipped</Badge>
  </View>
  <View className="flex-row items-center justify-between">
    <Text className="text-foreground">Order #1236</Text>
    <Badge variant="destructive">Cancelled</Badge>
  </View>
  <View className="flex-row items-center justify-between">
    <Text className="text-foreground">Order #1237</Text>
    <Badge variant="outline">Pending</Badge>
  </View>
</View>
```
