# DropdownMenu

## Overview
A menu component that displays a list of options in an overlay when triggered. Useful for action menus, context menus, and selection lists.

## Import
```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu'
```

## Usage
```tsx
import { Text } from 'react-native'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'

function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Text>Options</Text>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Props

### DropdownMenu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | undefined | Controlled open state |
| onOpenChange | (open: boolean) => void | undefined | Callback when open state changes |
| defaultOpen | boolean | false | Initial open state when uncontrolled |
| children | React.ReactNode | - | Sub-components (DropdownMenuTrigger, DropdownMenuContent) |

### DropdownMenuTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | undefined | When true, passes the open handler to the child element |
| children | React.ReactNode | - | Trigger content |

### DropdownMenuContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | 'start' \| 'center' \| 'end' | 'center' | Horizontal alignment of the dropdown |
| overlayClassName | string | undefined | Class name for the backdrop overlay |
| className | string | undefined | Class name for the content container |
| ...props | ViewProps | - | Additional React Native View props |

### DropdownMenuItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | undefined | Adds left padding for indented items |
| textClassName | string | undefined | Class name for the item text |
| className | string | undefined | Class name for the item pressable |
| children | string \| React.ReactNode | - | Item content |
| ...props | PressableProps | - | Additional React Native Pressable props |

### DropdownMenuSeparator
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the separator |
| ...props | ViewProps | - | Additional React Native View props |

### DropdownMenuLabel
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | undefined | Adds left padding for indented labels |
| className | string | undefined | Class name for the label text |
| ...props | TextProps | - | Additional React Native Text props |

### DropdownMenuShortcut
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the shortcut text |
| ...props | TextProps | - | Additional React Native Text props |

## Examples

### Example 1: With Shortcuts and Icons
```tsx
import { Text } from 'react-native'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu'

function ShortcutMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Text>File</Text>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Text>Undo</Text>
          <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Text>Redo</Text>
          <DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Text>Cut</Text>
          <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Example 2: Controlled with Inset Items
```tsx
import { useState } from 'react'
import { Text } from 'react-native'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'

function ControlledDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Text onPress={() => setOpen(true)}>Tap me</Text>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel inset>Account</DropdownMenuLabel>
        <DropdownMenuItem inset>Profile</DropdownMenuItem>
        <DropdownMenuItem inset>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```
