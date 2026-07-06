import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Local dev serves at "/"; production build targets the GitHub Pages subpath.
  base: command === 'build' ? '/crusoe-if-empty-states/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
}))
