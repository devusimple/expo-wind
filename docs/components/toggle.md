# Toggle

## Overview
A pressable toggle button with support for variants (default, outline) and sizes (sm, md, lg). Built on `tailwind-variants` for consistent styling.

## Import
```tsx
import { Toggle } from '@/components/ui/toggle'
```

## Usage
```tsx
<Toggle pressed={isPressed} onPressedChange={setIsPressed}>
  Toggle me
</Toggle>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'outline'` | `'default'` | Visual variant |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Size preset |
| pressed | boolean | `false` | Whether the toggle is pressed |
| onPressedChange | `(pressed: boolean) => void` | - | Press state change handler |
| textClassName | string | - | Additional class names for inner Text |
| children | `string \| React.ReactNode` | - | Content |
| className | string | - | Additional class names |

All other `PressableProps` are forwarded.

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { Toggle } from '@/components/ui/toggle'
import { Text } from '@/components/ui/text'

function BoldToggle() {
  const [bold, setBold] = useState(false)

  return (
    <Toggle pressed={bold} onPressedChange={setBold}>
      Bold
    </Toggle>
  )
}
```

### Example 2: With Variants
```tsx
<Toggle variant="outline" size="sm" pressed={false} onPressedChange={() => {}}>
  Small
</Toggle>
<Toggle variant="outline" size="md" pressed={true} onPressedChange={() => {}}>
  Medium (active)
</Toggle>
<Toggle variant="default" size="lg" pressed={false} onPressedChange={() => {}}>
  Large
</Toggle>
```
