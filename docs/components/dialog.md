# Dialog

## Overview
A modal dialog component with trigger, content, header, footer, title, description, and close sub-components. Use it for confirmations, alerts, forms, and any overlay content.

## Import
```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
```

## Usage
```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose>Close</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Props

### Dialog
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | undefined | Controlled open state |
| onOpenChange | (open: boolean) => void | undefined | Callback when open state changes |
| defaultOpen | boolean | false | Initial state when uncontrolled |
| children | React.ReactNode | - | Trigger + Content children |

### DialogTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | undefined | Merges press handler into the child element |
| children | React.ReactNode | - | Trigger content |

### DialogContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| overlayClassName | string | undefined | Tailwind class for the modal overlay |
| (inherits ModalProps) | - | - | Additional Modal props |

### DialogHeader
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits ViewProps) | - | - | Header container |

### DialogFooter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits ViewProps) | - | - | Footer container |

### DialogTitle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits TextProps) | - | - | Dialog title text |

### DialogDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits TextProps) | - | - | Dialog description text |

### DialogClose
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | undefined | Merges close handler into the child element |
| children | React.ReactNode | - | Close button content |

## Examples

### Example 1: Basic
```tsx
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose,
} from '@/components/ui/dialog'
import { Text, Pressable } from 'react-native'

export default function ConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Pressable className="rounded-lg bg-primary px-4 py-2">
          <Text className="text-primary-foreground font-medium">Delete Account</Text>
        </Pressable>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Your account will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Pressable className="rounded-lg bg-muted px-4 py-2">
              <Text className="text-foreground">Cancel</Text>
            </Pressable>
          </DialogClose>
          <Pressable className="rounded-lg bg-destructive px-4 py-2" onPress={() => alert('Deleted')}>
            <Text className="text-destructive-foreground font-medium">Delete</Text>
          </Pressable>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Example 2: Controlled with Form
```tsx
import { useState } from 'react'
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose,
} from '@/components/ui/dialog'
import { Text, TextInput, Pressable, View } from 'react-native'

export default function EditProfileDialog() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  const handleSave = () => {
    console.log('Save:', name)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Pressable className="rounded-lg bg-primary px-4 py-2">
          <Text className="text-primary-foreground font-medium">Edit Profile</Text>
        </Pressable>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Update your display name below.</DialogDescription>
        </DialogHeader>

        <TextInput
          className="h-10 rounded-lg border border-input bg-background px-3 text-foreground"
          placeholder="Your name"
          value={name}
          onChangeText={setName}
        />

        <DialogFooter>
          <DialogClose>
            <Pressable className="rounded-lg bg-muted px-4 py-2">
              <Text className="text-foreground">Cancel</Text>
            </Pressable>
          </DialogClose>
          <Pressable className="rounded-lg bg-primary px-4 py-2" onPress={handleSave}>
            <Text className="text-primary-foreground font-medium">Save</Text>
          </Pressable>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```
