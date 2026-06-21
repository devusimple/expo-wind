# Menubar

## Overview
A horizontal menu bar that displays dropdown menus when trigger items are pressed. Suitable for desktop-style navigation, toolbar menus, and multi-level navigation structures.

## Import
```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
} from '@/components/ui/menubar'
```

## Usage
```tsx
import { Text } from 'react-native'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from '@/components/ui/menubar'

function MyMenubar() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

## Props

### Menubar
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the menubar container |
| ...props | ViewProps | - | Additional React Native View props |

### MenubarMenu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Unique identifier for this menu (required) |
| children | React.ReactNode | - | MenubarTrigger and MenubarContent |

### MenubarTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | string | undefined | Class name for the trigger text |
| className | string | undefined | Class name for the trigger pressable |
| children | string \| React.ReactNode | - | Trigger content |
| ...props | PressableProps | - | Additional React Native Pressable props |

### MenubarContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | 'start' \| 'center' \| 'end' | 'start' | Horizontal alignment of the dropdown |
| overlayClassName | string | undefined | Class name for the backdrop overlay |
| className | string | undefined | Class name for the content container |
| ...props | ViewProps | - | Additional React Native View props |

### MenubarItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | undefined | Adds left padding for indented items |
| textClassName | string | undefined | Class name for the item text |
| className | string | undefined | Class name for the item pressable |
| children | string \| React.ReactNode | - | Item content |
| ...props | PressableProps | - | Additional React Native Pressable props |

### MenubarSeparator
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the separator |
| ...props | ViewProps | - | Additional React Native View props |

### MenubarLabel
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | undefined | Adds left padding for indented labels |
| className | string | undefined | Class name for the label text |
| ...props | TextProps | - | Additional React Native Text props |

### MenubarShortcut
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the shortcut text |
| ...props | TextProps | - | Additional React Native Text props |

## Examples

### Example 1: With Labels and Shortcuts
```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
} from '@/components/ui/menubar'

function FullMenubar() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>
            New Window
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent align="end">
          <MenubarLabel inset>Zoom</MenubarLabel>
          <MenubarItem inset>Zoom In</MenubarItem>
          <MenubarItem inset>Zoom Out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

### Example 2: With Custom Items
```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@/components/ui/menubar'

function IconMenubar() {
  return (
    <Menubar>
      <MenubarMenu value="actions">
        <MenubarTrigger>Actions</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onPress={() => console.log('Share')}>
            Share
          </MenubarItem>
          <MenubarItem onPress={() => console.log('Export')}>
            Export as PDF
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```
