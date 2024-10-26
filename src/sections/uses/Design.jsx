import React from "react";
import { design } from "../../data";

const Design = () => {
  return (
    <section className="md:border-l md:border-zinc-100  md:pl-6">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="text-sm font-semibold text-zinc-800">Design</h2>
        <div className="md:col-span-3">
          <ul className="space-y-16">
            {design.map((item) => (
              <li className="flex flex-col items-start">
                <h3 class="text-base font-semibold tracking-tight text-zinc-800 ">
                  {item.title}
                </h3>
                <p class="relative z-10 mt-2 text-sm text-zinc-600 ">
                  {item.subtitile}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Design;
