# Collapsible

## Overview
An interactive component that toggles the visibility of content sections. Ideal for FAQs, expandable panels, and progressive disclosure.

## Installation
```bash
bunx rn-shadcn add collapsible
# or
npx rn-shadcn add collapsible
# or
pnpm rn-shadcn add collapsible
```

## Import
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
```

## Usage
```tsx
<Collapsible>
  <CollapsibleTrigger>
    <Text>Toggle Content</Text>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <Text className="text-sm text-muted-foreground">Hidden content revealed.</Text>
  </CollapsibleContent>
</Collapsible>
```

## Props

### Collapsible Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `string  \| React.ReactNode` | `—` | — |
| textClassName | `string` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

<Collapsible>
  <CollapsibleTrigger>
    <Text>Toggle Content</Text>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <Text className="text-sm text-muted-foreground">Hidden content revealed.</Text>
  </CollapsibleContent>
</Collapsible>
```
