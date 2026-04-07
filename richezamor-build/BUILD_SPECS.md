# richezamor.com — Build Specifications for Claude Code
## Complete Reference for Next.js 15 + Vercel Deployment

**Version:** V3 (April 2026)
**Domain:** richezamor.com
**Deploy target:** Vercel
**Framework:** Next.js 15 (App Router)

---

## 1. Project Overview

This is a personal website for Riché Zamor — VP of Product, 2x founder, and context architect. It has 7 pages, a time-of-day adaptive theme engine, a generative canvas hero animation, and a chatbot widget (Context Layer Engine interface).

All page designs are fully built as standalone HTML files in `src/pages/`. Your job is to convert them into a production Next.js 15 App Router project that deploys to Vercel, extracting shared components, consolidating CSS into a design system, and ensuring everything works identically to the HTML prototypes.

---

## 2. Pages & Routes

| Route | Source File | Title |
|---|---|---|
| `/` | `src/pages/index.html` | Home (hero + canvas + stats + thesis teaser + capabilities + work + CTA) |
| `/thesis` | `src/pages/thesis.html` | Data Is Not Context (thesis page) |
| `/work` | `src/pages/work.html` | Work (case studies with metrics) |
| `/about` | `src/pages/about.html` | About (bio, career, speaking, social) |
| `/projects` | `src/pages/projects.html` | Projects & Prototypes |
| `/thinking` | `src/pages/thinking.html` | Thinking in Public (editorial hub) |
| `/contact` | `src/pages/contact.html` | Get in Touch (two-column: availability + form) |

---

## 3. Design System — Complete Token Reference

### 3.1 Color Themes

The site uses a time-of-day adaptive theme system. There are 4 themes stored as `data-theme` attribute on `<html>`. All colors are CSS custom properties.

#### Night (default — 8pm to 5:30am)
```css
--bg-primary: #050508;
--bg-secondary: #0a0a0f;
--bg-card: #0f0f16;
--bg-card-hover: #141420;
--border-subtle: rgba(255,255,255,0.06);
--border-hover: rgba(255,255,255,0.12);
--text-primary: #f0f0f5;
--text-secondary: rgba(240,240,245,0.6);
--text-tertiary: rgba(240,240,245,0.35);
--accent: #7B7FE4;
--accent-dim: rgba(123,127,228,0.15);
--accent-glow: rgba(123,127,228,0.08);
--accent-secondary: #7c5cfc;
--accent-secondary-dim: rgba(124,92,252,0.12);
--canvas-particle: rgba(123,127,228,0.5);
--canvas-line: rgba(123,127,228,0.06);
--nav-bg: rgba(5,5,8,0.6);
--nav-bg-scroll: rgba(5,5,8,0.85);
--shadow: 0 0 0 transparent;
--shadow-h: 0 0 0 transparent;
```

#### Day (8am to 5pm)
```css
--bg-primary: #f8f8fa;
--bg-secondary: #f0f0f4;
--bg-card: #ffffff;
--bg-card-hover: #f2f2f5;
--border-subtle: rgba(0,0,0,0.07);
--border-hover: rgba(0,0,0,0.14);
--text-primary: #0c0c14;
--text-secondary: rgba(12,12,20,0.55);
--text-tertiary: rgba(12,12,20,0.28);
--accent: #6366B8;
--accent-dim: rgba(99,102,184,0.07);
--accent-glow: rgba(99,102,184,0.04);
--accent-secondary: #6c5ce7;
--accent-secondary-dim: rgba(108,92,231,0.08);
--canvas-particle: rgba(99,102,184,0.4);
--canvas-line: rgba(99,102,184,0.05);
--nav-bg: rgba(248,248,250,0.7);
--nav-bg-scroll: rgba(248,248,250,0.92);
--shadow: 0 1px 3px rgba(0,0,0,0.04);
--shadow-h: 0 6px 24px rgba(0,0,0,0.07);
```

