---
version: alpha
spec: google-labs/design.md@2026-04-21
name: richezamor.com
description: >-
  Personal site for Riché Zamor. Editorial, engineering-leaning portfolio with a
  four-theme ambient system (Night, Day, Dawn, Dusk). Dark is default; all
  tokens resolve through CSS custom properties scoped to `html[data-theme="…"]`.
colors:
  # Night (default) — tokens mirror :root in src/styles/globals.css
  bg.primary: "#050508"
  bg.secondary: "#0a0a0f"
  bg.card: "#0f0f16"
  bg.cardHover: "#141420"
  border.subtle: "rgba(255,255,255,0.06)"
  border.hover: "rgba(255,255,255,0.12)"
  text.primary: "#f0f0f5"
  text.secondary: "rgba(240,240,245,0.60)"
  text.tertiary: "rgba(240,240,245,0.35)"
  accent.primary: "#7B7FE4"
  accent.primaryDim: "rgba(123,127,228,0.15)"
  accent.primaryGlow: "rgba(123,127,228,0.08)"
  accent.secondary: "#7c5cfc"
  accent.secondaryDim: "rgba(124,92,252,0.12)"
  accent.gradientMid: "#9B9EF0"
  canvas.particle: "rgba(123,127,228,0.50)"
  canvas.line: "rgba(123,127,228,0.06)"
  nav.bg: "rgba(5,5,8,0.60)"
  nav.bgScroll: "rgba(5,5,8,0.85)"
  # Step / flow accents (used for ordered sequences)
  flow.teal: "#00c9a0"
  flow.blue: "#5c8cfc"
  flow.violet: "#a07cfc"
typography:
  family.heading: "Bricolage Grotesque, -apple-system, BlinkMacSystemFont, sans-serif"
  family.sans: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
  family.mono: "SF Mono, Cascadia Code, Fira Code, Menlo, Consolas, monospace"
  display.hero:
    fontFamily: "{typography.family.heading}"
    fontSize: "clamp(48px, 6vw, 80px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-2px"
  display.xl:
    fontFamily: "{typography.family.heading}"
    fontSize: "clamp(48px, 7vw, 88px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-3px"
  heading.h1:
    fontFamily: "{typography.family.heading}"
    fontSize: "clamp(36px, 4vw, 56px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-1.5px"
  heading.h2:
    fontFamily: "{typography.family.heading}"
    fontSize: "clamp(32px, 4vw, 48px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-1.5px"
  heading.h3:
    fontFamily: "{typography.family.heading}"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.5px"
  heading.h4:
    fontFamily: "{typography.family.heading}"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.3px"
  body.lg:
    fontFamily: "{typography.family.sans}"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  body.base:
    fontFamily: "{typography.family.sans}"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  body.sm:
    fontFamily: "{typography.family.sans}"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  body.xs:
    fontFamily: "{typography.family.sans}"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  label.mono:
    fontFamily: "{typography.family.mono}"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "2px"
    textTransform: "uppercase"
  eyebrow.mono:
    fontFamily: "{typography.family.mono}"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "1.5px"
    textTransform: "uppercase"
  caption:
    fontFamily: "{typography.family.sans}"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  2xl: "16px"
  3xl: "20px"
  4xl: "24px"
  pill: "9999px"
  full: "50%"
spacing:
  0: "0"
  0.5: "4px"
  1: "8px"
  1.5: "12px"
  2: "16px"
  2.5: "20px"
  3: "24px"
  3.5: "28px"
  4: "32px"
  5: "40px"
  6: "48px"
  7: "60px"
  8: "80px"
  10: "100px"
  12: "120px"
  14: "160px"
  section.y: "120px"
  container.x: "clamp(24px, 5vw, 80px)"
  container.max: "1200px"
  narrow.max: "760px"
elevation:
  none: "0 0 0 transparent"
  xs: "0 1px 3px rgba(0,0,0,0.04)"
  sm: "0 4px 16px rgba(0,0,0,0.06)"
  md: "0 6px 24px rgba(0,0,0,0.07)"
  lg: "0 8px 32px rgba(0,0,0,0.12)"
  glow.accent: "0 8px 32px rgba(123,127,228,0.30)"
