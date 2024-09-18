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
    if (level === 3) return <h3 style={{ color: "green" }}>{children}</h3>;
    // Add more cases as needed
    return children;
  },
  // This custom renderer changes how strong text is rendered
  // strong: ({ children }) => <strong style={{ fontSize: "1.4rem" }}>{children}</strong>,
  // This custom renderer changes how emphasis text is rendered
  // em: ({ children }) => <em style={{ fontSize: "1.1rem" }}>{children}</em>,
  // This custom renderer changes how paragraphs are rendered

  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 font-mono text-sm px-4 bg-paper-bg text-paper-text w-1/2 center-center">
      {children}
    </blockquote>
  ),
  h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
  ul: ({ children }) => <ul className="list-disc list-inside p-0 m-0">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
  li: ({ children }) => <li className="my-0 p-0 leading-3">{children}</li>,
  p: ({ children }) => (
    <p className="my- first-line:tracking-wide first-letter:uppercase first-letter:text- first-letter:float-let first-letter:font-bold">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className=" text-xl underline underline-offset-4 decoration-dracula-purple">{children}</strong>
  ),
  // images rendered with placeholder
  img: ({ src, alt }) => {
    return (
      <span className="max-w-40 overflow-scroll">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" // 64x64 base64 encoded}
          className="md:w-full md:h-1/2 hover:scale-125 duration-1000 transition-all ease-in-out center-center overflow-scroll "
        />
      </span>
    );
  },
  details: ({ children }) => (
    <details className="border-l-4 border-gray-300 font-mono text-sm px-4 bg-paper-bg text-paper-text w-1/2 center-center">
      {children}
    </details>
  ),
};

export default async function BlogPostPage({ params }) {
  const postData = await getPostData(params.slug);

  // display date in a readable format
  const dateFormatted = postData.date.toLocaleDateString("en-US");

  return (
    <div className="pt-6 w-[82vw]">
      <h1 className="text-4xl font-bold mb-4 prose">{postData.title}</h1>
      <h5 className="text-xl font-bold mb-4 prose">{dateFormatted}</h5>
      <Link href="/blog" aria-label="back to blog">
        <div className="flex items-center justify-center w-1/6 h-16 outline hoverbox mx-auto my-4 rounded-full">
          <p className="text-xl">Back to blog</p>
        </div>
      </Link>
      <div className="prose lg:prose-xl text-justify bg-black text-white rounded-lg py-3 px-12">
        <ScrollDiv />
        <ReactMarkdown
          components={renderers}
          className="text-md prose lg:prose-xl prose-p:text-md prose-p:leading-normal prose-a:underline prose-a:font-mono prose-a:text-xl prose-li:list-disc hover:prose-a:text-blue-700 prose-h3:text-center prose-h3:outline prose-h3:outline-sky-400 prose-img:w-full prose-img:h- md:prose-img:max-w-[40vw] md:prose-img:h-fit prose-img:px-2 touch-pinch-zoom active:prose-img:scale-110 whitespace-pre-line prose-p:first-letter:capitalize first-line:tracking-normal prose-ul:leading-tight"
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
