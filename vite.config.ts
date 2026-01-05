import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs', // 🔥 ISSO RESOLVE DEFINITIVAMENTE
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
