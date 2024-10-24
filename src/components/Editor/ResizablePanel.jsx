import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

export const ResizablePanel = ({ children, defaultWidth, minWidth, maxWidth }) => {
  return (
    <ResizableBox
      width={defaultWidth}
      height={Infinity}
      minConstraints={[minWidth, Infinity]}
      maxConstraints={[maxWidth, Infinity]}
      axis="x"
      resizeHandles={['e']}
      className="bg-white shadow-md"
    >
      <div style={{ height: '100%' }}>
        {children}
      </div>
    </ResizableBox>
  );
};

