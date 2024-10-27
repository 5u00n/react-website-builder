import React from 'react';
import { useNode } from '@craftjs/core';
import { VideoSettings } from './VideoSettings';

export const Video = ({
  src,
  width = '100%',
  height = 'auto',
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  poster = '',
  borderRadius = '0px',
  shadow = 'none'
}) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={ref => connect(drag(ref))}
      style={{
        width,
        borderRadius,
        boxShadow: shadow
      }}
    >
      <video
        src={src}
        width={width}
        height={height}
        autoPlay={autoplay}
        controls={controls}
        loop={loop}
        muted={muted}
        poster={poster}
        style={{ borderRadius }}
        className="w-full"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

Video.craft = {
  props: {
    src: '',
    width: '100%',
    height: 'auto',
    autoplay: false,
    controls: true,
    loop: false,
    muted: false,
    poster: '',
    borderRadius: '0px',
    shadow: 'none'
  },
  related: {
    toolbar: VideoSettings
  }
};
