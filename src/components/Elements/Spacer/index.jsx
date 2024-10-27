import React from 'react';
import { useNode } from '@craftjs/core';
import { SpacerSettings } from './SpacerSettings';

export const Spacer = ({ height = '1rem', isResponsive = false }) => {
  const { connectors: { connect, drag } } = useNode();

  const responsiveClass = isResponsive 
    ? 'h-4 sm:h-8 md:h-12 lg:h-16 xl:h-20' 
    : '';

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={!isResponsive ? { height } : {}}
      className={`w-full ${responsiveClass}`}
    />
  );
};

Spacer.craft = {
  props: {
    height: '1rem',
    isResponsive: false
  },
  related: {
    toolbar: SpacerSettings
  }
};
