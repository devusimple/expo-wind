# Date Picker

## Overview
A date picker component that provides a native-like date selection experience.

## Installation
```bash
bunx rn-shadcn add date-picker
# or
npx rn-shadcn add date-picker
# or
pnpm rn-shadcn add date-picker
```

## Import
```tsx
import { DatePicker } from '@/components/ui/date-picker'
```

## Usage
```tsx
<DatePicker
  date={selectedDate}
  onDateChange={setSelectedDate}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { DatePicker } from '@/components/ui/date-picker'

<DatePicker
  date={selectedDate}
  onDateChange={setSelectedDate}
/>
```
