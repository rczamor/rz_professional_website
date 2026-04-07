# Good-to-Great: Build Instructions for Claude Code

These are three production-ready HTML prototypes that need to be integrated into the richezamor.com Next.js 15 App Router project. Each file is a standalone, fully styled, theme-aware component. Your job is to convert them into Next.js components that match the prototypes pixel-for-pixel.

**IMPORTANT:** Open each HTML file in a browser first to see exactly how it should look and behave. These are the source of truth.

---

## Files in This Folder

| File | What It Is | Where It Goes |
|---|---|---|
| `five-steps-callout.html` | Thesis teaser section for the homepage | Homepage (`/`) — replaces the existing thesis teaser section |
| `thesis-page.html` | Complete thesis page with scroll animations | `/thesis` route — replaces the existing thesis page |
| `logos-section.html` | Company logo grid with hover overlays | Homepage (`/`) — replaces the existing social proof / logos section |

---

## 1. Five Steps Callout Box (`five-steps-callout.html`)

### What It Does
A two-column callout box on the homepage that teases the thesis. Left column has the text ("Data is not context."), right column has an animated 5-step pipeline visualization.

### Integration Target
Replace the current thesis teaser section on the homepage. This section sits between the hero/stats area and the "What I Do" capabilities section.

### Key Behaviors to Preserve

1. **Auto-cycling active step.** A `setInterval` (3s) cycles a pulsing glow through the 5 pipeline steps. The active step's number circle gets `background: var(--accent)`, white text, and a `box-shadow` pulse animation (`stepPulse` keyframes).

2. **Sequential reveal animation.** The 5 steps stagger in from the left on page load using `stepReveal` keyframes with increasing `animation-delay` (0.1s–0.7s). In Next.js, trigger this on scroll into view using IntersectionObserver (the site already has a `ScrollReveal` component).

3. **Hover expand.** Hovering any step expands a hidden description (`max-height: 0` → `60px`, `opacity: 0` → `1`) and lights up the number circle.

4. **Gradient stripe + ambient glow.** The box has a `::before` 3px gradient stripe at the top (accent → accent-secondary → accent) and a `::after` radial gradient glow behind the content.

### CSS Architecture Notes
- The component uses the full theme variable names (`--bg-primary`, `--text-primary`, `--accent`, etc.)
- All 4 themes are supported (night, dawn, day, dusk)
- The box background is `var(--bg-secondary)` with `border: 1px solid var(--border-subtle)`
- The pipeline connector line is a `::before` pseudo-element on `.pipeline` — absolute positioned, 1px wide, accent color at 0.4 opacity

### Next.js Component Notes
- This needs `'use client'` because of the auto-cycling `setInterval` and hover interactions
- Use `useEffect` for the cycling logic with cleanup (`clearInterval` on unmount)
- Use `useRef` to manage the step references
- Wrap in the site's existing `ScrollReveal` or add IntersectionObserver for the stagger animation
- The `<a>` link goes to `/thesis` — use Next.js `<Link>`

---

## 2. Thesis Page (`thesis-page.html`)

### What It Does
The complete `/thesis` page — "Data Is Not Context." This is the most important content page on the site. It has a hero, 5 content sections with scroll-reveal animations, animated step cards, stat callouts, proof cards, and a CTA box.

### Integration Target
Replaces the entire `/thesis` route (`app/thesis/page.tsx`).

### Key Behaviors to Preserve

1. **Scroll reveal.** Every section, card, and callout has class `.reveal`. An IntersectionObserver adds `.visible` on scroll, triggering `opacity: 0 → 1` and `translateY(30px) → 0` with a `0.7s cubic-bezier(0.16, 1, 0.3, 1)` transition. The site already has a `ScrollReveal` component — use it.

2. **Step card stagger.** The 5 step cards (`.step-card`) have staggered `transition-delay` (0s, 0.08s, 0.16s, 0.24s, 0.32s) so they cascade in when the section scrolls into view.

3. **Step card hover.** Each card slides right 4px (`translateX(4px)`), shows a 3px accent left border (`::before` pseudo-element), and the number square transitions from `accent-dim` background to solid `accent` with a `box-shadow` glow.

4. **Stat callout row.** Three stat cards in a row: "20%+" / "30–60%" / "65%". These are key data points styled with large accent-colored values.

5. **Proof cards.** A 2x2 grid of cards for Suzy, Grandstage, Helm Labs, IBM. Each has a mono-styled company label and description text.

6. **CTA box.** Dark fixed-background box (`#0a0a0f`) with gradient stripe, radial glow, two CTA buttons (primary + secondary). This uses the same pattern as the shared `CtaBox` component referenced in BUILD_SPECS.md.

