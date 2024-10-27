import React from 'react';
import { motion } from 'framer-motion';

export const CarouselFilter = ({
  image,
  filter = 'none',
  intensity = 1,
}) => {
  const filters = {
    none: '',
    grayscale: `grayscale(${intensity})`,
    sepia: `sepia(${intensity})`,
    blur: `blur(${intensity * 2}px)`,
    brightness: `brightness(${1 + intensity * 0.5})`,
    contrast: `contrast(${1 + intensity})`,
    'vintage': 'sepia(0.3) contrast(1.1) brightness(1.1)',
    'cool': 'saturate(1.4) hue-rotate(20deg)',
    'warm': 'saturate(1.2) hue-rotate(-10deg) brightness(1.1)',
  };

  return (
    <motion.img
      src={image}
      style={{
        filter: filters[filter],
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};
