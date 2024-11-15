import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/sarafan-frontend/',
  build: {
    outDir: './docs'
  },
  plugins: [vue()],
})
