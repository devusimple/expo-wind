# ToggleGroup

## Overview
A group of toggle buttons that manage single or multiple selection state. Wraps individual `Toggle` items and provides context for coordinated behavior.

## Import
```tsx
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
```

## Usage
```tsx
<ToggleGroup type="single" defaultValue={['center']}>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

## Props

### ToggleGroup
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'single' \| 'multiple'` | `'single'` | Selection mode |
| value | `string[]` | - | Controlled selected values |
| onValueChange | `(value: string[]) => void` | - | Change handler |
| defaultValue | `string[]` | `[]` | Initial selected values |

### ToggleGroupItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | required | Item value |
| variant | `'default' \| 'outline'` | `'default'` | Toggle variant |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Toggle size |

Accepts all `ToggleProps` except `pressed` and `onPressedChange` (managed internally).

## Examples

### Example 1: Single Select
```tsx
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

function AlignmentPicker() {
  return (
    <ToggleGroup type="single" defaultValue={['center']}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  )
}
```

### Example 2: Multi Select
```tsx
import { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

function FilterBar() {
  const [filters, setFilters] = useState<string[]>([])

  return (
    <ToggleGroup type="multiple" value={filters} onValueChange={setFilters}>
      <ToggleGroupItem value="new">New</ToggleGroupItem>
      <ToggleGroupItem value="popular">Popular</ToggleGroupItem>
      <ToggleGroupItem value="sale">On Sale</ToggleGroupItem>
    </ToggleGroup>
  )
}
```
