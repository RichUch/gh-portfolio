import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  
  base: '/gh-portfolio/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})