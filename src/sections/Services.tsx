import React, { useEffect, useRef, useState } from 'react';
import type { Service } from '../types';
import ServiceCard from '../components/ServiceCard';
import styles from './Services.module.css';

/**
 * Services Section Component
 * Displays all available services as a grid of cards
 * Features scroll-based animations
 */
const Services: React.FC = () => {
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

  const services: Service[] = [
    {
      id: 'juggling',
      icon: '🤹',
      title: 'מופעי ג\'אגלינג',
      description: 'מופעים מקצועיים של הטוטים וג\'אגלינג שמרתקים את הקהל בכל גיל',
    },
    {
      id: 'fire',
      icon: '🔥',
      title: 'מגנטים קרקסיים',
      description: 'מגנטים מרשימים ועוצרי נשימה עם ציוד בטוח ומודרני',
    },
    {
      id: 'photo-booth',
      icon: '📸',
      title: 'עמדות צילום',
      description: 'עמדות צילום ייעודיות לטיקטוק ורשתות חברתיות עם props משעשעים',
    },
    {
      id: 'crowd',
      icon: '🎉',
      title: 'הפעלות קהל',
      description: 'מקפצות רחבה ופעילויות אינטראקטיביות שמגבהות את המורל',
    },
    {
      id: 'custom',
      icon: '✨',
      title: 'חבילות מותאמות',
      description: 'ניתן לתאים כל חבילה לצרכים המיוחדים של האירוע שלך',
    },
    {
      id: 'events',
      icon: '🎪',
      title: 'אירועים מקיפים',
      description: 'ארוח כוללת לאירועים גדולים עם ניהול מלא ותאום עם הימ\'י',
    },
  ];

  return (
    <section className={styles.services} id="services" ref={containerRef}>
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${isVisible ? 'scroll-reveal-up visible' : 'scroll-reveal-up'}`}>
          השירותים שלנו
        </h2>
        <p className={`${styles.subheading} ${isVisible ? 'scroll-reveal-up visible' : 'scroll-reveal-up'}`} style={{ transitionDelay: '0.1s' }}>
          בחר מתוך מגוון שירותים וחבילות, או בנה חבילה מותאמת אישית
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.id}
              className={`scroll-reveal-stagger ${isVisible ? 'visible' : ''}`}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
