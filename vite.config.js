import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://currate.ru/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),

      },
    },
  },
  plugins: [vue()]
})
