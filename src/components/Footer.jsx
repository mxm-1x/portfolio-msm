import React from 'react';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            padding: '1.5rem 0',
            marginTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <p style={{ color: '#607B96' }}>find me in:</p>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#607B96', fontSize: '1rem' }}>@</span>
                <a href="https://github.com/mxm-1x" style={{ color: '#607B96', textDecoration: 'none' }}>
                    mxm-1x
                </a>
                <FaGithub style={{ color: '#607B96', fontSize: '1.2rem', marginLeft: '0.5rem' }} />
            </div>
        </footer>
    );
};

export default Footer; 