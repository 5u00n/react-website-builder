import React from 'react';
import { useNode } from '@craftjs/core';

export const Template = ({ layout, backgroundColor, padding }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      className="w-full grid gap-4"
      style={{
        display: 'grid',
        gridTemplateColumns: layout === 'two-column' ? '1fr 1fr' : '1fr',
        gap: '1rem',
        backgroundColor,
        padding
      }}
    >
      <div className="bg-gray-100 p-4 rounded">Section 1</div>
      {layout === 'two-column' && (
        <div className="bg-gray-100 p-4 rounded">Section 2</div>
      )}
    </div>
  );
};

const TemplateSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Layout</label>
        <select
          value={props.layout}
          onChange={e => setProp(props => props.layout = e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="single-column">Single Column</option>
          <option value="two-column">Two Columns</option>
        </select>
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
        <label className="block text-sm font-medium mb-1">Padding</label>
        <input
          type="text"
          value={props.padding}
          onChange={e => setProp(props => props.padding = e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

Template.craft = {
  props: {
    layout: 'single-column',
    backgroundColor: '#ffffff',
    padding: '1rem'
  },
  related: {
    settings: TemplateSettings
  }
};
