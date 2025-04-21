import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="core-dump">
            <motion.p
                className="inline-comment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Hi all. I am
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
            >
                Malhar Mahanor
            </motion.h1>

            <motion.h2
                className="process-id"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)' }}
            >
                {'> Front-end developer'}
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ marginTop: '3rem', width: '100%', fontSize: 'clamp(0.8rem, 4vw, 1rem)' }}
            >
                <p className="inline-comment" style={{ marginTop: '1rem' }}>// my e-mail</p>
                <div className="const-declaration">
                    <span className="keyword">const</span>
                    <span className="variable">email</span>
                    <span className="operator">=</span>
                    <span className="string">"malhar.mahanor@example.com"</span>
                    <span>;</span>
                </div>

                <p className="inline-comment" style={{ marginTop: '1rem' }}>// you can also see it on my Github page</p>
                <div className="const-declaration">
                    <span className="keyword">const</span>
                    <span className="variable">githubLink</span>
                    <span className="operator">=</span>
                    <span className="string">"https://github.com/malharmahanor"</span>
                    <span>;</span>
                </div>

                <p className="inline-comment" style={{ marginTop: '1rem' }}>// you can also see my project on Behance</p>
                <div className="const-declaration">
                    <span className="keyword">const</span>
                    <span className="variable">behanceLink</span>
                    <span className="operator">=</span>
                    <span className="string">"https://www.behance.net/malharmahanor"</span>
                    <span>;</span>
                </div>

                <p className="inline-comment" style={{ marginTop: '1rem' }}>// you can check my Linkedin Page</p>
                <div className="const-declaration">
                    <span className="keyword">const</span>
                    <span className="variable">linkedinPage</span>
                    <span className="operator">=</span>
                    <span className="string">"https://www.linkedin.com/in/malhar-mahanor"</span>
                    <span>;</span>
                </div>
            </motion.div>

            <motion.div
                className="git-remote"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{ marginTop: '3rem' }}
            >
                <p>find me in:</p>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero; 