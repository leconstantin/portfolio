import React from "react";
import WorkStation from "../sections/uses/WorkStation";
import Development from "../sections/uses/Development";
import Design from "../sections/uses/Design";
import Productivity from "../sections/uses/Productivity";

const Uses = () => {
  return (
    <div>
      <div className="pt-14 sm:pt-18">
        <div className="max-w-2xl px-1">
          <h1 class="text-4xl font-bold font-roboto  tracking-tight text-zinc-800 sm:text-5xl">
            Software I use, gadgets I love, and other things I recommend.
          </h1>
          <p class="mt-6 text-base font-roboto text-zinc-600">
            I get asked a lot about the things I use to build software, stay
            productive, or buy to fool myself into thinking I'm being productive
            when I'm really just procrastinating. Here's a big list of all of my
            favorite stuff.
          </p>
        </div>
      </div>
      <div className="pt-16">
        <div className="space-y-20">
          <WorkStation />

          <Development />

          <Design />

          <Productivity />
        </div>
      </div>
    </div>
  );
};

export default Uses;
