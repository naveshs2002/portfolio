import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio', // set to '/<repo-name>/' if deploying to GitHub Pages project site without custom domain
})
