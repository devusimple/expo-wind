# Command

## Overview
A command palette / searchable list component with grouped items, filtering, and keyboard-friendly interactions. Useful for command menus, searchable lists, and quick actions.

## Import
```tsx
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
```

## Usage
```tsx
<Command onItemSelect={(value) => console.log(value)}>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandItem value="settings">Settings</CommandItem>
    <CommandItem value="profile">Profile</CommandItem>
  </CommandList>
</Command>
```

## Props

### Command
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onItemSelect | (value: string) => void | undefined | Callback when an item is selected |
| inputClassName | string | undefined | Tailwind class for the search input |
| (inherits ViewProps) | - | - | Additional view props |

### CommandInput
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | 'Search...' | Placeholder text in the search input |
| inputClassName | string | undefined | Tailwind class for the TextInput |

### CommandList
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits ViewProps) | - | - | Scrollable list container |

### CommandEmpty
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits ViewProps) | - | - | Shown when no items match the search |

### CommandGroup
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| heading | string | undefined | Optional group heading label |

### CommandItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | undefined | Value passed to onItemSelect on press |
| textClassName | string | undefined | Tailwind class for text children |
| children | string \| React.ReactNode | - | Item content |
| (inherits PressableProps) | - | - | Additional pressable props |

### CommandSeparator
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits ViewProps) | - | - | Horizontal separator line |

### CommandShortcut
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits TextProps) | - | - | Renders shortcut hint text |

## Examples

### Example 1: Basic
```tsx
import { Command, CommandInput, CommandList, CommandItem } from '@/components/ui/command'
import { View } from 'react-native'

export default function SearchList() {
  return (
    <Command>
      <CommandInput placeholder="Search actions..." />
      <CommandList>
        <CommandItem value="new-file">New File</CommandItem>
        <CommandItem value="open-file">Open File</CommandItem>
        <CommandItem value="save">Save</CommandItem>
        <CommandItem value="export">Export</CommandItem>
      </CommandList>
    </Command>
  )
}
```

### Example 2: Grouped with Shortcuts
```tsx
import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
} from '@/components/ui/command'
import { View, Text } from 'react-native'

export default function CommandPalette() {
  return (
    <Command onItemSelect={(value) => console.log('Selected:', value)}>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>
          <Text>No commands found.</Text>
        </CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem value="go-to-file">
            <Text>Go to File</Text>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem value="go-to-symbol">
            <Text>Go to Symbol</Text>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem value="format-document">
            <Text>Format Document</Text>
            <CommandShortcut>⇧⌥F</CommandShortcut>
          </CommandItem>
          <CommandItem value="run-task">
            <Text>Run Task</Text>
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
```
