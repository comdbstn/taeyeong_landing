import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105';

  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-orange-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
