"use client";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <>
    <section className="flex py-10 mt-8 justify-between">
      <div className="w-6/12">
        <div className="">
          <h1 className="text-5xl font-extrabold mt-8">
            Hi, I&apos;m Okechukwu Stanley{" "}
          </h1>
          <h4 className="text-2xl mt-3 font-light">
            I build Digital products through Years of Software <br />{" "}
            Engineering Mastery
            {/* , I love building web and Mobile Apps that Transcend
          Imagination */}
          </h4>
        </div>
        <div className="p-4 text-justify mt-14 border border-lightGray text-lg font-light rounded-md">
          In 2017 I started a startup
          <Link href="https://osmaxin.com">
            <strong> Osmaxin Developers</strong>{" "}
          </Link>
          where we work on clients projects, tutor new developers, engage them
          in real life projects as interns. In those times, I&apos;ve gained
          extensive experience collaborating with junior developers and
          sometimes due to knowledge gap between the seniors and junior/interns
          it can be frustrating. In my free time I engage the junior developers
          in knowledge sharing sessions, showing them patterns and best
          practices in building software. Am dedicating this website in sharing
          important knowledge that will help junior developers become in
          becoming better Senior developers.
        </div>
      </div>
      <div className="relative w-4/12 grayscale-0">
        <Image
          src={"/images/stanley-gray-2.png"}
          className="w-full h-full rounded-lg backdrop-grayscale-1"
          fill
          objectFit="cover"
          alt=""
        />
      </div>
    </section>
    <div className="mt-8">
      <div className="flex items-center">
        <div className="w-16 h-0.5 relative left-1 bg-lightGray/50"></div>
        <div className="flex items-center">
          <span className="text-4xl font-bold">Brands</span>
          <span className="px-1"> I have worked with</span>
        </div>
        <div className="flex-1 h-0.5 relative left-1 bg-lightGray/50"></div>
      </div>
      <div className="flex justify-center items-center space-x-8">
        <div className="relative w-36 h-20 rounded-md">
          <Image
            alt=""
            src={"/images/google.png"}
            className="rounded-lg"
            fill
          />
        </div>
        <div className="relative w-52 h-16 rounded-md">
          <Image alt="" src={"/images/dhl.png"} className="rounded-lg" fill />
        </div>

        <div className="relative w-36 h-20 rounded-md">
          <Image
            alt=""
            src={"/images/samsung.png"}
            className="rounded-lg"
            fill
          />
        </div>
      </div>
    </div>
  </>
);
