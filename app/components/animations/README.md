# Framer Motion Animation Components

This directory contains reusable animation components built with Framer Motion for elegant, performant animations throughout the portfolio.

## Components

### FadeIn
Subtle fade and slide animation triggered when elements enter the viewport.

**Props:**
- `delay` (number, default: 0) - Animation delay in seconds
- `duration` (number, default: 0.5) - Animation duration in seconds
- `direction` ('up' | 'down' | 'left' | 'right' | 'none', default: 'up') - Slide direction
- `className` (string) - Additional CSS classes

**Usage:**
```tsx
<FadeIn duration={0.6} direction='up' delay={0.2}>
  <YourComponent />
</FadeIn>
```

### ScaleIn
Gentle scale and fade animation for emphasis on key elements.

**Props:**
- `delay` (number, default: 0) - Animation delay in seconds
- `duration` (number, default: 0.4) - Animation duration in seconds
- `className` (string) - Additional CSS classes

**Usage:**
```tsx
<ScaleIn delay={0.3} duration={0.6}>
  <YourComponent />
</ScaleIn>
```

### StaggerContainer & StaggerItem
Creates staggered animations for lists and grids.

**StaggerContainer Props:**
- `staggerDelay` (number, default: 0.1) - Delay between each child animation
- `className` (string) - Additional CSS classes

**Usage:**
```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>
```

## Animation Philosophy

All animations follow these principles:
- **Subtle**: Animations enhance, not distract
- **Performant**: Using GPU-accelerated properties (opacity, transform)
- **Accessible**: Respects user motion preferences
- **Contextual**: Animation timing and style matches content importance
- **Elegant**: Custom easing curve [0.21, 0.47, 0.32, 0.98] for smooth, natural motion

## Easing Curve

The custom easing `[0.21, 0.47, 0.32, 0.98]` provides a sophisticated, slightly elastic feel that complements the neo-brutalist design aesthetic.
