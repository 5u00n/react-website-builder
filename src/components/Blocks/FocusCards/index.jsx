import React from 'react';
import { useNode } from '@craftjs/core';
import { FocusCardsSettings } from './FocusCardsSettings';

export const FocusCards = ({
  cards = [],
  columns = 3,
  gap = '2rem',
  backgroundColor = '#f7fafc',
  cardBackground = '#ffffff',
  titleColor = '#1a202c',
  textColor = '#4a5568',
  borderRadius = '0.5rem',
  shadow = 'lg',
  padding = '2rem',
  iconSize = '3rem',
  iconColor = '#4299e1',
  hoverEffect = true
}) => {
  const { connectors: { connect, drag } } = useNode();

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: ''
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{ backgroundColor, padding }}
      className="w-full"
    >
      <div 
        className="grid"
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap 
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              ${shadowClasses[shadow]}
              ${hoverEffect ? 'transform transition-transform duration-300 hover:-translate-y-2' : ''}
              p-6
            `}
            style={{
              backgroundColor: cardBackground,
              borderRadius,
              color: textColor
            }}
          >
            {card.icon && (
              <div 
                className="mb-4"
                style={{ 
                  color: iconColor,
                  fontSize: iconSize
                }}
              >
                {card.icon}
              </div>
            )}
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: titleColor }}
            >
              {card.title}
            </h3>
            <p>{card.description}</p>
            {card.link && (
              <a 
                href={card.link}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                Learn More →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

FocusCards.craft = {
  props: {
    cards: [
      {
        title: 'Feature 1',
        description: 'Description of feature 1',
        icon: '🚀',
        link: '#'
      },
      {
        title: 'Feature 2',
        description: 'Description of feature 2',
        icon: '💡',
        link: '#'
      },
      {
        title: 'Feature 3',
        description: 'Description of feature 3',
        icon: '⚡',
        link: '#'
      }
    ],
    columns: 3,
    gap: '2rem',
    backgroundColor: '#f7fafc',
    cardBackground: '#ffffff',
    titleColor: '#1a202c',
    textColor: '#4a5568',
    borderRadius: '0.5rem',
    shadow: 'lg',
    padding: '2rem',
    iconSize: '3rem',
    iconColor: '#4299e1',
    hoverEffect: true
  },
  related: {
    toolbar: FocusCardsSettings
  }
};
