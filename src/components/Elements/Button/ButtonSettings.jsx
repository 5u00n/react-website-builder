import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const ButtonSettings = () => {
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
                props={['background', 'color']}
                summary={({ background, color }) => {
                    return (
                        <div className="flex flex-row-reverse">
                            <div
                                style={{
                                    background:
                                        background && `rgba(${Object.values(background)})`,
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
                <ToolbarItem
                    full={true}
                    propKey="background"
                    type="bg"
                    label="Background"
                />
                <ToolbarItem full={true} propKey="color" type="color" label="Text" />
            </ToolbarSection>
            <ToolbarSection
                title="Margin"
                props={['margin']}
                summary={({ margin }) => {
                    return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${margin[3] || 0
                        }px`;
                }}
            >
                <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
                <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
                <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
                <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
            </ToolbarSection>
            <ToolbarSection title="Decoration">
                <ToolbarItem propKey="buttonStyle" type="radio" label="Style">
                    <ToolbarRadio value="full" label="Full" />
                    <ToolbarRadio value="outline" label="Outline" />
                </ToolbarItem>
            </ToolbarSection>

        </React.Fragment>
    );
};
