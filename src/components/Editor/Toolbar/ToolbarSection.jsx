import { useNode } from '@craftjs/core';
import React, { useState } from 'react';

export const ToolbarSection = ({ title, props, summary, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res, key) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));

  const handleSummaryClick = (e) => {
    // Only toggle if clicking the summary area, not its children
    if (e.target.closest('.panel-details')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="toolbar-section">
      <div className={`panel ${isExpanded ? 'expanded' : ''}`}>
        <div 
          className="panel-summary"
          onClick={handleSummaryClick}
        >
          <div className="panel-content">
            <div className="grid-container">
              <div className="grid-item-title">
                <h5 className="section-title">{title}</h5>
              </div>
              {summary && props && (
                <div className="grid-item-summary">
                  <h5 className="summary-text">
                    {summary(
                      props.reduce((acc, key) => {
                        acc[key] = nodeProps[key];
                        return acc;
                      }, {})
                    )}
                  </h5>
                </div>
              )}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="panel-details" onClick={(e) => e.stopPropagation()}>
            <div className="divider" />
            <div className="grid-container-content">
              {children}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .toolbar-section {
          margin-bottom: 2px;
          max-height: 100%;
          overflow-y: auto;
          position: relative;
        }

        .panel {
          background: transparent;
          border: none;
          position: relative;
        }

        .panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: rgba(0, 0, 0, 0.05);
        }

        .panel.expanded {
          margin: 0;
          min-height: 36px;
        }

        .panel-summary {
          min-height: 36px;
          padding: 0;
          cursor: pointer;
          user-select: none;
          position: sticky;
          top: 0;
          background: white;
          z-index: 1;
        }

        .panel-content {
          padding: 0 12px;
          width: 100%;
        }

        .grid-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 0;
        }

        .grid-item-title {
          flex: 0 0 40%;
        }

        .grid-item-summary {
          flex: 0 0 60%;
          text-align: right;
        }

        .section-title {
          font-size: 13px;
          font-weight: 500;
          color: #4a4a4a;
          margin: 0;
        }

        .summary-text {
          font-size: 13px;
          color: #2196f3;
          margin: 0;
        }

        .panel-details {
          padding: 0 12px 12px;
          overflow-y: auto;
          max-height: calc(100vh - 100px);
        }

        .divider {
          height: 1px;
          background-color: rgba(0, 0, 0, 0.12);
          margin: 4px 0 8px 0;
        }

        .grid-container-content {
          display: grid;
          gap: 4px;
        }

        .grid-container-content > * {
          min-height: 32px;
        }
      `}</style>
    </div>
  );
};