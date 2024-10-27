import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const CardSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Content">
        <ToolbarItem
          full={true}
          propKey="title"
          type="text"
          label="Title"
        />
        <ToolbarItem
          full={true}
          propKey="content"
          type="textarea"
          label="Content"
        />
        <ToolbarItem
          full={true}
          propKey="image"
          type="text"
          label="Image URL"
        />
      </ToolbarSection>

      <ToolbarSection title="Layout">
        <ToolbarItem
          full={true}
          propKey="imagePosition"
          type="select"
          label="Image Position"
          options={[
            { value: 'top', label: 'Top' },
            { value: 'bottom', label: 'Bottom' }
          ]}
        />
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
        <ToolbarItem
          full={true}
          propKey="imageHeight"
          type="text"
          label="Image Height"
        />
        <ToolbarItem
          full={true}
          propKey="padding"
          type="text"
          label="Padding"
        />
      </ToolbarSection>

      <ToolbarSection title="Style">
        <ToolbarItem
          full={true}
          propKey="backgroundColor"
          type="color"
          label="Background Color"
        />
        <ToolbarItem
          full={true}
          propKey="titleColor"
          type="color"
          label="Title Color"
        />
        <ToolbarItem
          full={true}
          propKey="textColor"
          type="color"
          label="Text Color"
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
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
            { value: 'xl', label: 'Extra Large' }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Button">
        <ToolbarItem
          full={true}
          propKey="buttonText"
          type="text"
          label="Button Text"
        />
        <ToolbarItem
          full={true}
          propKey="buttonLink"
          type="text"
          label="Button Link"
        />
        <ToolbarItem
          full={true}
          propKey="buttonStyle"
          type="select"
          label="Button Style"
          options={[
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
            { value: 'outline', label: 'Outline' }
          ]}
        />
      </ToolbarSection>
    </div>
  );
};
