import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'responsive';
  size?: 'sm' | 'md' | 'lg' | 'header';
  className?: string;
  onClick?: () => void;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'responsive',
  size = 'md',
  className = '',
  onClick,
  alt = 'MOEP Engineering Services Limited',
}) => {
  const sizeClasses = {
    sm: {
      mark: 'h-8 w-auto',
      full: 'h-8 w-auto',
    },
    md: {
      mark: 'h-10 w-auto',
      full: 'h-10 sm:h-11 md:h-12 w-auto',
    },
    lg: {
      mark: 'h-12 sm:h-14 w-auto',
      full: 'h-12 sm:h-14 md:h-16 w-auto',
    },
    header: {
      mark: 'h-9 sm:h-10 w-auto',
      full: 'h-10 sm:h-11 md:h-12 lg:h-13 w-auto',
    },
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  if (variant === 'mark') {
    return (
      <div
        id="moep-brand-logo-mark"
        onClick={onClick}
        className={`inline-flex items-center cursor-pointer select-none group ${className}`}
      >
        <img
          src="/assets/logo-mark.png"
          alt={alt}
          referrerPolicy="no-referrer"
          className={`${selectedSize.mark} object-contain transition-transform duration-200 group-hover:scale-105`}
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div
        id="moep-brand-logo-full"
        onClick={onClick}
        className={`inline-flex items-center cursor-pointer select-none group ${className}`}
      >
        <img
          src="/assets/logo-full.png"
          alt={alt}
          referrerPolicy="no-referrer"
          className={`${selectedSize.full} object-contain transition-transform duration-200 group-hover:scale-102`}
        />
      </div>
    );
  }

  // Responsive default: mark on mobile (< sm), full lockup on tablet/desktop (>= sm)
  return (
    <div
      id="moep-brand-logo-responsive"
      onClick={onClick}
      className={`inline-flex items-center cursor-pointer select-none group ${className}`}
    >
      {/* Mobile collapsed icon mark */}
      <img
        src="/assets/logo-mark.png"
        alt="MOEP Monogram Mark"
        referrerPolicy="no-referrer"
        className="h-9 w-auto sm:hidden object-contain transition-transform duration-200 group-hover:scale-105"
      />
      {/* Tablet & Desktop full lockup */}
      <img
        src="/assets/logo-full.png"
        alt={alt}
        referrerPolicy="no-referrer"
        className="hidden sm:block h-10 sm:h-11 md:h-12 lg:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
      />
    </div>
  );
};
