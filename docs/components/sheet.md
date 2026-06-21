# Sheet

## Overview
Sheet is a modal panel that slides in from the edge of the screen. Use it for settings panels, detail views, or confirmation dialogs that require more space than a popover.

## Import
```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet'
```

## Usage
```tsx
<Sheet>
  <SheetTrigger>Open Sheet</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description text</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose>Close</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Props

### Sheet
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| defaultOpen | boolean | false | Default open state when uncontrolled |

### SheetTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | - | Whether to merge props onto the child element |

### SheetContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | 'bottom' \| 'top' \| 'left' \| 'right' | 'bottom' | Edge the sheet slides from |
| overlayClassName | string | - | Class name for the backdrop |
| className | string | - | Class name for the content panel |
| All ModalProps | - | - | All standard React Native Modal props are supported |

### SheetHeader
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Class name for the header container |

### SheetFooter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Class name for the footer container |

### SheetTitle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Class name for the title text |
| All TextProps | - | - | All standard React Native Text props are supported |

### SheetDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Class name for the description text |
| All TextProps | - | - | All standard React Native Text props are supported |

### SheetClose
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | - | Whether to merge props onto the child element |

## Examples

### Example 1: Basic Bottom Sheet
```tsx
import { View, Text } from 'react-native'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet'

export default function BasicSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Text className="text-primary">View Details</Text>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Order Details</SheetTitle>
          <SheetDescription>
            Your order #1234 has been shipped and is on its way.
          </SheetDescription>
        </SheetHeader>
        <View className="gap-2 py-4">
          <Text className="text-sm">Status: In transit</Text>
          <Text className="text-sm">Estimated delivery: Jun 25</Text>
        </View>
        <SheetClose>
          <Text className="text-primary text-center">Close</Text>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
```

### Example 2: Controlled Right Sheet
```tsx
import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet'

export default function ControlledSheet() {
  const [open, setOpen] = useState(false)

  return (
    <View>
      <Pressable
        className="h-10 px-4 bg-primary rounded-lg items-center justify-center"
        onPress={() => setOpen(true)}
      >
        <Text className="text-primary-foreground font-medium">Open Settings</Text>
      </Pressable>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
          <View className="gap-4 py-4">
            <Text className="text-sm">Notifications</Text>
            <Text className="text-sm">Privacy</Text>
            <Text className="text-sm">Appearance</Text>
            <Text className="text-sm">About</Text>
          </View>
          <SheetFooter>
            <SheetClose asChild>
              <Pressable className="h-10 px-4 bg-muted rounded-lg items-center justify-center">
                <Text className="font-medium">Close</Text>
              </Pressable>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </View>
  )
}
```
