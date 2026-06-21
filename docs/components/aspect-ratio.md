# AspectRatio

## Overview
A container that maintains a consistent width-to-height ratio. Useful for displaying images, videos, or embeds at a fixed aspect ratio regardless of screen size.

## Import
```tsx
import { AspectRatio } from '@/components/ui/aspect-ratio'
```

## Usage
```tsx
<AspectRatio ratio={16 / 9}>
  <Image source={{ uri: 'https://example.com/image.jpg' }} className="w-full h-full" />
</AspectRatio>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ratio | `number` | `1` | Width-to-height aspect ratio (e.g. `16/9`) |
| className | `string` | — | Tailwind class name |
| style | `StyleProp<ViewStyle>` | — | Additional style overrides |
| — | ViewProps | — | All standard React Native View props |

## Examples

### Example 1: 16:9 video embed
```tsx
import { AspectRatio } from '@/components/ui/aspect-ratio'

<AspectRatio ratio={16 / 9}>
  <View className="flex-1 items-center justify-center bg-muted">
    <Text className="text-muted-foreground">Video Player</Text>
  </View>
</AspectRatio>
```

### Example 2: Square profile image
```tsx
import { Image } from 'react-native'
import { AspectRatio } from '@/components/ui/aspect-ratio'

<AspectRatio ratio={1} className="w-24">
  <Image
    source={{ uri: 'https://i.pravatar.cc/300' }}
    className="w-full h-full rounded-lg"
    resizeMode="cover"
  />
</AspectRatio>
```

### Example 3: 4:3 photo card
```tsx
import { Image } from 'react-native'
import { AspectRatio } from '@/components/ui/aspect-ratio'

<AspectRatio ratio={4 / 3} className="w-full rounded-xl overflow-hidden">
  <Image
    source={{ uri: 'https://picsum.photos/400/300' }}
    className="w-full h-full"
    resizeMode="cover"
  />
</AspectRatio>
```
