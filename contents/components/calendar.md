# Calendar

## Overview
A date picker component that displays a monthly calendar grid for selecting dates.

## Installation
```bash
bunx rn-shadcn add calendar
# or
npx rn-shadcn add calendar
# or
pnpm rn-shadcn add calendar
```

## Import
```tsx
import { Calendar } from '@/components/ui/calendar'
```

## Usage
```tsx
<Calendar
  selected={date}
  onDateChange={setDate}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Calendar } from '@/components/ui/calendar'

<Calendar
  selected={date}
  onDateChange={setDate}
/>
```
