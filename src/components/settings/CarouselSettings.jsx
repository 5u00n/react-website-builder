// src/components/settings/CarouselSettings.js
import React from 'react';

const CarouselSettings = ({ settings, handleSettingChange }) => (
  <>
    <div className="mb-4">
      <label className="block mb-2 font-medium">Images (comma separated URLs)</label>
      <textarea
        name="images"
        value={settings.images || ''}
        onChange={handleSettingChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  </>
);

export default CarouselSettings;