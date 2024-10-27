import React from 'react';
import { useNode } from '@craftjs/core';

export const Image = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  borderRadius = '0px',
  shadow = 'none',
  opacity = 1,
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      className="relative"
      style={{
        width,
        height,
        borderRadius,
        boxShadow: shadow,
        opacity
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full"
        style={{
          objectFit,
          borderRadius,
        }}
      />
    </div>
  );
};

Image.craft = {
  props: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Image description',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '0px',
    shadow: 'none',
    opacity: 1
  },
  related: {
    toolbar: ImageSettings
  }
};
