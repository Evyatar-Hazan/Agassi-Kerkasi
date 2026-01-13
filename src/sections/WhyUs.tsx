import React from 'react';
import type { Benefit } from '../types';
import styles from './WhyUs.module.css';

/**
 * WhyUs Section Component
 * Presents key reasons to choose Agassi Kerkasi
 */
const WhyUs: React.FC = () => {
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
    <section className={styles.whyUs} id="why-us">
      <div className={styles.container}>
        <h2 className={styles.heading}>למה לבחור בנו</h2>
        
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <article
              key={benefit.id}
              className={styles.benefitItem}
              style={{ animationDelay: `${index * 100}ms` }}
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
