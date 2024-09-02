"use client";

import { useEffect, useState } from "react";
import parseMarkdown from "@/lib/markdownutils";
import MarkdownContainer from "./MarkdownContainer";

const PostContainer = ({ path }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const markdown = await parseMarkdown(path);
      setContent(markdown);
    };

    fetchContent();
  }, [path]);

  return (
    <article className="prose mx-auto my-0">
      <MarkdownContainer content={content} />
    </article>
  );
};

export default PostContainer;
