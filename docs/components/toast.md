# Toast

## Overview
A context-based toast notification system with support for titles, descriptions, actions, and close buttons. Uses `ToastProvider` with imperative `useToast` hook for dispatching toasts from anywhere in the tree.

## Import
```tsx
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose, useToast } from '@/components/ui/toast'
```

## Usage
```tsx
<ToastProvider duration={5000}>
  <YourApp />
</ToastProvider>
```

## Props

### ToastProvider
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | App content |
| duration | number | `5000` | Default toast duration in ms |

### `useToast()` return value
| Prop | Type | Description |
|------|------|-------------|
| toasts | `ToastData[]` | Current active toasts |
| addToast | `(toast: Omit<ToastData, 'id'>) => string` | Add a new toast, returns its id |
| removeToast | `(id: string) => void` | Remove a toast by id |

### ToastData
| Prop | Type | Description |
|------|------|-------------|
| title | string | Toast title |
| description | string | Optional description |
| variant | `'default' \| 'destructive' \| 'success'` | Visual variant |
| action | `{ label: string, onClick: () => void }` | Optional action button |
| duration | number | Override default duration |

## Examples

### Example 1: Basic
```tsx
import { useToast } from '@/components/ui/toast'

function MyScreen() {
  const { addToast } = useToast()

  return (
    <Pressable onPress={() => addToast({ title: 'Hello', description: 'This is a toast' })}>
      <Text>Show Toast</Text>
    </Pressable>
  )
}
```

### Example 2: With Variants
```tsx
<Pressable
  onPress={() => addToast({ title: 'Deleted', description: 'Item removed.', variant: 'destructive' })}
>
  <Text>Destructive</Text>
</Pressable>

<Pressable
  onPress={() => addToast({ title: 'Saved', description: 'Changes saved.', variant: 'success' })}
>
  <Text>Success</Text>
</Pressable>
```

### Example 3: With Action
```tsx
<Pressable
  onPress={() =>
    addToast({
      title: 'New message',
      description: 'From: Alice',
      action: { label: 'Reply', onClick: () => console.log('Reply') },
    })
  }
>
  <Text>Toast with Action</Text>
</Pressable>
```
