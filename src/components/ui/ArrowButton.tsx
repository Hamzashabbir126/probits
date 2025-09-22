import React from "react";

interface ArrowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ArrowButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: ArrowButtonProps): JSX.Element => {
  
  // Size configurations
  const sizeClasses = {
    sm: {
      button: 'h-[36px] sm:h-[40px] pl-3 sm:pl-4 pr-4 sm:pr-6 py-3 sm:py-4 text-xs sm:text-sm',
      circle: 'w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] -ml-3 sm:-ml-4',
      icon: 'w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]'
    },
    md: {
      button: 'h-[40px] sm:h-[52px] pl-4 sm:pl-6 pr-6 sm:pr-8 py-4 sm:py-6 text-sm sm:text-base',
      circle: 'w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] -ml-4 sm:-ml-5',
      icon: 'w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]'
    },
    lg: {
      button: 'h-[48px] sm:h-[60px] pl-6 sm:pl-8 pr-8 sm:pr-10 py-5 sm:py-7 text-base sm:text-lg',
      circle: 'w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] -ml-5 sm:-ml-6',
      icon: 'w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]'
    }
  };

  // Variant configurations
  const variantClasses = {
    primary: {
      button: 'border-[#475467] text-[#1e1e1e]',
      circle: 'bg-[#5da502]'
    },
    secondary: {
      button: 'border-[#475467] text-primary-900',
      circle: 'bg-[#5da502]'
    },
    white: {
      button: 'border-[#ffffff] text-[#ffffff]',
      circle: 'bg-[#f5f8f3]'
    }
  };

  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];

  return (
    <button className={`inline-flex items-center justify-center group ${className}`} onClick={onClick}>
      <button className={`inline-flex items-center justify-center gap-2 rounded-[30px] sm:rounded-[44px] border-[0.8px] border-solid transition-all duration-300 ease-in-out group-hover:shadow-lg ${sizeConfig.button} ${variantConfig.button}`}>
        <div className="font-medium whitespace-nowrap">
          {children}
        </div>
      </button>
      
      <div className={`flex items-center justify-center rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg ${sizeConfig.circle} ${variantConfig.circle}`}>
        <img
          className={`transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${sizeConfig.icon}`}
          alt="Arrow right"
          src="https://c.animaapp.com/mezk8qhiRH69bc/img/vuesax-linear-arrow-right.svg"
        />
      </div>
    </button>
  );
};