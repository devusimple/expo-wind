# Toggle

## Overview
A button that switches between on and off states, commonly used to enable or disable a feature.

## Installation
```bash
bunx rn-shadcn add toggle
# or
npx rn-shadcn add toggle
# or
pnpm rn-shadcn add toggle
```

## Import
```tsx
import { Toggle } from '@/components/ui/toggle'
```

## Usage
```tsx
<Toggle
  pressed={isPressed}
  onPressedChange={setIsPressed}
>
  <Text>Bold</Text>
</Toggle>
```

## Props

### Toggle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `ToggleVariants['variant']` | `—` | — |
| size | `ToggleVariants['size']` | `—` | — |
| pressed | `boolean` | `false` | — |
| onPressedChange | `(pressed: boolean) => void` | `—` | — |
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Toggle } from '@/components/ui/toggle'

<Toggle
  pressed={isPressed}
  onPressedChange={setIsPressed}
>
  <Text>Bold</Text>
</Toggle>
```
