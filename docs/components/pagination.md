# Pagination

## Overview
A pagination component that renders a row of page numbers with previous/next buttons, ellipsis for large page ranges, and active page highlighting. Suitable for navigating through paginated data sets.

## Import
```tsx
import { Pagination } from '@/components/ui/pagination'
```

## Usage
```tsx
import { useState } from 'react'
import { Pagination } from '@/components/ui/pagination'

function MyPagination() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      current={page}
      total={20}
      onPageChange={setPage}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| current | number | - | The currently active page (required) |
| total | number | - | Total number of pages (required) |
| onPageChange | (page: number) => void | - | Callback when a page is selected |
| siblingCount | number | 1 | Number of sibling pages to show on each side of the current page |
| showPrevNext | boolean | true | Whether to show previous/next buttons |
| className | string | undefined | Class name for the pagination container |
| buttonClassName | string | undefined | Class name for all page buttons |
| activeButtonClassName | string | undefined | Class name for the active page button |
| disabledButtonClassName | string | undefined | Class name for disabled prev/next buttons |
| ...props | ViewProps | - | Additional React Native View props |

## Examples

### Example 1: Minimal Configuration
```tsx
import { useState } from 'react'
import { Pagination } from '@/components/ui/pagination'

function MinimalPagination() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      current={page}
      total={5}
      onPageChange={setPage}
    />
  )
}
```

### Example 2: Custom Styling
```tsx
import { useState } from 'react'
import { Pagination } from '@/components/ui/pagination'

function StyledPagination() {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      current={page}
      total={100}
      onPageChange={setPage}
      siblingCount={2}
      showPrevNext={true}
      buttonClassName="h-10 min-w-10 rounded-lg"
      activeButtonClassName="bg-blue-600"
      disabledButtonClassName="opacity-30"
    />
  )
}
```

### Example 3: With Page Info
```tsx
import { useState } from 'react'
import { View, Text } from 'react-native'
import { Pagination } from '@/components/ui/pagination'

function PaginationWithInfo() {
  const [page, setPage] = useState(1)
  const total = 50

  return (
    <View>
      <Text>Page {page} of {total}</Text>
      <Pagination
        current={page}
        total={total}
        onPageChange={setPage}
      />
    </View>
  )
}
```
