# Alert

## Overview
Displays a brief, important message that requires the user's attention without interrupting their task. Supports multiple semantic variants.

## Import
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
```

## Usage
```tsx
<Alert variant="default">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>Something worth noting has happened.</AlertDescription>
</Alert>
```

## Props

### Alert
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'info' \| 'success' \| 'warning' \| 'destructive'` | `'default'` | Visual style of the alert |
| className | `string` | — | Tailwind class name |

### AlertTitle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |
| — | TextProps | — | All standard React Native Text props |

### AlertDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |
| — | TextProps | — | All standard React Native Text props |

## Examples

### Example 1: Variants
```tsx
<View className="gap-4">
  <Alert variant="info">
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>Your request has been processed.</AlertDescription>
  </Alert>
  <Alert variant="success">
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>Changes saved successfully.</AlertDescription>
  </Alert>
  <Alert variant="warning">
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription>Your session is about to expire.</AlertDescription>
  </Alert>
  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Something went wrong. Please try again.</AlertDescription>
  </Alert>
</View>
```

### Example 2: With custom icon
```tsx
import { View, Text } from 'react-native'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="info">
  <View className="flex-row items-start gap-3">
    <Text className="text-blue-800 dark:text-blue-200 text-lg">ℹ</Text>
    <View className="flex-1 gap-1">
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>Version 2.0 is ready to install.</AlertDescription>
    </View>
  </View>
</Alert>
```
