// src/sections/About.jsx
import React from 'react';
import { aboutContent } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="about-text">{aboutContent}</p>
            </div>
        </section>
    );
};

export default About;