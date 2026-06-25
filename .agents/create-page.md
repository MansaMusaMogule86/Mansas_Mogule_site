# Skill: Create New Page

**Purpose:** Automate creation of new pages following the Mansas Moguls SSR pattern.

**When to use:** User asks to "add a new page," "create a [page name] page," or "add a route for [page description]"

---

## Workflow

### 1. Gather Requirements
Ask the user:
- **Page slug/URL path** (e.g., `/features`, `/pricing`)
- **Page title** (for `<title>` tag)
- **Page description** (for meta description)
- **Content overview** (what should appear on the page)
- **Any special components?** (SVG icons, divisions reference, etc.)

### 2. Create Page Function in `pages.ts`
- Add new condition in `getPage()` function: `if (slug === 'your-slug')`
- Build complete HTML content as template string
- Return wrapped with `layout(content, { title: '...', description: '...' })`
- Use CSS custom properties from `:root` (no hardcoded colors)
- Include `aria-hidden="true"` on decorative SVGs

### 3. Add Route in `index.tsx`
- Add new route: `app.get('/your-path', (c) => c.html(getPage('your-slug')))`
- If dynamic (e.g., `/divisions/:slug`), pass param to `getPage()`

### 4. Test
- Run `npm run build` to verify no errors
- Run `npm run preview` to test at http://localhost:8787/your-path
- Verify page displays correctly and styling matches design system

---

## Code Patterns to Follow

### Basic Page
```typescript
// In pages.ts
if (slug === 'features') {
  const content = `
    <section class="page-container">
      <h1 style="color: var(--color-indigo); font-family: 'Space Grotesk';">Our Features</h1>
      <p style="color: var(--color-text-secondary);">Feature description...</p>
    </section>
  `
  return layout(content, { 
    title: 'Features — Mansas Moguls',
    description: 'Discover our platform features'
  })
}

// In index.tsx
app.get('/features', (c) => c.html(getPage('features')))
```

### Page with SVG Icon
```typescript
const featureIcon = (accent: string, path: string): string => `
  <svg viewBox="0 0 64 64" width="48" height="48" fill="none" aria-hidden="true">
    <rect x="9" y="9" width="46" height="46" rx="14" fill="${accent}14" stroke="${accent}" stroke-opacity=".48"/>
    <path d="${path}" stroke="${accent}" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${path}" stroke="#F0D597" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
  </svg>`

const content = `
  <section>
    ${featureIcon('#4338CA', 'M20 32h24M32 20v24M20 32l24-24M20 32l24 24')}
    <h2>Feature Name</h2>
  </section>
`
```

### Page Using Division Data
```typescript
if (slug === 'divisions') {
  let content = '<section class="divisions-grid">'
  DIVISIONS.forEach(div => {
    content += `
      <article style="border: 1px solid ${div.color}; padding: 20px;">
        ${div.emoji}
        <h3>${div.title}</h3>
        <p>${div.desc}</p>
      </article>
    `
  })
  content += '</section>'
  return layout(content, { title: 'Divisions', description: 'All divisions' })
}
```

---

## Key Rules

✅ **DO:**
- Use CSS custom properties: `color: var(--color-gold)`
- Use inline `<style>` tags if you need dynamic styling
- Wrap all decorative SVGs with `aria-hidden="true"`
- Return complete HTML wrapped by `layout()`
- Test with `npm run build` before preview

❌ **DON'T:**
- Hardcode colors like `color: #C79A38`
- Create external CSS files
- Mix Tailwind classes (this isn't a Tailwind project)
- Use JavaScript or React components
- Forget to add the route in `index.tsx`

---

## Example: Full Page Creation

**Request:** "Create a /blog page with a list of sample posts"

**Steps:**

1. **Prompt user for content details** (if not provided)
2. **Edit pages.ts:**
```typescript
if (slug === 'blog') {
  const posts = [
    { title: 'Post 1', date: '2026-06-25', excerpt: 'Excerpt...' },
    { title: 'Post 2', date: '2026-06-24', excerpt: 'Excerpt...' }
  ]
  let content = '<section class="blog-container" style="max-width: 800px; margin: 0 auto; padding: 40px 20px;">'
  posts.forEach(post => {
    content += `
      <article style="padding: 20px; border-bottom: 1px solid var(--color-border); margin-bottom: 20px;">
        <h2 style="color: var(--color-indigo); font-family: 'Space Grotesk';">${post.title}</h2>
        <time style="color: var(--color-text-tertiary); font-size: 14px;">${post.date}</time>
        <p style="color: var(--color-text-secondary); margin-top: 10px;">${post.excerpt}</p>
      </article>
    `
  })
  content += '</section>'
  return layout(content, { title: 'Blog — Mansas Moguls', description: 'Latest insights and updates' })
}
```

3. **Edit index.tsx:**
```typescript
app.get('/blog', (c) => c.html(getPage('blog')))
```

4. **Test:**
```bash
npm run build
npm run preview  # Visit http://localhost:8787/blog
```

---

**Last updated:** 2026-06-25
