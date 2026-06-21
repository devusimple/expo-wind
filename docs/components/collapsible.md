# Collapsible

## Overview
An expandable/collapsible content area with trigger and content sub-components. Use it for FAQ sections, expandable panels, or show-more patterns.

## Import
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
```

## Usage
```tsx
<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    <Text>Hidden content here</Text>
  </CollapsibleContent>
</Collapsible>
```

## Props

### Collapsible
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | undefined | Controlled open state |
| onOpenChange | (open: boolean) => void | undefined | Callback when open state changes |
| defaultOpen | boolean | false | Initial state when uncontrolled |

### CollapsibleTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | string \| React.ReactNode | - | Trigger content |
| textClassName | string | undefined | Tailwind class for text children |

### CollapsibleContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| (inherits ViewProps) | - | - | Content revealed when open |

## Examples

### Example 1: Basic
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Text, View } from 'react-native'

export default function FaqItem() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="px-4 py-3 bg-muted rounded-lg">
        What is this component?
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-3">
        <Text className="text-foreground">
          It's an expandable section that reveals content on press.
        </Text>
      </CollapsibleContent>
    </Collapsible>
  )
}
```

### Example 2: Controlled
```tsx
import { useState } from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Text, View, Button } from 'react-native'

export default function ControlledPanel() {
  const [open, setOpen] = useState(false)

  return (
    <View>
      <Button title={open ? 'Collapse' : 'Expand'} onPress={() => setOpen(!open)} />
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger>
          Advanced Settings (tap or use button)
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text className="text-foreground">Hidden settings panel.</Text>
        </CollapsibleContent>
      </Collapsible>
    </View>
  )
}
```
