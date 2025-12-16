// src/context/ThemeContext.jsx (UPDATED: Setting Default Theme to 'dark')

import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // 🚨 FIX HERE: Set initial state to 'dark' by default.
    // We remove the system preference check for a hard dark default.
   const [theme, setTheme] = useState('dark'); 

    useEffect(() => {
        // Apply the current theme class to the body element
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);