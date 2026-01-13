import React from 'react';
import styles from './Footer.module.css';

/**
 * Footer Component
 * Contains copyright information and social media links
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'אינסטגרם',
      url: 'https://instagram.com/agassi.kerkasi',
      icon: '📷',
    },
    {
      label: 'טיקטוק',
      url: 'https://tiktok.com/@agassi.kerkasi',
      icon: '🎵',
    },
    {
      label: 'וואטסאפ',
      url: 'https://wa.me/+972507000000',
      icon: '💬',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>🎪 אגסי קרקסי</h3>
            <p className={styles.tagline}>הקסם של קרקס בכל אירוע</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <div className={styles.navGroup}>
              <h4 className={styles.navTitle}>קישורים</h4>
              <ul>
                <li>
                  <a href="#hero">בעמוד הבית</a>
                </li>
                <li>
                  <a href="#about">אודות</a>
                </li>
                <li>
                  <a href="#services">שירותים</a>
                </li>
                <li>
                  <a href="#why-us">למה בחרנו</a>
                </li>
              </ul>
            </div>

            <div className={styles.navGroup}>
              <h4 className={styles.navTitle}>יצירת קשר</h4>
              <ul>
                <li>
                  <a href="#contact">צור קשר</a>
                </li>
                <li>
                  <a href="mailto:contact@agsi-circasi.co.il">אימייל</a>
                </li>
                <li>
                  <a href="https://wa.me/+972507000000">וואטסאפ</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className={styles.social}>
            <h4 className={styles.socialTitle}>עקב אחרינו</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  aria-label={link.label}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.icon}>{link.icon}</span>
                  <span className={styles.label}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} אגסי קרקסי. כל הזכויות שמורות.
          </p>
          <p className={styles.credits}>
            עמוד נחיתה מודרני וממיר לעסקים בולטים
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
