import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const SpacerSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Spacing">
        <ToolbarItem
          full={true}
          propKey="isResponsive"
          type="checkbox"
          label="Responsive"
        />
        {!props.isResponsive && (
          <ToolbarItem
            full={true}
            propKey="height"
            type="slider"
            label="Height"
            min={0}
            max={200}
            step={1}
          />
        )}
      </ToolbarSection>
    </div>
  );
};
