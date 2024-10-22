import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/employee': {
        target: 'http://localhost:3000', // Your backend API URL
        changeOrigin: true,
        secure: false,
      }
    }
  }
})


