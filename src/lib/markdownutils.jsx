// gray-matter, remark, remark-html
import matter from "gray-matter";

const parseMarkdown = async (path) => {
    const response = await fetch(path);
    const text = await response.text();
    const { content } = matter(text);
    return content;
    
};

export default parseMarkdown;
