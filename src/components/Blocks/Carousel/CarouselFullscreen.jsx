import React from 'react';
import { motion } from 'framer-motion';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

export const CarouselFullscreen = ({
  isFullscreen,
  onToggle,
  theme
}) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`
        absolute top-4 right-4 z-20
        p-3 rounded-full
        ${theme.controls}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isFullscreen ? (
        <FiMinimize size={20} />
      ) : (
        <FiMaximize size={20} />
      )}
    </motion.button>
  );
};
