// app/blog/[slug]/page.jsx
import ReactMarkdown from "react-markdown";
import { getPostData } from "@/lib/posts";

const renderers = { // react-markdown changed this to "components" 
    // This custom renderer changes how headings are rendered
    heading: ({level, children}) => {
        if (level === 1) return <h1 style={{color: 'blue'}}>{children}</h1>;
        if (level === 2) return <h2 style={{color: 'red'}}>{children}</h2>;
        // Add more cases as needed
        return children;
    },
    // This custom renderer changes how strong text is rendered
    strong: ({children}) => <strong style={{color: 'green'}}>{children}</strong>,
    // This custom renderer changes how emphasis text is rendered
    em: ({children}) => <em style={{color: 'purple'}}>{children}</em>,
    // This custom renderer changes how paragraphs are rendered
    paragraph: ({children}) => <p style={{color: 'orange'}}>{children}</p>,
};


export default async function BlogPostPage({ params }) {
    const postData = await getPostData(params.slug);

    return (
        <div className="px-8 py-12">
            <h1 className="text-4xl font-bold mb-4 prose">{postData.title}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.content }} /> */}
            <div className="prose lg:prose-xl text-justify whitespace-pre-line">
                <ReactMarkdown components={renderers} className="text-lg prose lg:prose-xl prose-a:underline prose-a:font-mono" >{postData.content}</ReactMarkdown>
            </div>
        </div>
    );
}
