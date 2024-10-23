import { useNode } from '@craftjs/core';
import React from 'react';

import { ToolbarDropdown } from './ToolbarDropdown';
import { ToolbarTextInput } from './ToolbarTextInput';

export const ToolbarItem = ({
  full = false,
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
        <>
          {props.label ? (
            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
          ) : null}
          <input
            type="range"
            className="w-full"
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
        </>
      ) : type === 'radio' ? (
        <>
          {props.label ? (
            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
          ) : null}
          <div
            className="flex"
            onChange={(e) => {
              const value = e.target.value;
              setProp((props) => {
                props[propKey] = onChange ? onChange(value) : value;
              });
            }}
          >
            {props.children}
          </div>
        </>
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
