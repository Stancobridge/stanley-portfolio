"use client";

import Link from "next/link";

export const HeaderNav = () => {
  return (
    <div className="flex justify-between items-center my-4 mt-8">
      <div className="w-48 h-7 bg-lightGray rounded-xl"></div>
      <div className="">
        <nav className="space-x-8">
          <Link
            className="border-2 border-lightGray py-1.5 px-5 font-semibold rounded-2xl"
            href="/"
          >
            Home
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Connect me to a project</Link>
        </nav>
      </div>
      <div className="space-x-2">
        <Link className="" href="https://github.com/stancobridge">
          Github
        </Link>
        <Link href="https://twitter.com/idevosm" target="_blank">
          Twitter
        </Link>
      </div>
    </div>
  );
};
