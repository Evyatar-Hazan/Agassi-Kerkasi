import React from 'react';
import type { ContactInfo } from '../types';
import Button from '../components/Button';
import QRCodeComponent from '../components/QRCodeComponent';
import styles from './Contact.module.css';

/**
 * Contact Section Component
 * Displays contact information and QR code for easy booking
 * Includes links to social media and messaging platforms
 */
const Contact: React.FC = () => {
  const contactInfo: ContactInfo = {
    email: 'contact@agsi-circasi.co.il',
    whatsapp: 'https://wa.me/+972507000000',
    instagram: 'https://instagram.com/agassi.kerkasi',
    tiktok: 'https://tiktok.com/@agassi.kerkasi',
  };

  // QR code points to WhatsApp booking link
  const qrValue = contactInfo.whatsapp;

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>רוצים אירוע שלא שוכחים?</h2>
        <p className={styles.subheading}>דברו איתנו היום והתחילו לתכננו את הפנטזיה שלכם</p>

        <div className={styles.content}>
          <div className={styles.qrSection}>
            <QRCodeComponent
              value={qrValue}
              label="סרוק כדי ליצור קשר בוואטסאפ"
            />
          </div>

          <div className={styles.linksSection}>
            <div className={styles.contactOptions}>
              <Button
                href={`mailto:${contactInfo.email}`}
                variant="primary"
                size="large"
                className={styles.contactButton}
              >
                📧 שלח מייל
              </Button>

              <Button
                href={contactInfo.whatsapp}
                variant="primary"
                size="large"
                className={styles.contactButton}
              >
                💬 וואטסאפ
              </Button>

              <Button
                href={contactInfo.instagram}
                variant="secondary"
                size="medium"
                className={styles.socialButton}
              >
                📷 אינסטגרם
              </Button>

              <Button
                href={contactInfo.tiktok}
                variant="secondary"
                size="medium"
                className={styles.socialButton}
              >
                🎵 טיקטוק
              </Button>
            </div>

            <div className={styles.info}>
              <h3>פרטים ליצירת קשר</h3>
              <p>
                <strong>אימייל:</strong>{' '}
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
              <p>
                זמן התגובה: בדרך כלל תוך 2-24 שעות
              </p>
              <p>
                זמינות: יום שני - יום שישי, 10:00 - 22:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
