# Resizable

## Overview
A panel component with draggable dividers that allows users to resize panels within a layout.

## Installation
```bash
bunx rn-shadcn add resizable
# or
npx rn-shadcn add resizable
# or
pnpm rn-shadcn add resizable
```

## Import
```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
```

## Usage
```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    <Text>Left Panel</Text>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <Text>Right Panel</Text>
  </ResizablePanel>
</ResizablePanelGroup>
```

## Props
See the component source for full prop definitions.

## Examples

### Example 1: Default
```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    <Text>Left Panel</Text>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <Text>Right Panel</Text>
  </ResizablePanel>
</ResizablePanelGroup>
```
