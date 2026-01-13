import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

/**
 * ServiceCard Component
 * Displays a single service with icon, title, and description
 * Used in the Services section
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={styles.iconWrapper} aria-hidden="true">
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default ServiceCard;
