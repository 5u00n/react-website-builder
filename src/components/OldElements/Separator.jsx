import React from 'react';
import { useNode } from '@craftjs/core';

export const Separator = ({ orientation = 'horizontal', color = '#e5e7eb', size = '2rem' }) => {
  const { connectors: { connect, drag } } = useNode();

  const style = {
    backgroundColor: color,
    ...(orientation === 'horizontal' 
      ? { width: '100%', height: '1px', margin: `${size} 0` }
      : { width: '1px', height: size, margin: `0 ${size}` })
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={style}
      role="separator"
    />
  );
};

Separator.craft = {
  props: {
    orientation: 'horizontal',
    color: '#e5e7eb',
    size: '2rem'
  },
  related: {
    settings: SeparatorSettings
  }
};
