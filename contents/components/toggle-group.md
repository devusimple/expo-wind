# Toggle Group

## Overview
A group of toggle buttons where users can select single or multiple options.

## Installation
```bash
bunx rn-shadcn add toggle-group
# or
npx rn-shadcn add toggle-group
# or
pnpm rn-shadcn add toggle-group
```

## Import
```tsx
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
```

## Usage
```tsx
<ToggleGroup type="multiple" value={selected} onValueChange={setSelected}>
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
</ToggleGroup>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

<ToggleGroup type="multiple" value={selected} onValueChange={setSelected}>
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
</ToggleGroup>
```
