import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
// @ts-ignore this is reported on github as bug (cannot find type)
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint(), ViteImageOptimizer()],
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
