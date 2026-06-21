# Table

## Overview
A set of components for rendering data tables with horizontally scrollable content. Includes header, body, row, cell, and caption sub-components.

## Import
```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
```

## Usage
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props

All sub-components accept standard `ViewProps` or `TextProps` (for `TableHead`, `TableCell`, `TableCaption`) and forward `className` via the `cn` utility.

| Component | Extends | Description |
|-----------|---------|-------------|
| Table | ViewProps | Wraps content in a horizontal ScrollView |
| TableHeader | ViewProps | Header section with muted background |
| TableBody | ViewProps | Body section |
| TableRow | ViewProps | Flex-row container with bottom border |
| TableHead | TextProps | Uppercase muted text header cell |
| TableCell | TextProps | Regular text cell |
| TableCaption | TextProps | Small muted caption text below the table |

## Examples

### Example 1: Basic
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Stock</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Widget</TableCell>
      <TableCell>$9.99</TableCell>
      <TableCell>142</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Gadget</TableCell>
      <TableCell>$24.99</TableCell>
      <TableCell>89</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Example 2: With Caption
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>Engineer</TableCell>
    </TableRow>
  </TableBody>
  <TableCaption>A list of team members and their roles.</TableCaption>
</Table>
```
