// src/components/settings/ListSettings.js
import React from 'react';

const ListSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">List Items (comma separated)</label>
      <textarea
        name="items"
        value={settings.items || ''}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default ListSettings;