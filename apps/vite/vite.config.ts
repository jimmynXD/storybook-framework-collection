import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // Folder(s) to scan for vue components and generate routes. Can be a string, or
      // an object, or an array of those. Each option allows to override global options.
      // like exclude, extensions, etc.
      routesFolder: 'src/pages',
    }),
    vue(),
  ],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
