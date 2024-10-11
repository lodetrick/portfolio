export interface Project {
  title: string;
  month: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Rust Crate - Competitive Programming (comp-io)",
    month: "Oct",
    year: 2024,
    description:
    "Published a Rust library to make input/output operations simpler for competitive programming.",
    url: "/blog/new-beginnings",
  },
  {
    title: "Project Two",
    month: "Oct",
    year: 2022,
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Three",
    month: "Oct",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];
