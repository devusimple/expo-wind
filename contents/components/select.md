# Select

## Overview
A select dropdown component that displays a modal list of options for the user to choose from.

## Installation
```bash
bunx rn-shadcn add select
# or
npx rn-shadcn add select
# or
pnpm rn-shadcn add select
```

## Import
```tsx
import { Select } from '@/components/ui/select'
```

## Usage
```tsx
<Select
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
  onValueChange={(v) => console.log(v)}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Select } from '@/components/ui/select'

<Select
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
  onValueChange={(v) => console.log(v)}
/>
```
