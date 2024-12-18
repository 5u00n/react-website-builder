import { useEditor } from '@craftjs/core';
import { Layers } from '@craftjs/layers';
import React, { useState } from 'react';

import { SidebarItem } from './SidebarItem';

import { FaTools, FaLayerGroup } from 'react-icons/fa';
import { Toolbar } from '../../Toolbar';

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div className={`h-full overflow-auto bg-white ${enabled ? '' : 'hidden'}`} style={{ width: '300px', paddingRight: '17px', marginRight: '-17px' }}>
      <div
        className={`sidebar transition-opacity w-[280px] ${enabled ? 'opacity-100 mr-0' : 'opacity-0 mr-[-280px]'
          }`}
      >
        <div className="flex flex-col h-full">
          <SidebarItem
            icon={FaTools}
            title="Customize"
            height={!layersVisible ? 'full' : '55%'}
            visible={toolbarVisible}
            onChange={(val) => setToolbarVisible(val)}
          >
            <Toolbar />
          </SidebarItem>

          <SidebarItem
            icon={FaLayerGroup}
            title="Layers"
            height={!toolbarVisible ? 'full' : '45%'}
            visible={layersVisible}
            onChange={(val) => setLayerVisible(val)}
          >
            <div >
              <Layers expandRootOnLoad={true} />
            </div>
          </SidebarItem>

        </div>
      </div>
    </div>
  );
};
