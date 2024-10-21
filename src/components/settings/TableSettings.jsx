// src/components/settings/TableSettings.js
import React from 'react';

const TableSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Table Data (JSON)</label>
      <textarea
        name="data"
        value={settings.data || ''}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default TableSettings;