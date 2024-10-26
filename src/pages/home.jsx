import React from "react";
import { articles, images, skills, socialmedia, works } from "../data";
import Work from "../sections/home/work";
import TicTacToe from "../sections/home/tictacToe";

const Home = () => {
  return (
    <>
      <div className="pt-12">
        <div className="backdrop-blur rounded-full">
          <img
            src="/images/me.jpeg"
            alt=""
            title="Muhirwe Leo Constantin"
            loading="lazy"
            className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover bg-zinc-300"
          />
        </div>
      </div>
      <article>
        <div className="max-w-2xl">
          <div className="pt-12 pb-9">
            <h1 className="text-4xl font-roboto font-semibold text-zinc-800 sm:text-3xl flex flex-col justify-center gap-2">
              👋 Hello! I'm Constantin,{" "}
              <mark className="text-zinc-700 bg-teal-200 w-80">
                FrontEnd developer
              </mark>{" "}
              <span className="text-lg text-zinc-700 ">
                based in Kigali , Rwanda.
              </span>
            </h1>
            <p className="pt-6 font-roboto text-base text-zinc-600">
              I love building tools that are user-friendly, simple and
              delightful. I was student at coursera learning FrontEnd
              Development course provided by meta where i have gained different
              modern skills about FrontEnd development.
            </p>
            <p className="py-6 font-roboto text-base text-zinc-600 ">
              I'm currently looking for a new role as developer.
              <mark id="hire" className="bg-teal-200">
                Hire me?
              </mark>
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            {socialmedia.map((item) => (
              <div
                className="bg-zinc-100 rounded-full h-8 w-8 flex items-center justify-center"
                key={item.id}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  title={item.alt}
                  loading="lazy"
                  className="h-5 w-5"
                />
              </div>
            ))}
          </div>

          {/* <div className="bg-teal-100 hover:bg-teal-300 inline-block p-1 rounded-full h-8 w-8 ">
            <img
              src="/icons/fb.svg"
              alt="facebook"
              title="facebook"
              loading="lazy"
              className="h-6 w-6"
            />
          </div>
          <div className="bg-teal-100 hover:bg-teal-300 inline-block p-1 rounded-full h-8 w-8 ">
            <img
              src="/icons/fb.svg"
              alt="facebook"
              title="facebook"
              loading="lazy"
              className="h-6 w-6"
            />
          </div> */}
        </div>
      </article>
      <div className="py-10">
        <div>
          <p className="font-roboto text-teal-400 text-lg">
            Development Proficiencies
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5">
          {skills.map((item) => (
            <div className="group">
              <a
                key={item.id}
                href={item.link}
                target="blank"
                className="bg-white py-3 shadow-lg flex flex-col items-center justify-center gap-2 rounded-xl ring-1 ring-zinc-100  group-hover:ring-0 group-hover:bg-teal-200 cursor-pointer"
              >
                <div className="bg-zinc-100  p-2 rounded-full group-hover:bg-white">
                  <img
                    src={item.url}
                    alt={item.label}
                    loading="lazy"
                    title={item.label}
                  />
                </div>
                <div>
                  <h3 className="text-zinc-500 font-medium font-roboto group-hover:text-white">
                    {item.label}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mt-16 sm:mt-6 ">
          <p class="text-base text-zinc-600 mb-20">
            Some of the side projects i'm currently working on:
          </p>

          <div className="-my-4 flex justify-center gap-5  py-4 sm:gap-8">
            {images.map((image) => (
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="py-16 sm:mt-20 ">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10">
            <div>
              <TicTacToe />
            </div>
            <Work />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
