# Breadcrumb

## Overview
A navigation pattern that helps users understand where they are in the app hierarchy and navigate between levels.

## Installation
```bash
bunx rn-shadcn add breadcrumb
# or
npx rn-shadcn add breadcrumb
# or
pnpm rn-shadcn add breadcrumb
```

## Import
```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'
```

## Usage
```tsx
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink>Components</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>
```

## Props

### Breadcrumb Link
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbEllipsis } from '@/components/ui/breadcrumb'

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink>Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink>Components</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>
```
