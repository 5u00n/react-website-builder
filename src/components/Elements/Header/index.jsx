import React from 'react';
import { useNode } from '@craftjs/core';
import {HeaderSettings} from './HeaderSettings';

export const Header = ({
  text,
  level = 'h1',
  color = '#000000',
  fontSize,
  fontWeight = 'bold',
  textAlign = 'left',
  margin = '1rem',
  lineHeight = '1.2'
}) => {
  const { connectors: { connect, drag } } = useNode();

  const TagName = level;

  const defaultSizes = {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1rem'
  };

  return (
    <TagName
      ref={ref => connect(drag(ref))}
      style={{
        color,
        fontSize: fontSize || defaultSizes[level],
        fontWeight,
        textAlign,
        margin: `${margin} 0`,
        lineHeight
      }}
    >
      {text}
    </TagName>
  );
};

Header.craft = {
  props: {
    text: 'Header Text',
    level: 'h1',
    color: '#000000',
    fontSize: '',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: '1rem',
    lineHeight: '1.2'
  },
  related: {
    toolbar: HeaderSettings
  }
};
