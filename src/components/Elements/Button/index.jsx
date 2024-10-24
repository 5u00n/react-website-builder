import { useNode } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';

import { ButtonSettings } from './ButtonSettings';
import { Button as UiButton } from '@/components/ui/button';

import { Text } from '../Text';
import { Resizer } from '../Resizer';


const defaultProps = {
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    buttonStyle: 'full',
    text: 'Button',
    margin: ['5', '0', '5', '0'],
    textComponent: {
        ...Text.craft.props,
        textAlign: 'center',
    },
    width: '100px',
    height: '80px',
};

export const Button = (props) => {
    const {
        connectors: { connect },
    } = useNode((node) => ({
        selected: node.events.selected,
    }));

    const { text, textComponent, color, background, buttonStyle, margin, width, height, ...otherProps } = props;

    const buttonStyleClass = buttonStyle === 'full' ? 'shadow-lg' : '';
    const backgroundColor = buttonStyle === 'full' ? `rgba(${Object.values(background)})` : 'transparent';
    const borderColor = buttonStyle === 'outline' ? `rgba(${Object.values(background)})` : 'transparent';
    const marginStyle = `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`;

    return (
        <Resizer
            propKey={{ width: 'width', height: 'height' }}
        >
            <UiButton
                ref={connect}
                className={cx('rounded w-full px-4 py-2', buttonStyleClass)}
                style={{
                    background: backgroundColor,
                    border: `2px solid ${borderColor}`,
                    margin: marginStyle,
                    width: width,
                    height: height,
                    color: `rgba(${Object.values(color)})`,
                }}
                {...otherProps}>
                <Text {...textComponent} text={text} color={color} />
            </UiButton>
        </Resizer>
    );
};

Button.craft = {
    displayName: 'Button',
    props: defaultProps,
    related: {
        toolbar: ButtonSettings,
    },
};