# DataTable

## Overview
A typed data table component built on `FlatList` with sortable column headers, custom cell rendering, and row press handling. Use it to display structured lists of data with sortable columns.

## Import
```tsx
import { DataTable } from '@/components/ui/data-table'
```

## Usage
```tsx
<DataTable
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
  ]}
  data={[{ name: 'Alice', email: 'alice@example.com' }]}
  keyExtractor={(item) => item.email}
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | Column\<T\>[] | required | Column definitions with key, header, optional accessor/cell/sortable/width |
| data | T[] | required | Array of data items |
| keyExtractor | (item: T, index: number) => string | required | Unique key for each row |
| onRowPress | (item: T) => void | undefined | Callback when a row is pressed |
| sortable | boolean | false | Enable column sorting globally |
| headerClassName | string | undefined | Tailwind class for the header row |
| rowClassName | string | undefined | Tailwind class for each data row |
| headerTextClassName | string | undefined | Tailwind class for header text |
| cellTextClassName | string | undefined | Tailwind class for cell text |
| FlatListProps | Partial\<FlatListProps\<T\>\> | undefined | Passthrough props for FlatList |

### Column\<T\>
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| key | string | required | Unique column identifier |
| header | string | required | Display text in the column header |
| accessor | (item: T) => string | undefined | Function to extract text value from an item |
| cell | (item: T) => React.ReactNode | undefined | Custom render function for the cell |
| sortable | boolean | undefined | Allow sorting on this column |
| width | number | undefined | Fixed column width |
| headerClassName | string | undefined | Tailwind class for this column's header |
| cellClassName | string | undefined | Tailwind class for this column's cells |

## Examples

### Example 1: Basic
```tsx
import { DataTable } from '@/components/ui/data-table'

type User = {
  id: string
  name: string
  email: string
  role: string
}

const users: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
]

export default function UserTable() {
  return (
    <DataTable
      columns={[
        { key: 'name', header: 'Name', sortable: true },
        { key: 'email', header: 'Email' },
        { key: 'role', header: 'Role', sortable: true },
      ]}
      data={users}
      keyExtractor={(item) => item.id}
      sortable
    />
  )
}
```

### Example 2: Custom Cell Rendering
```tsx
import { DataTable, Column } from '@/components/ui/data-table'
import { View, Text, Pressable } from 'react-native'

type Product = {
  sku: string
  name: string
  price: number
  inStock: boolean
}

const products: Product[] = [
  { sku: 'A001', name: 'Widget', price: 9.99, inStock: true },
  { sku: 'A002', name: 'Gadget', price: 24.99, inStock: false },
]

export default function ProductTable() {
  const columns: Column<Product>[] = [
    { key: 'sku', header: 'SKU' },
    { key: 'name', header: 'Name', sortable: true },
    {
      key: 'price',
      header: 'Price',
      cell: (item) => (
        <Text className="font-mono text-foreground">${item.price.toFixed(2)}</Text>
      ),
    },
    {
      key: 'inStock',
      header: 'Status',
      cell: (item) => (
        <Text className={item.inStock ? 'text-green-500' : 'text-red-500'}>
          {item.inStock ? 'In Stock' : 'Out of Stock'}
        </Text>
      ),
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={products}
      keyExtractor={(item) => item.sku}
      sortable
      onRowPress={(item) => console.log('Pressed:', item.sku)}
    />
  )
}
```
