"use client";

import { useEffect, useState } from "react";
import parseMarkdown from "@/lib/markdownutils";
import MarkdownContainer from "./MarkdownContainer";

export default function PostContainer(props) {
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            const md = await parseMarkdown("/posts/article1.md");
            setContent(md);
        };
        fetchMarkdown();
    }, []);

    return (
        <article className="mx-auto ">
            <div className="prose mx-auto h-fit w-fit">
                <MarkdownContainer>{content}</MarkdownContainer>
            </div>
        </article>
    );
}
