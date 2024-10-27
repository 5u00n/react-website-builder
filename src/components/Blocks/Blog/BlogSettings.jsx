import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const BlogSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Layout">
        <ToolbarItem
          full={true}
          propKey="columns"
          type="number"
          label="Columns"
          min={1}
          max={4}
        />
        <ToolbarItem
          full={true}
          propKey="spacing"
          type="text"
          label="Grid Spacing"
        />
        <ToolbarItem
          full={true}
          propKey="imageHeight"
          type="text"
          label="Image Height"
        />
      </ToolbarSection>

      <ToolbarSection title="Display Options">
        <ToolbarItem
          full={true}
          propKey="showImages"
          type="checkbox"
          label="Show Images"
        />
        <ToolbarItem
          full={true}
          propKey="showDate"
          type="checkbox"
          label="Show Date"
        />
        <ToolbarItem
          full={true}
          propKey="showExcerpt"
          type="checkbox"
          label="Show Excerpt"
        />
      </ToolbarSection>

      <ToolbarSection title="Colors">
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
      </ToolbarSection>

      <ToolbarSection title="Content">
        <ToolbarItem
          full={true}
          propKey="posts"
          type="dynamic-list"
          label="Blog Posts"
          itemFields={[
            { key: 'title', type: 'text', label: 'Title' },
            { key: 'date', type: 'date', label: 'Date' },
            { key: 'excerpt', type: 'textarea', label: 'Excerpt' },
            { key: 'image', type: 'text', label: 'Image URL' }
          ]}
        />
      </ToolbarSection>
    </div>
  );
};
