import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import remarkParse from "remark-parse";

const MarkdownContainer = ({ content }) => {
    return (
        <div className="prose text-xl ">
            {content && (
                <Markdown
                    className=" prose mx-auto my-0 block w-fit h-fit rounded-xl p-1 border overflow-hidden text-justify"
                    remarkPlugins={[remarkGfm, remarkStringify, remarkParse]}
                    components={{
                        img: ({ node, ...props }) => {
                            return <Image className="mx-auto" {...props} alt="blog image" />;
                        },
                        a: ({ node, ...props }) => {
                            return <Link target="_blank" rel="noreferrer" {...props} />;
                        },
                        h1: ({ node, ...props }) => {
                            return <h1 className="text-4xl" {...props} />;
                        },
                        h2: ({ node, ...props }) => {
                            return <h2 className="text-3xl" {...props} />;
                        },
                        p: ({ node, ...props }) => {
                            return <p className="text-lg" {...props} />;
                        },
                    }}
                >
                    {content}
                </Markdown>
            )}
        </div>
    );
};

export default MarkdownContainer;
