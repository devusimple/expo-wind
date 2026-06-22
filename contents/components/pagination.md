# Pagination

## Overview
A pagination component that helps users navigate through pages of content with previous, next, and page number controls.

## Installation
```bash
bunx rn-shadcn add pagination
# or
npx rn-shadcn add pagination
# or
pnpm rn-shadcn add pagination
```

## Import
```tsx
import { Pagination, PaginationPrevious, PaginationItem, PaginationNext } from '@/components/ui/pagination'
```

## Usage
```tsx
<Pagination>
  <PaginationPrevious onPress={() => {}} />
  <PaginationItem page={1} active />
  <PaginationItem page={2} />
  <PaginationItem page={3} />
  <PaginationNext onPress={() => {}} />
</Pagination>
```

## Props

### Page Button
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | `boolean` | `—` | — |
| children | `string  \| number  \| React.ReactNode` | `—` | — |
| activeClassName | `string` | `—` | — |
| disabledClassName | `string` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Pagination, PaginationPrevious, PaginationItem, PaginationNext } from '@/components/ui/pagination'

<Pagination>
  <PaginationPrevious onPress={() => {}} />
  <PaginationItem page={1} active />
  <PaginationItem page={2} />
  <PaginationItem page={3} />
  <PaginationNext onPress={() => {}} />
</Pagination>
```
