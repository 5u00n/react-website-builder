import { Editor, Frame, Element } from "@craftjs/core";
import { Text, Container } from "../../components/Elements";
import { Viewport } from "../../components/Editor";
import { RenderNode } from "../../components/Editor";

export const SimpleEditor = () => {
    return <div className="bg-gray-200 h-screen w-screen">
        <Editor resolver={{ Text, Container }}
            enabled={false}
            onRender={RenderNode}

        >
            <Viewport>
                <Frame>
                    <Element
                        canvas
                        is={Container}
                        width="800px"
                        height="auto"
                        background={{ r: 255, g: 255, b: 255, a: 1 }}
                        padding={['40', '40', '40', '40']}
                        custom={{ displayName: 'App' }}
                    >
                        {/* <Element
                            canvas
                            is={Header}
                            custom={{ displayName: 'Header' }}
                        />
                        <Element
                            canvas
                            is={Blog}
                            custom={{ displayName: 'Blog' }}
                        />
                        <Element canvas is={Text} custom={{ displayName: 'Text' }} />
                        <Element canvas is={Button} custom={{ displayName: 'Button' }} /> */}

                    </Element>
                </Frame>
            </Viewport>
        </Editor>
    </div>;
};
