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
    if (type === 'color' || type === 'bg') {
      val = `rgba(${Object.values(value)})`;
    }
    setInternalValue(val);
  }, [value, type]);

  return (
    <div 
      className="w-full relative mt-[7px]"
      onClick={() => setActive(true)}
    >
      {(type === 'color' || type === 'bg') && active ? (
        <div className="absolute z-[99999] top-[calc(100%+10px)] left-[-5%]">
          <div
            className="fixed top-0 left-0 w-full h-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(false);
            }}
          />
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
          <label className="text-gray-500 text-sm block mb-[3px] pl-0 pt-[1px] relative ">{label}</label>
        )}
        <div className="relative w-full">
          {['color', 'bg'].includes(type) && (
            <div 
              className="absolute w-2 h-2 rounded-full left-[15px] top-1/2 -translate-y-1/2 z-[1]"
              style={{ background: internalValue }}
            />
          )}
          <input
            type="text"
            className="w-full bg-[#efeff1] rounded-[100px] text-xs py-2 px-7 border-none outline-none m-0 focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
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
        </div>
      </div>
    </div>
  );
};
