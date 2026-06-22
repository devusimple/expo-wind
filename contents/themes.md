---
title: Themes
description: Color themes available in rn-shadcn, customization guide, and creating your own theme.
---

# Themes

## Overview

When you run `rn-shadcn init`, you're prompted to select a color theme. The CLI writes a `global.css` file with the chosen theme's CSS variables using Tailwind CSS v4's `@layer theme` block.

## Preset Themes

| Theme | Description | Primary Color |
|-------|-------------|---------------|
| Neutral | Gray-based neutral palette | Dark slate gray |
| Blue | Blue primary accent | Vivid blue |
| Amber | Warm amber/orange primary | Golden amber |
| Cyan | Cool cyan primary | Sky cyan |
| Emerald | Green-emerald primary | Fresh emerald |
| Fuchsia | Vibrant fuchsia/pink primary | Bright fuchsia |
| Green | Green primary | Leaf green |
| Default (Minimal) | Minimal theme with 5 core variables | Blue (minimal) |

## Theme Selection

Themes are selected interactively during `init`:

```bash
npx rn-shadcn init
```

If you already initialized and want to change your theme, update `components.json` and regenerate `global.css`:

1. Edit `components.json` and change the `theme` field
2. Replace your `global.css` with the desired theme's CSS (available in the [registry themes](https://github.com/devusimple/rn-shadcn-registry/tree/main/themes))

## Theme Structure

Each theme generates a `global.css` with this structure:

```css
@import 'tailwindcss';

@layer theme {
  @variant light {
    /* Light mode color definitions */
    --color-background: oklch(...);
    --color-foreground: oklch(...);
    /* ... all color variables */
  }

  @variant dark {
    /* Dark mode color definitions */
    --color-background: oklch(...);
    --color-foreground: oklch(...);
    /* ... all color variables */
  }
}
```

### CSS Variable Reference

| Variable | Light (Neutral) | Dark (Neutral) | Purpose |
|----------|-----------------|----------------|---------|
| `--color-background` | `oklch(1 0 0)` | `oklch(0.145 0 0)` | Page background |
| `--color-foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Default text |
| `--color-card` | `oklch(1 0 0)` | `oklch(0.205 0 0)` | Card surface |
| `--color-card-foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Card text |
| `--color-popover` | `oklch(1 0 0)` | `oklch(0.205 0 0)` | Popover surface |
| `--color-popover-foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Popover text |
| `--color-primary` | `oklch(0.205 0 0)` | `oklch(0.922 0 0)` | Primary brand color |
| `--color-primary-foreground` | `oklch(0.985 0 0)` | `oklch(0.205 0 0)` | Text on primary |
| `--color-secondary` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Secondary surface |
| `--color-secondary-foreground` | `oklch(0.205 0 0)` | `oklch(0.985 0 0)` | Text on secondary |
| `--color-muted` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Muted background |
| `--color-muted-foreground` | `oklch(0.556 0 0)` | `oklch(0.708 0 0)` | Muted text |
| `--color-accent` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Accent color |
| `--color-accent-foreground` | `oklch(0.205 0 0)` | `oklch(0.985 0 0)` | Text on accent |
| `--color-destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Destructive actions |
| `--color-destructive-foreground` | `oklch(0.985 0 0)` | `oklch(0.985 0 0)` | Text on destructive |
| `--color-border` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` | Borders |
| `--color-input` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 15%)` | Input borders |
| `--color-ring` | `oklch(0.708 0 0)` | `oklch(0.556 0 0)` | Focus rings |
| `--color-chart-1` through `--color-chart-5` | various | various | Chart palette |
| `--color-sidebar` | `oklch(0.985 0 0)` | `oklch(0.205 0 0)` | Sidebar background |
| `--color-sidebar-foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Sidebar text |
| `--color-sidebar-primary` | `oklch(0.205 0 0)` | `oklch(0.488 0.243 264.376)` | Sidebar primary |
| `--color-sidebar-primary-foreground` | `oklch(0.985 0 0)` | `oklch(0.985 0 0)` | Text on sidebar primary |
| `--color-sidebar-accent` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` | Sidebar accent |
| `--color-sidebar-accent-foreground` | `oklch(0.205 0 0)` | `oklch(0.985 0 0)` | Text on sidebar accent |
| `--color-sidebar-border` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` | Sidebar borders |
| `--color-sidebar-ring` | `oklch(0.708 0 0)` | `oklch(0.556 0 0)` | Sidebar focus rings |

## Creating a Custom Theme

You can create your own theme by defining CSS variables in a `@layer theme` block:

```css
@import 'tailwindcss';

