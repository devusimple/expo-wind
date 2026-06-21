# Typography

## Overview
A collection of semantic typography components for headings, paragraphs, blockquotes, code, lists, and other text styles. Each component is a thin wrapper around React Native's `Text` or `View` with pre-configured class names.

## Import
```tsx
import {
  H1, H2, H3, H4, H5, H6,
  P, Blockquote, InlineCode, Lead,
  Large, Small, Muted,
  UnorderedList, OrderedList, ListItem,
} from '@/components/ui/typography'
```

## Usage
```tsx
<H1>Page Title</H1>
<P>Some paragraph text.</P>
```

## Props

All components accept standard `TextProps` or `ViewProps` from React Native and forward `className` via the `cn` utility.

| Component | Extends | Description |
|-----------|---------|-------------|
| H1 | TextProps | 4xl, extrabold, tracking-tight |
| H2 | TextProps | 3xl, bold, tracking-tight |
| H3 | TextProps | 2xl, semibold, tracking-tight |
| H4 | TextProps | xl, semibold, tracking-tight |
| H5 | TextProps | lg, semibold, tracking-tight |
| H6 | TextProps | base, semibold, tracking-tight |
| P | TextProps | base, leading-relaxed |
| Blockquote | ViewProps | Left border accent with italic text |
| InlineCode | TextProps | Monospace with muted background |
| Lead | TextProps | xl, muted foreground |
| Large | TextProps | lg, semibold |
| Small | TextProps | sm, font-medium |
| Muted | TextProps | sm, muted foreground |
| UnorderedList | ViewProps | Wrapper with gap |
| OrderedList | ViewProps | Wrapper with gap |
| ListItem | TextProps | Bullet point with text |

## Examples

### Example 1: Basic
```tsx
import {
  H1, H2, H3, H4, H5, H6, P,
} from '@/components/ui/typography'

<H1>The Quick Brown Fox</H1>
<H2>Section Heading</H2>
<H3>Sub-section</H3>
<H4>Sub-sub-section</H4>
<H5>Minor heading</H5>
<H6>Smallest heading</H6>
<P>This is a paragraph of body text with relaxed line height for comfortable reading.</P>
```

### Example 2: With Variants
```tsx
<Blockquote>
  <P>The only limit to our realization of tomorrow is our doubts of today.</P>
</Blockquote>

<P>
  Use <InlineCode>useState</InlineCode> to manage local state.
</P>

<Lead>This is lead text — great for opening paragraphs.</Lead>
<Large>Large feature text.</Large>
<Small>Small print or disclaimers.</Small>
<Muted>Secondary or subdued content.</Muted>
```

### Example 3: Lists
```tsx
<UnorderedList>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</UnorderedList>

<OrderedList>
  <ListItem>Step one</ListItem>
  <ListItem>Step two</ListItem>
  <ListItem>Step three</ListItem>
</OrderedList>
```
