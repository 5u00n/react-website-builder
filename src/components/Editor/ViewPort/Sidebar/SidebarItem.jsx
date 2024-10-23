import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const SidebarItem = ({
  visible,
  icon: Icon,
  title,
  children,
  height,
  onChange,
}) => {
  return (
    <div
      className={`flex flex-col ${visible && height && height !== 'full' ? height : 'auto'} ${visible && height && height === 'full' ? 'flex-1' : 'unset'} text-gray-700`}
    >
      <div
        onClick={() => {
          if (onChange) onChange(!visible);
        }}
        className={`cursor-pointer bg-white border-b last:border-b-0 flex items-center px-2 ${visible ? 'shadow-sm' : ''
          } text-gray-600 h-11`}
      >
        <div className="flex-1 flex items-center">
          <Icon className="w-4 h-4 mr-2" />
          <h2 className="text-xs uppercase">{title}</h2>
        </div>
        <a
          className={`transform ${visible ? 'rotate-180' : 'rotate-0'}`}
        >
          <FaChevronDown className="w-2 h-2" />
        </a>
      </div>
      {visible ? (
        <div className="w-full flex-1 overflow-auto">{children}</div>
      ) : null}
    </div>
  );
};
