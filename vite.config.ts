import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// TODO: add env variables to public vars
// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: './docs'
  },
  plugins: [vue()],
})
