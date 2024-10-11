'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

function getTagline(path: string) {
  if (path === "/") {
    return "";
  }
  // If we are in the blog, return "\'s Blog", etc.
  let clean_path = path.split("/")[1];
  return "\'s " + clean_path;
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mt-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}{getTagline(pathname)}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-2 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 hover:translate-y-0.5 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
      <hr className="mt-2 shadow"/>
    </nav>
  );
}
