# InputOTP

## Overview
A one-time password input component with individual digit slots, ideal for verification codes and PIN entry. Provides a hidden TextInput with masked display of digit slots.

## Import
```tsx
import { InputOTP, InputOTPSeparator } from '@/components/ui/input-otp'
```

## Usage
```tsx
import { useState } from 'react'
import { InputOTP } from '@/components/ui/input-otp'

function MyOTPInput() {
  const [value, setValue] = useState('')

  return (
    <InputOTP
      value={value}
      onValueChange={setValue}
      maxLength={6}
    />
  )
}
```

## Props

### InputOTP
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | undefined | Controlled value |
| onValueChange | (value: string) => void | undefined | Callback when the value changes |
| maxLength | number | 6 | Number of digit slots |
| disabled | boolean | undefined | Disables input interaction |
| className | string | undefined | Class name for the outer container |
| inputClassName | string | undefined | Class name for the slot row container |
| slotClassName | string | undefined | Class name for each digit slot |
| activeSlotClassName | string | undefined | Class name for the active (focused) slot |
| ...props | ViewProps | - | Additional React Native View props |

### InputOTPSeparator
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the separator container |
| ...props | ViewProps | - | Additional React Native View props |

## Examples

### Example 1: 4-Digit Code
```tsx
import { useState } from 'react'
import { Text } from 'react-native'
import { InputOTP } from '@/components/ui/input-otp'

function FourDigitOTP() {
  const [code, setCode] = useState('')

  return (
    <>
      <InputOTP
        value={code}
        onValueChange={setCode}
        maxLength={4}
      />
      {code.length === 4 && (
        <Text>Code entered: {code}</Text>
      )}
    </>
  )
}
```

### Example 2: With Separator
```tsx
import { useState } from 'react'
import { InputOTP, InputOTPSeparator } from '@/components/ui/input-otp'

function SeparatedOTP() {
  const [value, setValue] = useState('')

  return (
    <InputOTP
      value={value}
      onValueChange={setValue}
      maxLength={6}
    >
      <InputOTPSeparator />
    </InputOTP>
  )
}
```
