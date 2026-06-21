# Popover

## Overview
Popover is a floating container that displays content related to a trigger element. Use it for secondary information, menus, or actions without navigating away from the current context.

## Import
```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover'
```

## Usage
```tsx
<Popover>
  <PopoverTrigger>
    Open Popover
  </PopoverTrigger>
  <PopoverContent>
    <PopoverClose>Close</PopoverClose>
    <Text>Popover content here</Text>
  </PopoverContent>
</Popover>
```

## Props

### Popover
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| defaultOpen | boolean | false | Default open state when uncontrolled |

### PopoverTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | - | Whether to merge props onto the child element |

### PopoverContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Class name for the content container |
| overlayClassName | string | - | Class name for the overlay pressable |
| align | 'start' \| 'center' \| 'end' | 'center' | Horizontal alignment of the popover |
| side | 'top' \| 'bottom' | 'bottom' | Vertical side the popover appears on |

### PopoverClose
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | - | Whether to merge props onto the child element |

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { Text } from 'react-native'
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover'

export default function BasicPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Text>Show Info</Text>
      </PopoverTrigger>
      <PopoverContent>
        <Text className="font-semibold mb-2">Account Info</Text>
        <Text className="text-sm text-muted-foreground mb-4">
          Your account is in good standing.
        </Text>
        <PopoverClose>
          <Text>Close</Text>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
```

### Example 2: Controlled with Custom Alignment
```tsx
import { useState } from 'react'
import { Text } from 'react-native'
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover'

export default function ControlledPopover() {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Text className="text-primary underline">Settings</Text>
      </PopoverTrigger>
      <PopoverContent align="start" side="top" className="w-64">
        <Text className="font-semibold mb-2">Quick Settings</Text>
        <Text className="text-sm text-muted-foreground">Toggle notifications</Text>
        <Text className="text-sm text-muted-foreground mt-1">Dark mode</Text>
        <PopoverClose>
          <Text className="text-primary mt-3">Close</Text>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
```