#### Dawn (5:30am to 8am)
```css
--bg-primary: #f5f0ea;
--bg-secondary: #ede7df;
--bg-card: #fdfaf6;
--bg-card-hover: #f0ebe3;
--border-subtle: rgba(120,80,40,0.08);
--border-hover: rgba(120,80,40,0.15);
--text-primary: #1a1410;
--text-secondary: rgba(26,20,16,0.55);
--text-tertiary: rgba(26,20,16,0.3);
--accent: #c47a28;
--accent-dim: rgba(196,122,40,0.08);
--accent-glow: rgba(196,122,40,0.04);
--accent-secondary: #d4792a;
--accent-secondary-dim: rgba(212,121,42,0.08);
--canvas-particle: rgba(196,122,40,0.35);
--canvas-line: rgba(196,122,40,0.05);
--nav-bg: rgba(245,240,234,0.7);
--nav-bg-scroll: rgba(245,240,234,0.92);
--shadow: 0 1px 3px rgba(100,60,20,0.05);
--shadow-h: 0 6px 24px rgba(100,60,20,0.08);
```

#### Dusk (5pm to 8pm)
```css
--bg-primary: #12101a;
--bg-secondary: #1a1726;
--bg-card: #1a1726;
--bg-card-hover: #201d2e;
--border-subtle: rgba(180,160,220,0.08);
--border-hover: rgba(180,160,220,0.15);
--text-primary: #ddd8e8;
--text-secondary: rgba(221,216,232,0.55);
--text-tertiary: rgba(221,216,232,0.3);
--accent: #b07cc8;
--accent-dim: rgba(176,124,200,0.1);
--accent-glow: rgba(176,124,200,0.05);
--accent-secondary: #d07ce0;
--accent-secondary-dim: rgba(208,124,224,0.1);
--canvas-particle: rgba(176,124,200,0.3);
--canvas-line: rgba(176,124,200,0.05);
--nav-bg: rgba(18,16,26,0.7);
--nav-bg-scroll: rgba(18,16,26,0.92);
--shadow: 0 0 0 transparent;
--shadow-h: 0 0 0 transparent;
```

### 3.2 Typography

```css
--font-heading: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, sans-serif;
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

**Google Fonts imports (all pages):**
```
Bricolage Grotesque: 400, 500, 600, 700, 800
Inter: 300, 400, 500, 600, 700
JetBrains Mono: 400, 500
Material Symbols Outlined: variable (opsz 20-48, wght 100-700, FILL 0-1, GRAD -50-200)
```

**Font usage:**
- `h1, h2, h3` → `var(--font-heading)`
- Body text → `var(--font-sans)`
- Labels, badges, code → `var(--font-mono)`
- Icons → Material Symbols Outlined with `font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24`

### 3.3 Spacing & Layout

- Container: `max-width: 1200px; margin: 0 auto; padding: 0 clamp(24px, 5vw, 80px);`
- Section padding: `120px 0` (desktop), `80px 0` (mobile)
- Hero padding: `160px 0 80px`
- Nav height: `72px`
- Card border-radius: `16px`
- Button border-radius: `8px`
- Card padding: `40px` (standard), `32px` (compact)

### 3.4 Transitions

- Theme transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1)` on `:root`
- Background/color: `1.2s cubic-bezier(0.4, 0, 0.2, 1)` on `body`
- Nav background: `0.3s`
- Cards/buttons: `0.25s` or `0.3s`
- Scroll reveal: `0.7s cubic-bezier(0.16, 1, 0.3, 1)`

---

## 4. Shared Components to Extract

### 4.1 Nav (appears on every page)
```
Logo: "Riché.Zamor" (Bricolage Grotesque, 15px, 700, uppercase, 2px spacing)
Links: Home, Thesis, Work, About, Projects, Thinking, Contact (CTA button)
Social icons: LinkedIn, X, GitHub (inline SVGs, 18x18)
Theme toggle: circle button with emoji (🌙/🌅/☀️/🌆)
Phase label: mono text showing current theme name
```
- Fixed position, z-index 100
- Backdrop blur: `blur(20px) saturate(1.2)`
- Adds `.scrolled` class after 80px scroll → changes to `--nav-bg-scroll`
- CTA button: `color: #ffffff; background: var(--accent);`

### 4.2 Footer (appears on every page)
```
Brand: "© Riché Zamor 2026" (11px, 600, 3px spacing, uppercase)
Links: LinkedIn, X, GitHub
```
- Background: `var(--bg-secondary)`
- Border top: `1px solid var(--border-subtle)`
- Padding: `64px 0`

