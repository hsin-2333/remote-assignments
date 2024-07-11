import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/remote-assignments/week-4/' // 確保這裡的 repository-name 是你的 GitHub 倉庫名稱
})