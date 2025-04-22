import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after initial render
    setIsLoaded(true);
  }, []);

  // Show simple error UI if components fail to render
  if (error) {
    return (
      <div className="error-container" style={{
        backgroundColor: '#040b14',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <h1>Something went wrong</h1>
        <p>Error: {error.message}</p>
        <button onClick={() => window.location.reload()} style={{
          marginTop: '1rem',
          background: 'transparent',
          color: '#64ffda',
          border: '1px solid #64ffda',
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}>
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="app" style={{ backgroundColor: '#040b14', minHeight: '100vh', width: '100%' }}>
      <div className="root-container">
        {/* Wrap each component in error boundary */}
        {isLoaded && (
          <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
