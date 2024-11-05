import { Element, useEditor } from '@craftjs/core';
import React from 'react';

import { FaRegSquare, FaRegHandPointer, FaFont, FaYoutube } from 'react-icons/fa';
import { Button } from '../../Elements/Button';
import { Container } from '../../Elements/Container';
import { Text } from '../../Elements/Text';
import { Video } from '../../Elements/Video';

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { ResizablePanel } from './../ResizablePanel';

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  if (!enabled) {
    return null;
  }


  return (
    <ResizablePanel defaultWidth={90} minWidth={90} maxWidth={400}>
    <div className={`h-full overflow-auto p-1`}>
      <div className={`toolbox transition w-full h-full flex flex-col bg-white op border border-gray-200`}>
        <h6 className='text-center text-xs font-bold py-3'>Elements</h6>
        <div className="flex flex-wrap items-center justify-center">
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
                <a className="m-1 cursor-move flex flex-col items-center justify-center border border-gray-200 rounded p-1 shadow-sm w-[56px] h-[56px]">
                  <FaRegSquare className="w-6 h-6 fill-gray-500" />
                  <span className=' text-xs'>Container</span>
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
                <a className="m-1 cursor-move flex flex-col items-center justify-center border border-gray-200 rounded p-1 shadow-sm w-[56px] h-[56px]">
                  <FaFont className="w-6 h-6 fill-gray-500" />
                  <span className=' text-xs'>Text</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>Text</TooltipContent>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Button />)}>
            <Tooltip>
              <TooltipTrigger>
                <a className="m-1 cursor-move flex flex-col items-center justify-center border border-gray-200 rounded p-1 shadow-sm w-[56px] h-[56px]">
                  <FaRegHandPointer className="w-6 h-6 fill-gray-500" />
                  <span className=' text-xs'>Button</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>Button</TooltipContent>
            </Tooltip>
          </div>
          <div ref={(ref) => create(ref, <Video />)}>
            <Tooltip>
              <TooltipTrigger>
                <a className="m-1 cursor-move flex flex-col items-center justify-center border border-gray-200 rounded p-1 shadow-sm w-[56px] h-[56px]">
                  <FaYoutube className="w-6 h-6 fill-gray-500" />
                  <span className=' text-xs'>Video</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>Video</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    </ResizablePanel>
  );
};
