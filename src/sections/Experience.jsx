// src/sections/Experience.jsx
import React from 'react';
import { experienceData, projectImageAssets } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                
                {/* 1. Experience Timeline */}
                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <h3 className="job-title">{item.title}</h3>
                            <p className="company-info">{item.company}, {item.location}</p>
                            <p className="duration">{item.duration}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* 2. Certificates and Logos Section */}
                <div className="certificates-logos-container">
                    
                    <h2 className="subsection-title">Certificates</h2>
                    <div className="certificates-grid">
                        {projectImageAssets.certificates.map((imgSrc, index) => (
                            <img 
                                key={`cert-${index}`} 
                                src={imgSrc} 
                                alt={`Certificate ${index + 1}`} 
                                className="certificate-img"
                            />
                        ))}
                    </div>

                    <h2 className="subsection-title">Affiliations / Images</h2>
                    <div className="logos-grid">
                        {projectImageAssets.companyLogos.map((imgSrc, index) => (
                            <img 
                                key={`logo-${index}`} 
                                src={imgSrc} 
                                alt={`Company Logo ${index + 1}`} 
                                className="company-logo-img"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;