// src/components/settings/ImageSettings.js
import React from 'react';

const ImageSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Image URL</label>
      <input
        type="text"
        name="src"
        value={settings.src || 'https://via.placeholder.com/150'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Alt Text</label>
      <input
        type="text"
        name="alt"
        value={settings.alt || 'some-alt-text'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Width</label>
      <input
        type="number"
        name="width"
        value={settings.width || 100}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Height</label>
      <input
        type="number"
        name="height"
        value={settings.height || 100}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
<div className="mb-4">
      <label className="block mb-2 font-medium">Border Radius</label>
      <input
        type="number"
        name="borderRadius"
        value={settings.borderRadius || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Border Color</label>
      <input
        type="color"
        name="borderColor"
        value={settings.borderColor || '#000000'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
        style={{ height: '40px' }}
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Border Width</label>
      <input
        type="number"
        name="borderWidth"
        value={settings.borderWidth || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Padding</label>
      <input
        type="number"
        name="padding"
        value={settings.padding || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Margin</label>
      <input
        type="number"
        name="margin"
        value={settings.margin || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Background Color</label>
      <input
        type="color"
        name="backgroundColor"
        value={settings.backgroundColor || '#ffffff'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
        style={{ height: '40px' }}
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Shadow Color</label>
      <input
        type="color"
        name="shadowColor"
        value={settings.shadowColor || '#000000'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
        style={{ height: '40px' }}
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Shadow Blur</label>
      <input
        type="number"
        name="shadowBlur"
        value={settings.shadowBlur || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Shadow Offset X</label>
      <input
        type="number"
        name="shadowOffsetX"
        value={settings.shadowOffsetX || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Shadow Offset Y</label>
      <input
        type="number"
        name="shadowOffsetY"
        value={settings.shadowOffsetY || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Opacity</label>
      <input
        type="number"
        name="opacity"
        value={settings.opacity || 1}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />

    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Rotation</label>
      <input
        type="number"
        name="rotation"
        value={settings.rotation || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Scale</label>
      <input
        type="number"
        name="scale"
        value={settings.scale || 1}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Z-Index</label>
      <input
        type="number"
        name="zIndex"
        value={settings.zIndex || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Position</label>
      <select
        name="position"
        value={settings.position || 'static'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="static">Static</option>
        <option value="relative">Relative</option>
        <option value="absolute">Absolute</option>
        <option value="fixed">Fixed</option>
        <option value="sticky">Sticky</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Top</label>
      <input
        type="number"
        name="top"
        value={settings.top || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Right</label>
      <input
        type="number"
        name="right"
        value={settings.right || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Bottom</label>
      <input
        type="number"
        name="bottom"
        value={settings.bottom || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-2 font-medium">Left</label>
      <input
        type="number"
        name="left"
        value={settings.left || 0}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    

  </>
);

export default ImageSettings;