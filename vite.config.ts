import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      '@pages': join(__dirname, 'src/pages'),
      '@utils': join(__dirname, 'src/utils'),
      '@store': join(__dirname, 'src/store')
    }
  },
  server: {
    proxy: {
      '/rest': {
        target: 'http://127.0.0.1:4523/m1/2917686-0-default',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
