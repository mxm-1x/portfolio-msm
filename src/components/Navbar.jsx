import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('hello');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="terminal-nav">
            <div className="shell-prompt">
                <h2 style={{ color: '#64ffda' }}>malhar-mahanwar</h2>
            </div>

            <button
                className="mobile-menu-btn"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menu overlay - closes the menu when clicking outside */}
            <div
                className={`menu-overlay ${menuOpen ? 'open' : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            ></div>

            <ul className={`cmd-options ${menuOpen ? 'open' : ''}`}>
                <li>
                    <a
                        href="#home"
                        className={activeTab === 'hello' ? 'executing' : ''}
                        onClick={() => {
                            setActiveTab('hello');
                            closeMenu();
                        }}
                        style={{ position: 'relative', paddingBottom: '28px' }}
                    >
                        <span style={{ color: activeTab === 'hello' ? '#ffffff' : '#607B96', textDecoration: 'none' }}>_</span>hello
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className={activeTab === 'about' ? 'executing' : ''}
                        onClick={() => {
                            setActiveTab('about');
                            closeMenu();
                        }}
                        style={{ position: 'relative', paddingBottom: '28px' }}
                    >
                        <span style={{ color: activeTab === 'about' ? '#ffffff' : '#607B96', textDecoration: 'none' }}>_</span>about-me
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={activeTab === 'projects' ? 'executing' : ''}
                        onClick={() => {
                            setActiveTab('projects');
                            closeMenu();
                        }}
                        style={{ position: 'relative', paddingBottom: '28px' }}
                    >
                        <span style={{ color: activeTab === 'projects' ? '#ffffff' : '#607B96', textDecoration: 'none' }}>_</span>projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className={activeTab === 'contact' ? 'executing' : ''}
                        onClick={() => {
                            setActiveTab('contact');
                            closeMenu();
                        }}
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