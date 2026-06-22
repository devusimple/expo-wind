# Alert

## Overview
Displays a brief, important message that requires the user's attention without interrupting their task. Supports multiple semantic variants.

## Installation
```bash
bunx rn-shadcn add alert
# or
npx rn-shadcn add alert
# or
pnpm rn-shadcn add alert
```

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
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="default">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>Something worth noting has happened.</AlertDescription>
</Alert>
```
