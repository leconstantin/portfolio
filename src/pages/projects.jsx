import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section>
      <div className="pt-14 sm:pt-18">
        <div className="max-w-2xl px-1">
          <h1 class="text-4xl font-bold font-roboto  tracking-tight text-zinc-800 sm:text-5xl">
            Things I've made trying to put my dent in the universe.
          </h1>
          <p class="mt-6 text-base font-roboto text-zinc-600">
            I've worked on tons of little projects over the years but these are
            the ones that I'm most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </div>
      </div>
      <div className="pt-16">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li className="group relative flex flex-col items-start transition hover:bg-zinc-100/75 hover:shadow-sm py-6 px-2 md:px-6 rounded-lg">
              <div className="flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                <img
                  src={project.logo}
                  alt={project.title}
                  title=""
                  loading="lazy"
                  className="h-8 w-8"
                  width={32}
                  height={32}
                />
              </div>

              <h2 class="pt-2 text-base font-roboto font-medium text-zinc-800 ">
                {project.title}
              </h2>
              <p class="relative z-10 pt-2 text-sm text-zinc-600 font-roboto">
                {" "}
                {project.subtitile}
              </p>
              <p className="relative z-10 pt-6 flex gap-2 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none"
                >
                  <path
                    d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <a class="cursor-pointer" href={project.href}>
                  {project.link}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
