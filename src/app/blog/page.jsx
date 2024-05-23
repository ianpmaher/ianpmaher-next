import Link from "next/link";
import { getAllBlogPosts, getPostData } from "@/lib/posts";

export default async function BlogPage() {
    const blogPosts = await getAllBlogPosts();

    return (
        <div className="mx-auto my-0 p-12 md:p-0 ">
            {/* <h1 className="">Blog</h1> */}
            <table className="table-auto border border-spacing-1 border-solid border-white">
                <thead className="">
                    <tr className=" ">
                        <th className="border border-solid border-white">Title</th>
                        <th className="border border-solid border-white">Date</th>
                        <th className="border border-solid border-white">Tags</th>
                    </tr>
                </thead>
                <tbody className="">
                    {blogPosts.map((post) => (
                        <tr key={post.slug} className="cursor-pointer table-row hover:bg-dracula-purple border-separate border transition-all duration-300 ease-in border-solid border-white">
                            <td className="table-cell border border-solid border-white  ">
                                <Link href={`/blog/${post.slug}`}>
                                    <p className=" table-cell font-bold underline">{post.title}</p>
                                </Link>
                            </td>
                            <td className="table-cell border border-solid border-white">
                                <Link href={`/blog/${post.slug}`}>{post.date.toLocaleDateString("en-US")}</Link>
                            </td>
                            <td>
                                <Link href={`/blog/${post.slug}`}>
                                    {post.tags.map((tag, index) => (
                                        <span
                                            className="text-white text-sm rounded-sm shadow-xl table-cell"
                                            key={index}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <ul className="flex flex-col md:flex-col-reverse md:gap-10">
                {blogPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                        <li className="p-3 outline rounded-xl hover:shadow-xl hover:bg-fuchsia-800" key={post.slug}>
                            <div className="flex gap-2 justify-between min-h-fit h-">
                                <h2 className="font-bold underline">{post.title}</h2>
                                <h5 className="font-bold underline">{post.date.toLocaleDateString("en-US")}</h5>
                            </div>
                            <p className="justify-evenly items-center flex">
                                {post.tags.map((tag, index) => (
                                    <span
                                        className=" text-white text-sm bg-dracula-purple rounded-sm shadow-xl"
                                        key={index}
                                    >
                                        {tag}{" "}
                                    </span>
                                ))}
                            </p>
                        </li>
                    </Link>
                ))}
            </ul> */}
        </div>
    );
}
