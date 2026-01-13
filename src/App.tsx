import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

/**
 * Main Application Component
 * Landing page for Agassi Kerkasi - circus entertainment business
 * 
 * Features scroll progress indicator and scroll-based animations
 * 
 * Structure:
 * - Hero: Main heading with CTA buttons
 * - About: Business description
 * - Services: Service offerings as cards
 * - WhyUs: Reasons to choose the business
 * - Contact: Contact section with QR code and links
 * - Footer: Footer with copyright and social links
 */
const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = height ? (scrolled / height) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="app" role="main">
      {/* Scroll Progress Indicator */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <Suspense fallback={<div aria-label="Loading">טוען...</div>}>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
