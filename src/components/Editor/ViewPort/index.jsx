import { useEditor } from '@craftjs/core';
import cx from 'classnames';
import React, { useEffect } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Toolbox } from './Toolbox';
import { TooltipProvider } from '../../ui/tooltip';

export const Viewport = ({ children }) => {
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*'
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport">
      <TooltipProvider>
        <div
          className={cx(['flex h-full overflow-hidden flex-row w-full fixed'])}
        >
          <Toolbox />
          <div className="page-container flex flex-1 h-full flex-col">
            <Header />
            <div
              className={cx([
                'craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto',
                {
                  'bg-renderer-gray': enabled,
                },
              ])}
              ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
            >
              <div className={`relative overflow-hidden flex-col flex items-center  ${enabled ? 'pt-8 w-[800px] mx-auto' : ''}`}>
                {children}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </TooltipProvider>
    </div>
  );
};
