# Card

## Overview
A versatile container for grouping related content and actions. Often used for dashboards, media summaries, and settings panels.

## Import
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
```

## Usage
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Main content area.</Text>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Props

### Card
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### CardHeader
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### CardTitle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |
| — | TextProps | — | All standard React Native Text props |

### CardDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |
| — | TextProps | — | All standard React Native Text props |

### CardContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

### CardFooter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | — | Tailwind class name |

## Examples

### Example 1: Product card
```tsx
import { View, Text, Image } from 'react-native'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

<Card>
  <CardContent className="p-0">
    <Image
      source={{ uri: 'https://picsum.photos/400/200' }}
      className="w-full h-40 rounded-t-xl"
      resizeMode="cover"
    />
  </CardContent>
  <CardHeader>
    <CardTitle>Wireless Headphones</CardTitle>
    <CardDescription>Premium noise-cancelling headphones with 30-hour battery life.</CardDescription>
  </CardHeader>
  <CardFooter>
    <Text className="text-lg font-bold text-foreground flex-1">$79.99</Text>
    <Button size="sm">Buy Now</Button>
  </CardFooter>
</Card>
```

### Example 2: Settings card
```tsx
import { View, Text } from 'react-native'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Notification Preferences</CardTitle>
    <CardDescription>Choose what notifications you'd like to receive.</CardDescription>
  </CardHeader>
  <CardContent className="gap-4">
    <View className="flex-row items-center justify-between">
      <Text className="text-foreground">Push Notifications</Text>
      <Switch />
    </View>
    <View className="flex-row items-center justify-between">
      <Text className="text-foreground">Email Notifications</Text>
      <Switch />
    </View>
  </CardContent>
</Card>
```
