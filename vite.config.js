import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 🚨 CRITICAL: Replace 'your-repository-name' with the actual name of your GitHub repository
const repoName = 'AshrafPortfolio'; 

// https://vitejs.dev/config/
export default defineConfig({
  
  // 🚨 NEW: Define the base path for GitHub Pages deployment
  base: `/${repoName}/`, 
  
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})