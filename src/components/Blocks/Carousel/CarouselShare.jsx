import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShare2, 
  FiTwitter, 
  FiFacebook, 
  FiLinkedin, 
  FiLink 
} from 'react-icons/fi';

export const CarouselShare = ({
  slide,
  theme,
  position = 'bottom-right'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = window.location.href;
  const shareText = `Check out: ${slide.title}`;

  const shareButtons = [
    {
      icon: <FiTwitter size={20} />,
      label: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      icon: <FiFacebook size={20} />,
      label: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      icon: <FiLinkedin size={20} />,
      label: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      icon: <FiLink size={20} />,
      label: 'Copy Link',
      action: () => {
        navigator.clipboard.writeText(shareUrl);
        // Show toast notification
      }
    }
  ];

  const positions = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  return (
    <div className={`absolute ${positions[position]} z-20`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-3 rounded-full
          ${theme.controls}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiShare2 size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`
              absolute ${position.includes('right') ? 'right-0' : 'left-0'}
              mt-2 p-2 rounded-lg
              ${theme.controls}
              flex gap-2
            `}
          >
            {shareButtons.map((button, index) => (
              <motion.button
                key={button.label}
                onClick={() => button.action ? button.action() : window.open(button.url, '_blank')}
                className={`
                  p-2 rounded-full
                  hover:bg-white hover:bg-opacity-20
                  transition-colors duration-200
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {button.icon}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
