import React from "react";
import { contents, socialmedia } from "../data";
import Follow from "../sections/about/follow";

const About = () => {
  return (
    <div className="py-20 mx-auto max-w-2xl lg:max-w-5xl">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto_1fr]">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src="/images/me.jpeg"
              loading="lazy"
              width="800"
              height="800"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          {contents.map((side) => (
            <div>
              <h1 className="text-4xl font-roboto font-medium tracking-tight text-zinc-800 sm:text-5xl">
                {side.title}
              </h1>

              <div className="mt-6 space-y-7 text-base text-zinc-600 font-roboto">
                <p>{side.textA}</p>

                <p>{side.textB}</p>

                <p>{side.textC}</p>

                <p>{side.textD}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:pl-20">
          <Follow />
        </div>
      </div>
    </div>
  );
};

export default About;
