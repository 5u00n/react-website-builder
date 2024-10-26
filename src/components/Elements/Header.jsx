import React from 'react';
import { useNode } from '@craftjs/core';

export const Header = ({ text, fontSize, fontWeight, color, textAlign, fontFamily, fontStyle, textDecoration, lineHeight, letterSpacing, wordSpacing, textTransform, textIndent, textShadow, textOverflow, whiteSpace }) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <h2 
            ref={ref => connect(drag(ref))} 
            className="text-2xl font-bold transition-all duration-300 ease-in-out"
            style={{
                fontSize, fontWeight, color, textAlign, fontFamily, fontStyle, textDecoration,
                lineHeight, letterSpacing, wordSpacing, textTransform, textIndent, textShadow,
                textOverflow, whiteSpace
            }}
        >
            {text}
        </h2>
    );
};

export const HeaderDefaultProps = {
    text: 'Header Text',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1.5',
    letterSpacing: '0px',
    wordSpacing: '0px',
    textTransform: 'none',
    textIndent: '0px',
    textShadow: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
};

const HeaderSettings = () => {
    const { actions: { setProp }, ...props } = useNode((node) => ({
        ...node.data.props
    }));

    return (
        <div className="space-y-4">
            {Object.entries(props).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                    {key === 'textAlign' ? (
                        <select 
                            value={value} 
                            onChange={e => setProp(props => props[key] = e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                    ) : key === 'color' ? (
                        <input 
                            type="color" 
                            value={value} 
                            onChange={e => setProp(props => props[key] = e.target.value)}
                            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    ) : (
                        <input 
                            type="text" 
                            value={value} 
                            onChange={e => setProp(props => props[key] = e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

Header.craft = {
    props: HeaderDefaultProps,
    related: {
        settings: HeaderSettings,
    },
    rules: {
        canDrag: () => true,
        canDrop: () => true,
        canMoveIn: () => false,
        canMoveOut: () => true,
    },
};
