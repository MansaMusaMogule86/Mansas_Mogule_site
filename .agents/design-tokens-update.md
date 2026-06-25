# Skill: Update Design Tokens & Colors

**Purpose:** Safely update color system, typography, animations, and other design tokens across the entire codebase.

**When to use:** User asks to "change the gold color," "update brand colors," "modify design tokens," "adjust animations," or "rebrand colors"

---

## Workflow

### 1. Identify What's Changing
Ask the user to specify:
- **Which tokens** (colors, fonts, durations, shadows, blur values, etc.)
- **From what to what** (old value → new value)
- **Scope** (all pages, specific divisions, hover states, etc.)

### 2. Update Design System in `layout.ts`
The `:root` CSS section (lines 1–50) is the single source of truth.

**Key sections:**
- **Colors:** `--color-gold`, `--color-indigo`, `--color-violet`, `--color-blue`, `--color-emerald`, etc.
- **Effects:** `--blur-glass`, `--saturate-glass`
- **Timing:** `--duration-fast`, `--duration-normal`, `--duration-slow`, `--easing-smooth`, etc.
- **Shadows:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-glow`, etc.

Update only the `:root` variables; all pages reference these.

### 3. Check for Hardcoded Values (SVGs)
- **SVG icons** in `pages.ts` and `home.ts` may have hardcoded hex colors (e.g., `stroke="#F0D597"`)
- Search for hardcoded hex values: `grep -r "#[0-9A-F]\{6\}" src/` (on macOS/Linux)
- Update division colors in `DIVISIONS` array if changing division-specific accent colors
- Update icon functions that use hardcoded accents

### 4. Update Division Data (if colors change)
If a division's accent color is changing, update in `DIVISIONS` array in `pages.ts`:
```typescript
{
  id: 'moguls-ai',
  color: '#NEW_COLOR',        // Primary accent
  color2: '#NEW_LIGHTER_COLOR',  // Secondary
  glow: 'rgba(R,G,B,.28)',    // Glassmorphism glow
  // ... rest of division data
}
```

### 5. Rebuild and Test
```bash
npm run build
npm run preview  # Test all pages at http://localhost:8787
```

Verify:
- All pages display correct colors
- SVG icons use new accent colors
- Glass blur effects still look good
- No console errors

---

## Common Scenarios

### Scenario 1: Change Primary Gold Color
**User:** "Change the main gold from #C79A38 to #D4A574"

**Steps:**
1. Edit `layout.ts` `:root`:
   ```css
   --color-gold: #D4A574;
   --color-gold-light: #E8C8A0;        /* Recalc lighter shade */
   --color-gold-dark: #8B6914;         /* Recalc darker shade */
   ```

2. Search `pages.ts` and `home.ts` for hardcoded `#C79A38`, `#F0D597` (highlight color), `#8B6914`

3. Update division emoji() functions that use gold accent

4. Build and test all pages

### Scenario 2: Change a Division's Theme Color
**User:** "Make Moguls AI more violet: change from blue (#4338CA) to deep purple"

**Steps:**
1. In `pages.ts` DIVISIONS array, find moguls-ai entry:
   ```typescript
   color: '#7C3AED',            // New color
   color2: '#A78BFA',           // Lighter variant
   glow: 'rgba(124,58,237,.28)', // Update glow
   ```

2. Find the emoji/icon function for moguls-ai and update colors:
   ```typescript
   emoji: miniIcon('#A78BFA', 'M...path...')
   ```

3. Build and test `/divisions/moguls-ai` page

### Scenario 3: Update Animation Durations
**User:** "Make all animations 50% faster"

**Steps:**
1. Edit `layout.ts` `:root`:
   ```css
   --duration-fast: 75ms;       /* Was 150ms */
   --duration-normal: 150ms;    /* Was 300ms */
   --duration-slow: 300ms;      /* Was 600ms */
   --duration-slower: 500ms;    /* Was 1s */
   ```

2. No other files need changes; all animations use these variables

3. Build and test pages with animations

### Scenario 4: Change Global Font
**User:** "Use Outfit instead of Space Grotesk for headings"

**Steps:**
1. Edit `layout.ts` global imports:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&...');
   ```

2. Update font-family references (or add new `:root` variable if needed):
   ```css
   /* Add to :root or update inline styles using Space Grotesk */
   ```

3. Search `pages.ts`, `home.ts` for inline `font-family: 'Space Grotesk'` and replace

4. Build and test

---

## Token Reference

### Color System
```css
:root {
  /* Primary Brand */
  --color-gold: #C79A38;
  --color-gold-light: #F0D597;
  --color-gold-dark: #8B6914;

  /* Neutrals */
  --color-indigo: #1E1B4B;          /* Darkest bg */
  --color-indigo-light: #0E0D2E;    /* Darker variant */
  --color-white: #FFFFFF;
  --color-light: #F8F9FC;           /* Light bg */

  /* Accent Colors (Division Themes) */
  --color-violet: #8B5CF6;
  --color-blue: #4338CA;
  --color-emerald: #10B981;
  --color-amber: #F59E0B;
  --color-pink: #EC4899;

  /* Text Colors */
  --color-text-primary: #0F172A;
  --color-text-secondary: #64748B;
  --color-text-tertiary: #94A3B8;

  /* Utility */
  --color-border: #CBD5E1;
  --color-surface: #F0F3FB;
}
```

### Effect System
```css
:root {
  /* Glass Effects */
  --blur-glass: blur(28px);
  --blur-glass-sm: blur(12px);
  --saturate-glass: saturate(200%);

  /* Timing */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
  --duration-slower: 1s;

  /* Easing */
  --easing-smooth: cubic-bezier(.25,.46,.45,.94);
  --easing-spring: cubic-bezier(.34,1.56,.64,1);
  --easing-ease-in: cubic-bezier(.4,0,1,1);
  --easing-ease-out: cubic-bezier(0,0,.2,1);

  /* Shadows */
  --shadow-sm: 0 4px 20px rgba(0,0,0,.055);
  --shadow-md: 0 8px 40px rgba(31,38,135,.06);
  --shadow-lg: 0 20px 60px rgba(31,38,135,.1);
  --shadow-xl: 0 40px 100px rgba(31,38,135,.08);
  --shadow-inset: 0 1px 0 rgba(255,255,255,.98) inset;
  --shadow-glow: 0 0 80px rgba(67,56,202,.5);
}
```

---

## Checklist Before Deploying

✅ Updated `:root` CSS in `layout.ts`
✅ Searched for hardcoded hex colors in `pages.ts`, `home.ts`, `index.tsx`
✅ Updated `DIVISIONS` array colors if applicable
✅ Updated SVG icon functions if using division colors
✅ Ran `npm run build` with no errors
✅ Ran `npm run preview` and tested all pages visually
✅ Verified new colors/tokens across responsive breakpoints
✅ Committed changes with descriptive message

---

## Search Commands

### Find Hardcoded Colors
```bash
# On macOS/Linux:
grep -r "#[0-9A-F]\{6\}" src/

# Find specific color:
grep -r "#C79A38" src/   # Find all gold color instances
grep -r "#F0D597" src/   # Find all highlight color instances
```

### Find CSS Custom Property Usage
```bash
grep -r "var(--color" src/   # See all token usage
grep -r "var(--duration" src/
```

---

**Last updated:** 2026-06-25
