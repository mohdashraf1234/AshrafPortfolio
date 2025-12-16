// src/sections/Contact.jsx
import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

// Your Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = "0b01665d-e96f-49c0-8b51-3b0d0a5f0c92";

const Contact = () => {
    // State to manage form inputs (optional but good practice)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState(''); // To display success or error messages

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('Message Sent Successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
            } else {
                setStatus(`Submission Failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    // Function for copying information
    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        alert(`${type} copied to clipboard!`);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                
                <div className="contact-grid">
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Note: The 'name' attribute is crucial for Web3Forms */}
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="text" 
                            name="subject"
                            placeholder="Subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required 
                        />
                        <textarea 
                            name="message"
                            placeholder="Message" 
                            rows="6" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        
                        <button type="submit" className="button primary">Send Message</button>
                        
                        {/* Display Submission Status */}
                        {status && <p className="form-status" style={{ marginTop: '1rem', color: status.includes('Success') ? 'var(--color-accent)' : 'red' }}>{status}</p>}
                    </form>

                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="info-item">
                            <strong>Email:</strong> {personalInfo.email}
                        </div>
                        <div className="info-item">
                            <strong>Phone:</strong> {personalInfo.phone}
                        </div>
                        <div className="info-item">
                            <strong>Location:</strong> {personalInfo.location}
                        </div>
                        <div className="info-item">
                            <strong>Position:</strong> {personalInfo.title}
                        </div>
                        
                        <button 
                            className="button secondary copy-button"
                            onClick={() => copyToClipboard(personalInfo.email, 'Email')}
                        >
                            Copy Email
                        </button>
                        <button 
                            className="button secondary copy-button"
                            onClick={() => copyToClipboard(personalInfo.phone, 'Phone')}
                        >
                            Copy Phone
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;