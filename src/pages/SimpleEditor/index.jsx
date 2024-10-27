import { Editor, Frame, Element } from "@craftjs/core";
import { Text, Container, Button, Image, Header, Video } from "../../components/Elements";
import { Blog, HeroSection, FocusCards, News, Template, Carousel, Card } from "../../components/Blocks";
import { Viewport } from "../../components/Editor";
import { RenderNode } from "../../components/Editor";

export const SimpleEditor = () => {
    return (
        <div className="bg-gray-200 w-screen">
            <Editor
                resolver={{ Text, Container, Button, Image, Header, Video, Blog, HeroSection, FocusCards, News, Template, Carousel, Card }}
                enabled={true}
                onRender={RenderNode}
                
            >
                <Viewport>
                    <Frame>
                        <Element    
                            canvas
                            is={Container}
                            width="100%"
                            height="auto"
                            padding={['20', '20', '20', '20']}
                            background={{ r: 255, g: 255, b: 255, a: 1 }}
                            custom={{ displayName: 'App' }}
                        >
                            <Element
                                canvas
                                is={Container}
                                width="100%"
                                height="auto"
                                padding={['20', '20', '20', '20']}
                                background={{ r: 255, g: 255, b: 255, a: 1 }}
                                custom={{ displayName: 'Inner Container' }}
                            />
                        </Element>
                    </Frame>
                </Viewport>
            </Editor>
        </div>
    );
};
