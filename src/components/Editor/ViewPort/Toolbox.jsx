import { Element, useEditor } from '@craftjs/core';
import React from 'react';

import { FaRegSquare, FaRegHandPointer, FaFont, FaYoutube } from 'react-icons/fa';
import { Button } from '../../Elements/Button';
import { Container } from '../../Elements/Container';
import { Text } from '../../Elements/Text';
import { Video } from '../../Elements/Video';

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div className={`h-full overflow-auto ${enabled ? '' : 'hidden'}`}>
      <div className={`toolbox transition w-12 h-full flex flex-col bg-white ${!enabled ? 'opacity-0' : ''}`}>
        <div className="flex flex-1 flex-col items-center pt-3">
          <div
            ref={(ref) =>
              create(
                ref,
                <Element
                  canvas
                  is={Container}
                  background={{ r: 78, g: 78, b: 78, a: 1 }}
                  color={{ r: 0, g: 0, b: 0, a: 1 }}
                  height="300px"
                  width="100%"
                ></Element>
              )
            }
          >
            <Tooltip>
              <TooltipTrigger>
                <a className="m-2 pb-2 cursor-move block">
                  <FaRegSquare className="w-5 h-5 fill-gray-500" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Container</TooltipContent>
            </Tooltip>
          </div>
          <div
            ref={(ref) =>
              create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
            }
          >
            <Tooltip>
              <TooltipTrigger>
                <a className="m-2 pb-2 cursor-move block">
                  <FaFont className="w-5 h-5 fill-gray-500" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Text</TooltipContent>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Button />)}>
            <Tooltip>
              <TooltipTrigger>
                <a className="m-2 pb-2 cursor-move block">
                  <FaRegHandPointer className="w-5 h-5 fill-gray-500" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Button</TooltipContent>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Video />)}>
            <Tooltip>
              <TooltipTrigger>
                <a className="m-2 pb-2 cursor-move block">
                  <FaYoutube className="w-5 h-5 fill-gray-500" />
                </a>
              </TooltipTrigger>
              <TooltipContent>Video</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
