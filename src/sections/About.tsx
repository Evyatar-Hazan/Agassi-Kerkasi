import React from 'react';
import styles from './About.module.css';

/**
 * About Section Component
 * Describes the business and what makes Agassi Kerkasi special
 */
const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>אודות אגסי קרקסי</h2>
        
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p className={styles.mainText}>
              אגסי קרקסי מגיעים לכל אירוע כדי להרים את המורל, להקפיץ את הרחבה וליצור אווירה שמחה וסוחפת.
            </p>
            
            <p className={styles.subText}>
              עם מופעי להטוטים, ג'אגלינג, מגנטים, עמדות צילום לטיקטוק ועוד חוויות שכולם זוכרים, אנחנו מביאים את הקסם של קרקס לכל חגיגה.
            </p>
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.number}>10+</span>
              <span className={styles.label}>שנות ניסיון</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.number}>500+</span>
              <span className={styles.label}>אירועים מוצלחים</span>
            </div>
            <div className={styles.highlight}>
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
