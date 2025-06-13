import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          emailjs: ['@emailjs/browser']
        }
      }
    },
    sourcemap: false,
    minify: 'terser', // Use terser for minification
    target: 'es2015'
  },
  server: {
    port: 3000
  }
})
