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
      className="input-wrapper"
      onClick={() => setActive(true)}
    >
      {(type === 'color' || type === 'bg') && active ? (
        <div className="color-picker-wrapper">
          <div
            className="color-picker-overlay"
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
      
      <div className="input-container">
        {label && (
          <label className="input-label">{label}</label>
        )}
        <div className="input-field-wrapper">
          {['color', 'bg'].includes(type) && (
            <div 
              className="color-indicator"
              style={{ background: internalValue }}
            />
          )}
          <input
            type="text"
            className="custom-input"
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

      <style jsx>{`
        .input-wrapper {
          width: 100%;
          position: relative;
          margin-top: 7px;
        }

        .color-picker-wrapper {
          position: absolute;
          z-index: 99999;
          top: calc(100% + 10px);
          left: -5%;
        }

        .color-picker-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .input-container {
          position: relative;
          width: 100%;
        }

        .input-label {
          color: rgb(128,128,128);
          font-size: 18px;
          display: block;
          margin-bottom: 3px;
          padding-left: 0px;
          padding-top: 3px;
          position: relative;
          left: -12px;
        }

        .input-field-wrapper {
          position: relative;
          width: 100%;
        }

        .color-indicator {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .custom-input {
          width: 100%;
          background: #efeff1;
          border-radius: 100px;
          font-size: 12px;
          padding: 8px 12px 8px 28px;
          border: none;
          outline: none;
          margin: 0;
        }

        .custom-input:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }
      `}</style>
    </div>
  );
};
