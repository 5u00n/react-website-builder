// src/components/settings/AnimationSettings.js
import React from 'react';

const AnimationSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Animation Type</label>
      <select
        name="animationType"
        value={settings.animationType || 'none'}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="none">None</option>
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
        <option value="scale">Scale</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Duration (ms)</label>
      <input
        type="number"
        name="animationDuration"
        value={settings.animationDuration || 300}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default AnimationSettings;