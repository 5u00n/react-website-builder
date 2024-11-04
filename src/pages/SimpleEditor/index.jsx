import { Editor, Frame, Element } from "@craftjs/core";
import { Text, Container, Button, Image, Header, Video } from "../../components/Elements";
import { Blog } from "../../components/Blocks";
import { Viewport } from "../../components/Editor";
import { RenderNode } from "../../components/Editor";

export const SimpleEditor = () => {
    return <div className="bg-gray-200 w-screen">
        <Editor resolver={{ Text, Container, Button, Image, Header, Video, Blog }}
            enabled={false}
            onRender={RenderNode}

        >
            <Viewport>
                <Frame>
                    <Element
                        canvas
                        is={Container}
                        width="100%"
                        height="auto"
                        background={{ r: 255, g: 255, b: 255, a: 1 }}
                        padding={['40', '40', '40', '40']}
                        custom={{ displayName: 'App' }}
                    >
                    </Element>
                </Frame>
            </Viewport>
        </Editor>
    </div>;
};
