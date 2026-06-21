# Sonner

## Overview
A toast notification system with support for success, error, info, warning, and default types. Uses a provider-based pattern with an imperative `toast()` API for triggering notifications from anywhere in the app.

## Import
```tsx
import { SonnerProvider, toast } from '@/components/ui/sonner'
```

## Usage
```tsx
<SonnerProvider position="top" visibleToasts={3} duration={4000}>
  <YourApp />
</SonnerProvider>
```

## Props

### SonnerProvider
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | App content |
| position | `'top' \| 'bottom'` | `'top'` | Display position |
| visibleToasts | number | `3` | Max visible toasts |
| duration | number | `4000` | Auto-dismiss duration in ms |

## Examples

### Example 1: Basic
```tsx
import { toast } from '@/components/ui/sonner'

function MyScreen() {
  return (
    <Pressable onPress={() => toast('Hello from Sonner!')}>
      <Text>Show Toast</Text>
    </Pressable>
  )
}
```

### Example 2: With Variants
```tsx
<Pressable onPress={() => toast.success('Saved!', { description: 'Your changes were saved.' })}>
  <Text>Success</Text>
</Pressable>
<Pressable onPress={() => toast.error('Failed', { description: 'Something went wrong.' })}>
  <Text>Error</Text>
</Pressable>
<Pressable onPress={() => toast.info('Heads up', { description: 'New update available.' })}>
  <Text>Info</Text>
</Pressable>
<Pressable onPress={() => toast.warning('Warning', { description: 'Low battery.' })}>
  <Text>Warning</Text>
</Pressable>
```

### Example 3: With Action
```tsx
<Pressable
  onPress={() =>
    toast('Message received', {
      description: 'You have a new message from Alex.',
      action: { label: 'View', onClick: () => console.log('View pressed') },
    })
  }
>
  <Text>Show with Action</Text>
</Pressable>
```
