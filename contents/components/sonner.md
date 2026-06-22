# Sonner

## Overview
A lightweight toast notification system inspired by the Sonner library, providing success, error, and info messages.

## Installation
```bash
bunx rn-shadcn add sonner
# or
npx rn-shadcn add sonner
# or
pnpm rn-shadcn add sonner
```

## Import
```tsx
import { Toaster, toast } from '@/components/ui/sonner'
```

## Usage
```tsx
<Toaster />
<Button onPress={() => toast.success('Saved!')}>
  Show Toast
</Button>
```

## Props

### Sonner Provider
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `React.ReactNode` | `'top'` | — |
| position | `'top'  \| 'bottom'` | `'top'` | — |
| visibleToasts | `number` | `3` | — |
| duration | `number` | `4000` | — |

### Toast Item
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| toast | `ToastData` | `—` | — |
| onDismiss | `() => void` | `—` | — |
| position | `'top'  \| 'bottom'` | `'top'` | — |

## Examples

### Example 1: Default
```tsx
import { Toaster, toast } from '@/components/ui/sonner'

<Toaster />
<Button onPress={() => toast.success('Saved!')}>
  Show Toast
</Button>
```
