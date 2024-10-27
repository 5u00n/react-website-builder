import React from 'react';
import { useNode } from '@craftjs/core';

import { TextSettings } from './TextSettings';

export const Text = ({
  text,
  fontSize = '16px',
  fontWeight = 'normal',
  color = '#000000',
  textAlign = 'left',
  lineHeight = '1.5',
  letterSpacing = 'normal',
  margin = '0px',
  padding = '0px',
  fontFamily = 'inherit'
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <p
      ref={ref => connect(drag(ref))}
      style={{
        fontSize,
        fontWeight,
        color,
        textAlign,
        lineHeight,
        letterSpacing,
        margin,
        padding,
        fontFamily
      }}
    >
      {text}
    </p>
  );
};

Text.craft = {
  props: {
    text: 'Enter your text here',
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'left',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    margin: '0px',
    padding: '0px',
    fontFamily: 'inherit'
  },
  related: {
    toolbar: TextSettings
  }
};
