# Tooltip

## Overview
A floating label that provides additional context or information when the user long-presses an element.

## Installation
```bash
bunx rn-shadcn add tooltip
# or
npx rn-shadcn add tooltip
# or
pnpm rn-shadcn add tooltip
```

## Import
```tsx
import { Tooltip } from '@/components/ui/tooltip'
```

## Usage
```tsx
<Tooltip text="Tooltip content">
  <Button variant="outline">Hover me</Button>
</Tooltip>
```

## Props

### Tooltip
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | `false` | — |
| onOpenChange | `(open: boolean) => void` | `false` | — |
| defaultOpen | `boolean` | `false` | — |
| children | `React.ReactNode` | `false` | — |

### Tooltip Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `—` | — |
| children | `React.ReactNode` | `false` | — |

### Tooltip Content
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| overlayClassName | `string` | `—` | — |
| side | `'top'  \| 'bottom'` | `'bottom'` | — |
| className | `string` | `—` | — |
| children | `React.ReactNode` | `false` | — |

## Examples

### Example 1: Default
```tsx
import { Tooltip } from '@/components/ui/tooltip'

<Tooltip text="Tooltip content">
  <Button variant="outline">Hover me</Button>
</Tooltip>
```
