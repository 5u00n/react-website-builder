import React, { useState, useEffect } from 'react';
import TextSettings from './settings/TextSettings';
import ImageSettings from './settings/ImageSettings';
import VideoSettings from './settings/VideoSettings';
import TableSettings from './settings/TableSettings';
import PriceListSettings from './settings/PriceListSettings';
import GridSettings from './settings/GridSettings';
import FlexSettings from './settings/FlexSettings';
import ListSettings from './settings/ListSettings';
import HeaderSettings from './settings/HeaderSettings';
import CarouselSettings from './settings/CarouselSettings';
import AnimationSettings from './settings/AnimationSettings';

const SettingsPanel = ({ selectedComponent, updateComponent }) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    if (selectedComponent) {
      setSettings(selectedComponent.settings || {});
    }
  }, [selectedComponent]);

  const handleSettingChange = (e) => {
    const { name, value } = e.target;
    const updatedSettings = { ...settings, [name]: value };
    setSettings(updatedSettings);
    updateComponent(selectedComponent.id, updatedSettings);
  };

  if (!selectedComponent) {
    return <div className="p-4 text-gray-500">Select a component to edit its settings</div>;
  }

  const renderSettings = () => {
    switch (selectedComponent.type) {
      case 'text':
        return <TextSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'image':
        return <ImageSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'video':
        return <VideoSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'table':
        return <TableSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'priceList':
        return <PriceListSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'grid':
        return <GridSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'flex':
        return <FlexSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'list':
        return <ListSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'header':
        return <HeaderSettings settings={settings} handleSettingChange={handleSettingChange} />;
      case 'carousel':
        return <CarouselSettings settings={settings} handleSettingChange={handleSettingChange} />;
      default:
        return <div className="p-4 text-gray-500">No settings available for this component</div>;
    }
  };

  return (
    <div className="w-64 p-6 bg-gray-100 h-full border-l border-gray-300">
      <h3 className="text-xl font-bold mb-6">Settings</h3>
      {renderSettings()}
      <AnimationSettings settings={settings} handleSettingChange={handleSettingChange} />
    </div>
  );
};

export default SettingsPanel;