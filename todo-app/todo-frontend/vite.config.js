import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  },
  server: {
    watch: { usePolling: true }
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
  }
})
