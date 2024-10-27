import React from 'react';
import { useNode } from '@craftjs/core';
import { motion } from 'framer-motion';
import { NewsSettings } from './NewsSettings';

export const News = ({
  title = 'Latest News',
  subtitle = 'Stay updated with our latest stories',
  articles = [],
  layout = 'grid',
  theme = 'light',
  accentColor = '#3B82F6',
  showCategories = true,
  showDates = true,
  imageStyle = 'rounded',
  animation = true,
  spacing = '2rem'
}) => {
  const { connectors: { connect, drag } } = useNode();

  const themes = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-800',
      subtext: 'text-gray-600',
      card: 'bg-white',
      hover: 'hover:bg-gray-50'
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      subtext: 'text-gray-300',
      card: 'bg-gray-800',
      hover: 'hover:bg-gray-700'
    },
    colored: {
      bg: `bg-${accentColor}-50`,
      text: 'text-gray-900',
      subtext: 'text-gray-700',
      card: 'bg-white',
      hover: `hover:bg-${accentColor}-50`
    }
  };

  const currentTheme = themes[theme];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      className={`w-full py-16 ${currentTheme.bg}`}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${currentTheme.text}`}>
            {title}
          </h2>
          <p className={`text-xl ${currentTheme.subtext}`}>
            {subtitle}
          </p>
        </div>

        {/* Articles Grid/List */}
        <motion.div
          variants={containerVariants}
          initial={animation ? "hidden" : "visible"}
          animate="visible"
          className={`
            grid gap-8
            ${layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}
          `}
          style={{ gap: spacing }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                ${currentTheme.card}
                rounded-lg overflow-hidden shadow-lg
                transition-all duration-300
                ${currentTheme.hover}
              `}
            >
              {/* Article Image */}
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className={`
                    w-full h-64 object-cover
                    ${imageStyle === 'rounded' ? 'rounded-t-lg' : ''}
                  `}
                />
                {showCategories && article.category && (
                  <span
                    className={`
                      absolute top-4 left-4 px-3 py-1 rounded-full
                      text-sm font-semibold
                      bg-${accentColor}-500 text-white
                    `}
                  >
                    {article.category}
                  </span>
                )}
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>
                  {article.title}
                </h3>
                {showDates && (
                  <p className={`text-sm mb-3 ${currentTheme.subtext}`}>
                    {article.date}
                  </p>
                )}
                <p className={`mb-4 ${currentTheme.subtext}`}>
                  {article.excerpt}
                </p>
                <a
                  href={article.link}
                  className={`
                    inline-flex items-center
                    text-${accentColor}-500 hover:text-${accentColor}-600
                    font-semibold
                  `}
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

News.craft = {
  props: {
    title: 'Latest News',
    subtitle: 'Stay updated with our latest stories',
    articles: [
      {
        title: 'The Future of Technology',
        excerpt: 'Exploring the latest trends in tech...',
        image: 'https://source.unsplash.com/random/800x600?tech',
        date: 'March 15, 2024',
        category: 'Technology',
        link: '#'
      },
      {
        title: 'Sustainable Living',
        excerpt: 'Tips for a more eco-friendly lifestyle...',
        image: 'https://source.unsplash.com/random/800x600?nature',
        date: 'March 14, 2024',
        category: 'Lifestyle',
        link: '#'
      },
      {
        title: 'Business Innovation',
        excerpt: 'How companies are adapting to change...',
        image: 'https://source.unsplash.com/random/800x600?business',
        date: 'March 13, 2024',
        category: 'Business',
        link: '#'
      }
    ],
    layout: 'grid',
    theme: 'light',
    accentColor: '#3B82F6',
    showCategories: true,
    showDates: true,
    imageStyle: 'rounded',
    animation: true,
    spacing: '2rem'
  },
  related: {
    toolbar: NewsSettings
  }
};
