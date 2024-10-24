import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import Sidebar from '../../components/Editor/Sidebar';
import SettingsPanel from '../../components/Editor/SettingsPanel';
import { Text } from '../../components/Elements/Text';
import { Card } from '../../components/Elements/Card';
import { Header } from '../../components/Elements/Header';
import { List } from '../../components/Elements/List';
import { Table } from '../../components/Elements/Table';
import { Container } from '../../components/Elements/Container';
import { Button } from '../../components/Elements/Button';
import { Image } from '../../components/Elements/Image';
import { Blog } from '../../components/Elements/Blog';
import { FocusCards } from '../../components/Blocks/FocusCards';
import Navbar from '../../components/Editor/Navbar';
import { HeroSection } from '../../components/Blocks/HeroSection';
import ResizablePanel from '../../components/Editor/ResizablePanel';
import { Viewport } from '../../components/Editor/ViewPort';
import { RenderNode } from '../../components/Editor/RenderNode';

export const OldEditor = () => {
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

