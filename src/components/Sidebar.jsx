// src/components/Sidebar.js
import React from 'react';
import { useDrag } from 'react-dnd';

export const COMPONENT_TYPES = 'component';

// ComponentItem used for dragging components from the sidebar
const ComponentItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: COMPONENT_TYPES,
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 bg-white shadow-lg rounded-md mb-4 cursor-move hover:bg-gray-100 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 p-6 bg-gray-200 h-full">
      <h3 className="text-xl font-bold mb-6">Components</h3>
      <ComponentItem type="text" label="Text" />
      <ComponentItem type="image" label="Image" />
      <ComponentItem type="header" label="Header" />
      <ComponentItem type="grid" label="Grid" />
      <ComponentItem type="flex" label="Flex" />
      <ComponentItem type="list" label="List" />
      <ComponentItem type="video" label="Video" />
      <ComponentItem type="carousel" label="Carousel" />
      <ComponentItem type="priceList" label="Price Listings" />
      <ComponentItem type="table" label="Table" />
    </div>
  );
};

export default Sidebar;
