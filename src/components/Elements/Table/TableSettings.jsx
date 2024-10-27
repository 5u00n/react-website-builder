import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const TableSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Table Data">
        <ToolbarItem
          full={true}
          propKey="columns"
          type="text"
          label="Columns (comma-separated)"
          onChange={(value) => setProp(props => props.columns = value.split(','))}
        />
      </ToolbarSection>
      <ToolbarSection title="Appearance">
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
          propKey="borderColor"
          type="color"
          label="Border Color"
        />
        <ToolbarItem
          full={true}
          propKey="headerColor"
          type="color"
          label="Header Color"
        />
        <ToolbarItem
          full={true}
          propKey="cellColor"
          type="color"
          label="Cell Color"
        />
        <ToolbarItem
          full={true}
          propKey="textColor"
          type="color"
          label="Text Color"
        />
      </ToolbarSection>
    </div>
  );
};
