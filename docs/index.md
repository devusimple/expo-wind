---
title: Overview
description: A shadcn-style CLI for React Native UI components built with Uniwind + Tailwind CSS v4.
---

# rn-shadcn

A shadcn-style CLI for React Native UI components. Install pre-built components directly into your project — no wrapper library, full ownership.

```bash
npx rn-shadcn init
npx rn-shadcn add button
npx rn-shadcn add card modal
```

## Prerequisites

- Node.js 20+
- Expo SDK 56+ / React Native 0.85.3+
- Uniwind 1.9.0+
- Tailwind CSS v4

## Getting Started

```bash
npx rn-shadcn init
```

This creates:
- `components.json` — configuration file with registry URL and components directory
- `src/lib/cn.ts` — utility for merging Tailwind CSS classes
- Installs `clsx` and `tailwind-merge`

## Commands

### `add`

Install one or more components:

```bash
npx rn-shadcn add button
npx rn-shadcn add card modal
npx rn-shadcn add accordion dialog sheet
```

Automatically installs required npm dependencies.

### `list`

Show all available components:

```bash
npx rn-shadcn list
```

### `info`

View component metadata:

```bash
npx rn-shadcn info button
```

## How It Works

Components are downloaded from a remote GitHub Pages registry and copied into your project's `src/components/ui/` directory. You own the files — modify them freely.

## Component Docs

### Layout
- [Accordion](./components/accordion.md) — Expandable accordion sections
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
- [DropdownMenu](./components/dropdown-menu.md) — Dropdown action menu
- [HoverCard](./components/hover-card.md) — Tap-to-show card
- [Menubar](./components/menubar.md) — Menu bar
- [NavigationMenu](./components/navigation-menu.md) — Navigation with dropdown panels
- [Popover](./components/popover.md) — Toggle popover
- [Tooltip](./components/tooltip.md) — Tooltip label

### Data
- [Avatar](./components/avatar.md) — Initials avatar
- [Badge](./components/badge.md) — Status badge
- [Breadcrumb](./components/breadcrumb.md) — Navigation trail
- [Calendar](./components/calendar.md) — Month calendar grid
- [Chart](./components/chart.md) — Bar, Line, Pie, Area charts
- [DataTable](./components/data-table.md) — Sortable data table
- [Pagination](./components/pagination.md) — Page navigation
- [Table](./components/table.md) — Semantic table layout

### Feedback
- [Alert](./components/alert.md) — Alert banner
- [Progress](./components/progress.md) — Progress bar
- [Skeleton](./components/skeleton.md) — Loading skeleton
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

## License

MIT
