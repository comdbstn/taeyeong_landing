import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', onClick, hover = true }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const hoverEffect = hover
    ? {
        whileHover: { scale: 1.05, y: -10 },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      {...hoverEffect}
      onClick={onClick}
      className={`bg-white rounded-lg shadow-lg p-6 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
