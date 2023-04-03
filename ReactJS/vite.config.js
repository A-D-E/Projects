import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: true
  },
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components',
      'utils': '/src/utils',
      'layout': '/src/layout',
      'context': '/src/context',
      'theme': '/src/theme',
    }
  }
})
