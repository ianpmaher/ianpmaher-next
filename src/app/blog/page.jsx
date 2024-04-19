import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";

export default async function BlogPage() {
    const blogPosts = await getAllBlogPosts();

    return (
        <div className="mx-auto my-0">
            {/* <h1 className="">Blog</h1> */}
            <ul className="flex gap-10">
                {blogPosts.map((post) => (
                    <li className="p-4 outline rounded-xl hover:shadow-xl hover:bg-fuchsia-800" key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className=" font-bold underline">{post.title}</h2>
                            <p>{post.excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
