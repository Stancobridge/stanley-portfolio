"use client";

import Image from "next/image";
import { CalenderIcon } from "../../Assets";
import { BlogBreadcrumbs } from "./BlogBreadcrumbs";
import BlogContent from "./BlogContent.mdx";

export const BlogView = () => {
  return (
    <section className="my-8">
      <BlogBreadcrumbs />
      <h1 className="text-white my-8 text-center font-semibold text-4xl">
        Disguise Driven Testing: Jest Mocks In Depth — Part 2
      </h1>
      <div>
        <p className="pt-4 flex items-center justify-center text-center">
          <CalenderIcon />
          <span className="px-2">Apr 22nd, 2023</span>
          <span>8min read</span>
        </p>
        <p className="text-center">
          ReactJs, React Query, Javascript, Typescript, NextJs
        </p>
      </div>
      <article className="my-8">
        <figure className="relative w-full h-[600px]">
          <Image
            alt=""
            src={"/images/blogs/first-blog.jpeg"}
            fill
            className="rounded-md"
            objectFit="cover"
          />
        </figure>
        <BlogContent />
      </article>
    </section>
  );
};
