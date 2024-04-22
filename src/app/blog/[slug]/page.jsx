// app/blog/[slug]/page.jsx
import ReactMarkdown from "react-markdown";
import { getPostData } from "@/lib/posts";

export default async function BlogPostPage({ params }) {
    const postData = await getPostData(params.slug);

    return (
        <div className="px-8 py-12">
            <h1 className="text-4xl font-bold mb-4 prose">{postData.title}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.content }} /> */}
            <div className="prose lg:prose-xl text-justify whitespace-pre-line">
                <ReactMarkdown className="text-lg prose lg:prose-xl prose-a:underline prose-a:font-mono" >{postData.content}</ReactMarkdown>
            </div>
        </div>
    );
}
