# SERAVOLVE 2.0 DESIGN SYSTEM

## Objective
Create one unified design language that every page, section, and component follows.
**Rule:** Never create a new style if an existing component can solve the problem.

---

# 1. Grid System

## Desktop
- Max Width: 1280px
- Columns: 12
- Gap: 32px
- Margins: 40px

**Content Widths:**
- Hero: 1280px
- Standard Sections: 1280px
- Text-heavy Sections: 960px
- Blog Content: 760px
- Forms: 520px

## Tablet
- Columns: 8
- Gap: 24px
- Margins: 32px

## Mobile
- Columns: 4
- Gap: 16px
- Margins: 20px
- *Never exceed 640px content width.*

---

# 2. Container Rules
Every section must use:
```css
max-width: 1280px;
margin: auto;
padding-inline: 40px; /* 20px on Mobile */
```
Never use random widths.

---

# 3. 8px Spacing System
Only these values are allowed: `4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160`.
Do not invent spacing values.

---

# 4. Vertical Section Spacing
| Section | Top | Bottom |
| --- | --- | --- |
| Hero | 96 | 96 |
| Standard | 80 | 80 |
| Small | 64 | 64 |
| Footer | 96 | 48 |

*Never less than 64px between sections.*

---

# 5. Typography

**H1**
- Desktop: 56px
- Mobile: 38px
- Weight: 600
- Line Height: 110%

**H2**
- Desktop: 44px
- Mobile: 30px
- Weight: 600

**H3**
- Size: 30px
- Weight: 600

**Body Large**
- 18px, 160%

**Body**
- 16px, 160%

**Small**
- 14px, 150%

**Labels**
- 12px, Uppercase, Letter spacing 0.08em

---

# 6. Color Rules
- **Primary Background:** White
- **Secondary Background:** Very Light Grey (Alternate every section. Never stack two grey backgrounds.)
- **Text:** Primary `#111111`, Secondary `#666666`, Muted `#999999`
- **Accent:** Only brand green. No secondary accent colors.

---

# 7. Border Radius & Shadows
- **Radius:** Use only `12px`, `16px`, `24px`.
- **Shadow:** One shadow only: `0 10px 30px rgba(0,0,0,.06)`. No heavy shadows.

---

# 8. Components

## Buttons
- **Primary:** Height 56px, Radius 16px, Padding 24px, Font 16px (Weight 600). Hover: Lift 2px, 150ms.
- **Secondary:** Outline only. No filled grey buttons.
- **Text Button:** Arrow animation. 6px translate.

## Cards (Three types only)
1. **Product Card:** Image, Name, One-line purpose, Price, CTA
2. **Routine Card:** Cover Image, Routine Name, Who it's for, Included Products, Price, CTA
3. **Info Card:** Icon, Title, Description

## Icons
Use one icon family. Outline style only. Sizes: `20px`, `24px`, `32px`. Never mix filled icons.

## Forms
- Input Height 56px, Radius 16px.
- Label above field. Never floating labels.
- Error: Red border only. No shaking animations.

## Product Images
Ratio `1:1`. Padding `32px`. Background `Transparent`. Never crop product bottles.

## Section Titles
Always follow: `Eyebrow -> Heading -> Paragraph -> Content`.

## CTA Hierarchy
One primary CTA per section. Maximum two buttons. Primary always left.
Mobile: Stack vertically.

## Animation Rules
Only four animations allowed: `Fade Up`, `Fade In`, `Scale`, `Slide`.
Duration `300ms` (Never longer than 500ms). No parallax. No bouncing.

## Trust & FAQ
- **Trust:** Icon -> Title -> Description (Four cards maximum).
- **FAQ:** Accordion only. One open at a time. Chevron rotates 180°.

## Product Gallery
- Desktop: Images left. Content right.
- Mobile: Gallery -> Content -> Sticky CTA

---

# 9. Responsive & Context Rules

**Mobile Rules:**
- Never use: 5-column grids, tiny buttons, hover interactions, carousels with hidden content.
- Always use: Single-column content, 16–20px side padding, sticky CTA when appropriate.

**Desktop Rules:**
- Max line length 70 characters. Never exceed 3 buttons in a row.

---

# 10. Development Standards

## Accessibility & Performance
- Minimum contrast AA.
- Touch targets 44×44px. Keyboard accessible. Visible focus states.
- Alt text for all images. Semantic headings.
- Images -> WebP, Lazy-load below fold. Minimal JS. Maximum two fonts/weights initially.

## Shopify Rules
- **Sections:** One purpose only. Never mix unrelated content.
- **Blocks:** Everything editable. No hardcoded text.
- **Metafields:** Use for Routine Step, Routine Name, Concern, Usage Time, Skin Type.
- **CSS:** Component-based. Never page-specific unless necessary.
- **JS:** Component-based. No global scripts.

## Naming Convention
- Sections: `home-hero.liquid`, `home-concerns.liquid`, `product-benefits.liquid`
- Snippets: `button-primary`, `card-product`, `card-routine`, `icon`

---

# Acceptance Checklist
- [ ] Uses 12-column grid.
- [ ] Uses approved spacing scale and typography.
- [ ] Uses approved components (No new button/card styles or animations).
- [ ] Mobile-first responsive.
- [ ] Lighthouse Performance >= 90 & Accessibility >= 95.
