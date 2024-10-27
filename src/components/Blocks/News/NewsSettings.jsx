import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const NewsSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Header">
        <ToolbarItem
          full={true}
          propKey="title"
          type="text"
          label="Section Title"
        />
        <ToolbarItem
          full={true}
          propKey="subtitle"
          type="textarea"
          label="Section Subtitle"
        />
      </ToolbarSection>

      <ToolbarSection title="Layout">
        <ToolbarItem
          full={true}
          propKey="layout"
          type="select"
          label="Layout Style"
          options={[
            { value: 'grid', label: 'Grid' },
            { value: 'list', label: 'List' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="spacing"
          type="text"
          label="Grid Spacing"
        />
      </ToolbarSection>

      <ToolbarSection title="Appearance">
        <ToolbarItem
          full={true}
          propKey="theme"
          type="select"
          label="Color Theme"
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'colored', label: 'Colored' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="accentColor"
          type="color"
          label="Accent Color"
        />
        <ToolbarItem
          full={true}
          propKey="imageStyle"
          type="select"
          label="Image Style"
          options={[
            { value: 'rounded', label: 'Rounded' },
            { value: 'square', label: 'Square' }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Features">
        <ToolbarItem
          full={true}
          propKey="showCategories"
          type="checkbox"
          label="Show Categories"
        />
        <ToolbarItem
          full={true}
          propKey="showDates"
          type="checkbox"
          label="Show Dates"
        />
        <ToolbarItem
          full={true}
          propKey="animation"
          type="checkbox"
          label="Enable Animations"
        />
      </ToolbarSection>

      <ToolbarSection title="Articles">
        <ToolbarItem
          full={true}
          propKey="articles"
          type="dynamic-list"
          label="News Articles"
          itemFields={[
            { key: 'title', type: 'text', label: 'Title' },
            { key: 'excerpt', type: 'textarea', label: 'Excerpt' },
            { key: 'image', type: 'text', label: 'Image URL' },
            { key: 'date', type: 'text', label: 'Date' },
            { key: 'category', type: 'text', label: 'Category' },
            { key: 'link', type: 'text', label: 'Article Link' }
          ]}
        />
      </ToolbarSection>
    </div>
  );
};