motion:
  duration.fast: "200ms"
  duration.base: "250ms"
  duration.slow: "300ms"
  duration.reveal: "700ms"
  duration.theme: "1200ms"
  easing.standard: "cubic-bezier(0.4, 0, 0.2, 1)"
  easing.reveal: "cubic-bezier(0.16, 1, 0.3, 1)"
components:
  nav:
    height: "72px"
    backgroundColor: "{colors.nav.bg}"
    backgroundColorScrolled: "{colors.nav.bgScroll}"
    borderBottom: "1px solid {colors.border.subtle}"
    padding: "0 {spacing.container.x}"
    backdropFilter: "blur(20px) saturate(1.2)"
  button.primary:
    backgroundColor: "{colors.accent.primary}"
    textColor: "#ffffff"
    typography: "{typography.body.sm}"
    fontWeight: 600
    letterSpacing: "0.3px"
    padding: "14px 32px"
    rounded: "{rounded.md}"
    hover:
      transform: "translateY(-2px)"
      boxShadow: "{elevation.glow.accent}"
  button.secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text.primary}"
    border: "1px solid {colors.border.hover}"
    typography: "{typography.body.sm}"
    fontWeight: 600
    padding: "14px 32px"
    rounded: "{rounded.md}"
    hover:
      borderColor: "{colors.text.secondary}"
  card:
    backgroundColor: "{colors.bg.card}"
    border: "1px solid {colors.border.subtle}"
    rounded: "{rounded.xl}"
    padding: "20px"
    hover:
      backgroundColor: "{colors.bg.cardHover}"
      borderColor: "{colors.border.hover}"
  card.feature:
    backgroundColor: "{colors.bg.card}"
    border: "1px solid {colors.border.subtle}"
    rounded: "{rounded.2xl}"
    padding: "40px 32px"
    hover:
      boxShadow: "{elevation.lg}"
      transform: "translateY(-4px)"
  chip:
    typography: "{typography.eyebrow.mono}"
    rounded: "{rounded.sm}"
    padding: "6px 14px"
    border: "1px solid {colors.border.subtle}"
  stat:
    valueTypography: "{typography.heading.h2}"
    valueGradient: "linear-gradient(135deg, {colors.accent.primary}, {colors.accent.secondary})"
    labelTypography: "{typography.caption}"
    labelColor: "{colors.text.tertiary}"
  cta.box:
    backgroundColor: "{colors.bg.card}"
    border: "1px solid {colors.border.subtle}"
    rounded: "{rounded.4xl}"
    padding: "80px 60px"
    topBorderGradient: "linear-gradient(90deg, {colors.accent.primary}, {colors.accent.secondary})"
---

## Overview

richezamor.com is the personal site of Riché Zamor — a PM / builder portfolio
that reads like a well-kept newsroom: quiet by default, confident when it
speaks. The interface is an **ambient, four-theme editorial canvas** — Night
(default), Day, Dawn, Dusk — each with its own accent palette but the same
bones. Every component is a small, bordered rectangle floating over a blurred
radial ambient layer.

**Design voice.** Minimal, editorial, engineering-precise. Copy is tight and
declarative. Motion is subtle — nothing bounces; everything eases. The site
should feel like a product spec dressed for the front-end: structured, honest,
a little alive.

**Brand pillars.**
- **Quiet by default** — dark surfaces, low-contrast chrome, no ornamentation
  until the user leans in.
- **Typography does the work** — Bricolage Grotesque carries display, Inter
  carries body, SF Mono marks machine-adjacent labels (status, meta, eyebrows).
- **Accent is a pointer, not a paint** — the indigo→violet gradient is
  reserved for CTAs, active states, stat values, and section top-borders.
- **Themes are ambient, not skins** — each theme has a distinct mood
  (purple-black, paper-white, desert dawn, twilight). Component structure is
  identical across all four.

**Target agent behavior.** Any agent generating UI for this site must resolve
tokens by reference (never hardcode hex outside the four theme blocks), must
preserve heading-family contrast (Bricolage Grotesque for `h1`–`h3`, Inter for
body), and must route all interactive color through `--accent` / `--accent-secondary`
so theme swaps remain coherent.

## Colors

