// src/sections/Projects.jsx
import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;