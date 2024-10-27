import React from 'react';
import { motion } from 'framer-motion';

export const CarouselCaption = ({
  title,
  description,
  buttonText,
  buttonLink,
  theme,
  position = 'center',
  maxWidth = '800px',
  animation = true
}) => {
  const positions = {
    center: 'justify-center items-center text-center',
    left: 'justify-center items-start text-left',
    right: 'justify-center items-end text-right',
    'bottom-left': 'justify-end items-start text-left',
    'bottom-right': 'justify-end items-end text-right',
    'top-left': 'justify-start items-start text-left',
    'top-right': 'justify-start items-end text-right'
  };

  return (
    <div 
      className={`relative z-10 h-full flex flex-col ${positions[position]} px-8`}
      style={{ maxWidth }}
    >
      <motion.div
        initial={animation ? { y: 20, opacity: 0 } : false}
        animate={animation ? { y: 0, opacity: 1 } : false}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <motion.h2
          className={`text-4xl font-bold ${theme.text}`}
          initial={animation ? { y: 20, opacity: 0 } : false}
          animate={animation ? { y: 0, opacity: 1 } : false}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className={`text-xl ${theme.subtext}`}
          initial={animation ? { y: 20, opacity: 0 } : false}
          animate={animation ? { y: 0, opacity: 1 } : false}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        {buttonText && (
          <motion.div
            initial={animation ? { y: 20, opacity: 0 } : false}
            animate={animation ? { y: 0, opacity: 1 } : false}
            transition={{ delay: 0.4 }}
          >
            <a
              href={buttonLink || '#'}
              className={`
                inline-block px-8 py-3 rounded-full
                ${theme.controls}
                font-semibold
                transform hover:-translate-y-1 transition-all duration-200
              `}
            >
              {buttonText}
            </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
