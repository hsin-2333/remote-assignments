import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "week-4/index.html"),
        assignment3: resolve(__dirname, "week-4/assignment3/index3.html"),
        assignment4: resolve(__dirname, "week-4/assignment4/index4.html"),
        assignment5: resolve(__dirname, "week-4/assignment5/index5.html"),
      }
    }
  },
  plugins: [react()],
  base: '/remote-assignments/'
})

process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'