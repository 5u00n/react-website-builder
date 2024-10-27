import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const ImageSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Source">
        <ToolbarItem
          full={true}
          propKey="src"
          type="text"
          label="Image URL"
        />
        <ToolbarItem
          full={true}
          propKey="alt"
          type="text"
          label="Alt Text"
        />
      </ToolbarSection>
      <ToolbarSection title="Dimensions">
        <ToolbarItem
          full={true}
          propKey="width"
          type="text"
          label="Width"
        />
        <ToolbarItem
          full={true}
          propKey="height"
          type="text"
          label="Height"
        />
      </ToolbarSection>
      <ToolbarSection title="Appearance">
        <ToolbarItem
          full={true}
          propKey="objectFit"
          type="select"
          label="Object Fit"
          options={[
            { value: 'cover', label: 'Cover' },
            { value: 'contain', label: 'Contain' },
            { value: 'fill', label: 'Fill' },
            { value: 'none', label: 'None' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="borderRadius"
          type="text"
          label="Border Radius"
        />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="select"
          label="Shadow"
          options={[
            { value: 'none', label: 'None' },
            { value: '0 4px 6px rgba(0, 0, 0, 0.1)', label: 'Small' },
            { value: '0 10px 15px rgba(0, 0, 0, 0.1)', label: 'Medium' },
            { value: '0 20px 25px rgba(0, 0, 0, 0.1)', label: 'Large' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="opacity"
          type="slider"
          label="Opacity"
          min={0}
          max={1}
          step={0.1}
        />
      </ToolbarSection>
    </div>
  );
};
