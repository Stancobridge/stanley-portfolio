import Link from "next/link";
import { ChevronRight } from "../../Assets";

export const BlogBreadcrumbs = () => (
  <section className="py-4">
    <nav className="flex items-center space-x-1">
      <Link className="text-lightGray/50" href={"/"}>
        Home
      </Link>
      <span>
        <ChevronRight customClass="w-4 h-4" />
      </span>
      <Link className="text-lightGray/50" href={"/"}>
        Blogs
      </Link>
      <span>
        <ChevronRight customClass="w-4 h-4" />
      </span>
      <Link className="" href={""}>
        Disguise Driven Testing: Jest Mocks In Depth — Part 2
      </Link>
    </nav>
  </section>
);
