import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const VideoSettings = () => {
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
          label="Video URL"
        />
        <ToolbarItem
          full={true}
          propKey="poster"
          type="text"
          label="Poster Image URL"
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
      <ToolbarSection title="Playback">
        <ToolbarItem
          full={true}
          propKey="autoplay"
          type="checkbox"
          label="Autoplay"
        />
        <ToolbarItem
          full={true}
          propKey="controls"
          type="checkbox"
          label="Show Controls"
        />
        <ToolbarItem
          full={true}
          propKey="loop"
          type="checkbox"
          label="Loop"
        />
        <ToolbarItem
          full={true}
          propKey="muted"
          type="checkbox"
          label="Muted"
        />
      </ToolbarSection>
      <ToolbarSection title="Appearance">
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
      </ToolbarSection>
    </div>
  );
};
