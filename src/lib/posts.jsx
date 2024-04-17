// lib/posts.js
// import * as fs from 'fs';
import * as fs from "node:fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllBlogPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(".md", ""),
            ...data,
        };
    });
}

export async function getPostData(slug) {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        ...data,
        content,
    };
}
