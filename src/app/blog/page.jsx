import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";

export default async function BlogPage() {
    const blogPosts = await getAllBlogPosts();

    return (
        <div className="mx-auto my-0 p-12 md:p-0">
            {/* <h1 className="">Blog</h1> */}
            <ul className="flex flex-col md:flex-row gap-2 md:gap-10">
                {blogPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                        <li className="p-4 outline rounded-xl hover:shadow-xl hover:bg-fuchsia-800" key={post.slug}>
                            <h2 className=" font-bold underline">{post.title}</h2>
                            <p>{post.excerpt}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
