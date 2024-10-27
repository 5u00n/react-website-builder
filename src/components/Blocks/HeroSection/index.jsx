import React from 'react';
import { useNode } from '@craftjs/core';
import { HeroSectionSettings } from './HeroSectionSettings';

export const HeroSection = ({
  title = 'Welcome to our site',
  subtitle = 'Discover amazing things with us',
  backgroundImage = '',
  backgroundColor = '#1a365d',
  textColor = '#ffffff',
  height = '500px',
  buttonText = 'Get Started',
  buttonLink = '#',
  overlayOpacity = 0.5,
  alignment = 'center'
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{
        height,
        backgroundColor,
        color: textColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
      className="w-full relative"
    >
      {backgroundImage && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            opacity: overlayOpacity
          }}
        />
      )}
      <div 
        className={`relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-${alignment}`}
      >
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <a 
          href={buttonLink}
          className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

HeroSection.craft = {
  props: {
    title: 'Welcome to our site',
    subtitle: 'Discover amazing things with us',
    backgroundImage: '',
    backgroundColor: '#1a365d',
    textColor: '#ffffff',
    height: '500px',
    buttonText: 'Get Started',
    buttonLink: '#',
    overlayOpacity: 0.5,
    alignment: 'center'
  },
  related: {
    toolbar: HeroSectionSettings
  }
};
