import React from "react";
import { bebas } from "@/fonts";

const Hero = () => {
  return (
    <section
      className={`shadow-lg border-white bg-indigo-50 bg-opacity-5 backdrop-blur-md border border-opacity-10 rounded-2xl p-6 relative w-fit h-full flex items-start flex-col`}
    >
      <h1
        className={`${bebas.className} drop-shadow-2xl font-semibold text-4xl tracking-widest lg:text-7xl`}
      >
        Lucas Ferraro
      </h1>
      <h2
        className={`${bebas.className} drop-shadow-2xl  text-white-400 text-2xl tracking-widest lg:text-5xl`}
      >
        Full Stack Web Developer
      </h2>
      <p
        className={`w-full lg:w-3/5 text-left  shado text-base lg:text-lg pt-4`}
      >
        Hola esto es un texto descriptivo, diciendo algo de mi, tal ve
        entregando un call to action? CUal deberia ser. Redes sociales? O ver
        proyectos y una flecha para el scroll?
      </p>
    </section>
  );
};

export default Hero;
