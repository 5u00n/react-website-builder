import React from 'react';
import { useEditor, Element } from '@craftjs/core';
import { Text, Card, Header, List, Table, Image, Button, Container, } from '../../components/Elements';
import { FocusCards, HeroSection, Blog} from '../../components/Blocks';
import { FaFont, FaRegSquare, FaHeading, FaList, FaTable, FaImage, FaRegHandPointer, FaRegObjectGroup } from 'react-icons/fa';

const componentList = [
    { name: 'Text', type: Text, props: { text: 'Sample Text'}, icon: FaFont },
    { name: 'Card', type: Card, icon: FaRegSquare },
    { name: 'Header', type: Header, icon: FaHeading },
    { name: 'List', type: List, icon: FaList },
    { name: 'Table', type: Table, icon: FaTable },
    { name: 'Image', type: Image, icon: FaImage },
    { name: 'Button', type: Button, icon: FaRegHandPointer },
    { name: 'Container', type: Container, icon: FaRegObjectGroup },
    { name: 'Blog', type: Blog, icon: FaRegObjectGroup },
    { name: 'Focus Cards', type: FocusCards, icon: FaRegObjectGroup },
    { name: 'Hero Section', type: HeroSection, icon: FaRegObjectGroup }
];

export const Sidebar = () => {
    const { connectors } = useEditor();

    return (
        <div className="w-full p-4 flex flex-col h-screen ">
            <h2 className="text-xl font-bold mb-2">Components</h2>
            <div className="flex-grow overflow-y-auto mb-8">
                <div className="space-y-2 bg-gray-800 rounded-lg p-4 text-white">
                    {componentList.map((component) => (
                        <div
                            key={component.name} ref={(ref) => connectors.create(ref,
                            <Element canvas is={component.type} {...component.props} />
                                , component.props)}
                            className="flex items-center w-full text-left p-3 hover:bg-gray-700 rounded cursor-move transition duration-200 ease-in-out"
                        >
                            <component.icon className="mr-3 text-blue-400" />
                            <span>{component.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