7. **Section dividers.** 48px wide, 1px height lines centered between sections. Use `var(--border-hover)` color.

### CSS Architecture Notes
- Container is `max-width: 800px` for the prose sections (narrower for readability)
- CTA box uses `container-wide` at `max-width: 1200px`
- The convergence callout (`.convergence-box`) has `background: var(--accent-dim)` and a `border-left: 3px solid var(--accent)` — this is a key design element
- Typography: headings are 28px Bricolage Grotesque 800, body text is 17px Inter 400 with `line-height: 1.8`
- Step cards use a `grid-template-columns: 56px 1fr` layout with 24px gap

### Next.js Component Notes
- Page component can be a server component that wraps client-side `ScrollReveal`
- Or make it `'use client'` and handle IntersectionObserver directly
- The hero does NOT need the generative canvas — it's a simple centered text hero
- CTA buttons: LinkedIn link is external (`target="_blank" rel="noopener"`), contact link is internal (`<Link href="/contact">`)
- Use the existing `CtaBox` component if one exists, or extract this as a shared component

### Content
All text content is from the "Website Content — richezamor.com" document, specifically the "PAGE: THESIS" section. The content in the HTML file is the source of truth — do not modify the copy.

---

## 3. Logos Section (`logos-section.html`)

### What It Does
A 4-column CSS Grid of company logos with hover overlays showing company name + what was built. Replaces the simple text pill social proof bar on the homepage.

### Integration Target
Replace the current social proof / logos section on the homepage. This sits after the hero stats section.

### Key Behaviors to Preserve

1. **Monochrome logo treatment.** All logos are rendered in monochrome using CSS filters:
   - Night/dusk: `filter: brightness(0) invert(1)` (makes logos white)
   - Day/dawn: `filter: brightness(0)` (makes logos black)
   - Base opacity: 0.4 (night) / 0.35 (day)
   - This filter is applied to `.logo-wrap`, which affects both inline SVGs and `<img>` tags

2. **Hover overlay.** On hover, the logo fades to `opacity: 0` and an overlay div fades in (`opacity: 0 → 1`) showing the company name (Bricolage Grotesque 700, 14px) and project description (Inter 400, 11px). The overlay has `background: var(--bg-card)` and `z-index: 2`.

3. **Accent glow on hover.** A `::after` pseudo-element on each cell shows a radial gradient glow (`var(--accent-glow)`) on hover at `z-index: 1`.

4. **Statement cell.** The last row has a 2-column-spanning cell with "200+ AI systems, data platforms, web applications and enterprise websites launched in my career." The "200+" is in `var(--accent)` color.

5. **Grid gaps as dividers.** The grid uses `gap: 1px` with `background: var(--border-subtle)` on the grid container, and `background: var(--bg-primary)` on each cell — this creates 1px divider lines between cells.

### Logo Files and Size Classes

| Company | SVG/PNG | Wrapper Class | Notes |
|---|---|---|---|
| IBM | Inline SVG | (default: 140x44) | Blue striped logo, viewBox 0 0 1000 400 |
| Twitter | Inline SVG | `.sq` (90x90) | Bird icon, viewBox -89 -47 644 447 |
| Reddit | Inline SVG | `.w` (160x36) | Wordmark, viewBox 1000 130 1500 500 |
| Mozilla | Inline SVG | `.w` (160x36) | moz://a wordmark |
| PBS | Inline SVG | `.sq` (90x90) | Head icon + text |
| Al Jazeera | Inline SVG | `.sq` (90x90) | Ornate calligraphy |
| Sony Music | PNG `<img>` | `.sq` (90x90) | `../logos/sony-music-seeklogo.png` |
| Johnson & Johnson | Inline SVG | `.w` (160x36) | 2023 wordmark |
| Cigna | Inline SVG | `.w` (160x36) | Tree of life + text |
| Bank of America | Inline SVG | `.sq-lg` (110x110) | Flag icon + full text |
| Memorial Sloan Kettering | SVG `<img>` | `.full` (200x160) | `../logos/memorial-sloan-kettering-cancer-center-seeklogo.svg` |
| USAID | SVG `<img>` | `.sq-xl` (140x140) | `../logos/USAID-Identity.svg` — 307KB, too large to inline |
| Ann Taylor | Inline SVG | `.w` (160x36) | Text wordmark |
| Time Inc. | PNG `<img>` | `.w` (160x36) | `../logos/time-inc-seeklogo.png` |

