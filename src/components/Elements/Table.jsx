import React from 'react';
import { useNode } from '@craftjs/core';

export const Table = ({ rows, columns, width, height, borderColor, headerColor, cellColor }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div ref={ref => connect(drag(ref))} style={{ width, height, overflow: 'auto' }}>
      <table className="table-auto w-full border-collapse">
        <thead style={{ backgroundColor: headerColor }}>
          <tr>
            {columns.map((header, index) => (
              <th key={index} className="px-4 py-2 border" style={{ borderColor }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2" style={{ borderColor, backgroundColor: cellColor }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  const handleAddRow = () => {
    setProp(props => ({
      ...props,
      rows: [...props.rows, Array(props.columns.length).fill('New Cell')]
    }));
  };

  const handleAddColumn = () => {
    setProp(props => ({
      ...props,
      columns: [...props.columns, 'New Header'],
      rows: props.rows.map(row => [...row, 'New Cell'])
    }));
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Width</label>
          <input
            type="text"
            value={props.width}
            onChange={(e) => setProp(props => ({ ...props, width: e.target.value }))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Height</label>
          <input
            type="text"
            value={props.height}
            onChange={(e) => setProp(props => ({ ...props, height: e.target.value }))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Border Color</label>
          <input
            type="color"
            value={props.borderColor}
            onChange={(e) => setProp(props => ({ ...props, borderColor: e.target.value }))}
            className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Header Color</label>
          <input
            type="color"
            value={props.headerColor}
            onChange={(e) => setProp(props => ({ ...props, headerColor: e.target.value }))}
            className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Cell Color</label>
          <input
            type="color"
            value={props.cellColor}
            onChange={(e) => setProp(props => ({ ...props, cellColor: e.target.value }))}
            className="h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleAddRow}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Row
        </button>
        <button
          onClick={handleAddColumn}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Column
        </button>
      </div>
    </div>
  );
};

Table.craft = {
  props: {
    columns: ['Header 1', 'Header 2', 'Header 3'],
    rows: [
      ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
      ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3']
    ],
    width: '100%',
    height: 'auto',
    borderColor: '#E0E0E0',
    headerColor: '#F3F4F6',
    cellColor: '#FFFFFF'
  },
  related: {
    settings: TableSettings
  }
};
