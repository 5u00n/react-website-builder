import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const TextSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Content">
        <ToolbarItem
          full={true}
          propKey="text"
          type="textarea"
          label="Text Content"
        />
      </ToolbarSection>
      <ToolbarSection title="Typography">
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="text"
          label="Font Size"
        />
        <ToolbarItem
          full={true}
          propKey="fontWeight"
          type="select"
          label="Font Weight"
          options={[
            { value: 'normal', label: 'Normal' },
            { value: 'bold', label: 'Bold' },
            { value: '100', label: '100' },
            { value: '200', label: '200' },
            { value: '300', label: '300' },
            { value: '400', label: '400' },
            { value: '500', label: '500' },
            { value: '600', label: '600' },
            { value: '700', label: '700' },
            { value: '800', label: '800' },
            { value: '900', label: '900' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="color"
          type="color"
          label="Text Color"
        />
        <ToolbarItem
          full={true}
          propKey="fontFamily"
          type="select"
          label="Font Family"
          options={[
            { value: 'inherit', label: 'Default' },
            { value: 'Arial, sans-serif', label: 'Arial' },
            { value: 'Times New Roman, serif', label: 'Times New Roman' },
            { value: 'Courier New, monospace', label: 'Courier New' }
          ]}
        />
      </ToolbarSection>
      <ToolbarSection title="Layout">
        <ToolbarItem
          full={true}
          propKey="textAlign"
          type="select"
          label="Text Align"
          options={[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' },
            { value: 'justify', label: 'Justify' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="lineHeight"
          type="text"
          label="Line Height"
        />
        <ToolbarItem
          full={true}
          propKey="letterSpacing"
          type="text"
          label="Letter Spacing"
        />
      </ToolbarSection>
      <ToolbarSection title="Spacing">
        <ToolbarItem
          full={true}
          propKey="margin"
          type="text"
          label="Margin"
        />
        <ToolbarItem
          full={true}
          propKey="padding"
          type="text"
          label="Padding"
        />
      </ToolbarSection>
    </div>
  );
};
