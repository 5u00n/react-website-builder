import { useEditor } from '@craftjs/core';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

import cx from 'classnames';
import React from 'react';

import { CheckIcon, ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { MdBuild } from 'react-icons/md';

export const Header = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  console.log(enabled);

  return (
    <div className={`w-full h-11 z-[99999] ${enabled ? 'relative' : 'fixed'} px-2.5 ${enabled ? 'bg-gray-400' : 'bg-transparent'} flex text-white transition`}>
      <div className="items-center flex w-full px-4 justify-end">
        {enabled && (
          <div className="flex-1 flex space-x-2.5">
            <Tooltip>
              <TooltipTrigger>
                <a
                  className={`cursor-pointer ${!canUndo ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => actions.history.undo()}
                >
                  <ArrowLeftIcon className="w-5 h-5 fill-gray-500" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <a
                  className={`cursor-pointer ${!canRedo ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => actions.history.redo()}
                >
                  <ArrowRightIcon className="w-5 h-5 fill-gray-500" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </div>
        )}
        <div className="flex">
          <a
            className={cx([
              'flex items-center px-3.5 py-1.5 rounded text-white text-sm transition cursor-pointer',
              {
                'bg-green-400': enabled,
                'bg-primary': !enabled,
              },
            ])}
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {enabled ? <CheckIcon className="mr-1.5 w-3 h-3 fill-white opacity-90" /> : <MdBuild className="mr-1.5 w-3 h-3 fill-white opacity-90" />}
            {enabled ? 'Finish Editing' : 'Edit'}
          </a>
        </div>
      </div>
    </div>
  );
};
