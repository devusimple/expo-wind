# Textarea

## Overview
A multiline text input with optional label and error message display. Built on React Native's `TextInput` with `multiline` enabled.

## Import
```tsx
import { Textarea } from '@/components/ui/textarea'
```

## Usage
```tsx
<Textarea label="Bio" placeholder="Tell us about yourself..." />
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Label displayed above the textarea |
| error | string | - | Error message displayed below |
| wrapperClassName | string | - | Class names for the outer wrapper View |
| labelClassName | string | - | Class names for the label Text |
| errorClassName | string | - | Class names for the error Text |
| placeholderTextColorClassName | string | - | Class name for placeholder text color |

All other `TextInputProps` from React Native are forwarded.

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

function BioForm() {
  const [bio, setBio] = useState('')

  return (
    <Textarea
      label="Biography"
      placeholder="Write a short bio..."
      value={bio}
      onChangeText={setBio}
    />
  )
}
```

### Example 2: With Error
```tsx
<Textarea
  label="Description"
  placeholder="Enter a description"
  error="Description is required"
  value={value}
  onChangeText={setValue}
/>
```
