import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const TemplateSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Layout">
        <ToolbarItem
          full={true}
          propKey="layout"
          type="select"
          label="Layout Style"
          options={[
            { value: 'split', label: 'Split (2 Columns)' },
            { value: 'thirds', label: 'Thirds (3 Columns)' },
            { value: 'asymmetric', label: 'Asymmetric (2/3 + 1/3)' },
            { value: 'stacked', label: 'Stacked (1 Column)' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="contentAlignment"
          type="select"
          label="Content Alignment"
          options={[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Appearance">
        <ToolbarItem
          full={true}
          propKey="theme"
          type="select"
          label="Theme"
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'glass', label: 'Glass Morphism' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="accentColor"
          type="color"
          label="Accent Color"
        />
      </ToolbarSection>

      <ToolbarSection title="Spacing">
        <ToolbarItem
          full={true}
          propKey="padding"
          type="text"
          label="Section Padding"
        />
        <ToolbarItem
          full={true}
          propKey="gap"
          type="text"
          label="Gap Between Sections"
        />
      </ToolbarSection>

      <ToolbarSection title="Background">
        <ToolbarItem
          full={true}
          propKey="backgroundImage"
          type="text"
          label="Background Image URL"
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

      <ToolbarSection title="Effects">
        <ToolbarItem
          full={true}
          propKey="animation"
          type="checkbox"
          label="Enable Animations"
        />
      </ToolbarSection>

      <ToolbarSection title="Content">
        <ToolbarItem
          full={true}
          propKey="sections"
          type="dynamic-list"
          label="Sections"
          itemFields={[
            { key: 'title', type: 'text', label: 'Title' },
            { key: 'content', type: 'textarea', label: 'Content' },
            { key: 'image', type: 'text', label: 'Image URL' },
            { key: 'button', type: 'text', label: 'Button Text' }
          ]}
        />
      </ToolbarSection>
    </div>
  );
};
