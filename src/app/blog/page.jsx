import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";

export default async function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="mx-auto my-0 p-1 md:p-0 text-2xl">
      <div className="grid grid-cols-12 gap-4 w-fit">
        {blogPosts
          .sort((a, b) => b.date - a.date) // sort by date descending order (newest first)
          .map((post, index) => {
            // map over each post
            const colSpan =
              index % 3 === 0
                ? "col-span-12 md:col-span-6 lg:col-span-5"
                : index % 3 === 1
                ? "col-span-12 md:col-span-6 lg:col-span-6"
                : "col-span-12 md:col-span-12 lg:col-span-8";

            return (
              <div
                key={post.slug}
                className={`${colSpan} cursor-pointer border-4 border-solid dark:border-white border-paper-main p-2 dark:hover:bg-dracula-purple hover:bg-dracula-purple transition-all duration-200 ease-in rounded-md overflow-hidden text-paper-main bg-dracula-blue dark:text-paper-bg dark:bg-paper-main `}
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-bold underline">{post.title}</h2>
                </Link>
                <Link href={`/blog/${post.slug}`}>
                  <p>{post.date.toLocaleDateString("en-US")}</p>
                </Link>
                <div>
                  {post.tags.map((tag, index) => (
                    <Link
                      href={`/blog/${post.slug}`}
                      key={index}
                      className="underline even:decoration-dracula-green odd:decoration-dracula-orange underline-offset-4"
                    >
                      <span className=" text-lg md:text-lg mx-1 rounded-sm shadow-xl ">{tag}</span>
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
