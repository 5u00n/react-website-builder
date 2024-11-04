import React from 'react';
import { useNode } from '@craftjs/core';
import { SeparatorSettings } from './SeparatorSettings';
export const Separator = ({ orientation = 'horizontal', color = '#e5e7eb', size = '2rem', thickness = '1px' }) => {
  const { connectors: { connect, drag } } = useNode();

  const style = {
    backgroundColor: color,
    ...(orientation === 'horizontal' 
      ? { 
          width: '100%', 
          height: thickness, 
          margin: `${size} 0` 
        }
      : { 
          width: thickness, 
          height: size, 
          margin: `0 ${size}`,
          display: 'inline-block'
        })
  };

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={style}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

Separator.craft = {
  props: {
    orientation: 'horizontal',
    color: '#e5e7eb',
    size: '2rem',
    thickness: '1px'
  },
  related: {
    toolbar: SeparatorSettings
  }
};
