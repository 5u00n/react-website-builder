import { useNode, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';

import { FaArrowUp, FaTrash, FaArrowsAlt } from 'react-icons/fa';

export const RenderNode = ({ render }) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent('selected').contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef();

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add('component-selected');
      else dom.classList.remove('component-selected');
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    const renderer = document.querySelector('.craftjs-renderer');
    if (!renderer) return; // Check if the element exists

    const handleScroll = () => {
      try {
        scroll();
      } catch (error) {
        console.error('Error during scroll handling:', error);
      }
    };

    renderer.addEventListener('scroll', handleScroll);

    return () => {
      renderer.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
          <div
            ref={currentRef}
            className="px-2 py-2 text-white bg-primary fixed flex items-center"
            style={{
              left: getPos(dom).left,
              top: getPos(dom).top,
              zIndex: 9999,
              height: '30px',
              marginTop: '-29px',
              fontSize: '12px',
              lineHeight: '12px',
            }}
          >
            <h2 className="flex-1 mr-4">{name}</h2>
            {moveable ? (
              <a className="mr-2 cursor-move flex items-center opacity-90" ref={drag}>
                <FaArrowsAlt className="w-4 h-4 fill-current text-white" />
              </a>
            ) : null}
            {id !== ROOT_NODE && (
              <a
                className="mr-2 cursor-pointer flex items-center opacity-90"
                onClick={() => {
                  actions.selectNode(parent);
                }}
              >
                <FaArrowUp className="w-4 h-4 fill-current text-white" />
              </a>
            )}
            {deletable ? (
              <a
                className="cursor-pointer flex items-center opacity-90"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  actions.delete(id);
                }}
              >
                <FaTrash className="w-4 h-4 fill-current text-white" />
              </a>
            ) : null}
          </div>,
          document.querySelector('.page-container')
        )
        : null}
      {render}
    </>
  );
};
