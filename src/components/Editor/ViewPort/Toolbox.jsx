import { Element, useEditor } from '@craftjs/core';
import React, { useState } from 'react';
import { FaRegSquare, FaRegHandPointer, FaFont, FaYoutube, FaChevronRight, FaChevronDown, FaImage, FaListUl, FaBlog, FaNewspaper, FaRegObjectGroup, FaLayerGroup, FaTable, FaWpforms, FaRulerHorizontal, FaGripLines, FaArrowsAltV } from 'react-icons/fa';
import { HiOutlineTemplate } from 'react-icons/hi';
import { MdViewCarousel } from 'react-icons/md';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { ResizablePanel } from '../ResizablePanel';
import { Text, Header, Button, Image, Video, List, Divider, Separator, Spacer, Table, Container } from '../../Elements';


import { HeroSection, Blog, Card, FocusCards, News, Template, Carousel } from '../../Blocks';

const ToolboxSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="mb-4 border rounded-md overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium">{title}</span>
        {isExpanded ? <FaChevronDown className="text-gray-500" /> : <FaChevronRight className="text-gray-500" />}
      </button>
      {isExpanded && <div className="p-3 bg-white">{children}</div>}
    </div>
  );
};

const ToolboxItem = ({ icon: Icon, label, onDragStart }) => (
  <Tooltip>
    <TooltipTrigger>
      <div
        className="flex  items-center justify-center w-12 h-12 m-1 rounded-md cursor-move hover:bg-gray-100 transition-colors duration-200"
        onDragStart={onDragStart}
        draggable
      >
        <div className='flex flex-col items-center justify-center'>
          <Icon className="w-6 h-6 text-gray-600" />
          <span className=' text-xs'>{label}</span>
        </div>
      </div>
    </TooltipTrigger>
    <TooltipContent>{label}</TooltipContent>
  </Tooltip>
);

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
    actions: { addNodeTree }
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const handleDragStart = (e, component) => {
    e.dataTransfer.setData('application/craftjs', JSON.stringify({
      type: 'container',
      props: {
        ...component.props,
      },
    }));
  };

  if (!enabled) {
    return null;
  }

  return (
    <ResizablePanel defaultWidth={200} minWidth={100} maxWidth={400}>
      <div className="toolbox h-full bg-white flex flex-col">
        <div className="flex-1 p-1 space-y-1 overflow-y-auto">
          <ToolboxSection title="Elements">
            <div className="flex flex-wrap justify-start">
              <ToolboxItem
                icon={FaRegSquare}
                label="Container"
                onDragStart={(e) => {
                  create(
                    e.target,
                    <Element
                      canvas
                      is={Container}
                      background={{ r: 255, g: 255, b: 255, a: 1 }}
                      color={{ r: 0, g: 0, b: 0, a: 1 }}
                      height="200px"
                      width="200px"
                      padding={['20', '20', '20', '20']}
                    />
                  );
                  handleDragStart(e, Container);
                }}
              />
              <ToolboxItem
                icon={FaFont}
                label="Header"
                onDragStart={(e) => create(e.target, <Header />)}
              />
              <ToolboxItem
                icon={FaFont}
                label="Text"
                onDragStart={(e) => create(e.target, <Text fontSize="16" textAlign="left" text="New text" />)}
              />
              <ToolboxItem
                icon={FaRegHandPointer}
                label="Button"
                onDragStart={(e) => create(e.target, <Button text="New Button" />)}
              />
              <ToolboxItem
                icon={FaYoutube}
                label="Video"
                onDragStart={(e) => create(e.target, <Video />)}
              />
              <ToolboxItem
                icon={FaImage}
                label="Image"
                onDragStart={(e) => create(e.target, <Image />)}
              />
              <ToolboxItem
                icon={FaListUl}
                label="List"
                onDragStart={(e) => create(e.target, <List />)}
              />

              <ToolboxItem
                icon={FaTable}
                label="Table"
                onDragStart={(e) => create(e.target, <Table />)}
              />
              <ToolboxItem
                icon={FaWpforms}
                label="Form"
                onDragStart={(e) => create(e.target, <Form />)}
              />
              <ToolboxItem
                icon={FaRulerHorizontal}
                label="Divider"
                onDragStart={(e) => create(e.target, <Divider />)}
              />
              <ToolboxItem
                icon={FaGripLines}
                label="Separator"
                onDragStart={(e) => create(e.target, <Separator />)}
              />
              <ToolboxItem
                icon={FaArrowsAltV}
                label="Spacer"
                onDragStart={(e) => create(e.target, <Spacer />)}
              />


            </div>
          </ToolboxSection>
          <ToolboxSection title="Blocks">
            <div className="flex flex-wrap justify-start space-y-2">

              <ToolboxItem
                icon={FaRegObjectGroup}
                label="Hero Section"
                onDragStart={(e) => create(e.target, <HeroSection />)}
              />
              <ToolboxItem
                icon={FaBlog}
                label="Blog Section"
                onDragStart={(e) => create(e.target, <Blog />)}
              />
              <ToolboxItem
                icon={FaRegSquare}
                label="Card Section"
                onDragStart={(e) => create(e.target, <Card />)}
              />
              <ToolboxItem
                icon={FaLayerGroup}
                label="Focus Cards"
                onDragStart={(e) => create(e.target, <FocusCards />)}
              />

              <ToolboxItem
                icon={FaNewspaper}
                label="News Section"
                onDragStart={(e) => create(e.target, <News />)}
              />
              <ToolboxItem
                icon={MdViewCarousel}
                label="Carousel Section"
                onDragStart={(e) => create(e.target, <Carousel />)}
              />
              <ToolboxItem
                icon={HiOutlineTemplate}
                label="Template Section"
                onDragStart={(e) => create(e.target, <Template />)}
              />
            </div>
          </ToolboxSection>
        </div>
      </div>
    </ResizablePanel>
  );
};
