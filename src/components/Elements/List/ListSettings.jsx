import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const ListSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="List Type">
        <ToolbarItem
          full={true}
          propKey="type"
          type="select"
          label="List Type"
          options={[
            { value: 'unordered', label: 'Unordered' },
            { value: 'ordered', label: 'Ordered' }
          ]}
        />
      </ToolbarSection>
      <ToolbarSection title="Appearance">
        <ToolbarItem
          full={true}
          propKey="bulletColor"
          type="color"
          label="Bullet Color"
        />
        <ToolbarItem
          full={true}
          propKey="textColor"
          type="color"
          label="Text Color"
        />
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="text"
          label="Font Size"
        />
        <ToolbarItem
          full={true}
          propKey="spacing"
          type="text"
          label="Item Spacing"
        />
      </ToolbarSection>
      <ToolbarSection title="Content">
        <ToolbarItem
          full={true}
          propKey="items"
          type="textarea"
          label="List Items (one per line)"
          onChange={(value) => setProp(props => props.items = value.split('\n'))}
        />
      </ToolbarSection>
    </div>
  );
};
