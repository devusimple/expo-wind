# Chart

## Overview
A set of chart components for data visualization including bar, line, pie, and area charts using SVG rendering.

## Installation
```bash
bunx rn-shadcn add chart
# or
npx rn-shadcn add chart
# or
pnpm rn-shadcn add chart
```

## Import
```tsx
import { Chart, ChartTitle, ChartLegend, BarChart, LineChart, PieChart, AreaChart } from '@/components/ui/chart'
```

## Usage
```tsx
<BarChart
  data={[
    { label: 'Jan', value: 12 },
    { label: 'Feb', value: 19 },
    { label: 'Mar', value: 15 },
  ]}
/>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Chart, ChartTitle, ChartLegend, BarChart, LineChart, PieChart, AreaChart } from '@/components/ui/chart'

<BarChart
  data={[
    { label: 'Jan', value: 12 },
    { label: 'Feb', value: 19 },
    { label: 'Mar', value: 15 },
  ]}
/>
```
