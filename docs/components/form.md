# Form

## Overview
A form management component that provides field state tracking, validation, and submission handling. Includes sub-components for labels, controls, descriptions, and error messages.

## Import
```tsx
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormContext,
} from '@/components/ui/form'
```

## Usage
```tsx
import { TextInput } from 'react-native'
import {
  Form,
  FormField,
  FormDescription,
} from '@/components/ui/form'

function MyForm() {
  const handleSubmit = (values: Record<string, any>) => {
    console.log('Form values:', values)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField name="email" label="Email">
        <TextInput placeholder="Enter your email" />
      </FormField>
      <FormField name="password" label="Password">
        <TextInput placeholder="Enter your password" secureTextEntry />
      </FormField>
    </Form>
  )
}
```

## Props

### Form
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onSubmit | (values: Record<string, any>) => void | undefined | Callback when the form is submitted with valid values |
| submitting | boolean | false | Controlled submitting state |
| className | string | undefined | Class name for the form container |
| ...props | ViewProps | - | Additional React Native View props |

### FormField
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Field identifier used for state tracking (required) |
| label | string | undefined | Label text displayed above the field |
| labelClassName | string | undefined | Class name for the label |
| messageClassName | string | undefined | Class name for the error message |
| className | string | undefined | Class name for the field container |
| children | React.ReactNode | - | Form control element |
| ...props | ViewProps | - | Additional React Native View props |

### FormLabel
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the label text |
| ...props | TextProps | - | Additional React Native Text props |

### FormControl
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Field name to associate with (required) |
| className | string | undefined | Class name for the control container |
| children | React.ReactNode | - | Input element (receives onBlur handler) |
| ...props | ViewProps | - | Additional React Native View props |

### FormDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the description text |
| ...props | TextProps | - | Additional React Native Text props |

### FormMessage
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Class name for the error message text |
| ...props | TextProps | - | Additional React Native Text props |

## Examples

### Example 1: With Validation
```tsx
import { useState } from 'react'
import { TextInput, Button, Text } from 'react-native'
import {
  Form,
  FormField,
  FormDescription,
} from '@/components/ui/form'

function ValidatedForm() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (values: Record<string, any>) => {
    setSubmitting(true)
    setTimeout(() => {
      console.log('Submitted:', values)
      setSubmitting(false)
    }, 1000)
  }

  return (
    <Form onSubmit={handleSubmit} submitting={submitting}>
      <FormField name="username" label="Username">
        <TextInput placeholder="Choose a username" />
      </FormField>
      <FormField name="bio" label="Bio">
        <TextInput placeholder="Tell us about yourself" multiline />
      </FormField>
      <FormDescription>
        Your bio will be visible on your public profile.
      </FormDescription>
      <Button title={submitting ? 'Submitting...' : 'Submit'} onPress={() => {}} />
    </Form>
  )
}
```

### Example 2: Programmatic Access with useFormContext
```tsx
import { TextInput, Button } from 'react-native'
import {
  Form,
  FormField,
  FormLabel,
  useFormContext,
} from '@/components/ui/form'

function SubmitButton() {
  const { onSubmit, submitting } = useFormContext()
  return (
    <Button
      title={submitting ? 'Saving...' : 'Save'}
      onPress={onSubmit}
      disabled={submitting}
    />
  )
}

function ProfileForm() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <FormField name="name" label="Full Name">
        <TextInput placeholder="John Doe" />
      </FormField>
      <FormField name="email" label="Email">
        <TextInput placeholder="john@example.com" keyboardType="email-address" />
      </FormField>
      <SubmitButton />
    </Form>
  )
}
```
