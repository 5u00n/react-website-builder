import React from 'react';
import { useNode } from '@craftjs/core';

export const Spacer = ({ size = '1rem' }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{
        width: '100%',
        height: size
      }}
    />
  );
};

Spacer.craft = {
  props: {
    size: '1rem'
  },
  related: {
    settings: SpacerSettings
  }
};
