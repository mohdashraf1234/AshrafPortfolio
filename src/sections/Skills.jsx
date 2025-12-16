// src/sections/Skills.jsx (UPDATED with Iconography and Grouping)
import React from 'react';
import { skillData } from '../data/portfolioData'; // 🚨 Use new skillData

// Helper component for rendering a group of skills
const SkillGroup = ({ title, skills }) => (
    <div className="skill-group">
        <h3 className="subsection-title">{title}</h3>
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    {/* 🚨 Render the icon using the class from portfolioData */}
                    <i className={`${skill.iconClass} skill-icon`} aria-hidden="true"></i>
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                
                {/* 🚨 Render each skill group separately */}
                <SkillGroup title="Frontend" skills={skillData.frontend} />
                <SkillGroup title="Backend & Core" skills={skillData.backend} />
                <SkillGroup title="Databases" skills={skillData.databases} />
                <SkillGroup title="Tools & Platforms" skills={skillData.tools} />
            </div>
        </section>
    );
};

export default Skills;