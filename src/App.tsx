import React, { Suspense } from 'react';
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
 * Structure:
 * - Hero: Main heading with CTA buttons
 * - About: Business description
 * - Services: Service offerings as cards
 * - WhyUs: Reasons to choose the business
 * - Contact: Contact section with QR code and links
 * - Footer: Footer with copyright and social links
 */
const App: React.FC = () => {
  return (
    <main className="app" role="main">
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
