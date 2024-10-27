import React from 'react';
import { motion } from 'framer-motion';

export const CarouselSlide = ({ 
  slide, 
  theme, 
  overlayOpacity,
  isActive 
}) => {
  return (
    <motion.div
      className="absolute w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${slide.image})`
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className={`text-4xl font-bold mb-4 ${theme.text}`}
          >
            {slide.title}
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            className={`text-xl mb-8 max-w-2xl ${theme.subtext}`}
          >
            {slide.description}
          </motion.p>

          {slide.buttonText && (
            <motion.a
              href={slide.buttonLink || '#'}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              className={`
                ${theme.controls}
                px-8 py-3 rounded-full
                font-semibold
                transform hover:-translate-y-1 transition-all duration-200
              `}
            >
              {slide.buttonText}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
