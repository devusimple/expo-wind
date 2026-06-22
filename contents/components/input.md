# Input

## Overview
A text input component with optional label, error message, and custom styling for collecting user text input.

## Installation
```bash
bunx rn-shadcn add input
# or
npx rn-shadcn add input
# or
pnpm rn-shadcn add input
```

## Import
```tsx
import { Input } from '@/components/ui/input'
```

## Usage
```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Input } from '@/components/ui/input'

<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
/>
```