### 4.3 Ambient Background (appears on every page)
Two pseudo-elements creating floating radial gradients with 20-25s animation cycle.

### 4.4 Theme Engine (JavaScript — runs on every page)
```javascript
// Time ranges:
// night: 8pm (20:00) to 5:30am
// dawn: 5:30am to 8:00am
// day: 8:00am to 5:00pm (17:00)
// dusk: 5:00pm to 8:00pm (20:00)

// Sets html[data-theme="night|dawn|day|dusk"]
// Auto-updates every 60 seconds
// Manual toggle cycles through themes; resets to auto if lands on current auto theme
```

### 4.5 Scroll Reveal
IntersectionObserver on `.reveal` elements → adds `.visible` class
- threshold: 0.1, rootMargin: '0px 0px -50px 0px'
- CSS: opacity 0 → 1, translateY(30px) → 0

### 4.6 Chatbot Widget (appears on every page)
Self-contained component. See `src/pages/chatbot-widget.html` for standalone reference.
- Floating button: bottom-right, 56px circle, accent color, pulse animation
- Chat panel: 400x600px, fixed position, dark theme (#0a0a0f background)
- Pre-launch state: responds with "Context Layer Engine is in development" message
- Welcome message with 3 suggested question pills
- Source citations (expandable) in bot messages
- z-index: 1000

### 4.7 Dark CTA Box (appears on home, thesis, projects, thinking)
```css
background: #0a0a0f;
border: 1px solid rgba(255,255,255,0.08);
border-radius: 24px;
padding: 80px 60px;
/* Gradient stripe at top */
/* Radial glow behind */
```

---

## 5. Page-Specific Details

### 5.1 Home (`/`) — index.html
**Unique features:**
- **Generative Canvas Hero:** HTML5 Canvas with 220 particles using Perlin-like noise. Particles have varying sizes (0.5-2.5px), connected by lines when within proximity. Canvas fills the hero section. Uses `requestAnimationFrame`. Resize handler uses `parentElement.getBoundingClientRect()`.
- **Hero stat cards:** 4-column grid (2-col on mobile) showing 300%/Grandstage, $3.25M/Helm Labs, $M+/IBM, VP Product/Suzy
- **Social proof bar:** Company name pills (IBM, Twitter, Reddit, Mozilla, PBS, Al Jazeera, Universal Music, J&J, Cigna, MSK, Bank of America, USAID, Jane Goodall Institute)
- **Thesis teaser:** 2-column grid with thesis text + five-step context pipeline visualization
- **Capabilities:** 3-column cards with Material Symbols icons (hub, deployed_code, trending_up)
- **Select Work:** 4 work cards with metrics (Suzy, Grandstage, Helm Labs, IBM)
- **Why Me section:** 3-column cards
- **CTA box:** Dark box with gradient stripe

### 5.2 Thesis (`/thesis`) — thesis.html
**Note:** Uses ABBREVIATED CSS variable names (`--bg`, `--t1`, `--ac`, `--card`, etc. instead of `--bg-primary`, `--text-primary`, `--accent`, `--bg-card`). When converting to Next.js, normalize ALL pages to use the full variable names.

**Mapping of abbreviated → full:**
```
--bg → --bg-primary
--bg2 → --bg-secondary
--card → --bg-card
--card-h → --bg-card-hover
--brd → --border-subtle
--brd-h → --border-hover
--t1 → --text-primary
--t2 → --text-secondary
--t3 → --text-tertiary
--ac → --accent
--ac-d → --accent-dim
--ac-g → --accent-glow
--ac2 → --accent-secondary
--ac2-d → --accent-secondary-dim
--nav-bg-s → --nav-bg-scroll
--heading → --font-heading
--sans → --font-sans
--mono → --font-mono
```

### 5.3 Work (`/work`) — work.html
**Note:** Also uses abbreviated CSS variable names (same mapping as thesis). Normalize when converting.

### 5.4 About (`/about`) — about.html
Uses full variable names. Contains: bio section, speaking/talks grid with hover accents, career timeline, social links section.

### 5.5 Projects (`/projects`) — projects.html
Uses full variable names. Contains: project cards with hover effects, dark CTA box.

### 5.6 Thinking (`/thinking`) — thinking.html
Uses full variable names. New editorial/content hub page:
- Filter bar with pillar pills (All, Context Intelligence, Product Management, Leadership)
- Featured article card (pinned at top)
- 2-column article grid with 6 placeholder articles
- Each article has `data-pillar` attribute for JS filtering
- Newsletter signup in hero + CTA box at bottom
- JS filter logic: clicking pill shows/hides articles by pillar

### 5.7 Contact (`/contact`) — contact.html
Uses full variable names. Two-column layout:
- Left (5fr): Availability heading with accent left border, 3 engagement cards (Advisory/Board/Speaking with Material Symbols icons: account_tree, groups, record_voice_over), metadata section (email, location, response time)
- Right (7fr): Elevated form card with radial glow decoration, side-by-side Name+Email, dropdown, textarea, submit button

---

## 6. SEO Infrastructure (Already in HTML)

Every page has:
- `<meta name="description">` (unique per page)
- Open Graph tags: og:title, og:description, og:type, og:url, og:image, og:site_name
- Twitter Card tags: twitter:card, twitter:site, twitter:title, twitter:description, twitter:image
- Canonical URL
- SVG favicon (periwinkle "R" on rounded rect)
- Home page only: JSON-LD Person schema

**OG Image:** Pages reference `https://richezamor.com/og-image.png`. You need to create this: 1200x630px, dark background (#050508), "Riché Zamor" in Bricolage Grotesque, "VP of Product. 2x Founder. Context Architect." subtitle, periwinkle accent elements.

---

## 7. Next.js 15 Conversion Instructions

### 7.1 Project Structure
```
richezamor.com/
├── app/
│   ├── layout.tsx          # Root layout: <html>, fonts, theme engine, nav, footer, chatbot, ambient-bg
│   ├── page.tsx            # Home page (/)
│   ├── thesis/
│   │   └── page.tsx
│   ├── work/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── thinking/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Nav.tsx             # Shared navigation
│   ├── Footer.tsx          # Shared footer
│   ├── AmbientBg.tsx       # Floating gradient background
│   ├── ThemeEngine.tsx     # Client component: theme detection + toggle
│   ├── ScrollReveal.tsx    # Client component: IntersectionObserver
│   ├── ChatbotWidget.tsx   # Client component: chatbot panel
│   ├── CtaBox.tsx          # Dark CTA box reusable component
│   ├── HeroCanvas.tsx      # Client component: generative particle canvas
│   └── NewsletterSignup.tsx
├── styles/
│   └── globals.css         # All theme variables, reset, shared styles
├── public/
│   ├── og-image.png        # OG image (create this)
│   └── favicon.svg         # Periwinkle R favicon
├── next.config.js
├── tailwind.config.js      # Optional — the site uses custom CSS, not Tailwind
├── package.json
└── tsconfig.json
```

### 7.2 Key Conversion Rules

1. **All client-side interactivity needs `'use client'` directive:** ThemeEngine, ScrollReveal, ChatbotWidget, HeroCanvas, filter logic on /thinking, form handlers.

2. **CSS approach:** Use a single `globals.css` with all the CSS custom properties (theme variables). Each page's specific styles can be in CSS modules or inline. Do NOT rewrite to Tailwind — keep the custom CSS system that's already built.

3. **Fonts:** Use `next/font/google` for Bricolage Grotesque, Inter, JetBrains Mono. Apply CSS variables via `className`.

4. **Material Symbols:** Load from Google Fonts CDN in the root layout's `<head>`.

5. **Theme engine must run client-side only.** Server-render with `data-theme="night"` as default, then hydrate with the correct theme on client mount. Use `suppressHydrationWarning` on `<html>`.

6. **Canvas must be client-only.** Use dynamic import with `ssr: false` or a client component that checks `typeof window !== 'undefined'`.

7. **Normalize the CSS variable names.** thesis.html and work.html use abbreviated names (--bg, --t1, --ac). Convert everything to the full names (--bg-primary, --text-primary, --accent) in the shared globals.css.

8. **Chatbot widget:** Build as a client component. Currently uses placeholder responses. The API integration point is clearly marked — when the Context Layer Engine backend is ready, replace the mock response with a `fetch('/api/chat', {...})` call.

9. **Contact form:** Currently uses `e.preventDefault()` + alert. Replace with a proper API route (`/api/contact`) or integrate with a form service (Formspree, Resend, etc.).

10. **Thinking page filters:** Client-side JS filtering by `data-pillar`. In Next.js, this can be state-managed with `useState` + conditional rendering instead of DOM manipulation.

### 7.3 Vercel Deployment

- **Framework preset:** Next.js (auto-detected)
- **Domain:** richezamor.com
- **Environment variables needed:** None for initial deploy (chatbot API will need `CONTEXT_LAYER_API_URL` later)
- **Build command:** `next build` (default)
- **Output:** Static pages where possible (all pages can be statically generated since there's no dynamic data yet)

### 7.4 Performance Requirements

- All pages should achieve 90+ Lighthouse score
- Use `next/image` for any future images
- Font loading: use `display: 'swap'` via next/font
- Canvas: lazy-initialize after first paint
- Chatbot widget: lazy-load (don't block initial render)

---

## 8. Content That Will Be Dynamic (Future)

When the Context Layer Engine is built, these sections become dynamic:

1. **Chatbot widget** → POST to `/api/chat` endpoint, receives streaming responses with source citations
2. **Thinking page articles** → Fetched from the engine's content API, replacing placeholder articles
3. **Newsletter signup** → Connected to email service (Buttondown or ConvertKit)
4. **Contact form** → Connected to form handler or engine's inbound API

For now, all content is static/placeholder. The HTML files contain all the static content needed.

---

## 9. Third-Party Dependencies

### CDN (currently loaded in HTML, convert to npm packages):
- Google Fonts: Bricolage Grotesque, Inter, JetBrains Mono → use `next/font/google`
- Material Symbols Outlined → keep as CDN link or import via Google Fonts

### Future additions (from analysis, not yet implemented):
- GSAP + ScrollTrigger (for scroll-driven animations — CAR-138)
- No other runtime dependencies needed

---

## 10. Testing Checklist

Before deploying, verify:

- [ ] All 7 routes render correctly
- [ ] Theme engine auto-detects time-of-day and sets correct theme
- [ ] Theme toggle cycles through all 4 themes
- [ ] Generative canvas renders particles across full hero width (not clustered in corner)
- [ ] Canvas resizes correctly on window resize
- [ ] Scroll reveal animations trigger on all pages
- [ ] Nav gets `.scrolled` class and changes background on scroll
- [ ] Chatbot widget opens/closes, sends messages, shows typing indicator
- [ ] Contact form validates and submits
- [ ] Thinking page filter pills show/hide articles correctly
- [ ] Social links (LinkedIn, X, GitHub) open in new tabs
- [ ] OG tags render preview when sharing on LinkedIn/Slack (test with ogp.me or opengraph.xyz)
- [ ] Favicon appears in browser tab
- [ ] Mobile responsive: nav collapses, grids go single-column, chatbot goes full-width
- [ ] All CTA buttons have white text on accent background (NOT black text)
- [ ] Theme transitions are smooth (1.2s cubic-bezier)
- [ ] No console errors
- [ ] Lighthouse: 90+ Performance, 90+ Accessibility, 90+ SEO

---

## 11. Linear Tickets Reference

All work is tracked in Linear under project "Professional Website":

| Ticket | Title | Priority |
|---|---|---|
| CAR-135 | [Epic] richezamor.com V3 — Good to Great | High |
| CAR-136 | Build /thinking editorial page | High |
| CAR-137 | Build chatbot widget — Context Layer Engine interface | High |
| CAR-138 | Add GSAP scroll-driven storytelling to home page | Medium |
| CAR-139 | Add OG/Meta/SEO infrastructure across all pages | High |
| CAR-140 | Add micro-interactions + make canvas interactive | Medium |
| CAR-141 | Add narrative flow bridges between pages | Low |
| CAR-142 | Add newsletter signup component | Medium |
| CAR-143 | Mobile experience refinement | Low |
