import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; 


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        assignment3: path.resolve(__dirname, "assignment3/index3.html"),
        assignment4: path.resolve(__dirname, "assignment4/index4.html"),
        assignment5: path.resolve(__dirname, "assignment5/index5.html"),
      }
    }
  },
  plugins: [react()],
<<<<<<< HEAD
  base: '/remote-assignments/week-4/' // 確保這裡的 repository-name 是你的 GitHub 倉庫名稱
})
=======
  base: '/remote-assignments/week-4/'
})
>>>>>>> gh-page
