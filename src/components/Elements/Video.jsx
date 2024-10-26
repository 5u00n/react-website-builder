import React from 'react';
import { useNode } from '@craftjs/core';
import ReactPlayer from 'react-player';// Import the settings component

export const Video = ({ url, controls, width, height }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={ref => connect(drag(ref))} style={{ width, height }}>
      <ReactPlayer url={url} controls={controls} width="100%" height="100%" />
    </div>
  );
};
const VideoSettings = () => {
    const {
      actions: { setProp },
      props: { url, controls, width, height },
    } = useNode((node) => ({
      url: node.data.props.url,
      controls: node.data.props.controls,
      width: node.data.props.width,
      height: node.data.props.height,
    }));
  
    return (
      <div className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">Video URL</label>
          <input
            type="text"
            value={url}
            onChange={e => setProp(props => (props.url = e.target.value))}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={controls}
            onChange={e => setProp(props => (props.controls = e.target.checked))}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="text-sm font-medium text-gray-700">Controls</label>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">Width</label>
          <input
            type="text"
            value={width}
            onChange={e => setProp(props => (props.width = e.target.value))}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">Height</label>
          <input
            type="text"
            value={height}
            onChange={e => setProp(props => (props.height = e.target.value))}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    );
  };

Video.craft = {
  props: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Default video URL
    controls: true,
    width: '640px',
    height: '360px',
  },
  related: {
    settings: VideoSettings, // Use the external settings component
  },
};

export default Video;

