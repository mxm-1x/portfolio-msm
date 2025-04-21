import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React and Framer Motion. Features responsive design and smooth animations.',
            tags: ['React', 'Framer Motion', 'CSS'],
            github: 'https://github.com/yourusername/portfolio',
            demo: 'https://yourportfolio.com',
            image: 'https://via.placeholder.com/600x300/0a192f/64ffda?text=Portfolio+Website'
        },
        {
            id: 2,
            title: 'Task Manager',
            description: 'A full-stack task management application with user authentication, task creation, and categorization features.',
            tags: ['React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/yourusername/task-manager',
            demo: 'https://yourtaskmanager.com',
            image: 'https://via.placeholder.com/600x300/0a192f/64ffda?text=Task+Manager'
        },
        {
            id: 3,
            title: 'Weather App',
            description: 'A weather application that shows current weather and forecasts based on user location or search.',
            tags: ['JavaScript', 'API', 'CSS'],
            github: 'https://github.com/yourusername/weather-app',
            demo: 'https://yourweatherapp.com',
            image: 'https://via.placeholder.com/600x300/0a192f/64ffda?text=Weather+App'
        },
        {
            id: 4,
            title: 'Data Analysis of Airline',
            description: 'Tech Stacks: Python, Pandas, PowerPoint.  British Airways Data Science Job Simulation on Forage - March 2025 Completed a simulation focussing on how data science is a critical component of British Airways success Scraped and analysed customer review data to uncover findings Built a predictive model to understand factors that influence buying behavior. ',
            tags: ['Python', "excel", 'pandas', 'Matplotlib', 'Seaborn', 'PowerPoint',],
            github: 'https://colab.research.google.com/drive/13j5uMtTQ4vjr4saJztbukbN4QEQzWKnE?usp=sharing',
            demo: 'https://colab.research.google.com/drive/13j5uMtTQ4vjr4saJztbukbN4QEQzWKnE?usp=sharing',
        }
    ];

    return (
        <section id="projects" className="section-wrapper">
            <h2 className="section-title">// import projects from './data'</h2>

            <div className="package-json">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="git-branch"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: project.id * 0.2 }}
                    >
                        <div className="git-commit">
                            <picture>
                                <source
                                    media="(max-width: 576px)"
                                    srcSet={`https://via.placeholder.com/400x200/0a192f/64ffda?text=${project.title.replace(/\s+/g, '+')}`}
                                />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="repo-image"
                                    style={{
                                        width: '100%',
                                        borderRadius: '4px',
                                        marginBottom: '1rem',
                                        maxHeight: '300px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </picture>

                            <div className="commit-message">
                                <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)' }}>{project.title}</h3>
                                <p style={{ fontSize: 'clamp(0.9rem, 4vw, 1rem)' }}>{project.description}</p>

                                <div className="dependency-list">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="npm-package"
                                            style={{ fontSize: 'clamp(0.7rem, 3vw, 0.8rem)' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="merge-actions">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="pull-request">
                                        <FaGithub /> <span>Code</span>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="fork">
                                        <FaExternalLinkAlt /> <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects; 