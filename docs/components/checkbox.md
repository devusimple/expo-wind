# Checkbox

## Overview
A controlled or uncontrolled checkbox component with an optional label. Supports checked, unchecked, and disabled states.

## Import
```tsx
import { Checkbox } from '@/components/ui/checkbox'
```

## Usage
```tsx
const [agreed, setAgreed] = useState(false)

<Checkbox
  checked={agreed}
  onCheckedChange={setAgreed}
  label="I agree to the terms"
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | undefined | Controlled checked state |
| onCheckedChange | (checked: boolean) => void | undefined | Callback when checked state changes |
| defaultChecked | boolean | false | Initial state when uncontrolled |
| disabled | boolean | undefined | Disables the checkbox |
| label | string | undefined | Label text displayed next to the checkbox |
| labelClassName | string | undefined | Tailwind class for the label text |

All other props are passed to the underlying `Pressable`.

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'

export default function TermsCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Accept terms and conditions"
    />
  )
}
```

### Example 2: Uncontrolled with Default Value
```tsx
import { Checkbox } from '@/components/ui/checkbox'

export default function Preferences() {
  return (
    <>
      <Checkbox defaultChecked label="Email notifications" />
      <Checkbox label="Push notifications" />
      <Checkbox disabled label="SMS notifications (unavailable)" />
    </>
  )
}
```
