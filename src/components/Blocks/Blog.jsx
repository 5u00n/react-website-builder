import React from 'react';
import { useNode } from '@craftjs/core';

export const Blog = ({
    title,
    content,
    author,
    date,
    titleColor,
    contentColor,
    backgroundColor,
    padding,
    borderRadius,
    titleFontSize,
    contentFontSize,
}) => {
    const { connectors: { connect, drag } } = useNode();

    const blogStyle = {
        backgroundColor,
        padding,
        borderRadius,
    };

    const titleStyle = {
        color: titleColor,
        fontSize: titleFontSize,
    };

    const contentStyle = {
        color: contentColor,
        fontSize: contentFontSize,
    };

    return (
        <div ref={ref => connect(drag(ref))} style={blogStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <p style={contentStyle}>{content}</p>
            <div>
                <span>By {author}</span>
                <span> | {date}</span>
            </div>
        </div>
    );
};


export const BlogSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div className="space-y-6 p-6 bg-white rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Blog Settings</h4>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        value={props.title}
                        onChange={(e) => setProp((props) => (props.title = e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Author</label>
                    <input
                        type="text"
                        value={props.author}
                        onChange={(e) => setProp((props) => (props.author = e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                    value={props.content}
                    onChange={(e) => setProp((props) => (props.content = e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                    type="date"
                    value={props.date}
                    onChange={(e) => setProp((props) => (props.date = e.target.value))}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Title Color</label>
                    <div className="flex items-center">
                        <input
                            type="color"
                            value={props.titleColor}
                            onChange={(e) => setProp((props) => (props.titleColor = e.target.value))}
                            className="w-8 h-8 rounded-md border border-gray-300 cursor-pointer mr-2"
                        />
                        <input
                            type="text"
                            value={props.titleColor}
                            onChange={(e) => setProp((props) => (props.titleColor = e.target.value))}
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Content Color</label>
                    <div className="flex items-center">
                        <input
                            type="color"
                            value={props.contentColor}
                            onChange={(e) => setProp((props) => (props.contentColor = e.target.value))}
                            className="w-8 h-8 rounded-md border border-gray-300 cursor-pointer mr-2"
                        />
                        <input
                            type="text"
                            value={props.contentColor}
                            onChange={(e) => setProp((props) => (props.contentColor = e.target.value))}
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Background Color</label>
                <div className="flex items-center">
                    <input
                        type="color"
                        value={props.backgroundColor}
                        onChange={(e) => setProp((props) => (props.backgroundColor = e.target.value))}
                        className="w-8 h-8 rounded-md border border-gray-300 cursor-pointer mr-2"
                    />
                    <input
                        type="text"
                        value={props.backgroundColor}
                        onChange={(e) => setProp((props) => (props.backgroundColor = e.target.value))}
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Padding</label>
                    <input
                        type="text"
                        value={props.padding}
                        onChange={(e) => setProp((props) => (props.padding = e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Border Radius</label>
                    <input
                        type="text"
                        value={props.borderRadius}
                        onChange={(e) => setProp((props) => (props.borderRadius = e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Title Font Size</label>
                    <input
                        type="text"
                        value={props.titleFontSize}
                        onChange={(e) => setProp((props) => (props.titleFontSize = e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Content Font Size</label>
                    <input
                        type="text"
                        value={props.contentFontSize}
                        onChange={(e) => setProp((props) => (props.contentFontSize = e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

Blog.craft = {
    props: {
        title: 'Blog Post Title',
        content: 'This is the content of the blog post...',
        author: 'John Doe',
        date: '2023-05-20',
        titleColor: '#000000',
        contentColor: '#333333',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '5px',
        titleFontSize: '24px',
        contentFontSize: '16px',
    },
    related: {
        settings: BlogSettings,
    },
};
