import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Habit Tracker',
            description: `Tech Stacks: React JS, Tailwind, Redux Toolkit. 
            Description: Add habits, tap ➕ daily, and watch your streaks grow. Stay consistent and turn actions into lasting habits! 
            Features: Custom Habits, Dark Mode,`,
            tags: ['React', 'Redux', 'CSS'],
            github: 'https://github.com/mxm-1x/habitTrackerRedux',
            demo: 'https://habit-app-tracker.netlify.app/',
        },
        {
            id: 2,
            title: 'SkyFy',
            description: 'Tech Stacks: React-Native, Axios, Maps. Description: Track the ISS in real-time and stay updated on the 5 closest meteors approaching Earth. With live updates and stunning visuals, explore space like never before. Never miss a meteor sighting or ISS flyover again!',
            tags: ['React-Native', 'Api', 'maps'],
            github: 'https://github.com/yourusername/task-manager',
            demo: 'https://snack.expo.dev/@malharms/iss?platform=android',
            image: 'https://snack.expo.dev/@malharms/iss?platform=android'
        },
        {
            id: 3,
            title: 'Movie App',
            description: 'Teck Stacks: Html, CSS, Javascript. Features: search movies, Ratings, description. Description: Dive into the world of movies with this sleek app, where you can read reviews, see rating of films, create by a film aficionados. It’s your all-in-one platform for movie insights on the go!',
            tags: ['JavaScript', "html", 'API', 'CSS'],
            github: 'https://github.com/mxm-1x/Movie-Review-App-',
            demo: 'https://zippy-clafoutis-cecefc.netlify.app/',
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
                            {/* <img
                                src={project.image}
                                alt={project.title}
                                className="repo-image"
                                style={{ width: '100%', borderRadius: '4px', marginBottom: '1rem' }}
                            /> */}

                            <div className="commit-message">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="dependency-list">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="npm-package">{tag}</span>
                                    ))}
                                </div>

                                <div className="merge-actions">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="pull-request">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="fork">
                                        <FaExternalLinkAlt /> Demo
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