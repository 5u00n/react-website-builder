import React from 'react';
import { useNode } from '@craftjs/core';

export const News = ({ title, articles, backgroundColor, textColor }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div 
      ref={ref => connect(drag(ref))} 
      className="p-6 rounded-lg"
      style={{ backgroundColor, color: textColor }}
    >
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NewsSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={props.title}
          onChange={e => setProp(props => props.title = e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Background Color</label>
        <input
          type="color"
          value={props.backgroundColor}
          onChange={e => setProp(props => props.backgroundColor = e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Text Color</label>
        <input
          type="color"
          value={props.textColor}
          onChange={e => setProp(props => props.textColor = e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

News.craft = {
  props: {
    title: 'Latest News',
    backgroundColor: '#f3f4f6',
    textColor: '#111827',
    articles: [
      {
        title: 'Sample News 1',
        summary: 'This is a brief summary of the news article...',
        imageUrl: 'https://via.placeholder.com/400x300',
        date: '2023-08-01'
      },
      {
        title: 'Sample News 2',
        summary: 'Another interesting news article summary...',
        imageUrl: 'https://via.placeholder.com/400x300',
        date: '2023-08-02'
      },
      {
        title: 'Sample News 3',
        summary: 'Yet another fascinating news story...',
        imageUrl: 'https://via.placeholder.com/400x300',
        date: '2023-08-03'
      }
    ]
  },
  related: {
    settings: NewsSettings
  }
};
