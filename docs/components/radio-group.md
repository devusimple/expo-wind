# RadioGroup

## Overview
RadioGroup presents a set of mutually exclusive options. Use it when users must select exactly one option from a list.

## Import
```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
```

## Usage
```tsx
<RadioGroup defaultValue="option-1">
  <RadioGroupItem value="option-1" label="Option 1" />
  <RadioGroupItem value="option-2" label="Option 2" />
  <RadioGroupItem value="option-3" label="Option 3" />
</RadioGroup>
```

## Props

### RadioGroup
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Controlled selected value |
| onValueChange | (value: string) => void | - | Callback when selection changes |
| defaultValue | string | - | Default selected value when uncontrolled |
| className | string | - | Class name for the container |

### RadioGroupItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | required | The value of this item |
| label | string | - | Label text displayed next to the radio |
| labelClassName | string | - | Class name for the label text |
| disabled | boolean | - | Whether the item is disabled |
| className | string | - | Class name for the item container |

## Examples

### Example 1: Basic
```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function BasicRadioGroup() {
  return (
    <RadioGroup defaultValue="email">
      <RadioGroupItem value="email" label="Email notifications" />
      <RadioGroupItem value="sms" label="SMS notifications" />
      <RadioGroupItem value="push" label="Push notifications" />
    </RadioGroup>
  )
}
```

### Example 2: Controlled with Disabled Item
```tsx
import { useState } from 'react'
import { Text } from 'react-native'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function ControlledRadioGroup() {
  const [size, setSize] = useState('md')

  return (
    <RadioGroup value={size} onValueChange={setSize}>
      <RadioGroupItem value="sm" label="Small" />
      <RadioGroupItem value="md" label="Medium" />
      <RadioGroupItem value="lg" label="Large" />
      <RadioGroupItem value="xl" label="Extra Large" disabled />
      <Text className="text-sm text-muted-foreground mt-2">Selected: {size}</Text>
    </RadioGroup>
  )
}
```
