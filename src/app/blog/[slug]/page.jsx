// app/blog/[slug]/page.jsx
import ReactMarkdown from "react-markdown";
import { getPostData } from "@/lib/posts";
import { ScrollDiv } from "@/app/components/ScrollDiv";
import Image from "next/image";
import Link from "next/link";



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
    // strong: ({ children }) => <strong style={{ fontSize: "1.4rem" }}>{children}</strong>,
    // This custom renderer changes how emphasis text is rendered
    // em: ({ children }) => <em style={{ fontSize: "1.1rem" }}>{children}</em>,
    // This custom renderer changes how paragraphs are rendered

    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 font-serif pl-4 my-2">{children}</blockquote>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    li: ({ children }) => <li className="my-0">{children}</li>,
    p: ({ children }) => <p className="my-1 first-line:tracking-widest first-letter:uppercase first-letter:text-2xl first-letter:float-let first-letter:font-bold">{children}</p>,
    // images rendered with placeholder
    img: ({ src, alt }) => {
        return (
            <Image
                src={src}
                alt={alt}
                width={800}
                height={800}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" // 64x64 base64 encoded}
                className="md:w-full md:h-full hover:scale-125 duration-200 transition-all ease-in-out"
            />
        );
    },
};

export default async function BlogPostPage({ params }) {
    const postData = await getPostData(params.slug);

    // display date in a readable format
    const dateFormatted = postData.date.toLocaleDateString("en-US");

    return (
        <div className="px-4 md:px-2 pt-12">
            <h1 className="text-4xl font-bold mb-4 prose">{postData.title}</h1>
            <h5 className="text-xl font-bold mb-4 prose">{dateFormatted}</h5>
            <Link href="/blog">
                <div className="flex items-center justify-center w-1/6 h-16 outline hoverbox mx-auto my-4 rounded-full">
                    <p className="text-xl">Back to blog</p>
                </div>
            </Link>
            <div className="prose lg:prose-xl text-justify">
                <ScrollDiv />
                <ReactMarkdown
                    components={renderers}
                    className=" text-md prose lg:prose-xl prose-p:text-md prose-a:underline prose-a:font-mono prose-a:text-xl prose-li:list-disc hover:prose-a:text-blue-700 prose-h1:text-3xl prose-h3:text-xl prose-img:w-full prose-img:h-full md:prose-img:max-w-[40vw] md:prose-img:max-h-auto prose-img:px-2 touch-pinch-zoom active:prose-img:scale-110 whitespace-pre-line prose-p:first-letter:capitalize first-line:tracking-widest"
                >
                    {postData.content}
                </ReactMarkdown>
            </div>
            <Link href="/blog">
                <div className="flex items-center justify-center w-1/6 h-16 outline hoverbox mx-auto mt-4 rounded-full">
                    <p className="text-xl">Back to blog</p>
                </div>
            </Link>
        </div>
    );
}
