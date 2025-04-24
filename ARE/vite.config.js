import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {'process.env': process.env},
  server: {
    proxy: {
      '/api': {
        target: 'https://aitogearserver.vercel.app',  // Replace with your Vercel API URL
        changeOrigin: true,  // This avoids issues with different origins
        rewrite: (path) => path.replace(/^\/api/, ''), // This rewrites the `/api` prefix in the URL
      },
    },
  },
})