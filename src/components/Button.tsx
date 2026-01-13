import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 * Supports both click handlers and links
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  ariaLabel,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
        aria-label={ariaLabel}
        role="button"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
