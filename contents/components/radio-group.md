# Radio Group

## Overview
A set of radio buttons where the user can select exactly one option from the available choices.

## Installation
```bash
bunx rn-shadcn add radio-group
# or
npx rn-shadcn add radio-group
# or
pnpm rn-shadcn add radio-group
```

## Import
```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
```

## Usage
```tsx
<RadioGroup value={selected} onValueChange={setSelected}>
  <RadioGroupItem value="option-1" label="Option 1" />
  <RadioGroupItem value="option-2" label="Option 2" />
</RadioGroup>
```

## Props

### Radio Group Item
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | `—` | — |
| label | `string` | `—` | — |
| labelClassName | `string` | `—` | — |
| disabled | `boolean` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

<RadioGroup value={selected} onValueChange={setSelected}>
  <RadioGroupItem value="option-1" label="Option 1" />
  <RadioGroupItem value="option-2" label="Option 2" />
</RadioGroup>
```
