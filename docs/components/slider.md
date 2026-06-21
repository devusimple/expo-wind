# Slider

## Overview
Slider allows users to select a value from a continuous or discrete range. Use it for volume controls, brightness settings, price filters, or any numeric input.

## Import
```tsx
import { Slider } from '@/components/ui/slider'
```

## Usage
```tsx
<Slider defaultValue={50} />
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | - | Controlled value |
| onValueChange | (value: number) => void | - | Callback when value changes |
| defaultValue | number | 0 | Default value when uncontrolled |
| min | number | 0 | Minimum value |
| max | number | 100 | Maximum value |
| step | number | 1 | Step increment |
| disabled | boolean | - | Whether the slider is disabled |
| trackClassName | string | - | Class name for the track |
| rangeClassName | string | - | Class name for the filled range |
| thumbClassName | string | - | Class name for the thumb |
| className | string | - | Class name for the container |

## Examples

### Example 1: Basic
```tsx
import { Slider } from '@/components/ui/slider'

export default function BasicSlider() {
  return <Slider defaultValue={50} />
}
```

### Example 2: Controlled with Step
```tsx
import { useState } from 'react'
import { View, Text } from 'react-native'
import { Slider } from '@/components/ui/slider'

export default function ControlledSlider() {
  const [value, setValue] = useState(25)

  return (
    <View className="gap-2">
      <Text className="text-sm font-medium">Volume: {value}%</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={5}
      />
    </View>
  )
}
```
