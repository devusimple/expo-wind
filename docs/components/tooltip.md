# Tooltip

## Overview
A tooltip component that shows contextual information in a modal overlay. Uses a context-based pattern with `Tooltip`, `TooltipTrigger`, and `TooltipContent` sub-components.

## Import
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
```

## Usage
```tsx
<Tooltip>
  <TooltipTrigger>
    <Text>Hover me</Text>
  </TooltipTrigger>
  <TooltipContent side="top">This is a tooltip</TooltipContent>
</Tooltip>
```

## Props

### Tooltip
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| onOpenChange | `(open: boolean) => void` | - | Open state change handler |
| defaultOpen | boolean | `false` | Initial open state |

### TooltipTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | - | If true, clones the child element and injects `onPress` |
| children | React.ReactNode | required | Trigger element |

### TooltipContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | `'top' \| 'bottom'` | `'bottom'` | Tooltip position relative to trigger |
| overlayClassName | string | - | Class names for the overlay Pressable |
| className | string | - | Class names for the tooltip content View |
| children | React.ReactNode | required | Tooltip content (wrapped in Text) |

## Examples

### Example 1: Basic
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

<Tooltip>
  <TooltipTrigger>
    <Text>ℹ️ More info</Text>
  </TooltipTrigger>
  <TooltipContent side="bottom">This explains the feature.</TooltipContent>
</Tooltip>
```

### Example 2: With asChild
```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Pressable>
      <Text>Custom trigger</Text>
    </Pressable>
  </TooltipTrigger>
  <TooltipContent side="top">Tooltip content here</TooltipContent>
</Tooltip>
```
