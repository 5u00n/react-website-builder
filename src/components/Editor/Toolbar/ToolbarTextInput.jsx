import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';

export const ToolbarTextInput = ({
  onChange,
  value,
  prefix,
  label,
  type,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let val = value;
    if (type === 'color' || type === 'bg')
      val = `rgba(${Object.values(value)})`;
    setInternalValue(val);
  }, [value, type]);

  return (
    <div
      className="w-full relative"
      onClick={() => {
        setActive(true);
      }}
    >
      {(type === 'color' || type === 'bg') && active ? (
        <div
          className="absolute z-50"
          style={{
            top: 'calc(100% + 10px)',
            left: '-5%',
          }}
        >
          <div
            className="fixed top-0 left-0 w-full h-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(false);
            }}
          ></div>
          <ChromePicker
            color={value}
            onChange={(color) => {
              onChange(color.rgb);
            }}
          />
        </div>
      ) : null}
      <div className="relative w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={internalValue || ''}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onChange(e.target.value);
            }
          }}
          onChange={(e) => {
            setInternalValue(e.target.value);
          }}
          {...props}
        />
        {['color', 'bg'].includes(type) && (
          <div
            className="absolute top-1/2 transform -translate-y-1/2 left-3 w-4 h-4 rounded-full"
            style={{ background: internalValue }}
          />
        )}
      </div>
    </div>
  );
};
