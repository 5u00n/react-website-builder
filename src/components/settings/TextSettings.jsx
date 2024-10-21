// src/components/settings/TextSettings.js
import React from 'react';

const TextSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Text</label>
      <input
        type="text"
        name="text"
        value={settings.text || ''}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Font Size</label>
      <input
        type="number"
        name="fontSize"
        value={settings.fontSize || '16'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Text Color</label>
      <input
        type="color"
        name="color"
        value={settings.color || '#000000'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
        style={{ height: '40px' }}
      />
    </div>
  </>
);

export default TextSettings;