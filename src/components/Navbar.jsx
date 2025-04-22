import React, { useState } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('hello');

    return (
        <nav className="terminal-nav">
            <div className="shell-prompt">
                <h2 style={{ color: '#64ffda' }}>malhar-mahanwar</h2>
            </div>
            <ul className="cmd-options">
                <li>
                    <a
                        href="#home"
                        className={activeTab === 'hello' ? 'executing' : ''}
                        onClick={() => setActiveTab('hello')}
                        style={{ position: 'relative', paddingBottom: '28px' }}
                    >
                        <span style={{ color: activeTab === 'hello' ? '#ffffff' : '#607B96', textDecoration: 'none' }}>_</span>hello
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className={activeTab === 'about' ? 'executing' : ''}
                        onClick={() => setActiveTab('about')}
                        style={{ position: 'relative', paddingBottom: '28px' }}
                    >
                        <span style={{ color: activeTab === 'about' ? '#ffffff' : '#607B96', textDecoration: 'none' }}>_</span>about-me
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={activeTab === 'projects' ? 'executing' : ''}
                        onClick={() => setActiveTab('projects')}
                        style={{ position: 'relative', paddingBottom: '28px' }}
                    >
                        <span style={{ color: activeTab === 'projects' ? '#ffffff' : '#607B96', textDecoration: 'none' }}>_</span>projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeTab === 'contact' ? 'executing' : ''}
                        onClick={() => setActiveTab('contact')}
                        style={{ position: 'relative', paddingBottom: '28px' }}
                    >
                        <span style={{ color: activeTab === 'contact' ? '#ffffff' : '#607B96', textDecoration: 'none' }}>_</span>contact-me
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar; 