import build from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [build()],
    build: { outDir: 'dist' }
  }
})
