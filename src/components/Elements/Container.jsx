import React from 'react';
import { useNode } from '@craftjs/core';

export const Container = ({ background, padding, borderRadius, borderWidth, borderColor, margin, height, width, display, gridColumns, gridRows, flexDirection, flexWrap, justifyContent, alignItems, children, ...props }) => {
  const { connectors: { connect, drag } } = useNode();

  const containerStyle = {
    background,
    padding,
    borderRadius,
    borderWidth,
    borderColor,
    margin,
    height,
    width,
    display,
    gridTemplateColumns: gridColumns,
    gridTemplateRows: gridRows,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={containerStyle}
      className="container-element hover:border-blue-300 hover:border  hover:border-dashed"
      {...props}
    >
      {children}
    </div>
  );
};

export const ContainerSettings = () => {
  const { actions: { setProp }, background, padding, borderRadius, borderWidth, borderColor, margin, height, width, display, gridColumns, gridRows, flexDirection, flexWrap, justifyContent, alignItems } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    borderRadius: node.data.props.borderRadius,
    borderWidth: node.data.props.borderWidth,
    borderColor: node.data.props.borderColor,
    margin: node.data.props.margin,
    height: node.data.props.height,
    width: node.data.props.width,
    display: node.data.props.display,
    gridColumns: node.data.props.gridColumns,
    gridRows: node.data.props.gridRows,
    flexDirection: node.data.props.flexDirection,
    flexWrap: node.data.props.flexWrap,
    justifyContent: node.data.props.justifyContent,
    alignItems: node.data.props.alignItems,
  }));

  return (
    <div className="container-settings bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Background:</label>
          <input type="color" value={background} onChange={(e) => setProp((props) => props.background = e.target.value)} className="w-10 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Padding:</label>
          <input type="text" value={padding} onChange={(e) => setProp((props) => props.padding = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Border Radius:</label>
          <input type="text" value={borderRadius} onChange={(e) => setProp((props) => props.borderRadius = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Border Width:</label>
          <input type="text" value={borderWidth} onChange={(e) => setProp((props) => props.borderWidth = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Border Color:</label>
          <input type="color" value={borderColor} onChange={(e) => setProp((props) => props.borderColor = e.target.value)} className="w-10 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Margin:</label>
          <input type="text" value={margin} onChange={(e) => setProp((props) => props.margin = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Height:</label>
          <input type="text" value={height} onChange={(e) => setProp((props) => props.height = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Width:</label>
          <input type="text" value={width} onChange={(e) => setProp((props) => props.width = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Display:</label>
          <select value={display} onChange={(e) => setProp((props) => props.display = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option value="block">Block</option>
            <option value="flex">Flex</option>
            <option value="grid">Grid</option>
          </select>
        </div>
        {display === 'grid' && (
          <>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Grid Columns:</label>
              <input type="text" value={gridColumns} onChange={(e) => setProp((props) => props.gridColumns = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Grid Rows:</label>
              <input type="text" value={gridRows} onChange={(e) => setProp((props) => props.gridRows = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
          </>
        )}
        {display === 'flex' && (
          <>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Flex Direction:</label>
              <select value={flexDirection} onChange={(e) => setProp((props) => props.flexDirection = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option value="row">Row</option>
                <option value="column">Column</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Flex Wrap:</label>
              <select value={flexWrap} onChange={(e) => setProp((props) => props.flexWrap = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option value="nowrap">No Wrap</option>
                <option value="wrap">Wrap</option>
              </select>
            </div>
          </>
        )}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Justify Content:</label>
          <select value={justifyContent} onChange={(e) => setProp((props) => props.justifyContent = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option value="flex-start">Start</option>
            <option value="center">Center</option>
            <option value="flex-end">End</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Align Items:</label>
          <select value={alignItems} onChange={(e) => setProp((props) => props.alignItems = e.target.value)} className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option value="flex-start">Start</option>
            <option value="center">Center</option>
            <option value="flex-end">End</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
      </div>
    </div>
  );
}

const ContainerDefaultProps = {
  background: '#FFFFFF',
  padding: '20px',
  borderRadius: '5px',
  borderWidth: '',
  borderColor: '',
  margin: '10px',
  height: 'auto',
  width: '100%',
  display: 'block',
  gridColumns: 'auto',
  gridRows: 'auto',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

export { ContainerDefaultProps };

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings
  }
};
