# DatePicker

## Overview
A date picker component that opens a calendar modal for selecting a single date. Built on top of the `Calendar` component. Supports min/max date constraints.

## Import
```tsx
import { DatePicker } from '@/components/ui/date-picker'
```

## Usage
```tsx
const [date, setDate] = useState<Date>()

<DatePicker
  value={date}
  onValueChange={setDate}
  placeholder="Select a date"
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | Date | undefined | Controlled selected date |
| onValueChange | (date: Date) => void | undefined | Callback when a date is selected |
| placeholder | string | 'Pick a date' | Placeholder text when no date is selected |
| disabled | boolean | undefined | Disables the date picker trigger |
| minDate | Date | undefined | Minimum selectable date |
| maxDate | Date | undefined | Maximum selectable date |
| triggerClassName | string | undefined | Tailwind class for the trigger button |
| placeholderClassName | string | undefined | Tailwind class for the placeholder text |

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { DatePicker } from '@/components/ui/date-picker'
import { Text, View } from 'react-native'

export default function BasicDatePicker() {
  const [date, setDate] = useState<Date>()

  return (
    <View className="gap-2">
      <DatePicker
        value={date}
        onValueChange={setDate}
        placeholder="Pick a date"
      />
      {date && (
        <Text className="text-sm text-muted-foreground">
          Selected: {date.toDateString()}
        </Text>
      )}
    </View>
  )
}
```

### Example 2: With Date Constraints
```tsx
import { useState } from 'react'
import { DatePicker } from '@/components/ui/date-picker'

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <>
      <DatePicker
        value={startDate}
        onValueChange={setStartDate}
        placeholder="Start date"
        maxDate={endDate}
      />
      <DatePicker
        value={endDate}
        onValueChange={setEndDate}
        placeholder="End date"
        minDate={startDate}
      />
    </>
  )
}
```
