// app/blog/[slug]/page.jsx
import ReactMarkdown from "react-markdown";
import { getPostData } from "@/lib/posts";

export default async function BlogPostPage({ params }) {
    const postData = await getPostData(params.slug);

    return (
        <div>
            <h1>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
    );
}
