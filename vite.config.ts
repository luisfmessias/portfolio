import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
