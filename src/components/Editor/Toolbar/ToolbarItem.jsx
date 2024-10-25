import { useNode } from '@craftjs/core';
import React from 'react';

import { ToolbarDropdown } from './ToolbarDropdown';
import { ToolbarTextInput } from './ToolbarTextInput';

export const ToolbarItem = ({
  full = true,
  propKey,
  type,
  onChange,
  index,
  ...props
}) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }));
  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  return (
    <div className={`mb-2 ${full ? 'w-full' : 'w-1/2'}`}>
      {['text', 'color', 'bg', 'number'].includes(type) ? (
        <ToolbarTextInput
          {...props}
          type={type}
          value={value}
          onChange={(value) => {
            setProp((props) => {
              if (Array.isArray(propValue)) {
                props[propKey][index] = onChange ? onChange(value) : value;
              } else {
                props[propKey] = onChange ? onChange(value) : value;
              }
            }, 500);
          }}
        />
      ) : type === 'slider' ? (
        <div className="w-full">
          {props.label ? (
            <h4 className="text-sm text-gray-500 mb-2">{props.label}</h4>
          ) : null}
          <div className="relative w-full">
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                focus:outline-none focus:ring-2 focus:ring-blue-500
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:border
                [&::-webkit-slider-thumb]:border-gray-300
                [&::-webkit-slider-thumb]:shadow-md
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:transition-all
                [&::-webkit-slider-thumb]:hover:shadow-lg"
              value={parseInt(value) || 0}
              onChange={(e) => {
                const value = e.target.value;
                setProp((props) => {
                  if (Array.isArray(propValue)) {
                    props[propKey][index] = onChange ? onChange(value) : value;
                  } else {
                    props[propKey] = onChange ? onChange(value) : value;
                  }
                }, 1000);
              }}
            />
          </div>
        </div>
      ) : type === 'radio' ? (
        <div className="w-full">
          {props.label ? (
            <h4 className="text-sm text-gray-500 mb-2">{props.label}</h4>
          ) : null}
          <div
            className="flex gap-4"
            onChange={(e) => {
              const value = e.target.value;
              setProp((props) => {
                props[propKey] = onChange ? onChange(value) : value;
              });
            }}
          >
            {props.children}
          </div>
        </div>
      ) : type === 'select' ? (
        <ToolbarDropdown
          value={value || ''}
          onChange={(value) =>
            setProp(
              (props) =>
                (props[propKey] = onChange ? onChange(value) : value)
            )
          }
          {...props}
        />
      ) : null}
    </div>
  );
};
