import React from 'react';
import Button from '../components/Button';
import styles from './Hero.module.css';

/**
 * Hero Section Component
 * Main headline and CTA buttons for the landing page
 * Features eye-catching design with animations
 */
const Hero: React.FC = () => {
  const handleBookingClick = (): void => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background} aria-hidden="true" />
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          אגסי קרקסי
          <span className={styles.subtitle}>מרים את הרחבה ומשמח כל אירוע</span>
        </h1>
        
        <p className={styles.description}>
          שואו צבעוני, אנרגטי ובלתי נשכח לכל סוגי האירועים
        </p>
        
        <div className={styles.ctaContainer}>
          <Button
            onClick={handleBookingClick}
            variant="primary"
            size="large"
            aria-label="הזמנת חבילה"
          >
            להזמנת חבילה
          </Button>
          <Button
            href="https://wa.me/+972507000000"
            variant="secondary"
            size="large"
            aria-label="צור קשר בוואטסאפ"
          >
            צור קשר
          </Button>
        </div>
      </div>
      
      <div className={styles.floatingEmojis} aria-hidden="true">
        <span className={styles.emoji}>🎪</span>
        <span className={styles.emoji}>🤹</span>
        <span className={styles.emoji}>✨</span>
      </div>
    </section>
  );
};

export default Hero;
