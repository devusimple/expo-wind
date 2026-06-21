# Resizable

## Overview
Resizable creates a split panel layout where users can drag a handle to resize adjacent panels. Use it for sidebars, code editors, or any adjustable split views.

## Import
```tsx
import { Resizable, ResizableHandle } from '@/components/ui/resizable'
```

## Usage
```tsx
<Resizable>
  <View>
    <Text>Left panel</Text>
  </View>
  <View>
    <Text>Right panel</Text>
  </View>
</Resizable>
```

## Props

### Resizable
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | 'horizontal' \| 'vertical' | 'horizontal' | Layout direction |
| defaultRatio | number | 0.5 | Initial split ratio (0–1) |
| onRatioChange | (ratio: number) => void | - | Callback when ratio changes |
| minRatio | number | 0.2 | Minimum ratio for the first panel |
| maxRatio | number | 0.8 | Maximum ratio for the first panel |
| handleClassName | string | - | Class name for the drag handle |
| firstPanelClassName | string | - | Class name for the first panel |
| secondPanelClassName | string | - | Class name for the second panel |
| className | string | - | Class name for the container |

### ResizableHandle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | 'horizontal' \| 'vertical' | 'horizontal' | Layout direction |
| className | string | - | Class name for the handle |

## Examples

### Example 1: Basic Horizontal Split
```tsx
import { View, Text } from 'react-native'
import { Resizable } from '@/components/ui/resizable'

export default function BasicResizable() {
  return (
    <Resizable className="h-64 border border-border rounded-lg overflow-hidden">
      <View className="p-4">
        <Text className="font-semibold">Sidebar</Text>
        <Text className="text-sm text-muted-foreground">Resize me</Text>
      </View>
      <View className="p-4">
        <Text className="font-semibold">Content</Text>
        <Text className="text-sm text-muted-foreground">Main area</Text>
      </View>
    </Resizable>
  )
}
```

### Example 2: Vertical Split with Custom Handle
```tsx
import { View, Text } from 'react-native'
import { Resizable, ResizableHandle } from '@/components/ui/resizable'

export default function VerticalResizable() {
  return (
    <Resizable
      direction="vertical"
      defaultRatio={0.3}
      minRatio={0.2}
      maxRatio={0.7}
      className="h-96 border border-border rounded-lg overflow-hidden"
    >
      <View className="p-4 bg-card">
        <Text className="font-semibold">Header Panel</Text>
      </View>
      <View className="p-4">
        <Text className="font-semibold">Content Panel</Text>
        <Text className="text-sm text-muted-foreground">Drag the handle to resize</Text>
      </View>
    </Resizable>
  )
}
```
