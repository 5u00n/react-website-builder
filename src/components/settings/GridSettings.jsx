// src/components/settings/GridSettings.js
import React from 'react';

const GridSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Number of Columns</label>
      <input
        type="number"
        name="columns"
        value={settings.columns || 1}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Gap</label>
      <input
        type="text"
        name="gap"
        value={settings.gap || '0px'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default GridSettings;