import React, { useRef, useState, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ResizableBox } from 'react-resizable';
import { motion } from 'framer-motion';
import 'react-resizable/css/styles.css';
import { COMPONENT_TYPES } from './Sidebar';

const PageBuilder = ({ components, updateComponent, setSelectedComponent, setComponents }) => {
    const containerRef = useRef(null);
    const [viewMode, setViewMode] = useState('desktop');
    const [zoom, setZoom] = useState(100);
    const [showGrid, setShowGrid] = useState(false);
    const [gridSize, setGridSize] = useState(20);
    const [layout, setLayout] = useState('default');

    const [{ isOver }, drop] = useDrop(() => ({
        accept: COMPONENT_TYPES,
        drop: (item, monitor) => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const delta = monitor.getClientOffset();
            const left = Math.round((delta.x - containerRect.left) / (zoom / 100));
            const top = Math.round((delta.y - containerRect.top) / (zoom / 100));
            addComponent(item, left, top);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const addComponent = (item, left, top) => {
        const newComponent = {
            ...item,
            id: Date.now(),
            settings: {},
            left: snapToGrid(left),
            top: snapToGrid(top),
            width: 200,
            height: 100,
        };
        setComponents((prevComponents) => [...prevComponents, newComponent]);
    };

    const handleComponentClick = useCallback((component) => {
        setSelectedComponent(component);
    }, [setSelectedComponent]);

    const moveComponent = useCallback((id, left, top) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id ? { ...component, left: snapToGrid(left), top: snapToGrid(top) } : component
            )
        );
    }, []);

    const resizeComponent = useCallback((id, width, height) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id ? { ...component, width: snapToGrid(width), height: snapToGrid(height) } : component
            )
        );
    }, []);

    const handleTextChange = useCallback((id, text) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === id ? { ...component, settings: { ...component.settings, text } } : component
            )
        );
    }, []);

    const snapToGrid = useCallback((value) => {
        return showGrid ? Math.round(value / gridSize) * gridSize : value;
    }, [showGrid, gridSize]);

    const handleZoom = useCallback((newZoom) => {
        setZoom(Math.max(25, Math.min(200, newZoom)));
    }, []);

    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
        // Apply layout changes to components
        // This is where you'd adjust component positions based on the new layout
    };

    const DraggableComponent = React.memo(({ component }) => {
        const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
            type: component.type,
            item: { id: component.id, left: component.left, top: component.top },
            end: (item, monitor) => {
                const delta = monitor.getDifferenceFromInitialOffset();
                const left = Math.round(item.left + delta.x / (zoom / 100));
                const top = Math.round(item.top + delta.y / (zoom / 100));
                moveComponent(item.id, left, top);
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }), [component, zoom, moveComponent]);

        return (
            <ResizableBox
                width={component.width}
                height={component.height}
                onResizeStop={(e, { size }) => resizeComponent(component.id, size.width, size.height)}
                minConstraints={[50, 50]}
                maxConstraints={[500, 500]}
                style={{
                    position: 'absolute',
                    left: component.left,
                    top: component.top,
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'move',
                }}
                className="border border-gray-300 p-2 rounded-md"
            >
                <motion.div
                    ref={dragPreview}
                    onClick={() => handleComponentClick(component)}
                    initial={component.settings.animation}
                    animate={component.settings.animation}
                >
                    <div ref={drag}>
                        {renderComponent(component)}
                    </div>
                </motion.div>
            </ResizableBox>
        );
    });

    const renderComponent = useCallback((component) => {
        switch (component.type) {
            case 'text':
                return (
                    <p
                        contentEditable
                        onBlur={(e) => handleTextChange(component.id, e.target.innerText)}
                        style={{ fontSize: component.settings.fontSize+'px' || '16px', color: component.settings.color || '#000000' }}
                    >
                        {component.settings.text || 'Editable text'}
                    </p>
                );
            case 'image':
                return <img src={component.settings.src || 'https://via.placeholder.com/150'} alt={component.settings.alt || 'Placeholder'} style={{
                    width: component.settings.width+'px' || '150px',
                    height: component.settings.height+'px' || '150px',
                    objectFit: component.settings.objectFit || 'cover',
                    borderRadius: component.settings.borderRadius+'px' || '0px',
                    boxShadow: component.settings.boxShadow || 'none',
                    filter: component.settings.filter || 'none',
                    transform: component.settings.transform || 'none',
                    transition: component.settings.transition || 'none',
                    opacity: component.settings.opacity || '1',
                    cursor: 'pointer',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    position: 'relative',
                    left: component.settings.left+'px' || '0px',
                    top: component.settings.top+'px' || '0px',
                    zIndex: component.settings.zIndex || '0',
                    mixBlendMode: component.settings.mixBlendMode || 'normal',
                    clipPath: component.settings.clipPath || 'none',
                    background: component.settings.background || 'none',
                    border: component.settings.border+'px' || 'none',
                    margin: component.settings.margin+'px' || '0px',
                    padding: component.settings.padding+'px' || '0px',
                    display: component.settings.display || 'block',
                    justifyContent: component.settings.justifyContent || 'center',
                    alignItems: component.settings.alignItems || 'center',
                }} />;
            // Add cases for other component types (header, list, video, carousel, priceList, grid, flex, table)
            case 'header':
                return (
                    <div
                        style={{
                            fontSize: component.settings.fontSize+'px' || '24px',
                            color: component.settings.color || '#000000',
                            fontWeight: component.settings.fontWeight || 'bold',
                            textAlign: component.settings.textAlign || 'left',
                            cursor: 'move',
                        }}
                    >
                        <h1
                            contentEditable
                            onBlur={(e) => handleTextChange(component.id, e.target.innerText)}
                            style={{
                                margin: 0,
                                padding: 0,
                                pointerEvents: 'none',
                            }}
                        >
                            {component.settings.text || 'Header Text'}
                        </h1>
                    </div>
                );
            case 'list':
                return (
                    <ul style={{
                        listStyleType: component.settings.listStyleType || 'disc',
                        paddingLeft: component.settings.paddingLeft+'px' || '20px',
                    }}>
                        {(component.settings.items || ['List Item 1', 'List Item 2']).map((item, index) => (
                            <li key={index} contentEditable onBlur={(e) => {
                                const newItems = [...component.settings.items];
                                newItems[index] = e.target.innerText;
                                handleTextChange(component.id, newItems, 'items');
                            }}>{item}</li>
                        ))}
                    </ul>
                );
            case 'video':
                return (
                    <video
                        src={component.settings.src || ''}
                        controls={component.settings.controls !== false}
                        autoPlay={component.settings.autoPlay || false}
                        loop={component.settings.loop || false}
                        muted={component.settings.muted || false}
                        style={{
                            width: component.settings.width+'px' || '100%',
                            height: component.settings.height+'px' || 'auto',
                        }}
                    />
                );
            case 'carousel':
                return (
                    <div style={{
                        width: component.settings.width+'px' || '100%',
                        height: component.settings.height+'px' || '300px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        {/* Implement carousel logic here */}
                        <p>Carousel Component (Not fully implemented)</p>
                    </div>
                );
            case 'priceList':
                return (
                    <div>
                        {(component.settings.items || [
                            {name: 'Item 1', price: '$10'},
                            {name: 'Item 2', price: '$20'}
                        ]).map((item, index) => (
                            <div key={index} style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span contentEditable onBlur={(e) => {
                                    const newItems = [...component.settings.items];
                                    newItems[index].name = e.target.innerText;
                                    handleTextChange(component.id, newItems, 'items');
                                }}>{item.name}</span>
                                <span contentEditable onBlur={(e) => {
                                    const newItems = [...component.settings.items];
                                    newItems[index].price = e.target.innerText;
                                    handleTextChange(component.id, newItems, 'items');
                                }}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'grid':
                return (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: component.settings.columns || 'repeat(3, 1fr)',
                        gap: component.settings.gap+'px' || '10px',
                    }}>
                        {/* Grid items would be added here */}
                        <div>Grid Item 1</div>
                        <div>Grid Item 2</div>
                        <div>Grid Item 3</div>
                    </div>
                );
            case 'flex':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: component.settings.flexDirection || 'row',
                        justifyContent: component.settings.justifyContent || 'flex-start',
                        alignItems: component.settings.alignItems || 'stretch',
                        flexWrap: component.settings.flexWrap || 'nowrap',
                    }}>
                        {/* Flex items would be added here */}
                        <div>Flex Item 1</div>
                        <div>Flex Item 2</div>
                        <div>Flex Item 3</div>
                    </div>
                );
            case 'table':
                return (
                    <table style={{
                        width: component.settings.width+'px' || '100%',
                        borderCollapse: component.settings.borderCollapse || 'collapse',
                    }}>
                        <thead>
                            <tr>
                                <th>Header 1</th>
                                <th>Header 2</th>
                                <th>Header 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Row 1, Cell 1</td>
                                <td>Row 1, Cell 2</td>
                                <td>Row 1, Cell 3</td>
                            </tr>
                            <tr>
                                <td>Row 2, Cell 1</td>
                                <td>Row 2, Cell 2</td>
                                <td>Row 2, Cell 3</td>
                            </tr>
                        </tbody>
                    </table>
                );
            default:
                return null;
        }
    }, [handleTextChange]);

    return (
        <div className="flex flex-col h-screen">
            <div className="mb-4 flex justify-between items-center">
                <select
                    className="p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setViewMode(e.target.value)}
                    value={viewMode}
                >
                    <option value="desktop">Desktop</option>
                    <option value="tablet">Tablet</option>
                    <option value="mobile">Mobile</option>
                </select>
                <select
                    className="p-2 border border-gray-300 rounded-md"
                    onChange={(e) => handleLayoutChange(e.target.value)}
                    value={layout}
                >
                    <option value="default">Default Layout</option>
                    <option value="twoColumn">Two Column Layout</option>
                    <option value="threeColumn">Three Column Layout</option>
                </select>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <button onClick={() => handleZoom(zoom - 10)} className="px-2 py-1 bg-gray-200 rounded-l">-</button>
                        <span className="px-2 bg-gray-100">{zoom}%</span>
                        <button onClick={() => handleZoom(zoom + 10)} className="px-2 py-1 bg-gray-200 rounded-r">+</button>
                    </div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={showGrid}
                            onChange={(e) => setShowGrid(e.target.checked)}
                            className="mr-2"
                        />
                        Show Grid
                    </label>
                    <input
                        type="number"
                        value={gridSize}
                        onChange={(e) => setGridSize(Number(e.target.value))}
                        className="w-16 p-1 border border-gray-300 rounded"
                        min="1"
                        max="100"
                    />
                </div>
            </div>
            <div
                ref={(node) => {
                    containerRef.current = node;
                    drop(node);
                }}
                className={`flex-1 bg-white p-6 border-2 border-dashed border-gray-300 rounded-md ${isOver ? 'bg-gray-100' : 'bg-white'}`}
                style={{
                    position: 'relative',
                    height: '100%',
                    width: viewMode === 'desktop' ? '100%' : viewMode === 'tablet' ? '768px' : '375px',
                    margin: '0 auto',
                    overflow: 'auto',
                    transform: `scale(${zoom / 100})`,
                    transformOrigin: 'top left',
                    backgroundImage: showGrid ? `linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                                                 linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)` : 'none',
                    backgroundSize: showGrid ? `${gridSize}px ${gridSize}px` : 'auto',
                }}
            >
                {isOver ? (
                    <p className="text-center text-gray-500">Release to drop component</p>
                ) : (
                    <p className="text-center text-gray-500">Drag and drop components here</p>
                )}

                <div className="mt-4 space-y-4 relative">
                    {components.map((component) => (
                        <DraggableComponent key={component.id} component={component} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageBuilder;