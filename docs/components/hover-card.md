# HoverCard

## Overview
A popover card that appears when the user taps a trigger element. Useful for showing previews, additional context, or quick information without navigating away.

## Import
```tsx
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'
```

## Usage
```tsx
import { Text, Image } from 'react-native'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'

function MyHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Text>Hover me</Text>
      </HoverCardTrigger>
      <HoverCardContent align="center" side="bottom">
        <Text>Content shown on tap</Text>
      </HoverCardContent>
    </HoverCard>
  )
}
```

## Props

### HoverCard
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | undefined | Controlled open state |
| onOpenChange | (open: boolean) => void | undefined | Callback when open state changes |
| defaultOpen | boolean | false | Initial open state when uncontrolled |
| children | React.ReactNode | - | Sub-components (HoverCardTrigger, HoverCardContent) |

### HoverCardTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | undefined | When true, passes the open handler to the child element |
| children | React.ReactNode | - | Trigger content |

### HoverCardContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | 'start' \| 'center' \| 'end' | 'center' | Horizontal alignment of the card |
| side | 'top' \| 'bottom' | 'bottom' | Vertical placement of the card |
| overlayClassName | string | undefined | Class name for the backdrop overlay |
| className | string | undefined | Class name for the content container |
| ...props | ViewProps | - | Additional React Native View props |

## Examples

### Example 1: User Profile Preview
```tsx
import { Text, Image } from 'react-native'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'

function ProfileHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Text style={{ fontWeight: 'bold' }}>@username</Text>
      </HoverCardTrigger>
      <HoverCardContent side="top" align="start">
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>John Doe</Text>
        <Text style={{ color: 'gray' }}>@username</Text>
        <Text>Full-stack developer. Open source enthusiast.</Text>
      </HoverCardContent>
    </HoverCard>
  )
}
```

### Example 2: Controlled HoverCard
```tsx
import { useState } from 'react'
import { Text } from 'react-native'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'

function ControlledHoverCard() {
  const [open, setOpen] = useState(false)

  return (
    <HoverCard open={open} onOpenChange={setOpen}>
      <HoverCardTrigger>
        <Text>Tap to toggle</Text>
      </HoverCardTrigger>
      <HoverCardContent align="end">
        <Text>This card is controlled externally.</Text>
      </HoverCardContent>
    </HoverCard>
  )
}
```
