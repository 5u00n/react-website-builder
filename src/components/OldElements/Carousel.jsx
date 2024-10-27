import React, { useState } from 'react';
import { useNode } from '@craftjs/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Carousel = ({ slides, autoPlay, interval, showArrows, showDots }) => {
  const { connectors: { connect, drag } } = useNode();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval]);

  return (
    <div ref={ref => connect(drag(ref))} className="relative w-full h-96">
      <div className="relative h-full overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-bold">{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </>
      )}
      
      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CarouselSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Auto Play</label>
        <input
          type="checkbox"
          checked={props.autoPlay}
          onChange={e => setProp(props => props.autoPlay = e.target.checked)}
        />
      </div>
      {props.autoPlay && (
        <div>
          <label className="block text-sm font-medium mb-1">Interval (ms)</label>
          <input
            type="number"
            value={props.interval}
            onChange={e => setProp(props => props.interval = parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium mb-1">Show Arrows</label>
        <input
          type="checkbox"
          checked={props.showArrows}
          onChange={e => setProp(props => props.showArrows = e.target.checked)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Show Dots</label>
        <input
          type="checkbox"
          checked={props.showDots}
          onChange={e => setProp(props => props.showDots = e.target.checked)}
        />
      </div>
    </div>
  );
};

Carousel.craft = {
  props: {
    autoPlay: false,
    interval: 3000,
    showArrows: true,
    showDots: true
  },
  related: {
    settings: CarouselSettings
  }
};
