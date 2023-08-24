"use client";

import { BlogPreview } from ".";
import { FirstBlogPreview } from "./FirstBlogPreview";

export const Blog = () => {
  return (
    <section>
      <div className="mt-14 border-b border-lightGray/50 pb-4 flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold">Recent Blogs</h2>
        <h2 className="">See all blogs</h2>
      </div>
      <FirstBlogPreview />
      <div className="py-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <BlogPreview imageUrl="/images/blogs/first-blog.jpeg" />
        <BlogPreview imageUrl="/images/blogs/second-post.jpg" />
        <BlogPreview imageUrl="/images/blogs/third-post.jpg" />
      </div>
    </section>
  );
};
