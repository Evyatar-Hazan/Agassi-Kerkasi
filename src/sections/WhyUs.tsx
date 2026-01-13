import React, { useEffect, useRef, useState } from 'react';
import type { Benefit } from '../types';
import styles from './WhyUs.module.css';

/**
 * WhyUs Section Component
 * Presents key reasons to choose Agassi Kerkasi
 * Features scroll-based animations
 */
const WhyUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const benefits: Benefit[] = [
    {
      id: 'energy',
      icon: '⚡',
      title: 'אנרגיה גבוהה ושמחה אמיתית',
    },
    {
      id: 'custom',
      icon: '🎯',
      title: 'התאמה אישית לכל אירוע',
    },
    {
      id: 'experience',
      icon: '🏆',
      title: 'ניסיון באירועים מכל הסוגים',
    },
    {
      id: 'equipment',
      icon: '🛠️',
      title: 'ציוד איכותי וחדשני',
    },
    {
      id: 'safety',
      icon: '🛡️',
      title: 'מקצועיות וביטחון מוכח',
    },
    {
      id: 'memories',
      icon: '💫',
      title: 'יצירת זיכרונות שלא שוכחים',
    },
  ];

  return (
    <section className={styles.whyUs} id="why-us" ref={containerRef}>
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${isVisible ? 'scroll-reveal-up visible' : 'scroll-reveal-up'}`}>
          למה לבחור בנו
        </h2>
        
        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className={`${styles.benefitItem} scroll-reveal-stagger ${isVisible ? 'visible' : ''}`}
            >
              <span className={styles.icon} aria-hidden="true">
                {benefit.icon}
              </span>
              <h3 className={styles.title}>{benefit.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
