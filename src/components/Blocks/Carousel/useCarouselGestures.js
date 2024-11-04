import { useState, useEffect } from 'react';

export const useCarouselGestures = (
  setCurrentSlide,
  totalSlides,
  sensitivity = 50
) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > sensitivity;
    const isRightSwipe = distance < -sensitivity;

    if (isLeftSwipe) {
      setCurrentSlide(current => (current + 1) % totalSlides);
    }
    if (isRightSwipe) {
      setCurrentSlide(current => (current - 1 + totalSlides) % totalSlides);
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};