Colors are **CSS custom properties** scoped to four theme roots:
`:root` (Night), `html[data-theme="day"]`, `html[data-theme="dawn"]`,
`html[data-theme="dusk"]`. Tokens resolve the same names in every theme.

### Night (default)

| Token | Value | Role |
|---|---|---|
| `--bg-primary` | `#050508` | Page background |
| `--bg-secondary` | `#0a0a0f` | Alternate section background |
| `--bg-card` | `#0f0f16` | Default card surface |
| `--bg-card-hover` | `#141420` | Card hover surface |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Default hairline |
| `--border-hover` | `rgba(255,255,255,0.12)` | Hover / secondary button border |
| `--text-primary` | `#f0f0f5` | Body + heading text |
| `--text-secondary` | `rgba(240,240,245,0.60)` | Supporting text |
| `--text-tertiary` | `rgba(240,240,245,0.35)` | Meta, captions, disabled |
| `--accent` | `#7B7FE4` | Primary accent (indigo) |
| `--accent-dim` | `rgba(123,127,228,0.15)` | Accent pill / icon tile fill |
| `--accent-glow` | `rgba(123,127,228,0.08)` | Ambient halo, card wash |
| `--accent-secondary` | `#7c5cfc` | Secondary accent (violet) |
| `--accent-secondary-dim` | `rgba(124,92,252,0.12)` | Secondary accent fill |

### Day

Accent shifts to `#6366B8` → `#6c5ce7`; surfaces go paper-bright
(`#f8f8fa` / `#f0f0f4` / `#ffffff`); text flips to near-black `#0c0c14`.
Elevation gets real (non-zero shadows).

### Dawn

Warm desert palette: surfaces `#f5f0ea` / `#ede7df` / `#fdfaf6`; accent is
burnt orange `#c47a28`; text `#1a1410`. Borders carry a brown tint
(`rgba(120,80,40,0.08)`).

### Dusk

Deep twilight: surfaces `#12101a` / `#1a1726`; accent is orchid `#b07cc8`
with magenta secondary `#d07ce0`; text `#ddd8e8`. Borders lavender-tinted.

### Semantic rules

- **Interactive** (links, buttons, active nav, stat values, pull-quotes) → `--accent`.
- **Gradient emphasis** (hero highlight, CTA box top-border, `.stat-val`) →
  `linear-gradient(135deg, var(--accent), var(--accent-secondary))`, often with
  a mid-stop `#9B9EF0` for hero headline.
- **Ordered sequences** (`.step-card:nth-child(n)`) layer accents:
  1. `--accent` (indigo)
  2. `#00c9a0` (teal)
  3. `#5c8cfc` (blue)
  4. `--accent-secondary` (violet)
  5. `#a07cfc` (light violet)
- **Never use pure `#ffffff` or `#000000` for text.** Always `--text-*`
  tokens; they carry the per-theme contrast.

## Typography

Three families, no exceptions:

| Family | CSS var | Used for |
|---|---|---|
| Bricolage Grotesque | `--font-heading` | `h1` `h2` `h3` `h4`, hero display, card titles |
| Inter | `--font-sans` | Body, nav, buttons, descriptions |
| SF Mono (fallback stack) | `--font-mono` | Eyebrows, stat labels, case tags, status chips, step numbers |

### Scale

| Token | Size | Weight | Line | Tracking | Example |
|---|---|---|---|---|---|
| `display.hero` | `clamp(48px, 6vw, 80px)` | 800 | 1.05 | -2px | Home `h1` |
| `display.xl` | `clamp(48px, 7vw, 88px)` | 800 | 1.1 | -3px | Centered hero pages |
| `heading.h1` | `clamp(36px, 4vw, 56px)` | 800 | 1.1 | -1.5px | Section opener |
| `heading.h2` | `clamp(32px, 4vw, 48px)` | 800 | 1.1 | -1.5px | Sub-section |
| `heading.h3` | `24px` | 700 | 1.3 | -0.5px | Card title |
| `heading.h4` | `20px` | 700 | 1.3 | -0.3px | Sub-card title |
| `body.lg` | `18px` | 400 | 1.7 | 0 | Hero description |
| `body.base` | `15px` | 400 | 1.7 | 0 | Paragraph body |
| `body.sm` | `14px` | 400 | 1.6 | 0 | Secondary copy, buttons |
| `body.xs` | `13px` | 400 | 1.6 | 0 | Footer, meta links |
| `label.mono` | `12px` | 500 | — | 2px | Mono eyebrow |
| `eyebrow.mono` | `11px` | 600 | — | 1.5px | Section label |
| `caption` | `12px` | 400 | 1.4 | 0 | Chart / stat caption |

