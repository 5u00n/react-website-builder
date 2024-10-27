import React from 'react';
import { useNode } from '@craftjs/core';

export const Divider = ({ color = '#e5e7eb', thickness = '1px', margin = '1rem' }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <hr
      ref={ref => connect(drag(ref))}
      style={{
        border: 'none',
        height: thickness,
        backgroundColor: color,
        margin: `${margin} 0`,
        width: '100%'
      }}
    />
  );
};

Divider.craft = {
  props: {
    color: '#e5e7eb',
    thickness: '1px',
    margin: '1rem'
  },
  related: {
    settings: DividerSettings
  }
};
