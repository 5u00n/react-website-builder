
import React from 'react';
import { useNode } from '@craftjs/core';

export const Button = ({ text, onClick, className, backgroundColor, textColor, fontSize, padding, borderRadius, ...props }) => {
  const { connectors: { connect, drag } } = useNode();

  const buttonStyle = {
    backgroundColor,
    color: textColor,
    fontSize,
    padding,
    borderRadius,
  };

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      onClick={onClick}
      className={`hover:opacity-80 transition-opacity ${className}`}
      style={buttonStyle}
      {...props}
    >
      {text}
    </button>
  );
};

Button.craft = {
  props: {
    text: 'Click me',
    onClick: () => {},
    className: '',
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF',
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '4px',
  },
  rules: {
    canDrag: () => true,
  },
};

const ButtonSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-6 p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-2">Button Text</label>
        <input
          type="text"
          value={props.text}
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Background Color</label>
          <div className="flex items-center">
            <input
              type="color"
              value={props.backgroundColor}
              onChange={(e) => setProp((props) => (props.backgroundColor = e.target.value))}
              className="w-10 h-10 rounded-lg border border-gray-300 cursor-pointer mr-2"
            />
            <input
              type="text"
              value={props.backgroundColor}
              onChange={(e) => setProp((props) => (props.backgroundColor = e.target.value))}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Text Color</label>
          <div className="flex items-center">
            <input
              type="color"
              value={props.textColor}
              onChange={(e) => setProp((props) => (props.textColor = e.target.value))}
              className="w-10 h-10 rounded-lg border border-gray-300 cursor-pointer mr-2"
            />
            <input
              type="text"
              value={props.textColor}
              onChange={(e) => setProp((props) => (props.textColor = e.target.value))}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Font Size</label>
          <input
            type="text"
            value={props.fontSize}
            onChange={(e) => setProp((props) => (props.fontSize = e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Padding</label>
          <input
            type="text"
            value={props.padding}
            onChange={(e) => setProp((props) => (props.padding = e.target.value))}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-2">Border Radius</label>
        <input
          type="text"
          value={props.borderRadius}
          onChange={(e) => setProp((props) => (props.borderRadius = e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-2">Additional Classes</label>
        <input
          type="text"
          value={props.className}
          onChange={(e) => setProp((props) => (props.className = e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
      </div>
    </div>
  );
};

Button.craft = {
  ...Button.craft,
  related: {
    settings: ButtonSettings,
  },
};
