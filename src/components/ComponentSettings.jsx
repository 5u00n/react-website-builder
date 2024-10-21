// src/components/ComponentSettings.js
import React from 'react';

const ComponentSettings = ({ selectedComponent, updateComponent }) => {
    if (!selectedComponent) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateComponent(selectedComponent.id, { ...selectedComponent.settings, [name]: value });
    };

    switch (selectedComponent.type) {
        case 'text':
            return (
                <div>
                    <label>
                        Text:
                        <input
                            type="text"
                            name="text"
                            value={selectedComponent.settings.text || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Font Size:
                        <input
                            type="number"
                            name="fontSize"
                            value={selectedComponent.settings.fontSize || 16}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Color:
                        <input
                            type="color"
                            name="color"
                            value={selectedComponent.settings.color || '#000000'}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            );
        case 'image':
            return (
                <div>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            name="src"
                            value={selectedComponent.settings.src || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Alt Text:
                        <input
                            type="text"
                            name="alt"
                            value={selectedComponent.settings.alt || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            );
        case 'video':
            return (
                <div>
                    <label>
                        Video URL:
                        <input
                            type="text"
                            name="src"
                            value={selectedComponent.settings.src || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            );
        case 'table':
            return (
                <div>
                    <label>
                        Table Data (JSON):
                        <textarea
                            name="data"
                            value={selectedComponent.settings.data || ''}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            );
        // Add more cases for other component types
        default:
            return null;
    }
};

export default ComponentSettings;