// src/components/Canvas.js
import React from 'react';
import Draggable from 'react-draggable';

const Canvas = ({ elements }) => {
    return (
        <div className="canvas">
            {elements.map((element, index) => (
                <Draggable key={index}>
                    <div className="canvas-element">
                        {element.type === 'text' && (
                            <p contentEditable>{element.content}</p>
                        )}
                        {/* You can add more elements like images here */}
                        {element.type === 'image' && (
                            <img src={element.src} alt="Element" />
                        )}
                    </div>
                </Draggable>
            ))}
        </div>
    );
};

export default Canvas;
