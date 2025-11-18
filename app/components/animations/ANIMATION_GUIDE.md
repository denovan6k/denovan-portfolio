# Animation Implementation Guide

## Animation Patterns by Section

### 🎯 Hero Section
**Purpose**: Make a strong first impression with orchestrated entrance
- Container: `FadeIn` (0.6s, up direction)
- Badge: Scale animation (0.5s, delay 0.2s)
- Heading: Fade up (0.6s, delay 0.3s)
- Stats cards: Fade up (0.6s, delay 0.5s) + hover lift
- Image card: `ScaleIn` (0.7s, delay 0.4s)

### 📁 Projects Section
**Purpose**: Draw attention to work without overwhelming
- Container: `FadeIn` (0.6s, up direction)
- Cards: Individual staggered animations (0.5s, 0.1s per card)
- Hover: Lift effect (-8px, 0.2s)

### 🛠 Skills Section
**Purpose**: Showcase capabilities with subtle emphasis
- Container: `FadeIn` (0.6s, up direction)
- Feature image: `ScaleIn` (0.6s, delay 0.2s)
- Skill cards: Staggered (0.5s, 0.08s per card)
- Hover: Lift effect (-6px, 0.2s) + decorative element fade in

### 👤 About Section
**Purpose**: Build trust with smooth, professional animations
- Container: `FadeIn` (0.6s, up direction)
- Image card: `ScaleIn` (0.6s, delay 0.2s)

### 📧 Contact Section
**Purpose**: Encourage action with welcoming animations
- Container: `FadeIn` (0.6s, up direction)

### 🧭 Navigation
**Purpose**: Provide instant feedback without distraction
- Header: Fade down (0.5s on mount)
- Nav items: Lift on hover (-2px, 0.2s)
- Color transition: 0.2s

## Page-Level Animations

### About Page
- Section 1: `FadeIn` (0.6s, up, no delay)
- Section 2: `FadeIn` (0.6s, up, 0.2s delay) + `ScaleIn` for image
- Section 3: `FadeIn` (0.6s, up, 0.3s delay)

### Work Page
- Section 1: `FadeIn` (0.6s, up, no delay)
- Section 2: `FadeIn` (0.6s, up, 0.2s delay)
- Section 3: `FadeIn` (0.6s, up, 0.3s delay)

### Contact Page
- Section 1: `FadeIn` (0.6s, up, no delay)
- Section 2: `FadeIn` (0.6s, up, 0.2s delay)

## Animation Timing Reference

| Element Type | Duration | Delay Pattern | Easing |
|-------------|----------|---------------|--------|
| Page sections | 0.6s | Staggered (0.2s increments) | Custom |
| Cards | 0.5s | Index-based (0.1s per item) | Custom |
| Skill cards | 0.5s | Index-based (0.08s per item) | Custom |
| Hover effects | 0.2s | None | Custom |
| Header | 0.5s | None | Custom |
| Badges | 0.5s | 0.2s | Custom |

## Viewport Settings

All scroll-triggered animations use:
```tsx
viewport={{ once: true, margin: '-50px' }}
```

- `once: true` - Animations play only once (no repeat on scroll)
- `margin: '-50px'` - Trigger 50px before element enters viewport

## Accessibility

The `MotionConfig` wrapper in `app/layout.tsx` automatically respects user preferences:
- Detects `prefers-reduced-motion: reduce`
- Disables animations for users who prefer reduced motion
- Maintains layout without animation artifacts

## Best Practices

### ✅ Do
- Use FadeIn for sections and containers
- Use ScaleIn for emphasis (images, featured content)
- Stagger card animations for visual rhythm
- Keep hover animations quick (0.2s)
- Use consistent easing throughout

### ❌ Don't
- Animate on every scroll (use `once: true`)
- Use long durations (>1s feels sluggish)
- Animate too many properties at once
- Forget viewport margin for early triggers
- Overuse scale animations (reserve for emphasis)

## Custom Easing Explained

```tsx
ease: [0.21, 0.47, 0.32, 0.98]
```

This cubic-bezier curve creates:
1. **Slow start** (0.21) - Gentle acceleration
2. **Quick middle** (0.47, 0.32) - Smooth transition
3. **Soft landing** (0.98) - Slight elastic feel

Perfect for neo-brutalist aesthetic - confident but not aggressive.

## Performance Tips

1. **GPU Acceleration**: Only animate `opacity` and `transform`
2. **Viewport Optimization**: Use `margin` to trigger before visible
3. **Once Only**: Prevent repeated calculations with `once: true`
4. **Reduced Motion**: Automatically handled by MotionConfig
5. **Stagger Wisely**: Keep delays short (0.08-0.1s) for large lists

## Testing Animations

### Visual Testing
1. Scroll through each page slowly
2. Check animations trigger at right time
3. Verify no layout shift during animation
4. Test hover states on all interactive elements

### Performance Testing
1. Open DevTools Performance tab
2. Record while scrolling
3. Check for 60fps (green bars)
4. Look for layout thrashing (red bars)

### Accessibility Testing
1. Enable "Reduce motion" in OS settings
2. Verify animations are disabled
3. Check layout remains intact
4. Test keyboard navigation still works
