import { defineConfig } from 'vite'
import path from 'path'
import { builtinModules } from 'node:module'

export default defineConfig({
  build: {
    outDir: 'dist',
    target: 'node20',
    emptyOutDir: true,
    ssr: path.resolve(__dirname, 'src/index.tsx'),
    minify: false,
    rollupOptions: {
      external: [
        ...builtinModules,
        ...builtinModules.map((moduleName) => `node:${moduleName}`),
      ],
      output: {
        entryFileNames: 'index.js',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
