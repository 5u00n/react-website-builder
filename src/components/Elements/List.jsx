import React from 'react';
import { useNode } from '@craftjs/core';

export const List = ({ items, listType, listStyleType, padding, fontSize, fontWeight, color, orientation }) => {
  const { connectors: { connect, drag }, selected, actions: { setProp } } = useNode((node) => ({
    selected: node.events.selected
  }));

  return (
    <ul
      ref={ref => connect(drag(ref))}
      style={{
        listStyleType: listStyleType,
        paddingLeft: padding,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        display: orientation === 'horizontal' ? 'flex' : 'block',
        gap: orientation === 'horizontal' ? '10px' : '0px',
        alignItems: orientation === 'horizontal' ? 'center' : 'flex-start',
        justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start',
        flexWrap: orientation === 'horizontal' ? 'wrap' : 'nowrap',
        width: orientation === 'horizontal' ? '100%' : 'auto',
        height: orientation === 'horizontal' ? 'auto' : '100%',
        margin: orientation === 'horizontal' ? '0px' : '10px 0px',
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

  const handleItemChange = (index, value) => {
    setProp((props) => {
      const newItems = [...props.items];
      newItems[index] = value;
      //return { ...props, items: newItems };
      props.items = newItems;
    });
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
          <label className="text-sm font-medium text-gray-700 mb-1">Style Type</label>
          <select
            value={props.listStyleType}
            onChange={(e) => setProp((props) => (props.listStyleType = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="disc">Disc</option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="decimal">Decimal</option>
            <option value="none">None</option>
          </select>
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
        <label className="text-sm font-medium text-gray-700 mb-1">Orientation</label>
        <select
          value={props.orientation}
          onChange={(e) => setProp((props) => (props.orientation = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="vertical">Vertical</option>
          <option value="horizontal">Horizontal</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">List Items</label>
        {props.items.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={item}
              onChange={(e) => handleItemChange(index, e.target.value)}
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
  items: ['Item 1', 'Item 2', 'Item 3'],
  orientation: 'vertical'
};

List.craft = {
  props: ListDefaultProps,
  related: {
    settings: ListSettings
  }
};
