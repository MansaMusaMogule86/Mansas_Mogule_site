# Mansas Moguls — Empire Operating System

## Project Overview
- Name: Mansas Moguls Empire OS
- Goal: premium, server-rendered brand platform for the Mansas Moguls ecosystem
- Theme: Pristine Empire (glassmorphism, ivory, indigo, imperial gold)
- Runtime: Node.js (Hono)

## Architecture
- Server framework: Hono
- Rendering model: SSR string templates (no React runtime)
- Build tool: Vite SSR bundle
- Entry output: `dist/index.js`

## Development Commands
```bash
npm install
npm run dev      # Build in watch mode
npm run build    # Build SSR bundle to dist/
npm start        # Run Node server from dist/index.js
npm run preview  # Build + start
npm run deploy   # Build-only deploy step
```

## Routes
| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/moguls-intelligence-os` | Moguls Intelligence OS showcase |
| `/divisions` | Divisions overview |
| `/divisions/:slug` | Division detail page |
| `/about` | About page |
| `/contact` | Contact page |
| `/health` | Health check JSON endpoint |

## Project Structure
```text
src/
	index.tsx        # Hono app + routes + Node server bootstrap
	pages.ts         # page router + page HTML factories
	home.ts          # homepage composition
	layout.ts        # global CSS tokens + HTML layout wrapper
public/
	static/style.css
ecosystem.config.cjs
vite.config.ts
package.json
```

## Notes
- Always use CSS custom properties defined in `src/layout.ts` for colors/timing.
- Decorative SVGs should remain `aria-hidden="true"`.
- Build target is Node SSR, not browser app bundling.

---
Built for Mansas Moguls - Discipline, Intelligence, Innovation, Impact
