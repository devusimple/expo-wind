# Textarea

## Overview
A multi-line text input component for collecting longer form text from users.

## Installation
```bash
bunx rn-shadcn add textarea
# or
npx rn-shadcn add textarea
# or
pnpm rn-shadcn add textarea
```

## Import
```tsx
import { Textarea } from '@/components/ui/textarea'
```

## Usage
```tsx
<Textarea
  value={text}
  onChangeText={setText}
  placeholder="Enter your message…"
  numberOfLines={4}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Textarea } from '@/components/ui/textarea'

<Textarea
  value={text}
  onChangeText={setText}
  placeholder="Enter your message…"
  numberOfLines={4}
/>
```