### Size Classes Reference
```css
/* Default */        .logo-wrap      { width: 140px; height: 44px; }
/* Wide */           .logo-wrap.w    { width: 160px; height: 36px; }
/* Square */         .logo-wrap.sq   { width: 90px;  height: 90px; }
/* Large square */   .logo-wrap.sq-lg { width: 110px; height: 110px; }
/* XL square */      .logo-wrap.sq-xl { width: 140px; height: 140px; }
/* Full */           .logo-wrap.full { width: 200px; height: 160px; }
```

### Hover Overlay Data

| Company | Description |
|---|---|
| IBM | Global Digital Experience & Growth Platforms |
| Twitter | International SEO Automation Tools |
| Reddit | Digital Customer Support Center |
| Mozilla | Global Developer Collaboration Platform |
| PBS | Washington Week Media Website |
| Al Jazeera | Omnichannel CMS |
| Sony Music | Collaboration Platform |
| Johnson & Johnson | Web Platform for 1,000+ Product Websites |
| Cigna | Social Customer Service Platform |
| Bank of America | Customer Engagement Platform |
| Memorial Sloan Kettering | The Well Editorial Brand Website |
| USAID | Crisis Response Platform |
| Ann Taylor | Digital Employee Workspace |
| Time Inc. | Product Strategy for Teen People |

### CSS Architecture Notes
- Grid: `grid-template-columns: repeat(4, 1fr)` — responsive to 3-col at 900px, 2-col at 600px
- The `.logo-wrap` has `filter`, `opacity`, and `transition` — all children (SVGs and imgs) inherit the monochrome treatment
- Inline SVGs need `width: 100% !important; height: 100% !important` because many have explicit `width="2500"` attributes that override CSS
- The `<img>` tags inside `.logo-wrap` also need `width: 100% !important; height: 100% !important; object-fit: contain`

### Next.js Component Notes
- The inline SVGs can stay as JSX (rename `class` → `className`, `fill-rule` → `fillRule`, etc.)
- External logo files (Sony Music PNG, Time Inc. PNG, MSK SVG, USAID SVG) should go in `/public/logos/` and be referenced with `<img src="/logos/filename">` or `next/image` with `unoptimized` for SVGs
- The auto-cycling and statement cell are pure CSS — no client-side JS needed for this component
- However, the hover overlays work with CSS only, so this can be a server component

### Logo File Locations
All logo files are in `richezamor-build/logos/`. Copy them to `public/logos/` in the Next.js project:
```
logos/
├── ibm.svg
├── twitter-6.svg
├── reddit-1.svg
├── mozilla.svg
├── pbs-1.svg
├── aljazeere-tv.svg
├── sony-music-seeklogo.png
├── johnson-johnson-2023-.svg
├── cigna-3.svg
├── bank-of-america-2.svg
├── memorial-sloan-kettering-cancer-center-seeklogo.svg
├── USAID-Identity.svg
├── ann-taylor-1.svg
└── time-inc-seeklogo.png
```

---

## General Integration Notes

### Theme System
All three files use the 4-theme system (night, dawn, day, dusk). The CSS variables match the full names in BUILD_SPECS.md Section 3.1. When integrating, these variables are defined in `globals.css` — do NOT duplicate them in component styles.

### Fonts
All three files load Google Fonts (Bricolage Grotesque, Inter, JetBrains Mono, Material Symbols). In Next.js, these are loaded via `next/font/google` in the root layout — do NOT add additional font imports.

### Responsive Breakpoints
All three files handle:
- Desktop: full layout
- Tablet (max-width: 900px): reduced columns
- Mobile (max-width: 600px): single column, reduced padding/font sizes

### Scroll Reveal Pattern
The thesis page and five-steps callout use `.reveal` → `.visible` with IntersectionObserver. The existing codebase has a `ScrollReveal` component — use it rather than adding a new observer.

### Testing Checklist
After integration, verify:
- [ ] All 4 themes render correctly (toggle through night → dawn → day → dusk)
- [ ] Logo grid: all 14 logos visible in monochrome
- [ ] Logo grid: hover overlays show company name + description for all 14 cells
- [ ] Logo grid: Statement cell spans 2 columns with accent "200+"
- [ ] Five steps callout: auto-cycling pulse animation works
- [ ] Five steps callout: hover expands step descriptions
- [ ] Thesis page: scroll reveal animations fire on all sections
- [ ] Thesis page: step cards stagger in sequence
- [ ] Thesis page: stat cards display correctly
- [ ] Thesis page: proof cards 2x2 grid works
- [ ] Thesis page: CTA box with gradient stripe and buttons
- [ ] Responsive: all three components work at 600px and 900px breakpoints
- [ ] No duplicate font imports or theme variable definitions
