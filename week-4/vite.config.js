import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        assignment3: 'assignment3/index3.html',
        assignment4: 'assignment4/index4.html',
        assignment5: 'assignment5/index5.html',
      }
    }
  },
  plugins: [react()],
  base: '/remote-assignments/week-4/'
})
