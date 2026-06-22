# Button

## Overview
A pressable button component with built-in loading state, multiple variants, and sizes. Wraps React Native's Pressable with consistent styling.

## Installation
```bash
bunx rn-shadcn add button
# or
npx rn-shadcn add button
# or
pnpm rn-shadcn add button
```

## Import
```tsx
import { Button } from '@/components/ui/button'
```

## Usage
```tsx
<Button variant="default" size="md" onPress={() => console.log('pressed')}>
  Click Me
</Button>
```

## Props

### Button
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `ButtonVariants['variant']` | `—` | — |
| size | `ButtonVariants['size']` | `—` | — |
| loading | `boolean` | `—` | — |
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Button } from '@/components/ui/button'

<Button variant="default" size="md" onPress={() => console.log('pressed')}>
  Click Me
</Button>
```
