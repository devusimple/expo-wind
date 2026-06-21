# Input

## Overview
A text input component with optional label and error message display. Wraps React Native's TextInput with consistent styling and validation feedback.

## Import
```tsx
import { Input } from '@/components/ui/input'
```

## Usage
```tsx
import { useState } from 'react'
import { Input } from '@/components/ui/input'

function MyInput() {
  const [value, setValue] = useState('')

  return (
    <Input
      label="Name"
      value={value}
      onChangeText={setValue}
      placeholder="Enter your name"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | undefined | Label text displayed above the input |
| error | string | undefined | Error message displayed below the input |
| wrapperClassName | string | undefined | Class name for the outer wrapper View |
| labelClassName | string | undefined | Class name for the label Text |
| errorClassName | string | undefined | Class name for the error Text |
| className | string | undefined | Class name for the TextInput element |
| ...props | TextInputProps | - | Additional React Native TextInput props |

## Examples

### Example 1: With Validation
```tsx
import { useState } from 'react'
import { Input } from '@/components/ui/input'

function ValidatedInput() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleBlur = () => {
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email')
    } else {
      setError('')
    }
  }

  return (
    <Input
      label="Email"
      value={email}
      onChangeText={setEmail}
      onBlur={handleBlur}
      error={error}
      placeholder="you@example.com"
      keyboardType="email-address"
      autoCapitalize="none"
    />
  )
}
```

### Example 2: With Custom Styling
```tsx
import { useState } from 'react'
import { Input } from '@/components/ui/input'

function StyledInput() {
  const [value, setValue] = useState('')

  return (
    <Input
      label="Search"
      value={value}
      onChangeText={setValue}
      placeholder="Search..."
      wrapperClassName="mx-4"
      labelClassName="text-lg"
    />
  )
}
```
