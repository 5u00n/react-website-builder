import React from 'react';
import { useNode } from '@craftjs/core';

export const Image = ({ src, alt, width, height, objectFit, borderRadius }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <img
      ref={ref => connect(drag(ref))}
      src={src}
      alt={alt}
      style={{
        width,
        height,
        objectFit,
        borderRadius,
      }}
      className="max-w-full"
    />
  );
};

Image.craft = {
  props: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder image',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '0px',
  },
  rules: {
    canDrag: () => true
  }
};

const ImageSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Source URL</label>
        <input
          type="text"
          value={props.src}
          onChange={(e) => setProp((props) => (props.src = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Alt Text</label>
        <input
          type="text"
          value={props.alt}
          onChange={(e) => setProp((props) => (props.alt = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Width</label>
          <input
            type="text"
            value={props.width}
            onChange={(e) => setProp((props) => (props.width = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Height</label>
          <input
            type="text"
            value={props.height}
            onChange={(e) => setProp((props) => (props.height = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Object Fit</label>
        <select
          value={props.objectFit}
          onChange={(e) => setProp((props) => (props.objectFit = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="cover">Cover</option>
          <option value="contain">Contain</option>
          <option value="fill">Fill</option>
          <option value="none">None</option>
          <option value="scale-down">Scale Down</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Border Radius</label>
        <input
          type="text"
          value={props.borderRadius}
          onChange={(e) => setProp((props) => (props.borderRadius = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

Image.craft = {
  ...Image.craft,
  related: {
    settings: ImageSettings
  }
};
