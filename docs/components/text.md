# Text

## Overview
A styled Text component with built-in typography variants built on `tailwind-variants`. Provides consistent heading, paragraph, lead, subtitle, caption, and code styles.

## Import
```tsx
import { Text } from '@/components/ui/text'
```

## Usage
```tsx
<Text variant="h1">Heading 1</Text>
<Text variant="p">A paragraph of content.</Text>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'p' \| 'lead' \| 'subtitle' \| 'caption' \| 'code'` | `'p'` | Typography variant |
| muted | boolean | - | Applies muted foreground color |
| className | string | - | Additional class names |

All other `TextProps` from React Native are forwarded.

## Examples

### Example 1: Basic
```tsx
import { Text } from '@/components/ui/text'

<Text variant="h1">Welcome</Text>
<Text variant="h2">Section Title</Text>
<Text variant="p">This is a standard paragraph with relaxed line height.</Text>
```

### Example 2: With Variants
```tsx
<Text variant="lead">This is lead text — slightly larger and muted.</Text>
<Text variant="subtitle">A subtitle used for metadata.</Text>
<Text variant="caption">Small caption text, great for footnotes.</Text>
<Text variant="code">npm install tailwind-variants</Text>
<Text variant="p" muted>Muted paragraph text.</Text>
```
