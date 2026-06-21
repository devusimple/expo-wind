# Accordion

## Overview
A vertically stacked set of interactive headings that reveal or hide associated content sections. Supports single and multiple open items with controlled or uncontrolled state.

## Import
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
```

## Usage
```tsx
<Accordion type="single" defaultValue={['item-1']}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section One</AccordionTrigger>
    <AccordionContent>
      <Text className="text-sm text-muted-foreground">Content for section one.</Text>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section Two</AccordionTrigger>
    <AccordionContent>
      <Text className="text-sm text-muted-foreground">Content for section two.</Text>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props

### Accordion
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'single' \| 'multiple'` | `'single'` | Allow only one or multiple items to be open |
| value | `string[]` | — | Controlled open values |
| onValueChange | `(value: string[]) => void` | — | Callback when open values change |
| defaultValue | `string[]` | — | Default open values (uncontrolled) |
| className | `string` | — | Tailwind class name for the root container |

### AccordionItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | required | Unique identifier for the item |
| className | `string` | — | Tailwind class name |

### AccordionTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `string \| ReactNode` | — | Trigger label or custom content |
| textClassName | `string` | — | Tailwind class name for the label text |
| className | `string` | — | Tailwind class name for the pressable |

### AccordionContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

## Examples

### Example 1: Single mode (default)
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

<Accordion type="single" defaultValue={['faq-1']}>
  <AccordionItem value="faq-1">
    <AccordionTrigger>What is this?</AccordionTrigger>
    <AccordionContent>
      <Text className="text-sm text-muted-foreground">This is an accordion component.</Text>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionTrigger>How do I use it?</AccordionTrigger>
    <AccordionContent>
      <Text className="text-sm text-muted-foreground">Import and nest items inside the Accordion.</Text>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Example 2: Multiple mode with controlled state
```tsx
import { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

function MyAccordion() {
  const [value, setValue] = useState<string[]>(['item-1'])

  return (
    <Accordion type="multiple" value={value} onValueChange={setValue}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>
          <Text className="text-sm text-muted-foreground">First content</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionContent>
          <Text className="text-sm text-muted-foreground">Second content</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```
