import React from 'react';
import type { Service } from '../types';
import ServiceCard from '../components/ServiceCard';
import styles from './Services.module.css';

/**
 * Services Section Component
 * Displays all available services as a grid of cards
 */
const Services: React.FC = () => {
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
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.heading}>השירותים שלנו</h2>
        <p className={styles.subheading}>
          בחר מתוך מגוון שירותים וחבילות, או בנה חבילה מותאמת אישית
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
