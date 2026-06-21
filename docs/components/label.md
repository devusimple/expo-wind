# Label

## Overview
A styled text label component for form fields and input elements. Provides consistent typography and accessibility support via the `nativeID` prop.

## Import
```tsx
import { Label } from '@/components/ui/label'
```

## Usage
```tsx
import { TextInput } from 'react-native'
import { Label } from '@/components/ui/label'

function MyLabel() {
  return (
    <>
      <Label nativeID="email-label">Email</Label>
      <TextInput
        aria-labelledby="email-label"
        placeholder="Enter your email"
      />
    </>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| nativeID | string | undefined | Sets the nativeID for accessibility linking to input elements |
| className | string | undefined | Class name for the label text |
| ...props | TextProps | - | Additional React Native Text props |

## Examples

### Example 1: With Input Association
```tsx
import { TextInput, View } from 'react-native'
import { Label } from '@/components/ui/label'

function LabeledInput() {
  return (
    <View>
      <Label nativeID="name-label">Full Name</Label>
      <TextInput
        nativeID="name"
        aria-labelledby="name-label"
        placeholder="Enter your full name"
      />
    </View>
  )
}
```

### Example 2: Required Field Label
```tsx
import { Text, View } from 'react-native'
import { Label } from '@/components/ui/label'

function RequiredLabel() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Label nativeID="required-field">Username</Label>
      <Text style={{ color: 'red', marginLeft: 4 }}>*</Text>
    </View>
  )
}
```
