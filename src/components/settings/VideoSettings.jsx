// src/components/settings/VideoSettings.js
import React from 'react';

const VideoSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Video URL</label>
      <input
        type="text"
        name="src"
        value={settings.src || ''}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default VideoSettings;