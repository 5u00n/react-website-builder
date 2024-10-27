import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor/Toolbar';

export const CarouselSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <ToolbarSection title="Slides">
        <ToolbarItem
          full={true}
          propKey="slides"
          type="dynamic-list"
          label="Carousel Slides"
          itemFields={[
            { 
              key: 'title', 
              type: 'text', 
              label: 'Title',
              placeholder: 'Enter slide title'
            },
            { 
              key: 'description', 
              type: 'textarea', 
              label: 'Description',
              placeholder: 'Enter slide description'
            },
            { 
              key: 'image', 
              type: 'text', 
              label: 'Image URL',
              placeholder: 'Enter image URL'
            },
            { 
              key: 'buttonText', 
              type: 'text', 
              label: 'Button Text',
              placeholder: 'Enter button text (optional)'
            },
            { 
              key: 'buttonLink', 
              type: 'text', 
              label: 'Button Link',
              placeholder: 'Enter button link (optional)'
            }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Dimensions">
        <ToolbarItem
          full={true}
          propKey="height"
          type="text"
          label="Carousel Height"
          placeholder="e.g., 500px, 50vh"
        />
        <ToolbarItem
          full={true}
          propKey="borderRadius"
          type="text"
          label="Border Radius"
          placeholder="e.g., 1rem, 16px"
        />
      </ToolbarSection>

      <ToolbarSection title="Animation">
        <ToolbarItem
          full={true}
          propKey="animation"
          type="select"
          label="Animation Type"
          options={[
            { value: 'slide', label: 'Slide' },
            { value: 'fade', label: 'Fade' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="autoPlay"
          type="checkbox"
          label="Auto Play"
        />
        {props.autoPlay && (
          <ToolbarItem
            full={true}
            propKey="interval"
            type="number"
            label="Interval (ms)"
            min={1000}
            max={10000}
            step={500}
          />
        )}
      </ToolbarSection>

      <ToolbarSection title="Controls">
        <ToolbarItem
          full={true}
          propKey="showArrows"
          type="checkbox"
          label="Show Navigation Arrows"
        />
        <ToolbarItem
          full={true}
          propKey="showDots"
          type="checkbox"
          label="Show Dot Indicators"
        />
        <ToolbarItem
          full={true}
          propKey="showPlayPause"
          type="checkbox"
          label="Show Play/Pause Button"
        />
      </ToolbarSection>

      <ToolbarSection title="Appearance">
        <ToolbarItem
          full={true}
          propKey="theme"
          type="select"
          label="Theme"
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'glass', label: 'Glass Morphism' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="overlayOpacity"
          type="slider"
          label="Overlay Opacity"
          min={0}
          max={1}
          step={0.1}
        />
      </ToolbarSection>

      <ToolbarSection title="Advanced">
        <ToolbarItem
          full={true}
          propKey="gap"
          type="text"
          label="Slide Gap"
          placeholder="e.g., 1rem, 16px"
        />
        <ToolbarItem
          full={true}
          propKey="transitionSpeed"
          type="number"
          label="Transition Speed (ms)"
          min={200}
          max={2000}
          step={100}
        />
      </ToolbarSection>

      <ToolbarSection title="Progress Bar">
        <ToolbarItem
          full={true}
          propKey="showProgress"
          type="checkbox"
          label="Show Progress Bar"
        />
        <ToolbarItem
          full={true}
          propKey="progressPosition"
          type="select"
          label="Progress Bar Position"
          options={[
            { value: 'top', label: 'Top' },
            { value: 'bottom', label: 'Bottom' }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Thumbnails">
        <ToolbarItem
          full={true}
          propKey="showThumbnails"
          type="checkbox"
          label="Show Thumbnails"
        />
        <ToolbarItem
          full={true}
          propKey="thumbnailSize"
          type="text"
          label="Thumbnail Size"
        />
        <ToolbarItem
          full={true}
          propKey="thumbnailPosition"
          type="select"
          label="Thumbnail Position"
          options={[
            { value: 'bottom', label: 'Bottom' },
            { value: 'top', label: 'Top' }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Caption">
        <ToolbarItem
          full={true}
          propKey="captionPosition"
          type="select"
          label="Caption Position"
          options={[
            { value: 'center', label: 'Center' },
            { value: 'left', label: 'Left' },
            { value: 'right', label: 'Right' },
            { value: 'bottom-left', label: 'Bottom Left' },
            { value: 'bottom-right', label: 'Bottom Right' },
            { value: 'top-left', label: 'Top Left' },
            { value: 'top-right', label: 'Top Right' }
          ]}
        />
        <ToolbarItem
          full={true}
          propKey="captionAnimation"
          type="checkbox"
          label="Animate Captions"
        />
        <ToolbarItem
          full={true}
          propKey="captionMaxWidth"
          type="text"
          label="Caption Max Width"
        />
      </ToolbarSection>

      <ToolbarSection title="Touch Controls">
        <ToolbarItem
          full={true}
          propKey="enableTouch"
          type="checkbox"
          label="Enable Touch Gestures"
        />
        <ToolbarItem
          full={true}
          propKey="touchSensitivity"
          type="number"
          label="Touch Sensitivity"
          min={20}
          max={200}
          step={10}
        />
      </ToolbarSection>

      <ToolbarSection title="Advanced Features">
        <ToolbarItem
          full={true}
          propKey="enableZoom"
          type="checkbox"
          label="Enable Image Zoom"
        />
        <ToolbarItem
          full={true}
          propKey="enableFullscreen"
          type="checkbox"
          label="Enable Fullscreen"
        />
        <ToolbarItem
          full={true}
          propKey="enableKeyboard"
          type="checkbox"
          label="Enable Keyboard Navigation"
        />
        <ToolbarItem
          full={true}
          propKey="enableSharing"
          type="checkbox"
          label="Enable Social Sharing"
        />
        <ToolbarItem
          full={true}
          propKey="sharePosition"
          type="select"
          label="Share Button Position"
          options={[
            { value: 'top-left', label: 'Top Left' },
            { value: 'top-right', label: 'Top Right' },
            { value: 'bottom-left', label: 'Bottom Left' },
            { value: 'bottom-right', label: 'Bottom Right' }
          ]}
        />
      </ToolbarSection>

      <ToolbarSection title="Accessibility">
        <ToolbarItem
          full={true}
          propKey="ariaLabel"
          type="text"
          label="Aria Label"
        />
        <ToolbarItem
          full={true}
          propKey="showAltText"
          type="checkbox"
          label="Show Alt Text"
        />
      </ToolbarSection>
    </div>
  );
};
