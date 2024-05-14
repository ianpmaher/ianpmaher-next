// app/blog/[slug]/page.jsx
import ReactMarkdown from "react-markdown";
import { getPostData } from "@/lib/posts";
import { ScrollDiv } from "@/app/components/ScrollDiv";

const renderers = {
    // react-markdown changed this to "components"
    // This custom renderer changes how headings are rendered
    heading: ({ level, children }) => {
        if (level === 1) return <h1 style={{ color: "blue" }}>{children}</h1>;
        if (level === 2) return <h2 style={{ color: "red" }}>{children}</h2>;
        // Add more cases as needed
        return children;
    },
    // This custom renderer changes how strong text is rendered
    strong: ({ children }) => <strong style={{ fontSize: "1.4rem" }}>{children}</strong>,
    // This custom renderer changes how emphasis text is rendered
    em: ({ children }) => <em style={{ fontSize: "1.3rem" }}>{children}</em>,
    // This custom renderer changes how paragraphs are rendered
    paragraph: ({ children }) => <p style={{ color: "orange" }}>{children}</p>,
};

export default async function BlogPostPage({ params }) {
    const postData = await getPostData(params.slug);

    return (
        <div className="px-4 md:px-2 py-12">
            <h1 className="text-4xl font-bold mb-4 prose">{postData.title}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.content }} /> */}
            <div className="prose lg:prose-xl text-justify whitespace-pre-line">
                <ScrollDiv />
                <ReactMarkdown
                    components={renderers}
                    className="text-lg prose lg:prose-xl prose-a:underline prose-a:font-mono prose-a:text-xl hover:prose-a:text-blue-700 prose-h1:text-3xl prose-img:w-full prose-img:h-full md:prose-img:max-w-fit md:prose-img:h-3/4 touch-pinch-zoom active:prose-img:scale-110 "
                >
                    {postData.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
