import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { Text, Container, Image, Button, Header, List, Table } from '../../components/Elements';
import { FocusCards, HeroSection, Blog, Card  } from '../../components/Blocks';
import { SettingsPanel } from './SettingsPanel';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { ResizablePanel } from '../../components/Editor';

export const OldEditor = () => {
  return (
    <Editor resolver={{ Text, Container, Image, Button, Header, List, Card, Table, Blog, FocusCards, HeroSection }}
    >
      <Navbar />
      <div className="flex h-screen bg-gray-100">
        <ResizablePanel defaultWidth={250} minWidth={200} maxWidth={400}>
          <Sidebar className="w-full h-full" />
        </ResizablePanel>
        <div className="flex-grow p-4 overflow-auto">

          <Frame>
            <Element is={Container} canvas
              width="800px"
              height="auto"
              background={{ r: 255, g: 255, b: 255, a: 1 }}
              padding={['40', '40', '40', '40']}
              custom={{ displayName: 'App' }} >
            </Element>
          </Frame>
        </div>
        <ResizablePanel defaultWidth={300} minWidth={200} maxWidth={400}>
          <SettingsPanel className="w-full h-full" />
        </ResizablePanel>
      </div>
    </Editor>
  );
};

