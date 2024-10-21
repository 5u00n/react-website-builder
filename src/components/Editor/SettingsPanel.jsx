import React from 'react';
import { useEditor } from '@craftjs/core';

const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return (
    <div className="w-full p-4 h-screen flex flex-col ">
      <h2 className="text-lg font-bold mb-4">Settings</h2>
      <div className="flex-shrink-0 mb-4">
        <p className="text-sm font-bold mb-2">Selected Component</p>
        <div className="p-2 border border-gray-300 rounded-lg">
          {selected?.name || "None"}
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {selected && (
          <>
            <div className="mb-4">
              {React.createElement(selected.settings)}
            </div>
            <div className="mb-4">
              <button 
                className="w-full text-white font-bold py-2 px-4 rounded bg-red-500 hover:bg-red-700" 
                onClick={() => actions.delete(selected.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsPanel;
