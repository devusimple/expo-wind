# Calendar

## Overview
A date picker calendar component that displays a grid of days for a given month. Supports selecting a date, navigating months, and restricting date ranges.

## Import
```tsx
import { Calendar } from '@/components/ui/calendar'
```

## Usage
```tsx
<Calendar
  selected={selectedDate}
  onDateChange={(date) => setSelectedDate(date)}
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| selected | `Date` | — | Currently selected date |
| onDateChange | `(date: Date) => void` | — | Callback when a date is selected |
| minDate | `Date` | — | Minimum selectable date |
| maxDate | `Date` | — | Maximum selectable date |
| month | `number` | — | Controlled month (0-indexed) |
| year | `number` | — | Controlled year |
| onMonthChange | `(month: number, year: number) => void` | — | Callback when month/year navigation occurs |
| className | `string` | — | Tailwind class name |

## Examples

### Example 1: Basic date picker
```tsx
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

function DatePicker() {
  const [date, setDate] = useState(new Date())

  return (
    <Calendar
      selected={date}
      onDateChange={setDate}
    />
  )
}
```

### Example 2: With date range constraints
```tsx
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

function ConstrainedPicker() {
  const [date, setDate] = useState(new Date())
  const minDate = new Date(2025, 0, 1)
  const maxDate = new Date(2027, 11, 31)

  return (
    <Calendar
      selected={date}
      onDateChange={setDate}
      minDate={minDate}
      maxDate={maxDate}
    />
  )
}
```

### Example 3: Controlled month navigation
```tsx
import { useState } from 'react'
import { View, Text } from 'react-native'
import { Calendar } from '@/components/ui/calendar'

function ControlledCalendar() {
  const [date, setDate] = useState(new Date())
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <View className="gap-2">
      <Text className="text-sm text-muted-foreground">
        Showing: {month + 1}/{year}
      </Text>
      <Calendar
        selected={date}
        onDateChange={setDate}
        month={month}
        year={year}
        onMonthChange={(m, y) => {
          setMonth(m)
          setYear(y)
        }}
      />
    </View>
  )
}
```
