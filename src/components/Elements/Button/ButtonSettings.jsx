import React from 'react';
import { useNode } from '@craftjs/core';

import { ToolbarSection, ToolbarItem } from '../../Editor';
import { ToolbarRadio } from '../../Editor/Toolbar/ToolbarRadio';

export const ButtonSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props
    }));

    return (
        <React.Fragment>
            <ToolbarSection
                title="Dimensions"
                props={['width', 'height']}
                summary={({ width, height }) => {
                    return `${width || 0} x ${height || 0}`;
                }}
            >
                <ToolbarItem propKey="width" type="text" label="Width" />
                <ToolbarItem propKey="height" type="text" label="Height" />
            </ToolbarSection>
            <ToolbarSection
                title="Text"
                props={['text']}
                summary={({ text }) => {
                    return text;
                }}
            >
                <ToolbarItem propKey="text" type="text" label="Text" />
            </ToolbarSection>
            <ToolbarSection
                title="Colors"
                props={['background', 'color', 'hoverBackground', 'hoverColor', 'selectedBackground', 'selectedColor']}
                summary={({ background, color }) => {
                    return (
                        <div className="flex flex-row-reverse">
                            <div
                                style={{
                                    background: background && `rgba(${Object.values(background)})`,
                                }}
                                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
                            >
                                <p
                                    style={{
                                        color: color && `rgba(${Object.values(color)})`,
                                    }}
                                    className="text-white w-full text-center"
                                >
                                    T
                                </p>
                            </div>
                        </div>
                    );
                }}
            >
                <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
                <ToolbarItem full={true} propKey="color" type="color" label="Text" />
                <ToolbarItem full={true} propKey="hoverBackground" type="bg" label="Hover BG" />
                <ToolbarItem full={true} propKey="hoverColor" type="color" label="Hover Text" />
                <ToolbarItem full={true} propKey="selectedBackground" type="bg" label="Selected BG" />
                <ToolbarItem full={true} propKey="selectedColor" type="color" label="Selected Text" />
            </ToolbarSection>
            <ToolbarSection
                title="Margin"
                props={['margin']}
                summary={({ margin }) => {
                    return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${margin[3] || 0}px`;
                }}
            >
                <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
                <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
                <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
                <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
            </ToolbarSection>
            <ToolbarSection
                title="Padding"
                props={['padding']}
                summary={({ padding }) => {
                    return `${padding[0] || 0}px ${padding[1] || 0}px ${padding[2] || 0}px ${padding[3] || 0}px`;
                }}
            >
                <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
                <ToolbarItem propKey="padding" index={1} type="slider" label="Right" />
                <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" />
                <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
            </ToolbarSection>
            <ToolbarSection title="Decoration">
                <ToolbarItem propKey="buttonStyle" type="radio" label="Style">
                    <ToolbarRadio value="full" label="Full" />
                    <ToolbarRadio value="outline" label="Outline" />
                </ToolbarItem>
                <ToolbarItem propKey="shadow" type="slider" label="Shadow" min={0} max={20} />
                <ToolbarItem propKey="radius" type="slider" label="Border Radius" min={0} max={50} />
            </ToolbarSection>
            <ToolbarSection title="Type">
                <ToolbarItem propKey="buttonType" type="radio" label="Button Type">
                    <ToolbarRadio value="custom" label="Custom" />
                    <ToolbarRadio value="shadcn" label="Shadcn" />
                </ToolbarItem>
            </ToolbarSection>
            <ToolbarSection title="Animation">
                <ToolbarItem propKey="animation" type="radio" label="Animation">
                    <ToolbarRadio value="none" label="None" />
                    <ToolbarRadio value="scale" label="Scale" />
                    <ToolbarRadio value="glow" label="Glow" />
                    <ToolbarRadio value="slide" label="Slide" />
                </ToolbarItem>
            </ToolbarSection>
            <ToolbarSection title="Action">
                <ToolbarItem
                    propKey="onClick"
                    type="text"
                    label="onClick Function"
                    placeholder="Enter JavaScript function"
                    full={true}
                />
            </ToolbarSection>
        </React.Fragment>
    );
};
