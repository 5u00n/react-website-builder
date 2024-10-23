import { useEditor } from '@craftjs/core';
import { Layers } from '@craftjs/layers';
import React, { useState } from 'react';

import { SidebarItem } from './SidebarItem';

import { FaTools, FaLayerGroup } from 'react-icons/fa';
import { Toolbar } from '../../Toolbar';

const Carbonads = () => {
  const domRef = React.useRef(null);

  React.useEffect(() => {
    const { current: dom } = domRef;

    if (!dom) {
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('async', 'true');

    script.setAttribute(
      'src',
      '//cdn.carbonads.com/carbon.js?serve=CEAI453N&placement=craftjsorg'
    );
    script.setAttribute('id', '_carbonads_js');

    dom.appendChild(script);

    return () => {
      const ad = dom.querySelector('#carbonads');
      if (ad) {
        dom.removeChild(ad);
      }

      dom.removeChild(script);
    };
  }, []);

  return (
    <div ref={domRef} className="w-full mt-auto">
      <div id="carbonads" className="flex w-full bg-transparent z-100">
        <div className="carbon-wrap flex">
          <div className="carbon-img flex items-center max-w-[30%]">
            <img className="block max-w-full" />
          </div>
          <div className="carbon-text text-[12px] p-2 mb-4 leading-[1.5] text-right text-[#333] font-normal flex-1">
          </div>
        </div>
        <span className="carbon-poweredby block p-1.5 text-center uppercase tracking-[0.5px] font-semibold text-[9px] leading-[1] absolute bottom-0 right-0 text-[#8f8f8f]">
        </span>
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div
      className={`transition-opacity bg-white w-[280px] ${
        enabled ? 'opacity-100 mr-0' : 'opacity-0 mr-[-280px]'
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
          {
            <Toolbar />
          }
        </SidebarItem>
        <SidebarItem
          icon={FaLayerGroup}
          title="Layers"
          height={!toolbarVisible ? 'full' : '45%'}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem>
       
      </div>
    </div>
  );
};
