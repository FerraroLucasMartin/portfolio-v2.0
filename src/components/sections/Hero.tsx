import React from "react";
import { Major_Mono_Display } from "next/font/google";

const MajorMono = Major_Mono_Display({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section className={` relative w-full h-full flex items-start flex-col`}>
      <h1
        className={`${MajorMono.className} text-white-400 text-9xl opacity-40 hover:animate-pulse`}
      >
        Lucas Ferraro
      </h1>
      <h2
        className={`${MajorMono.className} pl-4 text-white-400 text-6xl opacity-40 hover:animate-pulse`}
      >
        Full Stack Web Developer
      </h2>
      <p
        className={` w-60 text-left font-semibold opacity-70 text-lg pl-6 pt-4`}
      >
        Hola esto es un texto descriptivo, diciendo algo de mi, tal ve
        entregando un call to action? CUal deberia ser. Redes sociales? O ver
        proyectos y una flecha para el scroll?
      </p>
    </section>
  );
};

export default Hero;