**Rules.**
- Use `clamp()` for every display and `h1/h2` — never hardcoded `px` for
  top-level headings.
- Negative letter-spacing scales with size: `-3px` → `-0.3px`. Body copy is
  always `letter-spacing: 0`.
- Mono tokens are **uppercase + tracked**. Never use mono for more than one
  line at a time.
- Line-height `1.7` for standard prose, `1.8` for long-form case studies,
  `1.1` for display.

## Layout

- **Container** — `max-width: 1200px`; horizontal padding `clamp(24px, 5vw, 80px)`.
- **Narrow** — `.narrow` = `max-width: 760px` for editorial prose columns.
- **Section rhythm** — default vertical padding `120px 0`; hero adds
  `padding-top: 160px` (offsets the fixed 72px nav).
- **Grid** — 12-col mental model, but implemented as CSS Grid with
  `repeat(N, 1fr)` per section. Common patterns:
  - Hero stats: `repeat(3, 1fr)`, gap `20px`.
  - Feature cards: `repeat(auto-fit, minmax(280px, 1fr))`, gap `24–32px`.
  - Work-card header: two columns `1fr auto`, gap `24px`.
- **Nav** — fixed, 72px tall, `backdrop-filter: blur(20px) saturate(1.2)`,
  becomes more opaque when `.scrolled` is added.
- **Spacing scale** — 4-based: `4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 80, 100, 120, 160`.
  Prefer these values; avoid arbitrary gaps like `19px`.

## Elevation & Depth

Shadows are intentionally small — depth comes from **border + hover wash**,
not drop-shadow.

| Token | Value | When |
|---|---|---|
| `elevation.none` | `0 0 0 transparent` | Default resting state (Night, Dusk) |
| `elevation.xs` | `0 1px 3px rgba(0,0,0,0.04)` | Day/Dawn resting |
| `elevation.sm` | `0 4px 16px rgba(0,0,0,0.06)` | Card hover, work-card |
| `elevation.md` | `0 6px 24px rgba(0,0,0,0.07)` | Feature card hover (Day/Dawn) |
| `elevation.lg` | `0 8px 32px rgba(0,0,0,0.12)` | Capability card hover |
| `elevation.glow.accent` | `0 8px 32px rgba(123,127,228,0.30)` | Primary button hover |

**Ambient layer.** A fixed, `z-index: 0` element (`.ambient-bg`) renders two
radial gradients (`accent-glow` top-left, `accent-secondary-dim` bottom-right),
animated via `ambientFloat` (20s / 25s, ease-in-out, reverse on the second).
This is the site's only "wallpaper" — never add another background image.

## Shapes

Corners are the site's signature — nothing sharp, nothing fully round.

| Token | Radius | Typical use |
|---|---|---|
| `rounded.xs` | `4px` | Skip-nav link, tiny tags |
| `rounded.sm` | `6px` | Case tags, status chips |
| `rounded.md` | `8px` | Buttons |
| `rounded.lg` | `10px` | Callout boxes |
| `rounded.xl` | `12px` | Default card, built-card |
| `rounded.2xl` | `16px` | Feature/why/capability cards |
| `rounded.3xl` | `20px` | Hero callout shells |
| `rounded.4xl` | `24px` | CTA box |
| `rounded.full` | `50%` | Step numbers, avatars |

**Borders.** Always `1px solid` with `--border-subtle` or `--border-hover`.
`.work-card` uses a `3px` left border as a color accent on hover
(`border-left-color: var(--accent)`). `.case-context` uses `1px dashed` for the
quiet emphasis variant.

## Components

Every component is a theme-token composition — no standalone styles.

### Button — primary

`src/styles/globals.css` `.btn-primary`

