import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLightbulb, FaTwitter } from 'react-icons/fa';

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
            >
                Malhar Mahanwar
            </motion.h1>

            <motion.h2
                className="process-id"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {'> Front-end developer'}
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{ marginTop: '3rem', width: '100%' }}
            >
                <p className="inline-comment" style={{ marginTop: '1rem' }}>// my e-mail</p>
                <div className="const-declaration">
                    <span className="keyword">const</span>
                    <span className="variable">email</span>
                    <span className="operator">=</span>
                    <span className="string">"malharmahanor@gmail.com"</span>
                    <span>;</span>
                </div>

                <p className="inline-comment" style={{ marginTop: '1rem' }}>// you can also see it on my Github page</p>
                <a href='https://github.com/mxm-1x'><div className="const-declaration">
                    <span className="keyword">const</span>
                    <span className="variable">githubLink</span>
                    <span className="operator">=</span>
                    <span className="string">"https://github.com/mxm-1x"</span>
                    <span>;</span>
                </div></a>



                <p className="inline-comment" style={{ marginTop: '1rem' }}>// you can check my Linkedin Page</p>
                <a href='https://www.linkedin.com/in/malharmahanwar/'>
                    <div className="const-declaration">
                        <span className="keyword">const</span>
                        <span className="variable">linkedinPage</span>
                        <span className="operator">=</span>
                        <span className="string">"https://www.linkedin.com/in/malharmahanwar/"</span>
                        <span>;</span>

                    </div>
                </a>
            </motion.div>

            <motion.div
                className="git-remote"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{ marginTop: '3rem' }}
            >
                <p>find me in:</p>
                <a href="https://leetcode.com/u/mxm-1x/" target="_blank" rel="noopener noreferrer">
                    <h5>Leetcode</h5>
                </a>
                <a href="https://github.com/mxm-1x" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero; 