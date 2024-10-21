import React from 'react';
import { useNode } from '@craftjs/core';

export const HeroSection = ({ backgroundColor, textColor, carouselItems, width, height, children }) => {
    const { connectors: { connect, drag } } = useNode();

    const heroSectionStyle = {
        backgroundColor,
        textColor,
        width,
        height,
    };

    return (
        <div ref={ref => connect(drag(ref))} style={heroSectionStyle} className={`relative ${backgroundColor} ${textColor}`}>
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 bg-gray-900">
                <div className="text-lg font-bold">Brand</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>

            {/* Carousel */}        
            <div className="carousel relative overflow-hidden h-64">
                <div className="carousel-inner relative w-full overflow-hidden">
                    {carouselItems.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} absolute w-full h-full bg-cover bg-center`} style={{ backgroundImage: `url(${item.imageUrl})` }}>
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-3xl font-bold">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Placeholder for additional elements */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    {/* Elements can be added here */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export const HeroSectionSettings = () => {
    const { actions: { setProp }, backgroundColor, textColor, carouselItems } = useNode((node) => ({
        backgroundColor: node.data.props.backgroundColor,
        textColor: node.data.props.textColor,
        carouselItems: node.data.props.carouselItems,
    }));

    const updateCarouselItem = (index, field, value) => {
        setProp(props => {
            const newItems = [...props.carouselItems];
            newItems[index] = { ...newItems[index], [field]: value };
            props.carouselItems = newItems;
        });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Background Color</label>
                <input
                    type="text"
                    value={backgroundColor}
                    onChange={(e) => setProp(props => props.backgroundColor = e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Text Color</label>
                <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setProp(props => props.textColor = e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            {carouselItems.map((item, index) => (
                <div key={index} className="space-y-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title {index + 1}</label>
                        <input
                            type="text"
                            value={item.title}
                            onChange={(e) => updateCarouselItem(index, 'title', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL {index + 1}</label>
                        <input
                            type="text"
                            value={item.imageUrl}
                            onChange={(e) => updateCarouselItem(index, 'imageUrl', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

HeroSection.craft = {
    props: {
        backgroundColor: 'bg-gray-800',
        textColor: 'text-white',
        width: '100%',
        height: '100%',

        carouselItems: [
            { title: 'Welcome to Our Site', imageUrl: 'https://via.placeholder.com/800x400' },
            { title: 'Explore Our Features', imageUrl: 'https://via.placeholder.com/800x400' },
            // Add more items as needed
        ],
    },
    related: {
        settings: HeroSectionSettings,
    },
};

