# ContextMenu

## Overview
A long-press context menu triggered by holding down on a target element. Displays a modal overlay with a list of actions. Supports items, labels, separators, and keyboard shortcuts.

## Import
```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuShortcut,
} from '@/components/ui/context-menu'
```

## Usage
```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <Text>Long press me</Text>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Action</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Another Action</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Props

### ContextMenu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | undefined | Controlled open state |
| onOpenChange | (open: boolean) => void | undefined | Callback when open state changes |
| defaultOpen | boolean | false | Initial state when uncontrolled |
| children | React.ReactNode | - | Trigger + Content children |

### ContextMenuTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | undefined | When true, merges long-press handler into the child element |
| children | React.ReactNode | - | Trigger content |

### ContextMenuContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| overlayClassName | string | undefined | Tailwind class for the modal overlay |
| (inherits ViewProps) | - | - | Additional view props |

### ContextMenuItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | undefined | Adds left padding for nested appearance |
| textClassName | string | undefined | Tailwind class for text children |
| children | string \| React.ReactNode | - | Item content |
| (inherits PressableProps) | - | - | Additional pressable props |

### ContextMenuSeparator
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits ViewProps) | - | - | Horizontal separator line |

### ContextMenuLabel
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | undefined | Adds left padding for nested appearance |
| (inherits TextProps) | - | - | Renders a section label |

### ContextMenuShortcut
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits TextProps) | - | - | Renders shortcut hint text |

## Examples

### Example 1: Basic
```tsx
import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
} from '@/components/ui/context-menu'
import { Text, View } from 'react-native'

export default function BasicContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <View className="h-24 w-40 items-center justify-center rounded-lg bg-muted">
          <Text className="text-muted-foreground">Long press here</Text>
        </View>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onPress={() => alert('Edit')}>Edit</ContextMenuItem>
        <ContextMenuItem onPress={() => alert('Duplicate')}>Duplicate</ContextMenuItem>
        <ContextMenuItem onPress={() => alert('Delete')} textClassName="text-destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

### Example 2: With Sections and Shortcuts
```tsx
import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent,
  ContextMenuItem, ContextMenuSeparator, ContextMenuLabel, ContextMenuShortcut,
} from '@/components/ui/context-menu'
import { Text, View } from 'react-native'

export default function RichContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Text className="text-lg text-foreground">File: report.pdf</Text>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem onPress={() => {}}>
          <Text>Open</Text>
          <ContextMenuShortcut>⏎</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset onPress={() => {}}>
          <Text>Open With</Text>
          <ContextMenuShortcut>⌘O</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuLabel>Share</ContextMenuLabel>
        <ContextMenuItem onPress={() => {}}>Copy Link</ContextMenuItem>
        <ContextMenuItem onPress={() => {}}>Send via Email</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```
