---
title: Migration Guide
description: Migrating from shadcn/ui (web), NativeWind v2/v3, or StyleSheet to expo-wind.
---

# Migration Guide

## From shadcn/react (web) to React Native

If you're porting shadcn/ui components from a web React project, here are the key differences:

### Replacements

| Web Pattern | React Native Replacement |
|-------------|--------------------------|
| `<div>` | `<View>` |
| `<span>` / `<p>` | `<Text>` |
| `<button>` | `<Pressable>` or `<TouchableOpacity>` |
| `<a>` / `<Link>` | React Navigation `<Link>` or `Pressable` |
| `onClick` | `onPress` |
| `className="flex"` | `className="flex flex-row"` (default is column) |
| `hover:` variants | Use state-based styling (no CSS hover on mobile) |
| `h-10 w-full p-2` | Same Tailwind classes work |
| `aria-*` | Not applicable (accessibility via `accessibilityLabel`, `accessibilityRole`) |
| `data-[state=open]` | Managed via local state or context |
| HTML forms | Custom form state management |

### Animation Differences

| Web | React Native |
|-----|-------------|
| CSS transitions | `LayoutAnimation` or `react-native-reanimated` |
| `@keyframes` | Reanimated `withTiming`, `withSpring` |
| CSS `transform` | Reanimated `useAnimatedStyle` |
| `<motion.div>` (framer) | `react-native-reanimated` `Animated.View` |

### Portal / Overlay Differences

Web portals use `createPortal` to render at the document root. React Native has no DOM, so overlays use:

- **Modal** — built-in React Native component for full-screen overlays
- **Absolute positioning** — for overlay panels that stay within a parent

```tsx
// Web: createPortal(<Dialog />, document.body)
// React Native:
import { Modal } from 'react-native'

<Modal transparent visible={open} onRequestClose={onClose}>
  <View className="flex-1 items-center justify-center bg-black/50">
    <View className="bg-background rounded-lg p-6">
      {children}
    </View>
  </View>
</Modal>
```

## From NativeWind v2 / v3

### Key Changes with Tailwind CSS v4

1. **No `tailwind.config.js` needed** — configuration is done via `@import` and `@theme` in CSS
2. **`@apply` is still supported** but `@import 'tailwindcss'` replaces `@tailwind base/components/utilities`
3. **Theme configuration** moves from `tailwind.config.js` to `@theme` blocks in CSS

### Metro Configuration

```js
// Before (NativeWind)
const { withNativeWind } = require('nativewind/metro')

// After (Uniwind)
const { withUniwindConfig } = require('uniwind/metro')
```

### Import Changes

```tsx
// Before
import { cn } from '@/lib/utils'  // custom cn implementation

// After — same utility name, but ensure it uses tailwind-merge v3
import { cn } from '@/lib/cn'
```

The `cn.ts` utility is the same pattern, but ensure `tailwind-merge` is updated to v3 for Tailwind CSS v4 compatibility.

## From Styled Components / StyleSheet

If you're migrating from inline `StyleSheet.create()`:

1. Replace `style={styles.container}` with `className="..."` 
2. Replace color constants with CSS variable classes
3. Remove StyleSheet.create blocks
4. Convert `padding: 16` to `p-4`, `fontSize: 14` to `text-sm`, etc.

### Example

```tsx
// Before
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: '600', color: '#000' },
})

// After
<View className="flex-1 bg-background p-4">
  <Text className="text-lg font-semibold text-foreground">Title</Text>
</View>
```

## Upgrading Dependencies

### From tailwind-merge v2 to v3

```bash
npm install tailwind-merge@3.0.2
```

No API changes needed in `cn.ts`, but v3 includes improved conflict resolution.

### From tailwindcss v3 to v4

```bash
npm install tailwindcss@4
```

Remove `tailwind.config.js` — configure via CSS:

```css
/* tailwind.config.js is no longer needed */
@import 'tailwindcss';
```

### From NativeWind to Uniwind

```bash
npm uninstall nativewind
npm install uniwind@1.9.0
```

Update `metro.config.js`:

```js
const { withUniwindConfig } = require('uniwind/metro')
```

## File Renames

When reusing component source from a web shadcn project:

| Web file | React Native file |
|----------|------------------|
| `button.tsx` | Same |
| `dialog.tsx` | Same |
| `dropdown-menu.tsx` | Same |
| `hover-card.tsx` | Same (uses Modal) |
| `tooltip.tsx` | Same (uses Modal) |
| `sonner.tsx` | Same |
| `toast.tsx` | Same |
