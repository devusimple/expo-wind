# Context Menu

## Overview
A popup menu that appears on long-press, providing contextual actions for the selected element.

## Installation
```bash
bunx rn-shadcn add context-menu
# or
npx rn-shadcn add context-menu
# or
pnpm rn-shadcn add context-menu
```

## Import
```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from '@/components/ui/context-menu'
```

## Usage
```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <Text className="p-4 bg-card rounded-lg">Long press for options</Text>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Props

### Context Menu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | — |
| onOpenChange | `(open: boolean) => void` | `false` | — |
| defaultOpen | `boolean` | `false` | — |
| children | `React.ReactNode` | `false` | — |

### Context Menu Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

### Context Menu Item
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `false` | — |
| inset | `boolean` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from '@/components/ui/context-menu'

<ContextMenu>
  <ContextMenuTrigger>
    <Text className="p-4 bg-card rounded-lg">Long press for options</Text>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```
