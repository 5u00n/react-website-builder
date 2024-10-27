import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const FocusCardsSettings = () => {
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
          propKey="gap"
          type="text"
          label="Gap Between Cards"
        />
        <ToolbarItem
          full={true}
          propKey="padding"
          type="text"
          label="Section Padding"
        />
      </ToolbarSection>

      <ToolbarSection title="Card Style">
        <ToolbarItem
          full={true}
          propKey="backgroundColor"
          type="color"
          label="Section Background"
        />
        <ToolbarItem
          full={true}
          propKey="cardBackground"
          type="color"
          label="Card Background"
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
          label="Shadow Size"
          options={[
            { value: 'none', label: 'None' },
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
            { value: 'xl', label: 'Extra Large' }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Typography">
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

      <ToolbarSection title="Icons">
        <ToolbarItem
          full={true}
          propKey="iconSize"
          type="text"
          label="Icon Size"
        />
        <ToolbarItem
          full={true}
          propKey="iconColor"
          type="color"
          label="Icon Color"
        />
      </ToolbarSection>

      <ToolbarSection title="Effects">
        <ToolbarItem
          full={true}
          propKey="hoverEffect"
          type="checkbox"
          label="Enable Hover Effect"
        />
      </ToolbarSection>

      <ToolbarSection title="Content">
        <ToolbarItem
          full={true}
          propKey="cards"
          type="dynamic-list"
          label="Cards"
          itemFields={[
            { key: 'title', type: 'text', label: 'Title' },
            { key: 'description', type: 'textarea', label: 'Description' },
            { key: 'icon', type: 'text', label: 'Icon (emoji or icon class)' },
            { key: 'link', type: 'text', label: 'Link URL' }
          ]}
        />
      </ToolbarSection>
    </div>
  );
};
