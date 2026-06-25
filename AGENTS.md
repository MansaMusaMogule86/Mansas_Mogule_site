# Mansas Moguls — Empire Operating System
**AI Agent Guide** for rapid onboarding and consistent development patterns.

---

## 🎯 Project Overview
- **Type:** Server-side rendered (SSR) web application using [Hono.js](https://hono.dev)
- **Runtime:** Node.js
- **Build Tool:** Vite v5 SSR build
- **Language:** TypeScript
- **Brand Theme:** "Pristine Empire" — Futuristic glassmorphic white with Imperial Gold accents

This is a brand showcase platform for Mansas Moguls with interactive ecosystem maps, division pages, and a simulation terminal interface. **All HTML is server-rendered as strings; there is no client-side React runtime.** Pages are built with Hono routes that call `getPage()` functions returning complete HTML strings.

---

## 🛠️ Essential Commands

| Command | Purpose | Environment |
|---------|---------|-------------|
| `npm run dev` | Build in watch mode for local development | Rebuilds dist on file changes |
| `npm start` | Start the Node server locally | http://localhost:3000 |
| `npm run build` | Build production bundle to `dist/` | — |
| `npm run preview` | Build and run the Node server locally | http://localhost:3000 |
| `npm run deploy` | Build the production bundle | — |

**Development Flow:**
1. Use `npm run dev` for rapid iteration (Vite HMR)
2. Use `pm2 start ecosystem.config.cjs` to test Hono routing locally
3. Always test `npm run build` before deploying

---

## 📂 Project Structure

```
src/
├── index.tsx          # Hono app entry; all route definitions
├── pages.ts           # Page render logic (getPage() factory + division data)
├── layout.ts          # Global CSS, shared HTML layout, design tokens
├── home.ts            # Homepage-specific content (SVG icons, copy)
└── (more pages as needed)

public/
├── static/
│   └── style.css      # Fallback/supplementary CSS
└── (optional static assets)

vite.config.ts        # Vite SSR config targeting Node
ecosystem.config.cjs  # PM2 config to run `dist/index.js`
```

---

## 🎨 Design System (CSS Custom Properties)

All design tokens are defined in [layout.ts](src/layout.ts#L1-L50) under `:root`. **Always use these instead of hardcoding colors or timings:**

### Colors
- **Primary Brand:** `--color-gold: #C79A38` | `--color-gold-light: #F0D597` | `--color-gold-dark: #8B6914`
- **Neutrals:** `--color-indigo: #1E1B4B` | `--color-white: #FFFFFF` | `--color-light: #F8F9FC`
- **Accent:** `--color-violet: #8B5CF6` | `--color-blue: #4338CA` | `--color-emerald: #10B981`

### Effects
- **Glass blur:** `--blur-glass: blur(28px)` | `--blur-glass-sm: blur(12px)`
- **Easing:** `--easing-smooth`, `--easing-spring`, `--easing-ease-in`, `--easing-ease-out`
- **Duration:** `--duration-fast: 150ms` | `--duration-normal: 300ms` | `--duration-slow: 600ms`
- **Shadows:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-inset`, `--shadow-glow`

**Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code/terminal)

---

## 🔄 Page Rendering Pattern

All pages follow this pattern:

### 1. Define Page in `pages.ts`
```typescript
import { layout } from './layout'

export function getPage(slug: string, ...args): string {
  const content = `
    <section class="hero">
      <!-- Page-specific HTML -->
    </section>
  `
  return layout(content, { title: 'Page Title', description: '...' })
}
```

### 2. Add Route in `index.tsx`
```typescript
app.get('/your-route', (c) => c.html(getPage('your-slug')))
```

### 3. Critical Rules
- **Always return a complete HTML string** (wrapped by `layout()`)
- **Use inline SVG** for icons (see `home.ts` for examples)
- **Apply CSS via inline `<style>` or class-based Tailwind alternatives** (no external CSS required at runtime)
- **All user-facing copy must support the "Pristine Empire" brand voice** (see [README.md](README.md))

---

## 🖼️ SVG & Icon Patterns

Icons are generated as SVG functions. **Always follow this pattern:**

```typescript
const miniIcon = (accent: string, path: string): string => `
  <svg viewBox="0 0 64 64" width="42" height="42" fill="none" aria-hidden="true">
    <rect x="9" y="9" width="46" height="46" rx="14" fill="${accent}14" stroke="${accent}" stroke-opacity=".48"/>
    <rect x="16" y="16" width="32" height="32" rx="9" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.22)"/>
    <path d="${path}" stroke="${accent}" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${path}" stroke="#F0D597" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
  </svg>`
```

**Key attributes:**
- Always include `aria-hidden="true"` for decorative SVGs
- Use `stroke` for line icons (not `fill`)
- Double-stroke effect: base color + highlight (`#F0D597` or lighter variant)
- Accept `accent` color parameter for dynamic theming

---

## 📊 Division Data Structure

The `DIVISIONS` array in [pages.ts](src/pages.ts) defines all 6 divisions. Each has:

```typescript
{
  id: 'moguls-ai',                    // URL slug
  n: '01',                            // Display number
  title: 'Moguls AI',                 // Full name
  tag: 'Intelligence at Machine Speed',
  color: '#4338CA',                   // Primary accent
  color2: '#6366F1',                  // Secondary (lighter)
  glow: 'rgba(67,56,202,.28)',        // Glassmorphism glow
  emoji: miniIcon(...),               // Icon SVG
  status: 'ACTIVE',                   // Status badge
  bc: 'badge-green',                  // Badge class
  desc: 'Description...',             // Long description
  services: ['...', '...'],           // Service list
  rev: 'Division focus area',
  clients: 'ACTIVE',
  arr: 'FLAGSHIP'
}
```

**When adding or modifying divisions:** Update this array and ensure corresponding page content exists in `pages.ts`.

---

## 🚀 Deployment Checklist

Before running `npm run deploy`:

1. ✅ Run `npm run build` locally and verify no errors
2. ✅ Test `npm run preview` to check production bundle behavior
3. ✅ Verify all routes are reachable
4. ✅ Ensure environment variables are set for runtime (`PORT`, `HOST`, Supabase vars)

**Rollback:** redeploy from previous commit and restart the process manager.

---

## ⚠️ Common Pitfalls & Solutions

| Issue | Solution |
|-------|----------|
| Dev server shows blank page | Ensure `npm run build` succeeds; Vite might need restart |
| PM2 server won't start | Check `ecosystem.config.cjs` is valid; run `node dist/index.js` directly to debug |
| CSS not applying | Use CSS custom properties from `:root` in `layout.ts`; inline `<style>` tags if dynamic |
| Routes 404 on preview | Check route in `index.tsx` matches URL |
| Build fails with TypeScript error | Run `npx tsc --noEmit` to see full error; most are unused imports or type mismatches |

---

## 🔍 When to Modify Each File

| File | When to Edit | Common Tasks |
|------|--------------|--------------|
| `index.tsx` | Adding new routes or changing HTTP handlers | Add route, change status codes, add middleware |
| `pages.ts` | Adding new pages, modifying division data, page structure | New page, update division info, change layout |
| `layout.ts` | Design system changes, global CSS, shared HTML structure | Add color token, change font, update base HTML |
| `home.ts` | Updating homepage-specific copy or SVG assets | Hero text, new icons, section content |
| `vite.config.ts` | Build configuration changes | Add plugins, change outDir, optimize build |
| `ecosystem.config.cjs` | Changing dev server config | Port, environment, process settings |

---

## 🎯 Voice & Messaging

Maintain the "Pristine Empire" brand voice:
- **Tone:** Authoritative, premium, sophisticated
- **Copy:** Bold, action-oriented, command-focused
- **Metaphors:** "Empire," "Command," "Intelligence," "Systems," "Operations"
- **Visual:** Glassmorphism, gold accents, minimal white space, technical precision

See [README.md](README.md) for full design philosophy and page descriptions.

---

## 📞 Debugging Tips

1. **Check Node output:** `node dist/index.js` shows startup/runtime logs
2. **Inspect built bundle:** inspect `dist/index.js` for server bootstrap output
3. **TypeScript errors:** Run `npx tsc --noEmit` for full diagnostics
4. **CSS issues:** Open DevTools → Inspector, verify inline styles are present
5. **Route issues:** Grep for exact route in `index.tsx`: `grep -n "app.get" src/index.tsx`

---

**Last updated:** 2026-06-25  
**For AI agents:** This file is your primary reference. Always check here before asking the user for context about architecture, design patterns, or build commands.
