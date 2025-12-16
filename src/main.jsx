// src/main.jsx (UPDATED and FIXED)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'; // Correctly imported

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 🚨 THE FIX: Must wrap <App /> with ThemeProvider */}
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </StrictMode>,
)