"use client";

import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function MarkdownContainer({ children }) {
    const [content, setContent] = useState("");

    useEffect(() => {
        setContent(children);
    }, [children]);

    return (
        <article className="">
            <div className="prose text-xl ">
                {content && <Markdown>{content}</Markdown>}
            </div>
        </article>
    );
}
