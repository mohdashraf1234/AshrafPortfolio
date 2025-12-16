// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-techs">
                    {project.techs.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-button demo">
                            Demo/Live
                        </a>
                    )}
                    {project.codeLink && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="link-button code">
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;