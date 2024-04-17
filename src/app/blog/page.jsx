import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";

export default async function BlogPage() {
    const blogPosts = await getAllBlogPosts();

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
