# Progress

## Overview
Progress displays the completion status of a task or process. Use it for loading states, file uploads, or any multi-step operation.

## Import
```tsx
import { Progress } from '@/components/ui/progress'
```

## Usage
```tsx
<Progress value={65} />
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | 0 | Current progress value |
| max | number | 100 | Maximum value |
| className | string | - | Class name for the track container |
| indicatorClassName | string | - | Class name for the filled indicator |

## Examples

### Example 1: Basic
```tsx
import { Progress } from '@/components/ui/progress'

export default function BasicProgress() {
  return <Progress value={45} />
}
```

### Example 2: Animated with State
```tsx
import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Progress } from '@/components/ui/progress'

export default function AnimatedProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 10, 100))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <View className="gap-2">
      <Progress value={progress} className="h-3" indicatorClassName="bg-green-500" />
      <Text className="text-sm text-muted-foreground text-center">{progress}%</Text>
    </View>
  )
}
```
