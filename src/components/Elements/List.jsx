import React from 'react';
import { useNode } from '@craftjs/core';
export const List = ({ items, listType, listStyleType, padding, fontSize, fontWeight, color }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <ul 
      ref={ref => connect(drag(ref))} 
      style={{
        listStyleType: listStyleType,
        paddingLeft: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
      }}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const ListSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  const handleAddItem = () => {
    setProp((props) => ({
      ...props,
      items: [...props.items, `New Item ${props.items.length + 1}`]
    }));
  };

  const handleRemoveItem = (index) => {
    setProp((props) => ({
      ...props,
      items: props.items.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="list-settings bg-white p-4 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">List Type</label>
          <select
            value={props.listType}
            onChange={(e) => setProp((props) => (props.listType = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ul">Unordered List</option>
            <option value="ol">Ordered List</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1"> Style Type</label>
          <input
            type="text"
            value={props.listStyleType}
            onChange={(e) => setProp((props) => (props.listStyleType = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Padding Left</label>
          <input
            type="text"
            value={props.padding}
            onChange={(e) => setProp((props) => (props.padding = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Font Size</label>
          <input
            type="text"
            value={props.fontSize}
            onChange={(e) => setProp((props) => (props.fontSize = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Font Weight</label>
          <select
            value={props.fontWeight}
            onChange={(e) => setProp((props) => (props.fontWeight = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Lighter</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Color</label>
          <input
            type="color"
            value={props.color}
            onChange={(e) => setProp((props) => (props.color = e.target.value))}
            className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">List Items</label>
        {props.items.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={item}
              onChange={(e) => setProp((props) => {
                const newItems = [...props.items];
                newItems[index] = e.target.value;
                return { ...props, items: newItems };
              })}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 w-full"
            />
            <button
              onClick={() => handleRemoveItem(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={handleAddItem}
          className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export const ListDefaultProps = {
  listType: 'ul',
  listStyleType: 'disc',
  padding: '20px',
  fontSize: '16px',
  fontWeight: 'normal',
  color: '#000000',
  items: ['Item 1', 'Item 2', 'Item 3']
};

List.craft = {
  props: ListDefaultProps,
  related: {
    settings: ListSettings
  }
};
