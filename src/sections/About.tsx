import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

/**
 * About Section Component
 * Describes the business and what makes Agassi Kerkasi special
 * Features scroll-based animations
 */
const About: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const textObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTextVisible(true);
        textObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const statsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        statsObserver.unobserve(entry.target);
      }
    }, observerOptions);

    if (textRef.current) textObserver.observe(textRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${textVisible ? 'scroll-reveal-up visible' : 'scroll-reveal-up'}`}>
          אודות אגסי קרקסי
        </h2>
        
        <div className={styles.content} ref={textRef}>
          <div className={`${styles.textBlock} ${textVisible ? 'scroll-reveal-left visible' : 'scroll-reveal-left'}`}>
            <p className={styles.mainText}>
              אגסי קרקסי מגיעים לכל אירוע כדי להרים את המורל, להקפיץ את הרחבה וליצור אווירה שמחה וסוחפת.
            </p>
            
            <p className={styles.subText}>
              עם מופעי להטוטים, ג'אגלינג, מגנטים, עמדות צילום לטיקטוק ועוד חוויות שכולם זוכרים, אנחנו מביאים את הקסם של קרקס לכל חגיגה.
            </p>
          </div>

          <div className={styles.highlights} ref={statsRef}>
            <div className={`${styles.highlight} scroll-reveal-stagger ${statsVisible ? 'visible' : ''}`}>
              <span className={styles.number}>10+</span>
              <span className={styles.label}>שנות ניסיון</span>
            </div>
            <div className={`${styles.highlight} scroll-reveal-stagger ${statsVisible ? 'visible' : ''}`}>
              <span className={styles.number}>500+</span>
              <span className={styles.label}>אירועים מוצלחים</span>
            </div>
            <div className={`${styles.highlight} scroll-reveal-stagger ${statsVisible ? 'visible' : ''}`}>
              <span className={styles.number}>100%</span>
              <span className={styles.label}>עמדות מרוצות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
