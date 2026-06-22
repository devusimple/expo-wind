# Combobox

## Overview
An input with a searchable dropdown list of suggestions, allowing users to filter and select from a list of options.

## Installation
```bash
bunx rn-shadcn add combobox
# or
npx rn-shadcn add combobox
# or
pnpm rn-shadcn add combobox
```

## Import
```tsx
import { Combobox } from '@/components/ui/combobox'
```

## Usage
```tsx
<Combobox
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]}
  placeholder="Select fruit…"
  onValueChange={(v) => console.log(v)}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Combobox } from '@/components/ui/combobox'

<Combobox
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]}
  placeholder="Select fruit…"
  onValueChange={(v) => console.log(v)}
/>
```
