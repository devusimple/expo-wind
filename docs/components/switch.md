# Switch

## Overview
A native toggle switch component with animated thumb and track transitions. Supports both controlled and uncontrolled usage.

## Import
```tsx
import { Switch } from '@/components/ui/switch'
```

## Usage
```tsx
<Switch defaultChecked={false} onCheckedChange={(checked) => console.log(checked)} />
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | - | Controlled checked state |
| onCheckedChange | `(checked: boolean) => void` | - | Change handler |
| defaultChecked | boolean | `false` | Initial checked state |
| disabled | boolean | - | Disables the switch |
| trackClassName | string | - | Additional track class names |
| thumbClassName | string | - | Additional thumb class names |
| activeTrackClassName | string | - | Additional track class names when active |
| className | string | - | Additional root class names |

All other `PressableProps` are forwarded to the root element.

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

function NotificationsScreen() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch checked={enabled} onCheckedChange={setEnabled} />
  )
}
```

### Example 2: With Variants
```tsx
<Switch defaultChecked disabled />
<Switch
  defaultChecked
  trackClassName="h-8 w-14"
  thumbClassName="h-7 w-7"
/>
```
