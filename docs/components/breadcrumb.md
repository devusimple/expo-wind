# Breadcrumb

## Overview
A navigation aid that shows the user's current location within a hierarchy. Typically used in multi-level navigation to allow users to track and return to previous pages.

## Import
```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'
```

## Usage
```tsx
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink onPress={() => {}}>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink onPress={() => {}}>Docs</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Components</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>
```

## Props

### Breadcrumb
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### BreadcrumbItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### BreadcrumbSeparator
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### BreadcrumbLink
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `string \| ReactNode` | — | Link label or custom content |
| textClassName | `string` | — | Tailwind class name for the text |
| onPress | `() => void` | — | Press handler |
| className | `string` | — | Tailwind class name |

### BreadcrumbPage
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |
| — | TextProps | — | All standard React Native Text props |

### BreadcrumbEllipsis
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

## Examples

### Example 1: Full breadcrumb trail
```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink onPress={() => router.push('/')}>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink onPress={() => router.push('/products')}>Products</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink onPress={() => router.push('/products/electronics')}>Electronics</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Headphones</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>
```

### Example 2: With collapsed items
```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink onPress={() => {}}>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbEllipsis />
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink onPress={() => {}}>Settings</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Profile</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>
```
