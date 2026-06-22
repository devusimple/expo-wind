# Switch

## Overview
A switch toggle component for toggling between two states, with animated transitions.

## Installation
```bash
bunx rn-shadcn add switch
# or
npx rn-shadcn add switch
# or
pnpm rn-shadcn add switch
```

## Import
```tsx
import { Switch } from '@/components/ui/switch'
```

## Usage
```tsx
<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
/>
```

## Props

### Switch
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | `boolean` | `false` | — |
| onCheckedChange | `(checked: boolean) => void` | `—` | — |
| defaultChecked | `boolean` | `false` | — |
| trackClassName | `string` | `—` | — |
| thumbClassName | `string` | `—` | — |
| activeTrackClassName | `string` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Switch } from '@/components/ui/switch'

<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
/>
```
