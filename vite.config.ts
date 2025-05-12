import path from 'node:path'
import tailwind from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
    vue(),
    vueDevTools(),
    tailwind(),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
