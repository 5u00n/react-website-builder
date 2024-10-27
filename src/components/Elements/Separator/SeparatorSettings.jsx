import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const SeparatorSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Style">
        <ToolbarItem
          full={true}
          propKey="orientation"
          type="select"
          label="Orientation"
          options={[
            { value: 'horizontal', label: 'Horizontal' },
            { value: 'vertical', label: 'Vertical' }
          ]}
        />
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
      </ToolbarSection>
      <ToolbarSection
        title="Spacing"
        props={['size']}
        summary={({ size }) => size}
      >
        <ToolbarItem
          propKey="size"
          type="slider"
          label="Size"
        />
      </ToolbarSection>
    </div>
  );
};
