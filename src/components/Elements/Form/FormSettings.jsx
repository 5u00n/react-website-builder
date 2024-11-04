import React from 'react';
import { useNode } from '@craftjs/core';
import { ToolbarSection, ToolbarItem } from '../../Editor';
import { ToolbarRadio } from '../../Editor/Toolbar/ToolbarRadio';

export const FormSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props
    }));

    return (
        <React.Fragment>
            <ToolbarSection
                title="Form Settings"
                props={['formTitle', 'submitText']}
                summary={({ formTitle }) => {
                    return formTitle || 'Untitled Form';
                }}
            >
                <ToolbarItem propKey="formTitle" type="text" label="Form Title" />
                <ToolbarItem propKey="submitText" type="text" label="Submit Button Text" />
            </ToolbarSection>

            <ToolbarSection
                title="Dimensions"
                props={['width']}
                summary={({ width }) => {
                    return width || 'auto';
                }}
            >
                <ToolbarItem propKey="width" type="text" label="Width" />
            </ToolbarSection>

            <ToolbarSection
                title="Colors"
                props={['background', 'textColor']}
                summary={({ background }) => {
                    return (
                        <div className="flex flex-row-reverse">
                            <div
                                style={{
                                    background: background && `rgba(${Object.values(background)})`,
                                }}
                                className="shadow-md w-6 h-6 rounded-full"
                            />
                        </div>
                    );
                }}
            >
                <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
                <ToolbarItem full={true} propKey="textColor" type="color" label="Text Color" />
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

            <ToolbarSection title="Style">
                <ToolbarItem propKey="formStyle" type="radio" label="Form Style">
                    <ToolbarRadio value="basic" label="Basic" />
                    <ToolbarRadio value="shadcn" label="Shadcn" />
                </ToolbarItem>
                <ToolbarItem propKey="shadow" type="slider" label="Shadow" min={0} max={20} />
                <ToolbarItem propKey="radius" type="slider" label="Border Radius" min={0} max={50} />
            </ToolbarSection>

            <ToolbarSection title="Form Handling">
                <ToolbarItem
                    propKey="onSubmit"
                    type="text"
                    label="onSubmit Handler"
                    placeholder="Enter JavaScript function"
                    full={true}
                />
                <ToolbarItem
                    propKey="successMessage"
                    type="text"
                    label="Success Message"
                    placeholder="Form submitted successfully!"
                />
            </ToolbarSection>
        </React.Fragment>
    );
};

