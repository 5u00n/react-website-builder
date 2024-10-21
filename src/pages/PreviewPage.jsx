import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const PreviewPage = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState({ title: '', content: [] });

  useEffect(() => {
    const savedPage = localStorage.getItem(slug);
    if (savedPage) {
      setPageData(JSON.parse(savedPage));
    }
  }, [slug]);

  const renderComponent = (component) => {
    const MotionComponent = motion[component.type] || motion.div;
    
    return (
      <MotionComponent
        key={component.id}
        style={{
          ...component.settings,
          position: 'absolute',
          left: component.left,
          top: component.top,
          width: component.width,
          height: component.height,
        }}
        initial={component.settings.animation}
        animate={component.settings.animation}
      >
        {component.settings.text || 'Component'}
      </MotionComponent>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">{pageData.title}</h1>
      <div className="relative" style={{ height: '100vh' }}>
        {pageData.content.map(renderComponent)}
      </div>
    </div>
  );
};

export default PreviewPage;