"use client";

import Image from "next/image";
import { CalenderIcon } from "../Assets";

export const BlogPreview = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="py-4">
      <div className="relative h-56 rounded-md">
        <Image
          alt=""
          src={imageUrl}
          fill
          className="rounded-md"
          objectFit="cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-white text-lg py-4">
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
  );
};
