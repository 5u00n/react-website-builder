import React from 'react';

function StyledRadio({ checked, ...props }) {
  return (
    <div className="relative">
      <input
        type="radio"
        checked={checked}
        className="appearance-none border-2 border-gray-400 rounded-full w-4 h-4 checked:bg-blue-600 checked:border-transparent"
        {...props}
      />
      {checked && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white rounded-full w-2 h-2"></div>
        </div>
      )}
    </div>
  );
}

export const ToolbarRadio = ({ value, label }) => {
  return (
    <label className="flex items-center space-x-2 text-sm">
      <StyledRadio value={value} />
      <span>{label}</span>
    </label>
  );
};
