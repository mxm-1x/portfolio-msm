import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage('Message sent successfully!');
            formRef.current.reset();
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSubmitMessage('');
            }, 3000);
        }, 1500);
    };

    const socialLinks = [
        { id: 1, icon: <FaGithub size={25} />, url: 'https://github.com/malharmahanor', label: 'GitHub' },
        { id: 2, icon: <FaLinkedin size={25} />, url: 'https://linkedin.com/in/malhar-mahanor', label: 'LinkedIn' },
        { id: 3, icon: <FaTwitter size={25} />, url: 'https://twitter.com/malharmahanor', label: 'Twitter' },
        { id: 4, icon: <FaEnvelope size={25} />, url: 'mailto:malhar.mahanor@example.com', label: 'Email' }
    ];

    return (
        <section id="contact" className="section-wrapper">
            <h2 className="section-title">// process.stdout.write('Contact Me')</h2>

            <div className="runtime-environment">
                <motion.div
                    className="node-module"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%' }}
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="async-function">
                        <div className="variable-declaration">
                            <label htmlFor="name" className="const-keyword">const name =</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="string-literal"
                                placeholder="'Your Name'"
                                style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)' }}
                            />
                        </div>

                        <div className="variable-declaration">
                            <label htmlFor="email" className="const-keyword">const email =</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="string-literal"
                                placeholder="'your.email@example.com'"
                                style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)' }}
                            />
                        </div>

                        <div className="variable-declaration">
                            <label htmlFor="message" className="const-keyword">const message =</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="template-literal"
                                placeholder={"`Your message here...`"}
                                rows="5"
                                style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)' }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="callback-function"
                            disabled={isSubmitting}
                            style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)' }}
                        >
                            {isSubmitting ? 'await sendMessage()...' : 'sendMessage()'}
                        </button>

                        {submitMessage && (
                            <motion.p
                                className="console-log"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {`// ${submitMessage}`}
                            </motion.p>
                        )}
                    </form>
                </motion.div>

                <motion.div
                    className="exports"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ width: '100%' }}
                >
                    <h3 className="export-default" style={{ fontSize: 'clamp(1rem, 5vw, 1.2rem)' }}>module.exports = &#123;</h3>
                    <div className="module-exports">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="exported-property"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)' }}
                            >
                                <span className="property-name">{link.label}:</span> {link.icon}
                            </motion.a>
                        ))}
                    </div>
                    <h3 className="export-default" style={{ fontSize: 'clamp(1rem, 5vw, 1.2rem)' }}>&#125;</h3>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 