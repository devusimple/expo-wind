# Combobox

## Overview
A searchable dropdown select component. Displays a modal with a search input and a filtered list of options. Useful for selecting a single value from a large list.

## Import
```tsx
import { Combobox } from '@/components/ui/combobox'
```

## Usage
```tsx
const [value, setValue] = useState('')

<Combobox
  options={[
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
  ]}
  value={value}
  onValueChange={setValue}
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | ComboboxOption[] | required | Array of `{ label, value }` |
| value | string | undefined | Controlled selected value |
| onValueChange | (value: string) => void | undefined | Callback when selection changes |
| placeholder | string | 'Select...' | Placeholder text on the trigger |
| searchPlaceholder | string | 'Search...' | Placeholder text in the search input |
| emptyText | string | 'No results found.' | Text shown when no options match the search |
| disabled | boolean | undefined | Disables the combobox |
| inputClassName | string | undefined | Tailwind class for the trigger button |
| optionTextClassName | string | undefined | Tailwind class for option label text |
| optionClassName | string | undefined | Tailwind class for each option row |
| selectedOptionClassName | string | undefined | Tailwind class for the selected option |

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { Combobox } from '@/components/ui/combobox'

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

export default function FruitPicker() {
  const [fruit, setFruit] = useState('')

  return (
    <Combobox
      options={fruits}
      value={fruit}
      onValueChange={setFruit}
      placeholder="Choose a fruit"
    />
  )
}
```

### Example 2: With Search
```tsx
import { useState } from 'react'
import { Combobox } from '@/components/ui/combobox'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Brazil', value: 'br' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
]

export default function CountrySelect() {
  const [country, setCountry] = useState('')

  return (
    <Combobox
      options={countries}
      value={country}
      onValueChange={setCountry}
      placeholder="Select a country"
      searchPlaceholder="Search countries..."
      emptyText="No countries found"
    />
  )
}
```
