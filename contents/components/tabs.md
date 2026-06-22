# Tabs

## Overview
A tab navigation component that organizes content into switchable panels, each associated with a tab header.

## Installation
```bash
bunx rn-shadcn add tabs
# or
npx rn-shadcn add tabs
# or
pnpm rn-shadcn add tabs
```

## Import
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
```

## Usage
```tsx
<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab-1">
    <Text>Content for tab 1</Text>
  </TabsContent>
  <TabsContent value="tab-2">
    <Text>Content for tab 2</Text>
  </TabsContent>
</Tabs>
```

## Props

### Tabs Trigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `string` | `—` | — |
| textClassName | `string` | `—` | — |
| children | `string  \| React.ReactNode` | `—` | — |

## Examples

### Example 1: Default
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab-1">
    <Text>Content for tab 1</Text>
  </TabsContent>
  <TabsContent value="tab-2">
    <Text>Content for tab 2</Text>
  </TabsContent>
</Tabs>
```
