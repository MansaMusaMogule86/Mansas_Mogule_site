# Mansas Moguls — Empire Operating System

## Project Overview
- **Name:** Mansas Moguls — Empire Operating System
- **Goal:** Elite corporate web platform translating the Mansas Moguls brand identity into a fully interactive, visually stunning empire command center
- **Design Theme:** "Pristine Empire" — Futuristic glassmorphic white with gold accents
- **Status:** ✅ Active (Development Build)

## 🌐 Live URLs
- **Development:** http://localhost:3000
- **Production:** Deploy via `npm run deploy` to Cloudflare Pages

## 🏗️ Tech Stack
| Layer | Technology |
|---|---|
| Framework | React 19 + React Router v7 |
| Styling | Tailwind CSS v4 + Custom CSS Design System |
| Animations | Framer Motion v12 |
| Build Tool | Vite v6 |
| Deployment | Cloudflare Pages via Wrangler |
| Icons | Lucide React |
| Fonts | Space Grotesk · Inter · JetBrains Mono |

## 📄 Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — Hero + Ecosystem Map + Revenue Engine |
| `/oracle-os` | Oracle OS Showcase — Stacked drawer interface + Simulation Terminal |
| `/divisions` | All 6 Divisions overview |
| `/divisions/moguls-ai` | Moguls AI detail |
| `/divisions/moguls-studio` | Moguls Studio detail |
| `/divisions/moguls-growth` | Moguls Growth detail |
| `/divisions/moguls-academy` | Moguls Academy detail |
| `/divisions/moguls-labs` | Moguls Labs detail |
| `/about` | Team command tree + Empire timeline |
| `/contact` | Terminal-style launch request form |

## 🎨 Design System
- **Colors:** Imperial Gold (#C79A38), Royal Indigo (#1E1B4B), Electric Violet (#8B5CF6), Clinical White (#FFFFFF)
- **Glassmorphism:** `backdrop-filter: blur(20px)` panels with gold borders
- **Typography:** Space Grotesk (headings) · Inter (body) · JetBrains Mono (technical/code)
- **Cursor:** Custom gold ring cursor with hover expand effect
- **Grid:** Persistent coordinate grid background

## ⚡ Key Features
1. **Interactive Ecosystem Map** — 6 clickable division nodes with SVG connection lines and animated particles
2. **Revenue Engine Sankey** — Animated multi-channel revenue diagram showing $1.18M+ ARR breakdown
3. **Oracle OS Stacked Drawers** — 4-layer intelligence system with active state switching and simulation terminal
4. **Simulation Terminal** — Live demo terminal with staged output animation
5. **Custom Cursor** — Gold ring cursor with lag effect and hover expansion
6. **Scroll Animations** — Framer Motion viewport-triggered entrance animations
7. **Terminal Contact Form** — Submission triggers live terminal trace sequence

## 🚀 Development Commands
```bash
npm run build          # Build for production
npm run dev            # Vite dev server (local machine)
pm2 start ecosystem.config.cjs  # Start sandbox server
npm run deploy         # Build + deploy to Cloudflare Pages
```

## 🗂️ Project Structure
```
webapp/
├── src/
│   ├── App.tsx                    # Root app with routing
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Design system CSS tokens
│   ├── components/
│   │   ├── Navigation.tsx         # Sticky navigation header
│   │   ├── Footer.tsx             # Dark footer with status indicators
│   │   ├── HeroSection.tsx        # 3D crown hero with orbital rings
│   │   ├── EcosystemMap.tsx       # Interactive 6-node ecosystem map
│   │   ├── RevenueEngine.tsx      # Animated Sankey revenue diagram
│   │   ├── CustomCursor.tsx       # Gold ring cursor
│   │   └── GridBackground.tsx     # Coordinate grid backdrop
│   └── pages/
│       ├── HomePage.tsx           # Homepage (Hero + Map + Revenue)
│       ├── OracleOSPage.tsx       # Oracle OS showcase
│       ├── DivisionsPage.tsx      # All divisions overview
│       ├── AboutPage.tsx          # Team & timeline
│       ├── ContactPage.tsx        # Terminal contact form
│       └── divisions/
│           └── DivisionDetailPage.tsx  # Dynamic division pages
├── public/
│   ├── _redirects                 # SPA routing for Cloudflare Pages
│   └── _routes.json               # Cloudflare Pages route config
├── ecosystem.config.cjs           # PM2 server config
├── vite.config.ts                 # Vite + React build config
├── wrangler.jsonc                 # Cloudflare Pages config
└── index.html                     # HTML entry with Google Fonts
```

## 📊 Build Output
- **JS Bundle:** ~476 KB (145 KB gzipped)
- **CSS:** ~29 KB (8 KB gzipped)
- **Build Time:** ~6-7 seconds

## 🔜 Next Steps
1. Deploy to Cloudflare Pages (run deployment skill)
2. Add EmailJS/Resend integration for contact form backend
3. Connect real brand assets (logo SVG, division imagery)
4. Add more division data and expand ROI calculators
5. Implement `moguls-ai` ROI calculator terminal widget
6. Performance optimization (code splitting per route)

---
*Built for Mansas Moguls — Discipline · Intelligence · Innovation · Impact*