@layer theme {
  @variant light {
    --color-background: oklch(1 0 0);
    --color-foreground: oklch(0.2 0 0);
    --color-primary: oklch(0.5 0.2 280);
    --color-primary-foreground: oklch(1 0 0);
    --color-secondary: oklch(0.96 0.01 280);
    --color-secondary-foreground: oklch(0.2 0 0);
    --color-muted: oklch(0.97 0 0);
    --color-muted-foreground: oklch(0.55 0 0);
    --color-accent: oklch(0.96 0.01 280);
    --color-accent-foreground: oklch(0.2 0 0);
    --color-destructive: oklch(0.577 0.245 27.325);
    --color-border: oklch(0.92 0 0);
    --color-input: oklch(0.92 0 0);
    --color-ring: oklch(0.7 0 0);
    --color-chart-1: oklch(0.5 0.2 280);
    --color-chart-2: oklch(0.6 0.15 180);
    --color-chart-3: oklch(0.7 0.15 80);
    --color-chart-4: oklch(0.55 0.2 330);
    --color-chart-5: oklch(0.6 0.15 40);
    --color-sidebar: oklch(0.98 0 0);
    --color-sidebar-foreground: oklch(0.2 0 0);
    --color-sidebar-primary: oklch(0.5 0.2 280);
    --color-sidebar-primary-foreground: oklch(1 0 0);
    --color-sidebar-accent: oklch(0.96 0.01 280);
    --color-sidebar-accent-foreground: oklch(0.2 0 0);
    --color-sidebar-border: oklch(0.92 0 0);
    --color-sidebar-ring: oklch(0.7 0 0);
  }

  @variant dark {
    --color-background: oklch(0.15 0.01 280);
    --color-foreground: oklch(0.98 0 0);
    --color-primary: oklch(0.65 0.2 280);
    --color-primary-foreground: oklch(0.15 0.01 280);
    --color-secondary: oklch(0.25 0.01 280);
    --color-secondary-foreground: oklch(0.98 0 0);
    --color-muted: oklch(0.27 0 0);
    --color-muted-foreground: oklch(0.71 0 0);
    --color-accent: oklch(0.25 0.01 280);
    --color-accent-foreground: oklch(0.98 0 0);
    --color-destructive: oklch(0.704 0.191 22.216);
    --color-border: oklch(1 0 0 / 10%);
    --color-input: oklch(1 0 0 / 15%);
    --color-ring: oklch(0.55 0 0);
    --color-chart-1: oklch(0.65 0.2 280);
    --color-chart-2: oklch(0.7 0.15 180);
    --color-chart-3: oklch(0.75 0.15 80);
    --color-chart-4: oklch(0.65 0.2 330);
    --color-chart-5: oklch(0.7 0.15 40);
    --color-sidebar: oklch(0.2 0.01 280);
    --color-sidebar-foreground: oklch(0.98 0 0);
    --color-sidebar-primary: oklch(0.65 0.2 280);
    --color-sidebar-primary-foreground: oklch(0.15 0.01 280);
    --color-sidebar-accent: oklch(0.25 0.01 280);
    --color-sidebar-accent-foreground: oklch(0.98 0 0);
    --color-sidebar-border: oklch(1 0 0 / 10%);
    --color-sidebar-ring: oklch(0.55 0 0);
  }
}
```

### Guidelines for Custom Themes

- Use **oklch** color notation for compatibility with Tailwind CSS v4
- Define both `@variant light` and `@variant dark` blocks
- Always set `foreground` relative to its paired background for proper contrast
- Chart colors should be distinct enough to differentiate in a single chart
- Keep sidebar colors slightly differentiated from the main surface

## Theme Examples in the Registry

Full theme CSS files are available in the [rn-shadcn registry](https://github.com/devusimple/rn-shadcn-registry/tree/main/themes):

- `neutral.css` — Neutral gray theme
- `blue.css` — Blue accent theme
- `amber.css` — Amber accent theme
- `cyan.css` — Cyan accent theme
- `emerald.css` — Emerald accent theme
- `fuchsia.css` — Fuchsia accent theme
- `green.css` — Green accent theme
- `default.css` — Minimal theme
