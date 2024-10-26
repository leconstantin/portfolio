import React from "react";
import { works } from "../../data";

const Work = () => {
  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24">
      <form className="rounded-2xl border border-zinc-100 p-6">
        <h2 class="flex gap-2 items-center text-sm font-semibold text-zinc-900 ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="h-6 w-6 flex-none"
          >
            <path
              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            ></path>
            <path
              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
              class="stroke-zinc-400 dark:stroke-zinc-500"
            ></path>
          </svg>
          <span class="font-roboto">Stay up to date</span>
        </h2>
        <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-roboto">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>

        <div class="pt-6 flex">
          <input
            placeholder="Email address"
            aria-label="Email address"
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3  shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm "
            type="email"
          />
          <button
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70  ml-4 flex-none"
            type="submit"
          >
            Join
          </button>
        </div>
      </form>

      <div className="rounded-2xl border border-zinc-100 p-6">
        <h2 class="flex items-center gap-2 text-sm font-semibold text-zinc-900 ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="h-6 w-6 flex-none"
          >
            <path
              d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            ></path>
            <path
              d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
              class="stroke-zinc-400 dark:stroke-zinc-500"
            ></path>
          </svg>
          <span className="font-roboto font-medium text-lg text-teal-400">
            Work
          </span>
        </h2>

        <ol className="mt-10 space-y-10">
          {works.map((work) => (
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 font-bold">
                {work.logo}
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">{work.Place}</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900">
                  {work.Place}
                </dd>
                <dt className="sr-only">{work.Role}</dt>
                <dd className="text-xs text-zinc-500">{work.Role}</dd>
                <dt className="sr-only">{work.Date}</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 "
                  aria-label="2019 until Present"
                >
                  <time datetime={work.Date}>{work.Date}</time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <a
          href=""
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 
                     mt-6 w-full"
        >
          <img src="icons/download.svg" alt="" className="opacity-65 h-5" />
          Download cv
        </a>
      </div>
    </div>
  );
};

export default Work;
