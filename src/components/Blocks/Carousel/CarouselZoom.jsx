import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiZoomOut, FiX } from 'react-icons/fi';

export const CarouselZoom = ({
  image,
  alt,
  theme,
  onClose
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
    >
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={handleZoomIn}
          className={`p-2 rounded-full ${theme.controls}`}
        >
          <FiZoomIn size={24} />
        </button>
        <button
          onClick={handleZoomOut}
          className={`p-2 rounded-full ${theme.controls}`}
        >
          <FiZoomOut size={24} />
        </button>
        <button
          onClick={onClose}
          className={`p-2 rounded-full ${theme.controls}`}
        >
          <FiX size={24} />
        </button>
      </div>

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        animate={{
          scale,
          x: position.x,
          y: position.y
        }}
        className="cursor-move"
      >
        <img
          src={image}
          alt={alt}
          className="max-w-none"
          style={{
            maxHeight: '90vh',
            objectFit: 'contain'
          }}
          onDoubleClick={handleZoomIn}
        />
      </motion.div>
    </motion.div>
  );
};
