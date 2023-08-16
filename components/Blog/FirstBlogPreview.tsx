import Image from "next/image";
import { CalenderIcon } from "../Assets";

export const FirstBlogPreview = () => (
  <section className="flex space-x-8">
    <div className="flex w-[60%] py-4 space-x-4">
      <div className="relative w-[40%] h-56 rounded-md">
        <Image
          alt=""
          src={"/images/blogs/first-blog.jpeg"}
          fill
          className="rounded-md"
          objectFit="cover"
        />
      </div>
      <div className="w-[60%]">
        <h4 className="font-semibold text-white text-2xl pb-4">
          Disguise Driven Testing: Jest Mocks In Depth — Part 2
        </h4>
        <p>
          Building — and adopting — a component library in the context of a
          vibrant business is no easy feat. Here are a few things we’ve learned.
        </p>
        <p className="pt-4 flex items-center">
          <CalenderIcon />
          <span className="px-2">Apr 22nd, 2023</span>
          <span>8min read</span>
        </p>
      </div>
    </div>
    <div className="flex-1 bg-[#161b25] p-4">
      <div>
        <p className="my-4">
          <strong>Subscribe</strong> to my mailing list and be the first to know
          when new articles come out!
        </p>
        <p>One-click unsubscribe, anytime.</p>
        <input
          type="email"
          required
          placeholder="example@stanleydev.com"
          className="bg-darkPrimary w-full border-2 border-lightGray p-2 px-4 outline-none rounded-md placeholder:text-lightGray/50 mt-4"
        />
        <input
          type="button"
          className="bg-lightGray text-md font-bold w-full border-2 border-lightGray p-2 px-4 outline-none rounded-md text-darkPrimary mt-4"
          value={"SUBSCRIBE"}
        />
      </div>
    </div>
  </section>
);
