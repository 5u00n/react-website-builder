import { useNode, useEditor } from '@craftjs/core';
import cx from 'classnames';
import { debounce } from 'debounce';
import { Resizable } from 're-resizable';
import React, { useRef, useEffect, useState, useCallback } from 'react';

import {
  isPercentage,
  pxToPercent,
  percentToPx,
  getElementDimensions,
} from '../../utils/numToMeasurement';

const Indicators = ({ bound }) => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <span
      className={cx(
        'absolute w-2.5 h-2.5 bg-white rounded-full block shadow-md z-50 pointer-events-none border-2 border-blue-500',
        {
          'left-1/2 top-[-5px] transform -translate-x-1/2': bound === 'row',
          'top-1/2 left-[-5px] transform -translate-y-1/2': bound === 'column',
          'left-[-5px] top-[-5px]': !bound,
        }
      )}
    ></span>
    <span
      className={cx(
        'absolute w-2.5 h-2.5 bg-white rounded-full block shadow-md z-50 pointer-events-none border-2 border-blue-500',
        {
          hidden: bound,
          'right-[-5px] top-[-5px]': !bound,
        }
      )}
    ></span>
    <span
      className={cx(
        'absolute w-2.5 h-2.5 bg-white rounded-full block shadow-md z-50 pointer-events-none border-2 border-blue-500',
        {
          'left-1/2 bottom-[-5px] transform -translate-x-1/2': bound === 'row',
          'bottom-1/2 left-[-5px] transform -translate-y-1/2': bound === 'column',
          'left-[-5px] bottom-[-5px]': !bound,
        }
      )}
    ></span>
    <span
      className={cx(
        'absolute w-2.5 h-2.5 bg-white rounded-full block shadow-md z-50 pointer-events-none border-2 border-blue-500',
        {
          hidden: bound,
          'bottom-[-5px] right-[-5px]': !bound,
        }
      )}
    ></span>
  </div>
);

export const Resizer = ({ propKey, children, ...props }) => {
  const {
    id,
    actions: { setProp },
    connectors: { connect },
    fillSpace,
    nodeWidth,
    nodeHeight,
    parent,
    active,
    inNodeContext,
  } = useNode((node) => ({
    parent: node.data.parent,
    active: node.events.selected,
    nodeWidth: node.data.props[propKey.width],
    nodeHeight: node.data.props[propKey.height],
    fillSpace: node.data.props.fillSpace,
  }));

  const { isRootNode, parentDirection } = useEditor((state, query) => {
    return {
      parentDirection:
        parent &&
        state.nodes[parent] &&
        state.nodes[parent].data.props.flexDirection,
      isRootNode: query.node(id).isRoot(),
    };
  });

  const resizable = useRef(null);
  const isResizing = useRef(false);
  const editingDimensions = useRef(null);
  const nodeDimensions = useRef(null);
  nodeDimensions.current = { width: nodeWidth, height: nodeHeight };

  /**
   * Using an internal value to ensure the width/height set in the node is converted to px
   * because for some reason the <re-resizable /> library does not work well with percentages.
   */
  const [internalDimensions, setInternalDimensions] = useState({
    width: nodeWidth,
    height: nodeHeight,
  });

  const updateInternalDimensionsInPx = useCallback(() => {
    const { width: nodeWidth, height: nodeHeight } = nodeDimensions.current;

    const width = percentToPx(
      nodeWidth,
      resizable.current &&
        getElementDimensions(resizable.current.resizable.parentElement).width
    );
    const height = percentToPx(
      nodeHeight,
      resizable.current &&
        getElementDimensions(resizable.current.resizable.parentElement).height
    );

    setInternalDimensions({
      width,
      height,
    });
  }, []);

  const updateInternalDimensionsWithOriginal = useCallback(() => {
    const { width: nodeWidth, height: nodeHeight } = nodeDimensions.current;
    setInternalDimensions({
      width: nodeWidth,
      height: nodeHeight,
    });
  }, []);

  const getUpdatedDimensions = (width, height) => {
    const dom = resizable.current.resizable;
    if (!dom) return;

    const currentWidth = parseInt(editingDimensions.current.width),
      currentHeight = parseInt(editingDimensions.current.height);

    return {
      width: currentWidth + parseInt(width),
      height: currentHeight + parseInt(height),
    };
  };

  useEffect(() => {
    if (!isResizing.current) updateInternalDimensionsWithOriginal();
  }, [nodeWidth, nodeHeight, updateInternalDimensionsWithOriginal]);

  useEffect(() => {
    const listener = debounce(updateInternalDimensionsWithOriginal, 1);
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [updateInternalDimensionsWithOriginal]);

  return (
    <Resizable
      enable={[
        'top',
        'left',
        'bottom',
        'right',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
      ].reduce((acc, key) => {
        acc[key] = active && inNodeContext;
        return acc;
      }, {})}
      className={cx([
        {
          'm-auto': isRootNode,
          flex: true,
        },
      ])}
      ref={(ref) => {
        if (ref) {
          resizable.current = ref;
          connect(resizable.current.resizable);
        }
      }}
      size={internalDimensions}
      onResizeStart={(e) => {
        updateInternalDimensionsInPx();
        e.preventDefault();
        e.stopPropagation();
        const dom = resizable.current.resizable;
        if (!dom) return;
        editingDimensions.current = {
          width: dom.getBoundingClientRect().width,
          height: dom.getBoundingClientRect().height,
        };
        isResizing.current = true;
      }}
      onResize={(_, __, ___, d) => {
        const dom = resizable.current.resizable;
        let { width, height } = getUpdatedDimensions(d.width, d.height);
        if (isPercentage(nodeWidth))
          width =
            pxToPercent(width, getElementDimensions(dom.parentElement).width) +
            '%';
        else width = `${width}px`;

        if (isPercentage(nodeHeight))
          height =
            pxToPercent(
              height,
              getElementDimensions(dom.parentElement).height
            ) + '%';
        else height = `${height}px`;

        if (isPercentage(width) && dom.parentElement.style.width === 'auto') {
          width = editingDimensions.current.width + d.width + 'px';
        }

        if (isPercentage(height) && dom.parentElement.style.height === 'auto') {
          height = editingDimensions.current.height + d.height + 'px';
        }

        setProp((prop) => {
          prop[propKey.width] = width;
          prop[propKey.height] = height;
        }, 500);
      }}
      onResizeStop={() => {
        isResizing.current = false;
        updateInternalDimensionsWithOriginal();
      }}
      {...props}
    >
      {children}
      {active && (
        <Indicators bound={fillSpace === 'yes' ? parentDirection : false} />
      )}
    </Resizable>
  );
};
