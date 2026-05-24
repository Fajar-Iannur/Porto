import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import Contact from './Contact';

const Portofolio = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* main content */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      
    </div>
  );
};

export default Portofolio;