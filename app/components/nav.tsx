'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/blog": { name: "Blog", newTab: false },
  "/projects": { name: "Projects", newTab: false },
  "/resume": { name: "Resume", newTab: false },
  "/contact": { name: "Contact", newTab: false },
};

const taglineItems = ["blog", "projects"];

function getTagline(path: string) {
  if (path === "/") {
    return "";
  }
  // If we are in the blog, return "\'s Blog", etc.
  let clean_path = path.split("/")[1];

  if (taglineItems.includes(clean_path)) {
    return "\'s " + clean_path;
  }

  return ""; 
}

function PrettyName({ content }) {
  const chars = [...content];

  return (
    <div className="group">
      {chars.map((c, index) => (
        (c == ' ') ? <span key={index} className="inline-block mr-2" /> : 
          <span 
            key={index} 
            className="transition-transform group-hover:translate-y-1 inline-block"
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            {c}
          </span>
      ))}
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mt-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            <PrettyName content={metaData.title + getTagline(pathname)} />
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-2 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name, newTab }]) => (
            <Link
              key={path}
              href={path}
              target={newTab ? "_blank" : "_self"}
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
