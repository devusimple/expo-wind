# Checkbox

## Overview
A checkbox input component that allows users to select or deselect an option.

## Installation
```bash
bunx rn-shadcn add checkbox
# or
npx rn-shadcn add checkbox
# or
pnpm rn-shadcn add checkbox
```

## Import
```tsx
import { Checkbox } from '@/components/ui/checkbox'
```

## Usage
```tsx
<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms"
/>
```

## Props

### Checkbox
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | `boolean` | `false` | — |
| onCheckedChange | `(checked: boolean) => void` | `—` | — |
| defaultChecked | `boolean` | `false` | — |
| disabled | `boolean` | `—` | — |
| label | `string` | `—` | — |
| labelClassName | `string` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Checkbox } from '@/components/ui/checkbox'

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms"
/>
```
