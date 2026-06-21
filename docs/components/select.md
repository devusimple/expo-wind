# Select

## Overview
Select displays a list of options for the user to pick from. Use it in forms or filters where users need to choose from a predefined set of values.

## Import
```tsx
import { Select } from '@/components/ui/select'
```

## Usage
```tsx
<Select
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
  ]}
  placeholder="Choose a fruit"
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | SelectOption[] | required | Array of `{ label: string, value: string }` options |
| value | string | - | Controlled selected value |
| onValueChange | (value: string) => void | - | Callback when selection changes |
| placeholder | string | 'Select...' | Placeholder text when no option is selected |
| emptyText | string | 'No options.' | Text shown when the options array is empty |
| disabled | boolean | - | Whether the select is disabled |
| triggerClassName | string | - | Class name for the trigger button |
| optionTextClassName | string | - | Class name for option text |
| optionClassName | string | - | Class name for each option row |
| selectedOptionClassName | string | - | Class name for the selected option row |
| className | string | - | Class name for the wrapper view |

## Examples

### Example 1: Basic
```tsx
import { Select } from '@/components/ui/select'

export default function BasicSelect() {
  return (
    <Select
      options={[
        { label: 'React', value: 'react' },
        { label: 'React Native', value: 'react-native' },
        { label: 'Expo', value: 'expo' },
      ]}
    />
  )
}
```

### Example 2: Controlled
```tsx
import { useState } from 'react'
import { View, Text } from 'react-native'
import { Select } from '@/components/ui/select'

export default function ControlledSelect() {
  const [framework, setFramework] = useState('expo')

  return (
    <View className="gap-2">
      <Select
        options={[
          { label: 'React', value: 'react' },
          { label: 'React Native', value: 'react-native' },
          { label: 'Expo', value: 'expo' },
        ]}
        value={framework}
        onValueChange={setFramework}
      />
      <Text className="text-sm text-muted-foreground">Selected: {framework}</Text>
    </View>
  )
}
```
