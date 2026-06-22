# Toast

## Overview
A notification component that displays brief, temporary messages at the edge of the screen.

## Installation
```bash
bunx rn-shadcn add toast
# or
npx rn-shadcn add toast
# or
pnpm rn-shadcn add toast
```

## Import
```tsx
import { Toast, ToastTitle, ToastDescription } from '@/components/ui/toast'
```

## Usage
```tsx
<Toast visible={show} onDismiss={() => setShow(false)}>
  <ToastTitle>Success</ToastTitle>
  <ToastDescription>Changes saved.</ToastDescription>
</Toast>
```

## Props

### Toast Provider
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `React.ReactNode` | `0` | — |
| duration | `number` | `5000` | — |

### Toast Item
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| toast | `ToastData` | `—` | — |
| onDismiss | `() => void` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Toast, ToastTitle, ToastDescription } from '@/components/ui/toast'

<Toast visible={show} onDismiss={() => setShow(false)}>
  <ToastTitle>Success</ToastTitle>
  <ToastDescription>Changes saved.</ToastDescription>
</Toast>
```
