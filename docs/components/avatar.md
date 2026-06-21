# Avatar

## Overview
A circular component that displays a user's initials as a placeholder. Useful for user profiles, comment sections, and contact lists.

## Import
```tsx
import { Avatar } from '@/components/ui/avatar'
```

## Usage
```tsx
<Avatar initials="JD" size="md" />
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| initials | `string` | required | Text used to derive the displayed initials (first 2 characters, uppercased) |
| size | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar dimensions and text size |
| className | `string` | — | Tailwind class name |

## Examples

### Example 1: All sizes
```tsx
import { View, Text } from 'react-native'
import { Avatar } from '@/components/ui/avatar'

<View className="flex-row items-center gap-4">
  <Avatar initials="XS" size="sm" />
  <Avatar initials="MD" size="md" />
  <Avatar initials="LG" size="lg" />
  <Avatar initials="XL" size="xl" />
</View>
```

### Example 2: User list
```tsx
import { View, Text } from 'react-native'
import { Avatar } from '@/components/ui/avatar'

<View className="gap-3">
  <View className="flex-row items-center gap-3">
    <Avatar initials="John" size="md" />
    <View>
      <Text className="font-medium text-foreground">John Doe</Text>
      <Text className="text-sm text-muted-foreground">johndoe@example.com</Text>
    </View>
  </View>
  <View className="flex-row items-center gap-3">
    <Avatar initials="Jane" size="md" />
    <View>
      <Text className="font-medium text-foreground">Jane Smith</Text>
      <Text className="text-sm text-muted-foreground">jane@example.com</Text>
    </View>
  </View>
</View>
```
