import React from 'react';
import { useNode } from '@craftjs/core';

export const List = ({
  items = [],
  type = 'unordered',
  bulletColor = '#000000',
  textColor = '#000000',
  fontSize = '16px',
  spacing = '0.5rem'
}) => {
  const { connectors: { connect, drag } } = useNode();

  const ListTag = type === 'ordered' ? 'ol' : 'ul';

  return (
    <ListTag
      ref={ref => connect(drag(ref))}
      style={{
        color: textColor,
        fontSize,
        listStyleColor: bulletColor
      }}
      className="list-inside"
    >
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: spacing }}>{item}</li>
      ))}
    </ListTag>
  );
};

List.craft = {
  props: {
    items: ['List item 1', 'List item 2', 'List item 3'],
    type: 'unordered',
    bulletColor: '#000000',
    textColor: '#000000',
    fontSize: '16px',
    spacing: '0.5rem'
  },
  related: {
    toolbar: ListSettings
  }
};
