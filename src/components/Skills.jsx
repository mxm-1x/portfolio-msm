import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaNpm, FaGit, FaFigma, FaPython } from 'react-icons/fa';
import { SiCanva, SiFirebase, SiPandas, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { id: 1, icon: <FaHtml5 size={40} />, name: 'HTML', color: '#e34c26' },
        { id: 2, icon: <FaCss3Alt size={40} />, name: 'CSS', color: '#264de4' },
        { id: 3, icon: <FaJs size={40} />, name: 'JavaScript', color: '#f0db4f' },
        { id: 4, icon: <FaReact size={40} />, name: 'React', color: '#61DBFB' },
        { id: 5, icon: <FaReact size={40} />, name: 'React-native', color: '#61DBFB' },
        { id: 6, icon: <FaNpm size={40} />, name: 'NPM', color: '#cc3534' },
        { id: 7, icon: <FaGit size={40} />, name: 'Git', color: '#F1502F' },
        { id: 8, icon: <FaFigma size={40} />, name: 'Figma', color: '#F24E1E' },
        { id: 9, icon: <FaPython size={40} />, name: 'Python', color: '#306998' },
        { id: 10, icon: <SiPandas size={40} />, name: 'Pandas', color: '#fff' },
        { id: 11, icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS', color: '#38B2AC' },
        { id: 12, icon: <SiTypescript size={40} />, name: 'TypeScript', color: '#007ACC' },
        { id: 13, icon: <SiFirebase size={40} />, name: 'Firebase', color: '#FFCA28' },
        { id: 14, icon: <SiCanva size={40} />, name: 'Canva', color: '#00C4CC' },
    ];

    return (
        <section id="skills" className="section-wrapper">
            <h2 className="section-title">// export const skills</h2>
            <div className="code-block">
                <div className="function-grid">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="module-export"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: skill.id * 0.05 }}
                            style={{ color: skill.color }}
                        >
                            <div className="skill-icon" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                                {skill.icon}
                            </div>
                            <p style={{ fontSize: 'clamp(0.8rem, 3vw, 1rem)' }}>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 