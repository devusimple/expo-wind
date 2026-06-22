# Form

## Overview
A form component with built-in validation, field grouping, and error handling for collecting user input.

## Installation
```bash
bunx rn-shadcn add form
# or
npx rn-shadcn add form
# or
pnpm rn-shadcn add form
```

## Import
```tsx
import { Form } from '@/components/ui/form'
```

## Usage
```tsx
<Form schema={validationSchema}>
  <FormField
    name="email"
    label="Email"
    render={({ field }) => (
      <Input {...field} placeholder="Enter email" />
    )}
  />
  <Button type="submit">Submit</Button>
</Form>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Form } from '@/components/ui/form'

<Form schema={validationSchema}>
  <FormField
    name="email"
    label="Email"
    render={({ field }) => (
      <Input {...field} placeholder="Enter email" />
    )}
  />
  <Button type="submit">Submit</Button>
</Form>
```
