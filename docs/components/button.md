# Button

## Overview
A pressable button component with built-in loading state, multiple variants, and sizes. Wraps React Native's Pressable with consistent styling.

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
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Visual style |
| size | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Button size |
| loading | `boolean` | — | Shows an ActivityIndicator and disables press |
| disabled | `boolean` | — | Disables the button and reduces opacity |
| children | `string \| ReactNode` | — | Button label or custom content |
| textClassName | `string` | — | Tailwind class name for the text (when children is a string) |
| className | `string` | — | Tailwind class name for the root Pressable |
| — | PressableProps | — | All standard React Native Pressable props (except `children`) |

## Examples

### Example 1: Variants
```tsx
import { View } from 'react-native'
import { Button } from '@/components/ui/button'

<View className="gap-2">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</View>
```

### Example 2: Sizes
```tsx
import { View } from 'react-native'
import { Button } from '@/components/ui/button'

<View className="flex-row items-center gap-2">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">+</Button>
</View>
```

### Example 3: Loading state
```tsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'

function SubmitButton() {
  const [loading, setLoading] = useState(false)

  const handlePress = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <Button loading={loading} onPress={handlePress}>
      {loading ? 'Saving…' : 'Save Changes'}
    </Button>
  )
}
```