- Background `{colors.accent.primary}`, text `#ffffff`.
- `14px 32px` padding, `rounded.md`, `body.sm` typography, weight 600,
  tracking `0.3px`.
- Hover: `translateY(-2px)` + `elevation.glow.accent`. Transition 250ms.
- Used for: newsletter submit, hero CTA, "Get in touch".

### Button — secondary

`.btn-secondary`

- Transparent fill, `1px solid {colors.border.hover}`, text `{colors.text.primary}`.
- Same size, weight, and tracking as primary.
- Hover: border moves to `{colors.text.secondary}` — no transform, no shadow.

### Card — base

`.card` and its family (`.p2-card`, `.built-card`)

- `{colors.bg.card}` fill, `1px solid {colors.border.subtle}`, `rounded.xl`,
  padding `20–24px`.
- Hover: swap to `{colors.bg.cardHover}` + `{colors.border.hover}`, optional
  `translateX(2–4px)` for directional emphasis.
- Transition: `all 300ms {easing.standard}`.

### Card — feature (capability / why / step)

`.capability-card`, `.why-card`, `.step-card`

- `rounded.2xl`, padding `40px 32px`.
- Left or top 3px gradient accent bar (`::before`) that fades in on hover.
- Cards may carry a radial `::after` wash using `{colors.accent.primaryGlow}`
  that appears at `opacity: 1` on hover.
- `h3` is `heading.h4`, body is `body.base`.

### Card — work / case

`.work-card`, `.case`

- Tighter padding (`40px`), `3px` colored left border that lights up on hover.
- Header uses two columns: `h3` (`heading.h3`) left, meta chip right.
- Inline `.case-tag` chips mix role (accent), period (tertiary text), type
  (secondary accent).

### Stat block

`.stat-card`, `.hero-stats`, `.cm` (case metrics)

- Numeric value: `heading.h1`/`h2` weight 800 with the 135° indigo→violet
  `-webkit-background-clip: text` gradient. **This is the only place gradient
  fills land on text besides the hero highlight.**
- Label: `caption` or `eyebrow.mono`, color `{colors.text.tertiary}`.

### Chip / tag

`.case-tag`, `.project-status`, mono eyebrows

- Padding `6px 14px`, `rounded.sm`, `1px` border, `eyebrow.mono` typography.
- Variants encode intent via border + text color:
  - `role` → `{colors.accent.primary}` + matching 20%-alpha border.
  - `type` → `{colors.accent.secondary}` + matching 20%-alpha border.
  - `period` → `{colors.text.tertiary}` + `{colors.border.subtle}`.

### Nav

`nav`, `.nav-logo`, `.nav-link`

- 72px fixed, blurred background, `.scrolled` class raises opacity on scroll.
- Logo uses heading family at `15px`, links use `body.sm`. No underlines —
  hover is a color shift to `--text-primary`.

### Hero

`.hero`, `.hero h1`, `.hero-description`

- Minimum height `100vh`, top padding `160px`, bottom `80px`.
- `h1` uses `display.hero` + a `.highlight` span that wears the
  indigo→violet gradient.
- Intro animation: `fadeUp` (20px translate, 600ms) staggered at
  `0.35s / 0.5s / 0.6s`.
- Canvas overlay (`#hero-canvas`) renders the particle field; particle color
  comes from `--canvas-particle`, connector lines from `--canvas-line`.

### CTA box

`.cta-box`

- `rounded.4xl`, padding `80px 60px`, 4px top gradient bar
  (`linear-gradient(90deg, accent, accent-secondary)`) on the container.
- Heading uses `heading.h1`, supporting copy `body.lg`.

### Newsletter

`.hero-newsletter`

- Pill-shaped (`rounded.pill`) input group; input inherits card surface,
  button is a filled pill using accent. Focus ring: `1px` accent.

### Footer

`footer`

- Top hairline, padding `40px 0`, three-column grid on desktop collapsing to
  stack on mobile. Links are `body.xs` + tertiary text; section titles use
  `eyebrow.mono` at `3px` tracking.

## Motion

Motion has one job: **tell the user the surface is alive without distracting them.**

- **Theme transitions** — `1200ms cubic-bezier(0.4, 0, 0.2, 1)` on background
  and color. This is the longest transition in the system.
