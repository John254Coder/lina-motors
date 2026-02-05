# Lina Motors Design System

## Color Palette

### Primary Colors (Main Usage)

**Deep Navy Blue** - `--color-primary: #1e3a5f`
- Headers and headings
- Primary buttons
- Main navigation
- Professional, trustworthy tone
- Usage: Main brand color for text and backgrounds

**Professional Blue** - `--color-secondary: #2563eb`
- Interactive elements
- Links
- Secondary buttons
- Accent highlights
- Usage: Call-to-action elements, hover states

**Light Blue** - `--color-accent: #0ea5e9`
- Light accents
- Icon highlights
- Hover effects
- Decorative elements
- Usage: Modern, tech-forward touches

### Neutrals

**Clean White** - `--color-background: #ffffff`
- Main background
- Card backgrounds
- Clean, spacious feel

**Off-White** - `--color-surface: #f8fafc`
- Section backgrounds
- Alternating content areas

**Light Gray-Blue** - `--color-soft: #f1f5f9`
- Subtle section dividers
- Soft background variations

**Dark Slate** - `--color-text: #1e293b`
- Primary text color
- Body copy
- Readable, professional

**Muted Slate** - `--color-text-muted: #64748b`
- Secondary text
- Captions
- Less important information

**Light Border** - `--color-border: #e2e8f0`
- Card borders
- Dividers
- Subtle separations

**Neutral Gray** - `--color-neutral: #94a3b8`
- Disabled states
- Placeholders
- Decorative elements

### Logo-Only Color (DO NOT USE IN GENERAL DESIGN)

**Red Wine** - `--color-logo-red: #b91c1c`
- ⚠️ EXCLUSIVE TO LOGO ONLY
- Do not use for buttons, links, or UI elements
- Maintains brand identity while keeping interface professional

---

## Typography

### Headings
- **H1**: 2.25rem (mobile) / 3rem (desktop), font-weight: 600
- **H2**: 1.875rem (mobile) / 2.25rem (desktop), font-weight: 600
- **H3**: 1.5rem, font-weight: 600
- **H4**: 1.25rem, font-weight: 600
- Color: `var(--color-primary)` - Deep Navy Blue

### Body Text
- **Paragraph**: 1rem, line-height: 1.75, color: `var(--color-text)`
- **Small**: 0.875rem, color: `var(--color-text-muted)`

### Links
- Default: `var(--color-secondary)` (Professional Blue)
- Hover: `var(--color-accent)` (Light Blue)
- Transition: 0.2s smooth

---

## Components

### Buttons

**Primary Button** `.btn-primary`
- Background: Deep Navy Blue (`#1e3a5f`)
- Hover: Professional Blue (`#2563eb`)
- Use for: Main actions, form submissions

**Secondary Button** `.btn-secondary`
- Border: 2px Deep Navy Blue
- Transparent background
- Hover: Filled Deep Navy Blue
- Use for: Secondary actions, "Learn More"

**Light Button** `.btn-light`
- Background: Light Blue (`#0ea5e9`)
- Hover: Professional Blue (`#2563eb`)
- Use for: Tertiary actions, alternative CTAs

### Cards

- Background: White
- Border: Light Border (`#e2e8f0`)
- Border radius: 0.5rem
- Padding: 2rem
- Shadow: Subtle, modern
- Hover: Elevated shadow effect

### Sections

**`.section`** - Standard section spacing
- Padding: 5rem top/bottom

**`.section-light`** - Light background variant
- Background: `var(--color-surface)` (Off-White)

**`.section-soft`** - Softer background variant
- Background: `var(--color-soft)` (Light Gray-Blue)

---

## Design Principles

### 1. Professional & Trustworthy
- Blue palette conveys reliability and expertise
- Clean, uncluttered layouts
- Consistent spacing and alignment

### 2. Modern & Sleek
- Subtle shadows and smooth transitions
- Contemporary color palette
- Minimalist approach

### 3. Brand Consistency
- Red wine color reserved exclusively for logo
- Blue dominates the interface
- Maintains professional insurance industry standards

### 4. Accessibility
- High contrast ratios for text
- Clear visual hierarchy
- Readable font sizes

---

## Usage Examples

### Good ✅
```css
/* Using blue for call-to-action */
.cta-button {
  background-color: var(--color-primary);
}

/* Blue accent for interactive elements */
.feature-icon {
  color: var(--color-accent);
}

/* Professional header */
.page-header {
  background-color: var(--color-primary);
  color: white;
}
```

### Avoid ❌
```css
/* DO NOT use red wine color outside logo */
.button {
  background-color: var(--color-logo-red); /* ❌ NO! */
}

/* DO NOT mix red with blue in UI */
.alert {
  border-color: var(--color-logo-red); /* ❌ NO! */
}
```

---

## File Structure

Your main stylesheet should be organized as:

1. **@theme** - CSS custom properties
2. **@layer base** - Element defaults
3. **@layer components** - Reusable components
4. **@layer utilities** - Helper classes

This ensures proper cascading and maintainability.