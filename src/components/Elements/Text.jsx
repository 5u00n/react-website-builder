import React from 'react';
import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";
import ContentEditable from 'react-contenteditable';

export const Text = ({ text, fontSize, fontWeight, color, textAlign, fontFamily, fontStyle, textDecoration, lineHeight, letterSpacing, wordSpacing, textTransform, textIndent, textShadow, textOverflow, whiteSpace, ...props }) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp }
  } = useNode((node) => ({
    selected: node.events.selected,
    dragged: node.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (!selected) {
      setEditable(false);
    }
  }, [selected]);

  const textStyle = {
    fontSize,
    fontWeight,
    color,
    textAlign,
    fontFamily,
    fontStyle,
    textDecoration,
    lineHeight,
    letterSpacing,
    wordSpacing,
    textTransform,
    textIndent,
    textShadow,
    textOverflow,
    whiteSpace,
  };

  return (
    <div
      className="p-2 rounded transition-all duration-300 ease-in-out"
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
    >
      <ContentEditable
        html={text}
        onChange={(e) => setProp((props) => (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')), 500)}
        tagName="p"
        disabled={!editable}
        className="outline-none"
        style={textStyle}
        onBlur={() => setEditable(false)}
      />
    </div>
  );
};

export const TextDefaultProps = {
  text: "Default Text",
  fontSize: "16px",
  fontWeight: "normal",
  color: "#000000",
  textAlign: "left",
  fontFamily: "Arial, sans-serif",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1.5",
  letterSpacing: "0px",
  wordSpacing: "0px",
  textTransform: "none",
  textIndent: "0px",
  textShadow: "none",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
};

const TextSettings = () => {
  const {
    actions: { setProp },
    props
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Font Size</label>
          <input
            type="text"
            value={props.fontSize}
            onChange={(e) => setProp((props) => (props.fontSize = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Font Weight</label>
          <select
            value={props.fontWeight}
            onChange={(e) => setProp((props) => (props.fontWeight = e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Lighter</option>
            <option value="bolder">Bolder</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Color</label>
        <input
          type="color"
          value={props.color}
          onChange={(e) => setProp((props) => (props.color = e.target.value))}
          className="w-full h-10 rounded-md border border-gray-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Text Align</label>
        <select
          value={props.textAlign}
          onChange={(e) => setProp((props) => (props.textAlign = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Font Family</label>
        <input
          type="text"
          value={props.fontFamily}
          onChange={(e) => setProp((props) => (props.fontFamily = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Line Height</label>
        <input
          type="number"
          value={props.lineHeight}
          onChange={(e) => setProp((props) => (props.lineHeight = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Letter Spacing</label>
        <input
          type="number"
          value={props.letterSpacing}
          onChange={(e) => setProp((props) => (props.letterSpacing = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Text Transform</label>
        <select
          value={props.textTransform}
          onChange={(e) => setProp((props) => (props.textTransform = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="none">None</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Text Decoration</label>
        <select
          value={props.textDecoration}
          onChange={(e) => setProp((props) => (props.textDecoration = e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="none">None</option>
          <option value="underline">Underline</option>
          <option value="overline">Overline</option>
          <option value="line-through">Line-through</option>
        </select>
      </div>
    </div>
  );
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
