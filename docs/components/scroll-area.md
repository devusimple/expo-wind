# ScrollArea

## Overview
ScrollArea wraps content in a native scroll view with hidden scrollbar indicators. Use it when you need a clean scrollable container without visible scrollbars.

## Import
```tsx
import { ScrollArea } from '@/components/ui/scroll-area'
```

## Usage
```tsx
<ScrollArea className="h-48">
  <Text>Scrollable content here</Text>
</ScrollArea>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Class name for the scroll view |
| contentContainerClassName | string | - | Class name for the inner content container |
| All ScrollViewProps | - | - | All standard React Native ScrollView props are supported |

## Examples

### Example 1: Basic Vertical Scroll
```tsx
import { View, Text } from 'react-native'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function BasicScrollArea() {
  return (
    <ScrollArea className="h-40 border border-border rounded-lg">
      {Array.from({ length: 20 }, (_, i) => (
        <Text key={i} className="p-2 border-b border-border text-sm">
          List item {i + 1}
        </Text>
      ))}
    </ScrollArea>
  )
}
```

### Example 2: Horizontal Scroll
```tsx
import { View, Text } from 'react-native'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function HorizontalScrollArea() {
  return (
    <ScrollArea horizontal className="w-full">
      <View className="flex-row gap-3 p-4">
        {['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'].map((color) => (
          <View key={color} className="w-28 h-28 rounded-xl bg-muted items-center justify-center">
            <Text className="text-sm font-medium">{color}</Text>
          </View>
        ))}
      </View>
    </ScrollArea>
  )
}
```