- **Hover transitions** — `200–300ms` on color/border/transform.
- **Reveal** — `.reveal` → `.revealed` is `700ms cubic-bezier(0.16, 1, 0.3, 1)`
  with `translateY(24px) → 0` + `opacity 0 → 1`.
- **Hero fade-up** — `fadeUp` keyframe (`translateY(20px) → 0`) staggered by
  150ms across headline → subhead → stats.
- **Ambient float** — 20s / 25s ease-in-out infinite, reversed on the second
  blob.
- **Reduced motion** — respect `prefers-reduced-motion: reduce`; disable
  `ambientFloat`, `fadeUp`, and any `transform` hover states.

## Do's and Don'ts

### ✅ Do

- Resolve every color through `--bg-*`, `--text-*`, `--accent*`, `--border-*`.
  If a new color is needed, add it to all four theme blocks — never inline.
- Use `clamp()` for hero and `h1/h2` sizes so the site scales across 360px
  mobile to 1440px+ desktop without breakpoints.
- Wear the accent gradient sparingly: hero highlight, CTA box top-bar, stat
  values. That's it.
- Pair Bricolage Grotesque (heading) with Inter (body). Use SF Mono only for
  labels, eyebrows, status, and stat captions.
- Compose with the 4-based spacing scale. Prefer `16/20/24/32` over
  `17/19/30`.
- Keep cards bordered and lightly shadowed. Depth comes from borders +
  hover wash, not from drop-shadow.
- Add `data-reveal` and let `ScrollReveal` handle the entrance.

### ❌ Don't

- Don't hardcode hex values inside components. The only acceptable hex
  literals outside the theme blocks are the flow sequence colors
  (`#00c9a0`, `#5c8cfc`, `#a07cfc`) and the hero gradient mid-stop
  (`#9B9EF0`).
- Don't use `#ffffff` or `#000000` for text — use `--text-primary` so all
  four themes keep contrast.
- Don't introduce a fourth font family. Don't use Bricolage for body, don't
  use Inter for `h1/h2`, don't use mono for running prose.
- Don't apply drop-shadows > `0 8px 32px rgba(0,0,0,0.12)`. Heavier shadows
  break the dark themes.
- Don't mix border radii on sibling cards. A section should use one card
  radius (either `rounded.xl` or `rounded.2xl`, not both).
- Don't animate with linear or `ease` alone. Use `cubic-bezier(0.4, 0, 0.2, 1)`
  for UI transitions and `cubic-bezier(0.16, 1, 0.3, 1)` for reveals.
- Don't place text over the ambient gradient without a card surface — it
  breaks legibility in Day and Dawn.
- Don't add a new theme without defining the full token set
  (`--bg-primary` through `--canvas-line` + nav-bg pair + shadow pair).

## Accessibility

- **Skip nav** — `.skip-nav` is present and visible on focus (WCAG 2.4.1).
- **Contrast** — `--text-primary` vs `--bg-primary` meets WCAG AA in all four
  themes. `--text-tertiary` is for meta only; never use for primary copy.
- **Focus rings** — visible on all interactive elements; never `outline: none`
  without a replacement.
- **Motion** — `prefers-reduced-motion: reduce` disables ambient float,
  fade-up, and hover transforms.
- **Semantic HTML** — headings are ordered `h1 → h2 → h3`; nav uses `<nav>`;
  landmarks are present.

## File Layout

The live tokens and rules in this spec live in:

- `src/styles/globals.css` — all four theme blocks, section styles.
- `src/styles/article.css`, `five-steps.css`, `logos-section.css`,
  `thesis.css`, `top-banner.css` — page/section-scoped styles that import the
  same custom properties.
- `src/components/ThemeEngine.tsx` — switches `data-theme` on `html` based on
  user preference + time of day.
- `src/components/ScrollReveal.tsx` — IntersectionObserver that toggles
  `.revealed` on `data-reveal` elements.
- `src/components/GSAPAnimations.tsx` — scroll-tied motion for richer
  sections.

## Revision

- `2026-04-22` — initial spec, authored the day after Google Labs published
  the open-source DESIGN.md format. Tokens extracted verbatim from
  `globals.css`.
