import Link from "next/link";
import { formatDate, getBlogPostGroup } from "app/lib/posts";
import { blogGroups } from "app/blog-config";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
  return (
    <section>
      {Object.entries(blogGroups).map(([group, {title}]) => (
        <Blogs key={group} group={group} title={title}/>
      ))}
    </section>
  )
}

function Blogs({group, title}) {
  let allBlogs = getBlogPostGroup(group);

  return (
    <section>
      <h2 className="text-xl font-normal tracking-tight">{title}</h2>
      <hr className="mb-3" />
      <div className="mb-6">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-2 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <p className="text-black dark:text-white tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
