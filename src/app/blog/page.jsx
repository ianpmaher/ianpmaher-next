import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";

export default async function BlogPage() {
    const blogPosts = await getAllBlogPosts();

    return (
        <div className="mx-auto my-0 p-2 md:p-0 text-2xl">
            <div className="grid grid-cols-12 gap-4">
                {blogPosts.map((post, index) => {
                    const colSpan =
                        index % 3 === 0
                            ? "col-span-12 md:col-span-6 lg:col-span-4"
                            : index % 3 === 1
                            ? "col-span-12 md:col-span-6 lg:col-span-6"
                            : "col-span-12 md:col-span-12 lg:col-span-8";

                    return (
                        <div
                            key={post.slug}
                            className={`${colSpan} cursor-pointer border-4 border-solid dark:border-white border-paper-main p-2 dark:hover:bg-dracula-purple hover:bg-dracula-purple transition-all duration-200 ease-in rounded-md overflow-scroll text-paper-main bg-dracula-blue dark:text-paper-bg dark:bg-paper-main `}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="font-bold underline">{post.title}</h2>
                            </Link>
                            <Link href={`/blog/${post.slug}`}>
                                <p>{post.date.toLocaleDateString("en-US")}</p>
                            </Link>
                            <div>
                                {post.tags.map((tag, index) => (
                                    <Link href={`/blog/${post.slug}`} key={index}>
                                        <span className=" text-lg md:text-lg mx-1 rounded-sm shadow-xl ">
                                            {tag}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
