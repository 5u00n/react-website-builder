import React from 'react';
import { motion } from 'framer-motion';

export const CarouselProgress = ({
  currentSlide,
  totalSlides,
  interval,
  isPaused,
  theme,
  position = 'top'
}) => {
  return (
    <div 
      className={`absolute left-0 right-0 h-1 z-20 ${position === 'top' ? 'top-0' : 'bottom-0'}`}
    >
      <div className={`${theme.dots} w-full h-full`}>
        <motion.div
          className={`h-full ${theme.activeDot}`}
          initial={{ width: '0%' }}
          animate={{ 
            width: isPaused ? `${(currentSlide / totalSlides) * 100}%` : '100%' 
          }}
          transition={{
            duration: isPaused ? 0 : interval / 1000,
            ease: 'linear'
          }}
        />
      </div>
    </div>
  );
};
