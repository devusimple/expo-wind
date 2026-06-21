# Drawer

## Overview
A slide-in panel component that displays content from the left or right side of the screen. Useful for navigation menus, filters, or secondary content that needs to overlay the main view.

## Import
```tsx
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@/components/ui/drawer'
```

## Usage
```tsx
import { useState } from 'react'
import { Text, View } from 'react-native'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@/components/ui/drawer'

function MyDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Text>Open Drawer</Text>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Navigate through options</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Text>Close</Text>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
```

## Props

### Drawer
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | undefined | Controlled open state |
| onOpenChange | (open: boolean) => void | undefined | Callback when open state changes |
| defaultOpen | boolean | false | Initial open state when uncontrolled |
| children | React.ReactNode | - | Sub-components (DrawerTrigger, DrawerContent) |

### DrawerTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | undefined | When true, passes the open handler to the child element instead of wrapping in a Pressable |
| children | React.ReactNode | - | Trigger content |

### DrawerContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | 'left' \| 'right' | 'left' | Which side the drawer slides in from |
| overlayClassName | string | undefined | Class name for the backdrop overlay |
| className | string | undefined | Class name for the drawer panel |
| ...props | ModalProps | - | Additional React Native Modal props |

### DrawerHeader
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the header container |
| ...props | ViewProps | - | Additional React Native View props |

### DrawerFooter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the footer container |
| ...props | ViewProps | - | Additional React Native View props |

### DrawerTitle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the title text |
| ...props | TextProps | - | Additional React Native Text props |

### DrawerDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the description text |
| ...props | TextProps | - | Additional React Native Text props |

### DrawerClose
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | undefined | When true, passes the close handler to the child element |
| children | React.ReactNode | - | Close button content |

## Examples

### Example 1: Right-side Drawer
```tsx
import { Text } from 'react-native'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerClose,
} from '@/components/ui/drawer'

function RightDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Text>Open Settings</Text>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerClose>
          <Text>Close</Text>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}
```

### Example 2: Controlled Drawer
```tsx
import { useState } from 'react'
import { Text, Button } from 'react-native'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

function ControlledDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Controlled Drawer</DrawerTitle>
        </DrawerHeader>
        <Text>This drawer is fully controlled.</Text>
      </DrawerContent>
    </Drawer>
  )
}
```
