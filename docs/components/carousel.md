# Carousel

## Overview
A horizontal scrolling carousel component with pagination indicators, navigation controls, autoplay support, and optional looping. Use it to display a gallery of items like images, cards, or banners in a swipeable interface.

## Import
```tsx
import { Carousel } from '@/components/ui/carousel'
```

## Usage
```tsx
<Carousel
  data={items}
  renderItem={(item, index) => (
    <View className="items-center justify-center">
      <Text className="text-foreground">{item.title}</Text>
    </View>
  )}
/>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | any[] | required | Array of items to render |
| renderItem | (item: any, index: number) => React.ReactNode | required | Function to render each item |
| onIndexChange | (index: number) => void | undefined | Callback when the active slide changes |
| showIndicators | boolean | true | Whether to show pagination dots |
| showControls | boolean | true | Whether to show previous/next arrows |
| autoPlay | boolean | false | Enable automatic sliding |
| autoPlayInterval | number | 3000 | Interval (ms) between autoplay slides |
| indicatorClassName | string | undefined | Tailwind class for inactive indicators |
| activeIndicatorClassName | string | undefined | Tailwind class for the active indicator |
| controlClassName | string | undefined | Tailwind class for prev/next buttons |
| itemWidth | number | undefined | Fixed item width; defaults to container width |
| loop | boolean | false | Enable infinite looping |

## Examples

### Example 1: Basic
```tsx
import { Carousel } from '@/components/ui/carousel'
import { View, Text, Image } from 'react-native'

const images = [
  { id: '1', src: 'https://example.com/image1.jpg' },
  { id: '2', src: 'https://example.com/image2.jpg' },
  { id: '3', src: 'https://example.com/image3.jpg' },
]

export default function Gallery() {
  return (
    <Carousel
      data={images}
      renderItem={(item) => (
        <Image
          source={{ uri: item.src }}
          className="h-48 w-full rounded-lg"
          resizeMode="cover"
        />
      )}
      className="h-52"
    />
  )
}
```

### Example 2: With Autoplay and Loop
```tsx
import { Carousel } from '@/components/ui/carousel'
import { View, Text } from 'react-native'

const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4']

export default function AutoplayCarousel() {
  return (
    <Carousel
      data={slides}
      renderItem={(item) => (
        <View className="h-40 items-center justify-center rounded-xl bg-primary">
          <Text className="text-lg font-bold text-primary-foreground">{item}</Text>
        </View>
      )}
      autoPlay
      autoPlayInterval={4000}
      loop
      showIndicators
      showControls
      onIndexChange={(index) => console.log('Active slide:', index)}
    />
  )
}
```
