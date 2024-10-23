import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import Sidebar from './Sidebar';
import SettingsPanel from './SettingsPanel';
import { Text } from '../Elements/Text';
import { Card } from '../Elements/Card';
import { Header } from '../Elements/Header';
import { List } from '../Elements/List';
import { Table } from '../Elements/Table';
import { Container } from '../Elements/Container';
import { Button } from '../Elements/Button';
import { Image } from '../Elements/Image';
import { Blog } from '../Elements/Blog';
import { FocusCards } from '../Blocks/FocusCards';
import Navbar from './Navbar';
import { HeroSection } from '../Blocks/HeroSection';
import ResizablePanel from './ResizablePanel';
import { Viewport } from './ViewPort';
import { RenderNode } from './RenderNode';

const EditorComponent = () => {
  return (
    <Editor resolver={{ Text, Container, Image, Button, Header, List, Card, Table, Blog, FocusCards, HeroSection }}
      onRender={RenderNode}

    >
      <Navbar />
      <div className="flex h-screen bg-gray-100">
        <ResizablePanel defaultWidth={250} minWidth={200} maxWidth={400}>
          <Sidebar className="w-full h-full" />
        </ResizablePanel>
        <div className="flex-grow p-4 overflow-auto">
          <Viewport>
            <Frame>
              <Element is={Container} canvas data-cy="root-container" background="#FFFFFF" padding={20}>
              </Element>
            </Frame>
          </Viewport>
        </div>
        <ResizablePanel defaultWidth={300} minWidth={200} maxWidth={400}>
          <SettingsPanel className="w-full h-full" />
        </ResizablePanel>
      </div>
    </Editor>
  );
};

export default EditorComponent;
