import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration - you normally never need to touch this file.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Exposes dev server on local network for mobile access
    port: 5173,
  },
})
