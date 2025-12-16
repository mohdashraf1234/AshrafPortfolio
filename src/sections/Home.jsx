// src/sections/Home.jsx (CLEANED UP & FINALIZED)

import React, { useEffect, useRef } from 'react'; 
import Typed from 'typed.js';
// 🚨 FIXED: Combined imports into a single line
import { personalInfo, socialLinks } from '../data/portfolioData'; 
import profileImage from '../assets/AshrafImg.jpg';

const Home = () => {
    // 1. Create a Ref to attach to the span element
    const el = useRef(null);

    // 2. Use useEffect to initialize Typed.js once the component mounts
    useEffect(() => {
        // Ensure the element exists before initializing
        if (el.current) {
            const typed = new Typed(el.current, {
                strings: [
                    "Java Full Stack Developer",
                    "Spring Boot Specialist",
                    "Web Application Architect",
                    "Problem Solver"
                ],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                // Add an option to hide the cursor if the CSS cursor is used
                // showCursor: false, 
            });

            // Clean up the Typed instance when the component unmounts
            return () => {
                typed.destroy();
            };
        }
    }, []); // Empty dependency array ensures it runs only on mount/unmount

    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    {/* Profile Image */}
                    <img src={personalInfo.profileImg} alt={personalInfo.name} className="profile-img" /> 
                    
                    <h1>Hi, I'm {personalInfo.name}</h1>
                    
                    {/* Updated H2 Structure to attach the Ref for Typed.js */}
                    <h2 className="typed-text-container">
                        A &nbsp;
                        <span 
                            className="typed-text-output" 
                            ref={el} // Attach the Ref here!
                        >
                            {/* The initial content is empty, Typed.js will fill this span */}
                        </span>
                    </h2>

                    <p className="hero-description">
                        I build scalable and maintainable enterprise applications, bridging robust Java backend services with engaging frontend experiences.
                    </p>
                    
                    <div className="hero-buttons">
                        <a 
                            href={personalInfo.cvLink} 
                            className="button primary" 
                            download="Mohd_Ashraf_CV.pdf" 
                        >
                            Download CV
                        </a>
                        <a href="#contact" className="button secondary">
                            Contact Info
                        </a>
                    </div>

                    {/* 🚨 ADDED: Social Links below buttons */}
                    <div className="hero-social-links">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title={link.name}
                            >
                                <i className={link.iconClass}></i>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;