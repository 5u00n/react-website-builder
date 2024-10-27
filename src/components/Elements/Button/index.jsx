import { useNode } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';

import { ButtonSettings } from './ButtonSettings';
import { Button as UiButton } from '@/components/ui/button';

import { Text } from '../../OldElements/Text';
import { Resizer } from '../Resizer';


const defaultProps = {
    background: { r: 59, g: 130, b: 246, a: 1 },
    color: { r: 255, g: 255, b: 255, a: 1 },
    buttonStyle: 'full',
    text: 'Button',
    margin: ['5', '0', '5', '0'],
    padding: ['0', '0', '0', '0'],
    textComponent: {
        ...Text.craft.props,
        textAlign: 'center',
    },
    width: '100px',
    height: '40px',
    shadow: 0,
    radius: 5,
    buttonType: 'custom',
    hoverBackground: { r: 29, g: 78, b: 216, a: 1 },
    hoverColor: { r: 255, g: 255, b: 255, a: 1 },
    selectedBackground: { r: 96, g: 165, b: 250, a: 1 },
    selectedColor: { r: 255, g: 255, b: 255, a: 1 },
    animation: 'none',
    onClick: () => { },
};

export const Button = ({ buttonType = 'custom', ...props }) => {
    // Rest of the component code...
    const {
        connectors: { connect },
        selected,
    } = useNode((node) => ({
        selected: node.events.selected,
    }));

    const {
        text, textComponent, color, background, buttonStyle, margin, padding, width, height, radius, shadow, type,
        hoverBackground, hoverColor, selectedBackground, selectedColor, animation, onClick, ...otherProps
    } = props;

    const [isHovered, setIsHovered] = React.useState(false);

    const buttonStyleClass = buttonStyle === 'full' ? 'shadow-lg' : '';
    const backgroundColor = selected ? `rgba(${Object.values(selectedBackground)})` :
        isHovered ? `rgba(${Object.values(hoverBackground)})` :
            buttonStyle === 'full' ? `rgba(${Object.values(background)})` : 'transparent';
    const textColor = selected ? `rgba(${Object.values(selectedColor)})` :
        isHovered ? `rgba(${Object.values(hoverColor)})` :
            buttonStyle === 'full' ? `rgba(${Object.values(color)})` : `rgba(${Object.values(background)})`;
    const borderColor = buttonStyle === 'outline' ? `rgba(${Object.values(background)})` : 'transparent';
    const marginStyle = `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`;
    const paddingStyle = `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`;

    const animationClass = React.useMemo(() => {
        switch (animation) {
            case 'scale':
                return 'transform transition duration-200 hover:scale-105';
            case 'glow':
                return 'transition duration-300 hover:shadow-glow';
            case 'slide':
                return 'relative overflow-hidden transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-0 before:transition-opacity hover:before:opacity-20';
            case 'none':
            default:
                return '';
        }
    }, [animation]);

    const animationStyle = React.useMemo(() => {
        if (animation === 'glow') {
            return {
                '--tw-shadow-color': 'rgba(var(--button-glow-color, 255, 255, 255), 0.5)',
                '--tw-shadow': 'var(--tw-shadow-colored)'
            };
        }
        return {};
    }, [animation]);

    const renderButton = () => {
        if (buttonType === 'shadcn') {
            return (
                <UiButton
                    ref={connect}

                    style={{
                        width: width,
                        height: height,
                        color: textColor,
                        padding: paddingStyle,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={onClick}
                    {...otherProps}
                >
                    <Text text={text} color={textColor} />
                </UiButton>
            );
        } else if (buttonType === 'custom') {
            return (
                <button
                    ref={connect}
                    className={cx(
                        'rounded w-full',
                        buttonStyleClass,
                        'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50',
                        animationClass
                    )}
                    style={{
                        background: backgroundColor,
                        width: width,
                        height: height,
                        color: textColor,
                        borderRadius: `${radius}px`,
                        boxShadow: shadow === 0 ? 'none' : `0px ${shadow}px ${shadow * 2}px rgba(0, 0, 0, 0.1)`,
                        borderColor: borderColor,
                        borderWidth: buttonStyle === 'outline' ? '1px' : '0',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={onClick}
                    {...otherProps}
                >
                    <Text {...textComponent} text={text} color={textColor} />
                </button>
            );
        }
        // Add more conditions for other button types (e.g., 'radix', 'other') if needed
    };

    return (
        <Resizer
            propKey={{ width: 'width', height: 'height' }}
            style={{
                margin: marginStyle,
            }}
        >
            {renderButton()}
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