import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

const MarkdownContainer = ({ content }) => {
    return (
        <div className="prose text-xl ">
            {content && (
                <Markdown
                    className=" prose mx-auto my-0 block max-w-lg h-fit rounded-xl min-h-[22rem] p-3 border bg-custom-white border-cyan-950 text-center shadow-custom hover:border-cyan-300 hover:translate-y-1 transition-all duration-700 ease-in-out overflow-hidden"
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
