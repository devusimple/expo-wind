# Separator

## Overview
Separator is a thin visual divider used to separate content into distinct sections. Use it in lists, menus, or between layout sections.

## Import
```tsx
import { Separator } from '@/components/ui/separator'
```

## Usage
```tsx
<Separator />
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | The orientation of the separator |
| className | string | - | Class name for the separator |

## Examples

### Example 1: Horizontal Separator
```tsx
import { View, Text } from 'react-native'
import { Separator } from '@/components/ui/separator'

export default function BasicSeparator() {
  return (
    <View className="gap-2">
      <Text className="text-lg font-semibold">Settings</Text>
      <Separator />
      <Text className="text-sm">Account preferences</Text>
      <Text className="text-sm">Privacy & security</Text>
    </View>
  )
}
```

### Example 2: Vertical Separator
```tsx
import { View, Text } from 'react-native'
import { Separator } from '@/components/ui/separator'

export default function VerticalSeparator() {
  return (
    <View className="flex-row items-center gap-3">
      <Text className="text-sm">Edit</Text>
      <Separator orientation="vertical" className="h-4" />
      <Text className="text-sm">Copy</Text>
      <Separator orientation="vertical" className="h-4" />
      <Text className="text-sm">Delete</Text>
    </View>
  )
}
```
