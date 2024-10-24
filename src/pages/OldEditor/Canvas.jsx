import React from 'react';
import { Element } from '@craftjs/core';

const Canvas = () => {
  return (
    <div className="flex-grow bg-white p-4">
      <Element is="div" canvas>
        {/* Render elements here */}
      </Element>
    </div>
  );
};

export default Canvas;
