"use client";

import Link from "next/link";
import { useState } from "react";
import { NavBarIcon } from "../Assets/Icons/NavBarIcon";

export const HeaderNav = () => {
  const [navBarState, setNavBarState] = useState<boolean>(false)
  const clickHandler = (e:any) => {
    e.preventDefault()
    setNavBarState((prev) => !prev)
  }
  return (
    <>
      {" "}
      <div className="mm:flex justify-between items-center my-4 mt-8 hidden">
        <div className="lg:w-48 w-24 h-7 bg-lightGray rounded-xl"></div>
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
      {/* Nav bar for mobile */}
      <div className="mm:hidden block bg-darkPrimary">
        <div className="flex justify-between items-center my-4 mt-4">
          <div className="w-20 h-7 bg-lightGray rounded-xl"></div>
          <button onClick={clickHandler} className="text-lightGray">
            <NavBarIcon />
          </button>
        </div>
        {navBarState && (
          <div className="flex justify-center items-center bg-inherit h-full fixed top-0 left-0 right-0 z-10">
            <button onClick={clickHandler} className="absolute top-3 right-5 sm:right-12">
              <NavBarIcon />
            </button>
            <nav className="space-y-5 font-semibold flex flex-col mt-3">
              <Link className="border-b-2 border-lightGray" href="/">
                Home
              </Link>
              <Link href="/blog">Blog</Link>
              <Link href="/">Projects</Link>
              <Link href="/">Connect me to a project</Link>

              <div className="space-y-4 flex flex-col">
                <Link
                  className=""
                  href="https://github.com/stancobridge"
                  target="_blank"
                >
                  Github
                </Link>
                <Link href="https://twitter.com/idevosm" target="_blank">
                  Twitter
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};
