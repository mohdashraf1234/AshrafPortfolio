// src/components/Header.jsx (UPDATED for ThemeToggle placement)
import React, { useState } from 'react'; 
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    // State to track if the menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Function to close menu on link click (important for mobile UX)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="header">
            <nav className="navbar">
                <a href="#home" className="logo">{personalInfo.name}</a>
                
                {/* 1. CRITICAL: Conditionally apply 'active' class based on state */}
                <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                    {navItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            className="nav-item"
                            onClick={handleLinkClick} // Close menu on click
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* 🚨 NEW: Wrapper for ThemeToggle and Menu Toggle */}
                <div className="header-controls"> 
                    
                    {/* Theme Toggle Button */}
                    <ThemeToggle /> 
                    
                    {/* CRITICAL: Click handler for the toggle icon */}
                    <div className="menu-toggle" onClick={toggleMenu}>
                        {/* Icon changes based on menu state */}
                        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;