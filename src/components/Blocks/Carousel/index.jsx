import React, { useState, useEffect } from 'react';
import { useNode } from '@craftjs/core';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';
import { CarouselSettings } from './CarouselSettings';

export const Carousel = ({
  slides = [],
  height = '500px',
  autoPlay = true,
  interval = 5000,
  animation = 'slide',
  showArrows = true,
  showDots = true,
  showPlayPause = true,
  theme = 'light',
  overlayOpacity = 0.3,
  borderRadius = '1rem',
  gap = '1rem'
}) => {
  const { connectors: { connect, drag } } = useNode();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(!autoPlay);

  const themes = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      subtext: 'text-gray-600',
      controls: 'bg-white text-gray-900',
      dots: 'bg-gray-300',
      activeDot: 'bg-gray-900'
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      subtext: 'text-gray-300',
      controls: 'bg-gray-800 text-white',
      dots: 'bg-gray-600',
      activeDot: 'bg-white'
    },
    glass: {
      bg: 'bg-white bg-opacity-10',
      text: 'text-white',
      subtext: 'text-gray-200',
      controls: 'bg-white bg-opacity-20 backdrop-blur-lg text-white',
      dots: 'bg-white bg-opacity-30',
      activeDot: 'bg-white'
    }
  };

  const currentTheme = themes[theme];

  useEffect(() => {
    let timer;
    if (autoPlay && !isPaused && slides.length > 1) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, slides.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const fadeVariants = {
    enter: {
      opacity: 0,
      scale: 0.95
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 1.05
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      className="relative w-full overflow-hidden"
      style={{ height, borderRadius }}
    >
      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={currentSlide}
          custom={1}
          variants={animation === 'slide' ? slideVariants : fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute w-full h-full"
        >
          {/* Slide Content */}
          <div
            className="relative w-full h-full"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
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
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-4xl font-bold mb-4 ${currentTheme.text}`}
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`text-xl mb-8 max-w-2xl ${currentTheme.subtext}`}
              >
                {slides[currentSlide].description}
              </motion.p>
              {slides[currentSlide].buttonText && (
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`
                    ${currentTheme.controls}
                    px-8 py-3 rounded-full
                    font-semibold
                    transform hover:-translate-y-1 transition-all duration-200
                  `}
                >
                  {slides[currentSlide].buttonText}
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className={`
              absolute left-4 top-1/2 -translate-y-1/2
              ${currentTheme.controls}
              p-3 rounded-full
              transform hover:scale-110 transition-transform duration-200
              z-20
            `}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className={`
              absolute right-4 top-1/2 -translate-y-1/2
              ${currentTheme.controls}
              p-3 rounded-full
              transform hover:scale-110 transition-transform duration-200
              z-20
            `}
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-200
                ${index === currentSlide ? currentTheme.activeDot : currentTheme.dots}
              `}
            />
          ))}
        </div>
      )}

      {/* Play/Pause Button */}
      {showPlayPause && (
        <button
          onClick={togglePause}
          className={`
            absolute bottom-4 right-4
            ${currentTheme.controls}
            p-3 rounded-full
            transform hover:scale-110 transition-transform duration-200
            z-20
          `}
        >
          {isPaused ? <FiPlay size={20} /> : <FiPause size={20} />}
        </button>
      )}
    </div>
  );
};

Carousel.craft = {
  props: {
    slides: [
      {
        title: "Welcome to Our Platform",
        description: "Discover amazing features and possibilities.",
        image: "https://source.unsplash.com/random/1920x1080?landscape",
        buttonText: "Get Started"
      },
      {
        title: "Modern Design",
        description: "Built with the latest technologies and best practices.",
        image: "https://source.unsplash.com/random/1920x1080?modern",
        buttonText: "Learn More"
      },
      {
        title: "Endless Possibilities",
        description: "Create beautiful and responsive layouts effortlessly.",
        image: "https://source.unsplash.com/random/1920x1080?technology",
        buttonText: "Explore"
      }
    ],
    height: '500px',
    autoPlay: true,
    interval: 5000,
    animation: 'slide',
    showArrows: true,
    showDots: true,
    showPlayPause: true,
    theme: 'light',
    overlayOpacity: 0.3,
    borderRadius: '1rem',
    gap: '1rem'
  },
  related: {
    toolbar: CarouselSettings
  }
};
