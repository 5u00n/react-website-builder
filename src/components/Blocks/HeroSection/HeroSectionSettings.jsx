import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const HeroSectionSettings = () => {
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
          propKey="subtitle"
          type="textarea"
          label="Subtitle"
        />
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
      </ToolbarSection>

      <ToolbarSection title="Appearance">
        <ToolbarItem
          full={true}
          propKey="backgroundImage"
          type="text"
          label="Background Image URL"
        />
        <ToolbarItem
          full={true}
          propKey="backgroundColor"
          type="color"
          label="Background Color"
        />
        <ToolbarItem
          full={true}
          propKey="textColor"
          type="color"
          label="Text Color"
        />
        <ToolbarItem
          full={true}
          propKey="height"
          type="text"
          label="Height"
        />
        <ToolbarItem
          full={true}
          propKey="overlayOpacity"
          type="slider"
          label="Overlay Opacity"
          min={0}
          max={1}
          step={0.1}
        />
      </ToolbarSection>

      <ToolbarSection title="Layout">
        <ToolbarItem
          full={true}
          propKey="alignment"
          type="select"
          label="Content Alignment"
          options={[
            { value: 'start', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'end', label: 'Right' }
          ]}
        />
      </ToolbarSection>
    </div>
  );
};
