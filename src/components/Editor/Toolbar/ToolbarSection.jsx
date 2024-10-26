import { useNode } from '@craftjs/core';
import React, { useState } from 'react';

export const ToolbarSection = ({ title, props, summary, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res, key) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));

  const handleSummaryClick = (e) => {
    // Only toggle if clicking the summary area, not its children
    if (e.target.closest('.panel-details')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-0.5 max-h-full overflow-y-auto relative">
      <div className={`bg-transparent border-none relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-black/5 ${isExpanded ? 'my-0 min-h-[36px]' : ''}`}>
        <div
          className="min-h-[36px] p-0 cursor-pointer select-none sticky top-0 bg-white z-10"
          onClick={handleSummaryClick}
        >
          <div className="px-3 w-full">
            <div className="flex items-center justify-between py-1">
              <div className="flex-none w-2/5">
                <h5 className="text-sm font-medium text-[#4a4a4a] m-0">{title}</h5>
              </div>
              {summary && props && (
                <div className="flex-none w-3/5 text-right">
                  <h5 className="text-sm text-blue-500 m-0">
                    {summary(
                      props.reduce((acc, key) => {
                        acc[key] = nodeProps[key];
                        return acc;
                      }, {})
                    )}
                  </h5>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {isExpanded ? (
          <div className="px-3 pb-3 overflow-y-auto max-h-[calc(100vh-100px)]" onClick={(e) => e.stopPropagation()}>
            <div className="h-px  my-1 mb-2 bg-[#e0e0e0]"  />
            <div className="grid gap-1 grid-cols-2 h-full">
              {children}
            </div>
          </div>
        ) : 
        <div className="h-px bg-[#e0e0e0] my-1 mb-2" />
        }
      </div>
    </div>
  );
};