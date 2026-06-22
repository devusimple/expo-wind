# Skeleton

## Overview
A loading placeholder that mimics the layout of content while data is being fetched.

## Installation
```bash
bunx rn-shadcn add skeleton
# or
npx rn-shadcn add skeleton
# or
pnpm rn-shadcn add skeleton
```

## Import
```tsx
import { Skeleton } from '@/components/ui/skeleton'
```

## Usage
```tsx
<View className="gap-3">
  <Skeleton className="h-12 w-12 rounded-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</View>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Skeleton } from '@/components/ui/skeleton'

<View className="gap-3">
  <Skeleton className="h-12 w-12 rounded-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</View>
```
