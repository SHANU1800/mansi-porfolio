import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DiagnosticWidget from './components/DiagnosticWidget';
import HowIWork from './components/HowIWork';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] selection:bg-white/20 selection:text-white flex flex-col font-sans theme-diagonal-bg">
      {/* Sticky & Responsive Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section B: Hero */}
        <Hero />

        {/* Section C: About Me */}
        <About />

        {/* Section D: Skills */}
        <Skills />

        {/* Section E: Projects / Case Studies */}
        <Projects />

        {/* Interactive Operational Diagnostic */}
        <DiagnosticWidget />

        {/* Section F: How I Work */}
        <HowIWork />

        {/* Section G: Technical Collaboration */}
        <Collaboration />

        {/* Section H: Contact Section */}
        <Contact />
      </main>

      {/* Section I: Footer */}
      <Footer />
    </div>
  );
}

