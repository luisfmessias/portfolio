import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isVercel = !!process.env.VERCEL

export default defineConfig({
  base: isVercel ? '/' : '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
