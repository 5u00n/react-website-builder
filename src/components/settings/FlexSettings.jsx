// src/components/settings/FlexSettings.js
import React from 'react';

const FlexSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Direction</label>
      <select
        name="direction"
        value={settings.direction || 'row'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="row">Row</option>
        <option value="column">Column</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Justify Content</label>
      <select
        name="justifyContent"
        value={settings.justifyContent || 'flex-start'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="flex-start">Flex Start</option>
        <option value="center">Center</option>
        <option value="flex-end">Flex End</option>
        <option value="space-between">Space Between</option>
        <option value="space-around">Space Around</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Align Items</label>
      <select
        name="alignItems"
        value={settings.alignItems || 'stretch'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="stretch">Stretch</option>
        <option value="flex-start">Flex Start</option>
        <option value="center">Center</option>
        <option value="flex-end">Flex End</option>
      </select>
    </div>
  </>
);

export default FlexSettings;