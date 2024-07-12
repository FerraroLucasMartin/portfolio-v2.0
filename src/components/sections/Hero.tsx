import React from "react";
import { bebas } from "@/fonts";

interface HeroProps {
  activeNavTab: string | undefined;
}

const Hero = ({ activeNavTab }: HeroProps) => {
  return (
    <section className='flex flex-col min-w-full'>
      <div>
        <h1
          className={`${bebas.className} w-full md:w-fit drop-shadow-2xl font-semibold text-4xl tracking-widest md:text-7xl`}
        >
          Lucas Ferraro
        </h1>
        <h2
          className={`${bebas.className} w-fit drop-shadow-2xl  text-white-400 text-2xl tracking-widest lg:text-5xl`}
        >
          Full Stack Web Developer
        </h2>
      </div>

      <p
        className={`w-full ${
          activeNavTab ? "hidden md:inline " : ""
        } lg:w-4/5 text-left text-sm lg:text-base pt-4 italic`}
      >
        {/*  "I love coding and solving intricate problems. <br /> It's not just a
        job for me, it's a passion that helps me grow. <br />
        <br />
        I've worked on personal projects, taught others, and even helped
        startups build their tech. <br />
        <br />
        I'm always eager to learn more and push myself further in the IT world." */}
        "Coding enthusiast, problem solver, and lifelong learner. Turning ideas
        into code and challenges into opportunities."
      </p>
    </section>
  );
};

export default Hero;
