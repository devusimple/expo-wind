# Alert Dialog

## Overview
A modal dialog that interrupts the user with important content and requires a confirmation or acknowledgement. Built on React Native's Modal component.

## Import
```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'
```

## Usage
```tsx
<AlertDialog>
  <AlertDialogTrigger>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel asChild>
        <Button variant="outline">Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Props

### AlertDialog
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | — | Controlled open state |
| onOpenChange | `(open: boolean) => void` | — | Callback when open state changes |
| defaultOpen | `boolean` | `false` | Default open state (uncontrolled) |
| children | `ReactNode` | required | Trigger and content sub-components |

### AlertDialogTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | — | When true, passes onPress to the child element |
| children | `ReactNode` | required | Trigger content |

### AlertDialogContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name for the content container |
| overlayClassName | `string` | — | Tailwind class name for the overlay |
| — | ModalProps | — | All standard React Native Modal props |

### AlertDialogHeader
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### AlertDialogFooter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### AlertDialogTitle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### AlertDialogDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### AlertDialogCancel / AlertDialogAction
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | — | When true, passes onPress to the child element |
| children | `ReactNode` | required | Button content |
| className | `string` | — | Tailwind class name |

## Examples

### Example 1: Controlled state
```tsx
import { useState } from 'react'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'

function ConfirmDialog() {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Action</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to proceed with this action?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Confirm</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

### Example 2: Using asChild for custom triggers
```tsx
import { Text, Pressable } from 'react-native'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogAction } from '@/components/ui/alert-dialog'

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Pressable className="active:opacity-70">
      <Text className="text-destructive underline">Delete</Text>
    </Pressable>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete Item</AlertDialogTitle>
      <AlertDialogDescription>
        This item will be permanently removed.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogAction asChild>
      <Pressable className="bg-destructive rounded-lg px-4 py-2">
        <Text className="text-destructive-foreground font-semibold">Delete</Text>
      </Pressable>
    </AlertDialogAction>
  </AlertDialogContent>
</AlertDialog>
```
