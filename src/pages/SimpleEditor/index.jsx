import { Editor, Frame, Element } from "@craftjs/core";
import { Text, Container, Image, Button, Header, List, Card, Table, Blog } from "../../components/Elements";
import { RenderNode } from "../../components/Editor/RenderNode";
import { Viewport } from "../../components/Editor/ViewPort";

export const SimpleEditor = () => {
    return <div>
        <Editor resolver={{ Text, Container, Image, Button, Header, List, Card, Table, Blog }}
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
                        <Element
                            canvas
                            is={Container}
                            flexDirection="row"
                            width="100%"
                            height="auto"
                            padding={['40', '40', '40', '40']}
                            margin={['0', '0', '40', '0']}
                            custom={{ displayName: 'Introduction' }}
                        >
                            <Element
                                canvas
                                is={Container}
                                width="40%"
                                height="100%"
                                padding={['0', '20', '0', '20']}
                                custom={{ displayName: 'Heading' }}
                            >
                                <Text
                                    fontSize="23"
                                    fontWeight="400"
                                    text="Craft.js is a React framework for building powerful &amp; feature-rich drag-n-drop page editors."
                                ></Text>
                            </Element>
                        </Element>
                    </Element>
                </Frame>
            </Viewport>
        </Editor>
    </div>;
};
