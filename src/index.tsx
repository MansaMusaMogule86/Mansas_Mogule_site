import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { createClient } from '@supabase/supabase-js'
import { getPage } from './pages'
import { env, hasSupabaseConfig } from './env'

const app = new Hono()

const supabase = hasSupabaseConfig
  ? createClient(env.supabaseUrl, env.supabaseAnonKey, {
      auth: { persistSession: false },
    })
  : null

// Favicon — inline SVG crown
app.get('/favicon.ico', (c) => {
  c.header('Content-Type', 'image/svg+xml')
  c.header('Cache-Control', 'public, max-age=86400')
  return c.body(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#1E1B4B"/><path d="M7 24L9.5 15L14 21L16 12L18 21L22.5 15L25 24Z" fill="#C79A38"/><rect x="7" y="24" width="18" height="3.5" rx="1.5" fill="#C79A38"/></svg>`)
})

app.get('/', (c) => c.html(getPage('home')))
app.get('/moguls-intelligence-os', (c) => c.html(getPage('intelligence')))
app.get('/divisions', (c) => c.html(getPage('divisions')))
app.get('/divisions/:slug', (c) => {
  const slug = c.req.param('slug')
  return c.html(getPage('division', slug))
})
app.get('/about', (c) => c.html(getPage('about')))
app.get('/contact', (c) => c.html(getPage('contact')))

// Health check endpoint
app.get('/health', (c) =>
  c.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    supabaseConfigured: Boolean(supabase),
  })
)

// Start server
serve({
  fetch: app.fetch,
  port: env.port,
  hostname: env.host,
})

console.log(`✨ Mansas Moguls Empire OS`)
console.log(`🚀 Server running on http://${env.host}:${env.port}`)
console.log(`📡 Environment: ${env.nodeEnv}`)

export default app
