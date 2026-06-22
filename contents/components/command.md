# Command

## Overview
A command palette component for keyboard-driven navigation and search within the app.

## Installation
```bash
bunx rn-shadcn add command
# or
npx rn-shadcn add command
# or
pnpm rn-shadcn add command
```

## Import
```tsx
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from '@/components/ui/command'
```

## Usage
```tsx
<Command>
  <CommandInput placeholder="Search…" />
  <CommandList>
    <CommandGroup heading="Actions">
      <CommandItem>Settings</CommandItem>
      <CommandItem>Profile</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

## Props

### Command Item
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | `—` | — |
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from '@/components/ui/command'

<Command>
  <CommandInput placeholder="Search…" />
  <CommandList>
    <CommandGroup heading="Actions">
      <CommandItem>Settings</CommandItem>
      <CommandItem>Profile</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```
