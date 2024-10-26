// src/components/settings/HeaderSettings.js
import React from 'react';

const HeaderSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Header Text</label>
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
        value={settings.fontSize || 24}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default HeaderSettings;