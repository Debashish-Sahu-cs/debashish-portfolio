import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const isNetlify = process.env.NETLIFY === 'true'
export default defineConfig({
  plugins: [react()],
  base: isNetlify ? '/' : '/debashish-portfolio/'
})
