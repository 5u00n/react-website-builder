import React from 'react';
import { useNode } from '@craftjs/core';

export const Card = ({ title, content, imageUrl, width, height, padding, margin, borderRadius, borderWidth, borderColor, backgroundColor, shadow, shadowColor, shadowOffsetX, shadowOffsetY, shadowBlurRadius, opacity }) => {
  const { connectors: { connect, drag } } = useNode();

  const cardStyle = {
    width,
    height,
    padding,
    margin,
    borderRadius,
    borderWidth,
    borderColor,
    backgroundColor,
    boxShadow: `${shadowOffsetX} ${shadowOffsetY} ${shadowBlurRadius} ${shadowColor}`,
    opacity,
    transition: 'all 0.3s ease',
  };

  return (
    <div 
      ref={ref => connect(drag(ref))} 
      style={cardStyle}
      className="overflow-hidden flex flex-col"
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
          style={{ borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }}
        />
      )}
      <div className="flex-grow p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export const CardDefaultProps = {
    title: 'Card Title',
    content: 'Card content goes here',
    imageUrl: 'https://via.placeholder.com/150',
    width: '300px',
    height: 'auto',
    padding: '0',
    margin: '10px',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffsetX: '0px',
    shadowOffsetY: '4px',
    shadowBlurRadius: '6px',
    opacity: '1'
};

const CardSettings = () => {
    const { actions, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input 
                        type="text" 
                        value={props.title} 
                        onChange={(e) => actions.setProp((props) => (props.title = e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea 
                        value={props.content} 
                        onChange={(e) => actions.setProp((props) => (props.content = e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                    />
                </div>
                <div  className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input 
                        type="text" 
                        value={props.imageUrl} 
                        onChange={(e) => actions.setProp((props) => (props.imageUrl = e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
                    <input 
                        type="text" 
                        value={props.width} 
                        onChange={(e) => actions.setProp((props) => (props.width = e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <input 
                        type="text" 
                        value={props.height} 
                        onChange={(e) => actions.setProp((props) => (props.height = e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Border Radius</label>
                    <input 
                        type="text" 
                        value={props.borderRadius} 
                        onChange={(e) => actions.setProp((props) => (props.borderRadius = e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Background Color:</label>
                <input type="color" value={props.backgroundColor} onChange={(e) => actions.setProp((props) => (props.backgroundColor = e.target.value))} className="w-10 h-10 rounded-md border border-gray-300 cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Shadow Color:</label>
                <input type="color" value={props.shadowColor} onChange={(e) => actions.setProp((props) => (props.shadowColor = e.target.value))} className="w-10 h-10 rounded-md border border-gray-300 cursor-pointer" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Opacity</label>
                <div className="flex items-center">
                    <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01"
                        value={props.opacity} 
                        onChange={(e) => actions.setProp((props) => (props.opacity = e.target.value))}
                        className="w-full"
                    />
                    <span className="ml-2 text-sm text-gray-600">{parseFloat(props.opacity).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

Card.craft = {
    props: CardDefaultProps,
    related: {
        settings: CardSettings
    }
}
