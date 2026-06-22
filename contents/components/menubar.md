# Menubar

## Overview
A horizontal menu bar that provides access to hierarchical commands and options.

## Installation
```bash
bunx rn-shadcn add menubar
# or
npx rn-shadcn add menubar
# or
pnpm rn-shadcn add menubar
```

## Import
```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@/components/ui/menubar'
```

## Usage
```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## Props

### Menubar Menu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | `—` | — |
| children | `React.ReactNode` | `—` | — |

### Menubar Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |

### Menubar Item
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |
| inset | `boolean` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@/components/ui/menubar'

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```
