# Data Table

## Overview
A table component with sorting, filtering, and pagination capabilities for displaying structured data.

## Installation
```bash
bunx rn-shadcn add data-table
# or
npx rn-shadcn add data-table
# or
pnpm rn-shadcn add data-table
```

## Import
```tsx
import { DataTable } from '@/components/ui/data-table'
```

## Usage
```tsx
<DataTable
  columns={[
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
  ]}
  data={[
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ]}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { DataTable } from '@/components/ui/data-table'

<DataTable
  columns={[
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
  ]}
  data={[
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ]}
/>
```
