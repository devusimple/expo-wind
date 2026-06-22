# Slider

## Overview
A range slider component that allows users to select a value within a specified range by sliding a thumb along a track.

## Installation
```bash
bunx rn-shadcn add slider
# or
npx rn-shadcn add slider
# or
pnpm rn-shadcn add slider
```

## Import
```tsx
import { Slider } from '@/components/ui/slider'
```

## Usage
```tsx
<Slider
  value={50}
  onValueChange={setValue}
  min={0}
  max={100}
  step={1}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Slider } from '@/components/ui/slider'

<Slider
  value={50}
  onValueChange={setValue}
  min={0}
  max={100}
  step={1}
/>
```
