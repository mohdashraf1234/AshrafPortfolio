// src/sections/Footer.jsx
import React from 'react';
// Make sure to import socialLinks:
import { personalInfo, socialLinks } from '../data/portfolioData'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* 🚨 ADDED: Social Links in Footer */}
                    <div className="footer-social">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                title={link.name}
                            >
                                <i className={link.iconClass}></i>
                            </a>
                        ))}
                    </div>

                    {/* Copyright and other info */}
                    <p className="footer-text">
                        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;