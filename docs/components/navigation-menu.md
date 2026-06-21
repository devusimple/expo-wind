# NavigationMenu

## Overview
A responsive navigation menu component with dropdown content, links, and an active indicator. Supports multiple items with expandable content panels, suitable for app navigation bars and website headers.

## Import
```tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
```

## Usage
```tsx
import { Text } from 'react-native'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

function MyNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Overview</NavigationMenuLink>
            <NavigationMenuLink>Features</NavigationMenuLink>
            <NavigationMenuLink>Pricing</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="docs">
          <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Getting Started</NavigationMenuLink>
            <NavigationMenuLink>API Reference</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  )
}
```

## Props

### NavigationMenu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the navigation container |
| ...props | ViewProps | - | Additional React Native View props |

### NavigationMenuItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Unique identifier for this menu item (required) |
| children | React.ReactNode | - | NavigationMenuTrigger and NavigationMenuContent |

### NavigationMenuTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | string | undefined | Class name for the trigger text |
| className | string | undefined | Class name for the trigger pressable |
| children | string \| React.ReactNode | - | Trigger content |
| ...props | PressableProps | - | Additional React Native Pressable props |

### NavigationMenuContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| overlayClassName | string | undefined | Class name for the backdrop overlay |
| className | string | undefined | Class name for the content container |
| ...props | ViewProps | - | Additional React Native View props |

### NavigationMenuLink
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | undefined | Marks the link as active (highlighted) |
| textClassName | string | undefined | Class name for the link text |
| className | string | undefined | Class name for the link pressable |
| children | string \| React.ReactNode | - | Link content |
| ...props | PressableProps | - | Additional React Native Pressable props |

### NavigationMenuIndicator
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the indicator bar |
| ...props | ViewProps | - | Additional React Native View props |

### NavigationMenuViewport
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the viewport container |
| ...props | ViewProps | - | Additional React Native View props |

### NavigationMenuList
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the list container |
| ...props | ViewProps | - | Additional React Native View props |

## Examples

### Example 1: With Active Links
```tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

function ActiveNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink active>Installation</NavigationMenuLink>
            <NavigationMenuLink>Quick Start</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Buttons</NavigationMenuLink>
            <NavigationMenuLink>Forms</NavigationMenuLink>
            <NavigationMenuLink>Navigation</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

### Example 2: With Indicator
```tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

function NavWithIndicator() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="home">
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Dashboard</NavigationMenuLink>
            <NavigationMenuLink>Activity</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="settings">
          <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Profile</NavigationMenuLink>
            <NavigationMenuLink>Account</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  )
}
```
