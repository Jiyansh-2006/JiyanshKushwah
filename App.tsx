
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-24 py-24">
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
