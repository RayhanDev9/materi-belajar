import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'copy-404',
      closeBundle() {
        try {
          copyFileSync(
            resolve(fileURLToPath(new URL('.', import.meta.url)), 'dist/index.html'),
            resolve(fileURLToPath(new URL('.', import.meta.url)), 'dist/404.html')
          )
        } catch {}
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/e-commerce-vue.js/',
  
})
