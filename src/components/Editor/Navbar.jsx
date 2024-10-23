import React, { useState, createElement, useEffect } from 'react';
import { useEditor } from '@craftjs/core';
import { FaPlus, FaEdit, FaMobileAlt, FaTabletAlt, FaDesktop, FaEye, FaSave, FaUpload, FaSearchPlus, FaSearchMinus, FaTh } from 'react-icons/fa';
import { Container } from '../Elements/Container';

const Navbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  const [pageName, setPageName] = useState('Untitled Page');
  const [currentView, setCurrentView] = useState('desktop');
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    const savedPage = localStorage.getItem('craftjs-demo');
    if (savedPage) {
      const { name, content } = JSON.parse(savedPage);
      setPageName(name);
      actions.deserialize(content);
    }
  }, [actions]);

  const handleCreateNewPage = () => {
    actions.clearEvents();
    query.createNode(
      createElement(Container, {
        canvas: true,
        background: '#ffffff',
        padding: 20,
      })
    );
    setPageName('Untitled Page');
  };

  const handleSave = () => {
    if (!pageName.trim()) {
      alert('Page name cannot be empty');
      return;
    }
    const json = query.serialize();
    const pageData = {
      name: pageName,
      content: json,
    };
    localStorage.setItem('craftjs-demo', JSON.stringify(pageData));
    console.log('Page saved');
  };

  const handlePublish = () => {
    const json = query.serialize();
    // Here you would typically send this to a server
    console.log('Publishing page', json);
  };

  const handlePreview = () => {
    actions.setOptions((options) => options.enabled = !enabled);
  };

  const handleZoomIn = () => {
    setZoom(prevZoom => {
      const newZoom = Math.min(prevZoom + 10, 200);
      actions.setOptions((options) => options.zoom = newZoom / 100);
      return newZoom;
    });
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => {
      const newZoom = Math.max(prevZoom - 10, 50);
      actions.setOptions((options) => options.zoom = newZoom / 100);
      return newZoom;
    });
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    let width;
    switch(view) {
      case 'mobile':
        width = 375;
        break;
      case 'tablet':
        width = 768;
        break;
      default:
        width = '100%';
    }
    actions.setOptions((options) => options.viewport = { width, height: '100%' });
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
          <button onClick={handleCreateNewPage} className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded">
            <FaPlus />
          </button>
          <div className="flex items-center space-x-2">
            <FaEdit className="text-gray-400" />
            <input
              type="text"
              defaultValue={pageName}
              onChange={(e) => setPageName(e.target.value)}
              className="bg-gray-700 text-white px-2 py-1 rounded"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button onClick={() => handleViewChange('mobile')} className={`p-2 rounded ${currentView === 'mobile' ? 'bg-gray-600' : ''}`}>
              <FaMobileAlt />
            </button>
            <button onClick={() => handleViewChange('tablet')} className={`p-2 rounded ${currentView === 'tablet' ? 'bg-gray-600' : ''}`}>
              <FaTabletAlt />
            </button>
            <button onClick={() => handleViewChange('desktop')} className={`p-2 rounded ${currentView === 'desktop' ? 'bg-gray-600' : ''}`}>
              <FaDesktop />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={handleZoomOut} className="p-2 hover:bg-gray-700 rounded">
              <FaSearchMinus />
            </button>
            <span>{zoom}%</span>
            <button onClick={handleZoomIn} className="p-2 hover:bg-gray-700 rounded">
              <FaSearchPlus />
            </button>
          </div>
          <button onClick={handlePreview} className={`p-2 rounded ${!enabled ? 'bg-green-500' : 'bg-gray-600'}`}>
            <FaEye />
          </button>
          <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded">
            <FaSave />
          </button>
          <button onClick={handlePublish} className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded">
            <FaUpload />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
