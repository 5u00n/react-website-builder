import React from 'react';
import { useNode } from '@craftjs/core';
import { TableSettings } from './TableSettings';

export const Table = ({
  columns,
  rows,
  width,
  height,
  borderColor,
  headerColor,
  cellColor,
  textColor
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div 
      ref={ref => connect(drag(ref))}
      style={{ width, height }}
      className="overflow-x-auto"
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{ backgroundColor: headerColor, color: textColor }}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{ backgroundColor: cellColor, color: textColor }}
                  className="px-6 py-4 whitespace-nowrap text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
    cellColor: '#FFFFFF',
    textColor: '#000000'
  },
  related: {
    toolbar: TableSettings
  }
};
