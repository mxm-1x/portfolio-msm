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
        { id: 1, icon: <FaGithub />, url: 'https://github.com/mxm-1x', label: 'GitHub' },
        { id: 2, icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/malharmahanwar/', label: 'LinkedIn' },
        { id: 3, icon: <FaEnvelope />, url: 'mailto:malharmahanor@gmail.com', label: 'Email' }
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
                                placeholder="`Your message here...`"
                                rows="5"
                            />
                        </div>

                        <button
                            type="submit"
                            className="callback-function"
                            disabled={isSubmitting}
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
                >
                    <h3 className="export-default">module.exports = {`{`}</h3>
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
                            >
                                <span className="property-name">{link.label}:</span> {link.icon}
                            </motion.a>
                        ))}
                    </div>
                    <h3 className="export-default">{`}`}</h3>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 