# Chart

## Overview
A charting component suite that provides `BarChart`, `LineChart`, `PieChart`, and `AreaChart` for visualizing data in React Native. Also includes `Chart`, `ChartTitle`, and `ChartLegend` utility components. Requires `react-native-svg` as a peer dependency.

## Import
```tsx
import {
  Chart,
  ChartTitle,
  ChartLegend,
  BarChart,
  LineChart,
  PieChart,
  AreaChart,
} from '@/components/ui/chart'
```

## Usage
```tsx
<BarChart
  data={[
    { label: 'Jan', value: 50 },
    { label: 'Feb', value: 80 },
  ]}
  width={320}
  height={200}
/>
```

## Props

### Chart / ChartTitle / ChartLegend
| Component | Prop | Type | Default | Description |
|-----------|------|------|---------|-------------|
| Chart | config | ChartConfig | undefined | Configuration object for the chart container |
| ChartTitle | (inherits TextProps) | - | - | Renders a styled chart title |
| ChartLegend | data | { label: string; color: string }[] | required | Legend items with label and color |
| ChartLegend | (inherits ViewProps) | - | - | Renders a legend row |

### BarChart
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | DataPoint[] | required | Array of `{ label, value, color? }` |
| width | number | 300 | SVG width |
| height | number | 200 | SVG height |
| showGrid | boolean | true | Show horizontal grid lines |
| showValues | boolean | false | Show value labels above bars |
| barClassName | string | undefined | Tailwind class for bars |
| chartConfig | ChartConfig | undefined | Additional chart config |

### LineChart
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | DataPoint[] | required | Array of `{ label, value, color? }` |
| width | number | 300 | SVG width |
| height | number | 200 | SVG height |
| showGrid | boolean | true | Show horizontal grid lines |
| showDots | boolean | true | Show dots at data points |
| showValues | boolean | false | Show value labels above dots |
| lineWidth | number | 2 | Stroke width of the line |
| dotRadius | number | 3 | Radius of data point dots |
| chartConfig | ChartConfig | undefined | Additional chart config |

### PieChart
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | DataPoint[] | required | Array of `{ label, value, color? }` |
| size | number | 200 | Width and height of the SVG |
| innerRadius | number | 0 | Inner radius (0 = pie, >0 = donut) |
| showValues | boolean | false | Show percentage labels on segments |
| donut | boolean | false | Shorthand to render as donut chart |
| chartConfig | ChartConfig | undefined | Additional chart config |

### AreaChart
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | DataPoint[] | required | Array of `{ label, value, color? }` |
| width | number | 300 | SVG width |
| height | number | 200 | SVG height |
| showGrid | boolean | true | Show horizontal grid lines |
| showDots | boolean | true | Show dots at data points |
| showValues | boolean | false | Show value labels above dots |
| lineWidth | number | 2 | Stroke width of the line |
| dotRadius | number | 3 | Radius of data point dots |
| fillOpacity | number | 0.2 | Opacity of the area fill |
| chartConfig | ChartConfig | undefined | Additional chart config |

### ChartConfig
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number | undefined | Chart width override |
| height | number | undefined | Chart height override |
| padding | number | undefined | Chart padding override |
| color | string | undefined | Primary color override |
| showGrid | boolean | undefined | Show grid lines (per-chart default) |
| showLabels | boolean | undefined | Show axis labels |
| animated | boolean | undefined | Enable animations |

### DataPoint
| Prop | Type | Description |
|------|------|-------------|
| label | string | Label displayed on the x-axis |
| value | number | Numeric value for the data point |
| color | string (optional) | Custom color for the bar/line/segment |

## Examples

### Example 1: Bar Chart
```tsx
import { BarChart, ChartTitle } from '@/components/ui/chart'
import { View } from 'react-native'

const data = [
  { label: 'Mon', value: 120 },
  { label: 'Tue', value: 90 },
  { label: 'Wed', value: 150 },
  { label: 'Thu', value: 80 },
  { label: 'Fri', value: 200 },
]

export default function RevenueChart() {
  return (
    <View>
      <ChartTitle>Weekly Revenue</ChartTitle>
      <BarChart
        data={data}
        width={320}
        height={200}
        showValues
      />
    </View>
  )
}
```

### Example 2: Donut Chart with Legend
```tsx
import { PieChart, ChartLegend } from '@/components/ui/chart'
import { View } from 'react-native'

const data = [
  { label: 'Direct', value: 45, color: '#3b82f6' },
  { label: 'Organic', value: 30, color: '#22c55e' },
  { label: 'Referral', value: 15, color: '#eab308' },
  { label: 'Social', value: 10, color: '#ec4899' },
]

export default function TrafficSources() {
  return (
    <View className="items-center">
      <PieChart
        data={data}
        size={180}
        donut
        showValues
      />
      <ChartLegend data={data} />
    </View>
  )
}
```
