import React from 'react';
import { useNode } from '@craftjs/core';
import { CardSettings } from './CardSettings';
export const Card = ({
  title,
  content,
  image,
  imagePosition = 'top',
  width = '100%',
  height = 'auto',
  backgroundColor = '#ffffff',
  titleColor = '#1a202c',
  textColor = '#4a5568',
  borderRadius = '0.5rem',
  shadow = 'md',
  padding = '1.5rem',
  imageHeight = '200px',
  buttonText = '',
  buttonLink = '#',
  buttonStyle = 'primary'
}) => {
  const { connectors: { connect, drag } } = useNode();

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: ''
  };

  const buttonStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        padding: imagePosition === 'top' ? '0' : padding,
        overflow: 'hidden'
      }}
      className={shadowClasses[shadow]}
    >
      {image && imagePosition === 'top' && (
        <div 
          style={{ height: imageHeight }}
          className="w-full overflow-hidden"
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div style={{ padding }}>
        <h3 
          className="text-xl font-semibold mb-3"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p 
          className="mb-4"
          style={{ color: textColor }}
        >
          {content}
        </p>
        {buttonText && (
          <a
            href={buttonLink}
            className={`
              inline-block px-4 py-2 rounded-md transition-colors duration-200
              ${buttonStyles[buttonStyle]}
            `}
          >
            {buttonText}
          </a>
        )}
      </div>

      {image && imagePosition === 'bottom' && (
        <div 
          style={{ height: imageHeight }}
          className="w-full overflow-hidden"
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

Card.craft = {
  props: {
    title: 'Card Title',
    content: 'This is the card content.',
    image: 'https://via.placeholder.com/400x300',
    imagePosition: 'top',
    width: '100%',
    height: 'auto',
    backgroundColor: '#ffffff',
    titleColor: '#1a202c',
    textColor: '#4a5568',
    borderRadius: '0.5rem',
    shadow: 'md',
    padding: '1.5rem',
    imageHeight: '200px',
    buttonText: 'Learn More',
    buttonLink: '#',
    buttonStyle: 'primary'
  },
  related: {
    toolbar: CardSettings
  }
};
