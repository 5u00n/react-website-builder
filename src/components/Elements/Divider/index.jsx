import React from 'react';
import { useNode } from '@craftjs/core';
import { DividerSettings } from './DividerSettings';

export const Divider = ({ color = '#e5e7eb', thickness = '1px', margin = '1rem', style = 'solid' }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <hr
      ref={ref => connect(drag(ref))}
      style={{
        border: 'none',
        borderTop: `${thickness} ${style} ${color}`,
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
    margin: '1rem',
    style: 'solid'
  },
  related: {
    toolbar: DividerSettings
  }
};
