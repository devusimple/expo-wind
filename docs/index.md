---
title: Overview
description: A shadcn-style reusable component library for React Native built with Uniwind + Tailwind CSS v4.
---

# UI Components

A shadcn-style reusable component library for React Native built with Uniwind + Tailwind CSS v4.

## Installation

These components are part of the app source. Import directly from `@/components/ui/<component-name>`.

```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
```

## Prerequisites

- Expo SDK 56+, React Native 0.85.3+, Uniwind 1.9.0+
- `tailwind-merge`, `clsx`, `tailwind-variants` installed
- `src/global.css` with shadcn-themed CSS variables
- Metro configured with `withUniwindConfig` and `cssEntryFile`

## Component Docs

### Layout
- [Accordion](./components/accordion.md) — Expandable accordion sections
- [AspectRatio](./components/aspect-ratio.md) — Fixed-ratio container
- [Card](./components/card.md) — Content card with header/footer slots
- [Carousel](./components/carousel.md) — Scrollable carousel
- [Collapsible](./components/collapsible.md) — Expand/collapse section
- [Resizable](./components/resizable.md) — Drag-to-resize panes
- [ScrollArea](./components/scroll-area.md) — Scrollable content area
- [Separator](./components/separator.md) — Horizontal/vertical divider
- [Sheet](./components/sheet.md) — Slide-in panel
- [Tabs](./components/tabs.md) — Tabbed content panels

### Forms
- [Button](./components/button.md) — Pressable button with variants
- [Checkbox](./components/checkbox.md) — Checkbox input
- [Combobox](./components/combobox.md) — Searchable select
- [DatePicker](./components/date-picker.md) — Date selection
- [Form](./components/form.md) — Form with validation state
- [Input](./components/input.md) — Text input with label/error
- [InputOTP](./components/input-otp.md) — OTP digit input
- [Label](./components/label.md) — Form label
- [RadioGroup](./components/radio-group.md) — Radio button group
- [Select](./components/select.md) — Modal-based option picker
- [Slider](./components/slider.md) — Drag slider
- [Switch](./components/switch.md) — Toggle switch
- [Textarea](./components/textarea.md) — Multiline text input
- [Toggle](./components/toggle.md) — Toggle button
- [ToggleGroup](./components/toggle-group.md) — Toggle button group

### Overlays
- [AlertDialog](./components/alert-dialog.md) — Confirmation dialog
- [ContextMenu](./components/context-menu.md) — Long-press menu
- [Dialog](./components/dialog.md) — Modal dialog
- [Drawer](./components/drawer.md) — Slide-in drawer
- [HoverCard](./components/hover-card.md) — Tap-to-show card
- [Menubar](./components/menubar.md) — Menu bar
- [NavigationMenu](./components/navigation-menu.md) — Navigation with dropdown panels
- [Popover](./components/popover.md) — Toggle popover
- [Tooltip](./components/tooltip.md) — Tooltip label

### Navigation
- [Breadcrumb](./components/breadcrumb.md) — Navigation trail
- [Command](./components/command.md) — Command palette
- [DropdownMenu](./components/dropdown-menu.md) — Dropdown action menu
- [Pagination](./components/pagination.md) — Page navigation

### Data Display
- [Avatar](./components/avatar.md) — Initials avatar
- [Badge](./components/badge.md) — Status badge
- [Calendar](./components/calendar.md) — Month calendar grid
- [Chart](./components/chart.md) — Bar, Line, Pie, Area charts
- [DataTable](./components/data-table.md) — Sortable data table
- [Progress](./components/progress.md) — Progress bar
- [Skeleton](./components/skeleton.md) — Loading skeleton
- [Table](./components/table.md) — Semantic table layout

### Feedback
- [Alert](./components/alert.md) — Alert banner
- [Sonner](./components/sonner.md) — Global toast system
- [Toast](./components/toast.md) — Context-based toast

### Typography
- [Text](./components/text.md) — Styled Text component
- [Typography](./components/typography.md) — H1–H6, P, Blockquote, lists, and more

## Theming

All components use CSS variables from `src/global.css`:

| Variable | Usage |
|----------|-------|
| `--background` | Page background |
| `--foreground` | Default text |
| `--primary` / `--primary-foreground` | Primary actions |
| `--secondary` / `--secondary-foreground` | Secondary actions |
| `--muted` / `--muted-foreground` | Muted text/background |
| `--accent` / `--accent-foreground` | Accent elements |
| `--destructive` / `--destructive-foreground` | Destructive actions |
| `--border` | Borders |
| `--input` | Form input borders |
| `--ring` | Focus rings |
| `--radius` | Border radius scale |
| `--chart-1` through `--chart-5` | Chart color palette |

Light and dark mode values are defined in `@media (prefers-color-scheme: dark)`.

## Patterns

All components:
- Accept `className` merged via `cn()` (clsx + tailwind-merge)
- Use `tailwind-variants` for variant logic where applicable
- Reference CSS variables (not hardcoded colors)
- Use React Native core components (no `withUniwind` wrapping)
- Prefer composition over configuration
