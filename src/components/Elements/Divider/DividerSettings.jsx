import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const DividerSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Style">
        <ToolbarItem
          full={true}
          propKey="color"
          type="color"
          label="Color"
        />
        <ToolbarItem
          full={true}
          propKey="thickness"
          type="text"
          label="Thickness"
        />
        <ToolbarItem
          full={true}
          propKey="style"
          type="select"
          label="Line Style"
          options={[
            { value: 'solid', label: 'Solid' },
            { value: 'dashed', label: 'Dashed' },
            { value: 'dotted', label: 'Dotted' }
          ]}
        />
      </ToolbarSection>
      <ToolbarSection
        title="Spacing"
        props={['margin']}
        summary={({ margin }) => `${margin}px`}
      >
        <ToolbarItem
          propKey="margin"
          type="slider"
          label="Margin"
        />
      </ToolbarSection>
    </div>
  );
};
