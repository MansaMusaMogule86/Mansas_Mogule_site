import { Hono } from 'hono'
import { getPage } from './pages'

const app = new Hono()

// Favicon — inline SVG crown
app.get('/favicon.ico', (c) => {
  c.header('Content-Type', 'image/svg+xml')
  c.header('Cache-Control', 'public, max-age=86400')
  return c.body(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1E1B4B"/><path d="M7 24L9.5 15L14 21L16 12L18 21L22.5 15L25 24Z" fill="#C79A38"/><rect x="7" y="24" width="18" height="3.5" rx="1.5" fill="#C79A38"/></svg>`)
})

app.get('/', (c) => c.html(getPage('home')))
app.get('/oracle-os', (c) => c.html(getPage('oracle')))
app.get('/divisions', (c) => c.html(getPage('divisions')))
app.get('/divisions/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.html(getPage('division', slug))
})
app.get('/about', (c) => c.html(getPage('about')))
app.get('/contact', (c) => c.html(getPage('contact')))

export default app
