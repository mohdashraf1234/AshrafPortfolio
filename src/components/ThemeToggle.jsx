// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // 🚨 Import the hook


const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {/* Display moon icon for light mode, sun icon for dark mode */}
            <i className={theme === 'dark' ? "fas fa-sun" : "fas fa-moon"}></i>
        </button>
    );
};

export default ThemeToggle;