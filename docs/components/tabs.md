# Tabs

## Overview
A set of tab navigation components that switch between content panels. Supports both controlled and uncontrolled usage.

## Import
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
```

## Usage
```tsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings content</TabsContent>
  <TabsContent value="password">Password settings content</TabsContent>
</Tabs>
```

## Props

### Tabs
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Controlled active tab value |
| onValueChange | `(value: string) => void` | - | Change handler |
| defaultValue | string | - | Initial active tab value |

### TabsTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | required | The value identifying this trigger |
| textClassName | string | - | Additional class names for the inner Text |
| children | `string \| React.ReactNode` | - | Trigger label |

### TabsContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | required | The value identifying this content panel |

## Examples

### Example 1: Basic
```tsx
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

function SettingsTabs() {
  const [tab, setTab] = useState('profile')

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Text>Profile settings go here.</Text>
      </TabsContent>
      <TabsContent value="notifications">
        <Text>Notification preferences.</Text>
      </TabsContent>
      <TabsContent value="security">
        <Text>Security settings.</Text>
      </TabsContent>
    </Tabs>
  )
}
```

### Example 2: Uncontrolled
```tsx
<Tabs defaultValue="feed">
  <TabsList>
    <TabsTrigger value="feed">Feed</TabsTrigger>
    <TabsTrigger value="likes">Likes</TabsTrigger>
  </TabsList>
  <TabsContent value="feed">
    <Text>Your feed content.</Text>
  </TabsContent>
  <TabsContent value="likes">
    <Text>Posts you've liked.</Text>
  </TabsContent>
</Tabs>
```
