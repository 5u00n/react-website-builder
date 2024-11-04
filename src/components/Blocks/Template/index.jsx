import React from 'react';
import { useNode } from '@craftjs/core';
import { motion } from 'framer-motion';
import { TemplateSettings } from './TemplateSettings';

export const Template = ({
  layout = 'split',
  theme = 'light',
  accentColor = '#3B82F6',
  padding = '4rem',
  gap = '2rem',
  contentAlignment = 'left',
  backgroundImage = '',
  overlayOpacity = 0.5,
  animation = true,
  sections = [
    {
      title: 'Section 1',
      content: 'Content for section 1',
      image: 'https://source.unsplash.com/random/800x600?minimal'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2',
      image: 'https://source.unsplash.com/random/800x600?design'
    }
  ]
}) => {
  const { connectors: { connect, drag } } = useNode();

  const themes = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      subtext: 'text-gray-600',
      accent: `text-${accentColor}-600`
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      subtext: 'text-gray-300',
      accent: `text-${accentColor}-400`
    },
    glass: {
      bg: 'bg-white bg-opacity-10 backdrop-blur-lg',
      text: 'text-white',
      subtext: 'text-gray-200',
      accent: `text-${accentColor}-300`
    }
  };

  const layouts = {
    split: 'grid-cols-1 md:grid-cols-2',
    thirds: 'grid-cols-1 md:grid-cols-3',
    asymmetric: 'grid-cols-1 md:grid-cols-3',
    stacked: 'grid-cols-1'
  };

  const currentTheme = themes[theme];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      className="relative w-full"
      style={{ padding }}
    >
      {/* Background Image and Overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            className="absolute inset-0 z-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        </>
      )}

      {/* Content */}
      <motion.div
        className={`
          relative z-10 grid ${layouts[layout]} gap-8
          ${contentAlignment === 'center' ? 'text-center' : ''}
        `}
        style={{ gap }}
        variants={containerVariants}
        initial={animation ? "hidden" : "visible"}
        animate="visible"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            className={`
              ${currentTheme.bg}
              rounded-xl shadow-xl overflow-hidden
              ${layout === 'asymmetric' && index === 0 ? 'md:col-span-2' : ''}
            `}
          >
            {section.image && (
              <div className="relative h-64 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-4 ${currentTheme.text}`}>
                {section.title}
              </h3>
              <p className={`${currentTheme.subtext} leading-relaxed`}>
                {section.content}
              </p>
              {section.button && (
                <button
                  className={`
                    mt-6 px-6 py-2 rounded-full
                    bg-${accentColor}-500 hover:bg-${accentColor}-600
                    text-white font-semibold
                    transform hover:-translate-y-1 transition-all duration-200
                  `}
                >
                  {section.button}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

Template.craft = {
  props: {
    layout: 'split',
    theme: 'light',
    accentColor: '#3B82F6',
    padding: '4rem',
    gap: '2rem',
    contentAlignment: 'left',
    backgroundImage: '',
    overlayOpacity: 0.5,
    animation: true,
    sections: [
      {
        title: 'Modern Design',
        content: 'Create beautiful, responsive layouts with our modern template system.',
        image: 'https://source.unsplash.com/random/800x600?minimal',
        button: 'Learn More'
      },
      {
        title: 'Flexible Layouts',
        content: 'Choose from multiple layout options to best showcase your content.',
        image: 'https://source.unsplash.com/random/800x600?design',
        button: 'Get Started'
      }
    ]
  },
  related: {
    toolbar: TemplateSettings
  }
};
