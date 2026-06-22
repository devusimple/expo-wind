# Navigation Menu

## Overview
A navigation menu component that supports multi-level navigation with optional icons and descriptions.

## Installation
```bash
bunx rn-shadcn add navigation-menu
# or
npx rn-shadcn add navigation-menu
# or
pnpm rn-shadcn add navigation-menu
```

## Import
```tsx
import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
```

## Usage
```tsx
<NavigationMenu>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
</NavigationMenu>
```

## Props

### Navigation Menu Item
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | `—` | — |
| children | `React.ReactNode` | `—` | — |

### Navigation Menu Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |

### Navigation Menu Link
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |
| active | `boolean` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'

<NavigationMenu>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
</NavigationMenu>
```
