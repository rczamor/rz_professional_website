# CLAUDE.md — Instructions for Claude Code

## Project: richezamor.com
Personal website for Riché Zamor. Next.js 15 App Router on Vercel.

## Quick Start
```bash
npx create-next-app@latest richezamor.com --typescript --app --src-dir --import-alias "@/*"
cd richezamor.com
npm install
```

## What To Do
Convert the HTML prototypes in `src/pages/` into a production Next.js 15 App Router project. The HTML files are the source of truth — they contain all content, styling, and JavaScript.

Read `BUILD_SPECS.md` for the complete design system (color tokens for all 4 themes, typography, spacing, component specs, conversion rules).

## Critical Rules
1. **Do NOT use Tailwind for styling.** The site uses a custom CSS design system with CSS custom properties. Keep it.
2. **Normalize CSS variable names.** `thesis.html` and `work.html` use abbreviated vars (`--bg`, `--t1`, `--ac`). Convert ALL to full names (`--bg-primary`, `--text-primary`, `--accent`).
3. **All CTA button text is WHITE** (`#ffffff`), not black. If you see any dark text on accent-colored buttons, fix it.
4. **Theme engine is client-only.** Server-render with `data-theme="night"` default. Use `suppressHydrationWarning` on `<html>`.
5. **Canvas is client-only.** Dynamic import with `ssr: false`. Uses `parentElement.getBoundingClientRect()` for sizing.
6. **Chatbot widget is a client component.** Currently uses mock responses. API integration point is marked for future connection to Context Layer Engine.

## File Structure
```
app/layout.tsx          → Root layout with fonts, theme, nav, footer, chatbot, ambient-bg
app/page.tsx            → Home (from src/pages/index.html)
app/thesis/page.tsx     → Thesis
app/work/page.tsx       → Work
app/about/page.tsx      → About
app/projects/page.tsx   → Projects
app/thinking/page.tsx   → Thinking (editorial hub)
app/contact/page.tsx    → Contact (two-column form)
components/             → Nav, Footer, ThemeEngine, ChatbotWidget, HeroCanvas, etc.
styles/globals.css      → All theme variables, shared styles
```

## Fonts
Use `next/font/google` for: Bricolage Grotesque (400-800), Inter (300-700), JetBrains Mono (400-500).
Material Symbols Outlined loaded via `<link>` in root layout head.

## Deploy
`vercel` or push to GitHub and connect to Vercel. Domain: richezamor.com. No env vars needed initially.
