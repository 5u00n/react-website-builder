import { useNode } from '@craftjs/core';
import React from 'react';

export const ToolbarSection = ({ title, props, summary, children }) => {
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res, key) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));

  return (
    <div className="border-b border-gray-200">
      <div className="px-6 py-2 w-full flex justify-between items-center">
        <h5 className="text-sm text-light-gray-1 text-left font-medium text-dark-gray">
          {title}
        </h5>
        {summary && props ? (
          <h5 className="text-light-gray-2 text-sm text-right text-dark-blue">
            {summary(
              props.reduce((acc, key) => {
                acc[key] = nodeProps[key];
                return acc;
              }, {})
            )}
          </h5>
        ) : null}
      </div>
      <div className="px-6 py-4">
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-2 gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
