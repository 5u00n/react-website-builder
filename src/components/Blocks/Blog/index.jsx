import React from 'react';
import { useNode } from '@craftjs/core';
import { BlogSettings } from './BlogSettings';

export const Blog = ({
  posts = [],
  columns = 3,
  showImages = true,
  showDate = true,
  showExcerpt = true,
  imageHeight = '200px',
  backgroundColor = '#ffffff',
  titleColor = '#000000',
  textColor = '#4a5568',
  spacing = '2rem'
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{ backgroundColor }}
      className="w-full p-8"
    >
      <div 
        className="grid gap-8"
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: spacing 
        }}
      >
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col">
            {showImages && post.image && (
              <div 
                className="mb-4 overflow-hidden rounded-lg"
                style={{ height: imageHeight }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: titleColor }}
            >
              {post.title}
            </h3>
            {showDate && (
              <span 
                className="text-sm mb-2"
                style={{ color: textColor }}
              >
                {post.date}
              </span>
            )}
            {showExcerpt && (
              <p 
                className="text-base"
                style={{ color: textColor }}
              >
                {post.excerpt}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Blog.craft = {
  props: {
    posts: [
      {
        title: 'Sample Blog Post 1',
        date: '2024-01-01',
        excerpt: 'This is a sample blog post excerpt...',
        image: 'https://via.placeholder.com/400x300'
      },
      {
        title: 'Sample Blog Post 2',
        date: '2024-01-02',
        excerpt: 'Another sample blog post excerpt...',
        image: 'https://via.placeholder.com/400x300'
      },
      {
        title: 'Sample Blog Post 3',
        date: '2024-01-03',
        excerpt: 'Yet another sample blog post excerpt...',
        image: 'https://via.placeholder.com/400x300'
      }
    ],
    columns: 3,
    showImages: true,
    showDate: true,
    showExcerpt: true,
    imageHeight: '200px',
    backgroundColor: '#ffffff',
    titleColor: '#000000',
    textColor: '#4a5568',
    spacing: '2rem'
  },
  related: {
    toolbar: BlogSettings
  }
};
